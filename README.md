# 🏎️ Plant IT Downtime Management Portal

**Enterprise Operational Telemetry, Availability & IT Incident Management Platform**  
Designed for Yokohama Tire Manufacturing (ATC / MELSS Plant Operations).

[![Live Portal](https://img.shields.io/badge/Live%20Portal-Vercel%20Production-059669?style=for-the-badge&logo=vercel)](https://plant-it-downtime.vercel.app/)
[![Automated Tests](https://img.shields.io/badge/Automated%20Tests-59%2F59%20Passing-emerald?style=for-the-badge&logo=node.js)](tests/)
[![Security Standards](https://img.shields.io/badge/Security-RBAC%20%2B%20JWT%20%2B%20XSS%20Shield-E60012?style=for-the-badge)](BUG_REPORT.md)

> **Build by Hadssha Bell S & Reuben Geoffrey**

---

## 📌 Architectural Overview

The **Plant IT Downtime Management Portal** is a production-grade web application deployed on Vercel with desktop runtime compatibility (Tauri 2.0). It replaces legacy spreadsheet logging with a synchronized, real-time telemetry system tracking plant machinery uptime, MES/INFRA breakdown incidents, and operational availability.

### Technology Stack
- **Frontend Core:**
  - Modern Single Page Application (SPA) in `index.html` and `app.js`.
  - Styling with Tailwind CSS and custom Yokohama Red (`#E60012`), White, and Black themes (`styles.css`).
  - Interactive telemetry visualizations using **Chart.js 4.4.1** and custom 2D Canvas Speedometer Gauges.
  - Multi-sheet Excel report builder using **ExcelJS 4.4.0** with SheetJS (XLSX) fallback.
- **Backend & Serverless API Routes (`api/`):**
  - `POST /api/auth`: Cryptographic session authentication, rate limiting, and JWT issuance.
  - `GET / POST / PUT / DELETE /api/incidents`: CRUD operations for downtime incident records with RBAC gating.
  - `GET /api/kpi`: Server-authoritative calculation of Plant Availability, MTTR, and Closure Rate.
  - `GET / POST / PUT /api/master-data`: Unified plant machinery, areas, natures, categories, and personnel registry.
  - `api/utils.js`: Shared cryptographic hashing (HMAC-SHA256), token validation, CORS, and sanitization.
- **Storage & Synchronization:**
  - Tier 1: Cloud PostgreSQL via Supabase REST API & Realtime channels.
  - Tier 2: Resilient client cache in `localStorage` / `sessionStorage` with automatic schema recovery.
  - Tier 3: Offline standalone desktop app via Tauri 2.0.

---

## 🔒 Role-Based Access Control (RBAC)

The application enforces strict role-based permissions on both the client interface and serverless APIs:

| Feature / Action | Operator | Supervisor | Admin |
|---|:---:|:---:|:---:|
| **Log Downtime Incident** | ✅ | ✅ | ✅ |
| **View Dashboard & KPIs** | ❌ (Hidden) | ✅ | ✅ |
| **View Incident Logs** | ❌ (Hidden) | ✅ | ✅ |
| **Export Excel & CSV Reports** | ❌ (Hidden) | ✅ | ✅ |
| **Edit Incident Entry** | ❌ | ❌ | ✅ |
| **Delete Incident Entry** | ❌ | ❌ | ✅ |
| **Toggle Status (Open/Closed)** | ❌ | ❌ | ✅ |
| **Empty Incident Logs** | ❌ (Hidden) | ❌ (Blocked) | ✅ |
| **Manage Master Settings** | ❌ (Hidden) | ❌ (Hidden) | ✅ |
| **Database & Cloud Maintenance** | ❌ (Hidden) | ❌ (Hidden) | ✅ |

---

## 🛡️ Security Hardening Highlights

1. **Server-Enforced Authentication:** Gated views do not render into the DOM before token verification against `POST /api/auth`.
2. **Plaintext Password Elimination:** Client compares only cryptographic SHA-256 hashes for offline fallback; session tokens are issued by the backend.
3. **Cross-Site Scripting (XSS) Shield:** All user-controlled fields (`issueDetails`, `actionPlan`, `machineNo`, `solvedBy`) are sanitized with `escapeHtml()` across tables and modal views.
4. **Spreadsheet Formula Injection Defense:** CSV exports escape formula prefixes (`=`, `+`, `-`, `@`, `\t`, `\r`) with a leading apostrophe `'` to prevent malicious command execution in Microsoft Excel.
5. **Continuous Availability Bands:** Continuous mathematical ranges prevent unclassified gaps:
   - **Optimal / Target:** $\ge 99.0\%$
   - **Warning:** $95.0\% \text{ to } <99.0\%$
   - **Critical Alert:** $< 95.0\%$
6. **Master Data Integrity:** Deletion safety rules guarantee at least one remaining Nature, Category, Area, and Responsibility item.
7. **Accessibility (WCAG 2.2):** Modal dialogs close on `Escape` key press or backdrop click.

---

## 🚀 Running Locally

### Option 1: Node.js / Local HTTP Server
```powershell
# Using Python built-in server
python -m http.server 8080

# Or using Node.js http-server
npx http-server -p 8080
```
Open [http://localhost:8080](http://localhost:8080) in Chrome, Edge, or Firefox.

### Option 2: Live Production Deployment
Visit the deployed application at:  
👉 **[https://plant-it-downtime.vercel.app/](https://plant-it-downtime.vercel.app/)**

---

## 🧪 Automated QA & Test Suite

The project features a 5-tier test suite covering 59 automated test assertions with 100% pass rate.

### Run All Tests
```powershell
npm run test:all
```

### Individual Test Suites
```powershell
# 1. Core Automated Regression Suite (16 tests)
npm test

# 2. Acceptance Test Suite A - J (10 tests)
npm run test:acceptance

# 3. 18-Point Comprehensive Architectural Verification (18 tests)
npm run test:verify

# 4. Phase 1 & Phase 2 Specific Fix Verification (10 tests)
npm run test:fixes

# 5. User Requirements Compliance Suite (5 tests)
npm run test:user5
```

### Test Coverage Summary
- **16 / 16** Regression Tests Passing (100%)
- **10 / 10** Acceptance Tests Passing (100%)
- **18 / 18** Comprehensive Verification Points Passing (100%)
- **10 / 10** Phase 1 & 2 Fix Tests Passing (100%)
- **5 / 5** User Requirements Compliance Tests Passing (100%)
- **Total: 59 / 59 Tests Passing (100%)**

---

## 📂 Repository Structure

```
├── api/                             # Vercel Serverless Functions
│   ├── auth.js                      # Authentication & rate limiting
│   ├── incidents.js                 # Incident CRUD & bulk operations
│   ├── kpi.js                       # Authoritative KPI engine
│   ├── master-data.js               # Plant master registry
│   └── utils.js                     # Token validation, hashing, CORS
├── tests/                           # Automated QA & Regression Test Suites
│   ├── run_tests.js                 # 16-point core regression suite
│   ├── run_acceptance_tests.js      # 10 acceptance tests (A - J)
│   ├── verify_18_regressions.js     # 18-point verification scorecard
│   ├── verify_phase1_phase2_fixes.js# Phase 1 & 2 fix verification
│   ├── verify_user_5_requests.js    # User requirement validation
│   └── test_excel_date_import.js    # Excel timezone & date drift tests
├── index.html                       # Single-page application markup & shell
├── app.js                           # Core client application logic & state
├── styles.css                       # Yokohama brand CSS styles & animations
├── BUG_REPORT.md                    # Detailed QA Audit & Bug Report
├── package.json                     # NPM dependencies & test runners
└── vercel.json                      # Vercel deployment & API routing rules
```

---

## 📄 License & Attribution

Developed for **Yokohama Tire Manufacturing Plant IT Operations**.  
**Build by Hadssha Bell S & Reuben Geoffrey**.
