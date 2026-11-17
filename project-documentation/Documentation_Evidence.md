# Technical Verification & Audit Evidence Dossier
## Plant IT Downtime Management & Analytics System

**Project Authors:** Hadssha Bell S & Reuben Geoffrey  
**Live Production URL:** [https://plant-it-downtime.vercel.app/](https://plant-it-downtime.vercel.app/)  
**Deployment Target:** Vercel Global Edge Network (Node.js Serverless iad1)  
**Database Provider:** Supabase Managed PostgreSQL (AWS East)  
**Audit & Verification Date:** October 2026  
**Status:** Production Verified (All 5 Automated Test Suites Passing 100%)

---

## 1. Verified Technology Stack Inventory

| Category | Technology / Library | Version / Scope | Implementation Location | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend Runtime** | Modern ECMAScript (Vanilla JS) | ES2023 / HTML5 | `index.html`, `app.js` | Zero compile-step SPA architecture; direct browser execution |
| **Styling Framework** | Tailwind CSS CDN | 3.4+ Modern | `index.html` (Lines 10-68) | Custom Yokohama red theme (`#E60012`), dark industrial slate (`#0F1115`) |
| **Iconography** | FontAwesome 6 Pro | 6.5.1 CDN | `index.html` (Line 14) | Over 40 industrial & engineering status icons used across UI |
| **Client Charting** | Chart.js | 4.4.1 CDN | `index.html`, `app.js` | Dynamic bar, doughnut, and dual-axis trajectory charts |
| **Custom Canvas** | HTML5 Canvas 2D | High-DPI Context | `app.js` (`drawSpeedometerToCanvas`) | Calibrated needle speedometer (0% to 100%, 99% Target mark) |
| **Spreadsheet Engine** | ExcelJS | 4.4.0 (npm & client) | `exceljs.min.js`, `app.js` | Dual-sheet workbook generation with 9 embedded visual chart assets |
| **Serverless Compute** | Vercel Serverless Functions | Node.js 24.x runtime | `api/*.js` | Serverless endpoints in `iad1` region responding in <120ms |
| **Cloud Database** | PostgreSQL 15 | Managed Supabase | Cloud Cluster (`supabase-project`) | Relational tables `public.incidents` & `public.user_accounts` |
| **API Protocol** | PostgREST / RESTful JSON | PostgREST v12 | `api/utils.js`, `api/incidents.js` | Snake-case PostgreSQL column translation with Bearer JWT |
| **Authentication** | HMAC-SHA256 Signed JWT | 24-Hour Expiry | `api/utils.js`, `api/auth.js` | Secure session verification with role-based token payload |
| **Rate Limiting** | Sliding Window Token Bucket | 5 reqs / 60 sec | `api/auth.js`, `api/utils.js` | IP & username brute-force defense returning HTTP 429 |
| **Desktop Wrapper** | C# .NET WinForms / Edge | .NET 8.0 / WebView2 | `launcher.cs`, `Yokohama-MES.exe` | Multi-threaded local HTTP daemon on loopback port 8080 |
| **Cross-Platform App** | Tauri v2 (Rust Backend) | Tauri 2.0 | `src-tauri/`, `Cargo.toml` | 3.5MB ultra-lean desktop binary configuration |
| **Testing Framework** | Node.js Native Assert | Node.js v24 Test Suite | `tests/*.js` (5 test suites) | 59 automated test assertions across security, logic, and exports |

---

## 2. API Endpoints Specification & Verification Status

| Method | Endpoint Route | Required Role | Functionality | Request Body / Query | Expected Output | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **POST** | `/api/auth` | Public (Rate-limited) | User Authentication & JWT Issuance | `{ username, password }` | `{ token, user }` (No password hash) | **PASS** (401 on bad pass, 429 on spam) |
| **GET** | `/api/auth` | Any Authenticated | Session Token Validation | Header: `Bearer <token>` | `{ authenticated: true, user }` | **PASS** (401 unauth, 200 auth) |
| **PUT** | `/api/auth` | **ADMIN** Only | Credential & Account Management | `{ role, username, password }` | `{ success: true, user }` | **PASS** (403 for operator, 200 for admin) |
| **GET** | `/api/incidents` | Any Authenticated | Filtered Incident Retrieval | `?month=YYYY-MM&area=...` | `{ count: N, data: [...] }` | **PASS** (PostgreSQL snake_case mapped) |
| **POST** | `/api/incidents` | Operator/Supervisor/Admin | Incident Creation / Bulk Ingestion | `{ issueDate, machineNo, ... }` | `{ message, data }` (HTTP 201) | **PASS** (Validation & duplicate rejection) |
| **PUT** | `/api/incidents` | **ADMIN** Only | Incident Record Update | `{ id, downtimeMinutes, ... }` | `{ message, data }` (HTTP 200) | **PASS** (403 for non-admin) |
| **DELETE** | `/api/incidents` | **ADMIN** Only | Single Delete or Empty All Logs | `?id=...` or `{ action: 'clear_all' }` | `{ message, auditEvent }` | **PASS** (Requires confirmation phrase) |
| **GET** | `/api/kpi` | Any Authenticated | Authoritative Mathematical Telemetry | `?month=YYYY-MM&area=...` | `{ availability, closureRate, mttr }` | **PASS** (Zero data returns standardized N/A) |
| **GET** | `/api/master-data` | Any Authenticated | Plant Equipment Master Registry | Header: `Bearer <token>` | `{ areas, categories, machines }` | **PASS** (401 unauthenticated) |

---

## 3. Database Schema Verification (`public.incidents`)

```sql
CREATE TABLE public.incidents (
    id TEXT PRIMARY KEY,
    date DATE NOT NULL,
    nature VARCHAR(50) NOT NULL DEFAULT 'MES',
    area VARCHAR(50) NOT NULL,
    process VARCHAR(50) NOT NULL,
    machine_no VARCHAR(100) NOT NULL,
    is_critical VARCHAR(5) DEFAULT 'No',
    downtime_minutes INTEGER NOT NULL CHECK (downtime_minutes > 0),
    affected_machines INTEGER DEFAULT 1 CHECK (affected_machines >= 1),
    total_downtime_minutes INTEGER NOT NULL,
    category VARCHAR(50) NOT NULL,
    issue_details TEXT,
    action_plan TEXT,
    responsibility VARCHAR(50) DEFAULT 'ATC',
    closed_date DATE,
    responsible_person VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Open' CHECK (status IN ('Open', 'Completed', 'Closed', 'In Progress')),
    remarks TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 4. Test Suite Execution & Verification Record

### Suite 1: Automated Regression Suite (`tests/run_tests.js`)
- **Total Tests:** 16
- **Passed:** 16 (100%)
- **Key Scenarios Verified:** Zero incidents empty-state N/A KPIs, 100% availability on 0 downtime with valid operating time, MTTR calculation, rejection of invalid statuses, duplicate submission prevention, timezone-invariant date parsing.

### Suite 2: Official Acceptance Test Suite (`tests/run_acceptance_tests.js`)
- **Total Tests:** 10 (Tests A through J)
- **Passed:** 10 (100%)
- **Key Scenarios Verified:** Multi-click mutex locking (5 rapid clicks create exactly 1 record), localStorage persistence after refresh, live production unauthenticated rejection (HTTP 401), dashboard filter synchronization with exports.

### Suite 3: 18-Point Comprehensive Verification (`tests/verify_18_regressions.js`)
- **Total Points:** 18
- **Passed:** 18 (100%)
- **Key Scenarios Verified:** Point 1 (N/A telemetry on empty dataset), Point 7 (Mutex debouncing), Point 9 (Direct protected API 401), Point 10 (Non-admin 403), Point 13 (Master data safe fallback), Point 17 (Zero UTC drift on midnight shifts).

### Suite 4: User 5-Requirement Compliance Suite (`tests/verify_user_5_requests.js`)
- **Total Requirements:** 5
- **Passed:** 5 (100%)
- **Key Scenarios Verified:** Header text cleanup, admin-only restrictions on edit/delete/empty-logs, dynamic category downtime loss aggregation, 2-sheet Excel dashboard generation.

### Suite 5: Excel Visual Dashboard Engine (`tests/test_excel_dashboard_export.js`)
- **Worksheets Verified:** `PLANT_DASHBOARD` and `IT_DOWNTIME_LOG`
- **Charts Embedded:** 9 visual high-DPI charts (Speedometer gauge, Monthly availability, Area availability, Process availability, Dual-axis trajectory, Category pie, Category bar, Area downtime, Process downtime).
- **Status:** Verified with COM automation and PDF export.

---

## 5. Security & Hardening Verification

1. **Information Leakage Prevention:** Unauthenticated visitors do not receive confidential incident records, personnel names, or credentials.
2. **Session Security:** Token storage in `sessionStorage` with cryptographic verification against `/api/auth`.
3. **Database RLS:** Direct PostgREST table tampering blocked; all mutations routed through serverless Node.js endpoints.
4. **Destructive Mutation Protection:** `clear_all` requires explicit typing of `PERMANENTLY DELETE ALL LOGS` and ADMIN role.
5. **Spreadsheet Formula Injection Defense:** User-supplied strings starting with `=`, `+`, `-`, `@` are automatically escaped with single quotes before spreadsheet cell insertion.
