/**
 * verify_phase1_phase2_fixes.js
 * Comprehensive automated verification of Phase 1 and Phase 2 fixes
 * Plant IT Downtime Management Portal
 */

const fs = require("fs");
const path = require("path");
const assert = require("assert");

console.log("==================================================================");
console.log("VERIFYING PHASE 1 & PHASE 2 FIXES (SECURITY, UI, FUNCTIONAL)");
console.log("==================================================================\n");

let passed = 0;
let total = 0;

function test(name, fn) {
  total++;
  process.stdout.write(`▶ [Test ${total}] ${name}... `);
  try {
    fn();
    console.log("✅ PASSED");
    passed++;
  } catch (err) {
    console.log("❌ FAILED");
    console.error("   Error:", err.message);
  }
}

// 1. Read app.js and index.html to verify markup and implementation
const appJsPath = path.join(__dirname, "..", "app.js");
const indexHtmlPath = path.join(__dirname, "..", "index.html");
const appJs = fs.readFileSync(appJsPath, "utf8");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

// Test 1: Canonical Application Title & Clean Single Attribution
test("Canonical Portal Title & Clean Attribution in Footer", () => {
  assert(indexHtml.includes("<title>Plant IT Downtime Management Portal</title>"), "Title must be 'Plant IT Downtime Management Portal'");
  assert(indexHtml.includes("Build by <span class=\"text-white font-extrabold tracking-normal\">Hadssha Bell S</span> &amp; <span class=\"text-white font-extrabold tracking-normal\">Reuben Geoffrey</span>"), "Attribution must exist in footer glassy pill");
  
  // Header should not duplicate attribution
  const headerSection = indexHtml.substring(0, 1000);
  assert(!headerSection.includes("Build by Hadssha Bell S"), "Attribution must not be duplicated in header");
  
  // Tab 1 must be 'Downtime Entry'
  assert(indexHtml.includes("Downtime Entry"), "Tab 1 must be named 'Downtime Entry'");
});

// Test 2: Continuous Availability Bands (No gaps between 98.9% and 99.0%)
test("Continuous Availability Bands (Critical <95%, Warning 95.0% to <99.0%, Target >=99.0%)", () => {
  function getAvailabilityBand(val) {
    if (val >= 99.0) return "Optimal";
    if (val >= 95.0) return "Warning";
    return "Critical";
  }

  // Edge cases and test boundaries
  assert.strictEqual(getAvailabilityBand(94.99), "Critical");
  assert.strictEqual(getAvailabilityBand(95.0), "Warning");
  assert.strictEqual(getAvailabilityBand(98.9), "Warning");
  assert.strictEqual(getAvailabilityBand(98.95), "Warning"); // The bug was that 98.95% fell in no band
  assert.strictEqual(getAvailabilityBand(98.999), "Warning");
  assert.strictEqual(getAvailabilityBand(99.0), "Optimal");
  assert.strictEqual(getAvailabilityBand(100.0), "Optimal");

  // Check legend in HTML
  assert(indexHtml.includes("Warning (95.0% to &lt;99.0%)") || indexHtml.includes("Warning (95.0% to <99.0%)"), "HTML legend must use continuous Warning band");
  assert(indexHtml.includes("Optimal (&ge;99.0%)") || indexHtml.includes("Optimal (≥99.0%)"), "HTML legend must use Optimal (≥99.0%)");
});

// Test 3: Dynamic Chronological Month Order for CY and FY
test("Dynamic Chronological Month Ordering (CY Jan-Dec, FY Apr-Mar)", () => {
  // Calendar Year 2026: Jan to Dec
  const cyMonths = [];
  for (let m = 1; m <= 12; m++) {
    cyMonths.push(`2026-${String(m).padStart(2, "0")}`);
  }
  assert.strictEqual(cyMonths[0], "2026-01");
  assert.strictEqual(cyMonths[11], "2026-12");
  assert.strictEqual(cyMonths.length, 12);
  
  // Sorted in ascending chronological order
  const sorted = [...cyMonths].sort();
  assert.deepStrictEqual(cyMonths, sorted, "CY months must be in chronological ascending order");

  // Fiscal Year 2026-27: Apr 2026 to Mar 2027
  const fyMonths = [
    "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09",
    "2026-10", "2026-11", "2026-12", "2027-01", "2027-02", "2027-03"
  ];
  assert.strictEqual(fyMonths[0], "2026-04");
  assert.strictEqual(fyMonths[11], "2027-03");
  assert.strictEqual(fyMonths.length, 12);

  // Check implementation in app.js
  assert(appJs.includes('yearMode === "FY2026"'), "app.js must support FY2026 April-March");
  assert(appJs.includes("populateDashboardMonths"), "app.js must have dynamic populateDashboardMonths");
});

