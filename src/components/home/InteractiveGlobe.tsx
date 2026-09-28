import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe as GlobeIcon } from 'lucide-react';

interface TradeHub {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
  type: 'sourcing' | 'destination';
  stats: string;
  transit: string;
  vessels: string;
  details: string;
}

const TRADE_HUBS: TradeHub[] = [
  {
    id: 'cn-shanghai',
    name: 'Asia-Pacific Core',
    city: 'Ningbo & Shanghai',
    lat: 30.5,
    lng: 121.5,
    type: 'sourcing',
    stats: '320+ Audited Factories',
    transit: 'Origin Port',
    vessels: '18 Weekly Sailings',
    details: 'Primary OEM/ODM appliance export clusters with dedicated deepwater container berths.',
  },
  {
    id: 'cn-shunde',
    name: 'South China Belt',
    city: 'Shunde & Foshan',
    lat: 22.8,
    lng: 113.3,
    type: 'sourcing',
    stats: 'Kitchenware & Climate Hub',
    transit: 'Origin Port',
    vessels: '14 Weekly Sailings',
    details: 'World capital for induction, ovens, air fryers, and small domestic appliances.',
  },
  {
    id: 'eu-rotterdam',
    name: 'European Gateway',
    city: 'Rotterdam & Hamburg',
    lat: 51.9,
    lng: 4.5,
    type: 'destination',
    stats: '18 Direct Gateways',
    transit: '26 - 30 Days (Direct)',
    vessels: 'Maersk / MSC / COSCO',
    details: 'North-West European distribution corridors with CE/CB customs clearance.',
  },
  {
    id: 'me-dubai',
    name: 'Middle East & Africa',
    city: 'Jebel Ali (Dubai)',
    lat: 25.2,
    lng: 55.3,
    type: 'destination',
    stats: '16 Regional Hubs',
    transit: '14 - 18 Days (Direct)',
    vessels: 'CMA CGM / Hapag-Lloyd',
    details: 'Deepwater transshipment hub connecting GCC, Red Sea, and East African markets.',
  },
  {
    id: 'na-la',
    name: 'North America',
    city: 'Los Angeles / Long Beach',
    lat: 33.7,
    lng: -118.2,
    type: 'destination',
    stats: '14 Deepwater Ports',
    transit: '12 - 16 Days (Trans-Pacific)',
    vessels: 'ONE / Evergreen / COSCO',
    details: 'Trans-Pacific logistics corridor serving continental distribution centers.',
  },
  {
    id: 'sa-santos',
    name: 'Latin America',
    city: 'Port of Santos',
    lat: -23.9,
    lng: -46.3,
    type: 'destination',
    stats: '8 Maritime Corridors',
    transit: '32 - 38 Days (Atlantic Line)',
    vessels: 'Hamburg Süd / MSC',
    details: 'South America Atlantic shipping bridge with scheduled feeder services.',
  },
  {
    id: 'au-sydney',
    name: 'Oceania Line',
    city: 'Port of Sydney',
    lat: -33.8,
    lng: 151.2,
    type: 'destination',
    stats: '6 Regional Hubs',
    transit: '14 - 18 Days (Direct)',
    vessels: 'ANL / Maersk',
    details: 'Direct Australasian shipping link with RCM compliance checks.',
  },
];

const TRADE_LANES = [
  { from: [30.5, 121.5], to: [51.9, 4.5], color: 0x4ade80, name: 'Suez - Europe Express' },
  { from: [30.5, 121.5], to: [33.7, -118.2], color: 0x38bdf8, name: 'Trans-Pacific Fast-Track' },
  { from: [22.8, 113.3], to: [25.2, 55.3], color: 0x4ade80, name: 'Arabian Gulf Gateway' },
  { from: [30.5, 121.5], to: [-23.9, -46.3], color: 0x818cf8, name: 'Atlantic Latin America' },
  { from: [22.8, 113.3], to: [-33.8, 151.2], color: 0x38bdf8, name: 'Oceania Direct' },
  { from: [22.8, 113.3], to: [-29.8, 31.0], color: 0x4ade80, name: 'East Africa Cape Line' },
  { from: [30.5, 121.5], to: [1.3, 103.8], color: 0x4ade80, name: 'Strait of Malacca Transit' },
];

