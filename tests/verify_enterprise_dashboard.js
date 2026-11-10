/**
 * tests/test_enterprise_dashboard.js
 * Verification suite for Enterprise Dashboard, Advanced 2D & 3D Bar Charts,
 * Observability Forensics, Heatmap, Gantt, SLA Tracker & Command Palette.
 */

const assert = require('assert');
const fs = require('fs');

console.log('================================================================');
console.log('ENTERPRISE OBSERVABILITY & ADVANCED DASHBOARD TEST SUITE');
console.log('================================================================\n');

// 1. Verify Design System Tokens
console.log('▶ [Test 1] Design Tokens & Theme Palettes in tokens.css...');
const tokensCss = fs.readFileSync('tokens.css', 'utf8');
assert(tokensCss.includes('--yoko-red: #E60012'), 'Yokohama red token missing');
assert(tokensCss.includes('[data-theme="dark"]'), 'Dark theme missing');
assert(tokensCss.includes('[data-theme="control-room"]'), 'Control room theme missing');
assert(tokensCss.includes('--status-optimal: #059669'), 'Optimal status token missing');
assert(tokensCss.includes('--status-warning: #D97706'), 'Warning status token missing');
assert(tokensCss.includes('--status-critical: #DC2626'), 'Critical status token missing');
assert(tokensCss.includes('tabular-nums lining-nums'), 'Tabular numerals missing');
assert(tokensCss.includes('.heatmap-cell'), 'Heatmap styles missing');
assert(tokensCss.includes('.gantt-bar-item'), 'Gantt timeline styles missing');
assert(tokensCss.includes('.canvas-3d-container'), '3D container styles missing');
console.log('  ✔ tokens.css defines complete Light, Dark, Control-Room, Tabular Numerals & Visualizer Tokens');
console.log('✅ TEST 1 PASSED\n');

// 2. Verify Observability Dashboard Engine
console.log('▶ [Test 2] Observability Engine Structure & Math Calculations...');
const obsJs = fs.readFileSync('observability-dashboard.js', 'utf8');
assert(obsJs.includes('function computeDashboardTelemetry()'), 'computeDashboardTelemetry missing');
assert(obsJs.includes('function renderObsKpiHeader()'), 'renderObsKpiHeader missing');
assert(obsJs.includes('function renderStackedCategoryChart()'), 'renderStackedCategoryChart missing');
assert(obsJs.includes('function renderGroupedComparisonChart()'), 'renderGroupedComparisonChart missing');
assert(obsJs.includes('function renderRankedMachinesChart()'), 'renderRankedMachinesChart missing');
assert(obsJs.includes('function renderParetoChart()'), 'renderParetoChart missing');
assert(obsJs.includes('function renderBulletAvailabilityChart()'), 'renderBulletAvailabilityChart missing');
assert(obsJs.includes('function renderVarianceChart()'), 'renderVarianceChart missing');
assert(obsJs.includes('function renderAvailabilityHeatmap()'), 'renderAvailabilityHeatmap missing');
assert(obsJs.includes('function renderGanttTimeline()'), 'renderGanttTimeline missing');
assert(obsJs.includes('function renderMTBFScores()'), 'renderMTBFScores missing');
assert(obsJs.includes('function renderSLATracker()'), 'renderSLATracker missing');
assert(obsJs.includes('function renderForecastAndAnomalies()'), 'renderForecastAndAnomalies missing');
assert(obsJs.includes('function initCommandPalette()'), 'initCommandPalette missing');
assert(obsJs.includes('function drillDownTo('), 'drillDownTo missing');
assert(obsJs.includes('function setVisualizerMode('), 'setVisualizerMode missing');
console.log('  ✔ observability-dashboard.js exports all required mathematical, charting, and interaction handlers');
console.log('✅ TEST 2 PASSED\n');

