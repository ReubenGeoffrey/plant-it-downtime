# Plant IT Downtime Management Portal — Comprehensive QA Audit & Bug Report

**Application URL:** https://plant-it-downtime.vercel.app/  
**Repository Branch:** `master`  
**Audit Date:** November 10, 2026  
**Auditors:** Senior QA & Full-Stack Security Engineering Team  
**Attribution:** Build by Hadssha Bell S & Reuben Geoffrey  

---

## Executive Summary & System Architecture

### 1. Architectural Overview
The **Plant IT Downtime Management & Analytics Portal** is an enterprise-grade operational telemetry platform deployed on Vercel for Yokohama Tire Manufacturing. It tracks plant equipment downtime, IT infrastructure outages, MES incidents, and equipment availability across plant areas and production processes.

- **Frontend Core:**
  - Modern Single Page Application (SPA) structured in `index.html` (~2,219 lines) and `app.js` (~13,604 lines).
  - Styling powered by Tailwind CSS with custom Yokohama theme styling (`styles.css`).
  - Visualizations powered by Chart.js 4.4.1 and custom HTML5 Canvas 2D speedometer gauges.
  - Spreadsheet engine powered by ExcelJS 4.4.0 with SheetJS (XLSX) fallback.
- **Backend & APIs:**
  - Vercel Serverless Functions in `api/`:
    - `api/auth.js`: Authentication, rate limiting, password verification, and JWT session token generation.
    - `api/incidents.js`: Incident CRUD, query filtering, and bulk ingestion.
    - `api/kpi.js`: Mathematical calculation of Availability, MTTR, and Closure Rate.
    - `api/master-data.js`: Authoritative plant machines, areas, natures, categories, and personnel registry.
    - `api/utils.js`: Shared cryptographic utilities, CORS management, token verification, and data validation.
- **Data Persistence:**
  - Multi-tier storage architecture:
    1. Cloud Database: PostgreSQL via Supabase REST API & Realtime channels.
    2. Local Resilient Cache: Browser `localStorage` / `sessionStorage` with schema migration and factory recovery.
    3. Standalone Desktop: Tauri 2.0 / WebView runner compatibility.

---

## Issue Matrix: Phase 1 (Known Functional & UI Bugs)

| Bug ID | Title & Feature Area | Severity | File & Location | Status |
|---|---|---|---|---|
| **BUG-01** | Dashboard Month Filter lists Jan–Jun in reverse; missing Jul–Nov 2026 | Medium | `app.js:8049`, `index.html:580` | Verified & Fixed |
| **BUG-02** | Availability color bands gap (95.0–98.9% vs ≥99.0%) and inconsistent threshold notation | Medium | `index.html:693`, `app.js:9801`, `api/utils.js:222` | Verified & Fixed |
| **BUG-03** | Insecure Client-Side Gating: Plaintext Credentials & Unauthenticated DOM Access | Critical | `app.js:3822`, `index.html:177`, `api/auth.js:22` | Verified & Fixed |
| **BUG-04** | Record count mismatch: Settings > Database & Logs says "38 Records" while logs show 0 | Medium | `index.html:1890`, `app.js:7580` | Verified & Fixed |
| **BUG-05** | Master Settings lists show 0 counts; dropdowns not hydrated from unified master | High | `app.js:3588`, `app.js:5204`, `index.html:1306` | Verified & Fixed |
| **BUG-06** | Placeholders never resolve ("Loading time...", "...", "Export Month Excel (All)") | Low | `index.html:100`, `index.html:609`, `app.js:5642` | Verified & Fixed |
| **BUG-07** | Stray UI text: extra `*` in labels, bare "No Yes" next to Machine Code label | Low | `index.html:312`, `index.html:450` | Verified & Fixed |
| **BUG-08** | Inconsistent Portal naming and duplicate author attribution across header & login | Low | `index.html:84`, `index.html:164`, `index.html:1959` | Verified & Fixed |
| **BUG-09** | Fiscal Year (FY 2026) vs Calendar Year mismatch without configurable definition | Medium | `app.js:8459`, `app.js:8502`, `index.html:594` | Verified & Fixed |
| **BUG-10** | Hardcoded Shift A (7am - 3pm) default; static initial rendering at night | Low | `index.html:96`, `app.js:5664` | Verified & Fixed |

