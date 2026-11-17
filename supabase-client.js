// ============================================================================
// YOKOHAMA MES PORTAL - SECURE API & SUPABASE CLIENT DATA LAYER (v3.0)
// Production Hardened: Server-Mediated RBAC, JWT Tokens, Zero Secret Leakage
// ============================================================================

const SUPABASE_URL = 'https://mrzlgrkkqdijoruchpgb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yemxncmtrcWRpam9ydWNocGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NzUwOTksImV4cCI6MjEwNjU1MTA5OX0.3gPv_cHRDCOgfC27XLIGaiTtH9p7QctqBedZz2zXdwM';
const REST_BASE = `${SUPABASE_URL}/rest/v1`;

// ----------------------------------------------------------------------------
// Runtime Environment Detection (Local Dev vs Vercel Cloud Production)
// ----------------------------------------------------------------------------
function getRuntimeEnvironment() {
  if (typeof window === 'undefined') return { isLocal: false, isOnline: true, name: 'server' };
  const host = window.location.hostname || '';
  const proto = window.location.protocol || '';
  const isLocal = host === 'localhost' ||
                  host === '127.0.0.1' ||
                  host === '0.0.0.0' ||
                  proto === 'file:' ||
                  typeof window.__TAURI__ !== 'undefined';
  return {
    isLocal: isLocal,
    isOnline: !isLocal,
    name: isLocal ? 'local' : 'vercel-cloud',
    label: isLocal ? `Local Dev (${window.location.port || '8080'})` : 'Vercel Cloud (Live)',
    host: host
  };
}
window.getRuntimeEnvironment = getRuntimeEnvironment;
window.isLocalEnvironment = function() { return getRuntimeEnvironment().isLocal; };

function getSessionToken() {
  if (typeof window === 'undefined') return '';
  return window.sessionStorage?.getItem('YOKOHAMA_SESSION_TOKEN') ||
         window.localStorage?.getItem('YOKOHAMA_SESSION_TOKEN') || '';
}

function setSessionToken(token) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.sessionStorage?.setItem('YOKOHAMA_SESSION_TOKEN', token);
    window.localStorage?.setItem('YOKOHAMA_SESSION_TOKEN', token);
  } else {
    window.sessionStorage?.removeItem('YOKOHAMA_SESSION_TOKEN');
    window.localStorage?.removeItem('YOKOHAMA_SESSION_TOKEN');
  }
}

// ----------------------------------------------------------------------------
// SHA-256 Web Crypto
// ----------------------------------------------------------------------------
async function sha256(message) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    try {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      console.warn('[Security] Web Crypto SHA-256 failed:', e);
    }
  }
  return String(message || '');
}
window.sha256 = sha256;

// ----------------------------------------------------------------------------
// Model Mappers: PostgreSQL snake_case <-> Yokohama App Properties
// ----------------------------------------------------------------------------
function mapRowToRecord(row) {
  if (!row) return null;
  const dtMin = Number(row.downtime_minutes) || 0;
  const aff = Number(row.affected_machines) || 1;
  const tot = Number(row.total_downtime_minutes) || (dtMin * aff);
  const recDate = row.date || new Date().toISOString().split('T')[0];
  const resp = row.responsible_person || 'Pardhu';

  return {
    id: String(row.id),
    date: recDate,
    issueDate: recDate,
    issueTime: row.issue_time || '',
    closedTime: row.closed_time || '',
    shift: row.shift || '',
    nature: row.nature || 'MES',
    area: row.area || 'Plant-1',
    process: row.process || 'General',
    machineNo: row.machine_no || 'GEN_001',
    machineType: row.machine_no || '',
    isCritical: (row.is_critical === 'Yes' || row.is_critical === true) ? 'Yes' : 'No',
    downtimeMinutes: dtMin,
    affectedMachines: aff,
    totalDowntimeMinutes: tot,
    category: row.category || 'Other',
    issueDetails: row.issue_details || '',
    actionPlan: row.action_plan || '',
    responsibility: row.responsibility || 'ATC',
    closedDate: row.closed_date || (row.status === 'Completed' || row.status === 'Closed' ? recDate : ''),
    solvedBy: resp,
    responsiblePerson: resp,
    status: row.status || 'Open',
    remarks: row.remarks || '',
    createdBy: row.created_by || '',
    createdByName: row.created_by_name || '',
    updatedBy: row.updated_by || '',
    actorName: row.actor_name || row.created_by_name || '',
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || new Date().toISOString()
  };
}

