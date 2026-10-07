const {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  requireAuth,
  validateIncident
} = require('./utils');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET /api/incidents (List / Filter incidents)
  if (req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return; // 401 sent

    try {
      const { month, year, startDate, endDate, area, status } = req.query || {};

      let query = `${SUPABASE_URL}/rest/v1/incidents?select=*&order=issueDate.desc,id.desc`;
      if (startDate) query += `&issueDate=gte.${encodeURIComponent(startDate)}`;
      if (endDate) query += `&issueDate=lte.${encodeURIComponent(endDate)}`;
      if (month && month !== 'ALL' && !startDate && !endDate) query += `&issueDate=like.${encodeURIComponent(month)}*`;
      if (area && area !== 'ALL') query += `&area=eq.${encodeURIComponent(area)}`;
      if (status && status !== 'ALL') query += `&status=eq.${encodeURIComponent(status)}`;

      const sRes = await fetch(query, {
        method: 'GET',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });

      if (!sRes.ok) {
        const errText = await sRes.text();
        return res.status(500).json({ error: 'Failed to fetch incidents', details: errText });
      }

      const incidents = await sRes.json();
      return res.status(200).json({ count: incidents.length, data: incidents });
    } catch (err) {
      return res.status(500).json({ error: 'Database fetch failed', message: err.message });
    }
  }

  // 2. POST /api/incidents (Create incident with server-side validation)
  if (req.method === 'POST') {
    const user = requireAuth(req, res, ['OPERATOR', 'SUPERVISOR', 'ADMIN']);
    if (!user) return; // 401/403 sent

    try {
      const body = req.body || {};

      // Handle bulk import
      if (Array.isArray(body.records)) {
        if (!['SUPERVISOR', 'ADMIN'].includes((user.role || '').toUpperCase())) {
          return res.status(403).json({ error: 'Only Supervisors and Administrators can perform bulk imports' });
        }

        const validRecords = [];
        const invalidRecords = [];

        body.records.forEach((r, idx) => {
          const val = validateIncident(r);
          if (val.isValid) {
            validRecords.push(val.cleaned);
          } else {
            invalidRecords.push({ index: idx, id: r.id, errors: val.errors });
          }
        });

        if (validRecords.length === 0) {
          return res.status(400).json({ error: 'No valid records to import', failures: invalidRecords });
        }

        const upsertUrl = `${SUPABASE_URL}/rest/v1/incidents?on_conflict=id`;
        const uRes = await fetch(upsertUrl, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=representation'
          },
          body: JSON.stringify(validRecords)
        });

        if (!uRes.ok) {
          const errText = await uRes.text();
          return res.status(500).json({ error: 'Failed to persist bulk records', details: errText });
        }

        const inserted = await uRes.json();
        return res.status(200).json({
          imported: inserted.length,
          skipped: invalidRecords.length,
          failures: invalidRecords
        });
      }

      // Single Record Submission
      const validation = validateIncident(body);
      if (!validation.isValid) {
        return res.status(400).json({
          error: 'Validation failed',
          validationErrors: validation.errors
        });
      }

      const rec = validation.cleaned;

      // Duplicate prevention: check for identical record submitted recently
      const dupeQuery = `${SUPABASE_URL}/rest/v1/incidents?issueDate=eq.${encodeURIComponent(rec.issueDate)}&machineNo=eq.${encodeURIComponent(rec.machineNo)}&downtimeMinutes=eq.${encodeURIComponent(rec.downtimeMinutes)}&limit=1`;
      const dRes = await fetch(dupeQuery, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (dRes.ok) {
        const existing = await dRes.json();
        if (Array.isArray(existing) && existing.length > 0) {
          const ex = existing[0];
          // If details match closely, reject as duplicate submission
          if ((ex.issueDetails || '').trim().toLowerCase() === (rec.issueDetails || '').trim().toLowerCase()) {
            return res.status(409).json({
              error: 'Duplicate record detected: an identical incident is already recorded for this machine and date.',
              existingId: ex.id
            });
          }
        }
      }

      // Generate ID if missing
      if (!rec.id) {
        const y = rec.issueDate ? rec.issueDate.substring(0, 4) : new Date().getFullYear();
        const rand = Math.floor(100 + Math.random() * 900);
        rec.id = `YOKO-DT-${y}-${rand}`;
      }

      rec.createdAt = new Date().toISOString();
      rec.createdBy = user.username;

      const insRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(rec)
      });

      if (!insRes.ok) {
        const errText = await insRes.text();
        return res.status(500).json({ error: 'Database insertion failed', details: errText });
      }

      const created = await insRes.json();
      return res.status(201).json({
        message: 'Incident record saved successfully',
        data: created[0]
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to create incident', message: err.message });
    }
  }

  // 3. PUT /api/incidents (Update incident - Supervisor and Admin only)
  if (req.method === 'PUT') {
    const user = requireAuth(req, res, ['SUPERVISOR', 'ADMIN']);
    if (!user) return; // 401/403 sent

    try {
      const body = req.body || {};
      const id = String(body.id || req.query.id || '').trim();

      if (!id) {
        return res.status(400).json({ error: 'Incident ID is required for update' });
      }

      const validation = validateIncident(body);
      if (!validation.isValid) {
        return res.status(400).json({ error: 'Validation failed', validationErrors: validation.errors });
      }

      const patch = {
        ...validation.cleaned,
        updatedAt: new Date().toISOString(),
        updatedBy: user.username
      };
      delete patch.id; // Don't patch primary key

      const uRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(patch)
      });

      if (!uRes.ok) {
        const errText = await uRes.text();
        return res.status(500).json({ error: 'Database update failed', details: errText });
      }

      const updated = await uRes.json();
      if (!Array.isArray(updated) || updated.length === 0) {
        return res.status(404).json({ error: `Incident ${id} not found` });
      }

      return res.status(200).json({ message: 'Incident updated successfully', data: updated[0] });
    } catch (err) {
      return res.status(500).json({ error: 'Update failed', message: err.message });
    }
  }

  // 4. DELETE /api/incidents (Delete incident - Admin only)
  if (req.method === 'DELETE') {
    const adminUser = requireAuth(req, res, ['ADMIN']);
    if (!adminUser) return; // 401/403 sent

    try {
      const { id } = req.query || {};
      const { action } = req.body || {};

      // Handle Clear All
      if (action === 'clear_all') {
        const cRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=neq.placeholder`, {
          method: 'DELETE',
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });
        if (!cRes.ok) {
          const errText = await cRes.text();
          return res.status(500).json({ error: 'Failed to clear incidents in database', details: errText });
        }
        return res.status(200).json({ message: 'All incident logs cleared successfully by Admin' });
      }

      if (!id) {
        return res.status(400).json({ error: 'Incident ID is required for deletion' });
      }

      const dRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=eq.${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });

      if (!dRes.ok) {
        const errText = await dRes.text();
        return res.status(500).json({ error: 'Failed to delete record', details: errText });
      }

      return res.status(200).json({ message: `Incident ${id} permanently deleted` });
    } catch (err) {
      return res.status(500).json({ error: 'Deletion failed', message: err.message });
    }
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
};
