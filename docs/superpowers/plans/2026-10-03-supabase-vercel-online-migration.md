# Supabase Cloud Database & Vercel Online Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Yokohama MES Plant IT Downtime & Availability Portal from local storage / desktop `.exe` to a fully online web application powered by Supabase (PostgreSQL) and deployed on Vercel, with strict username/password authentication (no role shortcuts) accessible from any IP.

**Architecture:** The client-side application connects directly to Supabase via `@supabase/supabase-js` over HTTPS with Row Level Security. All incident CRUD operations and Excel template imports persist directly to the cloud `incidents` table with real-time replication. Authentication validates SHA-256 hashed credentials against `public.user_accounts`. The entire static web app is packaged for instantaneous zero-config deployment on Vercel Edge CDN.

**Tech Stack:** Vanilla JavaScript (ES2022), HTML5, Tailwind CSS, Supabase JS Client v2, Supabase PostgreSQL, ExcelJS, FileSaver.js, Vercel Edge.

**Spec:** `docs/superpowers/specs/2026-10-03-supabase-vercel-online-migration-design.md`

## Global Constraints
- **Cloud Backend**: Supabase Project URL: `https://mrzlgrkkqdijoruchpgb.supabase.co` with verified Anon Public Key.
- **Strict Authentication**: No 1-click role shortcut buttons permitted on the login UI; username and password are mandatory.
- **Multi-IP Access**: Database and Vercel app must be globally reachable from any device or IP address.
- **Compatibility**: All existing features (Machine Uptime Matrix, Day-by-Day calculations, ExcelJS dual-sheet export, and Template Import 2 auto-mapping) must remain 100% operational with the cloud backend.

## Review Focus
1. Offline / Network interruption handling during Supabase fetch/sync.
2. Case-insensitivity in username login (e.g. `Admin` vs `admin`).
3. Multi-machine comma lists correctly parsing and persisting into Supabase `machine_no` and `affected_machines`.
4. Empty credentials or invalid password attempts displaying clear, non-blocking toast notifications.
5. Vercel static routing correctly serving all scripts, styles, and assets without MIME type errors.

---

### Task 1: Supabase Client Library & Core Cloud Integration

**Files:**
- Modify: `index.html` (add Supabase JS CDN script)
- Create: `supabase-client.js` (initialize and expose global Supabase client instance)
- Test: `test_supabase_connection.js`

**Interfaces:**
- Consumes: Supabase Project URL (`https://mrzlgrkkqdijoruchpgb.supabase.co`) & Anon Key
- Produces: `window.supabaseClient` (authenticated client interface for queries and real-time subscriptions)

- [ ] **Step 1: Write connection verification test**
  Create `test_supabase_connection.js` to verify querying `user_accounts` and `incidents` tables via Node.js using `@supabase/supabase-js`.

- [ ] **Step 2: Run verification test to confirm connectivity**
  Run: `node test_supabase_connection.js`
  Expected: PASS with 3 users and 2 incidents found.

- [ ] **Step 3: Create `supabase-client.js` and link in `index.html`**
  Add `@supabase/supabase-js@2` CDN to `index.html` head, and create `supabase-client.js` exposing `window.supabaseClient`.

- [ ] **Step 4: Verify client loads properly in browser**
  Ensure `window.supabaseClient` is defined and ready.

---

### Task 2: Strict Username & Password Authentication UI & Logic

**Files:**
- Modify: `index.html` (remove shortcut role buttons, update login form)
- Modify: `app.js` / `update_app_js.py` (`handleLogin`, `getCurrentUser`, `handleUserLogout`)
- Test: `test_auth_flow.js`

**Interfaces:**
- Consumes: Username and password entered by user
- Produces: `currentUser` session state, unlocks authorized tabs based on `role`

- [ ] **Step 1: Remove shortcut role buttons in `index.html`**
  Delete the `<div class="grid grid-cols-3 gap-2">` containing *Operator*, *Supervisor*, and *Admin* shortcut buttons from the login card.

- [ ] **Step 2: Update `handleLogin` to authenticate against Supabase**
  Compute SHA-256 hash of password input, query `user_accounts` in Supabase matching `username` (case-insensitive) and `password_hash`.

- [ ] **Step 3: Handle success and failure states**
  On success: save session object to `sessionStorage` and `localStorage`, trigger `renderAuthHeader()` and unlock navigation.
  On failure: display toast error *"Invalid username or password. Please try again."*.

- [ ] **Step 4: Verify authentication with test script**
  Verify login with `admin`/`admin123` succeeds, while `admin`/`wrongpass` fails.

---

### Task 3: Cloud Database Migration for Incidents & Real-Time Sync

**Files:**
- Modify: `app.js` / `update_app_js.py` (`initStorage`, `saveIncidentToDatabase`, `confirmDowntimeImport`, `deleteIncident`)
- Test: `test_cloud_incidents_crud.js`

**Interfaces:**
- Consumes: `downtimeRecords` in-memory state and user form inputs / Excel files
- Produces: Persistent rows in Supabase `incidents` table

- [ ] **Step 1: Implement `loadIncidentsFromSupabase`**
  Fetch all rows from `public.incidents` ordered by `date` DESC, normalize field names (`machine_no` -> `machineNo`, etc.), and populate `downtimeRecords`.

- [ ] **Step 2: Implement cloud saving for single incident logging**
  When a user logs or edits an incident, write directly to Supabase via `supabaseClient.from('incidents').upsert(...)`.

- [ ] **Step 3: Implement cloud saving for Excel Template Import**
  In `confirmDowntimeImport()`, perform a bulk upsert of imported records (such as `Template Import 2.xlsx`) to Supabase.

- [ ] **Step 4: Setup Supabase Realtime channel**
  Subscribe to `public:incidents` changes (`INSERT`, `UPDATE`, `DELETE`) so all open browser tabs on any IP update their tables and uptime calculations automatically.

- [ ] **Step 5: Run end-to-end CRUD verification**
  Run: `node test_cloud_incidents_crud.js` to verify read, write, update, and real-time event reception.

---

### Task 4: Vercel Deployment Configuration & Production Readiness

**Files:**
- Create: `vercel.json` (Vercel routing, headers, and CORS config)
- Modify: `.gitignore` (ignore build artifacts, temp files, and local logs)
- Test: `test_vercel_build.js`

**Interfaces:**
- Consumes: Static application assets (`index.html`, `app.js`, `styles.css`, `logo.png`, `exceljs.min.js`, `FileSaver.min.js`)
- Produces: Live public Vercel production deployment

- [ ] **Step 1: Create `vercel.json`**
  Configure headers for caching static assets and zero-config static site deployment.

- [ ] **Step 2: Update `.gitignore`**
  Ensure clean repository state with no junk or test files.

- [ ] **Step 3: Test local production build**
  Verify that all assets, icons, Excel generation, and Supabase cloud sync run seamlessly under a clean static server.

- [ ] **Step 4: Document 1-Click Vercel Deployment Guide**
  Provide clear instructions and CLI commands for the user to deploy to Vercel in 1 click.
