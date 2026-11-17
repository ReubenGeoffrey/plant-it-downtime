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

let currentMasterData = {
  areas: [...DEFAULT_AREAS],
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

    return res.status(200).json(currentMasterData);
  }

  // 2. PUT /api/master-data (Admin only)
  if (req.method === 'PUT') {
    const admin = requireAuth(req, res, ['ADMIN']);
    if (!admin) return; // 401/403 sent

    const body = req.body || {};
    if (Array.isArray(body.areas) && body.areas.length > 0) currentMasterData.areas = body.areas;
    if (Array.isArray(body.categories) && body.categories.length > 0) currentMasterData.categories = body.categories;
    if (Array.isArray(body.natures) && body.natures.length > 0) currentMasterData.natures = body.natures;
    if (Array.isArray(body.responsibilities) && body.responsibilities.length > 0) currentMasterData.responsibilities = body.responsibilities;
    if (Array.isArray(body.technicians) && body.technicians.length > 0) currentMasterData.technicians = body.technicians;
    currentMasterData.updatedAt = new Date().toISOString();

    return res.status(200).json({
      message: 'Master data configuration updated successfully by Administrator',
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
