/**
 * 3d/BarChart3D.js
 * 3D Bar Chart Visualizations Engine (Area, Process, Monthly+99% Target Sheet, Donut, Trajectory).
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  class Yokohama3DBarCharts {
    constructor(sceneManager) {
      this.sm = sceneManager;
      this.THREE = sceneManager.THREE;
      this.activeType = "area";
      this.chartGroup = null;
      this.labelsGroup = null;
      this.animStartTime = 0;
      this.hoveredBar = null;
      this.originalBarY = null;
    }

    // Creates dynamic text sprites that always face the camera
    createTextSprite(text, bgColor = "rgba(15, 23, 42, 0.85)", textColor = "#FFFFFF", scale = 1.0) {
      const T = this.THREE;
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 72;
      const ctx = canvas.getContext("2d");

      // Pill Background
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(8, 8, 240, 56, 14);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Text
      ctx.fillStyle = textColor;
      ctx.font = "bold 24px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 128, 36);

      const texture = new T.CanvasTexture(canvas);
      texture.minFilter = T.LinearFilter;

      const spriteMat = new T.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new T.Sprite(spriteMat);
      sprite.scale.set(2.8 * scale, 0.8 * scale, 1);
      return sprite;
    }

    // 1. AREA-WISE DOWNTIME (Beveled 3D Bars with Camera-Facing Badges)
    renderAreaDowntimeChart() {
      const T = this.THREE;
      this.activeType = "area";
      this.sm.clearContent();

      const data = window.Yokohama3DDataAdapter.getAreaChartData();
      if (!data || data.length === 0) return;

      this.chartGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.chartGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      const count = data.length;
      const barWidth = 2.2;
      const barDepth = 2.2;
      const spacing = 3.6;
      const startX = -((count - 1) * spacing) / 2;

      data.forEach((item, idx) => {
        const x = startX + idx * spacing;
        const targetHeight = item.normalizedHeight;

        // Beveled 3D Extruded Box Geometry
        const geo = new T.BoxGeometry(barWidth, targetHeight, barDepth);
        // Translate origin to bottom so scale.y grows from ground
        geo.translate(0, targetHeight / 2, 0);

        const mat = new T.MeshStandardMaterial({
          color: item.statusColor,
          roughness: 0.35,
          metalness: 0.2,
          emissive: item.statusColor,
          emissiveIntensity: 0.1
        });

        const bar = new T.Mesh(geo, mat);
        bar.position.set(x, 0, 0);
        bar.castShadow = true;
        bar.receiveShadow = true;

        bar.userData = {
          type: "areaBar",
          id: item.id,
          label: item.label,
          dtHours: item.dtHours,
          dtMins: item.dtMins,
          availPercent: item.availPercent,
          incidentCount: item.incidentCount,
          targetHeight: targetHeight,
          targetY: 0
        };

        // Initial zero-scale for growth animation
        bar.scale.y = 0.001;
        this.chartGroup.add(bar);

        // Floating Camera-Facing Badge
        const badge = this.createTextSprite(`${item.dtHours}h • ${item.availPercent}%`, "rgba(10, 15, 29, 0.9)", item.statusHex, 0.9);
        badge.position.set(x, targetHeight + 1.2, 0);
        this.labelsGroup.add(badge);

        // Ground Label Sprite
        const nameSprite = this.createTextSprite(item.label, "rgba(30, 41, 59, 0.8)", "#94A3B8", 0.85);
        nameSprite.position.set(x, 0.5, barDepth / 2 + 1.4);
        this.labelsGroup.add(nameSprite);
      });

      this.animateBarGrowth();
    }

    // 2. PROCESS-WISE GROUPED 3D BARS (Downtime + Availability)
    renderProcessGroupedChart() {
      const T = this.THREE;
      this.activeType = "process";
      this.sm.clearContent();

      const data = window.Yokohama3DDataAdapter.getProcessChartData();
      if (!data || data.length === 0) return;

      this.chartGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.chartGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      const count = data.length;
      const barWidth = 1.3;
      const barDepth = 1.8;
      const groupSpacing = 4.2;
      const startX = -((count - 1) * groupSpacing) / 2;

      data.forEach((item, idx) => {
        const groupX = startX + idx * groupSpacing;

        // Bar 1: Downtime Hours (Red)
        const dtHeight = item.dtBarHeight;
        const dtGeo = new T.BoxGeometry(barWidth, dtHeight, barDepth);
        dtGeo.translate(0, dtHeight / 2, 0);
        const dtMat = new T.MeshStandardMaterial({
          color: 0xE60012,
          roughness: 0.35,
          metalness: 0.2
        });
        const dtBar = new T.Mesh(dtGeo, dtMat);
        dtBar.position.set(groupX - 0.8, 0, 0);
        dtBar.castShadow = true;
        dtBar.scale.y = 0.001;
        dtBar.userData = {
          type: "processDtBar",
          process: item.label,
          val: `${item.dtHours} hrs`,
          targetHeight: dtHeight
        };
        this.chartGroup.add(dtBar);

        // Bar 2: Availability % (Green / Status Color)
        const availHeight = item.availBarHeight;
        const availGeo = new T.BoxGeometry(barWidth, availHeight, barDepth);
        availGeo.translate(0, availHeight / 2, 0);
        const availMat = new T.MeshStandardMaterial({
          color: item.statusColor,
          roughness: 0.35,
          metalness: 0.2
        });
        const availBar = new T.Mesh(availGeo, availMat);
        availBar.position.set(groupX + 0.8, 0, 0);
        availBar.castShadow = true;
        availBar.scale.y = 0.001;
        availBar.userData = {
          type: "processAvailBar",
          process: item.label,
          val: `${item.availPercent}%`,
          targetHeight: availHeight
        };
        this.chartGroup.add(availBar);

        // Labels
        const lbl = this.createTextSprite(item.label, "rgba(15, 23, 42, 0.85)", "#E2E8F0", 0.75);
        lbl.position.set(groupX, 0.5, barDepth / 2 + 1.4);
        this.labelsGroup.add(lbl);

        const valBadge = this.createTextSprite(`${item.dtHours}h | ${item.availPercent}%`, "rgba(10, 15, 29, 0.9)", "#38BDF8", 0.75);
        valBadge.position.set(groupX, Math.max(dtHeight, availHeight) + 1.2, 0);
        this.labelsGroup.add(valBadge);
      });

      this.animateBarGrowth();
    }

    // 3. MONTHLY AVAILABILITY WITH 99% TARGET SHEET
    renderMonthlyTargetChart() {
      const T = this.THREE;
      this.activeType = "monthly";
      this.sm.clearContent();

      const data = window.Yokohama3DDataAdapter.getMonthlyChartData();
      if (!data || data.length === 0) return;

      this.chartGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.chartGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      const count = 12;
      const barWidth = 1.6;
      const barDepth = 1.8;
      const spacing = 2.6;
      const startX = -((count - 1) * spacing) / 2;

      // 99.0% Translucent Glowing Target Plane
      const planeWidth = count * spacing + 4;
      const planeHeight = 9.9; // 99% of 10.0 scale height
      const targetGeo = new T.PlaneGeometry(planeWidth, 5);
      const targetMat = new T.MeshStandardMaterial({
        color: 0x00E676,
        transparent: true,
        opacity: 0.22,
        side: T.DoubleSide,
        emissive: 0x00E676,
        emissiveIntensity: 0.35
      });
      const targetPlane = new T.Mesh(targetGeo, targetMat);
      targetPlane.position.set(0, planeHeight, 0);
      targetPlane.rotation.x = Math.PI / 2; // Flat horizontal sheet cutting across all bars
      this.chartGroup.add(targetPlane);

      // Target Label
      const targetTag = this.createTextSprite("≥99.0% ENTERPRISE TARGET", "rgba(5, 150, 105, 0.9)", "#FFFFFF", 0.85);
      targetTag.position.set(startX - 2.5, planeHeight + 0.8, 0);
      this.labelsGroup.add(targetTag);

      // Monthly Bars
      data.forEach((item, idx) => {
        const x = startX + idx * spacing;
        const targetHeight = item.barHeight;

        const geo = new T.BoxGeometry(barWidth, targetHeight, barDepth);
        geo.translate(0, targetHeight / 2, 0);
        const mat = new T.MeshStandardMaterial({
          color: item.statusColor,
          roughness: 0.3,
          metalness: 0.15
        });

        const bar = new T.Mesh(geo, mat);
        bar.position.set(x, 0, 0);
        bar.castShadow = true;
        bar.scale.y = 0.001;
        bar.userData = {
          month: item.label,
          availPercent: item.availPercent,
          dtHours: item.dtHours,
          targetHeight: targetHeight
        };
        this.chartGroup.add(bar);

        // Month Label
        const mLbl = this.createTextSprite(item.label, "rgba(30, 41, 59, 0.8)", "#94A3B8", 0.7);
        mLbl.position.set(x, 0.4, barDepth / 2 + 1.2);
        this.labelsGroup.add(mLbl);

        // Value Badge
        const vLbl = this.createTextSprite(`${item.availPercent}%`, "rgba(15, 23, 42, 0.9)", item.statusHex, 0.65);
        vLbl.position.set(x, targetHeight + 1.0, 0);
        this.labelsGroup.add(vLbl);
      });

      this.animateBarGrowth();
    }

    // 4. CATEGORY BREAKDOWN 3D DONUT & CYLINDERS
    renderCategoryBreakdownChart() {
      const T = this.THREE;
      this.activeType = "category";
      this.sm.clearContent();

      const data = window.Yokohama3DDataAdapter.getCategoryChartData();
      if (!data || data.length === 0) return;

      this.chartGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.chartGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      const radius = 8.5;
      const height = 2.5;

      data.forEach((item) => {
        const angleSpan = item.endAngle - item.startAngle;
        if (angleSpan <= 0.01) return;

        // Cylinder sector (Extruded shape)
        const shape = new T.Shape();
        const innerR = 4.0;
        const outerR = 8.0;

        shape.absarc(0, 0, outerR, item.startAngle, item.endAngle, false);
        shape.absarc(0, 0, innerR, item.endAngle, item.startAngle, true);
        shape.closePath();

        const extrudeSettings = {
          depth: height,
          bevelEnabled: true,
          bevelSegments: 3,
          steps: 1,
          bevelSize: 0.15,
          bevelThickness: 0.15
        };

        const geo = new T.ExtrudeGeometry(shape, extrudeSettings);
        const mat = new T.MeshStandardMaterial({
          color: item.color,
          roughness: 0.35,
          metalness: 0.2
        });

        const slice = new T.Mesh(geo, mat);
        slice.rotation.x = -Math.PI / 2;
        slice.position.y = 0.2;
        slice.castShadow = true;
        slice.receiveShadow = true;

        slice.userData = {
          type: "donutSlice",
          category: item.category,
          hours: item.hours,
          sharePercent: item.sharePercent,
          midAngle: item.midAngle,
          originalPos: { x: 0, y: 0.2, z: 0 }
        };

        this.chartGroup.add(slice);

        // Position Camera-Facing Labels outside ring
        const labelR = outerR + 2.4;
        const lx = Math.cos(item.midAngle) * labelR;
        const lz = -Math.sin(item.midAngle) * labelR;

        const lbl = this.createTextSprite(`${item.category}: ${item.sharePercent}%`, "rgba(15, 23, 42, 0.9)", item.colorHex, 0.75);
        lbl.position.set(lx, 1.5, lz);
        this.labelsGroup.add(lbl);
      });
    }

    // 5. EQUIPMENT DOWNTIME TRAJECTORY (3D CONTINUOUS RIBBON & NODES)
    renderTrajectoryChart() {
      const T = this.THREE;
      this.activeType = "trajectory";
      this.sm.clearContent();

      const data = window.Yokohama3DDataAdapter.getTrajectoryChartData();
      if (!data || data.length === 0) return;

      this.chartGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.chartGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      // Create Curve Points
      const points = data.map(d => new T.Vector3(d.x, d.y, d.z));
      const curve = new T.CatmullRomCurve3(points);
      curve.curveType = "centripetal";

      // 3D Tube Ribbon Geometry
      const tubeGeo = new T.TubeGeometry(curve, 64, 0.35, 12, false);
      const tubeMat = new T.MeshStandardMaterial({
        color: 0xE60012,
        roughness: 0.25,
        metalness: 0.4,
        emissive: 0xE60012,
        emissiveIntensity: 0.3
      });
      const tube = new T.Mesh(tubeGeo, tubeMat);
      tube.castShadow = true;
      this.chartGroup.add(tube);

      // Glowing Spheres at Incident Nodes
      data.forEach(d => {
        const sphereGeo = new T.SphereGeometry(0.55, 16, 16);
        const sphereMat = new T.MeshStandardMaterial({
          color: d.isCritical ? 0xDC2626 : 0x059669,
          emissive: d.isCritical ? 0xDC2626 : 0x059669,
          emissiveIntensity: 0.6
        });
        const sphere = new T.Mesh(sphereGeo, sphereMat);
        sphere.position.set(d.x, d.y, d.z);
        sphere.castShadow = true;
        sphere.userData = {
          type: "trajectoryNode",
          machine: d.machine,
          date: d.date,
          hours: d.hours
        };
        this.chartGroup.add(sphere);

        // Node Label
        const badge = this.createTextSprite(`${d.machine} (${d.hours}h)`, "rgba(10, 15, 29, 0.9)", "#38BDF8", 0.65);
        badge.position.set(d.x, d.y + 1.1, d.z);
        this.labelsGroup.add(badge);
      });
    }

    // Eased Bar Growth Animation
    animateBarGrowth(duration = 650) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (this.chartGroup) {
          this.chartGroup.children.forEach(c => { c.scale.y = 1.0; });
        }
        return;
      }

      const startTime = performance.now();
      const bars = [];
      if (this.chartGroup) {
        this.chartGroup.children.forEach(c => {
          if (c.userData && (c.userData.targetHeight !== undefined || c.userData.type?.includes("Bar"))) {
            bars.push(c);
          }
        });
      }

      const animateFrame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = window.Yokohama3DTheme.easing.easeOutCubic(progress);

        bars.forEach(b => {
          b.scale.y = Math.max(0.001, ease);
        });

        if (progress < 1) {
          requestAnimationFrame(animateFrame);
        }
      };

      requestAnimationFrame(animateFrame);
    }
  }

  window.Yokohama3DBarCharts = Yokohama3DBarCharts;

})(window);