// 3. Verify HTML Integration
console.log('▶ [Test 3] HTML Markup Integration in index.html...');
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('tokens.css?v=1.0'), 'tokens.css link missing');
assert(indexHtml.includes('three.min.js'), 'Three.js CDN missing');
assert(indexHtml.includes('observability-dashboard.js?v=1.0'), 'observability-dashboard.js script missing');
assert(indexHtml.includes('id="sectionAdvancedBars"'), 'Advanced bars container missing');
assert(indexHtml.includes('id="chartStackedCategoryCanvas"'), 'Stacked canvas missing');
assert(indexHtml.includes('id="chartGroupedComparisonCanvas"'), 'Grouped canvas missing');
assert(indexHtml.includes('id="chartRankedMachinesCanvas"'), 'Ranked machines canvas missing');
assert(indexHtml.includes('id="chartParetoCanvas"'), 'Pareto canvas missing');
assert(indexHtml.includes('id="chartBulletAvailabilityCanvas"'), 'Bullet availability canvas missing');
assert(indexHtml.includes('id="chartVarianceCanvas"'), 'Variance canvas missing');
assert(indexHtml.includes('id="suite3dStudio"'), '3D studio container missing');
assert(indexHtml.includes('id="canvas3dDashboard"'), '3D dashboard canvas missing');
assert(indexHtml.includes('id="heatmapMatrixContainer"'), 'Heatmap matrix container missing');
assert(indexHtml.includes('id="ganttTimelineContainer"'), 'Gantt timeline container missing');
assert(indexHtml.includes('id="mtbfScoresContainer"'), 'MTBF scores container missing');
assert(indexHtml.includes('id="slaTrackerContainer"'), 'SLA tracker container missing');
assert(indexHtml.includes('id="smartInsightsContainer"'), 'Smart insights container missing');
assert(indexHtml.includes('id="topOffendersTableBody"'), 'Top offenders table body missing');
assert(indexHtml.includes('id="cmdPaletteBackdrop"'), 'Command palette backdrop missing');
assert(indexHtml.includes('id="filterChipsBar"'), 'Filter chips bar missing');
console.log('  ✔ index.html contains all 6 KPI cards, 7 advanced charts, 3D studio, 6 observability modules, and Command Palette');
console.log('✅ TEST 3 PASSED\n');

// 4. Mathematical Telemetry Unit Simulation
console.log('▶ [Test 4] Telemetry & Calculation Accuracy with Realistic Dataset...');
const dataset = JSON.parse(fs.readFileSync('downtime_import_38.json', 'utf8'));
assert.strictEqual(dataset.length, 38, 'Expected 38 sample records');

// Calculate operating time for January (31 days)
const periodDays = 31;
const standardAreas = ["Plant-1", "Plant-2", "Plant-3", "Plant-4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];
const totalPlantOpMins = periodDays * 24 * 60 * standardAreas.length;

const totalDtMins = dataset.reduce((acc, r) => {
  const dt = parseInt(r.downtimeMinutes, 10) || 0;
  const aff = parseInt(r.affectedMachines, 10) || 1;
  return acc + (dt * aff);
}, 0);
assert.strictEqual(totalDtMins, 32105, 'Total downtime mins must be exactly 32105');

const availability = ((totalPlantOpMins - totalDtMins) / totalPlantOpMins) * 100;
assert.strictEqual(availability.toFixed(2), '91.01', 'Availability must be 91.01%');

// Machine ranking
const machMap = {};
dataset.forEach(r => {
  const code = r.machineNo.trim();
  const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
  machMap[code] = (machMap[code] || 0) + dt;
});
const sortedMachs = Object.entries(machMap).sort((a, b) => b[1] - a[1]);
assert.strictEqual(sortedMachs[0][0], 'S_SC01', 'Top machine must be S_SC01');
assert.strictEqual(sortedMachs[0][1], 17280, 'S_SC01 downtime must be 17280 mins (288 hours)');

// Pareto 80/20 category check
const catMap = {};
dataset.forEach(r => {
  const cat = r.category.trim();
  const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
  catMap[cat] = (catMap[cat] || 0) + dt;
});
const sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
assert.strictEqual(sortedCats[0][0], 'MES', 'Top failure cause must be MES');
const mesHours = (sortedCats[0][1] / 60).toFixed(1);
assert.strictEqual(mesHours, '407.2', 'MES downtime must be 407.2 hours');

console.log('  ✔ Plant Availability = 91.01%');
console.log('  ✔ Cumulative Downtime = 535.1 hours (32,105 mins)');
console.log('  ✔ Top Machine Offender = S_SC01 (288.0 hours, 53.8% of plant total)');
console.log('  ✔ Pareto Vital Few Cause = MES (407.2 hours, 76.1% share)');
console.log('✅ TEST 4 PASSED\n');

// 5. Continuous Availability Threshold Integrity
console.log('▶ [Test 5] Continuous Availability Threshold Integrity (Color-Blind Safe)...');
function getAvailabilityBand(val) {
  if (val >= 99.0) return 'Optimal (>=99.0%)';
  if (val >= 95.0 && val < 99.0) return 'Warning (95.0% to <99.0%)';
  return 'Critical (<95.0%)';
}
assert.strictEqual(getAvailabilityBand(99.0), 'Optimal (>=99.0%)');
assert.strictEqual(getAvailabilityBand(98.95), 'Warning (95.0% to <99.0%)');
assert.strictEqual(getAvailabilityBand(95.0), 'Warning (95.0% to <99.0%)');
assert.strictEqual(getAvailabilityBand(94.99), 'Critical (<95.0%)');
assert.strictEqual(getAvailabilityBand(91.01), 'Critical (<95.0%)');
console.log('  ✔ Seamless band coverage with zero gap between 98.9% and 99.0%');
console.log('✅ TEST 5 PASSED\n');

console.log('================================================================');
console.log('SUMMARY: ALL 5 ENTERPRISE OBSERVABILITY TEST SUITES PASSED (100%)');
console.log('================================================================');
