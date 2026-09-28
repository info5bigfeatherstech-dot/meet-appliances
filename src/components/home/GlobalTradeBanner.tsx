import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Ship } from 'lucide-react';
import { Container } from '../common/Container';

interface SlideContent {
  id: number;
  tagPre: string;
  tagHighlight: string;
  headlineMain: string;
  headlineHighlight: string;
  headlineSub: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const SLIDES: SlideContent[] = [
  {
    id: 1,
    tagPre: 'More than',
    tagHighlight: 'import and export',
    headlineMain: 'YOUR',
    headlineHighlight: 'ONE-STOP',
    headlineSub: 'SOURCING PLATFORM IN ASIA & WORLDWIDE',
    description: 'We connect international importers and retail chains to 320+ vetted tier-1 appliance production hubs with zero factory bias.',
    ctaText: 'Explore Sourcing Network',
    ctaLink: '/products',
  },
  {
    id: 2,
    tagPre: 'Strict statistical',
    tagHighlight: 'AQL Level II QA',
    headlineMain: 'INDEPENDENT',
    headlineHighlight: 'INSPECTIONS',
    headlineSub: 'BEFORE CARGO SEALS ARE LOCKED',
    description: 'Electrical Hi-Pot tests, drop tests, thermal chamber benchmarks, and 100% container loading supervision.',
    ctaText: 'View Inspection Protocol',
    ctaLink: '/services#quality-inspection',
  },
  {
    id: 3,
    tagPre: 'Direct carrier',
    tagHighlight: 'guaranteed space',
    headlineMain: 'RELIABLE',
    headlineHighlight: 'CONTAINER FREIGHT',
    headlineSub: 'TO 58 DESTINATION COUNTRIES',
    description: 'Annual ocean contracts across Maersk, MSC, and COSCO ensuring timely vessel sailings with FOB, CIF & CFR Incoterms.',
    ctaText: 'Request Container Quote',
    ctaLink: '/contact',
  },
];

interface MapMarker {
  name: string;
  x: number; // percentage [0..100]
  y: number; // percentage [0..100]
  type: 'sourcing' | 'port';
  cluster?: string;
}

const REGIONAL_CIRCLES = [
  { id: 'na', name: 'North America', cx: 28, cy: 30, r: 10, count: '14 Ports' },
  { id: 'sa', name: 'South America', cx: 33, cy: 68, r: 9, count: '8 Corridors' },
  { id: 'eu', name: 'Europe', cx: 52, cy: 28, r: 8, count: '18 Gateways' },
  { id: 'af-me', name: 'Africa & Middle East', cx: 58, cy: 52, r: 10, count: '16 Hubs' },
  { id: 'apac', name: 'Asia-Pacific', cx: 80, cy: 52, r: 11, count: '320+ Factories' },
];

const MAP_MARKERS: MapMarker[] = [
  // North America
  { name: 'Canada', x: 26, y: 22, type: 'port', cluster: 'na' },
  { name: 'United States', x: 28, y: 34, type: 'port', cluster: 'na' },
  // Central & South America
  { name: 'Panama', x: 30, y: 53, type: 'port', cluster: 'sa' },
  { name: 'Ecuador', x: 28, y: 60, type: 'port', cluster: 'sa' },
  { name: 'Peru', x: 30, y: 65, type: 'port', cluster: 'sa' },
  { name: 'Brazil', x: 38, y: 66, type: 'port', cluster: 'sa' },
  { name: 'Chile', x: 31, y: 76, type: 'port', cluster: 'sa' },
  // Europe
  { name: 'Europe Hubs', x: 52, y: 25, type: 'port', cluster: 'eu' },
  // Middle East & Africa
  { name: 'Egypt', x: 57, y: 40, type: 'port', cluster: 'af-me' },
  { name: 'Kuwait', x: 61, y: 40, type: 'port', cluster: 'af-me' },
  { name: 'United Arab Emirates', x: 64, y: 43, type: 'port', cluster: 'af-me' },
  { name: 'Saudi Arabia', x: 61, y: 45, type: 'port', cluster: 'af-me' },
  { name: 'Oman', x: 65, y: 48, type: 'port', cluster: 'af-me' },
  { name: 'Ghana', x: 49, y: 52, type: 'port', cluster: 'af-me' },
  { name: 'South Africa', x: 56, y: 74, type: 'port', cluster: 'af-me' },
  // Asia & Oceania
  { name: 'India', x: 69, y: 46, type: 'port', cluster: 'apac' },
  { name: 'Ningbo & Shanghai', x: 81, y: 41, type: 'sourcing', cluster: 'apac' },
  { name: 'Shunde & Foshan', x: 79, y: 46, type: 'sourcing', cluster: 'apac' },
  { name: 'Korea', x: 84, y: 37, type: 'port', cluster: 'apac' },
  { name: 'Vietnam', x: 78, y: 50, type: 'port', cluster: 'apac' },
  { name: 'Thailand', x: 76, y: 53, type: 'port', cluster: 'apac' },
  { name: 'Singapore', x: 78, y: 60, type: 'port', cluster: 'apac' },
  { name: 'Indonesia', x: 81, y: 63, type: 'port', cluster: 'apac' },
  { name: 'Australia', x: 86, y: 74, type: 'port', cluster: 'apac' },
  { name: 'New Zealand', x: 92, y: 82, type: 'port', cluster: 'apac' },
];

export const GlobalTradeBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-brand-blue-navy py-16 lg:py-24 text-white border-y border-white/10 select-none">
      {/* 1. Deep atmospheric background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#0A1A3F] to-[#0D214F] -z-20" />

      {/* Subtle radial lighting from theme colors */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 2. Container Port & Cargo Cranes Panoramic Silhouette at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 -z-10 pointer-events-none overflow-hidden opacity-35">
        <svg
          viewBox="0 0 1600 240"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-[#1E5EFF]"
        >
          {/* Water reflection line */}
          <line x1="0" y1="210" x2="1600" y2="210" stroke="rgba(126, 232, 176, 0.4)" strokeWidth="1" strokeDasharray="6 4" />
          <line x1="0" y1="218" x2="1600" y2="218" stroke="rgba(30, 94, 255, 0.3)" strokeWidth="1" strokeDasharray="12 8" />

          {/* Container Ship 1 Left */}
          <path d="M40 210 L80 180 L280 180 L320 210 Z" fill="#0A1A3F" stroke="currentColor" strokeWidth="1.5" />
          {/* Stacks of containers on ship */}
          <rect x="95" y="145" width="45" height="35" fill="rgba(30, 94, 255, 0.4)" stroke="#1E5EFF" strokeWidth="1" />
          <rect x="145" y="140" width="50" height="40" fill="rgba(126, 232, 176, 0.3)" stroke="#7EE8B0" strokeWidth="1" />
          <rect x="200" y="148" width="45" height="32" fill="rgba(30, 94, 255, 0.5)" stroke="#1E5EFF" strokeWidth="1" />
          <rect x="250" y="155" width="40" height="25" fill="rgba(126, 232, 176, 0.3)" stroke="#7EE8B0" strokeWidth="1" />
          {/* Ship Bridge Tower */}
          <rect x="65" y="130" width="25" height="50" fill="#0A1A3F" stroke="#1E5EFF" strokeWidth="1" />
          <circle cx="75" cy="140" r="2.5" fill="#7EE8B0" />

          {/* Port Quay Cranes 1 & 2 */}
          <g stroke="currentColor" strokeWidth="1.8" opacity="0.8">
            {/* Crane 1 Left */}
            <path d="M20 210 L45 80 L60 80 L85 210 M45 130 L75 130" />
            <path d="M5 75 L150 75 L110 50 L45 75" />
            <line x1="120" y1="75" x2="120" y2="135" stroke="#7EE8B0" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="115" y="135" width="10" height="6" fill="#7EE8B0" />

            {/* Crane 2 Middle-Left */}
            <path d="M360 210 L385 60 L400 60 L425 210 M385 120 L415 120" />
            <path d="M330 55 L490 55 L450 30 L385 55" />
            <line x1="460" y1="55" x2="460" y2="125" stroke="#1E5EFF" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="455" y="125" width="10" height="6" fill="#1E5EFF" />

            {/* Crane 3 Center Port */}
            <path d="M680 210 L705 70 L720 70 L745 210 M705 125 L735 125" />
            <path d="M650 65 L810 65 L770 40 L705 65" />
            <line x1="775" y1="65" x2="775" y2="140" stroke="#7EE8B0" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="770" y="140" width="10" height="6" fill="#7EE8B0" />

            {/* Crane 4 Right */}
            <path d="M1100 210 L1125 65 L1140 65 L1165 210 M1125 120 L1155 120" />
            <path d="M1070 60 L1230 60 L1190 35 L1125 60" />

            {/* Right Cargo vessel */}
            <path d="M1250 210 L1280 185 L1480 185 L1520 210 Z" fill="#0A1A3F" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1300" y="150" width="45" height="35" fill="rgba(30, 94, 255, 0.4)" stroke="#1E5EFF" strokeWidth="1" />
            <rect x="1350" y="145" width="55" height="40" fill="rgba(126, 232, 176, 0.4)" stroke="#7EE8B0" strokeWidth="1" />
            <rect x="1410" y="152" width="40" height="33" fill="rgba(30, 94, 255, 0.5)" stroke="#1E5EFF" strokeWidth="1" />
          </g>

          {/* Tiny glowing beacon lights along the dock */}
          {[120, 260, 410, 560, 720, 890, 1040, 1200, 1370, 1500].map((bx, i) => (
            <circle key={i} cx={bx} cy={208} r={2} fill={i % 2 === 0 ? '#7EE8B0' : '#1E5EFF'} />
          ))}
        </svg>
      </div>

      <Container size="full" className="px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">

          {/* LEFT COLUMN: Hero Copy exactly matching the layout style of the user reference */}
          <div className="lg:col-span-4 z-10 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-4"
              >
                {/* Tagline: "More than" + [import and export] highlight box in theme color */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-sm sm:text-base font-normal text-slate-200 tracking-wide">
                    {slide.tagPre}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-md bg-brand-green text-brand-blue-navy text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-glow-green/30">
                    {slide.tagHighlight}
                  </span>
                </div>

                {/* Big Bold Headline */}
                <div className="font-heading font-semibold tracking-tight leading-[1.12]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-white block">
                    {slide.headlineMain}{' '}
                    <span className="text-brand-green underline decoration-brand-green/40 decoration-4 underline-offset-4">
                      {slide.headlineHighlight}
                    </span>
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-white block mt-1">
                    {slide.headlineSub}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
                  {slide.description}
                </p>

                {/* CTA Button in theme color */}
                <div className="pt-2">
                  <Link to={slide.ctaLink}>
                    <button className="px-6 py-3 rounded-xl bg-brand-green text-brand-blue-navy font-bold text-xs sm:text-sm hover:bg-[#6edba0] shadow-glow-green transition-all duration-300 flex items-center gap-2 group active:scale-95">
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Sourcing Metrics Strip */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-300">
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">320+</span>
                <span className="text-[11px] text-slate-400">Audited Factories</span>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">58</span>
                <span className="text-[11px] text-slate-400">Destination Ports</span>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">AQL II</span>
                <span className="text-[11px] text-slate-400">Pre-Shipment Pass</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The High-Impact Interactive World Map with Circular Region Highlights */}
          <div className="lg:col-span-8 relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">

            {/* World Map SVG Container */}
            <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">

              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                fill="none"
              >
                {/* 1. CONTINENTS VECTOR PATHS (Light Blue / Cyan silhouettes from theme) */}
                <g fill="rgba(80, 160, 255, 0.42)" stroke="rgba(126, 232, 176, 0.3)" strokeWidth="0.8">
                  {/* North America */}
                  <path d="M120 70 L210 50 L270 60 L320 110 L280 140 L260 170 L230 180 L200 230 L160 210 L140 160 L90 140 L100 90 Z M270 40 L340 30 L360 70 L300 75 Z" />

                  {/* Central America & Caribbean */}
                  <path d="M210 235 L260 245 L290 280 L270 295 L240 265 Z" />

                  {/* South America */}
                  <path d="M270 295 L340 310 L380 360 L350 430 L310 470 L290 420 L270 340 Z" />

                  {/* Europe & Scandinavia */}
                  <path d="M470 90 L520 70 L550 90 L580 120 L530 150 L480 160 L450 130 Z M460 120 L480 140 L440 180 L420 160 Z" />

                  {/* Africa */}
                  <path d="M470 175 L560 170 L600 240 L580 340 L530 400 L490 350 L450 250 L460 200 Z" />

                  {/* Russia & Northern Asia */}
                  <path d="M560 80 L750 60 L890 80 L920 130 L840 160 L730 140 L620 130 Z" />

                  {/* East & South Asia */}
                  <path d="M620 160 L720 150 L820 160 L850 240 L790 270 L720 280 L660 230 Z" />

                  {/* Southeast Asia archipelagos */}
                  <path d="M760 280 L800 290 L830 330 L770 320 Z M810 330 L860 340 L840 360 Z" />

                  {/* Australia & New Zealand */}
                  <path d="M800 370 L890 360 L910 410 L840 440 L780 410 Z M930 430 L950 460 L920 470 Z" />

                  {/* Greenland & Arctic islands */}
                  <path d="M350 30 L410 25 L400 70 L350 60 Z" />
                </g>

                {/* 2. TRANSLUCENT RADAR / CIRCULAR FOCUS ZONES (from user image) */}
                {REGIONAL_CIRCLES.map((circ) => {
                  const isHovered = activeCluster === circ.id;

                  return (
                    <g
                      key={circ.id}
                      className="cursor-pointer transition-transform duration-300"
                      onMouseEnter={() => setActiveCluster(circ.id)}
                      onMouseLeave={() => setActiveCluster(null)}
                    >
                      {/* Dark translucent circle overlay */}
                      <circle
                        cx={circ.cx * 10}
                        cy={circ.cy * 5}
                        r={circ.r * 8.5}
                        fill={isHovered ? 'rgba(30, 94, 255, 0.45)' : 'rgba(7, 24, 60, 0.65)'}
                        stroke={isHovered ? '#7EE8B0' : 'rgba(126, 232, 176, 0.35)'}
                        strokeWidth={isHovered ? 2 : 1.2}
                        className="transition-all duration-300"
                      />

                      {/* Subtle pulse ring */}
                      <circle
                        cx={circ.cx * 10}
                        cy={circ.cy * 5}
                        r={circ.r * 8.5 + (isHovered ? 6 : 0)}
                        fill="none"
                        stroke={isHovered ? '#7EE8B0' : 'rgba(30, 94, 255, 0.25)'}
                        strokeWidth="1"
                        strokeDasharray="4 3"
                        className="transition-all duration-300"
                      />

                      {/* Cluster Name in Center */}
                      <text
                        x={circ.cx * 10}
                        y={circ.cy * 5 - 12}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        className="pointer-events-none drop-shadow-md"
                      >
                        {circ.name}
                      </text>

                      {/* Cluster Sub-metric */}
                      <text
                        x={circ.cx * 10}
                        y={circ.cy * 5 + 4}
                        textAnchor="middle"
                        fill="#7EE8B0"
                        fontSize="9.5"
                        fontWeight="600"
                        fontFamily="Inter, sans-serif"
                        className="pointer-events-none"
                      >
                        {circ.count}
                      </text>
                    </g>
                  );
                })}

                {/* 3. GLOWING PINS & COUNTRY LABELS WITH LEADER LINES */}
                {MAP_MARKERS.map((marker, mIdx) => {
                  const px = marker.x * 10;
                  const py = marker.y * 5;
                  const isSourcing = marker.type === 'sourcing';
                  const isClusterActive = activeCluster === marker.cluster;

                  return (
                    <g key={mIdx} className="group cursor-pointer">
                      {/* Pulsing Outer Glow */}
                      <circle
                        cx={px}
                        cy={py}
                        r={isSourcing ? 7 : 5}
                        fill={isSourcing ? 'rgba(126, 232, 176, 0.3)' : 'rgba(30, 94, 255, 0.35)'}
                        className="animate-pulse-subtle"
                      />

                      {/* Pin Center Core */}
                      <circle
                        cx={px}
                        cy={py}
                        r={isSourcing ? 3.5 : 2.5}
                        fill={isSourcing ? '#7EE8B0' : (isClusterActive ? '#7EE8B0' : '#FF4A4A')}
                        stroke="#FFFFFF"
                        strokeWidth={0.8}
                      />

                      {/* Country / Hub Text Label */}
                      <text
                        x={px + (px > 820 ? -6 : 6)}
                        y={py + 3}
                        textAnchor={px > 820 ? 'end' : 'start'}
                        fill={isSourcing ? '#7EE8B0' : '#E2E8F0'}
                        fontSize={isSourcing ? '10' : '8.5'}
                        fontWeight={isSourcing ? '700' : '500'}
                        fontFamily="Inter, sans-serif"
                        className="pointer-events-none select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      >
                        {marker.name}
                      </text>
                    </g>
                  );
                })}

                {/* Special Leader Lines for East Asia Hubs (like in user reference image) */}
                <g stroke="#7EE8B0" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6">
                  <line x1="810" y1="205" x2="860" y2="195" />
                  <line x1="790" y1="230" x2="860" y2="230" />
                </g>
              </svg>

              {/* Floating Region Indicator Tooltip */}
              {activeCluster && (
                <div className="absolute top-4 right-4 bg-brand-blue-navy/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-green/40 shadow-lg text-xs font-semibold text-brand-green flex items-center gap-1.5 animate-fade-in">
                  <Ship className="w-3.5 h-3.5" />
                  <span>
                    Focusing on {REGIONAL_CIRCLES.find((c) => c.id === activeCluster)?.name} Corridors
                  </span>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Carousel Arrow Controls (Left & Right circular buttons from user image) */}
        <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95 focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95 focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-brand-green shadow-glow-green/50' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
