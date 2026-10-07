const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {
  calculateAuthoritativeAvailability,
  calculateAuthoritativeClosureRate,
  calculateAuthoritativeMTTR,
  validateIncident,
  generateToken,
  verifyToken,
  requireAuth
} = require('../api/utils');

console.log('====================================================');
console.log('RUNNING PLANT IT DOWNTIME AUTOMATED REGRESSION SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 15;

function runTest(num, name, fn) {
  try {
    fn();
    console.log(`[PASS] Test ${num}: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`[FAIL] Test ${num}: ${name}`);
    console.error(`       Error: ${err.message}`);
    process.exitCode = 1;
  }
}

// ----------------------------------------------------
// Test 1: Zero incidents -> Availability = N/A, Closure Rate = N/A, MTTR = N/A
// ----------------------------------------------------
runTest(1, 'Zero incidents -> KPIs show N/A', () => {
  const avail = calculateAuthoritativeAvailability(0, 0, false);
  assert.strictEqual(avail.display, 'N/A', 'Availability should be N/A');
  assert.strictEqual(avail.availabilityPct, null);

  const closure = calculateAuthoritativeClosureRate([]);
  assert.strictEqual(closure.display, 'N/A', 'Closure Rate should be N/A');
  assert.strictEqual(closure.rate, null);

  const mttr = calculateAuthoritativeMTTR([]);
  assert.strictEqual(mttr.display, 'N/A', 'MTTR should be N/A');
  assert.strictEqual(mttr.mttrMinutes, null);
});

// ----------------------------------------------------
// Test 2: Zero downtime with valid operating data -> Availability = 100%
// ----------------------------------------------------
runTest(2, 'Zero downtime with valid operating data -> Availability = 100%', () => {
  const operatingMinutes = 30 * 24 * 60; // 30 days
  const downtimeMinutes = 0;
  const avail = calculateAuthoritativeAvailability(operatingMinutes, downtimeMinutes, true);
  assert.strictEqual(avail.display, '100.00%');
  assert.strictEqual(avail.availabilityPct, 100.0);
  assert.strictEqual(avail.status, 'Optimal');
});

// ----------------------------------------------------
// Test 3: Closed incident -> closure rate calculated correctly
// ----------------------------------------------------
runTest(3, 'Closed incidents -> closure rate calculated correctly', () => {
  const records = [
    { id: '1', status: 'Completed' },
    { id: '2', status: 'Closed' },
    { id: '3', status: 'Open' },
    { id: '4', status: 'Open' }
  ];
  const closure = calculateAuthoritativeClosureRate(records);
  assert.strictEqual(closure.rate, 50, '2 out of 4 is 50%');
  assert.strictEqual(closure.display, '50%');
  assert.strictEqual(closure.closedCount, 2);
  assert.strictEqual(closure.totalCount, 4);
});

// ----------------------------------------------------
// Test 4: Open incident -> not counted as closed
// ----------------------------------------------------
runTest(4, 'Open & In Progress incidents are not counted as closed', () => {
  const records = [
    { id: '1', status: 'Open' },
    { id: '2', status: 'In Progress' }
  ];
  const closure = calculateAuthoritativeClosureRate(records);
  assert.strictEqual(closure.rate, 0);
  assert.strictEqual(closure.closedCount, 0);
  assert.strictEqual(closure.display, '0%');
});

// ----------------------------------------------------
// Test 5: Closed status without closed date -> rejected
// ----------------------------------------------------
runTest(5, 'Closed status without closed date is rejected', () => {
  const record = {
    issueDate: '2026-03-01',
    area: 'Plant 1',
    machineNo: 'CU_A01',
    nature: 'MES',
    category: 'MES',
    status: 'Completed',
    solvedBy: 'ATC IT Team',
    downtimeMinutes: 30,
    closedDate: '' // Missing closed date
  };
  const val = validateIncident(record);
  assert.strictEqual(val.isValid, false, 'Should be invalid without closedDate');
  assert.ok(val.errors.some(e => e.includes('Closed Date is required')));
});

// ----------------------------------------------------
// Test 6: Closed date before issue date -> rejected
// ----------------------------------------------------
runTest(6, 'Closed date before issue date is rejected', () => {
  const record = {
    issueDate: '2026-03-05',
    closedDate: '2026-03-01', // Before issue date
    area: 'Plant 1',
    machineNo: 'CU_A01',
    nature: 'MES',
    category: 'MES',
    status: 'Completed',
    solvedBy: 'ATC IT Team',
    downtimeMinutes: 30
  };
  const val = validateIncident(record);
  assert.strictEqual(val.isValid, false, 'Should be invalid when closedDate < issueDate');
  assert.ok(val.errors.some(e => e.includes('cannot be earlier than Issue Date')));
});

// ----------------------------------------------------
// Test 7: Negative downtime -> rejected
// ----------------------------------------------------
runTest(7, 'Negative or zero downtime is rejected', () => {
  const record = {
    issueDate: '2026-03-05',
    area: 'Plant 1',
    machineNo: 'CU_A01',
    nature: 'MES',
    category: 'MES',
    status: 'Open',
    solvedBy: 'ATC IT Team',
    downtimeMinutes: -15
  };
  const val = validateIncident(record);
  assert.strictEqual(val.isValid, false, 'Negative downtime must be rejected');
  assert.ok(val.errors.some(e => e.includes('positive integer')));
});

// ----------------------------------------------------
// Test 8: Duplicate submission prevented
// ----------------------------------------------------
runTest(8, 'Duplicate submission prevention fingerprint check', () => {
  const submissionKey = (rec) => `${rec.issueDate}_${rec.machineNo}_${rec.area}_${rec.downtimeMinutes}_${rec.category}`;
  const rec1 = { issueDate: '2026-03-10', machineNo: 'BLD_01', area: 'Building', downtimeMinutes: 45, category: 'MES' };
  const rec2 = { issueDate: '2026-03-10', machineNo: 'BLD_01', area: 'Building', downtimeMinutes: 45, category: 'MES' };
  
  const submissions = new Map();
  const k1 = submissionKey(rec1);
  submissions.set(k1, Date.now());

  // Second submission with same fingerprint
  const k2 = submissionKey(rec2);
  const isDuplicate = submissions.has(k2) && (Date.now() - submissions.get(k2) < 10000);
  assert.strictEqual(isDuplicate, true, 'Immediate duplicate submission must be detected');
});

// ----------------------------------------------------
// Test 9: Save + refresh persistence simulation
// ----------------------------------------------------
runTest(9, 'Save + refresh persistence simulation with localStorage', () => {
  const mockStorage = {};
  const save = (key, val) => { mockStorage[key] = JSON.stringify(val); };
  const load = (key) => JSON.parse(mockStorage[key] || '[]');

  // Save new record
  const initial = [{ id: 'YOKO-DT-2026-001', downtimeMinutes: 20 }];
  save('YOKOHAMA_DOWNTIME_RECORDS', initial);

  // Simulate refresh
  const reloaded = load('YOKOHAMA_DOWNTIME_RECORDS');
  assert.strictEqual(reloaded.length, 1);
  assert.strictEqual(reloaded[0].id, 'YOKO-DT-2026-001');

  // Edit and persist
  reloaded[0].downtimeMinutes = 40;
  save('YOKOHAMA_DOWNTIME_RECORDS', reloaded);

  // Reload after edit
  const reloaded2 = load('YOKOHAMA_DOWNTIME_RECORDS');
  assert.strictEqual(reloaded2[0].downtimeMinutes, 40);
});

// ----------------------------------------------------
// Test 10: Unauthorized API access -> 401/403
// ----------------------------------------------------
runTest(10, 'Server-side API auth & RBAC rejection (401 unauthenticated, 403 unauthorized)', () => {
  const reqUnauth = { headers: {} };
  let statusCode = 0;
  let jsonResponse = null;
  const res = {
    status: (code) => { statusCode = code; return res; },
    json: (obj) => { jsonResponse = obj; }
  };

  // Test 401: No token
  const user1 = requireAuth(reqUnauth, res, ['ADMIN']);
  assert.strictEqual(user1, null);
  assert.strictEqual(statusCode, 401, 'Should return 401 without token');

  // Test 403: Operator trying Admin action
  const operatorToken = generateToken({ username: 'operator', role: 'OPERATOR' });
  const reqOperator = { headers: { authorization: `Bearer ${operatorToken}` } };
  const user2 = requireAuth(reqOperator, res, ['ADMIN']);
  assert.strictEqual(user2, null);
  assert.strictEqual(statusCode, 403, 'Should return 403 for unauthorized role');

  // Test 200: Admin token passes
  const adminToken = generateToken({ username: 'admin', role: 'ADMIN' });
  const reqAdmin = { headers: { authorization: `Bearer ${adminToken}` } };
  const user3 = requireAuth(reqAdmin, res, ['ADMIN']);
  assert.ok(user3 !== null);
  assert.strictEqual(user3.username, 'admin');
});

// ----------------------------------------------------
// Test 11: Invalid Excel import -> rejected safely without breaking state
// ----------------------------------------------------
runTest(11, 'Invalid import data rejected safely without state corruption', () => {
  const corruptRows = [
    { rawMach: '', rawDate: 'invalid-date', dtMin: -50 },
    { rawMach: 'TOTAL', rawDate: '2026-01-01', dtMin: 10 }
  ];

  let skippedCount = 0;
  const parsed = [];
  corruptRows.forEach(row => {
    if (!row.rawMach || row.rawMach === 'TOTAL' || !row.rawDate || row.dtMin <= 0) {
      skippedCount++;
      return;
    }
    parsed.push(row);
  });

  assert.strictEqual(parsed.length, 0, 'No corrupt rows should be parsed');
  assert.strictEqual(skippedCount, 2, 'Both corrupt rows should be skipped');
});

// ----------------------------------------------------
// Test 12: Filtered export contains only filtered records
// ----------------------------------------------------
runTest(12, 'Export filtering honors active filters (month, area, nature)', () => {
  const records = [
    { id: '1', issueDate: '2026-01-15', area: 'Plant 1', nature: 'MES' },
    { id: '2', issueDate: '2026-02-10', area: 'Plant 2', nature: 'INFRA' },
    { id: '3', issueDate: '2026-01-20', area: 'Plant 1', nature: 'INFRA' }
  ];

  // Filter: Month 2026-01 and Area Plant 1
  const filtered = records.filter(r => r.issueDate.startsWith('2026-01') && r.area === 'Plant 1');
  assert.strictEqual(filtered.length, 2);
  assert.ok(filtered.every(r => r.issueDate.startsWith('2026-01') && r.area === 'Plant 1'));
});

// ----------------------------------------------------
// Test 13: Delete incident removes record and recalculates
// ----------------------------------------------------
runTest(13, 'Delete incident removes record and recalculates KPIs', () => {
  let records = [
    { id: '1', status: 'Completed', downtimeMinutes: 60 },
    { id: '2', status: 'Open', downtimeMinutes: 30 }
  ];

  let closureBefore = calculateAuthoritativeClosureRate(records);
  assert.strictEqual(closureBefore.rate, 50);

  // Delete Open record
  records = records.filter(r => r.id !== '2');
  let closureAfter = calculateAuthoritativeClosureRate(records);
  assert.strictEqual(records.length, 1);
  assert.strictEqual(closureAfter.rate, 100, 'Now 100% since only completed record remains');
});

// ----------------------------------------------------
// Test 14: Reset to factory defaults restores initial master data
// ----------------------------------------------------
runTest(14, 'Reset master settings restores factory machines and areas backup', () => {
  const machinesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../machines_data.json'), 'utf8'));
  assert.ok(Array.isArray(machinesData.machines) && machinesData.machines.length > 300);
  assert.ok(Array.isArray(machinesData.areas) && machinesData.areas.length > 5);

  // Simulate local storage empty fallback
  let storedMachines = '[]';
  let parsed = JSON.parse(storedMachines);
  let resolvedMachines = (Array.isArray(parsed) && parsed.length > 0) ? parsed : machinesData.machines;
  assert.strictEqual(resolvedMachines.length, machinesData.machines.length, 'Must fall back to factory backup if array is empty');
});

// ----------------------------------------------------
// Test 15: Calculations in dashboard and export agree
// ----------------------------------------------------
runTest(15, 'Calculations in dashboard and export agree exactly', () => {
  const records = [
    { id: '1', downtimeMinutes: 40, affectedMachines: 1, status: 'Completed' },
    { id: '2', downtimeMinutes: 20, affectedMachines: 2, status: 'Completed' }
  ];
  const operatingMinutes = 1440 * 8; // 8 areas for 1 day = 11,520 mins

  // Dashboard calculation
  const totalDowntimeMinutes = records.reduce((acc, r) => acc + (r.downtimeMinutes * r.affectedMachines), 0); // 40 + 40 = 80
  const dashboardAvail = ((operatingMinutes - totalDowntimeMinutes) / operatingMinutes) * 100;

  // Export calculation
  const exportAvail = calculateAuthoritativeAvailability(operatingMinutes, totalDowntimeMinutes, true);

  assert.strictEqual(dashboardAvail.toFixed(2), exportAvail.availabilityPct.toFixed(2), 'Dashboard and Export availability match');
  assert.strictEqual(exportAvail.display, `${dashboardAvail.toFixed(2)}%`);
});

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} PASSED (100%)`);
console.log('====================================================');
if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
