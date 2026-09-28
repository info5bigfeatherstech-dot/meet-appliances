import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Container, Check, Sparkles } from 'lucide-react';

interface FloatingAppliance {
  id: string;
  name: string;
  category: string;
  depth: number; // 1 to 5
  x: number; // percentage
  y: number; // percentage
  rotation: number;
  image: string;
  tag: string;
  moq: string;
}

const APPLIANCES: FloatingAppliance[] = [
  {
    id: 'fridge',
    name: 'Inverter French Door',
    category: 'Refrigeration',
    depth: 35,
    x: 18,
    y: 12,
    rotation: -4,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80',
    tag: '54 units/40HQ',
    moq: 'FOB Ningbo'
  },
  {
    id: 'washer',
    name: 'BLDC Front Loader',
    category: 'Laundry Suite',
    depth: 45,
    x: 68,
    y: 10,
    rotation: 5,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80',
    tag: 'AQL II Pass',
    moq: '152 units/40HQ'
  },
  {
    id: 'airfryer',
    name: 'Dual-Zone Air Fryer',
    category: 'Small Domestic',
    depth: 55,
    x: 14,
    y: 62,
    rotation: 6,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80',
    tag: 'CE / ETL / CB',
    moq: '1200 units'
  },
  {
    id: 'climate-ac',
    name: 'T3 Tropical Inverter AC',
    category: 'HVAC Split',
    depth: 25,
    x: 72,
    y: 58,
    rotation: -5,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80',
    tag: 'SASO / G-Mark',
    moq: '180 sets'
  }
];

export const ApplianceParallax: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[450px] lg:h-[560px] flex items-center justify-center select-none">
      {/* Central Premium Trade Hub Glass Showcase */}
      <motion.div
        className="relative z-10 w-[85%] max-w-[420px] rounded-3xl bg-white/80 backdrop-blur-2xl p-6 sm:p-8 border border-white/60 shadow-2xl text-center"
        style={{
          x: useTransform(smoothMouseX, (val) => val * 12),
          y: useTransform(smoothMouseY, (val) => val * 12),
        }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold mb-4 border border-brand-blue/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multi-Category Sourcing Ecosystem</span>
        </div>

        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-card mb-4 bg-gradient-to-tr from-brand-blue-navy to-[#1a2d59] p-1">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
            alt="Central Sourced Home Appliance Suite"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-navy/80 via-transparent to-transparent flex items-end p-4">
            <span className="text-white text-xs font-medium flex items-center gap-1.5">
              <Container className="w-3.5 h-3.5 text-brand-green" />
              Direct Factory Batch Inspection
            </span>
          </div>
        </div>

        <h3 className="font-heading font-bold text-lg text-brand-blue-navy">
          Built-in Suites & White Goods
        </h3>
        <p className="text-xs text-brand-gray-muted mt-1">
          European & North American standard certifications pre-arranged.
        </p>

        <div className="mt-4 pt-3 border-t border-brand-gray-border/60 flex items-center justify-between text-[11px] text-brand-gray-text font-medium">
          <span className="flex items-center gap-1 text-emerald-600">
            <Check className="w-3.5 h-3.5" /> 100% Neutral Sourcing
          </span>
          <span className="bg-brand-gray-bg px-2.5 py-1 rounded-md border border-brand-gray-border">
            FOB / CIF / CFR
          </span>
        </div>
      </motion.div>

      {/* Floating Satellite Appliances with Depth Parallax */}
      {APPLIANCES.map((app) => {
        const xOffset = useTransform(smoothMouseX, (val) => val * app.depth);
        const yOffset = useTransform(smoothMouseY, (val) => val * app.depth);

        return (
          <motion.div
            key={app.id}
            className="absolute z-20 hidden sm:block pointer-events-auto cursor-pointer"
            style={{
              left: `${app.x}%`,
              top: `${app.y}%`,
              x: xOffset,
              y: yOffset,
              rotate: app.rotation,
            }}
            whileHover={{ scale: 1.08, zIndex: 30, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xl p-2.5 pr-4 rounded-2xl shadow-xl border border-brand-gray-border/80 hover:border-brand-blue/40 transition-colors">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-brand-blue tracking-wide">
                  <ShieldCheck className="w-3 h-3 text-brand-green" />
                  {app.category}
                </div>
                <h4 className="font-heading font-semibold text-xs text-brand-blue-navy leading-snug">
                  {app.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-brand-gray-muted">
                  <span className="font-medium text-slate-700">{app.tag}</span>
                  <span>•</span>
                  <span>{app.moq}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
