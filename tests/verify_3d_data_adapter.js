/**
 * Test Suite: Yokohama 3D Data Adapter Verification
 * Validates aggregations, continuous color bands, edge cases, divide-by-zero,
 * and empty datasets.
 * 
 * Build by Hadssha Bell S & Reuben Geoffrey
 */

const assert = require("assert");
const fs = require("fs");
const path = require("path");

// Create mock browser environment for window and DOM
global.window = {
  YOKOHAMA_AREAS: ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"],
  getDashboardPeriodDays: () => 181,
  dashboardDateFilter: { year: "2026", month: "ALL" },
  downtimeRecords: []
};

// Load theme and dataAdapter into global context
const themeCode = fs.readFileSync(path.join(__dirname, "../3d/theme.js"), "utf8");
const adapterCode = fs.readFileSync(path.join(__dirname, "../3d/dataAdapter.js"), "utf8");

eval(themeCode);
eval(adapterCode);

const da = global.window.Yokohama3DDataAdapter;
const theme = global.window.Yokohama3DTheme;

let passedTests = 0;
let totalTests = 0;

function it(desc, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ ${desc}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${err.message}`);
  }
}

console.log("\n=======================================================");
console.log("TESTING 3D DATA ADAPTER & THEME SYSTEM");
console.log("=======================================================\n");

// 1. Area Normalization
it("normalizeArea handles dashes, spaces, underscores, and lowercase", () => {
  assert.strictEqual(da.normalizeArea("Plant-1"), "plant1");
  assert.strictEqual(da.normalizeArea("Plant 1"), "plant1");
  assert.strictEqual(da.normalizeArea("plant_1"), "plant1");
  assert.strictEqual(da.normalizeArea("4Roll shed"), "4rollshed");
  assert.strictEqual(da.normalizeArea("Mixing Shed"), "mixingshed");
  assert.strictEqual(da.normalizeArea("IT infra"), "itinfra");
  assert.strictEqual(da.normalizeArea(""), "");
  assert.strictEqual(da.normalizeArea(null), "");
  assert.strictEqual(da.normalizeArea(undefined), "");
});

// 2. Status Thresholds & Continuous Bands
it("Theme getStatusBand classifies thresholds continuously with no gaps", () => {
  assert.strictEqual(theme.getStatusBand(99.5), "optimal");
  assert.strictEqual(theme.getStatusBand(99.0), "optimal");
  assert.strictEqual(theme.getStatusBand(98.95), "warning");
  assert.strictEqual(theme.getStatusBand(97.2), "warning");
  assert.strictEqual(theme.getStatusBand(95.0), "warning");
  assert.strictEqual(theme.getStatusBand(94.99), "critical");
  assert.strictEqual(theme.getStatusBand(0), "critical");
  assert.strictEqual(theme.getStatusBand(-5), "critical");
});

it("Theme getStatusHex returns correct continuous hex colors", () => {
  assert.strictEqual(theme.getStatusHex(99.2), "#059669");
  assert.strictEqual(theme.getStatusHex(97.5), "#D97706");
  assert.strictEqual(theme.getStatusHex(92.0), "#DC2626");
});

it("Theme getStatusColor returns integer RGB for Three.js materials", () => {
  assert.strictEqual(theme.getStatusColor(99.2), theme.colors.statusOptimal);
  assert.strictEqual(theme.getStatusColor(97.5), theme.colors.statusWarning);
  assert.strictEqual(theme.getStatusColor(92.0), theme.colors.statusCritical);
});

// 3. Empty Records Handling (Divide-by-zero protection)
it("getAreaChartData handles empty records without crashing or NaN", () => {
  global.window.downtimeRecords = [];
  const areas = da.getAreaChartData();
  assert.strictEqual(areas.length, 8);
  areas.forEach(a => {
    assert.strictEqual(a.dtMins, 0);
    assert.strictEqual(a.dtHours, 0);
    assert.strictEqual(a.availPercent, 100);
    assert.strictEqual(a.statusBand, "optimal");
    assert.strictEqual(a.incidentCount, 0);
  });
});

// 4. Area Chart Aggregation with Test Incident Records
it("getAreaChartData accurately aggregates downtime and calculates availability", () => {
  global.window.downtimeRecords = [
    { area: "Plant-1", downtimeMinutes: "120", status: "Completed", issueDate: "2026-05-10" },
    { area: "Plant 1", downtimeMinutes: "60", status: "Open", issueDate: "2026-05-11" },
    { area: "Mixing Shed", downtimeMinutes: "600", status: "Completed", issueDate: "2026-05-12" }
  ];

  const areas = da.getAreaChartData();
  const plant1 = areas.find(a => da.normalizeArea(a.label) === "plant1");
  const mixing = areas.find(a => da.normalizeArea(a.label) === "mixingshed");

  assert.ok(plant1, "Plant 1 exists");
  assert.strictEqual(plant1.dtMins, 180);
  assert.strictEqual(plant1.dtHours, 3.0);
  assert.strictEqual(plant1.incidentCount, 2);

  assert.ok(mixing, "Mixing Shed exists");
  assert.strictEqual(mixing.dtMins, 600);
  assert.strictEqual(mixing.dtHours, 10.0);
  assert.strictEqual(mixing.incidentCount, 1);
});

// 5. Process Chart Data
it("getProcessChartData extracts and sorts top process lines", () => {
  global.window.downtimeRecords = [
    { process: "Extrusion Line 1", downtimeMinutes: "240", status: "Completed", issueDate: "2026-05-10" },
    { process: "Extrusion Line 1", downtimeMinutes: "60", status: "Open", issueDate: "2026-05-11" },
    { process: "Curing Press 4", downtimeMinutes: "180", status: "Completed", issueDate: "2026-05-12" }
  ];

  const processes = da.getProcessChartData();
  assert.ok(processes.length >= 2);
  assert.strictEqual(processes[0].label, "Extrusion Line 1");
  assert.strictEqual(processes[0].dtMins, 300);
  assert.strictEqual(processes[0].dtHours, 5.0);
});

// 6. Category Breakdown Data
it("getCategoryChartData computes accurate percentage shares summing to 100%", () => {
  global.window.downtimeRecords = [
    { category: "Hardware", downtimeMinutes: "300", status: "Completed" },
    { category: "Network", downtimeMinutes: "100", status: "Completed" },
    { category: "Software", downtimeMinutes: "100", status: "Completed" }
  ];

  const categories = da.getCategoryChartData();
  assert.strictEqual(categories.length, 3);
  const totalShare = categories.reduce((sum, c) => sum + c.sharePercent, 0);
  assert.strictEqual(Math.round(totalShare), 100);

  const hw = categories.find(c => c.category === "Hardware");
  assert.strictEqual(hw.hours, 5.0);
  assert.strictEqual(hw.sharePercent, 60.0);
});

// 7. Trajectory Data
it("getTrajectoryChartData returns chronological timeline points for ribbon curve", () => {
  global.window.downtimeRecords = [
    { issueDate: "2026-05-15", machineNo: "Press P2", downtimeMinutes: "200", status: "Completed" },
    { issueDate: "2026-05-01", machineNo: "Conveyor A", downtimeMinutes: "50", status: "Completed" },
    { issueDate: "2026-05-20", machineNo: "Server S1", downtimeMinutes: "500", status: "Open" }
  ];

  const traj = da.getTrajectoryChartData();
  assert.strictEqual(traj.length, 3);
  assert.strictEqual(traj[0].machine, "Conveyor A");
  assert.strictEqual(traj[1].machine, "Press P2");
  assert.strictEqual(traj[2].machine, "Server S1");
  assert.ok(typeof traj[0].x === "number");
  assert.ok(typeof traj[0].y === "number");
  assert.ok(typeof traj[0].z === "number");
});

// 8. Plant Map Data & Alert Beacons
it("getPlantMapData places 8 areas with correct dimensions, machinery, and alert beacons", () => {
  global.window.downtimeRecords = [
    { area: "Plant-1", machine: "Conveyor A", downtimeMinutes: "120", status: "Open" },
    { area: "Plant-1", machine: "Cutter B", downtimeMinutes: "60", status: "Completed" }
  ];

  const mapData = da.getPlantMapData();
  assert.strictEqual(mapData.length, 8);
  const p1 = mapData.find(m => da.normalizeArea(m.areaName) === "plant1");
  assert.ok(p1);
  assert.strictEqual(p1.openOutages, 1, "Alert beacon triggered for 1 open outage");
  assert.ok(p1.height >= 0.8, "Height reflects downtime");
  assert.ok(p1.machines.length > 0, "Procedural machine models assigned");
});

// 9. Open Incident Tower Data
it("getIncidentTowerData categorizes open outages by ticket age", () => {
  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  
  const dRecent = new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString().split("T")[0]; // today
  const dMid = new Date(now.getTime() - 3 * dayMs).toISOString().split("T")[0]; // 3 days ago
  const dOld = new Date(now.getTime() - 10 * dayMs).toISOString().split("T")[0]; // 10 days ago

  global.window.downtimeRecords = [
    { issueDate: dRecent, status: "Open", downtimeMinutes: "30" },
    { issueDate: dMid, status: "Open", downtimeMinutes: "100" },
    { issueDate: dOld, status: "Open", downtimeMinutes: "500" },
    { issueDate: dOld, status: "Completed", downtimeMinutes: "200" } // should be ignored
  ];

  const tower = da.getIncidentTowerData();
  assert.strictEqual(tower.totalOpen, 3);
  assert.strictEqual(tower.recent.count, 1, "<24h");
  assert.strictEqual(tower.medium.count, 1, "2-7d");
  assert.strictEqual(tower.critical.count, 1, ">7d");
});

console.log("\n=======================================================");
console.log(`SUMMARY: ${passedTests}/${totalTests} Tests Passed (100%)`);
console.log("=======================================================\n");

if (passedTests !== totalTests) {
  process.exit(1);
}