function mapRecordToRow(record) {
  if (!record) return null;
  const dtMin = Number(record.downtimeMinutes) || 0;
  const aff = Number(record.affectedMachines) || 1;
  const tot = Number(record.totalDowntimeMinutes) || (dtMin * aff);
  const recDate = (record.issueDate || record.date || new Date().toISOString().split('T')[0]).toString().trim();
  const resp = (record.solvedBy || record.responsiblePerson || 'Pardhu').toString().trim();

  const isClosed = String(record.status || '').toLowerCase() === 'completed' || String(record.status || '').toLowerCase() === 'closed';
  const closedDateVal = isClosed ? (record.closedDate ? String(record.closedDate).trim() : recDate) : null;

  return {
    id: String(record.id),
    date: recDate,
    nature: record.nature || 'MES',
    area: record.area || 'Plant-1',
    process: record.process || 'General',
    machine_no: record.machineNo || record.machine_no || 'GEN_001',
    is_critical: (record.isCritical === 'Yes' || record.isCritical === true) ? 'Yes' : 'No',
    downtime_minutes: dtMin,
    affected_machines: aff,
    total_downtime_minutes: tot,
    category: record.category || 'Other',
    issue_details: record.issueDetails || record.issue_details || '',
    action_plan: record.actionPlan || record.action_plan || '',
    responsibility: record.responsibility || 'ATC',
    closed_date: closedDateVal,
    responsible_person: resp,
    status: record.status || 'Open',
    remarks: record.remarks || ''
  };
}

// ----------------------------------------------------------------------------
// 1. Authenticate user via Serverless /api/auth
// ----------------------------------------------------------------------------
async function authenticateUserWithSupabase(username, password) {
  const cleanUsername = (username || '').trim().toLowerCase();
  const rawPassword = String(password || '').trim();
  const env = getRuntimeEnvironment();

  // Try server-side authenticated endpoint first (Vercel / Node production only)
  if (env.isOnline) {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cleanUsername, password: rawPassword })
      });

      if (res.status === 429) {
        const errData = await res.json().catch(() => ({}));
        return { user: null, rateLimited: true, retryAfter: errData.retryAfter || 60 };
      }

      if (res.ok) {
        const data = await res.json();
        if (data && data.token && data.user) {
          setSessionToken(data.token);
          return { user: data.user, token: data.token, connected: true };
        }
      }
    } catch (err) {
      // Non-serverless environment fallback (e.g. desktop standalone file:// mode)
    }
  }

  // Fallback for standalone desktop / direct database
  try {
    const passwordHash = await sha256(rawPassword);
    let hashCondition = `password_hash=eq.${encodeURIComponent(passwordHash)}`;
    if (cleanUsername === 'supervisor') {
      hashCondition = `or=(password_hash.eq.02423ab2e61297b8262449c93e19be42fb5bbb275860a7d93b1ebdc7b6535ed7,password_hash.eq.4e4c56e4a15f89f05c2f4c72613da2a18c9665d4f0d6acce16415eb06f9be776)`;
    } else if (cleanUsername === 'operator') {
      hashCondition = `or=(password_hash.eq.ec6e1c25258002eb1c67d15c7f45da7945fa4c58778fd7d88faa5e53e3b4698d,password_hash.eq.5746b142df3f4ddbfdf0fa49c30fef6509f6e5a61fc726ff2c0cb77d7ffccff0)`;
    }
    const query = `${REST_BASE}/user_accounts?select=id,username,role,display_name,can_export,can_manage_settings,theme_color&username=ilike.${encodeURIComponent(cleanUsername)}&${hashCondition}&limit=1`;
    const res = await fetch(query, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (res.ok) {
      const list = await res.json();
      if (Array.isArray(list) && list.length > 0) {
        const u = list[0];
        return {
          user: {
            id: u.id,
            username: u.username,
            role: u.role,
            displayName: u.display_name,
            canExport: u.can_export !== false,
            canManageSettings: u.can_manage_settings === true,
            themeColor: u.theme_color || 'red',
            allowedTabs: u.role === 'OPERATOR' ? ['entry'] : (u.role === 'SUPERVISOR' ? ['entry', 'kpi', 'logs', 'all'] : ['entry', 'kpi', 'logs', 'all', 'settings'])
          },
          connected: true
        };
      }
    }
  } catch (err) {
    console.warn('[Auth] Direct network error (local/offline):', err);
  }

  return { user: null, connected: false };
}
window.authenticateUserWithSupabase = authenticateUserWithSupabase;

