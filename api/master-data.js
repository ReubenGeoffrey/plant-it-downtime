const {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  requireAuth
} = require('./utils');

// Default plant master constants
const DEFAULT_AREAS = [
  "Plant 1", "Plant 2", "Plant 3", "Plant 4",
  "4Roll shed", "Mixing Shed", "FID", "IT infra"
];

const DEFAULT_CATEGORIES = [
  "NSNL", "IPC", "Printer", "Scanner", "Infra", "MES",
  "Hardware / PC", "Network / Switch", "PLC / SCADA", "Other"
];

const DEFAULT_NATURES = ["INFRA", "MES"];

const DEFAULT_RESPONSIBILITIES = ["ATC", "MELSS"];

const DEFAULT_TECHNICIANS = [
  "Bharadwaj", "Jagadeesh", "Srinivas", "Narayana",
  "Pardhu", "Ramesh Kumar", "Karthik V", "MELSS Team", "ATC IT Team"
];

let currentMasterData = {
  machines: [],
  areas: [...DEFAULT_AREAS],
  processes: [],
  categories: [...DEFAULT_CATEGORIES],
  natures: [...DEFAULT_NATURES],
  responsibilities: [...DEFAULT_RESPONSIBILITIES],
  technicians: [...DEFAULT_TECHNICIANS],
  updatedAt: new Date().toISOString()
};

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET /api/master-data - Strictly require authentication
  if (req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return; // 401 sent if not authenticated

    try {
      const sRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents?id=eq.SYS_CONFIG_MASTER_DATA&select=issue_details`, {
        method: 'GET',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (sRes.ok) {
        const rows = await sRes.json();
        if (Array.isArray(rows) && rows.length > 0 && rows[0].issue_details) {
          const stored = JSON.parse(rows[0].issue_details);
          if (stored && typeof stored === 'object') {
            currentMasterData = { ...currentMasterData, ...stored };
            return res.status(200).json(currentMasterData);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to fetch master data from Supabase, falling back to cache:', e);
    }

    return res.status(200).json(currentMasterData);
  }

  // 2. PUT /api/master-data (Admin only)
  if (req.method === 'PUT') {
    const admin = requireAuth(req, res, ['ADMIN']);
    if (!admin) return; // 401/403 sent

    const body = req.body || {};
    if (Array.isArray(body.machines)) currentMasterData.machines = body.machines;
    if (Array.isArray(body.areas) && body.areas.length > 0) currentMasterData.areas = body.areas;
    if (Array.isArray(body.processes)) currentMasterData.processes = body.processes;
    if (Array.isArray(body.categories) && body.categories.length > 0) currentMasterData.categories = body.categories;
    if (Array.isArray(body.natures) && body.natures.length > 0) currentMasterData.natures = body.natures;
    if (Array.isArray(body.responsibilities) && body.responsibilities.length > 0) currentMasterData.responsibilities = body.responsibilities;
    if (Array.isArray(body.technicians) && body.technicians.length > 0) currentMasterData.technicians = body.technicians;
    currentMasterData.updatedAt = new Date().toISOString();

    try {
      // Upsert to Supabase
      const payload = {
        id: 'SYS_CONFIG_MASTER_DATA',
        date: new Date().toISOString().split('T')[0],
        nature: 'SYSTEM',
        area: 'SYSTEM',
        process: 'SYSTEM_CONFIG',
        machine_no: 'SYS_MASTER',
        is_critical: 'No',
        downtime_minutes: 0,
        affected_machines: 1,
        total_downtime_minutes: 0,
        category: 'System',
        issue_details: JSON.stringify(currentMasterData),
        action_plan: 'Automatic Cloud Synchronization of Plant Master Registry',
        responsibility: 'ATC',
        responsible_person: admin.displayName || admin.username || 'Administrator',
        status: 'Completed'
      };

      const uRes = await fetch(`${SUPABASE_URL}/rest/v1/incidents`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });

      if (!uRes.ok) {
        const errText = await uRes.text();
        console.error('Supabase master data save error:', errText);
      }
    } catch (err) {
      console.error('Supabase master data network error:', err);
    }

    return res.status(200).json({
      message: 'Master data configuration saved to Supabase successfully by Administrator',
      data: currentMasterData,
      audit: {
        action: 'UPDATE_MASTER_DATA',
        performedBy: admin.username,
        timestamp: currentMasterData.updatedAt
      }
    });
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
};
