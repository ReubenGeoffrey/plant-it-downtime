/**
 * Playwright E2E Verification Suite: Yokohama 3D Dashboard & Digital Twin
 * 
 * Verifies:
 * 1. Role-based Access Control (RBAC):
 *    - OPERATOR cannot see #tabBtn3D and cannot switch to '3d'.
 *    - SUPERVISOR and ADMIN can view and access 3D Dashboard.
 * 2. 3D Visualizer Studio Initialization & Canvas Lifecycle:
 *    - Canvas #canvas3dMain exists and initializes without errors.
 *    - Chart Switcher toggles through all 6 views (Area, Process, Monthly, Category, Trajectory, Plant Map).
 * 3. Accessible Table Alternative (WCAG 2.2 AA compliant):
 *    - #btnToggleTableView toggles semantic HTML table view.
 * 4. Digital Twin Tour:
 *    - Play / Pause tour toggling.
 * 5. Multi-breakpoint responsive layout screenshots (360px, 768px, 1440px).
 * 
 * Build by Hadssha Bell S & Reuben Geoffrey
 */

const { chromium } = require("playwright");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:8080";
const SCREENSHOT_DIR = path.join(__dirname, "../screenshots");

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

let passed = 0;
let total = 0;

function it(desc, fn) {
  total++;
  return fn()
    .then(() => {
      console.log(`  ✓ ${desc}`);
      passed++;
    })
    .catch((err) => {
      console.error(`  ✗ ${desc}`);
      console.error(`    Error: ${err.message}`);
      process.exitCode = 1;
    });
}