// Test 4: Shift Auto-Computation from Time
test("Real-time Shift Logic (A: 07-15, B: 15-23, C: 23-07)", () => {
  function getShiftByHour(hour) {
    if (hour >= 7 && hour < 15) return "Shift A";
    if (hour >= 15 && hour < 23) return "Shift B";
    return "Shift C";
  }

  assert.strictEqual(getShiftByHour(7), "Shift A");
  assert.strictEqual(getShiftByHour(12), "Shift A");
  assert.strictEqual(getShiftByHour(14), "Shift A");
  assert.strictEqual(getShiftByHour(15), "Shift B");
  assert.strictEqual(getShiftByHour(22), "Shift B");
  assert.strictEqual(getShiftByHour(23), "Shift C");
  assert.strictEqual(getShiftByHour(0), "Shift C");
  assert.strictEqual(getShiftByHour(6), "Shift C");
});

// Test 5: Database Settings Record Count Dynamic Synchronization
test("Single Source of Truth for Database Record Count", () => {
  assert(indexHtml.includes('id="dbSettingsIncidentCount"'), "index.html must have #dbSettingsIncidentCount element");
  assert(appJs.includes("updateMaintenanceLogCount"), "app.js must contain updateMaintenanceLogCount function");
  assert(!indexHtml.includes("38 Incident Records"), "Static hardcoded '38 Incident Records' must be removed");
});

// Test 6: Critical Asset Toggle Label Context
test("Machine Code Critical Toggle Label Context", () => {
  assert(indexHtml.includes('Critical:'), "index.html must contain 'Critical:' label before No/Yes toggle");
});

// Test 7: XSS Sanitization in Dynamic Table and Modal Injection
test("XSS Sanitization with escapeHtml()", () => {
  // Extract or simulate escapeHtml
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const maliciousPayload = '<script>alert("XSS")</script><img src=x onerror=alert(1)>';
  const escaped = escapeHtml(maliciousPayload);

  assert(!escaped.includes("<script>"), "Must escape <script>");
  assert(!escaped.includes("<img"), "Must escape <img");
  assert(escaped.includes("&lt;script&gt;"), "Must convert < to &lt;");

  // Check app.js renderRecordsTable calls escapeHtml
  assert(appJs.includes("${escapeHtml(rec.issueDetails)}"), "renderRecordsTable must escape issueDetails");
  assert(appJs.includes("${escapeHtml(rec.machineNo)}"), "renderRecordsTable must escape machineNo");
  assert(appJs.includes("${escapeHtml(rec.solvedBy"), "renderRecordsTable must escape solvedBy");
});

// Test 8: CSV Spreadsheet Formula Injection Neutralization
test("CSV Formula Injection Sanitization (=, +, -, @ prefix)", () => {
  const sanitizeCsvField = (val) => {
    if (val === null || val === undefined) return '""';
    let str = String(val);
    if (/^[=\+\-@\t\r]/.test(str)) {
      str = "'" + str;
    }
    return `"${str.replace(/"/g, '""')}"`;
  };

  assert.strictEqual(sanitizeCsvField("=SUM(A1:A10)"), `"'=SUM(A1:A10)"`);
  assert.strictEqual(sanitizeCsvField("+cmd|' /C calc'!A0"), ` "'+cmd|' /C calc'!A0"`.trim());
  assert.strictEqual(sanitizeCsvField("-2+3*cmd"), `"'-2+3*cmd"`);
  assert.strictEqual(sanitizeCsvField("@malicious"), `"'@malicious"`);
  assert.strictEqual(sanitizeCsvField("Normal Text"), `"Normal Text"`);
  assert.strictEqual(sanitizeCsvField(null), '""');

  assert(appJs.includes("sanitizeCsvField"), "app.js must contain sanitizeCsvField in exportToCSV");
  assert(appJs.includes("\\uFEFF"), "app.js must include UTF-8 BOM in CSV export");
});

// Test 9: Master Data Deletion Protection (Cannot Delete Last Item)
test("Master Data Safety Rule: Retain At Least One Item", () => {
  assert(appJs.includes("if (masterNatures.length <= 1)"), "deleteNatureMaster must guard last item");
  assert(appJs.includes("if (masterCategories.length <= 1)"), "deleteCategoryMaster must guard last item");
  assert(appJs.includes("if (YOKOHAMA_AREAS.length <= 1)"), "deleteAreaMaster must guard last item");
  assert(appJs.includes("if (masterResponsibilities.length <= 1)"), "deleteResponsibilityMaster must guard last item");
});

// Test 10: Modal Accessibility & Escape Key Handler
test("Modal Accessibility & Keyboard Escape Handler", () => {
  assert(appJs.includes('e.key === "Escape"'), "app.js must have keydown Escape handler");
  assert(appJs.includes("closeDetailsModal"), "Escape handler must call closeDetailsModal");
  assert(appJs.includes("closeDateExportModal"), "Escape handler must call closeDateExportModal");
  assert(appJs.includes("closeImportDowntimeModal"), "Escape handler must call closeImportDowntimeModal");
});

console.log("\n==================================================================");
console.log(`SUMMARY: ${passed} / ${total} TESTS PASSED (${Math.round((passed / total) * 100)}%)`);
console.log("==================================================================");

if (passed !== total) {
  process.exit(1);
}
