const {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  requireAuth,
  validateIncident,
  mapRowToRecord,
  mapRecordToRow
} = require('./utils');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET /api/incidents (List / Filter incidents - Authenticated)
  if (req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return; // 401 sent

    try {
      const { month, year, startDate, endDate, area, status } = req.query || {};

      let query = `${SUPABASE_URL}/rest/v1/incidents?select=*&order=date.desc,id.desc`;
      if (startDate) query += `&date=gte.${encodeURIComponent(startDate)}`;
      if (endDate) query += `&date=lte.${encodeURIComponent(endDate)}`;
      if (month && month !== 'ALL' && !startDate && !endDate) query += `&date=like.${encodeURIComponent(month)}*`;
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

      const rows = await sRes.json();
      const records = (Array.isArray(rows) ? rows : []).map(mapRowToRecord);

      return res.status(200).json({ count: records.length, data: records });
    } catch (err) {
      return res.status(500).json({ error: 'Database fetch failed', message: err.message });
    }
  }

  // 2. POST /api/incidents (Create incident with server-side validation & mapping)
  if (req.method === 'POST') {
    const user = requireAuth(req, res, ['OPERATOR', 'SUPERVISOR', 'ADMIN']);
    if (!user) return; // 401/403 sent

    try {
      const body = req.body || {};

      // A. Bulk Import Handling (Append or Replace)
      if (Array.isArray(body.records)) {
        if (!['SUPERVISOR', 'ADMIN'].includes((user.role || '').toUpperCase())) {
          return res.status(403).json({ error: 'Only Supervisors and Administrators can perform bulk imports' });
        }

        const mode = String(body.mode || 'append').toLowerCase();
        if (mode === 'replace' && user.role !== 'ADMIN') {
          return res.status(403).json({ error: 'Only Administrators can perform replace imports that overwrite existing logs' });
        }

        const validRecords = [];
        const invalidRecords = [];

        body.records.forEach((r, idx) => {
          r.createdBy = r.createdBy || user.username;
          r.createdByName = r.createdByName || user.displayName || user.username;
          r.updatedBy = user.username;
          r.actorName = user.displayName || user.username;
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

        // Mode: REPLACE - Atomic snapshot, clear, insert with rollback on error
        if (mode === 'replace') {
          // 1. Fetch current snapshot for rollback protection
          const snapRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?select=*`, {
            headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
          });
          const currentSnapshot = snapRes.ok ? await snapRes.json() : [];

          // 2. Clear current records
          const delRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=neq.___NEVER___`, {
            method: 'DELETE',
            headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
          });

          if (!delRes.ok) {
            const errText = await delRes.text();
            return res.status(500).json({ error: 'Failed to clear current records for replace import', details: errText });
          }

          // 3. Map to snake_case rows and insert
          const snakeRows = validRecords.map(mapRecordToRow);
          const insRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=representation'
            },
            body: JSON.stringify(snakeRows)
          });

          if (!insRes.ok) {
            // Rollback snapshot
            if (currentSnapshot.length > 0) {
              await fetch(`${SUPABASE_URL}/rest/v1/incidents`, {
                method: 'POST',
                headers: {
                  'apikey': SUPABASE_KEY,
                  'Authorization': `Bearer ${SUPABASE_KEY}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentSnapshot)
              });
            }
            const errText = await insRes.text();
            return res.status(500).json({ error: 'Replace import failed during insertion; rolled back to previous snapshot', details: errText });
          }

          const insertedRows = await insRes.json();
          return res.status(200).json({
            mode: 'replace',
            imported: insertedRows.length,
            skipped: invalidRecords.length,
            failures: invalidRecords,
            audit: {
              action: 'REPLACE_IMPORT',
              performedBy: user.username,
              timestamp: new Date().toISOString()
            }
          });
        }

        // Mode: APPEND - Upsert rows
        const snakeRows = validRecords.map(mapRecordToRow);
        const upsertUrl = `${SUPABASE_URL}/rest/v1/incidents?on_conflict=id`;
        const uRes = await fetch(upsertUrl, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=representation'
          },
          body: JSON.stringify(snakeRows)
        });

        if (!uRes.ok) {
          const errText = await uRes.text();
          return res.status(500).json({ error: 'Failed to persist bulk records', details: errText });
        }

        const inserted = await uRes.json();
        return res.status(200).json({
          mode: 'append',
          imported: inserted.length,
          skipped: invalidRecords.length,
          failures: invalidRecords
        });
      }

      // Single Record Submission
      body.createdBy = body.createdBy || user.username;
      body.createdByName = body.createdByName || user.displayName || user.username;
      body.updatedBy = user.username;
      body.actorName = user.displayName || user.username;

      const validation = validateIncident(body);
      if (!validation.isValid) {
        return res.status(400).json({
          error: 'Validation failed',
          validationErrors: validation.errors
        });
      }

      const rec = validation.cleaned;

      // Duplicate prevention: check for identical record submitted recently
      const dupeQuery = `${SUPABASE_URL}/rest/v1/incidents?date=eq.${encodeURIComponent(rec.issueDate)}&machine_no=eq.${encodeURIComponent(rec.machineNo)}&downtime_minutes=eq.${encodeURIComponent(rec.downtimeMinutes)}&limit=1`;
      const dRes = await fetch(dupeQuery, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (dRes.ok) {
        const existing = await dRes.json();
        if (Array.isArray(existing) && existing.length > 0) {
          const ex = existing[0];
          if ((ex.issue_details || '').trim().toLowerCase() === (rec.issueDetails || '').trim().toLowerCase()) {
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

      const dbRow = mapRecordToRow(rec);

      const insRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(dbRow)
      });

      if (!insRes.ok) {
        const errText = await insRes.text();
        return res.status(500).json({ error: 'Database insertion failed', details: errText });
      }

      const created = await insRes.json();
      return res.status(201).json({
        message: 'Incident record saved successfully',
        data: mapRowToRecord(created[0])
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to create incident', message: err.message });
    }
  }

  // 3. PUT /api/incidents (Update incident - Admin only)
  if (req.method === 'PUT') {
    const user = requireAuth(req, res, ['ADMIN']);
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

      const dbRow = mapRecordToRow(validation.cleaned);
      delete dbRow.id; // Don't patch primary key

      const uRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(dbRow)
      });

      if (!uRes.ok) {
        const errText = await uRes.text();
        return res.status(500).json({ error: 'Database update failed', details: errText });
      }

      const updated = await uRes.json();
      if (!Array.isArray(updated) || updated.length === 0) {
        return res.status(404).json({ error: `Incident ${id} not found` });
      }

      return res.status(200).json({
        message: 'Incident updated successfully',
        data: mapRowToRecord(updated[0])
      });
    } catch (err) {
      return res.status(500).json({ error: 'Update failed', message: err.message });
    }
  }

  // 4. DELETE /api/incidents (Delete incident - Admin only)
  if (req.method === 'DELETE') {
    const adminUser = requireAuth(req, res, ['ADMIN']);
    if (!adminUser) return; // 401/403 sent

    try {
      const query = req.query || {};
      const body = req.body || {};
      const id = query.id || body.id;
      const action = body.action || query.action;

      // Handle Clear All / Empty Logs with Strict Confirmation Phrase
      if (action === 'clear_all') {
        const requiredPhrase1 = 'CONFIRM RESET';
        const requiredPhrase2 = 'PERMANENTLY DELETE ALL LOGS';
        const userPhrase = String(body.confirmPhrase || query.confirmPhrase || '').trim();

        if (userPhrase !== requiredPhrase1 && userPhrase !== requiredPhrase2) {
          return res.status(400).json({
            error: `Confirmation phrase required to empty all logs. You must provide confirmPhrase: "${requiredPhrase1}"`
          });
        }

        const cRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=neq.___NEVER___`, {
          method: 'DELETE',
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });

        if (!cRes.ok) {
          const errText = await cRes.text();
          return res.status(500).json({ error: 'Failed to clear incidents in database', details: errText });
        }

        return res.status(200).json({
          message: 'All incident logs cleared successfully by Admin',
          auditEvent: {
            action: 'EMPTY_ALL_LOGS',
            performedBy: adminUser.username,
            actorName: adminUser.displayName || adminUser.username,
            timestamp: new Date().toISOString()
          }
        });
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

      return res.status(200).json({
        message: `Incident ${id} permanently deleted`,
        auditEvent: {
          action: 'DELETE_INCIDENT',
          id,
          performedBy: adminUser.username,
          timestamp: new Date().toISOString()
        }
      });
    } catch (err) {
      return res.status(500).json({ error: 'Deletion failed', message: err.message });
    }
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
};