---

## Detailed Bug Reports: Phase 1

### BUG-01: Dashboard Month Filter Lists Jan–Jun in Reverse and Missing Jul–Nov 2026
- **Severity:** Medium
- **Location:** `app.js:8049-8085`, `index.html:580-590`
- **Steps to Reproduce:**
  1. Navigate to Executive KPI Dashboard.
  2. Open the "Month:" filter dropdown.
  3. Observe options: "All Months", "June 2026", "May 2026", "April 2026", "March 2026", "February 2026", "January 2026".
  4. Notice July, August, September, October, November 2026 are completely missing, and months appear in reverse chronological order.
- **Root Cause:**
  1. `index.html` hardcoded options from `2026-06` down to `2026-01`.
  2. `populateDashboardMonths()` extracted months solely from `downtimeRecords` (which contained records only up to June) and applied `.sort().reverse()`.
  3. The year selector change did not refresh the month options for the selected year.
- **Expected Behavior:**
  Months should be generated dynamically in chronological order (January to current month / full year) for the chosen year, with full synchronization between the Year selector and Month dropdown.
- **Fix Applied:**
  Updated `populateDashboardMonths()` to dynamically generate months 1 through 12 (or up to current month for the current year) in chronological order matching `dashboardDateFilter.year`, and synced `onDashboardYearChange()` to re-populate months.
- **Verification Result:** PASS. Dropdown displays January through November 2026 in chronological order.

---

### BUG-02: Availability Color Bands Gap & Inconsistent Threshold Notation
- **Severity:** Medium
- **Location:** `index.html:693, 812`, `app.js:9801, 9934, 10008`, `api/utils.js:222`
- **Steps to Reproduce:**
  1. View Availability Legends on KPI cards and Area/Process availability charts.
  2. Notice legends show: "Warning (95.0-98.9%)" and "Target: ≥99.0%".
  3. If equipment availability is `98.95%`, it falls into neither range.
  4. Notice inconsistent target labels: some say "TARGET ≥99%" while others say "Target: ≥99.0%".
- **Root Cause:**
  Discontinuous range definition in legend markup and threshold evaluation logic (`95.0 - 98.9%` vs `≥99.0%`).
- **Expected Behavior:**
  Continuous mathematical ranges across all charts, tooltips, and legends:
  - Critical: `< 95.0%`
  - Warning: `95.0% to < 99.0%` (or `95.0%–<99.0%`)
  - Target / Optimal: `≥ 99.0%`
- **Fix Applied:**
  Updated `index.html`, `app.js`, and `api/utils.js` to standardize threshold notation to `≥99.0%` target, `95.0% to <99.0%` warning, and `<95.0%` critical.
- **Verification Result:** PASS. Thresholds and legends are 100% continuous and consistent.

---

### BUG-03: Insecure Client-Side Gating: Plaintext Credentials & Unauthenticated DOM Access
- **Severity:** Critical
- **Location:** `app.js:3822`, `index.html:177`, `api/auth.js:22`
- **Steps to Reproduce:**
  1. Open the application in an incognito browser without logging in.
  2. Inspect the DOM; observe `<div id="downtimeAppContainer" class="hidden">` contains the full application markup, master data, and tables.
  3. Removing the `hidden` class in DevTools exposes the dashboard and controls.
  4. Hardcoded accounts in `app.js` contained client-side password comparisons.
- **Root Cause:**
  Client-only access gating relied purely on CSS `hidden` class toggle rather than server-enforced authentication and conditional rendering.
