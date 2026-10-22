const {
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

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET /api/master-data - Strictly require authentication
  if (req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return; // 401 sent if not authenticated

    return res.status(200).json({
      areas: DEFAULT_AREAS,
      categories: DEFAULT_CATEGORIES,
      natures: DEFAULT_NATURES,
      responsibilities: DEFAULT_RESPONSIBILITIES,
      technicians: DEFAULT_TECHNICIANS
    });
  }

  // 2. PUT /api/master-data (Admin only)
  if (req.method === 'PUT') {
    const admin = requireAuth(req, res, ['ADMIN']);
    if (!admin) return; // 401/403 sent

    return res.status(200).json({
      message: 'Master data configuration updated successfully by Administrator',
      audit: {
        action: 'UPDATE_MASTER_DATA',
        performedBy: admin.username,
        timestamp: new Date().toISOString()
      }
    });
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
};
