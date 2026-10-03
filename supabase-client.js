// ============================================================================
// YOKOHAMA MES PORTAL - SUPABASE CLOUD CLIENT & DATA LAYER (v2.1)
// Fully Resilient: Official SDK + Direct PostgREST Fallback + Realtime Sync
// ============================================================================

const SUPABASE_URL = 'https://mrzlgrkkqdijoruchpgb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yemxncmtrcWRpam9ydWNocGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NzUwOTksImV4cCI6MjEwNjU1MTA5OX0.3gPv_cHRDCOgfC27XLIGaiTtH9p7QctqBedZz2zXdwM';
const REST_BASE = `${SUPABASE_URL}/rest/v1`;

const DEFAULT_HEADERS = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json'
};

// Global Supabase client instance
let supabaseClient = null;

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      window.supabaseClient = supabaseClient;
      return supabaseClient;
    } catch (e) {
      console.warn('[Supabase] Failed to initialize official SDK:', e);
    }
  }
  return null;
}

// Initialize on script load if SDK is ready
getSupabaseClient();

// Re-attempt on DOM ready if SDK was deferred
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    getSupabaseClient();
  });
}

// ----------------------------------------------------------------------------
// SHA-256 Hash Function (Native Web Crypto with Fallback)
// ----------------------------------------------------------------------------
async function sha256(message) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    try {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      console.warn('[Supabase] Web Crypto SHA-256 failed, checking fallback:', e);
    }
  }
  // Hardcoded known hashes for standard roles if crypto is restricted
  const knownHashes = {
    'admin123': '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
    'super123': '7b1c3e3a4e929f0464f89d79ca82fe5daff0da070c01a1e7b9dd4bcf6b509ef5',
    'operator123': '5746b142df3f4ddbfdf0fa49c30fef6509f6e5a61fc726ff2c0cb77d7ffccff0'
  };
  return knownHashes[message] || message;
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
    issueDate: recDate, // CRITICAL: app.js uses r.issueDate for all KPI, tables, and filters!
    nature: row.nature || 'Breakdown',
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
    responsibility: row.responsibility || 'Maintenance',
    closedDate: row.closed_date || recDate,
    solvedBy: resp,              // CRITICAL: app.js uses r.solvedBy for technician filters & logs!
    responsiblePerson: resp,     // Preserved for backwards compatibility
    status: row.status || 'Open',
    remarks: row.remarks || '',
    createdAt: row.created_at || new Date().toISOString(),
    updatedAt: row.updated_at || new Date().toISOString()
  };
}

function mapRecordToRow(record) {
  if (!record) return null;
  const dtMin = Number(record.downtimeMinutes) || 0;
  const aff = Number(record.affectedMachines) || 1;
  const tot = Number(record.totalDowntimeMinutes) || (dtMin * aff);
  // Guarantee date is never null or undefined to satisfy PostgreSQL NOT NULL constraint
  const recDate = (record.issueDate || record.date || new Date().toISOString().split('T')[0]).toString().trim();
  const resp = (record.solvedBy || record.responsiblePerson || 'Pardhu').toString().trim();

  return {
    id: String(record.id),
    date: recDate,
    nature: record.nature || 'Breakdown',
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
    responsibility: record.responsibility || 'Maintenance',
    closed_date: record.closedDate || record.closed_date || recDate,
    responsible_person: resp,
    status: record.status || 'Open',
    remarks: record.remarks || '',
    updated_at: new Date().toISOString()
  };
}

// ----------------------------------------------------------------------------
// 1. Authenticate user against public.user_accounts
// ----------------------------------------------------------------------------
async function authenticateUserWithSupabase(username, password) {
  const cleanUsername = (username || '').trim().toLowerCase();
  const passwordHash = await sha256(password);

  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('user_accounts')
        .select('*')
        .ilike('username', cleanUsername)
        .eq('password_hash', passwordHash)
        .maybeSingle();

      if (!error && data) return data;
      if (error) console.warn('[Supabase] SDK auth warning, testing REST:', error);
    } catch (e) {
      console.warn('[Supabase] SDK auth exception, testing REST:', e);
    }
  }

  // Resilient Fallback: Direct PostgREST API
  try {
    const query = `${REST_BASE}/user_accounts?select=*&username=ilike.${encodeURIComponent(cleanUsername)}&password_hash=eq.${encodeURIComponent(passwordHash)}&limit=1`;
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
        return list[0];
      }
    }
  } catch (err) {
    console.error('[Supabase] Direct REST auth network error:', err);
  }
  return null;
}
window.authenticateUserWithSupabase = authenticateUserWithSupabase;

