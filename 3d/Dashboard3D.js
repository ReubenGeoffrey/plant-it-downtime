/**
 * YOKOHAMA PLANT IT DOWNTIME MANAGEMENT SYSTEM
 * 3D Dashboard Main Orchestrator & Controller
 * 
 * Coordinates 3D Scene, Bar Charts, Plant Floor Map, Interactivity,
 * Toolbar, Responsive WebGL Fallback, and Accessible Table Alternative.
 * 
 * Build by Hadssha Bell S & Reuben Geoffrey
 */

(function(window) {
  "use strict";

  // Check WebGL availability
  function detectWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch (e) {
      return false;
    }
  }

  class Yokohama3DDashboard {
    constructor() {
      this.isInitialized = false;
      this.currentChartType = "area"; // 'area', 'process', 'monthly', 'category', 'trajectory', 'plantMap'
      this.isTableView = false;
      this.isDigitalTwinPlaying = false;
      this.sceneManager = null;
      this.barCharts = null;
      this.plantMap = null;
      this.interaction = null;
      this.activeQuality = "auto";
    }

    // Initialize 3D Dashboard View
    async init() {
      const container = document.getElementById("view3dContainer");
      if (!container) return;

      // 1. WebGL Capability Check
      if (!detectWebGL()) {
        console.warn("WebGL is not supported or disabled in this browser.");
        this.renderWebGLFallback(container);
        return;
      }

      // If already initialized, just resume rendering and refresh data
      if (this.isInitialized && this.sceneManager) {
        this.sceneManager.resume();
        this.updateFilterChips();
        this.refreshActiveChart();
        return;
      }

      // 2. Show Loading Skeleton / Spinner
      this.showLoading(true);

      try {
        // 3. Lazily load Three.js if not already present
        if (typeof window.THREE === "undefined") {
          await window.Yokohama3DScene.ensureThreeLoaded();
        }

        const viewport = document.getElementById("viewport3dMain");
        const canvas = document.getElementById("canvas3dMain");
        if (!canvas) {
          console.error("Canvas element #canvas3dMain not found");
          return;
        }

        // 4. Initialize Scene Manager
        this.sceneManager = new window.Yokohama3DScene(canvas, {
          quality: this.activeQuality,
          onFpsUpdate: (fps) => this.updateFpsBadge(fps)
        });
        this.sceneManager.init();

        // 5. Initialize Visual Submodules
        this.barCharts = new window.Yokohama3DBarCharts(this.sceneManager);
        this.plantMap = new window.YokohamaPlantMap3D(this.sceneManager);
        this.interaction = new window.Yokohama3DInteraction(this.sceneManager, viewport);

        // 6. Bind Toolbar Events
        this.bindToolbarEvents();

        // 7. Render initial chart
        this.refreshActiveChart();
        this.updateFilterChips();

        this.isInitialized = true;
        this.showLoading(false);

      } catch (err) {
        console.error("Failed to initialize 3D Dashboard:", err);
        this.showLoading(false);
        this.renderWebGLFallback(container, err.message);
      }
    }

    // Called when user leaves 3D tab to conserve GPU/CPU resources
    onTabLeave() {
      if (this.sceneManager) {
        this.sceneManager.pause();
      }
      if (this.isDigitalTwinPlaying) {
        this.toggleDigitalTwin(false);
      }
    }

    // Called when portal filters change
    onFilterChange() {
      this.updateFilterChips();
      if (this.isTableView) {
        this.renderTableAlternative();
      } else if (this.isInitialized) {
        this.refreshActiveChart();
      }
    }

    // Switch between 3D visual representations
    switchChart(chartType) {
      if (!chartType) return;
      this.currentChartType = chartType;

      // Update button highlights
      document.querySelectorAll(".chart-switch-btn").forEach(btn => {
        if (btn.dataset.chart === chartType) {
          btn.classList.add("bg-[#E60012]", "text-white", "border-[#E60012]");
          btn.classList.remove("bg-slate-800", "text-slate-300", "border-slate-700");
        } else {
          btn.classList.remove("bg-[#E60012]", "text-white", "border-[#E60012]");
          btn.classList.add("bg-slate-800", "text-slate-300", "border-slate-700");
        }
      });

      // Stop digital twin tour if active
      if (this.isDigitalTwinPlaying && chartType !== "plantMap") {
        this.toggleDigitalTwin(false);
      }

      if (this.isTableView) {
        this.renderTableAlternative();
      } else {
        this.refreshActiveChart();
      }
    }

    // Renders the currently selected chart
    refreshActiveChart() {
      if (!this.sceneManager || !this.barCharts || !this.plantMap) return;

      const viewport = document.getElementById("viewport3dMain");
      if (viewport) viewport.classList.remove("hidden");
      const tableWrapper = document.getElementById("table3dAlternative");
      if (tableWrapper) tableWrapper.classList.add("hidden");

      // Reset camera to default distance
      this.sceneManager.resetCamera();

      switch (this.currentChartType) {
        case "area":
          this.barCharts.renderAreaDowntimeChart();
          break;
        case "process":
          this.barCharts.renderProcessGroupedChart();
          break;
        case "monthly":
          this.barCharts.renderMonthlyTargetChart();
          break;
        case "category":
          this.barCharts.renderCategoryBreakdownChart();
          break;
        case "trajectory":
          this.barCharts.renderTrajectoryChart();
          break;
        case "plantMap":
          this.plantMap.render();
          break;
        default:
          this.barCharts.renderAreaDowntimeChart();
          break;
      }

      this.updateViewHeading();
    }

    // Updates top heading & badge for current chart
    updateViewHeading() {
      const headingEl = document.getElementById("chart3dTitle");
      const descEl = document.getElementById("chart3dDescription");
      if (!headingEl || !descEl) return;

      const meta = {
        area: {
          title: "Area-wise Downtime & Operational Availability",
          desc: "Interactive 3D beveled bars with continuous threshold coloring (≥99% Good, 95-<99% Warning, <95% Critical)."
        },
        process: {
          title: "Process Breakdown Grouped 3D Bars",
          desc: "Side-by-side comparison of total downtime hours and operational availability per process line."
        },
        monthly: {
          title: "Monthly Availability vs 99.0% Target Sheet",
          desc: "Chronological monthly performance against Yokohama's translucent glowing 99.0% target plane."
        },
        category: {
          title: "Category Breakdown 3D Donut / Cylinder",
          desc: "Volumetric breakdown of downtime root-cause categories with hover slice explosion."
        },
        trajectory: {
          title: "Equipment Downtime Trajectory Ribbon",
          desc: "Continuous 3D trajectory curve charting downtime duration across top critical plant assets."
        },
        plantMap: {
          title: "Yokohama Isometric Plant Floor Digital Twin",
          desc: "Real-time 3D plant floor blocks, procedural low-poly machinery, pulsing alert beacons, and incident tower."
        }
      };

      const info = meta[this.currentChartType] || meta.area;
      headingEl.textContent = info.title;
      descEl.textContent = info.desc;
    }

    // Accessible Table Alternative (WCAG 2.2 AA compliant)
    toggleTableView() {
      this.isTableView = !this.isTableView;
      const viewport = document.getElementById("viewport3dMain");
      const tableWrapper = document.getElementById("table3dAlternative");
      const toggleBtn = document.getElementById("btnToggleTableView");

      if (this.isTableView) {
        if (viewport) viewport.classList.add("hidden");
        if (tableWrapper) tableWrapper.classList.remove("hidden");
        if (toggleBtn) {
          toggleBtn.innerHTML = '<i class="fa-solid fa-cube text-[#E60012] mr-1.5"></i> <span>View 3D Model</span>';
        }
        this.renderTableAlternative();
      } else {
        if (viewport) viewport.classList.remove("hidden");
        if (tableWrapper) tableWrapper.classList.add("hidden");
        if (toggleBtn) {
          toggleBtn.innerHTML = '<i class="fa-solid fa-table mr-1.5"></i> <span>View as Table</span>';
        }
        this.refreshActiveChart();
      }
    }

    // Render Semantic HTML Table from current Data Adapter
    renderTableAlternative() {
      const container = document.getElementById("table3dAlternative");
      if (!container) return;

      const da = window.Yokohama3DDataAdapter;
      if (!da) return;

      let html = "";
      const escape = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      if (this.currentChartType === "area") {
        const data = da.getAreaChartData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
              <span>Area-wise Downtime & Availability Data</span>
              <span class="text-xs text-slate-400">Total Areas: ${data.length}</span>
            </h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Area Downtime Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Area Name</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Mins)</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Hours)</th>
                  <th class="py-2.5 px-3 text-right">Availability</th>
                  <th class="py-2.5 px-3 text-center">Status</th>
                  <th class="py-2.5 px-3 text-right">Incidents</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map(d => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-semibold">${escape(d.label)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.dtMins.toLocaleString()} min</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.dtHours.toFixed(1)} h</td>
                    <td class="py-2.5 px-3 text-right font-mono font-bold" style="color: ${d.statusHex}">${d.availPercent}%</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold" style="background: ${d.statusHex}22; color: ${d.statusHex}">
                        ${d.statusBand.toUpperCase()}
                      </span>
                    </td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.incidentCount}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.currentChartType === "process") {
        const data = da.getProcessChartData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Process Breakdown Data</h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Process Breakdown Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Process Name</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Hours)</th>
                  <th class="py-2.5 px-3 text-right">Availability</th>
                  <th class="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map(d => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-semibold">${escape(d.label)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.dtHours.toFixed(1)} h</td>
                    <td class="py-2.5 px-3 text-right font-mono font-bold" style="color: ${d.statusHex}">${d.availPercent}%</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold" style="background: ${d.statusHex}22; color: ${d.statusHex}">
                        ${d.statusBand.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.currentChartType === "monthly") {
        const data = da.getMonthlyChartData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Monthly Availability vs Target</h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Monthly Availability Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Month</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Hours)</th>
                  <th class="py-2.5 px-3 text-right">Actual Availability</th>
                  <th class="py-2.5 px-3 text-right">Target</th>
                  <th class="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map(d => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-semibold">${escape(d.label)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.dtHours.toFixed(1)} h</td>
                    <td class="py-2.5 px-3 text-right font-mono font-bold" style="color: ${d.statusHex}">${d.availPercent}%</td>
                    <td class="py-2.5 px-3 text-right font-mono text-emerald-400">≥99.0%</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold" style="background: ${d.statusHex}22; color: ${d.statusHex}">
                        ${d.statusBand.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.currentChartType === "category") {
        const data = da.getCategoryChartData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Downtime Root Cause Categories</h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Category Breakdown Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Category</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Hours)</th>
                  <th class="py-2.5 px-3 text-right">Share %</th>
                  <th class="py-2.5 px-3 text-right">Incidents</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map(d => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-semibold flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full" style="background: ${d.colorHex}"></span>
                      <span>${escape(d.category)}</span>
                    </td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.hours.toFixed(1)} h</td>
                    <td class="py-2.5 px-3 text-right font-mono font-bold">${d.sharePercent}%</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.count}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.currentChartType === "trajectory") {
        const data = da.getTrajectoryChartData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Top Critical Assets Downtime Trajectory</h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Trajectory Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Rank</th>
                  <th class="py-2.5 px-3">Machine / Asset</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Hours)</th>
                  <th class="py-2.5 px-3 text-right">Incidents</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map((d, idx) => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-mono font-bold text-slate-400">#${idx + 1}</td>
                    <td class="py-2.5 px-3 font-semibold text-sky-400">${escape(d.machine)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.hours.toFixed(1)} h</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.incidents}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      } else if (this.currentChartType === "plantMap") {
        const data = da.getPlantMapData();
        html = `
          <div class="overflow-x-auto rounded-lg border border-slate-700 bg-slate-900 p-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">Plant Floor Digital Twin Sectors</h4>
            <table class="w-full text-left text-xs border-collapse" role="table" aria-label="Plant Floor Map Table">
              <thead>
                <tr class="border-b border-slate-700 text-slate-400">
                  <th class="py-2.5 px-3">Sector / Area</th>
                  <th class="py-2.5 px-3 text-right">Downtime (Mins)</th>
                  <th class="py-2.5 px-3 text-right">Availability</th>
                  <th class="py-2.5 px-3 text-center">Status</th>
                  <th class="py-2.5 px-3 text-right">Open Outages</th>
                  <th class="py-2.5 px-3">Assets Registered</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-200">
                ${data.map(d => `
                  <tr class="hover:bg-slate-800/50">
                    <td class="py-2.5 px-3 font-semibold">${escape(d.areaName)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${d.downtimeMins.toLocaleString()} min</td>
                    <td class="py-2.5 px-3 text-right font-mono font-bold" style="color: ${d.statusHex}">${d.availPercent}%</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold" style="background: ${d.statusHex}22; color: ${d.statusHex}">
                        ${d.statusBand.toUpperCase()}
                      </span>
                    </td>
                    <td class="py-2.5 px-3 text-right font-mono ${d.openOutages > 0 ? 'text-red-400 font-bold' : 'text-slate-400'}">
                      ${d.openOutages > 0 ? `🚨 ${d.openOutages}` : '0'}
                    </td>
                    <td class="py-2.5 px-3 text-slate-400 text-[11px]">${(d.machines || []).map(m => escape(m.name)).join(", ") || 'N/A'}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }

      container.innerHTML = html;
    }

    // Toggle Digital Twin Fly-Through Mode
    toggleDigitalTwin(forceState = null) {
      if (!this.sceneManager || !this.plantMap) return;

      const btn = document.getElementById("btnToggleDigitalTwin");
      const newState = forceState !== null ? forceState : !this.isDigitalTwinPlaying;
      this.isDigitalTwinPlaying = newState;

      if (this.isDigitalTwinPlaying) {
        // Automatically switch to Plant Map view if not already there
        if (this.currentChartType !== "plantMap") {
          this.switchChart("plantMap");
        }
        const sectors = [
          { x: -14, y: 7, z: -7, name: "Plant-1" },
          { x: -5,  y: 7, z: -7, name: "Plant-2" },
          { x: 5,   y: 7, z: -7, name: "Plant-3" },
          { x: 14,  y: 7, z: -7, name: "Plant-4" },
          { x: -14, y: 7, z: 7,  name: "4Roll shed" },
          { x: -5,  y: 7, z: 7,  name: "Mixing Shed" },
          { x: 5,   y: 7, z: 7,  name: "FID" },
          { x: 14,  y: 7, z: 7,  name: "IT infra" }
        ];
        this.sceneManager.startFlyThrough(sectors);
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-pause text-amber-400 mr-1.5"></i> <span>Pause Tour</span>';
          btn.classList.add("bg-amber-950/60", "border-amber-600");
        }
        if (typeof window.showToast === "function") {
          window.showToast("Digital Twin Tour active: Flying through plant areas", "info");
        }
      } else {
        this.sceneManager.pauseFlyThrough();
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-play text-emerald-400 mr-1.5"></i> <span>Digital Twin Tour</span>';
          btn.classList.remove("bg-amber-950/60", "border-amber-600");
        }
      }
    }

    // Quality Preset Switcher (Auto, High, Low)
    setQuality(mode) {
      this.activeQuality = mode;
      if (this.sceneManager) {
        this.sceneManager.setQuality(mode);
      }
      const select = document.getElementById("select3dQuality");
      if (select && select.value !== mode) {
        select.value = mode;
      }
      if (typeof window.showToast === "function") {
        window.showToast(`3D Graphic Quality set to ${mode.toUpperCase()}`, "info");
      }
    }

    // Updates FPS counter badge in top toolbar
    updateFpsBadge(fps) {
      const badge = document.getElementById("badge3dFps");
      if (!badge) return;
      badge.textContent = `${fps} FPS`;
      if (fps >= 50) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800";
      } else if (fps >= 30) {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-400 border border-amber-800";
      } else {
        badge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950/80 text-rose-400 border border-rose-800";
      }
    }

    // Update Filter Chips display mirroring the 2D portal filter state
    updateFilterChips() {
      const container = document.getElementById("filterChips3dContainer");
      if (!container) return;

      const f = window.dashboardDateFilter || {};
      const chips = [];

      // Year Chip
      if (f.year && f.year !== "ALL") {
        chips.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
          <i class="fa-solid fa-calendar text-slate-400 text-[10px]"></i> Year: ${f.year}
        </span>`);
      }

      // Month Chip
      if (f.month && f.month !== "ALL") {
        chips.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
          <i class="fa-solid fa-calendar-days text-slate-400 text-[10px]"></i> Month: ${f.month}
        </span>`);
      }

      // Date Range Chip
      if (f.startDate && f.endDate) {
        chips.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
          <i class="fa-regular fa-clock text-slate-400 text-[10px]"></i> ${f.startDate} → ${f.endDate}
        </span>`);
      }

      // Area Filter
      const areaSelect = document.getElementById("dashboardAreaFilter");
      if (areaSelect && areaSelect.value && areaSelect.value !== "ALL") {
        chips.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-950/50 text-red-300 border border-red-800">
          <i class="fa-solid fa-location-dot text-red-400 text-[10px]"></i> Area: ${areaSelect.value}
        </span>`);
      }

      if (chips.length === 0) {
        chips.push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800/80 text-slate-400 border border-slate-700/60">
          <i class="fa-solid fa-database text-slate-500 text-[10px]"></i> All Historical Records
        </span>`);
      }

      container.innerHTML = `
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Filter:</span>
          ${chips.join("")}
          <button type="button" onclick="switchTab('kpi')" class="text-[11px] text-[#E60012] hover:text-red-400 underline ml-2 transition">
            Adjust Filters in 2D Dashboard &rarr;
          </button>
        </div>
      `;
    }

    // Bind DOM events for Toolbar controls
    bindToolbarEvents() {
      // 1. Chart Switcher Buttons
      document.querySelectorAll(".chart-switch-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          this.switchChart(btn.dataset.chart);
        });
      });

      // 2. Reset Camera Button
      const btnReset = document.getElementById("btn3dResetCamera");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          if (this.sceneManager) {
            this.sceneManager.resetCamera();
            if (typeof window.showToast === "function") {
              window.showToast("Camera view reset to default", "info");
            }
          }
        });
      }

      // 3. Digital Twin Button
      const btnTwin = document.getElementById("btnToggleDigitalTwin");
      if (btnTwin) {
        btnTwin.addEventListener("click", () => this.toggleDigitalTwin());
      }

      // 4. Quality Selector
      const selQuality = document.getElementById("select3dQuality");
      if (selQuality) {
        selQuality.addEventListener("change", (e) => {
          this.setQuality(e.target.value);
        });
      }

      // 5. Screenshot PNG Export
      const btnScreen = document.getElementById("btn3dScreenshot");
      if (btnScreen) {
        btnScreen.addEventListener("click", () => {
          if (this.interaction) {
            this.interaction.takeScreenshot(`yokohama-3d-dashboard-${this.currentChartType}.png`);
          }
        });
      }

      // 6. Fullscreen Viewport
      const btnFull = document.getElementById("btn3dFullscreen");
      if (btnFull) {
        btnFull.addEventListener("click", () => {
          if (this.interaction) {
            this.interaction.toggleFullscreen();
          }
        });
      }

      // 7. Toggle Table Alternative
      const btnTable = document.getElementById("btnToggleTableView");
      if (btnTable) {
        btnTable.addEventListener("click", () => this.toggleTableView());
      }
    }

    // Loading overlay
    showLoading(show) {
      const loader = document.getElementById("loader3dSpinner");
      if (loader) {
        if (show) loader.classList.remove("hidden");
        else loader.classList.add("hidden");
      }
    }

    // Graceful WebGL Failure Fallback (switches to 2D dashboard & alerts user)
    renderWebGLFallback(container, reason = "") {
      const fallbackHTML = `
        <div class="rounded-xl border border-amber-600/50 bg-amber-950/20 p-6 text-center max-w-xl mx-auto my-12">
          <div class="w-12 h-12 rounded-full bg-amber-900/60 text-amber-400 flex items-center justify-center mx-auto mb-4 text-xl">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3 class="text-base font-bold text-amber-200 mb-2">WebGL Hardware Acceleration Unavailable</h3>
          <p class="text-xs text-amber-300/80 mb-5 leading-relaxed">
            Your browser or device does not currently have WebGL support enabled. 
            The system has automatically fallen back to the comprehensive 2D KPI Dashboard and Accessible Table view.
            ${reason ? `<br><span class="text-[10px] text-slate-400 font-mono mt-2 block">Technical error: ${reason}</span>` : ""}
          </p>
          <div class="flex items-center justify-center gap-3">
            <button type="button" onclick="switchTab('kpi')" class="px-4 py-2 bg-[#E60012] hover:bg-red-700 text-white rounded text-xs font-semibold transition">
              <i class="fa-solid fa-chart-pie mr-1.5"></i> Return to 2D Dashboard
            </button>
            <button type="button" onclick="window.Yokohama3DDashboard.toggleTableView()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded text-xs font-semibold transition">
              <i class="fa-solid fa-table mr-1.5"></i> Open Accessible Data Table
            </button>
          </div>
        </div>
      `;
      container.innerHTML = fallbackHTML;
      if (typeof window.showToast === "function") {
        window.showToast("WebGL unavailable: Switching to 2D Analytics", "warning");
      }
    }
  }

  // Expose singleton instance to window
  window.Yokohama3DDashboard = new Yokohama3DDashboard();

  // Global helper for app.js integration
  window.init3DDashboardView = function() {
    window.Yokohama3DDashboard.init();
  };

})(window);
