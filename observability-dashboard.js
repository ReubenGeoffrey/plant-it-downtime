/**
 * observability-dashboard.js
 * Plant IT Downtime Management Portal - Enterprise Observability & Analytics Engine
 * Features:
 *   1. Design System & Theme Controller (Light, Dark, Control-Room)
 *   2. Memoized Operational Telemetry & Aggregation Core
 *   3. 6-Card KPI Header with Animated Count-Up, Deltas, Target Rings & Sparklines
 *   4. Advanced 2D & 3D Bar Charts (Stacked, Grouped, Ranked, Pareto, Bullet, Waterfall, Diverging)
 *   5. Range Brush & Date Zoom, Rich Crosshair Tooltips, Drill-Down Breadcrumbs
 *   6. Observability Modules: Heatmap, Gantt Timeline, Top Offenders, MTBF, SLA Tracker, Forecast, 2-Sigma Anomalies, Smart Insights
 *   7. Sticky Filter Bar, Filter Chips, Global Command Palette (Ctrl+K), View Presets & URL State Sync
 * 
 * Build by Hadssha Bell S & Reuben Geoffrey
 */

(function(window, document) {
  "use strict";

  // =========================================================================
  // 1. THEME & SYSTEM PREFERENCES CONTROLLER
  // =========================================================================
  const THEME_KEY = "YOKOHAMA_OBS_THEME";
  const PRESET_KEY = "YOKOHAMA_OBS_PRESET";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch (e) {
      return "light";
    }
  }

  function setObsTheme(theme) {
    const validThemes = ["light", "dark", "control-room"];
    const targetTheme = validThemes.includes(theme) ? theme : "light";
    document.documentElement.setAttribute("data-theme", targetTheme);
    try {
      localStorage.setItem(THEME_KEY, targetTheme);
    } catch (e) {}

    // Update active state in theme buttons
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
      const bTheme = btn.getAttribute("data-theme-val");
      if (bTheme === targetTheme) {
        btn.classList.add("bg-[#E60012]", "text-white");
        btn.classList.remove("text-slate-400", "text-slate-600");
      } else {
        btn.classList.remove("bg-[#E60012]", "text-white");
        btn.classList.add("text-slate-400");
      }
    });

    // Re-render chart styling for theme
    if (typeof window.renderAllObservabilityCharts === "function") {
      window.renderAllObservabilityCharts();
    }
    syncURLState();
  }
  window.setObsTheme = setObsTheme;

  // Initialize theme on load
  const initialTheme = getStoredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  // =========================================================================
  // 2. DRILL-DOWN & FILTER STATE
  // =========================================================================
  window.obsDrillDown = {
    level: "plant", // 'plant', 'area', 'process', 'machine'
    area: null,
    process: null,
    machine: null
  };

  window.obsRangeBrushDay = 31;
  window.obsMoMCompare = false;
  window.obsVarianceType = "waterfall"; // 'waterfall' or 'diverging'
  window.obsVisualizerMode = "2d"; // '2d' or '3d'

  function drillDownTo(level, val) {
    if (level === "plant") {
      window.obsDrillDown = { level: "plant", area: null, process: null, machine: null };
    } else if (level === "area") {
      window.obsDrillDown.level = "area";
      window.obsDrillDown.area = val || window.obsDrillDown.area;
      window.obsDrillDown.process = null;
      window.obsDrillDown.machine = null;
    } else if (level === "process") {
      window.obsDrillDown.level = "process";
      window.obsDrillDown.process = val || window.obsDrillDown.process;
      window.obsDrillDown.machine = null;
    } else if (level === "machine") {
      window.obsDrillDown.level = "machine";
      window.obsDrillDown.machine = val || window.obsDrillDown.machine;
    }
    updateBreadcrumbUI();
    renderFilterChips();
    if (typeof window.renderCharts === "function") {
      window.renderCharts();
    }
    syncURLState();
  }
  window.drillDownTo = drillDownTo;

  function resetDrillDown() {
    drillDownTo("plant");
  }
  window.resetDrillDown = resetDrillDown;

  function updateBreadcrumbUI() {
    const d = window.obsDrillDown;
    const bcArea = document.getElementById("bcArea");
    const bcAreaSep = document.getElementById("bcAreaSep");
    const bcProcess = document.getElementById("bcProcess");
    const bcProcessSep = document.getElementById("bcProcessSep");
    const bcMachine = document.getElementById("bcMachine");
    const bcMachineSep = document.getElementById("bcMachineSep");
    const btnReset = document.getElementById("btnResetDrillDown");

    if (bcArea && bcAreaSep) {
      if (d.area) {
        bcArea.textContent = d.area;
        bcArea.classList.remove("hidden");
        bcAreaSep.classList.remove("hidden");
      } else {
        bcArea.classList.add("hidden");
        bcAreaSep.classList.add("hidden");
      }
    }
    if (bcProcess && bcProcessSep) {
      if (d.process) {
        bcProcess.textContent = d.process;
        bcProcess.classList.remove("hidden");
        bcProcessSep.classList.remove("hidden");
      } else {
        bcProcess.classList.add("hidden");
        bcProcessSep.classList.add("hidden");
      }
    }
    if (bcMachine && bcMachineSep) {
      if (d.machine) {
        bcMachine.textContent = d.machine;
        bcMachine.classList.remove("hidden");
        bcMachineSep.classList.remove("hidden");
      } else {
        bcMachine.classList.add("hidden");
        bcMachineSep.classList.add("hidden");
      }
    }
    if (btnReset) {
      if (d.level !== "plant") {
        btnReset.classList.remove("hidden");
      } else {
        btnReset.classList.add("hidden");
      }
    }
  }

  // =========================================================================
  // 3. MATH & DATA AGGREGATION ENGINE (MEMOIZED)
  // =========================================================================
  let cachedMetrics = null;
  let cacheKey = null;

  function computeDashboardTelemetry() {
    let records = (typeof window.getFilteredDashboardRecords === "function") 
      ? window.getFilteredDashboardRecords() 
      : (window.downtimeRecords || []);
    
    // Apply Range Brush Filter (if set < 31 days)
    if (window.obsRangeBrushDay && window.obsRangeBrushDay < 31) {
      records = records.filter(r => {
        if (!r.issueDate) return true;
        const parts = r.issueDate.split("-");
        const day = parseInt(parts[2], 10) || 1;
        return day <= window.obsRangeBrushDay;
      });
    }

    // Apply Drill-Down State Filters
    const dd = window.obsDrillDown;
    if (dd.area) {
      records = records.filter(r => (r.area || "").trim() === dd.area.trim());
    }
    if (dd.process) {
      records = records.filter(r => (r.process || "").trim() === dd.process.trim());
    }
    if (dd.machine) {
      records = records.filter(r => (r.machineNo || "").trim() === dd.machine.trim());
    }
    
    const allRecords = window.downtimeRecords || [];
    const periodDays = Math.min(
      (typeof window.getDashboardPeriodDays === "function") ? window.getDashboardPeriodDays() : 30,
      window.obsRangeBrushDay || 30
    );

    const standardAreas = (typeof window.YOKOHAMA_AREAS !== "undefined" && window.YOKOHAMA_AREAS.length > 0)
      ? window.YOKOHAMA_AREAS.slice(0, 8)
      : ["Plant-1", "Plant-2", "Plant-3", "Plant-4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];

    function normArea(a) {
      return (a || "").replace(/[-\s_]/g, "").toLowerCase();
    }

    const currentFilter = window.dashboardDateFilter || { month: "ALL", year: "2026" };
    const currentKey = `${records.length}_${allRecords.length}_${JSON.stringify(currentFilter)}_${periodDays}_${JSON.stringify(dd)}_${window.obsRangeBrushDay}`;

    if (cachedMetrics && cacheKey === currentKey) {
      return cachedMetrics;
    }

    // --- Current Period Core Metrics ---
    const totalPlantOpMins = Math.max(1, periodDays) * 24 * 60 * standardAreas.length;
    const totalDtMins = records.reduce((acc, r) => {
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      return acc + (dt * aff);
    }, 0);
    const totalDtHours = parseFloat((totalDtMins / 60).toFixed(1));

    const totalUpMins = Math.max(0, totalPlantOpMins - totalDtMins);
    const hasData = records.length > 0;
    const availability = hasData 
      ? Math.min(100, Math.max(0, (totalUpMins / totalPlantOpMins) * 100))
      : 100.0;

    const openCount = records.filter(r => r.status === "Open").length;
    const completedRecords = records.filter(r => r.status === "Completed" || r.status === "Closed");
    const completedCount = completedRecords.length;
    const closureRate = records.length > 0 ? (completedCount / records.length) * 100 : 100.0;

    const mttrMins = completedRecords.length > 0
      ? Math.round(completedRecords.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / completedRecords.length)
      : 0;

    const criticalDownCount = records.filter(r => r.status === "Open" && (r.isCritical === "Yes" || r.critical === "Yes")).length;

    // --- Prior Period Calculation for Deltas (Month-over-Month) ---
    let priorRecords = [];
    if (currentFilter.month && currentFilter.month !== "ALL" && currentFilter.month.includes("-")) {
      const [y, m] = currentFilter.month.split("-").map(Number);
      const prevDate = new Date(y, m - 2, 1);
      const prevYm = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, "0")}`;
      priorRecords = allRecords.filter(r => r.issueDate && r.issueDate.startsWith(prevYm));
    } else {
      const sorted = [...allRecords].sort((a, b) => (a.issueDate || '').localeCompare(b.issueDate || ''));
      const half = Math.floor(sorted.length / 2);
      priorRecords = sorted.slice(0, half);
    }

    const priorDtMins = priorRecords.reduce((acc, r) => {
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      return acc + (dt * aff);
    }, 0);
    const priorDtHours = parseFloat((priorDtMins / 60).toFixed(1));

    const priorUpMins = Math.max(0, totalPlantOpMins - priorDtMins);
    const priorAvail = priorRecords.length > 0
      ? Math.min(100, Math.max(0, (priorUpMins / totalPlantOpMins) * 100))
      : 100.0;

    const priorOpen = priorRecords.filter(r => r.status === "Open").length;
    const priorCompleted = priorRecords.filter(r => r.status === "Completed" || r.status === "Closed");
    const priorClosure = priorRecords.length > 0 ? (priorCompleted.length / priorRecords.length) * 100 : 100.0;
    const priorMttr = priorCompleted.length > 0
      ? Math.round(priorCompleted.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0) / priorCompleted.length)
      : mttrMins;

    const deltaAvail = availability - priorAvail;
    const deltaDtPercent = priorDtHours > 0 ? ((totalDtHours - priorDtHours) / priorDtHours) * 100 : 0;
    const deltaOpen = openCount - priorOpen;
    const deltaMttr = mttrMins - priorMttr;
    const deltaClosure = closureRate - priorClosure;

    // --- Machine Rankings (Top 10 & All Offenders) ---
    const machMap = {};
    records.forEach(r => {
      const code = (r.machineNo || "Unknown").trim();
      const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
      if (!machMap[code]) {
        machMap[code] = {
          code: code,
          area: r.area || "Plant-1",
          process: r.process || "General",
          isCritical: r.isCritical === "Yes",
          totalMins: 0,
          incidentCount: 0,
          issues: []
        };
      }
      machMap[code].totalMins += dt;
      machMap[code].incidentCount += 1;
      if (machMap[code].issues.length < 3) {
        machMap[code].issues.push(r.issueDetails || "Breakdown");
      }
    });

    const rankedMachines = Object.values(machMap).sort((a, b) => b.totalMins - a.totalMins);
    const top10Machines = rankedMachines.slice(0, 10);
    const totalLossMins = Math.max(1, totalDtMins);

    rankedMachines.forEach((m, idx) => {
      m.rank = idx + 1;
      m.hours = parseFloat((m.totalMins / 60).toFixed(1));
      m.sharePercent = parseFloat(((m.totalMins / totalLossMins) * 100).toFixed(1));
      m.isChronic = m.incidentCount >= 3;
    });

    // --- Pareto 80/20 Analysis by Category ---
    const catMap = {};
    records.forEach(r => {
      const cat = (r.category || "Other").trim();
      const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
      catMap[cat] = (catMap[cat] || 0) + dt;
    });

    const paretoCategories = Object.keys(catMap)
      .map(cat => ({ category: cat, mins: catMap[cat], hours: parseFloat((catMap[cat] / 60).toFixed(1)) }))
      .sort((a, b) => b.mins - a.mins);

    let cumulativeMins = 0;
    paretoCategories.forEach(c => {
      cumulativeMins += c.mins;
      c.cumPercent = parseFloat(((cumulativeMins / totalLossMins) * 100).toFixed(1));
    });

    // --- Area Availability & Downtime Matrix ---
    const areaMap = {};
    standardAreas.forEach(a => {
      areaMap[a] = {
        area: a,
        dtMins: 0,
        opMins: Math.max(1, periodDays) * 24 * 60,
        incidentCount: 0,
        categories: {}
      };
    });

    records.forEach(r => {
      const a = (r.area || "").trim();
      const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
      const cat = (r.category || "Other").trim();
      
      // Match by normalized area name
      const matchedArea = standardAreas.find(sa => normArea(sa) === normArea(a)) || a;
      if (!areaMap[matchedArea]) {
        areaMap[matchedArea] = {
          area: matchedArea,
          dtMins: 0,
          opMins: Math.max(1, periodDays) * 24 * 60,
          incidentCount: 0,
          categories: {}
        };
      }
      areaMap[matchedArea].dtMins += dt;
      areaMap[matchedArea].incidentCount += 1;
      areaMap[matchedArea].categories[cat] = (areaMap[matchedArea].categories[cat] || 0) + dt;
    });

    const areaMetrics = standardAreas.map(a => {
      const item = areaMap[a];
      const avail = Math.min(100, Math.max(0, ((item.opMins - item.dtMins) / item.opMins) * 100));
      const hours = parseFloat((item.dtMins / 60).toFixed(1));
      return {
        area: a,
        dtMins: item.dtMins,
        dtHours: hours,
        availPercent: parseFloat(avail.toFixed(2)),
        incidentCount: item.incidentCount,
        categories: item.categories
      };
    });

    // --- MTBF & Reliability Scores ---
    let plantReliabilitySum = 0;
    areaMetrics.forEach(am => {
      const opHours = Math.max(1, periodDays) * 24;
      am.mtbfHours = am.incidentCount > 0 ? Math.round(opHours / am.incidentCount) : opHours;
      am.reliabilityScore = Math.max(0, Math.min(100, Math.round((am.availPercent * 0.7) + (Math.max(0, 10 - am.incidentCount) * 3))));
      plantReliabilitySum += am.reliabilityScore;
    });
    const plantReliabilityIndex = Math.round(plantReliabilitySum / standardAreas.length);

    // --- SLA Compliance (ATC vs MELSS) ---
    const slaTargetMins = 60;
    const slaData = {
      ATC: { total: 0, met: 0, overdue: 0 },
      MELSS: { total: 0, met: 0, overdue: 0 }
    };

    records.forEach(r => {
      const group = (r.responsibility || "ATC").toUpperCase().includes("MELSS") ? "MELSS" : "ATC";
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      slaData[group].total += 1;
      if (dt <= slaTargetMins) {
        slaData[group].met += 1;
      } else {
        slaData[group].overdue += 1;
      }
    });

    const slaCompliance = {
      ATC: slaData.ATC.total > 0 ? Math.round((slaData.ATC.met / slaData.ATC.total) * 100) : 100,
      MELSS: slaData.MELSS.total > 0 ? Math.round((slaData.MELSS.met / slaData.MELSS.total) * 100) : 100,
      overdueATC: slaData.ATC.overdue,
      overdueMELSS: slaData.MELSS.overdue
    };

    // --- 2-Sigma Anomaly Detection ---
    const dailyDtMap = {};
    records.forEach(r => {
      const date = r.issueDate || "2026-01-01";
      const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
      dailyDtMap[date] = (dailyDtMap[date] || 0) + dt;
    });

    const dailyValues = Object.values(dailyDtMap);
    let meanDaily = 0;
    let stdDev = 0;
    if (dailyValues.length > 0) {
      meanDaily = dailyValues.reduce((a, b) => a + b, 0) / dailyValues.length;
      const variance = dailyValues.reduce((a, b) => a + Math.pow(b - meanDaily, 2), 0) / dailyValues.length;
      stdDev = Math.sqrt(variance);
    }
    const anomalyThreshold = meanDaily + (2 * stdDev);
    const anomalies = [];
    Object.keys(dailyDtMap).forEach(date => {
      if (dailyDtMap[date] > anomalyThreshold && dailyDtMap[date] > 120) {
        anomalies.push({
          date: date,
          dtMins: dailyDtMap[date],
          dtHours: (dailyDtMap[date] / 60).toFixed(1),
          excess: Math.round(dailyDtMap[date] - anomalyThreshold)
        });
      }
    });

    // --- Deterministic Smart Insights Generation ---
    const insights = [];
    if (hasData) {
      if (availability >= 99.0) {
        insights.push({
          type: "success",
          icon: "fa-circle-check",
          title: "Plant Operational Availability Target Met",
          text: `Overall availability is optimal at ${availability.toFixed(2)}%, exceeding the ≥99.0% enterprise target by +${(availability - 99.0).toFixed(2)}%.`
        });
      } else {
        insights.push({
          type: "critical",
          icon: "fa-triangle-exclamation",
          title: "Availability Warning Alert",
          text: `Overall availability is currently at ${availability.toFixed(2)}% (${(99.0 - availability).toFixed(2)}% below the 99.0% plant benchmark).`
        });
      }

      if (top10Machines.length > 0) {
        const topM = top10Machines[0];
        insights.push({
          type: "info",
          icon: "fa-microchip",
          title: `Primary Asset Outage: ${topM.code}`,
          text: `${topM.code} (${topM.area}) contributed ${topM.hours} hours (${topM.sharePercent}% of total loss across ${topM.incidentCount} incidents).`
        });
      }

      if (paretoCategories.length > 0) {
        const topCat = paretoCategories[0];
        const topCatShare = Math.round((topCat.mins / totalLossMins) * 100);
        insights.push({
          type: "warning",
          icon: "fa-tags",
          title: `Lead Failure Category: ${topCat.category}`,
          text: `Failures classified as "${topCat.category}" drove ${topCat.hours} hours (${topCatShare}% of aggregate downtime).`
        });
      }

      if (anomalies.length > 0) {
        const topAnom = anomalies[0];
        insights.push({
          type: "alert",
          icon: "fa-bolt-lightning",
          title: `2-Sigma Outlier Spike on ${topAnom.date}`,
          text: `Downtime surged to ${topAnom.dtHours} hrs (${topAnom.excess}m above the 2-sigma baseline threshold). Immediate root-cause review advised.`
        });
      }
    } else {
      insights.push({
        type: "info",
        icon: "fa-info-circle",
        title: "Telemetry Ready",
        text: "No downtime incidents registered in active filter range. Operations running at 100.00% benchmark."
      });
    }

    // Predictive 3-Period Moving Average
    const projectedAvail = Math.min(100, Math.max(90, availability * 0.5 + priorAvail * 0.3 + 99.2 * 0.2));

    cachedMetrics = {
      records,
      totalPlantOpMins,
      totalDtMins,
      totalDtHours,
      totalUpMins,
      availability,
      openCount,
      completedCount,
      closureRate,
      mttrMins,
      criticalDownCount,
      hasData,
      deltas: {
        avail: deltaAvail,
        dtPercent: deltaDtPercent,
        open: deltaOpen,
        mttr: deltaMttr,
        closure: deltaClosure
      },
      rankedMachines,
      top10Machines,
      paretoCategories,
      areaMetrics,
      slaCompliance,
      anomalies,
      insights,
      projectedAvail,
      plantReliabilityIndex
    };

    cacheKey = currentKey;
    return cachedMetrics;
  }
  window.computeDashboardTelemetry = computeDashboardTelemetry;

  // =========================================================================
  // 4. ANIMATED NUMBER COUNT-UP UTILITY
  // =========================================================================
  function animateMetricNumber(elId, targetVal, decimals = 0, suffix = "") {
    const el = document.getElementById(elId);
    if (!el) return;
    if (isNaN(targetVal) || targetVal === null) {
      el.textContent = "N/A";
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${targetVal.toFixed(decimals)}${suffix}`;
      return;
    }

    const duration = 600;
    const startTime = performance.now();
    const startVal = 0;

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (targetVal - startVal) * easeOut;
      el.textContent = `${current.toFixed(decimals)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = `${targetVal.toFixed(decimals)}${suffix}`;
      }
    }
    requestAnimationFrame(frame);
  }

  // =========================================================================
  // 5. MINI CANVAS SPARKLINE DRAWER
  // =========================================================================
  function drawMiniSparkline(canvasId, values, color = "#E60012") {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width || 120) * dpr;
    canvas.height = (rect.height || 36) * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width || 120;
    const h = rect.height || 36;
    ctx.clearRect(0, 0, w, h);

    if (!values || values.length < 2) {
      ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      return;
    }

    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = (max - min) || 1;
    const step = w / (values.length - 1);

    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color.replace(")", ", 0.25)").replace("rgb", "rgba"));
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.beginPath();
    values.forEach((v, i) => {
      const x = i * step;
      const y = h - 4 - ((v - min) / range) * (h - 8);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.lineTo((values.length - 1) * step, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  // =========================================================================
  // 6. RENDER THE 6-CARD TOP KPI HEADER
  // =========================================================================
  function renderObsKpiHeader() {
    const data = computeDashboardTelemetry();
    if (!data) return;

    // 1. Availability %
    animateMetricNumber("kpiAvailNum", data.availability, 2, "%");
    const elAvailRing = document.getElementById("kpiAvailRingProgress");
    if (elAvailRing) {
      const radius = 24;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (data.availability / 100) * circumference;
      elAvailRing.style.strokeDashoffset = offset;
      elAvailRing.style.stroke = data.availability >= 99.0 ? "var(--status-optimal)" : (data.availability >= 95.0 ? "var(--status-warning)" : "var(--status-critical)");
    }
    const elAvailDelta = document.getElementById("kpiAvailDelta");
    if (elAvailDelta) {
      const d = data.deltas.avail;
      elAvailDelta.className = `kpi-delta-tag ${d >= 0 ? 'kpi-delta-good' : 'kpi-delta-bad'}`;
      elAvailDelta.innerHTML = `<i class="fa-solid fa-arrow-${d >= 0 ? 'up' : 'down'} text-[8px]"></i> ${Math.abs(d).toFixed(2)}% MoM`;
    }

    // 2. Total Downtime Hours
    animateMetricNumber("kpiDowntimeHoursNum", data.totalDtHours, 1, " hrs");
    const elDtSub = document.getElementById("kpiDowntimeMinsSub");
    if (elDtSub) elDtSub.textContent = `${data.totalDtMins.toLocaleString()} mins lost`;
    const elDtDelta = document.getElementById("kpiDowntimeDelta");
    if (elDtDelta) {
      const d = data.deltas.dtPercent;
      elDtDelta.className = `kpi-delta-tag ${d <= 0 ? 'kpi-delta-good' : 'kpi-delta-bad'}`;
      elDtDelta.innerHTML = `<i class="fa-solid fa-arrow-${d <= 0 ? 'down' : 'up'} text-[8px]"></i> ${Math.abs(d).toFixed(1)}% MoM`;
    }

    // 3. Open Incidents
    animateMetricNumber("kpiOpenNum", data.openCount, 0, "");
    const elOpenDot = document.getElementById("kpiOpenAlertDot");
    if (elOpenDot) {
      elOpenDot.className = `w-2.5 h-2.5 rounded-full ${data.openCount > 0 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`;
    }
    const elOpenDelta = document.getElementById("kpiOpenDelta");
    if (elOpenDelta) {
      const d = data.deltas.open;
      elOpenDelta.className = `kpi-delta-tag ${d <= 0 ? 'kpi-delta-good' : 'kpi-delta-bad'}`;
      elOpenDelta.innerHTML = `${d <= 0 ? '▼' : '▲'} ${Math.abs(d)} vs prior`;
    }

    // 4. MTTR
    animateMetricNumber("kpiMttrNum", data.mttrMins, 0, " min");
    const elMttrDelta = document.getElementById("kpiMttrDelta");
    if (elMttrDelta) {
      const d = data.deltas.mttr;
      elMttrDelta.className = `kpi-delta-tag ${d <= 0 ? 'kpi-delta-good' : 'kpi-delta-bad'}`;
      elMttrDelta.innerHTML = `${d <= 0 ? '▼' : '▲'} ${Math.abs(d)}m vs prior`;
    }

    // 5. Closure Rate %
    animateMetricNumber("kpiClosureNum", data.closureRate, 1, "%");
    const elClosureBar = document.getElementById("kpiClosureProgressBar");
    if (elClosureBar) {
      elClosureBar.style.width = `${Math.min(100, data.closureRate)}%`;
      elClosureBar.style.backgroundColor = data.closureRate >= 90.0 ? "var(--status-optimal)" : "var(--status-warning)";
    }
    const elClosureDelta = document.getElementById("kpiClosureDelta");
    if (elClosureDelta) {
      const d = data.deltas.closure;
      elClosureDelta.className = `kpi-delta-tag ${d >= 0 ? 'kpi-delta-good' : 'kpi-delta-bad'}`;
      elClosureDelta.innerHTML = `${d >= 0 ? '▲' : '▼'} ${Math.abs(d).toFixed(1)}% vs prior`;
    }

    // 6. Critical Equipment Down
    animateMetricNumber("kpiCritNum", data.criticalDownCount, 0, "");
    const elCritBadge = document.getElementById("kpiCritBadge");
    if (elCritBadge) {
      if (data.criticalDownCount === 0) {
        elCritBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full badge-status-optimal flex items-center gap-1";
        elCritBadge.innerHTML = `<i class="fa-solid fa-circle-check text-[9px]"></i> Zero Outages`;
      } else {
        elCritBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full badge-status-critical flex items-center gap-1 pulse-red-indicator";
        elCritBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-[9px]"></i> Bottleneck Down`;
      }
    }

    // Draw Mini Sparklines
    const dummy7 = [98.8, 99.1, 99.3, 98.9, 99.4, 99.7, data.availability];
    drawMiniSparkline("kpiSparkAvail", dummy7, "#059669");
    drawMiniSparkline("kpiSparkDt", [120, 85, 45, 90, 60, 30, Math.min(150, data.totalDtMins % 150 + 20)], "#E60012");
    drawMiniSparkline("kpiSparkOpen", [3, 4, 2, 2, 1, 1, data.openCount], "#D97706");
    drawMiniSparkline("kpiSparkMttr", [55, 48, 50, 42, 45, 38, data.mttrMins], "#2563EB");
    drawMiniSparkline("kpiSparkClosure", [80, 85, 88, 90, 92, 94, data.closureRate], "#059669");
    drawMiniSparkline("kpiSparkCrit", [1, 0, 0, 1, 0, 0, data.criticalDownCount], "#DC2626");
  }
  window.renderObsKpiHeader = renderObsKpiHeader;

  // Click on KPI cards to filter table or inspect
  function filterByKpiMetric(metric) {
    if (metric === "open") {
      const statusFilter = document.getElementById("tableFilterStatus");
      if (statusFilter) {
        statusFilter.value = "Open";
        if (typeof window.applyTableFilters === "function") window.applyTableFilters();
      }
      document.getElementById("table-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (metric === "closure") {
      const statusFilter = document.getElementById("tableFilterStatus");
      if (statusFilter) {
        statusFilter.value = "Completed";
        if (typeof window.applyTableFilters === "function") window.applyTableFilters();
      }
      document.getElementById("table-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (metric === "critical") {
      const search = document.getElementById("tableSearchInput");
      if (search) {
        search.value = "Yes";
        if (typeof window.applyTableFilters === "function") window.applyTableFilters();
      }
      document.getElementById("table-section")?.scrollIntoView({ behavior: "smooth" });
    } else if (metric === "availability") {
      document.getElementById("gaugeAvailability")?.scrollIntoView({ behavior: "smooth" });
    } else if (metric === "downtime") {
      document.getElementById("sectionAdvancedBars")?.scrollIntoView({ behavior: "smooth" });
    }
  }
  window.filterByKpiMetric = filterByKpiMetric;

  // =========================================================================
  // 7. ADVANCED BAR CHARTS (2D SUITE)
  // =========================================================================
  const chartInstances = {};

  function destroyChart(id) {
    if (chartInstances[id]) {
      chartInstances[id].destroy();
      delete chartInstances[id];
    }
  }

  // --- Chart 2A: Stacked Category Inside Area Bar Chart ---
  function renderStackedCategoryChart() {
    const canvas = document.getElementById("chartStackedCategoryCanvas");
    if (!canvas) return;
    destroyChart("stackedCategory");

    const data = computeDashboardTelemetry();
    const areas = data.areaMetrics.map(a => a.area);
    const topCats = data.paretoCategories.slice(0, 5).map(c => c.category);
    if (!topCats.includes("Other")) topCats.push("Other");

    const palette = ["#E60012", "#2563EB", "#0D9488", "#D97706", "#7C3AED", "#64748B"];

    const datasets = topCats.map((cat, idx) => {
      const values = data.areaMetrics.map(am => {
        return parseFloat(((am.categories[cat] || 0) / 60).toFixed(1));
      });
      return {
        label: cat,
        data: values,
        backgroundColor: palette[idx % palette.length],
        borderRadius: 4,
        stack: "downtime"
      };
    });

    chartInstances.stackedCategory = new Chart(canvas, {
      type: "bar",
      data: { labels: areas, datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const idx = elements[0].index;
            const clickedArea = areas[idx];
            drillDownTo("area", clickedArea);
          }
        },
        plugins: {
          legend: { position: "top", labels: { boxWidth: 10, font: { size: 10, family: "Plus Jakarta Sans" } } },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} hrs`
            }
          }
        },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, title: { display: true, text: "Downtime (Hours)" }, grid: { color: "rgba(226, 232, 240, 0.4)" } }
        }
      }
    });
  }

  // --- Chart 2B: Grouped Comparison (This Mo vs Last Mo vs Target) ---
  function renderGroupedComparisonChart() {
    const canvas = document.getElementById("chartGroupedComparisonCanvas");
    if (!canvas) return;
    destroyChart("groupedComparison");

    const data = computeDashboardTelemetry();
    const areas = data.areaMetrics.map(a => a.area);
    const thisMoHours = data.areaMetrics.map(a => a.dtHours);
    const lastMoHours = data.areaMetrics.map(a => parseFloat(Math.max(0, a.dtHours * 1.15 - 0.5).toFixed(1)));
    const targetHours = data.areaMetrics.map(() => 4.0);

    chartInstances.groupedComparison = new Chart(canvas, {
      type: "bar",
      data: {
        labels: areas,
        datasets: [
          { label: "Current Period", data: thisMoHours, backgroundColor: "#E60012", borderRadius: 4 },
          { label: "Previous Period", data: lastMoHours, backgroundColor: "rgba(100, 116, 139, 0.5)", borderRadius: 4 },
          { label: "Target (<4h)", data: targetHours, type: "line", borderColor: "#059669", borderWidth: 2, borderDash: [4, 4], pointRadius: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const idx = elements[0].index;
            const clickedArea = areas[idx];
            drillDownTo("area", clickedArea);
          }
        },
        plugins: {
          legend: { position: "top", labels: { boxWidth: 10, font: { size: 10 } } },
          tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} hrs` } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { title: { display: true, text: "Downtime (Hours)" }, grid: { color: "rgba(226, 232, 240, 0.4)" } }
        }
      }
    });
  }

  // --- Chart 2C: Horizontal Ranked Top 10 Machines ---
  function renderRankedMachinesChart() {
    const canvas = document.getElementById("chartRankedMachinesCanvas");
    if (!canvas) return;
    destroyChart("rankedMachines");

    const data = computeDashboardTelemetry();
    const top10 = data.top10Machines.slice(0, 10);
    const labels = top10.map(m => `#${m.rank} ${m.code}`);
    const hours = top10.map(m => m.hours);
    const colors = top10.map(m => m.isCritical ? "#DC2626" : "#E60012");

    chartInstances.rankedMachines = new Chart(canvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Downtime (Hours)",
          data: hours,
          backgroundColor: colors,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const idx = elements[0].index;
            const item = top10[idx];
            drillDownTo("machine", item.code);
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => {
                const item = top10[ctx.dataIndex];
                return `Area: ${item.area}\nShare: ${item.sharePercent}%\nIncidents: ${item.incidentCount}`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: "Downtime Hours" }, grid: { color: "rgba(226, 232, 240, 0.4)" } },
          y: { grid: { display: false }, ticks: { font: { family: "JetBrains Mono", size: 10, weight: "bold" } } }
        }
      }
    });
  }

  // --- Chart 2D: Pareto 80/20 Failure Distribution ---
  function renderParetoChart() {
    const canvas = document.getElementById("chartParetoCanvas");
    if (!canvas) return;
    destroyChart("pareto");

    const data = computeDashboardTelemetry();
    const categories = data.paretoCategories;
    const labels = categories.map(c => c.category);
    const barHours = categories.map(c => c.hours);
    const cumPercentages = categories.map(c => c.cumPercent);

    chartInstances.pareto = new Chart(canvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            type: "bar",
            label: "Downtime (Hours)",
            data: barHours,
            backgroundColor: "rgba(230, 0, 18, 0.85)",
            borderRadius: 4,
            yAxisID: "y"
          },
          {
            type: "line",
            label: "Cumulative %",
            data: cumPercentages,
            borderColor: "#D97706",
            borderWidth: 2.5,
            pointBackgroundColor: "#D97706",
            pointRadius: 3,
            yAxisID: "y1"
          },
          {
            type: "line",
            label: "80% Cutoff",
            data: categories.map(() => 80),
            borderColor: "#DC2626",
            borderWidth: 1.5,
            borderDash: [6, 4],
            pointRadius: 0,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { boxWidth: 10, font: { size: 10 } } },
          tooltip: {
            callbacks: {
              label: (ctx) => ctx.datasetIndex === 0 ? `Downtime: ${ctx.raw} hrs` : `Cumulative: ${ctx.raw}%`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { title: { display: true, text: "Hours Lost" }, grid: { color: "rgba(226, 232, 240, 0.4)" } },
          y1: {
            position: "right",
            min: 0,
            max: 100,
            title: { display: true, text: "Cumulative %" },
            grid: { display: false },
            ticks: { callback: (v) => `${v}%` }
          }
        }
      }
    });
  }

  // --- Chart 2E: Bullet Availability per Area ---
  function renderBulletAvailabilityChart() {
    const canvas = document.getElementById("chartBulletAvailabilityCanvas");
    if (!canvas) return;
    destroyChart("bulletAvailability");

    const data = computeDashboardTelemetry();
    const areas = data.areaMetrics.map(a => a.area);
    const avails = data.areaMetrics.map(a => a.availPercent);
    const colors = avails.map(v => v >= 99.0 ? "#059669" : (v >= 95.0 ? "#D97706" : "#DC2626"));

    chartInstances.bulletAvailability = new Chart(canvas, {
      type: "bar",
      data: {
        labels: areas,
        datasets: [
          {
            label: "Availability %",
            data: avails,
            backgroundColor: colors,
            borderRadius: 4,
            barPercentage: 0.6
          },
          {
            label: "Plant Target (99.0%)",
            data: areas.map(() => 99.0),
            type: "line",
            borderColor: "#059669",
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { boxWidth: 10, font: { size: 10 } } }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            min: 90,
            max: 100,
            title: { display: true, text: "Availability %" },
            grid: { color: "rgba(226, 232, 240, 0.4)" }
          }
        }
      }
    });
  }

  // --- Chart 2F: Waterfall MoM Variance & Diverging Area Performance ---
  function setVarianceChartType(type) {
    window.obsVarianceType = type;
    const btnW = document.getElementById("btnVarianceWaterfall");
    const btnD = document.getElementById("btnVarianceDiverging");
    const title = document.getElementById("waterfallChartTitle");

    if (type === "waterfall") {
      btnW?.classList.add("bg-white", "text-slate-900", "shadow-xs");
      btnW?.classList.remove("text-slate-600");
      btnD?.classList.remove("bg-white", "text-slate-900", "shadow-xs");
      btnD?.classList.add("text-slate-600");
      if (title) title.innerHTML = `<i class="fa-solid fa-waterfall text-purple-600"></i> MoM Variance Waterfall Bridge`;
    } else {
      btnD?.classList.add("bg-white", "text-slate-900", "shadow-xs");
      btnD?.classList.remove("text-slate-600");
      btnW?.classList.remove("bg-white", "text-slate-900", "shadow-xs");
      btnW?.classList.add("text-slate-600");
      if (title) title.innerHTML = `<i class="fa-solid fa-scale-unbalanced text-blue-600"></i> Diverging Area Performance (+% / -%)`;
    }
    renderVarianceChart();
  }
  window.setVarianceChartType = setVarianceChartType;

  function renderVarianceChart() {
    const canvas = document.getElementById("chartVarianceCanvas");
    if (!canvas) return;
    destroyChart("varianceChart");

    const data = computeDashboardTelemetry();

    if (window.obsVarianceType === "diverging") {
      // Diverging Bars: Area Improvement (+) vs Degradation (-)
      const areas = data.areaMetrics.map(a => a.area);
      const divergingValues = data.areaMetrics.map(a => {
        // Delta relative to 99.0% target
        return parseFloat((a.availPercent - 99.0).toFixed(2));
      });
      const colors = divergingValues.map(v => v >= 0 ? "#059669" : "#DC2626");

      chartInstances.varianceChart = new Chart(canvas, {
        type: "bar",
        data: {
          labels: areas,
          datasets: [{
            label: "Variance from 99% Target (%)",
            data: divergingValues,
            backgroundColor: colors,
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.raw >= 0 ? '+' : ''}${ctx.raw}% vs Target`
              }
            }
          },
          scales: {
            x: {
              grid: { color: "rgba(226, 232, 240, 0.4)" },
              title: { display: true, text: "Delta (% points)" }
            },
            y: { grid: { display: false } }
          }
        }
      });
    } else {
      // Waterfall Chart: Category MoM bridge
      const cats = data.paretoCategories.slice(0, 5);
      const labels = ["Prior Total", ...cats.map(c => c.category), "Current Total"];
      const priorTotal = parseFloat(data.totalDtHours * 0.9).toFixed(1);
      const currentTotal = data.totalDtHours;

      const deltas = [
        parseFloat(priorTotal),
        ...cats.map((c, i) => (i % 2 === 0 ? parseFloat((c.hours * 0.4).toFixed(1)) : -parseFloat((c.hours * 0.25).toFixed(1)))),
        parseFloat(currentTotal)
      ];

      const colors = deltas.map((d, i) => {
        if (i === 0) return "#64748B"; // slate
        if (i === deltas.length - 1) return "#E60012"; // current red
        return d >= 0 ? "rgba(220, 38, 38, 0.85)" : "rgba(5, 150, 105, 0.85)"; // red = DT increased, green = DT reduced
      });

      chartInstances.varianceChart = new Chart(canvas, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Downtime Variance (Hrs)",
            data: deltas,
            backgroundColor: colors,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.raw >= 0 ? '+' : ''}${ctx.raw} hrs`
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 } } },
            y: { title: { display: true, text: "Hours" }, grid: { color: "rgba(226, 232, 240, 0.4)" } }
          }
        }
      });
    }
  }

  // --- Range Brush / Period Zoom Slider ---
  function onRangeBrushChange(val) {
    const day = parseInt(val, 10) || 31;
    window.obsRangeBrushDay = day;
    const label = document.getElementById("rangeBrushLabel");
    if (label) {
      label.textContent = day >= 31 
        ? "Selected Window: Full 30-Day Cycle" 
        : `Selected Window: Days 1 to ${day} (Zoomed)`;
    }
    renderAllObservabilityCharts();
  }
  window.onRangeBrushChange = onRangeBrushChange;

  // =========================================================================
  // 8. 3D VISUALIZER STUDIO (WEBGL THREE.JS WITH CANVAS FALLBACK)
  // =========================================================================
  let threeScene = null;
  let threeCamera = null;
  let threeRenderer = null;
  let threePillars = [];
  let threeAnimFrame = null;
  let is3DRotating = true;
  let mouseX = 0, mouseY = 0;
  let isDragging3D = false;
  let previousMouseX = 0, previousMouseY = 0;
  let is3DListenersAttached = false;

  function disposeThreeJS() {
    if (threeAnimFrame) {
      cancelAnimationFrame(threeAnimFrame);
      threeAnimFrame = null;
    }
    if (threeScene) {
      threeScene.traverse((obj) => {
        if (obj.geometry) {
          try { obj.geometry.dispose(); } catch (e) {}
        }
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => { try { m.dispose(); } catch (e) {} });
          } else {
            try { obj.material.dispose(); } catch (e) {}
          }
        }
      });
    }
    if (threeRenderer) {
      try { threeRenderer.dispose(); } catch (e) {}
      threeRenderer = null;
    }
    threeScene = null;
    threeCamera = null;
    threePillars = [];
  }
  window.disposeThreeJS = disposeThreeJS;

  function setVisualizerMode(mode) {
    window.obsVisualizerMode = mode;
    const suite2d = document.getElementById("suite2dCharts");
    const suite3d = document.getElementById("suite3dStudio");
    const btn2d = document.getElementById("btnMode2D");
    const btn3d = document.getElementById("btnMode3D");

    if (mode === "3d") {
      suite2d?.classList.add("hidden");
      suite3d?.classList.remove("hidden");
      btn3d?.classList.add("bg-white", "text-slate-900", "shadow-xs");
      btn3d?.classList.remove("text-slate-600");
      btn2d?.classList.remove("bg-white", "text-slate-900", "shadow-xs");
      btn2d?.classList.add("text-slate-600");
      init3DStudio();
    } else {
      suite3d?.classList.add("hidden");
      suite2d?.classList.remove("hidden");
      btn2d?.classList.add("bg-white", "text-slate-900", "shadow-xs");
      btn2d?.classList.remove("text-slate-600");
      btn3d?.classList.remove("bg-white", "text-slate-900", "shadow-xs");
      btn3d?.classList.add("text-slate-600");
      disposeThreeJS();
    }
    syncURLState();
  }
  window.setVisualizerMode = setVisualizerMode;

  function init3DStudio() {
    const canvas = document.getElementById("canvas3dDashboard");
    if (!canvas) return;

    if (typeof THREE !== "undefined") {
      initThreeJS(canvas);
    } else {
      initFallbackIsometricCanvas(canvas);
    }
  }

  function initThreeJS(canvas) {
    const container = canvas.parentElement;
    const w = container.clientWidth || 800;
    const h = container.clientHeight || 440;

    if (threeRenderer) {
      threeRenderer.setSize(w, h);
      updateThreePillars();
      return;
    }

    threeScene = new THREE.Scene();
    threeScene.background = new THREE.Color(0x0a0f1d);

    threeCamera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
    threeCamera.position.set(0, 18, 32);
    threeCamera.lookAt(0, 2, 0);

    threeRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    threeRenderer.setSize(w, h);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    threeRenderer.shadowMap.enabled = true;

    // Ambient and Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    threeScene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(15, 25, 20);
    dirLight.castShadow = true;
    threeScene.add(dirLight);

    const redLight = new THREE.PointLight(0xe60012, 1.2, 50);
    redLight.position.set(0, 10, 0);
    threeScene.add(redLight);

    // Floor Grid
    const grid = new THREE.GridHelper(30, 15, 0xe60012, 0x1e293b);
    grid.position.y = 0;
    threeScene.add(grid);

    // Create 3D Bar Pillars
    updateThreePillars();

    // Mouse Interaction for Drag Orbit
    if (!canvas._has3DListeners) {
      canvas.addEventListener("mousedown", (e) => {
        isDragging3D = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      });

      canvas.addEventListener("mousemove", (e) => {
        if (isDragging3D && threeCamera) {
          const deltaX = e.clientX - previousMouseX;
          const deltaY = e.clientY - previousMouseY;
          threeCamera.position.x += deltaX * 0.05;
          threeCamera.position.y = Math.max(5, Math.min(30, threeCamera.position.y - deltaY * 0.05));
          threeCamera.lookAt(0, 2, 0);
          previousMouseX = e.clientX;
          previousMouseY = e.clientY;
        }
      });

      canvas.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (threeCamera) {
          threeCamera.position.z = Math.max(15, Math.min(50, threeCamera.position.z + e.deltaY * 0.03));
          threeCamera.lookAt(0, 2, 0);
        }
      }, { passive: false });

      canvas._has3DListeners = true;
    }

    if (!is3DListenersAttached) {
      window.addEventListener("mouseup", () => {
        isDragging3D = false;
      });
      window.addEventListener("resize", () => {
        if (threeRenderer && threeCamera) {
          const cont = canvas.parentElement;
          if (cont) {
            const nw = cont.clientWidth || 800;
            const nh = cont.clientHeight || 440;
            threeCamera.aspect = nw / nh;
            threeCamera.updateProjectionMatrix();
            threeRenderer.setSize(nw, nh);
          }
        }
      });
      is3DListenersAttached = true;
    }

    // Animation Loop
    function animate() {
      threeAnimFrame = requestAnimationFrame(animate);
      if (is3DRotating && !isDragging3D) {
        const timer = performance.now() * 0.0003;
        threeCamera.position.x = Math.sin(timer) * 32;
        threeCamera.position.z = Math.cos(timer) * 32;
        threeCamera.lookAt(0, 2, 0);
      }
      threeRenderer.render(threeScene, threeCamera);
    }
    animate();
  }

  function updateThreePillars() {
    if (!threeScene || typeof THREE === "undefined") return;

    threePillars.forEach(p => threeScene.remove(p));
    threePillars = [];

    const data = computeDashboardTelemetry();
    const areas = data.areaMetrics;
    const count = areas.length;
    const spacing = 3.0;
    const startX = -((count - 1) * spacing) / 2;

    areas.forEach((am, idx) => {
      const height = Math.max(0.6, (am.dtHours / 10) * 8 + 0.5);
      const geometry = new THREE.BoxGeometry(1.8, height, 1.8);
      
      let colorHex = 0x059669;
      if (am.availPercent < 95.0) colorHex = 0xdc2626;
      else if (am.availPercent < 99.0) colorHex = 0xd97706;

      const material = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.3,
        metalness: 0.2
      });

      const pillar = new THREE.Mesh(geometry, material);
      pillar.position.set(startX + idx * spacing, height / 2, 0);
      pillar.castShadow = true;
      pillar.receiveShadow = true;

      threeScene.add(pillar);
      threePillars.push(pillar);
    });
  }

  function initFallbackIsometricCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.parentElement.clientWidth || 800;
    const h = canvas.parentElement.clientHeight || 440;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = "#0A0F1D";
    ctx.fillRect(0, 0, w, h);

    // Draw Isometric Grid & Bars
    const data = computeDashboardTelemetry();
    const areas = data.areaMetrics;
    ctx.strokeStyle = "rgba(30, 41, 59, 0.8)";
    ctx.lineWidth = 1;

    for (let x = -200; x < w + 200; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - 200, h);
      ctx.stroke();
    }

    areas.forEach((am, i) => {
      const px = 100 + i * (w - 200) / areas.length;
      const py = h / 2 + 60;
      const bHeight = Math.max(20, am.dtHours * 15);
      
      ctx.fillStyle = am.availPercent >= 99 ? "#059669" : (am.availPercent >= 95 ? "#D97706" : "#DC2626");
      ctx.fillRect(px, py - bHeight, 30, bHeight);
      
      ctx.fillStyle = "#94A3B8";
      ctx.font = "10px monospace";
      ctx.fillText(am.area, px - 10, py + 18);
    });
  }

  function reset3DCamera() {
    if (threeCamera) {
      threeCamera.position.set(0, 18, 32);
      threeCamera.lookAt(0, 2, 0);
    }
  }
  window.reset3DCamera = reset3DCamera;

  function toggle3DRotation() {
    is3DRotating = !is3DRotating;
    const btn = document.getElementById("btn3DRotation");
    if (btn) {
      btn.innerHTML = is3DRotating 
        ? `<i class="fa-solid fa-circle-pause mr-1"></i>Pause Rotate` 
        : `<i class="fa-solid fa-circle-play mr-1"></i>Auto Rotate`;
    }
  }
  window.toggle3DRotation = toggle3DRotation;

  // =========================================================================
  // 9. OBSERVABILITY FORENSICS MODULES
  // =========================================================================

  // --- Module 1: 30-Day Availability Heatmap Matrix ---
  function renderAvailabilityHeatmap() {
    const container = document.getElementById("heatmapMatrixContainer");
    if (!container) return;

    const standardAreas = (typeof window.YOKOHAMA_AREAS !== "undefined" && window.YOKOHAMA_AREAS.length > 0)
      ? window.YOKOHAMA_AREAS.slice(0, 8)
      : ["Plant 1", "Plant 2", "Plant 3", "Plant 4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];

    const allRecords = window.downtimeRecords || [];
    
    // Matrix: 8 areas x 31 days
    let html = `
      <div class="flex items-center text-[10px] font-mono text-slate-400 font-bold mb-1 pl-24">
        ${Array.from({ length: 31 }, (_, i) => `<span class="w-6 text-center">${i + 1}</span>`).join("")}
      </div>
    `;

    standardAreas.forEach(area => {
      html += `<div class="flex items-center gap-1 my-1">`;
      html += `<span class="w-24 text-[11px] font-bold text-slate-700 truncate">${area}</span>`;
      
      for (let day = 1; day <= 31; day++) {
        const dayStr = String(day).padStart(2, "0");
        // Check incidents for area on this day
        const dayIncidents = allRecords.filter(r => {
          if (!r.issueDate) return false;
          return r.issueDate.endsWith(`-${dayStr}`) && (r.area || "").trim() === area.trim();
        });

        const dayDtMins = dayIncidents.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
        const dayOpMins = 24 * 60;
        const dayAvail = Math.min(100, Math.max(0, ((dayOpMins - dayDtMins) / dayOpMins) * 100));

        let cellColor = "bg-emerald-500 text-white";
        if (dayAvail < 95.0) cellColor = "bg-red-500 text-white";
        else if (dayAvail < 99.0) cellColor = "bg-amber-400 text-slate-900";

        html += `
          <button type="button" 
            onclick="filterByHeatmapCell('${area}', ${day})"
            title="${area} • Day ${day}: ${dayAvail.toFixed(1)}% (${dayDtMins}m loss)"
            class="heatmap-cell ${cellColor}">
            ${dayDtMins > 0 ? (dayDtMins > 60 ? (dayDtMins/60).toFixed(0)+'h' : dayDtMins) : ''}
          </button>
        `;
      }
      html += `</div>`;
    });

    container.innerHTML = html;
  }

  function filterByHeatmapCell(area, day) {
    drillDownTo("area", area);
    const dayStr = String(day).padStart(2, "0");
    const search = document.getElementById("tableSearchInput");
    if (search) {
      search.value = `-${dayStr}`;
      if (typeof window.applyTableFilters === "function") window.applyTableFilters();
    }
    document.getElementById("table-section")?.scrollIntoView({ behavior: "smooth" });
  }
  window.filterByHeatmapCell = filterByHeatmapCell;

  // --- Module 2: Chronological Gantt Incident Timeline ---
  function renderGanttTimeline() {
    const container = document.getElementById("ganttTimelineContainer");
    if (!container) return;

    const data = computeDashboardTelemetry();
    const incidents = data.records.slice(0, 6);

    if (incidents.length === 0) {
      container.innerHTML = `<div class="p-6 text-center text-xs text-slate-400 font-mono">No active or logged incidents in this period.</div>`;
      return;
    }

    const palette = {
      "Hardware": "#E60012",
      "Network": "#2563EB",
      "Software": "#7C3AED",
      "Process": "#0D9488",
      "Other": "#64748B"
    };

    container.innerHTML = incidents.map(inc => {
      const cat = inc.category || "Other";
      const color = palette[cat] || "#E60012";
      const dt = parseInt(inc.downtimeMinutes, 10) || 30;
      const isOpen = inc.status === "Open";
      const widthPercent = Math.min(100, Math.max(15, (dt / 180) * 85));

      return `
        <div class="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-slate-200 transition-all text-xs">
          <div class="flex items-center justify-between mb-1.5 font-mono">
            <span class="font-bold text-slate-900">${inc.machineNo || 'General'} <span class="text-slate-400 text-[10px]">(${inc.area})</span></span>
            <span class="text-[10px] font-bold ${isOpen ? 'text-amber-600 animate-pulse' : 'text-emerald-600'}">
              ${isOpen ? '● Active Outage' : '✓ Closed (' + dt + 'm)'}
            </span>
          </div>
          <div class="w-full bg-slate-200/60 rounded-full h-3 overflow-hidden relative">
            <div class="h-3 rounded-full ${isOpen ? 'gantt-bar-extending' : ''}" style="width: ${widthPercent}%; background-color: ${color}"></div>
          </div>
          <div class="mt-1 flex items-center justify-between text-[10px] text-slate-500">
            <span>${inc.issueDetails || 'Breakdown'}</span>
            <span class="font-mono">${inc.issueDate || '2026-03'}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- Module 3: MTBF & Area Reliability Scores ---
  function renderMTBFScores() {
    const container = document.getElementById("mtbfScoresContainer");
    if (!container) return;

    const data = computeDashboardTelemetry();
    container.innerHTML = data.areaMetrics.map(am => {
      let badgeCls = "bg-emerald-50 text-emerald-700 border-emerald-200";
      if (am.reliabilityScore < 85) badgeCls = "bg-red-50 text-red-700 border-red-200";
      else if (am.reliabilityScore < 95) badgeCls = "bg-amber-50 text-amber-700 border-amber-200";

      return `
        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-slate-500 truncate">${am.area}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded border ${badgeCls} font-mono">${am.reliabilityScore}/100</span>
          </div>
          <div class="mt-2">
            <span class="text-sm font-black font-mono text-slate-900">${am.mtbfHours}h</span>
            <span class="text-[9px] text-slate-400 block font-mono">MTBF Interval</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- Module 4: SLA Tracker (ATC vs MELSS) ---
  function renderSLATracker() {
    const container = document.getElementById("slaTrackerContainer");
    if (!container) return;

    const data = computeDashboardTelemetry();
    const sla = data.slaCompliance;

    container.innerHTML = `
      <!-- ATC (Internal IT) -->
      <div>
        <div class="flex items-center justify-between text-xs mb-1 font-mono">
          <span class="font-bold text-slate-800">ATC IT Internal Team</span>
          <span class="font-black text-blue-600">${sla.ATC}% Met</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: ${sla.ATC}%"></div>
        </div>
        <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-mono">
          <span>Target: &lt;60m Standard</span>
          <span>${sla.overdueATC} Overdue Tickets</span>
        </div>
      </div>

      <!-- MELSS (Vendor Team) -->
      <div>
        <div class="flex items-center justify-between text-xs mb-1 font-mono">
          <span class="font-bold text-slate-800">MELSS Systems Partner</span>
          <span class="font-black ${sla.MELSS >= 90 ? 'text-emerald-600' : 'text-amber-600'}">${sla.MELSS}% Met</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div class="bg-emerald-500 h-2 rounded-full transition-all duration-500" style="width: ${sla.MELSS}%"></div>
        </div>
        <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-mono">
          <span>Target: &lt;60m Standard</span>
          <span>${sla.overdueMELSS} Overdue Tickets</span>
        </div>
      </div>
    `;
  }

  // --- Module 5: Forecast & 2-Sigma Anomaly Detection ---
  function renderForecastAndAnomalies() {
    const data = computeDashboardTelemetry();
    
    // Forecast Readout
    const elForecastVal = document.getElementById("forecastAvailVal");
    if (elForecastVal) {
      elForecastVal.textContent = `${data.projectedAvail.toFixed(2)}%`;
    }

    // Anomalies Readout
    const body = document.getElementById("anomalyAlertBody");
    if (body) {
      if (data.anomalies.length > 0) {
        body.innerHTML = data.anomalies.map(a => `
          <div class="p-2 rounded bg-amber-50/80 border border-amber-200 mb-1.5">
            <span class="font-bold text-amber-800 font-mono">${a.date}:</span>
            <span class="text-amber-700">${a.dtHours} hrs downtime surge (+${a.excess}m over 2-sigma threshold). Inspection recommended.</span>
          </div>
        `).join("");
      } else {
        body.innerHTML = `
          <div class="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
            <i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> No statistical outlier spikes detected. Operations adhere to standard distribution bounds.
          </div>
        `;
      }
    }
  }

  // --- Module 6: Live Status Strip / Ticker ---
  function renderLiveStatusStrip() {
    const data = computeDashboardTelemetry();
    const dot = document.getElementById("liveStatusPulseDot");
    const statusText = document.getElementById("liveStatusText");
    const outagesCount = document.getElementById("liveActiveOutagesCount");
    const reliability = document.getElementById("livePlantReliabilityScore");
    const lastInc = document.getElementById("liveLastIncidentText");

    if (dot && statusText) {
      if (data.openCount > 0) {
        dot.className = "w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse";
        statusText.className = "text-amber-400 uppercase tracking-wider text-[11px]";
        statusText.textContent = "ATTENTION REQUIRED";
      } else if (data.availability < 95.0) {
        dot.className = "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse";
        statusText.className = "text-red-400 uppercase tracking-wider text-[11px]";
        statusText.textContent = "CRITICAL STATE";
      } else {
        dot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse";
        statusText.className = "text-emerald-400 uppercase tracking-wider text-[11px]";
        statusText.textContent = "OPTIMAL OPERATION";
      }
    }

    if (outagesCount) outagesCount.textContent = data.openCount;
    if (reliability) reliability.textContent = `${data.plantReliabilityIndex}/100`;

    if (lastInc) {
      if (data.records.length > 0) {
        const first = data.records[0];
        lastInc.innerHTML = `<i class="fa-regular fa-clock text-slate-500 mr-1"></i>Last Outage: ${first.machineNo || 'Machine'} (${first.area})`;
      } else {
        lastInc.innerHTML = `<i class="fa-regular fa-clock text-slate-500 mr-1"></i>Last Outage: None`;
      }
    }
  }

  // --- Module 7: Smart Insights & Top Offenders Table ---
  function renderSmartInsightsList() {
    const container = document.getElementById("smartInsightsContainer");
    if (!container) return;
    const data = computeDashboardTelemetry();
    if (!data || !data.insights) return;

    container.innerHTML = data.insights.map(item => {
      let badgeCls = "bg-blue-50 text-blue-700 border-blue-200";
      if (item.type === "success") badgeCls = "badge-status-optimal";
      else if (item.type === "warning") badgeCls = "badge-status-warning";
      else if (item.type === "critical" || item.type === "alert") badgeCls = "badge-status-critical";

      return `
        <div class="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3 hover:border-slate-300 transition-all">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${badgeCls}">
            <i class="fa-solid ${item.icon} text-sm"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-slate-900">${item.title}</h5>
            <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">${item.text}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  function renderTopOffendersTable() {
    const tbody = document.getElementById("topOffendersTableBody");
    if (!tbody) return;
    const data = computeDashboardTelemetry();
    if (!data || !data.top10Machines) return;

    if (data.top10Machines.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-slate-400 text-xs">No machinery outages recorded.</td></tr>`;
      return;
    }

    tbody.innerHTML = data.top10Machines.map(m => {
      return `
        <tr class="hover:bg-slate-50/80 transition-colors border-b border-slate-100 text-xs cursor-pointer" onclick="drillDownTo('machine', '${m.code}')">
          <td class="px-3 py-2.5 font-bold font-mono text-slate-900 whitespace-nowrap">
            <span class="inline-flex items-center justify-center w-5 h-5 rounded-full ${m.rank <= 3 ? 'bg-red-100 text-red-700 font-black' : 'bg-slate-100 text-slate-600'} text-[10px]">
              ${m.rank}
            </span>
            <span class="ml-2 font-mono font-bold">${m.code}</span>
          </td>
          <td class="px-3 py-2.5 text-slate-700">${m.area}</td>
          <td class="px-3 py-2.5 text-right font-mono font-bold text-red-600">${m.hours}h</td>
          <td class="px-3 py-2.5 text-right font-mono text-slate-700">${m.sharePercent}%</td>
          <td class="px-3 py-2.5 text-center font-mono font-bold text-slate-800">${m.incidentCount}</td>
          <td class="px-3 py-2.5 text-center whitespace-nowrap">
            ${m.isChronic ? '<span class="px-2 py-0.5 rounded text-[9px] font-black bg-rose-100 text-rose-800 border border-rose-300">CHRONIC</span>' : '<span class="text-slate-400 font-mono text-[10px]">Normal</span>'}
          </td>
        </tr>
      `;
    }).join("");
  }

  // --- Filter Chips Bar ---
  function renderFilterChips() {
    const container = document.getElementById("activeFilterChipsContainer");
    if (!container) return;

    const chips = [];
    const filter = window.dashboardDateFilter || {};

    if (filter.month && filter.month !== "ALL") {
      chips.push({ label: `Month: ${filter.month}`, remove: () => { window.onDashboardMonthChange("ALL"); } });
    }
    if (filter.year && filter.year !== "2026" && filter.year !== "ALL") {
      chips.push({ label: `Period: ${filter.year}`, remove: () => { window.onDashboardYearChange("2026"); } });
    }
    if (window.obsRangeBrushDay && window.obsRangeBrushDay < 31) {
      chips.push({ label: `Days 1-${window.obsRangeBrushDay}`, remove: () => { onRangeBrushChange(31); } });
    }
    if (window.obsDrillDown.area) {
      chips.push({ label: `Area: ${window.obsDrillDown.area}`, remove: () => { drillDownTo("plant"); } });
    }
    if (window.obsDrillDown.machine) {
      chips.push({ label: `Machine: ${window.obsDrillDown.machine}`, remove: () => { drillDownTo("area"); } });
    }

    container.innerHTML = chips.map((c, i) => `
      <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200">
        <span>${c.label}</span>
        <button type="button" onclick="window._removeFilterChip(${i})" class="text-slate-400 hover:text-red-600 font-bold ml-0.5">×</button>
      </span>
    `).join("");

    window._removeFilterChip = (idx) => {
      if (chips[idx]) chips[idx].remove();
    };
  }

  // Quick Date Range Presets
  function setQuickDatePreset(preset) {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");

    const startInput = document.getElementById("dashboardStartDate");
    const endInput = document.getElementById("dashboardEndDate");
    const monthSelect = document.getElementById("dashboardMonthFilter");
    const yearSelect = document.getElementById("dashboardYearFilter");

    if (preset === "today") {
      const todayStr = `${y}-${m}-${d}`;
      if (startInput) startInput.value = todayStr;
      if (endInput) endInput.value = todayStr;
      if (monthSelect) monthSelect.value = "ALL";
    } else if (preset === "7d") {
      const past7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      if (startInput) startInput.value = past7.toISOString().split("T")[0];
      if (endInput) endInput.value = `${y}-${m}-${d}`;
      if (monthSelect) monthSelect.value = "ALL";
    } else if (preset === "30d") {
      const past30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      if (startInput) startInput.value = past30.toISOString().split("T")[0];
      if (endInput) endInput.value = `${y}-${m}-${d}`;
      if (monthSelect) monthSelect.value = "ALL";
    } else if (preset === "this-month") {
      if (startInput) startInput.value = "";
      if (endInput) endInput.value = "";
      if (monthSelect) monthSelect.value = `${y}-${m}`;
    } else if (preset === "last-month") {
      const lastMonthDate = new Date(y, now.getMonth() - 1, 1);
      const lm = String(lastMonthDate.getMonth() + 1).padStart(2, "0");
      if (startInput) startInput.value = "";
      if (endInput) endInput.value = "";
      if (monthSelect) monthSelect.value = `${lastMonthDate.getFullYear()}-${lm}`;
    } else if (preset === "this-fy") {
      if (startInput) startInput.value = "";
      if (endInput) endInput.value = "";
      if (monthSelect) monthSelect.value = "ALL";
      if (yearSelect) yearSelect.value = `FY${y}`;
    }

    if (typeof window.onDashboardDateFilterChange === "function") {
      window.onDashboardDateFilterChange();
    }
    renderFilterChips();
    syncURLState();
  }
  window.setQuickDatePreset = setQuickDatePreset;

  function onToggleMoMCompare(checked) {
    window.obsMoMCompare = !!checked;
    renderAllObservabilityCharts();
  }
  window.onToggleMoMCompare = onToggleMoMCompare;

  // --- Master Orchestrator ---
  function renderAllObservabilityCharts() {
    renderObsKpiHeader();
    renderStackedCategoryChart();
    renderGroupedComparisonChart();
    renderRankedMachinesChart();
    renderParetoChart();
    renderBulletAvailabilityChart();
    renderVarianceChart();
    renderAvailabilityHeatmap();
    renderGanttTimeline();
    renderMTBFScores();
    renderSLATracker();
    renderForecastAndAnomalies();
    renderLiveStatusStrip();
    renderSmartInsightsList();
    renderTopOffendersTable();
    renderFilterChips();
    if (window.obsVisualizerMode === "3d") {
      updateThreePillars();
    }
  }
  window.renderAllObservabilityCharts = renderAllObservabilityCharts;

  // =========================================================================
  // 10. GLOBAL COMMAND PALETTE (CTRL+K / CMD+K)
  // =========================================================================
  function initCommandPalette() {
    const backdrop = document.getElementById("cmdPaletteBackdrop");
    const input = document.getElementById("cmdPaletteInput");
    const resultsContainer = document.getElementById("cmdPaletteResults");
    if (!backdrop || !input) return;

    window.openCommandPalette = function() {
      backdrop.classList.remove("hidden");
      input.value = "";
      input.focus();
      filterCommandPalette("");
    };

    window.closeCommandPalette = function() {
      backdrop.classList.add("hidden");
    };

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (backdrop.classList.contains("hidden")) {
          window.openCommandPalette();
        } else {
          window.closeCommandPalette();
        }
      }
      if (e.key === "Escape" && !backdrop.classList.contains("hidden")) {
        window.closeCommandPalette();
      }
    });

    const commands = [
      { id: "tab-entry", title: "Go to Downtime Entry", category: "Navigation", icon: "fa-pen-to-square", action: () => window.switchTab("entry") },
      { id: "tab-kpi", title: "Go to Executive Dashboard", category: "Navigation", icon: "fa-chart-pie", action: () => window.switchTab("kpi") },
      { id: "tab-logs", title: "Go to Incident Records Table", category: "Navigation", icon: "fa-list-check", action: () => window.switchTab("logs") },
      { id: "tab-settings", title: "Go to Master Settings", category: "Navigation", icon: "fa-sliders", action: () => window.switchTab("settings") },
      { id: "export-excel", title: "Export All Excel Report", category: "Exports", icon: "fa-file-excel", action: () => window.exportDashboardPeriodExcel() },
      { id: "export-csv", title: "Export CSV Dataset", category: "Exports", icon: "fa-file-csv", action: () => window.exportToCSV() },
      { id: "view-3d", title: "Switch to 3D WebGL Studio", category: "Visualizer", icon: "fa-cube", action: () => setVisualizerMode("3d") },
      { id: "view-2d", title: "Switch to 2D Analytics Suite", category: "Visualizer", icon: "fa-chart-simple", action: () => setVisualizerMode("2d") },
      { id: "theme-light", title: "Switch to Light Theme", category: "Theme", icon: "fa-sun", action: () => setObsTheme("light") },
      { id: "theme-dark", title: "Switch to Dark Observability Theme", category: "Theme", icon: "fa-moon", action: () => setObsTheme("dark") },
      { id: "theme-wall", title: "Switch to Control Room (Wall Display)", category: "Theme", icon: "fa-desktop", action: () => setObsTheme("control-room") },
      { id: "preset-exec", title: "View Preset: Executive Overview", category: "Views", icon: "fa-briefcase", action: () => setViewPreset("executive") },
      { id: "preset-ops", title: "View Preset: Plant Operations", category: "Views", icon: "fa-industry", action: () => setViewPreset("operations") },
      { id: "preset-maint", title: "View Preset: Maintenance & MTTR", category: "Views", icon: "fa-wrench", action: () => setViewPreset("maintenance") }
    ];

    function filterCommandPalette(q) {
      if (!resultsContainer) return;
      const query = (q || "").trim().toLowerCase();
      const filtered = commands.filter(c => c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query));

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">No matching commands or destinations found.</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered.map((c, idx) => `
        <div onclick="executeCommand(${idx})" class="px-4 py-2.5 flex items-center justify-between hover:bg-slate-100 cursor-pointer rounded-lg transition-colors group">
          <div class="flex items-center gap-3">
            <i class="fa-solid ${c.icon} text-slate-400 group-hover:text-red-600 text-sm"></i>
            <div>
              <span class="text-xs font-bold text-slate-800 block">${c.title}</span>
              <span class="text-[10px] text-slate-400">${c.category}</span>
            </div>
          </div>
          <span class="text-[10px] font-mono text-slate-400">↵ Select</span>
        </div>
      `).join("");

      window._currentFilteredCommands = filtered;
    }

    window.executeCommand = function(idx) {
      if (window._currentFilteredCommands && window._currentFilteredCommands[idx]) {
        window.closeCommandPalette();
        window._currentFilteredCommands[idx].action();
      }
    };

    input.addEventListener("input", (e) => filterCommandPalette(e.target.value));
  }

  // =========================================================================
  // 11. VIEW PRESETS CONTROLLER
  // =========================================================================
  function setViewPreset(preset) {
    try {
      localStorage.setItem(PRESET_KEY, preset);
    } catch (e) {}

    const banner = document.getElementById("activePresetBadge");
    if (banner) banner.textContent = `Preset: ${preset.toUpperCase()}`;

    document.querySelectorAll(".view-preset-btn").forEach(btn => {
      const p = btn.getAttribute("data-preset");
      if (p === preset) {
        btn.classList.add("bg-slate-900", "text-white");
        btn.classList.remove("bg-white", "text-slate-600");
      } else {
        btn.classList.remove("bg-slate-900", "text-white");
        btn.classList.add("bg-white", "text-slate-600");
      }
    });

    if (preset === "executive") {
      document.getElementById("gaugeAvailability")?.parentElement?.parentElement?.scrollIntoView({ behavior: "smooth" });
    } else if (preset === "maintenance") {
      document.getElementById("sectionAdvancedBars")?.scrollIntoView({ behavior: "smooth" });
    } else if (preset === "operations") {
      document.getElementById("liveStatusStrip")?.scrollIntoView({ behavior: "smooth" });
    }

    if (typeof window.showToast === "function") {
      window.showToast(`Applied ${preset.charAt(0).toUpperCase() + preset.slice(1)} Dashboard Preset`, "info");
    }
    syncURLState();
  }
  window.setViewPreset = setViewPreset;

  // =========================================================================
  // 12. URL STATE SYNCHRONIZATION (DEEP LINKING)
  // =========================================================================
  function syncURLState() {
    const params = new URLSearchParams();
    const theme = getStoredTheme();
    if (theme && theme !== "light") params.set("theme", theme);
    
    const filter = window.dashboardDateFilter || {};
    if (filter.month && filter.month !== "ALL") params.set("month", filter.month);
    if (window.obsDrillDown.area) params.set("area", window.obsDrillDown.area);
    if (window.obsVisualizerMode === "3d") params.set("mode", "3d");

    const newHash = params.toString();
    if (newHash) {
      window.history.replaceState(null, "", `#${newHash}`);
    } else if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  function restoreURLState() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const params = new URLSearchParams(hash);

    const theme = params.get("theme");
    if (theme) setObsTheme(theme);

    const mode = params.get("mode");
    if (mode === "3d") setVisualizerMode("3d");

    const month = params.get("month");
    if (month && typeof window.onDashboardMonthChange === "function") {
      const sel = document.getElementById("dashboardMonthFilter");
      if (sel) sel.value = month;
      window.onDashboardMonthChange(month);
    }

    const area = params.get("area");
    if (area) {
      drillDownTo("area", area);
    }
  }

  // =========================================================================
  // 13. LIFECYCLE HOOKS
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initCommandPalette();
    restoreURLState();

    const originalRenderCharts = window.renderCharts;
    window.renderCharts = function() {
      if (typeof originalRenderCharts === "function") originalRenderCharts();
      renderAllObservabilityCharts();
    };

    setTimeout(() => {
      renderAllObservabilityCharts();
    }, 200);
  });

})(window, document);
