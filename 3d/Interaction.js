/**
 * 3d/Interaction.js
 * Raycasting, Hover Highlights, Tooltip Card, Click-to-Filter, Fullscreen & PNG Screenshot Export.
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  class Yokohama3DInteraction {
    constructor(sceneManager, containerElement) {
      this.sm = sceneManager;
      this.container = containerElement;
      this.canvas = sceneManager.canvas;
      this.THREE = sceneManager.THREE;

      this.raycaster = new this.THREE.Raycaster();
      this.mouse = new this.THREE.Vector2();

      this.hoveredObject = null;
      this.originalScale = new this.THREE.Vector3(1, 1, 1);
      this.originalPosition = new this.THREE.Vector3();

      this.tooltip = null;
      this.createTooltipElement();
      this.bindEvents();
    }

    createTooltipElement() {
      let el = document.getElementById("yoko3dTooltip");
      if (!el) {
        el = document.createElement("div");
        el.id = "yoko3dTooltip";
        el.className = "fixed pointer-events-none hidden z-50 p-3 rounded-xl bg-slate-900/95 border border-slate-700 shadow-2xl backdrop-blur-md text-white text-xs max-w-xs transition-opacity duration-150";
        document.body.appendChild(el);
      }
      this.tooltip = el;
    }

    bindEvents() {
      const c = this.canvas;

      c.addEventListener("mousemove", (e) => this.onMouseMove(e));
      c.addEventListener("mouseleave", () => this.hideTooltip());
      c.addEventListener("click", (e) => this.onClick(e));
    }

    onMouseMove(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.checkIntersection(e);
    }

    checkIntersection(e) {
      if (!this.sm.camera || !this.sm.contentGroup) return;

      this.raycaster.setFromCamera(this.mouse, this.sm.camera);
      const intersects = this.raycaster.intersectObjects(this.sm.contentGroup.children, true);

      // Filter to objects with valid userData
      const valid = intersects.find(hit => hit.object.userData && (hit.object.userData.type || hit.object.userData.label));

      if (valid) {
        const obj = valid.object;
        if (this.hoveredObject !== obj) {
          this.resetHover();
          this.setHover(obj);
        }
        this.updateTooltip(obj.userData, e);
      } else {
        this.resetHover();
        this.hideTooltip();
      }
    }

    setHover(obj) {
      this.hoveredObject = obj;
      this.originalScale.copy(obj.scale);
      this.originalPosition.copy(obj.position);

      const u = obj.userData;
      if (u.type === "donutSlice") {
        // Radial Explosion on Donut Slice
        const dist = 1.2;
        const ox = Math.cos(u.midAngle) * dist;
        const oz = -Math.sin(u.midAngle) * dist;
        obj.position.x += ox;
        obj.position.z += oz;
      } else if (u.type === "areaBar" || u.type === "plantBlock") {
        // Raise bar slightly
        obj.position.y += 0.35;
      } else if (u.type === "machine") {
        // Scale machine slightly
        obj.scale.multiplyScalar(1.25);
      }

      this.canvas.style.cursor = "pointer";
    }

    resetHover() {
      if (!this.hoveredObject) return;
      const u = this.hoveredObject.userData;

      if (u.type === "donutSlice") {
        if (u.originalPos) {
          this.hoveredObject.position.set(u.originalPos.x, u.originalPos.y, u.originalPos.z);
        }
      } else {
        this.hoveredObject.position.copy(this.originalPosition);
        this.hoveredObject.scale.copy(this.originalScale);
      }

      this.hoveredObject = null;
      this.canvas.style.cursor = "default";
    }

    updateTooltip(data, e) {
      if (!this.tooltip) return;

      // Escape raw text to prevent XSS
      const escape = (str) => {
        const d = document.createElement("div");
        d.textContent = str || "";
        return d.innerHTML;
      };

      let html = "";
      if (data.type === "areaBar" || data.type === "plantBlock") {
        html = `
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-1.5 mb-2">
            <span class="font-black text-slate-100 text-sm tracking-tight">${escape(data.label || data.area)}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold" style="background: ${data.availPercent >= 99 ? 'rgba(5, 150, 105, 0.25)' : 'rgba(220, 38, 38, 0.25)'}; color: ${data.availPercent >= 99 ? '#10B981' : '#EF4444'}">
              ${data.availPercent}%
            </span>
          </div>
          <div class="space-y-1 text-slate-300 font-mono text-[11px]">
            <div class="flex justify-between"><span>Downtime:</span><strong class="text-white">${data.dtHours}h (${(data.dtMins || 0).toLocaleString()}m)</strong></div>
            <div class="flex justify-between"><span>Incidents:</span><strong class="text-white">${data.incidentCount || data.openCount || 0}</strong></div>
          </div>
          <div class="mt-2 pt-1 border-t border-slate-800 text-[10px] text-slate-400 font-sans">
            Click to focus incident records table
          </div>
        `;
      } else if (data.type === "machine") {
        html = `
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-1.5 mb-2">
            <span class="font-black text-slate-100 text-sm font-mono">${escape(data.code)}</span>
            <span class="text-[10px] text-slate-400">${escape(data.area)}</span>
          </div>
          <div class="space-y-1 text-slate-300 text-[11px] font-mono">
            <div class="flex justify-between"><span>Outage Status:</span><strong class="${data.hasOpenIncident ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}">${data.hasOpenIncident ? 'OPEN TICKET' : 'OPERATIONAL'}</strong></div>
            <div class="flex justify-between"><span>Critical Asset:</span><strong class="${data.isCritical ? 'text-amber-400' : 'text-slate-400'}">${data.isCritical ? 'YES' : 'NO'}</strong></div>
            <div class="flex justify-between"><span>Loss Duration:</span><strong class="text-white">${(data.totalDtMins || 0)} mins</strong></div>
          </div>
          <div class="mt-2 pt-1 border-t border-slate-800 text-[10px] text-slate-400 font-sans">
            Click to filter logs for this machine
          </div>
        `;
      } else if (data.type === "donutSlice") {
        html = `
          <div class="flex items-center justify-between border-b border-slate-700/80 pb-1.5 mb-2">
            <span class="font-bold text-slate-100 text-xs">${escape(data.category)}</span>
            <span class="font-mono font-bold text-emerald-400">${data.sharePercent}%</span>
          </div>
          <div class="text-[11px] font-mono text-slate-300">
            Total Loss: <strong class="text-white">${data.hours} hrs</strong>
          </div>
        `;
      } else if (data.type === "trajectoryNode") {
        html = `
          <div class="font-bold text-slate-100 text-xs">${escape(data.machine)}</div>
          <div class="text-[11px] font-mono text-slate-300 mt-1">
            <span>Date: ${data.date}</span><br>
            <span>Downtime: <strong>${data.hours} hrs</strong></span>
          </div>
        `;
      } else {
        html = `<div class="font-bold text-xs">${escape(data.val || data.month || "Telemetry Node")}</div>`;
      }

      this.tooltip.innerHTML = html;
      this.tooltip.classList.remove("hidden");

      // Positioning with boundary guard
      const pad = 16;
      let left = e.clientX + pad;
      let top = e.clientY + pad;
      if (left + 220 > window.innerWidth) left = e.clientX - 230;
      if (top + 160 > window.innerHeight) top = e.clientY - 170;

      this.tooltip.style.left = `${left}px`;
      this.tooltip.style.top = `${top}px`;
    }

    hideTooltip() {
      if (this.tooltip) {
        this.tooltip.classList.add("hidden");
      }
    }

    onClick(e) {
      if (!this.hoveredObject) return;
      const u = this.hoveredObject.userData;

      if (u.type === "areaBar" || u.type === "plantBlock") {
        const areaName = u.label || u.area;
        // Smooth camera fly-to area block
        this.sm.flyCameraTo(
          { x: this.hoveredObject.position.x, y: 14, z: this.hoveredObject.position.z + 18 },
          { x: this.hoveredObject.position.x, y: 2, z: this.hoveredObject.position.z }
        );

        // Filter incident table
        if (typeof window.drillDownTo === "function") {
          window.drillDownTo("area", areaName);
        }
      } else if (u.type === "machine") {
        // Filter incident table to machine
        if (typeof window.drillDownTo === "function") {
          window.drillDownTo("machine", u.code);
        }
      }
    }

    // Capture Canvas Screenshot as High-Res PNG
    captureScreenshot(filename = "yokohama-3d-dashboard.png") {
      if (!this.sm.renderer || !this.sm.scene || !this.sm.camera) return;

      // Force high-res render frame
      this.sm.renderer.render(this.sm.scene, this.sm.camera);
      const dataUrl = this.sm.canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = filename;
      link.href = dataUrl;
      link.click();

      if (typeof window.showToast === "function") {
        window.showToast("3D Dashboard screenshot exported successfully", "success");
      }
    }

    // Toggle Viewport Fullscreen
    toggleFullscreen() {
      const el = this.container;
      if (!document.fullscreenElement) {
        el.requestFullscreen().catch(err => {
          console.warn("Fullscreen request failed:", err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  }

  window.Yokohama3DInteraction = Yokohama3DInteraction;

})(window);