- **Expected Behavior:**
  1. Client credentials must be verified against serverless API `/api/auth`.
  2. No plain-text passwords stored in client code or `localStorage`.
  3. Sensitive operational data, KPIs, and master data must NOT be rendered into the DOM before authentication token verification.
- **Fix Applied:**
  - Wired `adminLoginForm` to authenticate via `POST /api/auth`, issuing a cryptographically signed JWT session token.
  - Sanitized client storage: removed plaintext passwords, stored only session token and sanitized user profile.
  - Implemented real gatekeeper: protected views clear their contents on logout and only populate upon verified authentication.
- **Verification Result:** PASS. Direct API calls return 401 Unauthorized; client enforces server session token.

---

### BUG-04: Database & Logs Status Inconsistency (Hardcoded "38 Incident Records")
- **Severity:** Medium
- **Location:** `index.html:1890`, `app.js:7580, 7933`
- **Steps to Reproduce:**
  1. Sign in as Admin and open Settings > Database & Logs Maintenance.
  2. Observe under "Import Downtime Excel" the badge: "38 Incident Records".
  3. At the same time, the Incident Logs table shows "0 Incidents" when starting clean.
- **Root Cause:**
  `index.html:1890` had hardcoded text `<span class="font-bold text-violet-600">38 Incident Records</span>`.
- **Expected Behavior:**
  A single source of truth (`downtimeRecords.length`) for all record counts across the application.
- **Fix Applied:**
  Replaced hardcoded element with `<span id="dbSettingsIncidentCount" ...>`, dynamically updated in `updateDatabaseStatsUI()` and `renderRecordsTable()`.
- **Verification Result:** PASS. Count reflects authoritative `downtimeRecords.length`.

---

### BUG-05: Master Settings Sub-Tabs Show 0 Counts and Dropdowns Not Hydrated from Master
- **Severity:** High
- **Location:** `app.js:3588, 5204`, `index.html:1306, 1370, 1409, 1448, 1487`
- **Steps to Reproduce:**
  1. Open Master Settings.
  2. Observe badges: Machines (0), Natures (0), Categories (0), Areas (0), Groups (0), while Responsible Persons shows 9.
  3. Entry form had hardcoded category and responsibility `<option>` elements in `index.html`.
- **Root Cause:**
  `DOMContentLoaded` only called `renderMasterPersonnelGrid()`, omitting `renderMasterMachinesTable()`, `renderMasterNaturesGrid()`, etc. Initial HTML contained static `0` text. Cloud sync did not synchronize master data.
- **Expected Behavior:**
  Master settings lists must hydrate from default backup / API master registry on boot, and all dropdowns across the application must load from the unified master dataset.
- **Fix Applied:**
  - Added full master data initialization on boot in `initStorage()`.
  - Added API client fallback to `/api/master-data`.
  - Updated `index.html` badges to populate dynamically from `YOKOHAMA_MACHINES.length`, `masterCategories.length`, etc.
- **Verification Result:** PASS. All master badges and dropdowns hydrate correctly.

---

### BUG-06: Unresolved Placeholders ("Loading time...", "...", "Export Month Excel (All)")
- **Severity:** Low
- **Location:** `index.html:100, 609, 613, 630`, `app.js:5642, 8117`
- **Steps to Reproduce:**
  1. Load application; observe top header clock shows "Loading time..." until `initStorage()` completes.
  2. If all months is selected, button displays "Export Month Excel".
  3. KPI card subheads show static "..." before calculations run.
- **Root Cause:**
  - `initLiveClock()` was deferred behind asynchronous `await initStorage()`.
  - Export period button text lacked initial update for "All Months".
- **Expected Behavior:**
  Clock initializes synchronously without delay; export button dynamically reads "Export All Excel" or "Export [Month] Excel"; card subheads show clean initial or empty values.
- **Fix Applied:**
  - Executed `initLiveClock()` immediately on DOM load.
  - Updated `populateDashboardMonths()` and `onDashboardMonthChange()` to dynamically set button text to "Export All Excel" or "Export [Month] Excel".
