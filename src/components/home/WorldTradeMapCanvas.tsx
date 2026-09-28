import React, { useEffect, useRef } from 'react';

interface RouteDef {
  sx: number;
  sy: number;
  ex: number;
  ey: number;
  color: string;
  progress: number;
  speed: number;
  label: string;
}

export const WorldTradeMapCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Hub coordinates normalized [0..1]
    const hubs = [
      { x: 0.76, y: 0.44, name: 'Ningbo/Shanghai', color: '#1E5EFF', main: true },
      { x: 0.72, y: 0.49, name: 'Shunde/Foshan', color: '#1E5EFF', main: true },
      { x: 0.48, y: 0.32, name: 'Rotterdam/Hamburg', color: '#7EE8B0', main: false },
      { x: 0.61, y: 0.45, name: 'Jebel Ali (Dubai)', color: '#7EE8B0', main: false },
      { x: 0.18, y: 0.38, name: 'Los Angeles/Long Beach', color: '#7EE8B0', main: false },
      { x: 0.32, y: 0.70, name: 'Port of Santos', color: '#7EE8B0', main: false },
      { x: 0.85, y: 0.76, name: 'Port of Sydney', color: '#7EE8B0', main: false },
      { x: 0.54, y: 0.72, name: 'Durban Gateway', color: '#7EE8B0', main: false },
    ];

    const routes: RouteDef[] = [
      { sx: 0.76, sy: 0.44, ex: 0.48, ey: 0.32, color: '#1E5EFF', progress: 0.1, speed: 0.003, label: 'EU Corridor' },
      { sx: 0.72, sy: 0.49, ex: 0.61, ey: 0.45, color: '#7EE8B0', progress: 0.4, speed: 0.004, label: 'GCC Line' },
      { sx: 0.76, sy: 0.44, ex: 0.18, ey: 0.38, color: '#38bdf8', progress: 0.7, speed: 0.0025, label: 'Trans-Pacific' },
      { sx: 0.72, sy: 0.49, ex: 0.32, ey: 0.70, color: '#818cf8', progress: 0.25, speed: 0.002, label: 'LatAm Route' },
      { sx: 0.76, sy: 0.44, ex: 0.85, ey: 0.76, color: '#7EE8B0', progress: 0.6, speed: 0.0035, label: 'Oceania Line' },
      { sx: 0.72, sy: 0.49, ex: 0.54, ey: 0.72, color: '#10B981', progress: 0.85, speed: 0.0028, label: 'Africa Route' },
    ];

    // Background continent simplified dot matrix
    const continentPoints: { x: number; y: number }[] = [];
    const generateWorldDots = () => {
      continentPoints.length = 0;
      // Approximate land masses using bounded clusters
      const clusters = [
        // North America
        { cx: 0.20, cy: 0.32, rx: 0.12, ry: 0.12, density: 45 },
        // South America
        { cx: 0.31, cy: 0.65, rx: 0.07, ry: 0.15, density: 35 },
        // Europe
        { cx: 0.50, cy: 0.32, rx: 0.08, ry: 0.08, density: 30 },
        // Africa
        { cx: 0.52, cy: 0.54, rx: 0.09, ry: 0.16, density: 40 },
        // Asia
        { cx: 0.70, cy: 0.38, rx: 0.16, ry: 0.15, density: 70 },
        // Australia
        { cx: 0.84, cy: 0.72, rx: 0.08, ry: 0.09, density: 25 },
      ];

      clusters.forEach((c) => {
        for (let i = 0; i < c.density; i++) {
          const u = Math.random();
          const v = Math.random();
          const r = Math.sqrt(u);
          const theta = v * 2 * Math.PI;
          continentPoints.push({
            x: c.cx + r * c.rx * Math.cos(theta),
            y: c.cy + r * c.ry * Math.sin(theta),
          });
        }
      });
    };

    generateWorldDots();

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let pulse = 0;

    const render = () => {
      pulse += 0.03;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw landmass dots
      ctx.fillStyle = 'rgba(138, 148, 166, 0.25)';
      continentPoints.forEach((pt) => {
        ctx.beginPath();
        ctx.arc(pt.x * width, pt.y * height, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw curved trade routes (Bezier arcs)
      routes.forEach((route) => {
        const sx = route.sx * width;
        const sy = route.sy * height;
        const ex = route.ex * width;
        const ey = route.ey * height;

        // Arch control point
        const midX = (sx + ex) / 2;
        const midY = Math.min(sy, ey) - Math.abs(ex - sx) * 0.25;

        // Draw track
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(midX, midY, ex, ey);
        ctx.strokeStyle = 'rgba(30, 94, 255, 0.18)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Move container packet dot
        route.progress = (route.progress + route.speed) % 1;
        const t = route.progress;
        // Quadratic bezier equation: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
        const px = Math.pow(1 - t, 2) * sx + 2 * (1 - t) * t * midX + Math.pow(t, 2) * ex;
        const py = Math.pow(1 - t, 2) * sy + 2 * (1 - t) * t * midY + Math.pow(t, 2) * ey;

        // Glowing particle
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
        grad.addColorStop(0, '#7EE8B0');
        grad.addColorStop(0.5, 'rgba(30, 94, 255, 0.6)');
        grad.addColorStop(1, 'rgba(30, 94, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw trade hubs (ports)
      hubs.forEach((hub) => {
        const hx = hub.x * width;
        const hy = hub.y * height;
        const pulseSize = 4 + Math.sin(pulse) * 2;

        // Outer pulsing ripple
        ctx.beginPath();
        ctx.arc(hx, hy, hub.main ? 10 + Math.sin(pulse) * 4 : pulseSize + 3, 0, Math.PI * 2);
        ctx.fillStyle = hub.main ? 'rgba(30, 94, 255, 0.15)' : 'rgba(126, 232, 176, 0.2)';
        ctx.fill();

        // Hub core
        ctx.beginPath();
        ctx.arc(hx, hy, hub.main ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = hub.main ? '#1E5EFF' : '#10B981';
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[340px] select-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
