# Yokohama MES Observability Design System & Dashboard Documentation

## Overview
This document specifies the enterprise design system, color tokens, typography, telemetry mathematical engines, and visualization guidelines for the **Plant IT Downtime Management Portal** upgraded observability dashboard.

---

## 1. Design Tokens & Foundations (`tokens.css`)

### Color Palettes & Semantic Roles
The platform implements a unified design system supporting three distinct viewing environments:
1. **Light Theme (Default):** Clean white cards with subtle slate borders, optimized for daytime office workstations.
2. **Dark Observability Theme:** Deep slate/navy canvases (`#080B11`, `#0F1420`) with high-contrast glowing indicators, optimized for operations centers and low-light environments.
3. **Control Room Theme:** Pitch black canvas (`#000000`) with saturated neon status indicators and large typography, optimized for multi-screen wall displays.

```css
:root {
  /* Brand Core */
  --yoko-red: #E60012;
  --yoko-red-hover: #CC0010;
  
  /* Status Roles (Color-Blind Safe with Multi-Channel Icon & Text Encoding) */
  --status-optimal: #059669;        /* ≥ 99.0% Availability */
  --status-warning: #D97706;        /* 95.0% to < 99.0% Availability */
  --status-critical: #DC2626;       /* < 95.0% Availability */
  --status-info: #0284C7;
}
```

### Tabular Figures & Typography
All metric readouts, durations, percentages, and timestamps utilize tabular numbers (`tabular-nums lining-nums`) to ensure vertical alignment without layout jitter during count-up transitions:
```css
.tabular-nums, .font-mono, [data-metric-val] {
  font-variant-numeric: tabular-nums lining-nums;
  letter-spacing: -0.015em;
}
```

---

## 2. Top-Row 6-Card KPI Header

The top row delivers 6 high-density metric cards designed for immediate situational awareness:

| Card | Primary Metric | Visual Indicator | Delta ($\Delta$) | Interaction |
| :--- | :--- | :--- | :--- | :--- |
| **Availability** | Overall Plant Uptime % | SVG Circular Target Ring ($\ge 99\%$) | MoM Delta vs Prior Period | Navigates to Speedometer |
| **Total Downtime** | Cumulative Hours Lost | Daily Downtime Mini Sparkline | MoM % Change (lower is better) | Navigates to Downtime Section |
| **Open Incidents** | Active Unresolved Outages | Pulsing Status Dot | Count vs Prior Period | Filters table to `status="Open"` |
| **MTTR** | Mean Time to Resolve | Average Repair Trend Sparkline | Minutes vs Benchmark (<60m) | Switches to KPI Analysis |
| **Closure Rate** | % of Incidents Resolved | Target Progress Bar | % vs 90% Enterprise Target | Filters table to `status="Completed"` |
| **Critical Assets** | Bottleneck Machines Faulted | Pulsing Alert Badge | Status Tag ("Zero Outages") | Filters table to `critical="Yes"` |

---

## 3. Advanced Bar Charts Suite (2D & 3D WebGL)

All visualizations consume a single, memoized aggregation adapter (`computeDashboardTelemetry()`) guaranteeing mathematical consistency across 2D and 3D views:

### 1. Stacked Category inside Area Bar Chart
- Visualizes the loss categories (MES, Network, Power, SAP, Hardware, etc.) stacked within each plant area (`Plant-1`, `Plant-2`, `Plant-3`, `Plant-4`, `4Roll shed`, `Mixing Shed`, `FID`, `IT infra`).
- Interactive legend allows operators to toggle specific failure categories on and off.
- Clicking any bar triggers an immediate drill-down to that plant area.

### 2. Grouped MoM Comparison vs Target
- Triple-series grouped comparison showing **Current Period Actual**, **Previous Period Baseline**, and **Enterprise Target Benchmark** (<4 hrs outage/area) side-by-side.

### 3. Ranked Horizontal Top 10 High-Impact Machinery Losses
- Horizontal ranked bars sorted descending by downtime hours with machine codes, area badges, and percentage share of total plant downtime.
- Machines with $\ge 3$ repeat failures in 30 days are automatically badged with the **CHRONIC** warning tag.