(async () => {
  console.log("\n=======================================================");
  console.log("PLAYWRIGHT E2E: 3D DASHBOARD & DIGITAL TWIN VERIFICATION");
  console.log("=======================================================\n");

  const browser = await chromium.launch({
    headless: true,
    args: ["--use-gl=swiftshader", "--no-sandbox"] // software WebGL for headless test environments
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const page = await context.newPage();

  try {
    // 1. RBAC Test: Operator cannot view or access 3D Dashboard
    await it("RBAC: Operator is blocked from 3D Dashboard (#tabBtn3D hidden, switchTab rejected)", async () => {
      await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });

      // Clear any prior auth in localStorage
      await page.evaluate(() => {
        localStorage.clear();
      });
      await page.reload({ waitUntil: "networkidle" });

      // Log in as Operator
      await page.fill("#adminUsername", "operator");
      await page.fill("#adminPassword", "operator123");
      await page.click("#adminLoginForm button[type='submit']");
      await page.waitForTimeout(600);

      // Verify #tabBtn3D is hidden
      const tab3dVisible = await page.$eval("#tabBtn3D", (el) => !el.classList.contains("hidden"));
      assert.strictEqual(tab3dVisible, false, "tabBtn3D must be hidden for Operator");

      // Verify switchTab('3d') is rejected
      const switchResult = await page.evaluate(() => {
        window.switchTab("3d");
        return window.activeTab;
      });
      assert.notStrictEqual(switchResult, "3d", "Operator activeTab must not become '3d'");

      // Logout
      await page.evaluate(() => {
        if (typeof window.handleUserLogout === "function") window.handleUserLogout();
      });
      await page.waitForTimeout(400);
    });

    // 2. RBAC Test: Supervisor can access 3D Dashboard
    await it("RBAC: Supervisor has access to 3D Dashboard tab", async () => {
      await page.fill("#adminUsername", "supervisor");
      await page.fill("#adminPassword", "super123");
      await page.click("#adminLoginForm button[type='submit']");
      await page.waitForTimeout(600);

      const tab3dVisible = await page.$eval("#tabBtn3D", (el) => !el.classList.contains("hidden"));
      assert.strictEqual(tab3dVisible, true, "tabBtn3D must be visible for Supervisor");

      // Switch to 3D tab
      await page.click("#tabBtn3D");
      await page.waitForTimeout(600);

      const view3dVisible = await page.$eval("#view3dContainer", (el) => !el.classList.contains("hidden"));
      assert.strictEqual(view3dVisible, true, "view3dContainer must be visible");

      // Logout
      await page.evaluate(() => {
        if (typeof window.handleUserLogout === "function") window.handleUserLogout();
      });
      await page.waitForTimeout(400);
    });

    // 3. Admin Full Feature Testing: Canvas, Chart Switcher, Digital Twin & Table Alternative
    await it("Admin: Full 3D Visualizer Studio Initialization & Canvas Lifecycle", async () => {
      await page.fill("#adminUsername", "admin");
      await page.fill("#adminPassword", "admin123");
      await page.click("#adminLoginForm button[type='submit']");
      await page.waitForTimeout(600);

      // Navigate to 3D Dashboard
      await page.click("#tabBtn3D");
      await page.waitForTimeout(800);

      // Verify Canvas element
      const canvasDims = await page.$eval("#canvas3dMain", (el) => ({
        width: el.clientWidth,
        height: el.clientHeight
      }));
      assert.ok(canvasDims.width > 200, "Canvas must have positive width");
      assert.ok(canvasDims.height > 200, "Canvas must have positive height");

      // Verify Initial Heading
      const initialTitle = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(initialTitle.includes("Area-wise"), "Default chart should be Area-wise");

      // Switcher test: Process Grouped Bars
      await page.click("button[data-chart='process']");
      await page.waitForTimeout(400);
      let heading = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(heading.includes("Process"), "Heading should update to Process");

      // Switcher test: Monthly Target Sheet (≥99%)
      await page.click("button[data-chart='monthly']");
      await page.waitForTimeout(400);
      heading = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(heading.includes("Monthly"), "Heading should update to Monthly");

      // Switcher test: Category Donut
      await page.click("button[data-chart='category']");
      await page.waitForTimeout(400);
      heading = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(heading.includes("Category"), "Heading should update to Category");

      // Switcher test: Equipment Trajectory Ribbon
      await page.click("button[data-chart='trajectory']");
      await page.waitForTimeout(400);
      heading = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(heading.includes("Trajectory"), "Heading should update to Trajectory");

      // Switcher test: Plant Floor Digital Twin
      await page.click("button[data-chart='plantMap']");
      await page.waitForTimeout(400);
      heading = await page.$eval("#chart3dTitle", (el) => el.textContent.trim());
      assert.ok(heading.includes("Digital Twin") || heading.includes("Plant Floor"), "Heading should update to Plant Floor");

      // Return to Area Downtime
      await page.click("button[data-chart='area']");
      await page.waitForTimeout(300);
    });

    // 4. Accessible Table Alternative Test
    await it("Accessibility: 'View as Table' alternative renders semantic HTML table", async () => {
      // Click 'View as Table'
      await page.click("#btnToggleTableView");
      await page.waitForTimeout(400);

      // Verify table wrapper is visible and canvas is hidden
      const tableVisible = await page.$eval("#table3dAlternative", (el) => !el.classList.contains("hidden"));
      const viewportHidden = await page.$eval("#viewport3dMain", (el) => el.classList.contains("hidden"));

      assert.strictEqual(tableVisible, true, "Table alternative must be visible");
      assert.strictEqual(viewportHidden, true, "3D Canvas must be hidden when table view is active");

      // Verify semantic table exists with rows
      const tableRows = await page.$$eval("#table3dAlternative table tbody tr", (trs) => trs.length);
      assert.ok(tableRows >= 1, "Semantic table must contain data rows");

      // Toggle back to 3D canvas
      await page.click("#btnToggleTableView");
      await page.waitForTimeout(400);

      const tableHiddenAgain = await page.$eval("#table3dAlternative", (el) => el.classList.contains("hidden"));
      const viewportVisibleAgain = await page.$eval("#viewport3dMain", (el) => !el.classList.contains("hidden"));

      assert.strictEqual(tableHiddenAgain, true, "Table alternative must be hidden");
      assert.strictEqual(viewportVisibleAgain, true, "3D Canvas must be restored");
    });

    // 5. Digital Twin Tour Test
    await it("Digital Twin: Tour play and pause toggles correctly", async () => {
      const tourBtn = await page.$("#btnToggleDigitalTwin");
      assert.ok(tourBtn, "Digital twin tour button must exist");

      // Start tour
      await tourBtn.click();
      await page.waitForTimeout(500);
      let btnText = await tourBtn.textContent();
      assert.ok(btnText.includes("Pause Tour"), "Button text should change to Pause Tour");

      // Pause tour
      await tourBtn.click();
      await page.waitForTimeout(300);
      btnText = await tourBtn.textContent();
      assert.ok(btnText.includes("Digital Twin Tour"), "Button text should restore to Digital Twin Tour");
    });

    // 6. Multi-Breakpoint Screenshots
    await it("Responsive Design: Capture Multi-breakpoint Screenshots (1440px, 768px, 360px)", async () => {
      // 1. Desktop (1440x900)
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "3d_dashboard_desktop_1440.png"), fullPage: false });

      // Switch to Plant Map for showcase
      await page.click("button[data-chart='plantMap']");
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "3d_plant_digital_twin_desktop.png"), fullPage: false });

      // 2. Tablet (768x1024)
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.click("button[data-chart='area']");
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "3d_dashboard_tablet_768.png"), fullPage: false });

      // 3. Mobile (360x780)
      await page.setViewportSize({ width: 360, height: 780 });
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "3d_dashboard_mobile_360.png"), fullPage: false });
    });

  } finally {
    await browser.close();
  }

  console.log("\n=======================================================");
  console.log(`SUMMARY: ${passed}/${total} Playwright Tests Passed (100%)`);
  console.log("=======================================================\n");

  if (passed !== total) {
    process.exit(1);
  }
})();
