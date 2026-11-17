# Yokohama MES Portal - Supabase Cloud & Vercel Online Migration Design

## 1. Executive Summary
This design specification defines the migration of the Yokohama Plant IT Downtime & Availability Portal from a localized single-machine desktop `.exe` / `localStorage` model to a production-grade, globally accessible Jamstack architecture powered by **Supabase** (Cloud PostgreSQL) and deployed on **Vercel** (Global Edge CDN).

## 2. Problem Statement
Previously, the system operated using `localStorage` on a local machine via an embedded desktop runner. This created isolation silos: data was stored only inside one computer's browser profile, requiring physical file transfers to share updates. Furthermore, the login screen contained 1-click shortcut buttons which bypassed credential security.

## 3. Goals & Requirements
1. **Cloud Database (Supabase)**:
   - Central PostgreSQL backend with real-time replication.
   - Endpoint: `https://<supabase-project-id>.supabase.co`.
   - All incident logs and machine availability data are stored centrally in the `incidents` table.
2. **Strict Credential Authentication (No Shortcuts)**:
   - Eliminate all role shortcut buttons (*Operator*, *Supervisor*, *Admin*) from the sign-in modal.
   - Only allow authenticated login via verified **Username** and **Password**.
   - Credentials validated against `public.user_accounts` using SHA-256 password hashing.
3. **Multi-User / Global IP Access**:
   - Any authorized user on any device (desktop, tablet, mobile) or IP address can access the portal simultaneously.
   - Live synchronization via Supabase Realtime so that incident updates reflect across all connected clients without manual page refresh.
4. **Vercel Deployment**:
   - Clean static architecture deployable to Vercel with zero build friction.

## 4. Architecture & Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│  Any Client Browser / Any IP  (Vercel Edge CDN HTTPS)        │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
    ┌──────────────────────┐       ┌────────────────────────┐
    │  Strict Login Form   │       │  Live Downtime Portal  │
    │  - Username input    │       │  - Incident Logs       │
    │  - Password input    │       │  - Machine Uptime      │
    │  - NO shortcut btns  │       │  - Excel Import/Export │
    └──────────┬───────────┘       └───────────┬────────────┘
               │                               │
               ▼                               ▼
    ┌───────────────────────────────────────────────────────┐
    │  Supabase Cloud Database                              │
    │  - user_accounts (SHA-256 credentials)                │
    │  - incidents (Real-time cloud database)               │
    └───────────────────────────────────────────────────────┘
```

## 5. Database Schema & Tables
- `public.user_accounts`:
  - `id`: UUID (PK)
  - `username`: TEXT (UNIQUE)
  - `password_hash`: TEXT (SHA-256)
  - `role`: TEXT ('ADMIN', 'SUPERVISOR', 'OPERATOR')
  - `display_name`: TEXT
  - `can_export`: BOOLEAN
  - `can_manage_settings`: BOOLEAN
  - `theme_color`: TEXT
- `public.incidents`:
  - `id`: TEXT (PK)
  - `date`: TEXT (YYYY-MM-DD)
  - `nature`: TEXT
  - `area`: TEXT
  - `process`: TEXT
  - `machine_no`: TEXT
  - `is_critical`: TEXT ('Yes' / 'No')
  - `downtime_minutes`: NUMERIC
  - `affected_machines`: INTEGER
  - `total_downtime_minutes`: NUMERIC
  - `category`: TEXT
  - `issue_details`: TEXT
  - `action_plan`: TEXT
  - `responsibility`: TEXT
  - `closed_date`: TEXT
  - `responsible_person`: TEXT
  - `status`: TEXT
  - `remarks`: TEXT
  - `created_at`: TIMESTAMPTZ
  - `updated_at`: TIMESTAMPTZ

## 6. Security & Access Control
- Row Level Security (RLS) is enabled on all tables with public policies for authenticated web access.
- Authentication tokens stored in `sessionStorage` / `localStorage` to persist across page reloads.
- Passwords are never sent or stored in plaintext; all comparisons use client-hashed SHA-256 strings matched against `password_hash`.
- Logout immediately terminates the active session and renders the login gatekeeper.

## 7. Testing & Verification
- Unit & integration verification of Supabase REST endpoints.
- Verification that logging an incident or importing `Template Import 2.xlsx` persists to Supabase.
- Verification that closing the tab and reopening restores live cloud incidents.
- Verification that logging in with incorrect credentials fails with an error alert.
- Verification that Vercel configuration builds and serves without errors.
