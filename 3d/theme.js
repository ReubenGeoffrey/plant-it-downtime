/**
 * 3d/theme.js
 * Visual Styles, Colors, Materials Factory, Easing Functions and Quality Presets for 3D Dashboard.
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  window.Yokohama3DTheme = {
    // Brand & UI Colors
    colors: {
      brandRed: 0xE60012,
      brandRedHover: 0xCC0010,
      pitchBlack: 0x080B11,
      deepNavy: 0x0F1420,
      gridDark: 0x1E293B,
      gridLight: 0xE2E8F0,
      floorDark: 0x0A0F1D,
      floorLight: 0xF1F5F9,
      textPrimary: 0xFFFFFF,
      textSecondary: 0x94A3B8,
      
      // Status Colors (Matching 2D Dashboard continuous thresholds)
      statusOptimal: 0x059669,  // >= 99%
      statusWarning: 0xD97706,  // 95% to < 99%
      statusCritical: 0xDC2626, // < 95%
      statusInfo: 0x0284C7,
      statusGold: 0xF59E0B,     // Critical equipment spotlight

      // Category Palette
      categories: [
        0xE60012, // Red (MES)
        0x2563EB, // Blue (Network)
        0x0D9488, // Teal (Hardware)
        0xD97706, // Amber (Power)
        0x7C3AED, // Purple (Software)
        0xDB2777, // Pink (Sensor)
        0x059669, // Emerald (PLC)
        0x64748B  // Slate (Other)
      ]
    },

    // Quality Levels
    qualityLevels: {
      auto: {
        name: "Auto (Adaptive)",
        maxPixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        shadows: true,
        antialias: true,
        targetFPS: 60,
        lowFpsThreshold: 40
      },
      high: {
        name: "High Fidelity",
        maxPixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        shadows: true,
        antialias: true,
        targetFPS: 60,
        lowFpsThreshold: 0
      },
      low: {
        name: "Performance Mode",
        maxPixelRatio: 1,
        shadows: false,
        antialias: false,
        targetFPS: 30,
        lowFpsThreshold: 0
      }
    },

    // Status Color Helper based on continuous thresholds
    getStatusBand(availabilityPercent) {
      if (typeof availabilityPercent !== "number" || isNaN(availabilityPercent)) {
        return "optimal";
      }
      if (availabilityPercent >= 99.0) return "optimal";
      if (availabilityPercent >= 95.0) return "warning";
      return "critical";
    },

    getStatusColor(availabilityPercent) {
      if (typeof availabilityPercent !== "number" || isNaN(availabilityPercent)) {
        return this.colors.statusOptimal;
      }
      if (availabilityPercent >= 99.0) return this.colors.statusOptimal;
      if (availabilityPercent >= 95.0) return this.colors.statusWarning;
      return this.colors.statusCritical;
    },

    getStatusHex(availabilityPercent) {
      if (typeof availabilityPercent !== "number" || isNaN(availabilityPercent)) {
        return "#059669";
      }
      if (availabilityPercent >= 99.0) return "#059669";
      if (availabilityPercent >= 95.0) return "#D97706";
      return "#DC2626";
    },

    // Smooth Easing Functions (Zero External Dependencies)
    easing: {
      // Cubic Ease Out: f(t) = 1 - (1 - t)^3
      easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      },
      // Quadratic Ease In Out
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      },
      // Elastic Ease Out for bouncy alerts
      easeOutElastic(t) {
        const c4 = (2 * Math.PI) / 3;
        return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
      }
    },

    // Creates reusable materials for Three.js
    createMaterials(THREE, isDarkMode = true) {
      if (!THREE) return null;

      return {
        // Floor Material with subtle specular sheen
        floor: new THREE.MeshStandardMaterial({
          color: isDarkMode ? this.colors.floorDark : this.colors.floorLight,
          roughness: 0.6,
          metalness: 0.2
        }),

        // 99% Benchmark Target Sheet (Glowing translucent plane)
        targetPlane: new THREE.MeshStandardMaterial({
          color: 0x00E676,
          transparent: true,
          opacity: 0.28,
          side: THREE.DoubleSide,
          emissive: 0x00E676,
          emissiveIntensity: 0.4
        }),

        // Gold Ring for Critical Equipment Spotlight
        goldRing: new THREE.MeshBasicMaterial({
          color: this.colors.statusGold,
          wireframe: false,
          transparent: true,
          opacity: 0.85
        }),

        // Pulsing Alert Beacon Material
        alertBeacon: new THREE.MeshBasicMaterial({
          color: 0xFF1744,
          transparent: true,
          opacity: 0.75
        }),

        // Grid Materials
        gridPrimary: this.colors.brandRed,
        gridSecondary: isDarkMode ? this.colors.gridDark : this.colors.gridLight
      };
    }
  };

})(window);
