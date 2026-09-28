import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe as GlobeIcon } from 'lucide-react';

interface TradeHub {
  id: string;
  name: string;
  city: string;
  location: [number, number]; // [lat, lng]
  phi: number; // target longitude rotation
  type: 'sourcing' | 'destination';
  stats: string;
  details: string;
}

const TRADE_HUBS: TradeHub[] = [
  {
    id: 'cn-east',
    name: 'Asia-Pacific Core',
    city: 'Ningbo & Shanghai',
    location: [30.5, 121.5],
    phi: 2.1,
    type: 'sourcing',
    stats: '320+ Audited Factories',
    details: 'Primary OEM/ODM appliance export clusters with dedicated container berths.',
  },
  {
    id: 'cn-south',
    name: 'South China Belt',
    city: 'Shunde & Foshan',
    location: [22.8, 113.3],
    phi: 1.9,
    type: 'sourcing',
    stats: 'Kitchenware & Climate Hub',
    details: 'World capital for induction, ovens, air fryers, and small domestic appliances.',
  },
  {
    id: 'eu-west',
    name: 'European Gateway',
    city: 'Rotterdam & Hamburg',
    location: [51.9, 4.5],
    phi: 0.1,
    type: 'destination',
    stats: '18 Direct Gateways',
    details: 'North-West European distribution corridors with CE/CB customs clearance.',
  },
  {
    id: 'me-gcc',
    name: 'Middle East & Africa',
    city: 'Jebel Ali (Dubai)',
    location: [25.2, 55.3],
    phi: 0.9,
    type: 'destination',
    stats: '16 Regional Hubs',
    details: 'Deepwater transshipment hub connecting GCC, Red Sea, and East African markets.',
  },
  {
    id: 'na-west',
    name: 'North America',
    city: 'Los Angeles / Long Beach',
    location: [33.7, -118.2],
    phi: 4.2,
    type: 'destination',
    stats: '14 Deepwater Ports',
    details: 'Trans-Pacific logistics corridor serving continental distribution centers.',
  },
  {
    id: 'sa-east',
    name: 'Latin America',
    city: 'Port of Santos',
    location: [-23.9, -46.3],
    phi: 5.5,
    type: 'destination',
    stats: '8 Maritime Corridors',
    details: 'South America Atlantic shipping bridge with scheduled feeder services.',
  },
];

