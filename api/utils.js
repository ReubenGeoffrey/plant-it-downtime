const crypto = require('crypto');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://mrzlgrkkqdijoruchpgb.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yemxncmtrcWRpam9ydWNocGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NzUwOTksImV4cCI6MjEwNjU1MTA5OX0.3gPv_cHRDCOgfC27XLIGaiTtH9p7QctqBedZz2zXdwM';
const JWT_SECRET = process.env.JWT_SECRET || 'yokohama-plant-it-secure-token-2026';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function sha256(text) {
  return crypto.createHash('sha256').update(String(text || '')).digest('hex');
}

function generateToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + (24 * 60 * 60); // 24 hours
  const body = Buffer.from(JSON.stringify({ ...payload, exp })).toString('base64url');
  const signature = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${signature}`;
}

function verifyToken(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, signature] = parts;
  const expectedSig = crypto.createHmac('sha256', JWT_SECRET).update(`${header}.${body}`).digest('base64url');
  if (signature !== expectedSig) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

function requireAuth(req, res, allowedRoles = null) {
  const authHeader = req.headers.authorization || req.headers.Authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader.trim();
  const user = verifyToken(token);

  if (!user) {
    res.status(401).json({ error: 'Unauthenticated: Valid session token required' });
    return null;
  }

  if (allowedRoles && Array.isArray(allowedRoles) && allowedRoles.length > 0) {
    const roleUpper = (user.role || '').toUpperCase();
    const hasRole = allowedRoles.some(r => r.toUpperCase() === roleUpper);
    if (!hasRole) {
      res.status(403).json({ error: `Unauthorized: Role '${user.role}' lacks permission for this operation` });
      return null;
    }
  }

  return user;
}

// Authoritative Availability Calculation
function calculateAuthoritativeAvailability(operatingMinutes, downtimeMinutes, hasOperatingData) {
  if (!hasOperatingData || !operatingMinutes || operatingMinutes <= 0) {
    return {
      availabilityPct: null,
      display: 'N/A',
      status: 'No Data'
    };
  }

  const dt = Math.max(0, Number(downtimeMinutes) || 0);
  const op = Math.max(0, Number(operatingMinutes) || 0);

  if (op === 0) {
    return { availabilityPct: null, display: 'N/A', status: 'No Data' };
  }

  if (dt === 0) {
    return { availabilityPct: 100.00, display: '100.00%', status: 'Optimal' };
  }

  const uptime = Math.max(0, op - dt);
  const pct = Math.min(100.0, Math.max(0.0, (uptime / op) * 100.0));
  const formatted = pct.toFixed(2);

  let status = 'Optimal';
  if (pct < 95.0) status = 'Critical';
  else if (pct < 99.0) status = 'Warning';

  return {
    availabilityPct: parseFloat(formatted),
    display: `${formatted}%`,
    status
  };
}

// Authoritative Closure Rate Calculation
function calculateAuthoritativeClosureRate(records) {
  if (!Array.isArray(records) || records.length === 0) {
    return {
      rate: null,
      display: 'N/A',
      closedCount: 0,
      totalCount: 0
    };
  }

  const validRecords = records.filter(r => r && typeof r.status === 'string');
  if (validRecords.length === 0) {
    return { rate: null, display: 'N/A', closedCount: 0, totalCount: 0 };
  }

  const closedCount = validRecords.filter(r => {
    const s = r.status.trim().toLowerCase();
    return s === 'completed' || s === 'closed';
  }).length;

  const rate = Math.round((closedCount / validRecords.length) * 100);
  return {
    rate,
    display: `${rate}%`,
    closedCount,
    totalCount: validRecords.length
  };
}

// Authoritative MTTR Calculation
function calculateAuthoritativeMTTR(records) {
  if (!Array.isArray(records) || records.length === 0) {
    return {
      mttrMinutes: null,
      display: 'N/A'
    };
  }

  const closedRecords = records.filter(r => {
    if (!r || typeof r.status !== 'string') return false;
    const s = r.status.trim().toLowerCase();
    return s === 'completed' || s === 'closed';
  });

  if (closedRecords.length === 0) {
    return { mttrMinutes: null, display: 'N/A' };
  }

  const totalClosedDowntime = closedRecords.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
  const mttr = Math.round(totalClosedDowntime / closedRecords.length);

  return {
    mttrMinutes: mttr,
    display: `${mttr} min`
  };
}

// Comprehensive Server-Side Incident Validation
function validateIncident(data) {
  const errors = [];

  if (!data || typeof data !== 'object') {
    return { isValid: false, errors: ['Request body must be a valid JSON object'] };
  }

  // Required string fields (cannot be whitespace-only)
  const requiredFields = [
    { field: 'issueDate', name: 'Issue Date' },
    { field: 'area', name: 'Area / Plant' },
    { field: 'machineNo', name: 'Machine Code' },
    { field: 'nature', name: 'Nature of Issue' },
    { field: 'category', name: 'Category' },
    { field: 'status', name: 'Status' },
    { field: 'solvedBy', name: 'Responsible Person' }
  ];

  requiredFields.forEach(({ field, name }) => {
    const val = data[field];
    if (val === undefined || val === null || String(val).trim() === '') {
      errors.push(`${name} is required and cannot be empty.`);
    }
  });

  // Date format check
  if (data.issueDate && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.issueDate).trim())) {
    errors.push('Issue Date must be in YYYY-MM-DD format.');
  }

  // Downtime minutes validation (strictly positive, non-negative, non-zero)
  const dt = parseInt(data.downtimeMinutes, 10);
  if (isNaN(dt) || dt <= 0) {
    errors.push('Downtime minutes must be a positive integer greater than 0.');
  }

  // Affected machines validation
  const affected = parseInt(data.affectedMachines !== undefined ? data.affectedMachines : 1, 10);
  if (isNaN(affected) || affected < 1) {
    errors.push('Affected machines count must be an integer of at least 1.');
  }

  // Status-specific validation
  const statusClean = String(data.status || '').trim();
  const validStatuses = ['Open', 'Completed', 'Closed', 'In Progress'];
  if (statusClean && !validStatuses.some(vs => vs.toLowerCase() === statusClean.toLowerCase())) {
    errors.push(`Status must be one of: ${validStatuses.join(', ')}.`);
  }

  const isClosed = statusClean.toLowerCase() === 'completed' || statusClean.toLowerCase() === 'closed';
  const closedDateClean = data.closedDate ? String(data.closedDate).trim() : '';

  if (isClosed) {
    if (!closedDateClean) {
      errors.push('Closed Date is required when status is Completed or Closed.');
    } else {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(closedDateClean)) {
        errors.push('Closed Date must be in YYYY-MM-DD format.');
      } else if (data.issueDate && closedDateClean < String(data.issueDate).trim()) {
        errors.push(`Closed Date (${closedDateClean}) cannot be earlier than Issue Date (${data.issueDate}).`);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    cleaned: {
      ...data,
      downtimeMinutes: dt,
      affectedMachines: affected,
      totalDowntimeMinutes: dt * affected,
      closedDate: isClosed ? closedDateClean : ''
    }
  };
}

module.exports = {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  sha256,
  generateToken,
  verifyToken,
  requireAuth,
  calculateAuthoritativeAvailability,
  calculateAuthoritativeClosureRate,
  calculateAuthoritativeMTTR,
  validateIncident
};