- **Verification Result:** PASS. No unresolved placeholders appear.

---

### BUG-07: Stray UI Text ("No Yes" and Extra Asterisks)
- **Severity:** Low
- **Location:** `index.html:312-319, 450`
- **Steps to Reproduce:**
  1. Navigate to Downtime Entry form.
  2. Next to the "Machine Code *" label, observe raw "No" and "Yes" buttons with no identifying label.
  3. Inspect label markup for stray asterisks.
- **Root Cause:**
  Missing label context on the critical asset toggle buttons; redundant asterisk spans in form labels.
- **Expected Behavior:**
  Toggle must be clearly labeled: `Critical Asset: [No] [Yes]`, and all required fields have exactly one red asterisk indicator.
- **Fix Applied:**
  Added label `Critical Asset:` before the toggle buttons and verified clean singular required asterisks across all forms.
- **Verification Result:** PASS. UI layout is clean and unambiguous.

---

### BUG-08: Inconsistent Portal Naming & Duplicate Author Attribution
- **Severity:** Low
- **Location:** `index.html:84, 164, 1959`, `app.js:3742`
- **Steps to Reproduce:**
  1. Observe page title: "IT Downtime Management & Analytics System".
  2. Header title: "PLANT IT DOWNTIME MANAGEMENT PORTAL".
  3. Tab 1 label: "IT DOWN TIME ENTRY".
  4. Author attribution "Build by Hadssha Bell S & Reuben Geoffrey" duplicated in header, login gatekeeper, and footer.
- **Expected Behavior:**
  Canonical title: "Plant IT Downtime Management Portal".
  Tab 1 label: "Downtime Entry".
  Author attribution cleanly placed once in the footer with the premium glassy pill badge.
- **Fix Applied:**
  - Standardized application titles to "Plant IT Downtime Management Portal".
  - Renamed tab to "Downtime Entry".
  - Removed duplicate attribution from top header and login dialog, preserving the glassy badge in the footer.
- **Verification Result:** PASS. Consistent naming and clean single attribution verified.

---

### BUG-09: Fiscal Year (FY 2026) vs Calendar Year Mismatch
- **Severity:** Medium
- **Location:** `app.js:8459, 8502`, `index.html:594`
- **Steps to Reproduce:**
  1. Observe "Monthly Availability (FY 2026)".
  2. Months listed are January to December (Calendar Year), whereas FY in India/Japan runs April to March.
- **Root Cause:**
  The application labeled the year filter as "FY 2026" but processed months 01 through 12 of calendar year 2026 without an explicit or configurable convention.
- **Expected Behavior:**
  Explicit year convention setting: allow user to filter by Calendar Year (CY 2026: Jan–Dec) or Fiscal Year (FY 2026–27: Apr–Mar), with default clearly labeled.
- **Fix Applied:**
  Introduced explicit year convention support in `app.js` with consistent date filtering.
- **Verification Result:** PASS. Monthly availability aligns with selected year convention.

---

### BUG-10: Shift Badge Defaults to Shift A at Night
- **Severity:** Low
- **Location:** `index.html:96`, `app.js:5664`
- **Steps to Reproduce:**
  1. Open page at 10:00 PM IST (Shift B) or 1:00 AM IST (Shift C).
  2. Observe static HTML initially displays "Shift A (7am - 3pm)" before JavaScript executes.
- **Root Cause:**
  Static placeholder in `index.html` was hardcoded to Shift A.
- **Expected Behavior:**
  Shift must evaluate immediately from local hour:
  - Shift A: 07:00–15:00
  - Shift B: 15:00–23:00
  - Shift C: 23:00–07:00
- **Fix Applied:**
  Inline script calculates and renders current shift immediately upon HTML parse, avoiding static Shift A flash.
- **Verification Result:** PASS. Current shift (e.g. Shift A at 12:40 PM, Shift B at 4:00 PM) displays immediately.

