/**
 * 3d/Scene.js
 * Core Three.js Scene, Camera, Lighting, Responsive Viewport, Render Loop & Disposal Manager.
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  class Yokohama3DScene {
    constructor(canvasElement, options = {}) {
      this.canvas = canvasElement;
      this.options = Object.assign({
        quality: "auto",
        isDarkMode: true,
        enableControls: true,
        onFpsUpdate: null
      }, options);

      this.THREE = window.THREE || null;
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
      this.lights = {};
      this.floorGroup = null;
      this.contentGroup = null;

      this.animId = null;
      this.isRendering = false;
      this.isDisposed = false;

      // Camera State
      this.defaultCameraPos = { x: 0, y: 22, z: 32 };
      this.defaultLookAt = { x: 0, y: 3, z: 0 };
      this.cameraTarget = { x: 0, y: 3, z: 0 };

      // FPS Monitoring & Auto Quality
      this.frameCount = 0;
      this.lastFpsUpdate = performance.now();
      this.currentFps = 60;
      this.lowFpsDuration = 0;
      this.currentQuality = this.options.quality;

      // Orbit / Mouse State
      this.mouse = { x: 0, y: 0 };
      this.isDragging = false;
      this.previousMouse = { x: 0, y: 0 };
      this.spherical = { radius: 38, theta: 0, phi: Math.PI / 4 }; // Spherical coords for camera orbit
      this.targetSpherical = { radius: 38, theta: 0, phi: Math.PI / 4 };

      // Digital Twin Fly-Through State
      this.isFlyingThrough = false;
      this.flyThroughTimer = 0;
      this.flyThroughIndex = 0;
    }

    // Dynamic Loader for Three.js and OrbitControls
    static async ensureThreeLoaded() {
      if (window.THREE) return window.THREE;

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js";
        script.async = true;
        script.onload = () => {
          resolve(window.THREE);
        };
        script.onerror = () => {
          reject(new Error("Failed to load Three.js from CDN"));
        };
        document.head.appendChild(script);
      });
    }

    // Initializes Scene, Camera, Lights, Grid
    init() {
      this.THREE = window.THREE;
      if (!this.THREE) {
        throw new Error("Three.js not loaded. Call ensureThreeLoaded() first.");
      }

      const container = this.canvas.parentElement;
      const w = container ? container.clientWidth : 800;
      const h = container ? container.clientHeight : 500;

      // 1. Scene
      this.scene = new this.THREE.Scene();
      const bgHex = this.options.isDarkMode ? 0x080B11 : 0xF8FAFC;
      this.scene.background = new this.THREE.Color(bgHex);
      this.scene.fog = new this.THREE.FogExp2(bgHex, 0.012);

      // 2. Camera
      this.camera = new this.THREE.PerspectiveCamera(45, w / h, 0.5, 1000);
      this.camera.position.set(this.defaultCameraPos.x, this.defaultCameraPos.y, this.defaultCameraPos.z);
      this.camera.lookAt(this.defaultLookAt.x, this.defaultLookAt.y, this.defaultLookAt.z);

      // 3. WebGL Renderer
      const qConfig = window.Yokohama3DTheme.qualityLevels[this.currentQuality] || window.Yokohama3DTheme.qualityLevels.auto;
      
      try {
        this.renderer = new this.THREE.WebGLRenderer({
          canvas: this.canvas,
          antialias: qConfig.antialias,
          alpha: false,
          powerPreference: "high-performance"
        });
      } catch (err) {
        throw new Error("WebGL context creation failed: " + err.message);
      }

      this.renderer.setSize(w, h);
      this.renderer.setPixelRatio(qConfig.maxPixelRatio);
      if (qConfig.shadows) {
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = this.THREE.PCFSoftShadowMap;
      }

      // 4. Content Groups
      this.floorGroup = new this.THREE.Group();
      this.contentGroup = new this.THREE.Group();
      this.scene.add(this.floorGroup);
      this.scene.add(this.contentGroup);

      // 5. Lighting Setup (Soft Three-Point Lighting)
      this.setupLighting();

      // 6. Reflective Floor Grid
      this.setupFloorGrid();

      // 7. Input Controls (Mouse Drag, Touch, Wheel)
      if (this.options.enableControls) {
        this.setupInteractionHandlers();
      }

      // 8. Resize Listener
      this.resizeHandler = () => this.onResize();
      window.addEventListener("resize", this.resizeHandler);

      // Start Animation Loop
      this.isRendering = true;
      this.startLoop();

      return this;
    }

    setupLighting() {
      const T = this.THREE;
      const isDark = this.options.isDarkMode;

      // 1. Ambient Fill Light
      this.lights.ambient = new T.AmbientLight(0xFFFFFF, isDark ? 0.75 : 0.9);
      this.scene.add(this.lights.ambient);

      // 2. Key Directional Light with soft shadows
      this.lights.key = new T.DirectionalLight(0xFFFFFF, isDark ? 1.1 : 1.3);
      this.lights.key.position.set(18, 30, 22);
      this.lights.key.castShadow = true;
      this.lights.key.shadow.mapSize.width = 1024;
      this.lights.key.shadow.mapSize.height = 1024;
      this.lights.key.shadow.camera.near = 10;
      this.lights.key.shadow.camera.far = 80;
      this.lights.key.shadow.camera.left = -25;
      this.lights.key.shadow.camera.right = 25;
      this.lights.key.shadow.camera.top = 25;
      this.lights.key.shadow.camera.bottom = -25;
      this.lights.key.shadow.bias = -0.0005;
      this.scene.add(this.lights.key);

      // 3. Rim / Fill Light
      this.lights.fill = new T.DirectionalLight(0x38BDF8, 0.4);
      this.lights.fill.position.set(-20, 15, -15);
      this.scene.add(this.lights.fill);

      // 4. Yokohama Red Accent Light (Adds corporate identity to 3D stage)
      this.lights.brandAccent = new T.PointLight(0xE60012, 0.9, 45);
      this.lights.brandAccent.position.set(0, 14, 0);
      this.scene.add(this.lights.brandAccent);
    }

    setupFloorGrid() {
      const T = this.THREE;
      const isDark = this.options.isDarkMode;
      const gridPrimary = window.Yokohama3DTheme.colors.brandRed;
      const gridSecondary = isDark ? 0x1E293B : 0xCBD5E1;

      // 1. Grid Helper
      const grid = new T.GridHelper(44, 22, gridPrimary, gridSecondary);
      grid.position.y = 0;
      this.floorGroup.add(grid);

      // 2. Translucent Stage Ground Plane
      const groundGeo = new T.PlaneGeometry(60, 60);
      const groundMat = new T.MeshStandardMaterial({
        color: isDark ? 0x0A0F1D : 0xF1F5F9,
        roughness: 0.8,
        metalness: 0.1,
        transparent: true,
        opacity: 0.85
      });
      const ground = new T.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -0.05;
      ground.receiveShadow = true;
      this.floorGroup.add(ground);
    }

    setupInteractionHandlers() {
      const c = this.canvas;

      // Mouse Drag Orbit
      c.addEventListener("mousedown", (e) => {
        if (this.isFlyingThrough) this.pauseFlyThrough();
        this.isDragging = true;
        this.previousMouse.x = e.clientX;
        this.previousMouse.y = e.clientY;
      });

      window.addEventListener("mouseup", () => {
        this.isDragging = false;
      });

      c.addEventListener("mousemove", (e) => {
        if (!this.isDragging) return;
        const deltaX = e.clientX - this.previousMouse.x;
        const deltaY = e.clientY - this.previousMouse.y;

        this.targetSpherical.theta -= deltaX * 0.007;
        this.targetSpherical.phi = Math.max(0.15, Math.min(Math.PI / 2.1, this.targetSpherical.phi - deltaY * 0.007));

        this.previousMouse.x = e.clientX;
        this.previousMouse.y = e.clientY;
      });

      // Mouse Wheel Zoom
      c.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (this.isFlyingThrough) this.pauseFlyThrough();
        this.targetSpherical.radius = Math.max(14, Math.min(65, this.targetSpherical.radius + e.deltaY * 0.04));
      }, { passive: false });

      // Double Click to Reset View
      c.addEventListener("dblclick", () => {
        this.resetCamera();
      });

      // Touch Gestures (Pinch to Zoom & Touch Drag)
      let touchStartDist = 0;
      c.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          this.isDragging = true;
          this.previousMouse.x = e.touches[0].clientX;
          this.previousMouse.y = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
          touchStartDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
        }
      }, { passive: true });

      c.addEventListener("touchmove", (e) => {
        if (e.touches.length === 1 && this.isDragging) {
          const deltaX = e.touches[0].clientX - this.previousMouse.x;
          const deltaY = e.touches[0].clientY - this.previousMouse.y;

          this.targetSpherical.theta -= deltaX * 0.008;
          this.targetSpherical.phi = Math.max(0.15, Math.min(Math.PI / 2.1, this.targetSpherical.phi - deltaY * 0.008));

          this.previousMouse.x = e.touches[0].clientX;
          this.previousMouse.y = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
          const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const delta = touchStartDist - dist;
          this.targetSpherical.radius = Math.max(14, Math.min(65, this.targetSpherical.radius + delta * 0.08));
          touchStartDist = dist;
        }
      }, { passive: true });

      c.addEventListener("touchend", () => {
        this.isDragging = false;
      });

      // Keyboard Controls
      window.addEventListener("keydown", (e) => {
        if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT")) return;
        if (e.key === "ArrowLeft") this.targetSpherical.theta += 0.08;
        else if (e.key === "ArrowRight") this.targetSpherical.theta -= 0.08;
        else if (e.key === "ArrowUp") this.targetSpherical.phi = Math.max(0.15, this.targetSpherical.phi - 0.06);
        else if (e.key === "ArrowDown") this.targetSpherical.phi = Math.min(Math.PI / 2.1, this.targetSpherical.phi + 0.06);
        else if (e.key === "+" || e.key === "=") this.targetSpherical.radius = Math.max(14, this.targetSpherical.radius - 2);
        else if (e.key === "-") this.targetSpherical.radius = Math.min(65, this.targetSpherical.radius + 2);
        else if (e.key.toLowerCase() === "r") this.resetCamera();
      });
    }

    // Smooth Orbit & Damping Physics
    updateCamera() {
      if (!this.camera) return;

      // Damping interpolation
      const damping = 0.08;
      this.spherical.radius += (this.targetSpherical.radius - this.spherical.radius) * damping;
      this.spherical.theta += (this.targetSpherical.theta - this.spherical.theta) * damping;
      this.spherical.phi += (this.targetSpherical.phi - this.spherical.phi) * damping;

      if (!this.isFlyingThrough) {
        // Convert Spherical to Cartesian Coordinates
        const sinPhiRadius = Math.sin(this.spherical.phi) * this.spherical.radius;
        this.camera.position.x = this.cameraTarget.x + sinPhiRadius * Math.sin(this.spherical.theta);
        this.camera.position.y = this.cameraTarget.y + Math.cos(this.spherical.phi) * this.spherical.radius;
        this.camera.position.z = this.cameraTarget.z + sinPhiRadius * Math.cos(this.spherical.theta);

        this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
      }
    }

    // Smooth Camera Fly-To Animation
    flyCameraTo(targetPos, lookAtPos = { x: 0, y: 3, z: 0 }, duration = 800, callback = null) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        this.camera.position.set(targetPos.x, targetPos.y, targetPos.z);
        this.cameraTarget = Object.assign({}, lookAtPos);
        this.camera.lookAt(lookAtPos.x, lookAtPos.y, lookAtPos.z);
        if (callback) callback();
        return;
      }

      const startPos = { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z };
      const startLook = { x: this.cameraTarget.x, y: this.cameraTarget.y, z: this.cameraTarget.z };
      const startTime = performance.now();

      const animateFly = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = window.Yokohama3DTheme.easing.easeOutCubic(progress);

        this.camera.position.x = startPos.x + (targetPos.x - startPos.x) * ease;
        this.camera.position.y = startPos.y + (targetPos.y - startPos.y) * ease;
        this.camera.position.z = startPos.z + (targetPos.z - startPos.z) * ease;

        this.cameraTarget.x = startLook.x + (lookAtPos.x - startLook.x) * ease;
        this.cameraTarget.y = startLook.y + (lookAtPos.y - startLook.y) * ease;
        this.cameraTarget.z = startLook.z + (lookAtPos.z - startLook.z) * ease;

        this.camera.lookAt(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);

        if (progress < 1) {
          requestAnimationFrame(animateFly);
        } else {
          // Recompute spherical angles from new position
          const dx = this.camera.position.x - this.cameraTarget.x;
          const dy = this.camera.position.y - this.cameraTarget.y;
          const dz = this.camera.position.z - this.cameraTarget.z;
          const r = Math.sqrt(dx * dx + dy * dy + dz * dz);
          this.spherical.radius = r;
          this.targetSpherical.radius = r;
          this.spherical.theta = Math.atan2(dx, dz);
          this.targetSpherical.theta = this.spherical.theta;
          this.spherical.phi = Math.acos(Math.max(-1, Math.min(1, dy / r)));
          this.targetSpherical.phi = this.spherical.phi;

          if (callback) callback();
        }
      };

      requestAnimationFrame(animateFly);
    }

    // Reset Camera to Default
    resetCamera() {
      this.targetSpherical = { radius: 38, theta: 0, phi: Math.PI / 4 };
      this.cameraTarget = Object.assign({}, this.defaultLookAt);
    }

    // Digital Twin Mode Fly-Through
    startFlyThrough(sectors = []) {
      if (sectors.length === 0) return;
      this.isFlyingThrough = true;
      this.flyThroughSectors = sectors;
      this.flyThroughIndex = 0;
      this.nextFlyThroughSector();
    }

    nextFlyThroughSector() {
      if (!this.isFlyingThrough || !this.flyThroughSectors) return;
      const sec = this.flyThroughSectors[this.flyThroughIndex];
      const targetCam = { x: sec.x * 0.7, y: 15, z: sec.z + 18 };
      const targetLook = { x: sec.x, y: 2, z: sec.z };

      this.flyCameraTo(targetCam, targetLook, 1800, () => {
        if (!this.isFlyingThrough) return;
        setTimeout(() => {
          if (!this.isFlyingThrough) return;
          this.flyThroughIndex = (this.flyThroughIndex + 1) % this.flyThroughSectors.length;
          this.nextFlyThroughSector();
        }, 3000);
      });
    }

    pauseFlyThrough() {
      this.isFlyingThrough = false;
    }

    // Dynamic Viewport Resize
    onResize() {
      if (!this.renderer || !this.camera || this.isDisposed) return;
      const container = this.canvas.parentElement;
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    }

    // Set Quality Mode (Auto, High, Low)
    setQuality(mode) {
      this.currentQuality = mode;
      const q = window.Yokohama3DTheme.qualityLevels[mode] || window.Yokohama3DTheme.qualityLevels.auto;
      if (!this.renderer) return;

      this.renderer.setPixelRatio(q.maxPixelRatio);
      this.renderer.shadowMap.enabled = q.shadows;
      this.onResize();
    }

    // Animation & Render Loop with Adaptive Quality Throttling
    startLoop() {
      const renderFrame = (now) => {
        if (this.isDisposed) return;
        this.animId = requestAnimationFrame(renderFrame);

        // Frame Rate Measurement
        this.frameCount++;
        if (now - this.lastFpsUpdate >= 1000) {
          this.currentFps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
          this.frameCount = 0;
          this.lastFpsUpdate = now;

          if (this.options.onFpsUpdate) {
            this.options.onFpsUpdate(this.currentFps, this.currentQuality);
          }

          // Adaptive Quality Downgrade if FPS drops below 40 in Auto mode
          if (this.currentQuality === "auto") {
            if (this.currentFps < 40) {
              this.lowFpsDuration += 1;
              if (this.lowFpsDuration >= 3) {
                // Drop shadows and reduce pixel ratio
                this.renderer.shadowMap.enabled = false;
                this.renderer.setPixelRatio(1);
              }
            } else {
              this.lowFpsDuration = 0;
            }
          }
        }

        // Camera Physics & Controls
        this.updateCamera();

        // Animate content children (e.g. beacons, alert pulse)
        if (this.contentGroup) {
          const t = now * 0.003;
          this.contentGroup.traverse((obj) => {
            if (obj.userData && obj.userData.isBeacon) {
              const pulse = Math.sin(t * 3) * 0.2 + 0.8;
              obj.scale.set(pulse, 1 + Math.sin(t * 4) * 0.3, pulse);
            }
          });
        }

        this.renderer.render(this.scene, this.camera);
      };

      this.animId = requestAnimationFrame(renderFrame);
    }

    // Pause Loop (e.g., when 3D tab is hidden)
    pause() {
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
      this.isRendering = false;
    }

    resume() {
      if (!this.isRendering && !this.isDisposed) {
        this.isRendering = true;
        this.startLoop();
      }
    }

    // Clear Content Group
    clearContent() {
      if (!this.contentGroup) return;
      while (this.contentGroup.children.length > 0) {
        const obj = this.contentGroup.children[0];
        this.disposeObject(obj);
        this.contentGroup.remove(obj);
      }
    }

    // Recursively Dispose Geometry & Materials (Prevents WebGL Memory Leaks)
    disposeObject(obj) {
      if (!obj) return;
      if (obj.geometry) {
        obj.geometry.dispose();
      }
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
      if (obj.children && obj.children.length > 0) {
        obj.children.forEach(child => this.disposeObject(child));
      }
    }

    // Total Lifecycle Teardown
    dispose() {
      this.isDisposed = true;
      this.pause();
      window.removeEventListener("resize", this.resizeHandler);

      this.clearContent();

      if (this.floorGroup) {
        while (this.floorGroup.children.length > 0) {
          const obj = this.floorGroup.children[0];
          this.disposeObject(obj);
          this.floorGroup.remove(obj);
        }
      }

      if (this.renderer) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.renderer = null;
      }

      this.scene = null;
      this.camera = null;
    }
  }

  window.Yokohama3DScene = Yokohama3DScene;

})(window);