export const InteractiveGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(2.1); // Start facing Asia/Pacific
  const targetPhiRef = useRef<number | null>(null);
  const [activeHub, setActiveHub] = useState<TradeHub>(TRADE_HUBS[0]);
  const [isDragging, setIsDragging] = useState(false);

  // Focus globe on a specific hub
  const handleSelectHub = (hub: TradeHub) => {
    setActiveHub(hub);
    targetPhiRef.current = hub.phi;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight || width;
    let animationFrameId: number;

    const onResize = () => {
      if (canvas && containerRef.current) {
        width = containerRef.current.offsetWidth;
        height = containerRef.current.offsetHeight || width;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    let globe: ReturnType<typeof createGlobe> | null = null;

    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
        width: (width || 480) * 2,
        height: (height || 480) * 2,
        phi: phiRef.current,
        theta: 0.28,
        dark: 1,
        diffuse: 1.25,
        mapSamples: 16000,
        mapBrightness: 5.5,
        mapBaseBrightness: 0.08,
        baseColor: [0.06, 0.18, 0.42], // Deep brand blue navy
        markerColor: [0.49, 0.91, 0.69], // Emerald green #7EE8B0
        glowColor: [0.12, 0.37, 1.0], // Glowing electric blue
        arcColor: [0.49, 0.91, 0.69], // Emerald routing arcs
        arcWidth: 1.6,
        arcHeight: 0.28,
        markerElevation: 0.06,
        opacity: 0.95,
        markers: [
          // Sourcing Hubs (China Core) - prominent size
          { location: [30.5, 121.5], size: 0.11, color: [0.49, 0.91, 0.69] }, // Ningbo / Shanghai
          { location: [22.8, 113.3], size: 0.09, color: [0.49, 0.91, 0.69] }, // Shunde / Foshan
          // Key Destination Gateways
          { location: [51.9, 4.5], size: 0.075, color: [0.35, 0.75, 1.0] }, // Rotterdam
          { location: [53.5, 9.9], size: 0.065, color: [0.35, 0.75, 1.0] }, // Hamburg
          { location: [25.2, 55.3], size: 0.08, color: [0.49, 0.91, 0.69] }, // Dubai / Jebel Ali
          { location: [33.7, -118.2], size: 0.08, color: [0.35, 0.75, 1.0] }, // Los Angeles
          { location: [40.7, -74.0], size: 0.065, color: [0.35, 0.75, 1.0] }, // New York / NJ
          { location: [-23.9, -46.3], size: 0.075, color: [0.49, 0.91, 0.69] }, // Santos
          { location: [-33.8, 151.2], size: 0.075, color: [0.35, 0.75, 1.0] }, // Sydney
          { location: [-29.8, 31.0], size: 0.065, color: [0.49, 0.91, 0.69] }, // Durban
          { location: [1.3, 103.8], size: 0.065, color: [0.49, 0.91, 0.69] }, // Singapore
          { location: [31.2, 29.9], size: 0.06, color: [0.35, 0.75, 1.0] }, // Alexandria / Suez
        ],
        arcs: [
          // Ningbo/Shanghai -> Europe (Rotterdam)
          { from: [30.5, 121.5], to: [51.9, 4.5], color: [0.49, 0.91, 0.69] },
          // Ningbo/Shanghai -> North America (Los Angeles)
          { from: [30.5, 121.5], to: [33.7, -118.2], color: [0.35, 0.75, 1.0] },
          // Shunde/Foshan -> Middle East (Jebel Ali)
          { from: [22.8, 113.3], to: [25.2, 55.3], color: [0.49, 0.91, 0.69] },
          // Ningbo/Shanghai -> Latin America (Santos)
          { from: [30.5, 121.5], to: [-23.9, -46.3], color: [0.49, 0.91, 0.69] },
          // Shunde/Foshan -> Australia (Sydney)
          { from: [22.8, 113.3], to: [-33.8, 151.2], color: [0.35, 0.75, 1.0] },
          // Shunde/Foshan -> South Africa (Durban)
          { from: [22.8, 113.3], to: [-29.8, 31.0], color: [0.49, 0.91, 0.69] },
        ],
      });
    } catch (e) {
      console.warn('WebGL Globe initialization fallback:', e);
    }

    // Animation render loop
    const animate = () => {
      if (globe) {
        if (targetPhiRef.current !== null) {
          // Smooth spring animation towards target hub phi
          const diff = targetPhiRef.current - phiRef.current;
          phiRef.current += diff * 0.05;
          if (Math.abs(diff) < 0.005) {
            phiRef.current = targetPhiRef.current;
            targetPhiRef.current = null;
          }
        } else if (!pointerInteracting.current) {
          // Gentle auto-rotation
          phiRef.current += 0.0035;
        }

        globe.update({
          phi: phiRef.current + pointerInteractionMovement.current,
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col items-center select-none ${className}`}
    >
      {/* Ambient Radial Backlight Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-brand-blue/30 via-brand-green/20 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Floating Header Badges */}
      <div className="w-full flex items-center justify-between px-2 sm:px-4 mb-2 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
          <GlobeIcon className="w-3.5 h-3.5 text-brand-green animate-spin-slow" />
          <span className="font-heading font-semibold tracking-wide">3D Interactive Maritime Network</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span>Drag to Spin Globe</span>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div
        className={`relative w-full aspect-square max-w-[460px] sm:max-w-[500px] flex items-center justify-center touch-none z-10 transition-colors ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onPointerDown={(e) => {
          pointerInteracting.current = { x: e.clientX, y: e.clientY };
          setIsDragging(true);
        }}
        onPointerUp={() => {
          if (pointerInteracting.current) {
            phiRef.current += pointerInteractionMovement.current;
            pointerInteractionMovement.current = 0;
          }
          pointerInteracting.current = null;
          setIsDragging(false);
        }}
        onPointerOut={() => {
          if (pointerInteracting.current) {
            phiRef.current += pointerInteractionMovement.current;
            pointerInteractionMovement.current = 0;
          }
          pointerInteracting.current = null;
          setIsDragging(false);
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const deltaX = e.clientX - pointerInteracting.current.x;
            pointerInteractionMovement.current = deltaX * 0.006;
          }
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,104,180,0.35)]"
        />

        {/* Orbit Rings Styling Accent */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-white/10 pointer-events-none animate-pulse-subtle" />
        <div className="absolute inset-8 sm:inset-12 rounded-full border border-dashed border-brand-green/20 pointer-events-none" />

        {/* Floating Active Hub Card Overlay */}
        <div className="absolute bottom-2 left-2 right-2 sm:left-4 sm:right-4 z-20 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHub.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-brand-blue-navy/85 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-3 text-left"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      activeHub.type === 'sourcing' ? 'bg-brand-green' : 'bg-[#38bdf8]'
                    } animate-ping`}
                  />
                  <span className="font-heading font-bold text-xs sm:text-sm text-white">
                    {activeHub.city}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300 font-semibold">
                    {activeHub.name}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1">
                  {activeHub.details}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="font-heading font-extrabold text-xs sm:text-sm text-brand-green block">
                  {activeHub.stats}
                </span>
                <span className="text-[10px] text-slate-400">Scheduled Corridors</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Quick Regional Focus Buttons */}
      <div className="w-full mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 z-10 px-2">
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