---

## Phase 2: Systematic Codebase Audit Findings (Categories A–H)

### A. Authentication & Security
- **SEC-01 (XSS Protection):** All user input (`issueDetails`, `actionPlan`, `remarks`, `machineNo`) must be escaped when rendered in HTML tables, details modals, and toast messages. Verified that `escapeHtml()` is utilized consistently in row rendering.
- **SEC-02 (Formula Injection in CSV/Excel):** Values exported to CSV starting with `=`, `+`, `-`, `@` can trigger dynamic formula execution in spreadsheet applications. Sanitized CSV export values with prepended apostrophe `'`.
- **SEC-03 (Role-Based Access Enforcement):**
  - Operator: Restricted strictly to Downtime Entry form. All export buttons, delete buttons, edit buttons, and Settings tab hidden and blocked on client and server.
  - Supervisor: Access to Downtime Entry, Dashboard, Incident Logs, and Exports. Blocked from Master Settings, Empty Logs, and destructive API actions.
  - Admin: Unrestricted full access.

### B. Downtime Entry Form
- **FORM-01 (Downtime Duration Validation):** Downtime minutes <= 0 or non-integer rejected with descriptive error toast.
- **FORM-02 (Date Logic & Chronology):** Closed Date cannot be prior to Issue Date; if status is Completed, Closed Date is required.
- **FORM-03 (Double-Submission Mutex):** Save button debounced with in-flight boolean mutex (`window.isDowntimeSubmitting`) to prevent duplicate record creation on rapid clicks.

### C. Incident Logs
- **LOG-01 (Multi-Column Sorting):** Verified table header sorting handles numerical downtime, chronological dates, and alphabetical strings.
- **LOG-02 (Combined Filtering):** Date range, Category, Area, Nature, Machine, Status, and Technician filters intersect cleanly.

### D. Dashboard Calculations
- **CALC-01 (Division by Zero Prevention):** When zero operating hours or zero incidents exist, Availability, MTTR, and Closure Rate display `N/A` or `100.00%` rather than `NaN` or `Infinity`.
- **CALC-02 (Downtime Aggregation):** Total downtime accounts for `downtimeMinutes * affectedMachines`.

### E. Import & Export
- **IO-01 (Excel Date Drift Prevention):** Excel serial numbers (e.g. `46025`) and ISO strings parse cleanly into local dates without 1-day drift from UTC conversion.
- **IO-02 (Corrupt Row Skipping):** Invalid import rows (missing machine, zero downtime) are skipped safely without halting the import process.

### F. Settings & Data Management
- **SET-01 (Safe Master Data Retention):** Prevents deleting the last remaining Area, Category, Nature, or Responsibility.
- **SET-02 (Factory Reset):** Restores all machines, areas, and default settings cleanly.

### G. UI, Responsiveness & Accessibility
- **A11Y-01 (Keyboard Navigation & Focus):** Modal dialogs close on `Escape` key and retain focus within dialog.
- **A11Y-02 (ARIA Attributes):** Added `aria-label` to icon-only buttons (search, view, sort, close).

---

## Phase 3: Automated Test Suite & Verification Results

### Regression & Acceptance Suites
1. `tests/run_tests.js`: 16 Automated Regression Tests (100% PASS)
2. `tests/run_acceptance_tests.js`: Acceptance Suite Tests A–J (100% PASS)
3. `tests/verify_18_regressions.js`: 18-Point Comprehensive Verification (100% PASS)
4. `tests/verify_user_5_requests.js`: User Requirements Compliance Suite (100% PASS)
5. `tests/test_excel_dashboard_export.js`: Excel Dashboard Visual Export Suite (100% PASS)

---

## Conclusion & Deployment Status
All 10 Phase 1 issues and Phase 2 security and reliability enhancements have been identified, corrected, and verified with automated test suites. The codebase is in a stable, verified state ready for production deployment.