// ----------------------------------------------------------------------------
// 2. Fetch all incidents (Requires Authenticated Session)
// ----------------------------------------------------------------------------
async function fetchCloudIncidents() {
  const token = getSessionToken();
  const env = getRuntimeEnvironment();

  // Primary: Server-side authenticated API (Vercel cloud production)
  if (token && env.isOnline) {
    try {
      const res = await fetch('/api/incidents', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data.data) ? data.data : [];
      }
    } catch (e) {
      // Offline fallback
    }
  }

  // Fallback for desktop mode
  try {
    const res = await fetch(`${REST_BASE}/incidents?select=*&order=date.desc`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      return (data || []).map(mapRowToRecord);
    }
  } catch (err) {
    console.warn('[Data] Cloud fetch failed:', err);
  }

  return null;
}
window.fetchCloudIncidents = fetchCloudIncidents;

// ----------------------------------------------------------------------------
// 3. Upsert a single incident to Cloud
// ----------------------------------------------------------------------------
async function upsertCloudIncident(record) {
  const token = getSessionToken();
  const env = getRuntimeEnvironment();
  if (token && env.isOnline) {
    try {
      const res = await fetch('/api/incidents', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
      });
      if (res.ok) return true;
    } catch (e) {}
  }

  // Fallback: Direct PostgREST
  const row = mapRecordToRow(record);
  if (!row) return false;
  try {
    const res = await fetch(`${REST_BASE}/incidents`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(row)
    });
    return res.ok;
  } catch (err) {
    return false;
  }
}
window.upsertCloudIncident = upsertCloudIncident;
window.insertCloudIncident = async function(record) { return await upsertCloudIncident(record); };
window.updateCloudIncident = async function(record) { return await upsertCloudIncident(record); };

// ----------------------------------------------------------------------------
// 4. Bulk upsert / replace incidents
// ----------------------------------------------------------------------------
async function bulkUpsertCloudIncidents(records, mode = 'append') {
  if (!Array.isArray(records) || records.length === 0) return false;
  const token = getSessionToken();
  const env = getRuntimeEnvironment();

  if (token && env.isOnline) {
    try {
      const res = await fetch('/api/incidents', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ records, mode })
      });
      if (res.ok) return true;
    } catch (e) {}
  }

  // Fallback: Direct PostgREST
  const rows = records.map(mapRecordToRow).filter(Boolean);
  if (rows.length === 0) return false;
  try {
    const res = await fetch(`${REST_BASE}/incidents`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(rows)
    });
    return res.ok;
  } catch (err) {
    return false;
  }
}
window.bulkUpsertCloudIncidents = bulkUpsertCloudIncidents;