### 4. Pareto 80/20 Failure Breakdown
- Dual-axis visualization with bar heights representing total downtime hours per root-cause category and an overlay cumulative line (%) showing the 80% vital-few threshold line.

### 5. Bullet Availability Bars with Continuous Bands
- Compares actual availability against the 99.0% enterprise target using continuous background color bands:
  - **Optimal:** $\ge 99.0\%$ (Emerald)
  - **Warning:** $95.0\% \text{ to } < 99.0\%$ (Amber)
  - **Critical:** $< 95.0\%$ (Red)

### 6. Waterfall Variance & Diverging Shift
- Toggle between **Waterfall Bridge** (showing how each category increased or decreased downtime relative to the previous period) and **Diverging Shift** (showing area improvement vs degradation).

### 7. Range Brush & Timeline Period Zoom
- Interactive range brush slider allows operators to drag and zoom from 1 to 31 days, updating all dashboard charts and metrics synchronously.

### 8. 3D WebGL Visualizer Studio
- Powered by Three.js WebGL with an isometric 2.5D canvas fallback.
- Extrudes 3D pillars for plant machinery clusters on a Yokohama dark floor grid with directional key lighting and ambient illumination.
- Supports mouse drag orbit, wheel zoom, auto-rotation toggle, and camera reset.

---

## 4. Operational Telemetry & Observability Modules

### 1. 30-Day Availability Heatmap Matrix
- 8 Plant Areas $\times$ 31 Days matrix.
- Each cell is colored based on the area's availability on that specific day:
  - $\ge 99.0\%$ (Emerald)
  - $95.0\% - <99.0\%$ (Amber)
  - $<95.0\%$ (Red)
- Displays downtime duration inside cells and allows one-click filtering to that Area & Day.

### 2. Chronological Gantt Incident Timeline
- Displays recent machinery outages across time with category colors.
- Active unclosed outages feature an animated pulsing extending bar (`.gantt-bar-extending`) that extends to the current moment.

### 3. MTBF & Area Reliability Scores
- Calculates Mean Time Between Failures ($MTBF = \frac{\text{Operating Hours}}{\text{Failure Count}}$) for each plant area.
- Derives an Area Reliability Index (0–100 score) based on availability and low failure frequency.

### 4. SLA Resolution Compliance (ATC vs MELSS)
- Tracks resolution SLA (<60m standard target) separately for **ATC Internal IT** and **MELSS Vendor Team** with overdue ticket badges.

### 5. Predictive Rolling Average Forecast & 2-$\sigma$ Outlier Anomaly Detection
- Computes a 3-period weighted exponential moving average forecast clearly badged as a **PROJECTED ESTIMATE**.
- Evaluates the mean ($\mu$) and standard deviation ($\sigma$) of daily downtime; automatically flags any statistical surge exceeding $\mu + 2\sigma$ as an operational anomaly.

### 6. Deterministic Smart Insights Panel
- Plain-English rule-based natural language generator providing factual executive takeaways (e.g., primary loss drivers, asset outages, and statistical surge dates).

---

## 5. Navigation, Presets & Command Palette

- **Global Command Palette (`Ctrl+K` / `Cmd+K`):** Instant spotlight modal to jump between tabs, toggle themes, select view presets, or trigger Excel/CSV exports.
- **View Presets:**
  - *Executive View:* Emphasizes high-level availability, trajectory, and corporate targets.
  - *Operations View:* Emphasizes shift telemetry, active outages, and process breakdown.
  - *Maintenance View:* Emphasizes MTTR, MTBF, Pareto root causes, and top offenders.
  - *Control Room Theme:* High-contrast pitch-black wall display mode.
- **Sticky Filter Bar & Filter Chips:** Removable chips for active filters with one-click clear.
- **Deep-Linking URL State Sync:** All filter states, view presets, active themes, and 2D/3D modes serialize into URL hash parameters for bookmarkable and shareable views.
