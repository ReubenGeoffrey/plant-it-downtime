/**
 * 3d/dataAdapter.js
 * Data Transformation & Normalization Layer for 3D Dashboard Visualizations.
 * Connects the portal's single source of truth to 3D geometry payloads.
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  window.Yokohama3DDataAdapter = {
    // Normalizes area names to prevent hyphen/space mismatch
    normalizeArea(name) {
      return (name || "").replace(/[-\s_]/g, "").toLowerCase();
    },

    // Retrieves the current filtered records array from portal core
    getRecords() {
      if (typeof window.getFilteredDashboardRecords === "function") {
        return window.getFilteredDashboardRecords();
      }
      return window.downtimeRecords || [];
    },

    // Standard Yokohama plant areas list
    getStandardAreas() {
      if (typeof window.YOKOHAMA_AREAS !== "undefined" && Array.isArray(window.YOKOHAMA_AREAS) && window.YOKOHAMA_AREAS.length > 0) {
        return window.YOKOHAMA_AREAS.slice(0, 8);
      }
      return ["Plant-1", "Plant-2", "Plant-3", "Plant-4", "4Roll shed", "Mixing Shed", "FID", "IT infra"];
    },

    // 1. AREA-WISE DOWNTIME & AVAILABILITY DATA
    getAreaChartData() {
      const records = this.getRecords();
      const areas = this.getStandardAreas();
      const periodDays = (typeof window.getDashboardPeriodDays === "function") ? window.getDashboardPeriodDays() : 30;
      const opMinsPerArea = Math.max(1, periodDays) * 24 * 60;

      const areaStats = {};
      areas.forEach(a => {
        areaStats[a] = {
          area: a,
          dtMins: 0,
          incidentCount: 0,
          openCount: 0
        };
      });

      records.forEach(r => {
        const rArea = (r.area || "").trim();
        const matched = areas.find(a => this.normalizeArea(a) === this.normalizeArea(rArea)) || rArea;
        if (!areaStats[matched]) {
          areaStats[matched] = { area: matched, dtMins: 0, incidentCount: 0, openCount: 0 };
        }
        const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
        areaStats[matched].dtMins += dt;
        areaStats[matched].incidentCount += 1;
        if (r.status === "Open") {
          areaStats[matched].openCount += 1;
        }
      });

      const maxMins = Math.max(...Object.values(areaStats).map(s => s.dtMins), 60);

      return areas.map(a => {
        const item = areaStats[a] || { area: a, dtMins: 0, incidentCount: 0, openCount: 0 };
        const upMins = Math.max(0, opMinsPerArea - item.dtMins);
        const avail = Math.min(100, Math.max(0, (upMins / opMinsPerArea) * 100));
        const hours = parseFloat((item.dtMins / 60).toFixed(1));
        const normalizedHeight = Math.max(0.4, (item.dtMins / maxMins) * 10);

        return {
          id: a,
          label: a,
          dtMins: item.dtMins,
          dtHours: hours,
          availPercent: parseFloat(avail.toFixed(2)),
          incidentCount: item.incidentCount,
          openCount: item.openCount,
          normalizedHeight: normalizedHeight,
          statusBand: window.Yokohama3DTheme.getStatusBand(avail),
          statusColor: window.Yokohama3DTheme.getStatusColor(avail),
          statusHex: window.Yokohama3DTheme.getStatusHex(avail)
        };
      });
    },

    // 2. PROCESS-WISE GROUPED DATA (DOWNTIME & AVAILABILITY)
    getProcessChartData() {
      const records = this.getRecords();
      const procMap = {};

      records.forEach(r => {
        const proc = (r.process || "General").trim();
        const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
        if (!procMap[proc]) {
          procMap[proc] = { process: proc, dtMins: 0, incidents: 0 };
        }
        procMap[proc].dtMins += dt;
        procMap[proc].incidents += 1;
      });

      // Include top standard processes if empty
      const defaultProcs = ["Tire Building", "Tire Curing", "Mixing", "4Roll", "Extrusion", "Inspection"];
      defaultProcs.forEach(dp => {
        if (!procMap[dp]) {
          procMap[dp] = { process: dp, dtMins: 0, incidents: 0 };
        }
      });

      const list = Object.values(procMap).sort((a, b) => b.dtMins - a.dtMins).slice(0, 8);
      const maxDt = Math.max(...list.map(p => p.dtMins), 60);

      return list.map(item => {
        const hours = parseFloat((item.dtMins / 60).toFixed(1));
        // Availability estimation per process (based on typical 43,200 min base)
        const avail = Math.min(100, Math.max(0, 100 - (item.dtMins / 43200) * 100));

        return {
          id: item.process,
          label: item.process,
          dtMins: item.dtMins,
          dtHours: hours,
          availPercent: parseFloat(avail.toFixed(2)),
          incidents: item.incidents,
          dtBarHeight: Math.max(0.4, (item.dtMins / maxDt) * 9),
          availBarHeight: Math.max(0.4, (avail / 100) * 9),
          statusColor: window.Yokohama3DTheme.getStatusColor(avail),
          statusHex: window.Yokohama3DTheme.getStatusHex(avail)
        };
      });
    },

    // 3. MONTHLY AVAILABILITY DATA WITH 99% BENCHMARK TARGET
    getMonthlyChartData() {
      const allRecords = window.downtimeRecords || [];
      const areas = this.getStandardAreas();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      const currentFilter = window.dashboardDateFilter || { year: "2026" };
      const targetYear = (currentFilter.year === "ALL" || currentFilter.year === "FY2026") ? "2026" : currentFilter.year;

      const monthlyList = [];
      for (let m = 1; m <= 12; m++) {
        const mStr = String(m).padStart(2, "0");
        const ym = `${targetYear}-${mStr}`;
        const daysInMonth = new Date(Number(targetYear), m, 0).getDate();
        const monthOpMins = daysInMonth * 24 * 60 * areas.length;

        const mRecords = allRecords.filter(r => r.issueDate && r.issueDate.startsWith(ym));
        const dtMins = mRecords.reduce((acc, r) => {
          const dt = parseInt(r.downtimeMinutes, 10) || 0;
          const aff = parseInt(r.affectedMachines, 10) || 1;
          return acc + (dt * aff);
        }, 0);

        const hasActivity = mRecords.length > 0;
        const avail = hasActivity
          ? Math.min(100, Math.max(0, ((monthOpMins - dtMins) / monthOpMins) * 100))
          : 100.0;

        monthlyList.push({
          monthIndex: m,
          ym: ym,
          label: monthNames[m - 1],
          year: targetYear,
          dtMins: dtMins,
          dtHours: parseFloat((dtMins / 60).toFixed(1)),
          availPercent: parseFloat(avail.toFixed(2)),
          targetPercent: 99.0,
          incidents: mRecords.length,
          barHeight: Math.max(0.5, (avail / 100) * 10),
          statusColor: window.Yokohama3DTheme.getStatusColor(avail),
          statusHex: window.Yokohama3DTheme.getStatusHex(avail)
        });
      }

      return monthlyList;
    },

    // 4. CATEGORY BREAKDOWN 3D DONUT & CYLINDERS
    getCategoryChartData() {
      const records = this.getRecords();
      const catMap = {};
      let totalMins = 0;

      records.forEach(r => {
        const cat = (r.category || "Other").trim();
        const dt = (parseInt(r.downtimeMinutes, 10) || 0) * (parseInt(r.affectedMachines, 10) || 1);
        catMap[cat] = (catMap[cat] || 0) + dt;
        totalMins += dt;
      });

      if (Object.keys(catMap).length === 0) {
        catMap["No Failures"] = 1;
        totalMins = 1;
      }

      const sorted = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
      let currentAngle = 0;
      const palette = window.Yokohama3DTheme.colors.categories;

      return sorted.map(([cat, mins], idx) => {
        const shareRatio = mins / totalMins;
        const angleSpan = shareRatio * Math.PI * 2;
        const startAngle = currentAngle;
        const endAngle = currentAngle + angleSpan;
        const midAngle = startAngle + angleSpan / 2;
        currentAngle += angleSpan;

        return {
          id: cat,
          category: cat,
          mins: mins,
          hours: parseFloat((mins / 60).toFixed(1)),
          sharePercent: parseFloat((shareRatio * 100).toFixed(1)),
          startAngle: startAngle,
          endAngle: endAngle,
          midAngle: midAngle,
          color: palette[idx % palette.length],
          colorHex: "#" + (palette[idx % palette.length].toString(16).padStart(6, '0'))
        };
      });
    },

    // 5. EQUIPMENT DOWNTIME TRAJECTORY (3D CONTINUOUS RIBBON/POINTS)
    getTrajectoryChartData() {
      const records = [...this.getRecords()].sort((a, b) => (a.issueDate || '').localeCompare(b.issueDate || ''));
      if (records.length === 0) {
        return [
          { x: -10, y: 1, z: 0, date: "Day 1", dtMins: 0, machine: "None" },
          { x: 0, y: 1, z: 0, date: "Day 15", dtMins: 0, machine: "None" },
          { x: 10, y: 1, z: 0, date: "Day 30", dtMins: 0, machine: "None" }
        ];
      }

      const maxDt = Math.max(...records.map(r => parseInt(r.downtimeMinutes, 10) || 0), 60);
      const span = 24; // 3D world X-span
      const step = span / Math.max(1, records.length - 1);

      return records.slice(0, 30).map((r, i) => {
        const dt = parseInt(r.downtimeMinutes, 10) || 0;
        const normalizedY = Math.max(0.5, (dt / maxDt) * 8);
        return {
          x: -span / 2 + i * step,
          y: normalizedY,
          z: Math.sin(i * 0.4) * 2, // Subtle 3D wave depth
          date: r.issueDate || "",
          dtMins: dt,
          hours: (dt / 60).toFixed(1),
          machine: r.machineNo || r.machine || "Asset",
          area: r.area || "Plant",
          isCritical: r.isCritical === "Yes"
        };
      });
    },

    // 6. PLANT FLOOR MAP & PROCEDURAL MACHINE MODELS DATA
    getPlantMapData() {
      const records = this.getRecords();
      const areas = this.getStandardAreas();
      const areaData = this.getAreaChartData();

      // 8 Isometric Floor Grid Blocks (2 rows of 4)
      const blockWidth = 5.2;
      const blockDepth = 4.8;
      const gap = 1.4;

      const areaBlocks = areas.map((a, idx) => {
        const row = Math.floor(idx / 4); // 0 or 1
        const col = idx % 4; // 0, 1, 2, 3
        const x = (col - 1.5) * (blockWidth + gap);
        const z = (row - 0.5) * (blockDepth + gap);

        const aMetric = areaData.find(item => item.id === a) || {
          dtMins: 0,
          availPercent: 100,
          dtHours: 0,
          openCount: 0
        };

        // Floor block height based on downtime
        const height = Math.max(0.4, (aMetric.dtMins / 600) * 3 + 0.4);

        // Find machines in this area from active records
        const areaRecords = records.filter(r => this.normalizeArea(r.area) === this.normalizeArea(a));
        const machineCodes = Array.from(new Set(areaRecords.map(r => (r.machineNo || r.machine || "").trim()))).filter(Boolean);

        const machines = machineCodes.slice(0, 6).map((code, mIdx) => {
          const rec = areaRecords.find(r => (r.machineNo || r.machine) === code);
          const hasOpenIncident = areaRecords.some(r => (r.machineNo || r.machine) === code && r.status === "Open");
          const isCritical = rec && rec.isCritical === "Yes";

          // Sub-offsets inside area block
          const mCol = mIdx % 3;
          const mRow = Math.floor(mIdx / 3);
          const mx = x + (mCol - 1) * 1.5;
          const mz = z + (mRow - 0.5) * 1.6;

          // Procedural machine type deduction
          let mType = "box";
          const p = (rec && rec.process ? rec.process.toLowerCase() : "");
          if (p.includes("curing") || code.startsWith("CU_")) mType = "press";
          else if (p.includes("building") || code.startsWith("BLD_")) mType = "conveyor";
          else if (p.includes("server") || code.includes("SERVER")) mType = "server";
          else if (p.includes("network") || code.includes("SWITCH")) mType = "switch";
          else if (code.includes("SC") || p.includes("scanner")) mType = "scanner";

          return {
            code: code,
            area: a,
            type: mType,
            x: mx,
            z: mz,
            y: height,
            hasOpenIncident: hasOpenIncident,
            isCritical: isCritical,
            totalDtMins: areaRecords.filter(r => r.machineNo === code).reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0)
          };
        });

        return {
          id: a,
          area: a,
          areaName: a,
          x: x,
          z: z,
          width: blockWidth,
          depth: blockDepth,
          height: height,
          dtMins: aMetric.dtMins,
          dtHours: aMetric.dtHours,
          availPercent: aMetric.availPercent,
          openCount: aMetric.openCount,
          openOutages: aMetric.openCount,
          statusBand: aMetric.statusBand,
          statusColor: aMetric.statusColor,
          statusHex: aMetric.statusHex,
          machines: machines
        };
      });

      return areaBlocks;
    },

    // 7. OPEN INCIDENTS TOWER (AGE BUCKETS: <24h, 2-7d, >7d)
    getIncidentTowerData() {
      const records = this.getRecords().filter(r => r.status === "Open");
      const now = new Date();

      const buckets = {
        fresh: { label: "< 24 Hours", count: 0, color: 0x059669, colorHex: "#059669", items: [] },
        medium: { label: "2 - 7 Days", count: 0, color: 0xD97706, colorHex: "#D97706", items: [] },
        stale: { label: "> 7 Days (Critical)", count: 0, color: 0xDC2626, colorHex: "#DC2626", items: [] }
      };

      records.forEach(r => {
        if (!r.issueDate) {
          buckets.fresh.count++;
          buckets.fresh.items.push(r);
          return;
        }
        const diffMs = now.getTime() - new Date(r.issueDate).getTime();
        const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

        if (diffDays <= 1) {
          buckets.fresh.count++;
          buckets.fresh.items.push(r);
        } else if (diffDays <= 7) {
          buckets.medium.count++;
          buckets.medium.items.push(r);
        } else {
          buckets.stale.count++;
          buckets.stale.items.push(r);
        }
      });

      const res = [buckets.fresh, buckets.medium, buckets.stale];
      res.totalOpen = records.length;
      res.recent = buckets.fresh;
      res.fresh = buckets.fresh;
      res.medium = buckets.medium;
      res.critical = buckets.stale;
      res.stale = buckets.stale;
      return res;
    },

    // 8. CORE SUMMARY METRICS FOR 3D HEADER
    getSummaryMetrics() {
      if (typeof window.computeDashboardTelemetry === "function") {
        return window.computeDashboardTelemetry();
      }
      return {
        availability: 100,
        totalDtHours: 0,
        openCount: 0,
        mttrMins: 0,
        closureRate: 100
      };
    }
  };

})(window);
