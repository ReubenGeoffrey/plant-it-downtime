/**
 * 3d/PlantMap3D.js
 * Isometric Plant Floor Map, Procedural Machine Models, Alert Beacons, Open Incident Tower & Digital Twin.
 * Plant IT Downtime Management Portal
 */

(function(window) {
  "use strict";

  class YokohamaPlantMap3D {
    constructor(sceneManager) {
      this.sm = sceneManager;
      this.THREE = sceneManager.THREE;
      this.mapGroup = null;
      this.labelsGroup = null;
      this.interactiveBlocks = [];
      this.interactiveMachines = [];
    }

    // Creates dynamic text sprites
    createTextSprite(text, bgColor = "rgba(15, 23, 42, 0.85)", textColor = "#FFFFFF", scale = 1.0) {
      const T = this.THREE;
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 72;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(8, 8, 240, 56, 14);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = textColor;
      ctx.font = "bold 22px 'JetBrains Mono', monospace";
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

    // Renders the full 3D Isometric Plant Floor & Machinery
    render() {
      const T = this.THREE;
      this.sm.clearContent();
      this.interactiveBlocks = [];
      this.interactiveMachines = [];

      this.mapGroup = new T.Group();
      this.labelsGroup = new T.Group();
      this.sm.contentGroup.add(this.mapGroup);
      this.sm.contentGroup.add(this.labelsGroup);

      const blocksData = window.Yokohama3DDataAdapter.getPlantMapData();
      if (!blocksData || blocksData.length === 0) return;

      // 1. Render Area Zone Blocks
      blocksData.forEach((block) => {
        const bHeight = block.height;
        const bGeo = new T.BoxGeometry(block.width, bHeight, block.depth);
        bGeo.translate(0, bHeight / 2, 0);

        const bMat = new T.MeshStandardMaterial({
          color: block.statusColor,
          roughness: 0.5,
          metalness: 0.1,
          transparent: true,
          opacity: 0.92
        });

        const bMesh = new T.Mesh(bGeo, bMat);
        bMesh.position.set(block.x, 0, block.z);
        bMesh.receiveShadow = true;
        bMesh.castShadow = true;

        bMesh.userData = {
          type: "plantBlock",
          area: block.area,
          dtHours: block.dtHours,
          availPercent: block.availPercent,
          openCount: block.openCount
        };

        this.mapGroup.add(bMesh);
        this.interactiveBlocks.push(bMesh);

        // Area Badge Label
        const badge = this.createTextSprite(
          `${block.area} (${block.availPercent}%)`,
          "rgba(10, 15, 29, 0.9)",
          block.statusHex,
          0.85
        );
        badge.position.set(block.x, bHeight + 1.2, block.z);
        this.labelsGroup.add(badge);

        // 2. Render Procedural Machine Models on top of this Area block
        block.machines.forEach(mach => {
          this.renderMachineModel(mach, block);
        });
      });

      // 3. Render Open Incidents Tower at Stage Corner
      this.renderOpenIncidentsTower();

      // Return sector center coordinates for Digital Twin camera fly-through
      return blocksData.map(b => ({ id: b.id, name: b.area, x: b.x, z: b.z }));
    }

    // Procedural Low-Poly Machinery Models (<200 KB GPU memory footprint)
    renderMachineModel(mach, block) {
      const T = this.THREE;
      const machGroup = new T.Group();
      machGroup.position.set(mach.x, mach.y, mach.z);

      const isFaulted = mach.hasOpenIncident;
      const isCrit = mach.isCritical;

      // Base Machine Material
      const bodyColor = isFaulted ? 0xFF1744 : (isCrit ? 0xF59E0B : 0x475569);
      const bodyMat = new T.MeshStandardMaterial({
        color: bodyColor,
        roughness: 0.4,
        metalness: 0.3
      });

      if (mach.type === "conveyor") {
        // Conveyor Belt: Low wide box with rollers
        const convGeo = new T.BoxGeometry(1.2, 0.35, 0.6);
        const convMesh = new T.Mesh(convGeo, bodyMat);
        convMesh.position.y = 0.2;
        convMesh.castShadow = true;
        machGroup.add(convMesh);

        // Roller legs
        const legGeo = new T.CylinderGeometry(0.04, 0.04, 0.35, 8);
        const legMat = new T.MeshStandardMaterial({ color: 0x1E293B });
        [-0.45, 0.45].forEach(lx => {
          [-0.2, 0.2].forEach(lz => {
            const leg = new T.Mesh(legGeo, legMat);
            leg.position.set(lx, -0.05, lz);
            machGroup.add(leg);
          });
        });
      } else if (mach.type === "press") {
        // Curing Press: Vertical pillars and top hydraulic cylinder
        const baseGeo = new T.BoxGeometry(0.9, 0.3, 0.8);
        const baseMesh = new T.Mesh(baseGeo, bodyMat);
        baseMesh.position.y = 0.15;
        machGroup.add(baseMesh);

        // Hydraulic Cylinder on top
        const cylGeo = new T.CylinderGeometry(0.18, 0.18, 0.65, 12);
        const cylMesh = new T.Mesh(cylGeo, bodyMat);
        cylMesh.position.y = 0.6;
        cylMesh.castShadow = true;
        machGroup.add(cylMesh);
      } else if (mach.type === "server") {
        // Server Rack: Tall black cabinet with blinker slits
        const rackGeo = new T.BoxGeometry(0.6, 1.2, 0.6);
        const rackMat = new T.MeshStandardMaterial({ color: 0x0F172A, roughness: 0.2, metalness: 0.5 });
        const rack = new T.Mesh(rackGeo, rackMat);
        rack.position.y = 0.6;
        rack.castShadow = true;
        machGroup.add(rack);

        // Blue/Green LED Strip
        const ledGeo = new T.BoxGeometry(0.4, 0.04, 0.02);
        const ledMat = new T.MeshBasicMaterial({ color: 0x00E676 });
        const led = new T.Mesh(ledGeo, ledMat);
        led.position.set(0, 0.8, 0.31);
        machGroup.add(led);
      } else {
        // Default Workstation Box / Scanner
        const boxGeo = new T.BoxGeometry(0.7, 0.6, 0.7);
        const boxMesh = new T.Mesh(boxGeo, bodyMat);
        boxMesh.position.y = 0.3;
        boxMesh.castShadow = true;
        machGroup.add(boxMesh);
      }

      // Critical Equipment Spotlight: Gold Ground Ring Marker
      if (isCrit) {
        const ringGeo = new T.RingGeometry(0.75, 0.9, 24);
        const ringMat = new T.MeshBasicMaterial({ color: 0xF59E0B, side: T.DoubleSide });
        const ring = new T.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.02;
        machGroup.add(ring);
      }

      // Active Outage: Pulsing Holographic Alert Beacon
      if (isFaulted) {
        const beaconGeo = new T.ConeGeometry(0.35, 1.1, 16, 1, true);
        beaconGeo.translate(0, 0.55, 0);
        const beaconMat = new T.MeshBasicMaterial({
          color: 0xFF1744,
          transparent: true,
          opacity: 0.8,
          side: T.DoubleSide
        });
        const beacon = new T.Mesh(beaconGeo, beaconMat);
        beacon.position.y = 1.0;
        beacon.userData = { isBeacon: true };
        machGroup.add(beacon);

        // Beacon Point Light
        const alertLight = new T.PointLight(0xFF1744, 0.8, 4);
        alertLight.position.set(0, 1.2, 0);
        machGroup.add(alertLight);
      }

      machGroup.userData = {
        type: "machine",
        code: mach.code,
        area: mach.area,
        isCritical: isCrit,
        hasOpenIncident: isFaulted,
        totalDtMins: mach.totalDtMins
      };

      this.mapGroup.add(machGroup);
      this.interactiveMachines.push(machGroup);
    }

    // 3. Open Incidents Age Tower (<24h, 2-7d, >7d Stacks)
    renderOpenIncidentsTower() {
      const T = this.THREE;
      const towerData = window.Yokohama3DDataAdapter.getIncidentTowerData();
      if (!towerData) return;

      const towerGroup = new T.Group();
      towerGroup.position.set(16, 0, -10); // Placed at top-right quadrant of plant floor

      // Title Tag
      const titleTag = this.createTextSprite("INCIDENTS BY AGE", "rgba(10, 15, 29, 0.95)", "#FFFFFF", 0.85);
      titleTag.position.set(0, 7.5, 0);
      this.labelsGroup.add(titleTag);

      let currentY = 0;
      towerData.forEach((bucket, idx) => {
        const height = Math.max(0.6, bucket.count * 0.8);
        const geo = new T.CylinderGeometry(1.6 - idx * 0.2, 1.8 - idx * 0.2, height, 24);
        geo.translate(0, height / 2, 0);

        const mat = new T.MeshStandardMaterial({
          color: bucket.color,
          roughness: 0.3,
          metalness: 0.2,
          emissive: bucket.color,
          emissiveIntensity: 0.15
        });

        const cyl = new T.Mesh(geo, mat);
        cyl.position.y = currentY;
        cyl.castShadow = true;
        towerGroup.add(cyl);

        // Badge on cylinder
        const badge = this.createTextSprite(
          `${bucket.label}: ${bucket.count}`,
          "rgba(15, 23, 42, 0.9)",
          bucket.colorHex,
          0.7
        );
        badge.position.set(16, currentY + height / 2, -10);
        this.labelsGroup.add(badge);

        currentY += height + 0.15;
      });

      this.mapGroup.add(towerGroup);
    }
  }

  window.YokohamaPlantMap3D = YokohamaPlantMap3D;

})(window);