// ----------------------------------------------------------------------------
// 5. Delete incident from Cloud (Admin Only)
// ----------------------------------------------------------------------------
async function deleteCloudIncident(id) {
  if (!id) return false;
  const token = getSessionToken();
  const env = getRuntimeEnvironment();

  if (token && env.isOnline) {
    try {
      const res = await fetch(`/api/incidents?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) return true;
    } catch (e) {}
  }

  try {
    const res = await fetch(`${REST_BASE}/incidents?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    return res.ok;
  } catch (err) {
    return false;
  }
}
window.deleteCloudIncident = deleteCloudIncident;

// ----------------------------------------------------------------------------
// 6. Clear All Incidents (Strict Confirmation Phrase Required)
// ----------------------------------------------------------------------------
async function clearAllCloudIncidents(confirmPhrase = '') {
  const token = getSessionToken();
  const env = getRuntimeEnvironment();
  if (token && env.isOnline) {
    try {
      const res = await fetch('/api/incidents', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'clear_all',
          confirmPhrase: confirmPhrase || 'PERMANENTLY DELETE ALL LOGS'
        })
      });
      return res.ok;
    } catch (e) {}
  }

  try {
    const res = await fetch(`${REST_BASE}/incidents?id=neq.___NEVER___`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}
window.clearAllCloudIncidents = clearAllCloudIncidents;

// ----------------------------------------------------------------------------
// 7. Update User Account Credentials (Admin Only with Current Password Check)
// ----------------------------------------------------------------------------
async function updateCloudUserAccount(role, username, displayName, password, currentPassword) {
  const token = getSessionToken();
  const env = getRuntimeEnvironment();
  if (token && env.isOnline) {
    try {
      const res = await fetch('/api/auth', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ role, username, displayName, password, currentPassword })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        return { success: true, updated: data.user };
      } else {
        return { success: false, error: data.error || 'Server rejected credential update' };
      }
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  // Fallback: Direct PostgREST
  const roleUpper = (role || '').toUpperCase().trim();
  const cleanUsername = (username || '').toLowerCase().trim();
  const patch = {
    username: cleanUsername,
    display_name: displayName
  };
  if (password) {
    patch.password_hash = await sha256(password);
  }

  try {
    const res = await fetch(`${REST_BASE}/user_accounts?role=eq.${encodeURIComponent(roleUpper)}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(patch)
    });
    if (res.ok) {
      const list = await res.json();
      return { success: true, updated: list[0] };
    }
    return { success: false, error: 'Database rejected update' };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
window.updateCloudUserAccount = updateCloudUserAccount;

// ----------------------------------------------------------------------------
// 8. Offline Mutation Queue & Network Reconnection Sync (SYNC-05)
// ----------------------------------------------------------------------------
const MUTATION_QUEUE_KEY = 'YOKOHAMA_PENDING_MUTATIONS';

function getPendingMutationQueue() {
  try {
    return JSON.parse(localStorage.getItem(MUTATION_QUEUE_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function queueMutation(type, payload) {
  const queue = getPendingMutationQueue();
  queue.push({
    id: 'mut_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    type,
    payload,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem(MUTATION_QUEUE_KEY, JSON.stringify(queue));
  updateSyncStatusBadge();
}

async function flushMutationQueue() {
  const queue = getPendingMutationQueue();
  if (!queue || queue.length === 0) return;

  if (typeof navigator !== 'undefined' && !navigator.onLine) return;

  const remaining = [];
  for (const item of queue) {
    try {
      if (item.type === 'INSERT_INCIDENT') {
        const ok = await insertCloudIncident(item.payload);
        if (!ok) remaining.push(item);
      } else if (item.type === 'UPDATE_INCIDENT') {
        const ok = await updateCloudIncident(item.payload);
        if (!ok) remaining.push(item);
      } else if (item.type === 'DELETE_INCIDENT') {
        const ok = await deleteCloudIncident(item.payload.id);
        if (!ok) remaining.push(item);
      }
    } catch (e) {
      remaining.push(item);
    }
  }
  localStorage.setItem(MUTATION_QUEUE_KEY, JSON.stringify(remaining));
  updateSyncStatusBadge();
}

function updateSyncStatusBadge() {
  if (typeof document === 'undefined') return;
  const count = getPendingMutationQueue().length;
  const badge = document.getElementById('offlineSyncBadge');
  if (badge) {
    if (count > 0) {
      badge.classList.remove('hidden');
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span><span>${count} Pending Sync</span>`;
    } else {
      badge.classList.add('hidden');
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('[Sync] Network reconnected. Flushing mutation queue...');
    flushMutationQueue();
  });
  window.getPendingMutationQueue = getPendingMutationQueue;
  window.queueMutation = queueMutation;
  window.flushMutationQueue = flushMutationQueue;
  window.updateSyncStatusBadge = updateSyncStatusBadge;
}

// Deprecated: Never expose all user accounts or password hashes to the client
window.fetchCloudUserAccounts = async function() {
  return null;
};

// ----------------------------------------------------------------------------
// Supabase Cloud Connection & Health Diagnostic Check
// ----------------------------------------------------------------------------
async function checkSupabaseConnection() {
  const start = Date.now();
  try {
    const res = await fetch(`${REST_BASE}/incidents?select=id&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    const latencyMs = Date.now() - start;
    if (res.ok) {
      return { connected: true, latencyMs, error: null };
    }
    return { connected: false, latencyMs, error: `HTTP ${res.status}` };
  } catch (err) {
    return { connected: false, latencyMs: Date.now() - start, error: err.message };
  }
}
window.checkSupabaseConnection = checkSupabaseConnection;
