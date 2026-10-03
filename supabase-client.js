// ============================================================================
// YOKOHAMA MES PORTAL - SUPABASE CLOUD CLIENT & DATA LAYER
// ============================================================================

const SUPABASE_URL = 'https://mrzlgrkkqdijoruchpgb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yemxncmtrcWRpam9ydWNocGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NzUwOTksImV4cCI6MjEwNjU1MTA5OX0.3gPv_cHRDCOgfC27XLIGaiTtH9p7QctqBedZz2zXdwM';

// Initialize global Supabase client
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = supabaseClient;
  console.log('Supabase client initialized successfully.');
} else {
  console.warn('Supabase SDK not loaded yet. Will re-initialize on DOM ready.');
}

window.addEventListener('DOMContentLoaded', () => {
  if (!supabaseClient && typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabaseClient;
    console.log('Supabase client initialized on DOMContentLoaded.');
  }
});

// SHA-256 helper using browser Web Crypto API
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
window.sha256 = sha256;

// 1. Authenticate user against public.user_accounts
async function authenticateUserWithSupabase(username, password) {
  if (!supabaseClient) throw new Error('Supabase is not initialized');
  const cleanUsername = (username || '').trim().toLowerCase();
  const passwordHash = await sha256(password);

  const { data, error } = await supabaseClient
    .from('user_accounts')
    .select('*')
    .ilike('username', cleanUsername)
    .eq('password_hash', passwordHash)
    .maybeSingle();

  if (error) {
    console.error('Supabase auth error:', error);
    throw error;
  }
  return data; // null if not found
}
window.authenticateUserWithSupabase = authenticateUserWithSupabase;

// 2. Fetch all incidents from Supabase
async function fetchCloudIncidents() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient
    .from('incidents')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching incidents from Supabase:', error);
    return null;
  }

  // Map database snake_case to app camelCase properties
  return (data || []).map(row => ({
    id: row.id,
    date: row.date,
    nature: row.nature || 'Breakdown',
    area: row.area,
    process: row.process,
    machineNo: row.machine_no,
    isCritical: row.is_critical || 'No',
    downtimeMinutes: Number(row.downtime_minutes) || 0,
    affectedMachines: Number(row.affected_machines) || 1,
    totalDowntimeMinutes: Number(row.total_downtime_minutes) || 0,
    category: row.category,
    issueDetails: row.issue_details || '',
    actionPlan: row.action_plan || '',
    responsibility: row.responsibility || 'Maintenance',
    closedDate: row.closed_date || row.date,
    responsiblePerson: row.responsible_person || 'Pardhu',
    status: row.status || 'Open',
    remarks: row.remarks || '',
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }));
}
window.fetchCloudIncidents = fetchCloudIncidents;

// 3. Upsert a single incident to Supabase
async function upsertCloudIncident(record) {
  if (!supabaseClient) return false;
  const row = {
    id: record.id,
    date: record.date,
    nature: record.nature || 'Breakdown',
    area: record.area,
    process: record.process,
    machine_no: record.machineNo,
    is_critical: record.isCritical || 'No',
    downtime_minutes: Number(record.downtimeMinutes) || 0,
    affected_machines: Number(record.affectedMachines) || 1,
    total_downtime_minutes: Number(record.totalDowntimeMinutes) || (Number(record.downtimeMinutes) * Number(record.affectedMachines)),
    category: record.category,
    issue_details: record.issueDetails || '',
    action_plan: record.actionPlan || '',
    responsibility: record.responsibility || 'Maintenance',
    closed_date: record.closedDate || record.date,
    responsible_person: record.responsiblePerson || 'Pardhu',
    status: record.status || 'Open',
    remarks: record.remarks || '',
    updated_at: new Date().toISOString()
  };

  const { error } = await supabaseClient
    .from('incidents')
    .upsert(row, { onConflict: 'id' });

  if (error) {
    console.error('Error saving incident to Supabase:', error);
    return false;
  }
  return true;
}
window.upsertCloudIncident = upsertCloudIncident;

// 4. Bulk upsert incidents (for Excel Template imports)
async function bulkUpsertCloudIncidents(records) {
  if (!supabaseClient || !records || records.length === 0) return false;
  const rows = records.map(record => ({
    id: record.id,
    date: record.date,
    nature: record.nature || 'Breakdown',
    area: record.area,
    process: record.process,
    machine_no: record.machineNo,
    is_critical: record.isCritical || 'No',
    downtime_minutes: Number(record.downtimeMinutes) || 0,
    affected_machines: Number(record.affectedMachines) || 1,
    total_downtime_minutes: Number(record.totalDowntimeMinutes) || (Number(record.downtimeMinutes) * Number(record.affectedMachines)),
    category: record.category,
    issue_details: record.issueDetails || '',
    action_plan: record.actionPlan || '',
    responsibility: record.responsibility || 'Maintenance',
    closed_date: record.closedDate || record.date,
    responsible_person: record.responsiblePerson || 'Pardhu',
    status: record.status || 'Open',
    remarks: record.remarks || '',
    updated_at: new Date().toISOString()
  }));

  const { error } = await supabaseClient
    .from('incidents')
    .upsert(rows, { onConflict: 'id' });

  if (error) {
    console.error('Error bulk uploading incidents to Supabase:', error);
    return false;
  }
  return true;
}
window.bulkUpsertCloudIncidents = bulkUpsertCloudIncidents;

// 5. Delete incident from Supabase
async function deleteCloudIncident(id) {
  if (!supabaseClient) return false;
  const { error } = await supabaseClient
    .from('incidents')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting incident from Supabase:', error);
    return false;
  }
  return true;
}
window.deleteCloudIncident = deleteCloudIncident;

// 6. Real-time Subscription Channel
function initSupabaseRealtime(onIncidentChange) {
  if (!supabaseClient) return;
  try {
    const channel = supabaseClient
      .channel('public:incidents')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'incidents' }, (payload) => {
        console.log('Realtime incident change received from Supabase:', payload);
        if (typeof onIncidentChange === 'function') {
          onIncidentChange(payload);
        }
      })
      .subscribe((status) => {
        console.log('Supabase Realtime subscription status:', status);
      });
    return channel;
  } catch (e) {
    console.warn('Realtime subscription not active:', e);
  }
}
window.initSupabaseRealtime = initSupabaseRealtime;
