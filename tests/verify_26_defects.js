/**
 * verify_26_defects.js
 * Comprehensive regression and verification test suite for all 26 full-stack defects.
 * Plant IT Downtime Management Portal
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('========================================================================');
console.log('VERIFYING ALL 26 DEFECTS (SECURITY, LOGIC, STATE SYNC, & UI/UX)');
console.log('========================================================================\n');

let passed = 0;
let total = 0;

function check(code, name, fn) {
  total++;
  process.stdout.write(`▶ [${code}] ${name}... `);
  try {
    fn();
    console.log('✅ PASSED');
    passed++;
  } catch (err) {
    console.log('❌ FAILED');
    console.error('   Error:', err.message);
  }
}

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const apiAuthJs = fs.readFileSync(path.join(__dirname, '..', 'api', 'auth.js'), 'utf8');
const apiIncidentsJs = fs.readFileSync(path.join(__dirname, '..', 'api', 'incidents.js'), 'utf8');
const apiUtilsJs = fs.readFileSync(path.join(__dirname, '..', 'api', 'utils.js'), 'utf8');
const apiKpiJs = fs.readFileSync(path.join(__dirname, '..', 'api', 'kpi.js'), 'utf8');
const supabaseClientJs = fs.readFileSync(path.join(__dirname, '..', 'supabase-client.js'), 'utf8');

// -----------------------------------------------------------------------------
// PHASE 1: CRITICAL SECURITY & ACCESS CONTROL (7 FIXES)
// -----------------------------------------------------------------------------

// [SEC-01] Fix Monolithic Unauthenticated DOM Exposure
check('SEC-01', 'Fix Monolithic Unauthenticated DOM Exposure', () => {
  assert.ok(indexHtml.includes('<template id="authenticatedAppTemplate">'), 'Must enclose authenticated application inside <template id="authenticatedAppTemplate">');
  assert.ok(indexHtml.includes('id="appMountRoot"'), 'Must contain <main id="appMountRoot">');
  assert.ok(appJs.includes('mountAuthenticatedApp'), 'app.js must implement mountAuthenticatedApp()');
  assert.ok(appJs.includes('unmountAuthenticatedApp'), 'app.js must implement unmountAuthenticatedApp()');
});

// [SEC-02] Stop Pre-Auth Information Disclosure
check('SEC-02', 'Stop Pre-Auth Information Disclosure', () => {
  // Master staff table should not have hardcoded staff names in index.html
  assert.ok(!indexHtml.includes('Bharadwaj</td>'), 'Pre-auth index.html must not expose staff name Bharadwaj');
  assert.ok(!indexHtml.includes('Pardhu</td>'), 'Pre-auth index.html must not expose staff name Pardhu');
  assert.ok(appJs.includes('fetchAuthenticatedCloudData'), 'app.js must fetch master lists post-auth');
});

// [SEC-03] Require Current Password on Credential Resets
check('SEC-03', 'Require Current Password on Credential Resets', () => {
  assert.ok(indexHtml.includes('id="userAdminCurrentPass"'), 'index.html must have userAdminCurrentPass input');
  assert.ok(indexHtml.includes('id="userSupervisorCurrentPass"'), 'index.html must have userSupervisorCurrentPass input');
  assert.ok(indexHtml.includes('id="userOperatorCurrentPass"'), 'index.html must have userOperatorCurrentPass input');
  assert.ok(apiAuthJs.includes('currentPassword'), 'api/auth.js must require currentPassword on PUT');
  assert.ok(apiAuthJs.includes('verifyPassword'), 'api/auth.js must verify current password against hash');
});

// [SEC-04] Prevent Editable Login Username Collisions
check('SEC-04', 'Prevent Editable Login Username Collisions', () => {
  assert.ok(apiAuthJs.includes('already in use'), 'api/auth.js must enforce unique usernames across accounts');
  assert.ok(appJs.includes('is already used by the'), 'app.js must validate username collision on the client before submit');
});

// [SEC-05] Add Individual Audit Trail Support
check('SEC-05', 'Add Individual Audit Trail Support', () => {
  assert.ok(apiIncidentsJs.includes('createdBy'), 'api/incidents.js must record createdBy');
  assert.ok(apiIncidentsJs.includes('actorName'), 'api/incidents.js must record actorName');
  assert.ok(appJs.includes('currentActor'), 'app.js must record individual currentActor attribution');
  assert.ok(appJs.includes('Individual Audit Trail Attribution'), 'app.js details view must display audit attribution');
});

// [SEC-06] Harden Excel Import & CSV/XLSX Formula Injection
check('SEC-06', 'Harden Excel Import & CSV/XLSX Formula Injection', () => {
  assert.ok(appJs.includes('maxSizeBytes = 10 * 1024 * 1024'), 'app.js must enforce 10MB limit on Excel imports');
  assert.ok(appJs.includes('/^[=\\+\\-@\\t\\r]/'), 'app.js must neutralize formula injection on export');
  assert.ok(apiUtilsJs.includes('sanitizeFormula'), 'api/utils.js must provide formula sanitization');
});

// [SEC-07] Protect Destructive Actions with CONFIRM RESET Modal & Auto-Backup
check('SEC-07', 'Protect Destructive Actions with CONFIRM RESET Modal', () => {
  assert.ok(indexHtml.includes('id="confirmResetModal"'), 'index.html must have confirmResetModal');
  assert.ok(indexHtml.includes('CONFIRM RESET'), 'index.html must instruct typing CONFIRM RESET');
  assert.ok(appJs.includes('openConfirmResetModal'), 'app.js must implement openConfirmResetModal()');
  assert.ok(appJs.includes('downloadSnapshotFile'), 'app.js must create and trigger download of backup snapshot');
  assert.ok(apiIncidentsJs.includes('CONFIRM RESET'), 'api/incidents.js must require CONFIRM RESET phrase for clear_all');
});

// -----------------------------------------------------------------------------
// PHASE 2: BUSINESS LOGIC & KPI MATHEMATICS (7 FIXES)
// -----------------------------------------------------------------------------

// [MATH-01] Fix Zero-Downtime Availability Contradiction
check('MATH-01', 'Fix Zero-Downtime Availability Contradiction', () => {
  const { calculateAuthoritativeAvailability } = require('../api/utils');
  const zeroDtWithData = calculateAuthoritativeAvailability(43200, 0, true);
  assert.strictEqual(zeroDtWithData.display, '100.00%');
  assert.strictEqual(zeroDtWithData.status, 'Optimal');

  const zeroDtNoData = calculateAuthoritativeAvailability(0, 0, false);
  assert.strictEqual(zeroDtNoData.display, 'N/A');
});

// [MATH-02] Separate Wall-Clock Downtime vs Equipment Downtime
check('MATH-02', 'Separate Wall-Clock Downtime vs Equipment Downtime', () => {
  assert.ok(apiKpiJs.includes('totalWallClockDowntimeMinutes'), 'api/kpi.js must compute totalWallClockDowntimeMinutes');
  assert.ok(apiKpiJs.includes('totalEquipmentDowntimeMinutes'), 'api/kpi.js must compute totalEquipmentDowntimeMinutes');
  assert.ok(appJs.includes('Machines Affected:'), 'app.js details view must separate per-machine and total equipment downtime');
});

// [MATH-03] Synchronize Affected Machines Counter
check('MATH-03', 'Synchronize Affected Machines Counter', () => {
  assert.ok(appJs.includes('syncAffectedMachinesCount'), 'app.js must implement syncAffectedMachinesCount()');
  assert.ok(appJs.includes('affInput.value = count'), 'app.js must update affectedMachines count dynamically');
});

// [MATH-04] Add Incident Timestamp & Duration Tracking
check('MATH-04', 'Add Incident Timestamp & Duration Tracking', () => {
  assert.ok(indexHtml.includes('id="issueTime"'), 'index.html must include issueTime input');
  assert.ok(indexHtml.includes('id="closedTime"'), 'index.html must include closedTime input');
  assert.ok(appJs.includes('handleDateTimeChange'), 'app.js must implement handleDateTimeChange()');
  assert.ok(appJs.includes('Shift A (07:00 - 15:00)'), 'app.js must compute Shift A');
  assert.ok(appJs.includes('Shift B (15:00 - 23:00)'), 'app.js must compute Shift B');
  assert.ok(appJs.includes('Shift C (23:00 - 07:00)'), 'app.js must compute Shift C');
});

// [MATH-05] Fix Incomplete Month Filter Scope
check('MATH-05', 'Fix Incomplete Month Filter Scope', () => {
  assert.ok(appJs.includes('for (let mo = 1; mo <= 12; mo++)'), 'app.js must generate all 12 calendar months');
  assert.ok(appJs.includes('populateDashboardMonths'), 'app.js must implement populateDashboardMonths()');
});

// [MATH-06] Reconcile Form Submission Validation Rules
check('MATH-06', 'Reconcile Form Submission Validation Rules', () => {
  assert.ok(appJs.includes('closedDate < issueDate'), 'app.js must reject closedDate earlier than issueDate');
  assert.ok(appJs.includes('Closed Date is strictly required when Status is Completed'), 'app.js must require closedDate on Completed status');
  assert.ok(appJs.includes('downtimeMinutes <= 0'), 'app.js must reject non-positive downtime');
  assert.ok(appJs.includes('affectedMachines < 1'), 'app.js must reject non-positive affectedMachines');
});

// [MATH-07] Clarify MTTR Scope & Display
check('MATH-07', 'Clarify MTTR Scope & Display', () => {
  const { calculateAuthoritativeMTTR } = require('../api/utils');
  const records = [
    { downtimeMinutes: 60, status: 'Completed' },
    { downtimeMinutes: 120, status: 'Completed' },
    { downtimeMinutes: 300, status: 'Open' }
  ];
  const mttr = calculateAuthoritativeMTTR(records);
  assert.strictEqual(mttr.mttrMinutes, 90); // (60 + 120) / 2 = 90 mins (Open ticket excluded!)
  assert.strictEqual(mttr.display, '90 min');

  const mttrEmpty = calculateAuthoritativeMTTR([]);
  assert.strictEqual(mttrEmpty.display, 'N/A');
});

// -----------------------------------------------------------------------------
// PHASE 3: STATE SYNCHRONIZATION & WORKFLOW (5 FIXES)
// -----------------------------------------------------------------------------

// [SYNC-01] Default Excel Import to Safe Append Mode
check('SYNC-01', 'Default Excel Import to Safe Append Mode', () => {
  assert.ok(indexHtml.includes('id="importModeAppend" name="importModeRadio" value="append" checked'), 'index.html must check append by default');
  assert.ok(indexHtml.includes('id="replaceWarningBanner"'), 'index.html must include replace warning banner');
});

// [SYNC-02] Eliminate Dual Master Settings Stores
check('SYNC-02', 'Eliminate Dual Master Settings Stores', () => {
  assert.ok(appJs.includes('saveMasterDataToStorage'), 'app.js must persist master data to unified storage');
  assert.ok(appJs.includes('initNatureFilterDropdown'), 'app.js must sync nature dropdown from master list');
});

// [SYNC-03] Live Database Stats in Master Settings
check('SYNC-03', 'Live Database Stats in Master Settings', () => {
  assert.ok(indexHtml.includes('id="dbSettingsIncidentCount"'), 'index.html must have dbSettingsIncidentCount');
  assert.ok(appJs.includes('dbCountEl.textContent = `${downtimeRecords.length} Incident Record'), 'app.js must bind record count dynamically');
});

// [SYNC-04] Clock & Shift Drift Mitigation
check('SYNC-04', 'Clock & Shift Drift Mitigation', () => {
  assert.ok(appJs.includes('function initLiveClock'), 'app.js must implement initLiveClock');
  assert.ok(appJs.includes('liveClockTimer'), 'app.js must manage liveClockTimer cleanly');
});

// [SYNC-05] Mutation Queue & Sync State for Offline Mutations
check('SYNC-05', 'Mutation Queue & Sync State for Offline Mutations', () => {
  assert.ok(supabaseClientJs.includes('MUTATION_QUEUE_KEY'), 'supabase-client.js must define MUTATION_QUEUE_KEY');
  assert.ok(supabaseClientJs.includes('queueMutation'), 'supabase-client.js must export queueMutation()');
  assert.ok(supabaseClientJs.includes('flushMutationQueue'), 'supabase-client.js must export flushMutationQueue()');
});

// -----------------------------------------------------------------------------
// PHASE 4: UI/UX USABILITY & ACCESSIBILITY (7 FIXES)
// -----------------------------------------------------------------------------

// [UI-01] Eliminate Hardcoded Nature Options in Filter
check('UI-01', 'Eliminate Hardcoded Nature Options in Filter', () => {
  // Check index.html filterNature doesn't have hardcoded MES Only/INFRA Only
  const natSelectMatch = indexHtml.match(/<select id="filterNature"[\s\S]*?<\/select>/);
  assert.ok(natSelectMatch, 'filterNature select must exist');
  assert.ok(!natSelectMatch[0].includes('MES Only'), 'filterNature must not hardcode MES Only');
  assert.ok(!natSelectMatch[0].includes('INFRA Only'), 'filterNature must not hardcode INFRA Only');
  assert.ok(appJs.includes('initNatureFilterDropdown'), 'app.js must populate filterNature dynamically');
});

// [UI-02] Dynamic Form Validation in Date Export Modal
check('UI-02', 'Dynamic Form Validation in Date Export Modal', () => {
  assert.ok(appJs.includes('selectMonth.setAttribute("required", "required")'), 'app.js must set required on month when month mode');
  assert.ok(appJs.includes('inputStart.setAttribute("required", "required")'), 'app.js must set required on dates when custom mode');
  assert.ok(appJs.includes('inputStart.disabled = true'), 'app.js must disable date inputs when month mode');
});

// [UI-03] Restrict Inline Master Quick-Add to Authorized Roles
check('UI-03', 'Restrict Inline Master Quick-Add to Authorized Roles', () => {
  assert.ok(appJs.includes('if (currentUser.role === "OPERATOR")'), 'app.js must check for OPERATOR role');
  assert.ok(appJs.includes('btnAddNewTech.classList.add("hidden")'), 'app.js must hide quick add technician for Operator');
});

// [UI-04] Fix Ambiguous Machine-Specific Checkbox Context & Clear Form
check('UI-04', 'Fix Ambiguous Machine-Specific Checkbox Context & Clear Form', () => {
  assert.ok(indexHtml.includes('id="btn-clear-form"'), 'index.html must have btn-clear-form');
  assert.ok(indexHtml.includes('id="btn-crit-no"'), 'index.html must have btn-crit-no');
  assert.ok(indexHtml.includes('id="btn-crit-yes"'), 'index.html must have btn-crit-yes');
});

// [UI-05] Reset Master Settings Input State on New Entry
check('UI-05', 'Reset Master Settings Input State on New Entry', () => {
  assert.ok(indexHtml.includes('ADD NEW'), 'index.html default state must be ADD NEW');
  assert.ok(appJs.includes('cancelMachineEdit'), 'app.js must reset editing badge on cancel');
});

// [UI-06] Accessible Modal Dialogs
check('UI-06', 'Accessible Modal Dialogs', () => {
  assert.ok(indexHtml.includes('id="detailsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop hidden" role="dialog" aria-modal="true"'), 'detailsModal must have role="dialog" aria-modal="true"');
  assert.ok(indexHtml.includes('id="confirmResetModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs hidden flex items-center justify-center p-4" role="dialog" aria-modal="true"'), 'confirmResetModal must have role="dialog" aria-modal="true"');
  assert.ok(appJs.includes('e.key === "Escape"'), 'app.js must handle Escape key dismiss');
});

// [UI-07] Canonicalize Application Title & Typo Remediation
check('UI-07', 'Canonicalize Application Title & Typo Remediation', () => {
  assert.ok(indexHtml.includes('<title>Plant IT Downtime Management Portal</title>'), 'HTML title must be Plant IT Downtime Management Portal');
  assert.ok(indexHtml.includes('Built by <span class="text-white font-extrabold tracking-normal">Hadssha Bell S</span> &amp; <span class="text-white font-extrabold tracking-normal">Reuben Geoffrey</span>'), 'Attribution must be Built by');
  assert.ok(indexHtml.includes('IT Downtime Entry'), 'Section header must be IT Downtime Entry');
  assert.ok(indexHtml.includes('Remarks (Optional)'), 'Remarks label must be Remarks (Optional)');
});

console.log('\n========================================================================');
console.log(`SUMMARY: ${passed} / ${total} TESTS PASSED (${Math.round((passed / total) * 100)}%)`);
console.log('========================================================================');

if (passed !== total) {
  process.exit(1);
}