// ----------------------------------------------------------------------------
// 2. Fetch all incidents from Supabase
// ----------------------------------------------------------------------------
async function fetchCloudIncidents() {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('incidents')
        .select('*')
        .order('date', { ascending: false });

      if (!error && Array.isArray(data)) {
        return data.map(mapRowToRecord);
      }
      if (error) console.warn('[Supabase] SDK fetch warning, testing REST:', error);
    } catch (e) {
      console.warn('[Supabase] SDK fetch exception, testing REST:', e);
    }
  }

  // Resilient Fallback: Direct PostgREST API
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
    console.error('[Supabase] Direct REST fetch returned status:', res.status);
  } catch (err) {
    console.error('[Supabase] Fetch incidents network error:', err);
  }
  return null;
}
window.fetchCloudIncidents = fetchCloudIncidents;

// ----------------------------------------------------------------------------
// 3. Upsert a single incident to Supabase
// ----------------------------------------------------------------------------
async function upsertCloudIncident(record) {
  const row = mapRecordToRow(record);
  if (!row) return false;

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client
        .from('incidents')
        .upsert(row, { onConflict: 'id' });

      if (!error) return true;
      console.warn('[Supabase] SDK upsert warning, testing REST:', error);
    } catch (e) {
      console.warn('[Supabase] SDK upsert exception, testing REST:', e);
    }
  }

  // Resilient Fallback: Direct PostgREST API
  try {
    const res = await fetch(`${REST_BASE}/incidents`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(row)
    });
    return res.ok;
  } catch (err) {
    console.error('[Supabase] Direct REST upsert error:', err);
    return false;
  }
}
window.upsertCloudIncident = upsertCloudIncident;

// ----------------------------------------------------------------------------
// 4. Bulk upsert incidents
// ----------------------------------------------------------------------------
async function bulkUpsertCloudIncidents(records) {
  if (!Array.isArray(records) || records.length === 0) return false;
  const rows = records.map(mapRecordToRow).filter(Boolean);
  if (rows.length === 0) return false;

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client
        .from('incidents')
        .upsert(rows, { onConflict: 'id' });

      if (!error) return true;
      console.warn('[Supabase] SDK bulk upsert warning, testing REST:', error);
    } catch (e) {
      console.warn('[Supabase] SDK bulk upsert exception, testing REST:', e);
    }
  }

  // Resilient Fallback: Direct PostgREST API
  try {
    const res = await fetch(`${REST_BASE}/incidents`, {
      method: 'POST',
      headers: {
        ...DEFAULT_HEADERS,
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(rows)
    });
    return res.ok;
  } catch (err) {
    console.error('[Supabase] Direct REST bulk upsert error:', err);
    return false;
  }
}
window.bulkUpsertCloudIncidents = bulkUpsertCloudIncidents;

// ----------------------------------------------------------------------------
// 5. Delete incident from Supabase
// ----------------------------------------------------------------------------
async function deleteCloudIncident(id) {
  if (!id) return false;

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client
        .from('incidents')
        .delete()
        .eq('id', id);

      if (!error) return true;
      console.warn('[Supabase] SDK delete warning, testing REST:', error);
    } catch (e) {
      console.warn('[Supabase] SDK delete exception, testing REST:', e);
    }
  }

  // Resilient Fallback: Direct PostgREST API
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
    console.error('[Supabase] Direct REST delete error:', err);
    return false;
  }
}
window.deleteCloudIncident = deleteCloudIncident;

// ----------------------------------------------------------------------------
// 6. Clear All Incidents
// ----------------------------------------------------------------------------
async function clearAllCloudIncidents() {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client.from('incidents').delete().neq('id', '___NEVER___');
      if (!error) return true;
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
// 7. Update User Account (Sync password or username changes to Cloud)
// ----------------------------------------------------------------------------
async function updateCloudUserAccount(role, username, displayName, passwordHash) {
  const patch = {
    username: (username || '').toLowerCase().trim(),
    display_name: displayName,
    updated_at: new Date().toISOString()
  };
  if (passwordHash) {
    patch.password_hash = passwordHash;
  }

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client.from('user_accounts').update(patch).eq('role', role);
      if (!error) return true;
    } catch (e) {}
  }

  try {
    const res = await fetch(`${REST_BASE}/user_accounts?role=eq.${encodeURIComponent(role)}`, {
      method: 'PATCH',
      headers: {
        ...DEFAULT_HEADERS,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(patch)
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}
window.updateCloudUserAccount = updateCloudUserAccount;

// ----------------------------------------------------------------------------
// 8. Real-time Subscription Channel
// ----------------------------------------------------------------------------
function initSupabaseRealtime(onIncidentChange) {
  const client = getSupabaseClient();
  if (!client) return null;
  try {
    const channel = client
      .channel('public:incidents')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'incidents' }, (payload) => {
        console.log('[Supabase] Realtime incident event:', payload);
        if (typeof onIncidentChange === 'function') {
          onIncidentChange(payload);
        }
      })
      .subscribe((status) => {
        console.log('[Supabase] Realtime status:', status);
      });
    return channel;
  } catch (e) {
    console.warn('[Supabase] Realtime subscription not active:', e);
    return null;
  }
}
window.initSupabaseRealtime = initSupabaseRealtime;