// Helper: Convert Lat/Lng to Vector3 on sphere of given radius
function latLngToVector(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Embedded high-contrast world map image to extract crisp land coordinates
const WORLD_MAP_BASE64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAECklEQVR42u3VsW4jRRzH8d94gzfF4Q0VQaC4vBLTRTp0mze4ggfAPAE5XQEFsGNAVIjwBrmW7h7gJE+giKjyABTZE4g06LKJETdRJvtD65kdz6yduKABiW+TVfzRf2bXYxtcE/59YJCz6YdbgQF6ACSRrwYKYImmh5PbwOewlV3wlQNbAN6SEExjUOO+BU0aCSnxReHABUlK4YFQeJeUT3da8IIkZ6NGoSnFY5KsMoVzMKfECUnqxgPYRArarmUCndHwzIEaQEpg5xVdBXROl8mpAQx5dUgPiHoYAAkg5w3JABR06byGAVgcRGAz5bznj6phBQNRFwyqgdxebH6gshJAesWoFhgYpApAFoG8BIZ/fEhSox5jDjQXmV0Ar5XJfAIrALi3URVs09gHIL4XJCkLC5LH9JWiArABFCSrQjdgkBzRJ0WJeUOSNyQAfJJwUSWUBRlJQ8oGHATACGlBynnzy2kEYLNjrxouigD8BZcgOeVPqh12RtufaCN5wCPVDpvQ9lsIrqndsJtDcWqBCpf4hWN7OdWHBw58FwIaNOU/n1TpMW2DFaD48cmr4185T8NHkpUFX749pQPVdgRKC/DGoQPVeAEKv+WHvY8OOWNTPRp5kHuwSf8wzXtVBKR7YwEH9H3lQUaypUfSATOALyVNu5vZJW31Bnx98nkLfDUWJaz6ixvm+RIQRdl3kmRxxiaDoGnZW4CpPfkaQadlcPim1xOSvETQo7Lv75enVAXJ3xGUlony4KQBBWUM1NiDc6qhyS8RgQs18OCMMtPDaAUIyg0PZkRWDqs+wnKJBTDI1Js6BolegOsKmUxNDBAAKqQyMQmidhegBlLZ+wwKYdv5M/8x1khkb1cgKqP2H+MKyV5vS+whrE8DQDgAlUAoRBX056EElJCjJVACeJBZgNfVp+iCCm4RBWCgKsRxASSA9KgDhDtCiTuMyfHsKXzhC6wNAIjjWb8LKAOA2ctk3FmCOlgKFy8f1N0JJtgsxinYnVAHt4t3gPzZXSCTyCWCQmBT91QE3B5yarSN40dNHYPka4TlDhTUI8zLvl0JSL3vZn6DsCFZOeB2yROEpR68sECQQA++xIGCR2X7DwlEoLRgUrZrqlUg50S1uy43YqDcN6UFBVkhAjWiCV2Q0jgQPdplMKxvBXodcOfAwJYvgdL+1etA1YJJfBcZlQV7sO1i2gHoNiyxtQ5sBsCgWyoxCHiFFd2L5nUTCqMAqGUgsQ9f5kCcCiZgRYkMgMTd5WsB1rTzj0Em14BE4r+QxN1lCEsVur2PoF5Wbg8RJXR4djgvBgauhLywoEZQrt1KKRdVS4CdlJ8qafyP+9KIj/nE/d7kKwH9jgS72e9DV+kvfTWgct4ZyP8Byb8BPG7MaaIIkAQAAAAASUVORK5CYII=';

export const InteractiveGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHub, setActiveHub] = useState<TradeHub>(TRADE_HUBS[0]);

  // Interactive rotation target tracking
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || width;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 310);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const GLOBE_RADIUS = 95;

    // Root Globe Group for interactive rotation
    const globeGroup = new THREE.Group();
    // Default initial orientation: Tilt slightly so North hemisphere and Asia face camera
    globeGroup.rotation.y = -1.2;
    globeGroup.rotation.x = 0.25;
    scene.add(globeGroup);

    // 2. Base Ocean Core Sphere
    const oceanGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 0.5, 64, 64);
    const oceanMat = new THREE.MeshPhongMaterial({
      color: 0x051433,
      emissive: 0x030a1c,
      shininess: 25,
      transparent: true,
      opacity: 0.94,
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    globeGroup.add(oceanMesh);

    // 3. Grid Latitude & Longitude Graticule Wireframe
    const gridGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 0.2, 36, 18);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 4. Luminous Atmospheric Rim Glow (Fresnel Shader)
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const atmosphereFragmentShader = `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.6);
        vec3 glowColor = mix(vec3(0.12, 0.45, 1.0), vec3(0.29, 0.87, 0.50), vNormal.y * 0.5 + 0.5);
        gl_FragColor = vec4(glowColor, 1.0) * intensity * 1.5;
      }
    `;
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.14, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // 5. Continents Point Cloud (Sampling the monochrome world map)
    const pointsGeo = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];

    const mapImage = new Image();
    mapImage.crossOrigin = 'anonymous';
    mapImage.onload = () => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = mapImage.width;
      offCanvas.height = mapImage.height;
      const ctx = offCanvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(mapImage, 0, 0);
      const imgData = ctx.getImageData(0, 0, offCanvas.width, offCanvas.height);
      const data = imgData.data;

      // Sample image grid
      const stepX = 2;
      const stepY = 2;

      for (let y = 0; y < offCanvas.height; y += stepY) {
        const lat = 90 - (y / offCanvas.height) * 180;
        for (let x = 0; x < offCanvas.width; x += stepX) {
          const lng = (x / offCanvas.width) * 360 - 180;
          const idx = (y * offCanvas.width + x) * 4;
          const brightness = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;

          if (brightness > 45) {
            // Land Point: Bright, high-contrast neon cyan & emerald
            const vec = latLngToVector(lat, lng, GLOBE_RADIUS + 0.6);
            positions.push(vec.x, vec.y, vec.z);

            // Shading: Subtle latitude gradient (warmer emerald in temperate trade zones, cyan elsewhere)
            if (lat > 15 && lat < 55 && lng > 90 && lng < 140) {
              // East Asia core hub highlight: Brilliant gold-emerald
              colors.push(0.48, 0.95, 0.62);
              sizes.push(2.2);
            } else if (lat > 35 && lat < 65 && lng > -15 && lng < 40) {
              // Europe corridor
              colors.push(0.35, 0.85, 0.98);
              sizes.push(1.8);
            } else {
              colors.push(0.25, 0.65, 0.95);
              sizes.push(1.4);
            }
          }
        }
      }

      pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      pointsGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      // Particle shader for smooth antialiased circular dots
      const pointShaderMat = new THREE.ShaderMaterial({
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (260.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = smoothstep(0.5, 0.1, dist);
            gl_FragColor = vec4(vColor, alpha * 0.9);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      const landPoints = new THREE.Points(pointsGeo, pointShaderMat);
      globeGroup.add(landPoints);
    };
    mapImage.src = WORLD_MAP_BASE64;

    // 6. 3D Curved Maritime Trade Lanes with Animated Vessel Pulses
    const curves: { curve: THREE.QuadraticBezierCurve3; color: number; name: string }[] = [];
    const pulses: { mesh: THREE.Mesh; curveIndex: number; progress: number; speed: number }[] = [];

    const curveLineGroup = new THREE.Group();
    globeGroup.add(curveLineGroup);

    TRADE_LANES.forEach((lane, idx) => {
      const p1 = latLngToVector(lane.from[0], lane.from[1], GLOBE_RADIUS + 0.8);
      const p2 = latLngToVector(lane.to[0], lane.to[1], GLOBE_RADIUS + 0.8);

      // Midpoint arched in 3D above the surface
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      const altitude = GLOBE_RADIUS + dist * 0.28;
      mid.normalize().multiplyScalar(altitude);

      const bezier = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      curves.push({ curve: bezier, color: lane.color, name: lane.name });

      // Curved line geometry
      const curvePts = bezier.getPoints(60);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePts);
      const curveMat = new THREE.LineBasicMaterial({
        color: lane.color,
        transparent: true,
        opacity: 0.65,
        linewidth: 2,
      });
      const lineMesh = new THREE.Line(curveGeo, curveMat);
      curveLineGroup.add(lineMesh);

      // Animated Photon / Vessel Cargo Pulse traveling along curve
      const pulseGeo = new THREE.SphereGeometry(1.6, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.95,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(pulseMesh);

      pulses.push({
        mesh: pulseMesh,
        curveIndex: idx,
        progress: (idx * 0.18) % 1,
        speed: 0.0035 + (idx % 3) * 0.001,
      });
    });

    // 7. Pulsing Beacon Rings on Key Maritime Hubs
    const rippleRings: { mesh: THREE.Mesh; scale: number; maxScale: number; speed: number }[] = [];

    TRADE_HUBS.forEach((hub) => {
      const pos = latLngToVector(hub.lat, hub.lng, GLOBE_RADIUS + 1.2);

      // Pin core sphere
      const pinColor = hub.type === 'sourcing' ? 0x4ade80 : 0x38bdf8;
      const pinGeo = new THREE.SphereGeometry(hub.type === 'sourcing' ? 2.4 : 1.8, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: pinColor });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      globeGroup.add(pinMesh);

      // Outer ripple ring
      const ringGeo = new THREE.RingGeometry(2.2, 3.4, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: pinColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ringMesh);

      rippleRings.push({
        mesh: ringMesh,
        scale: 1,
        maxScale: hub.type === 'sourcing' ? 2.8 : 2.2,
        speed: 0.02 + Math.random() * 0.01,
      });
    });

    // 8. Distant Atmospheric Stars Field
    const starsGeo = new THREE.BufferGeometry();
    const starCoords: number[] = [];
    for (let i = 0; i < 350; i++) {
      const r = 220 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starCoords.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starCoords, 3));
    const starsMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 1.2,
      transparent: true,
      opacity: 0.45,
    });
    const starField = new THREE.Points(starsGeo, starsMat);
    scene.add(starField);

    // 9. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x7ee8b0, 1.2);
    dirLight1.position.set(120, 80, 150);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
    dirLight2.position.set(-150, -60, -100);
    scene.add(dirLight2);

    // 10. Pointer Drag Interactivity (Pitch and Yaw with inertia)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      velocity = { x: 0, y: 0 };
      targetRotationRef.current = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      velocity = { x: deltaX * 0.005, y: deltaY * 0.005 };

      globeGroup.rotation.y += velocity.x;
      globeGroup.rotation.x += velocity.y;
      // Clamp vertical tilt to prevent tumbling upside down
      globeGroup.rotation.x = Math.max(-1.1, Math.min(1.1, globeGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const canvasDom = renderer.domElement;
    canvasDom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 11. Main Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation towards selected hub if targeted
      if (targetRotationRef.current) {
        const diffY = targetRotationRef.current.y - globeGroup.rotation.y;
        const diffX = targetRotationRef.current.x - globeGroup.rotation.x;
        globeGroup.rotation.y += diffY * 0.06;
        globeGroup.rotation.x += diffX * 0.06;

        if (Math.abs(diffY) < 0.002 && Math.abs(diffX) < 0.002) {
          targetRotationRef.current = null;
        }
      } else if (!isDragging) {
        // Inertia damping
        velocity.x *= 0.95;
        velocity.y *= 0.95;
        globeGroup.rotation.y += velocity.x;
        globeGroup.rotation.x += velocity.y;

        // Idle slow auto-rotation
        if (Math.abs(velocity.x) < 0.0001 && Math.abs(velocity.y) < 0.0001) {
          globeGroup.rotation.y += 0.0025;
        }
      }

      // Animate vessel cargo pulses along great-circle arcs
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;
        const curCurve = curves[p.curveIndex];
        if (curCurve) {
          const pt = curCurve.curve.getPoint(p.progress);
          p.mesh.position.copy(pt);
          const mat = p.mesh.material as THREE.MeshBasicMaterial;
          mat.color.setHex(curCurve.color);
        }
      });

      // Animate pulsing ripple rings on port nodes
      rippleRings.forEach((r) => {
        r.scale += r.speed;
        if (r.scale > r.maxScale) r.scale = 1;
        r.mesh.scale.set(r.scale, r.scale, r.scale);
        const mat = r.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.max(0, 1 - (r.scale - 1) / (r.maxScale - 1));
      });

      // Slow starfield rotation
      starField.rotation.y = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 12. Resize listener
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || newW;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvasDom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Smoothly center the globe on clicked hub
  const handleSelectHub = (hub: TradeHub) => {
    setActiveHub(hub);
    // Convert hub lat/lng to target globe rotation
    const targetY = -((hub.lng + 180) * (Math.PI / 180)) + Math.PI / 2;
    const targetX = (hub.lat * Math.PI) / 180 * 0.5;

    // Adjust targetY relative to current rotation to take shortest rotation path
    targetRotationRef.current = {
      x: Math.max(-0.8, Math.min(0.8, targetX)),
      y: targetY,
    };
  };

  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      {/* Ambient Radial Backlight Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full bg-gradient-to-tr from-brand-blue/35 via-brand-green/20 to-transparent blur-3xl opacity-80" />
      </div>

      {/* Top Floating HUD Badges */}
      <div className="w-full flex items-center justify-between px-2 sm:px-4 mb-3 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
          <GlobeIcon className="w-3.5 h-3.5 text-brand-green animate-spin-slow" />
          <span className="font-heading font-semibold tracking-wide">3D Interactive Shipping Network</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span>Drag in Any Direction to Rotate</span>
        </div>
      </div>

      {/* Three.js 3D Canvas Mount - Large, Unclipped Display */}
      <div
        ref={mountRef}
        className="relative w-full aspect-square max-w-[480px] sm:max-w-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none z-10"
      >
        {/* Subtle Orbit Coordinate Accent Rings */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-white/10 pointer-events-none animate-pulse-subtle" />
        <div className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-brand-green/25 pointer-events-none" />
      </div>

      {/* Floating Active Hub Telemetry Dossier - Positioned Beneath Without Obstructing Globe */}
      <div className="w-full max-w-xl px-2 sm:px-4 mt-2 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHub.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-4 sm:p-5 rounded-2xl bg-brand-blue-navy/90 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,10,35,0.6)] text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeHub.type === 'sourcing' ? 'bg-brand-green' : 'bg-[#38bdf8]'
                  } animate-ping`}
                />
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    {activeHub.city}
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-brand-green font-semibold">
                      {activeHub.name}
                    </span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Ocean Transit</span>
                  <span className="font-semibold text-white">{activeHub.transit}</span>
                </div>
                <div className="h-6 w-px bg-white/15" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Carrier Allocation</span>
                  <span className="font-semibold text-brand-green">{activeHub.vessels}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              {activeHub.details}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Quick Regional Focus Buttons */}
      <div className="w-full mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 z-10 px-2">
        {TRADE_HUBS.map((hub) => {
          const isSelected = activeHub.id === hub.id;
          return (
            <button
              key={hub.id}
              type="button"
              onClick={() => handleSelectHub(hub)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-brand-green text-brand-blue-navy shadow-glow-green scale-105'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSelected ? 'bg-brand-blue-navy' : 'bg-brand-green'
                }`}
              />
              <span>{hub.city}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
