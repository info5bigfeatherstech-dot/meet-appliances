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
  const bannerRef = React.useRef<HTMLElement>(null);
  const isVisibleRef = React.useRef<boolean>(true);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isVisibleRef.current) {
        nextSlide();
      }
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section ref={bannerRef} className="relative w-full overflow-hidden bg-brand-blue-navy py-16 lg:py-24 text-white border-y border-white/10 select-none">
      {/* 1. Deep atmospheric background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-[#0A1A3F] to-[#0D214F] -z-20" />

      {/* Subtle radial lighting from theme colors */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none -z-10"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-brand-green/10 rounded-full blur-[80px] pointer-events-none -z-10"
        style={{ transform: 'translate3d(0,0,0)' }}
      />

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

      <Container size="xl" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[500px]">

          {/* LEFT COLUMN: Hero Copy exactly matching the layout style of the user reference */}
          <div className="lg:col-span-5 z-10 space-y-6 text-left">
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
                  <span className="font-subheading text-2xl sm:text-3xl lg:text-4xl text-white block mt-1">
                    {slide.headlineSub}
                  </span>
                </div>

                {/* Description */}
                <p className="font-subheading text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
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
          <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">

            {/* World Map SVG Container */}
            <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">

              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-contain"
                fill="none"
              >
                {/* 0. MAP DEFINITIONS (Gradients and glows) */}
                <defs>
                  <linearGradient id="mapContinentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E5EFF" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#0E3380" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#081A3A" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="laneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7EE8B0" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#7EE8B0" stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="portRadialGlow">
                    <stop offset="0%" stopColor="#7EE8B0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7EE8B0" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. PROFESSIONAL MARITIME GRATICULE NAVIGATION GRID */}
                <g stroke="rgba(80, 160, 255, 0.12)" strokeWidth="0.75" strokeDasharray="3 4">
                  {/* Latitude Parallels */}
                  <line x1="50" y1="90" x2="950" y2="90" />
                  <line x1="40" y1="175" x2="960" y2="175" />
                  <line x1="30" y1="250" x2="970" y2="250" stroke="rgba(126, 232, 176, 0.22)" strokeDasharray="5 3" />
                  <line x1="40" y1="325" x2="960" y2="325" />
                  <line x1="50" y1="410" x2="950" y2="410" />

                  {/* Longitude Curved Meridians */}
                  <path d="M 160 30 Q 135 250 160 470" fill="none" />
                  <path d="M 320 20 Q 300 250 320 480" fill="none" />
                  <path d="M 480 15 Q 480 250 480 485" fill="none" />
                  <path d="M 640 15 Q 660 250 640 485" fill="none" />
                  <path d="M 800 20 Q 825 250 800 480" fill="none" />
                </g>

                {/* Graticule Latitude/Longitude Micro Labels */}
                <g fill="rgba(148, 163, 184, 0.45)" fontSize="7" fontFamily="Inter, sans-serif" letterSpacing="0.5">
                  <text x="32" y="178">23.5°N</text>
                  <text x="22" y="253">0° EQUATOR</text>
                  <text x="32" y="328">23.5°S</text>
                  <text x="160" y="24" textAnchor="middle">140°W</text>
                  <text x="320" y="14" textAnchor="middle">80°W</text>
                  <text x="480" y="10" textAnchor="middle">0° GMT</text>
                  <text x="640" y="10" textAnchor="middle">60°E</text>
                  <text x="800" y="14" textAnchor="middle">120°E</text>
                </g>

                {/* 2. REALISTIC GEOGRAPHIC CONTINENT PATHS (High-Fidelity Coastlines) */}
                <g fill="url(#mapContinentGrad)" stroke="rgba(126, 232, 176, 0.45)" strokeWidth="0.85">
                  {/* NORTH AMERICA (With Alaska, Hudson Bay, St Lawrence, Florida & Mexico) */}
                  <path d="
                    M 85 105
                    C 92 88, 110 70, 138 68
                    C 165 65, 195 62, 222 68
                    C 235 60, 250 55, 270 58
                    C 285 62, 305 72, 320 85
                    C 328 92, 325 102, 318 108
                    C 308 115, 298 112, 290 120
                    C 298 128, 312 135, 316 148
                    C 320 162, 312 175, 304 185
                    C 298 195, 292 210, 288 224
                    C 285 228, 280 225, 276 218
                    C 270 205, 262 196, 248 198
                    C 238 202, 228 212, 222 226
                    C 216 238, 218 248, 226 254
                    C 216 256, 206 244, 200 230
                    C 192 212, 182 190, 175 168
                    C 168 152, 154 142, 138 146
                    C 122 150, 106 136, 98 122
                    C 90 112, 84 108, 85 105 Z
                    M 228 78
                    C 236 82, 244 90, 240 98
                    C 232 105, 224 96, 228 78 Z
                  " />

                  {/* GREENLAND & ICELAND */}
                  <path d="
                    M 348 38
                    C 368 32, 396 36, 402 54
                    C 406 72, 388 92, 368 88
                    C 354 84, 344 60, 348 38 Z
                    M 416 92
                    C 424 90, 428 95, 425 100
                    C 420 104, 414 100, 416 92 Z
                  " />

                  {/* CENTRAL AMERICA & CARIBBEAN (Panama Isthmus & Islands) */}
                  <path d="
                    M 226 254
                    C 236 258, 248 264, 262 270
                    C 274 276, 286 282, 298 286
                    C 304 290, 298 295, 290 292
                    C 278 285, 266 276, 252 270
                    C 240 264, 230 258, 226 254 Z
                    M 284 238
                    C 298 235, 312 240, 318 244
                    C 308 247, 294 244, 284 238 Z
                    M 324 246
                    C 334 244, 340 248, 338 252
                    C 332 255, 326 252, 324 246 Z
                  " />

                  {/* SOUTH AMERICA (Colombia, Brazil Bulge, Santos, Andes, Patagonia, Cape Horn) */}
                  <path d="
                    M 282 292
                    C 306 288, 336 290, 356 304
                    C 376 316, 402 328, 408 352
                    C 414 376, 394 412, 378 432
                    C 364 450, 342 474, 328 485
                    C 322 480, 318 466, 320 448
                    C 322 428, 310 398, 302 368
                    C 294 338, 284 318, 276 302
                    C 274 296, 278 294, 282 292 Z
                  " />

                  {/* EUROPE & BRITISH ISLES (UK, Scandinavia, Iberia, Italy, Mediterranean) */}
                  <path d="
                    M 482 78
                    C 496 64, 512 60, 522 68
                    C 532 78, 526 102, 512 112
                    C 504 118, 510 125, 516 130
                    C 532 132, 546 124, 560 132
                    C 570 142, 562 156, 548 158
                    C 534 162, 522 152, 512 162
                    C 504 170, 495 182, 488 178
                    C 478 172, 470 162, 460 168
                    C 448 175, 438 170, 440 158
                    C 444 146, 456 138, 468 140
                    C 476 132, 482 122, 478 112
                    C 472 102, 470 88, 482 78 Z
                    M 496 156
                    C 502 166, 512 178, 518 184
                    C 512 188, 504 182, 498 170 Z
                    M 454 116
                    C 460 110, 468 114, 470 124
                    C 466 136, 456 140, 452 134
                    C 448 128, 450 120, 454 116 Z
                    M 442 126
                    C 446 122, 450 126, 448 134
                    C 444 138, 440 134, 442 126 Z
                  " />

                  {/* AFRICA & MADAGASCAR (Morocco, Suez, Horn of Africa, Gulf of Guinea, Cape) */}
                  <path d="
                    M 466 182
                    C 496 178, 544 176, 570 192
                    C 590 206, 606 228, 596 252
                    C 586 272, 576 292, 574 316
                    C 570 342, 564 372, 552 392
                    C 540 402, 530 396, 522 376
                    C 512 352, 496 326, 486 296
                    C 476 266, 456 246, 446 222
                    C 442 208, 448 196, 466 182 Z
                    M 594 338
                    C 600 332, 608 340, 604 358
                    C 600 372, 592 378, 590 366
                    C 588 354, 590 344, 594 338 Z
                  " />

                  {/* ARABIAN PENINSULA (Saudi, UAE, Oman, Yemen) */}
                  <path d="
                    M 592 212
                    C 612 202, 636 206, 648 222
                    C 656 235, 650 252, 636 258
                    C 622 262, 604 248, 596 232
                    C 592 222, 590 216, 592 212 Z
                  " />

                  {/* EURASIA & EAST ASIA (Russia, China, Korea, Japan) */}
                  <path d="
                    M 566 128
                    C 602 112, 662 98, 722 92
                    C 782 88, 852 82, 912 92
                    C 938 98, 948 112, 932 128
                    C 916 142, 896 158, 876 162
                    C 856 168, 842 182, 826 198
                    C 812 212, 818 228, 806 242
                    C 796 258, 782 268, 766 272
                    C 752 276, 736 266, 726 252
                    C 716 238, 696 228, 676 218
                    C 662 212, 652 192, 636 178
                    C 622 162, 596 152, 576 148
                    C 566 142, 562 135, 566 128 Z
                    M 872 172
                    C 882 165, 892 175, 886 192
                    C 880 208, 870 222, 860 228
                    C 856 220, 864 208, 870 196
                    C 874 186, 866 178, 872 172 Z
                  " />

                  {/* INDIAN SUBCONTINENT & SRI LANKA */}
                  <path d="
                    M 676 218
                    C 692 222, 716 232, 712 258
                    C 706 278, 696 298, 686 306
                    C 680 298, 674 272, 670 248
                    C 666 232, 672 222, 676 218 Z
                    M 694 310
                    C 698 308, 702 312, 700 320
                    C 696 326, 692 322, 694 310 Z
                  " />

                  {/* MARITIME SOUTHEAST ASIA (Indonesia, Philippines, Singapore) */}
                  <path d="
                    M 772 292
                    C 792 288, 822 295, 836 302
                    C 826 312, 806 310, 786 308 Z
                    M 796 322
                    C 816 318, 842 322, 846 335
                    C 836 345, 816 342, 802 335 Z
                    M 832 248
                    C 842 242, 850 252, 846 268
                    C 840 278, 832 268, 832 248 Z
                  " />

                  {/* AUSTRALIA & NEW ZEALAND (Great Barrier Reef, Bass Strait, Tasmania, NZ) */}
                  <path d="
                    M 808 362
                    C 838 348, 878 350, 902 365
                    C 918 378, 922 408, 908 432
                    C 892 452, 862 458, 832 452
                    C 808 448, 782 432, 778 408
                    C 772 386, 788 372, 808 362 Z
                    M 866 468
                    C 874 466, 880 470, 878 478
                    C 872 482, 864 480, 866 468 Z
                    M 936 422
                    C 944 416, 952 422, 948 438
                    C 942 448, 934 442, 936 422 Z
                    M 924 448
                    C 932 442, 940 450, 936 465
                    C 930 472, 922 465, 924 448 Z
                  " />
                </g>

                {/* 3. ACTIVE MARITIME SHIPPING ROUTES (Curved Global Corridors) */}
                <g fill="none" stroke="url(#laneGrad)" strokeWidth="1.2" opacity="0.65">
                  {/* Asia to Europe via Singapore, Malacca & Suez Canal */}
                  <path d="M 808 210 Q 780 280 750 295 T 650 240 T 575 200 T 520 130" strokeDasharray="4 3" />
                  
                  {/* Asia to North America across Pacific */}
                  <path d="M 810 205 Q 890 140 985 155" strokeDasharray="4 3" />
                  <path d="M 15 155 Q 140 160 270 170" strokeDasharray="4 3" />

                  {/* Asia to Middle East / Gulf Port */}
                  <path d="M 790 230 Q 730 275 670 250 T 640 220" strokeDasharray="4 3" />

                  {/* Asia to Latin America */}
                  <path d="M 790 230 Q 880 280 985 315" strokeDasharray="4 3" />
                  <path d="M 15 315 Q 160 300 295 270 T 380 330" strokeDasharray="4 3" />

                  {/* Asia to Oceania Direct */}
                  <path d="M 808 210 Q 830 280 860 370" strokeDasharray="4 3" />

                  {/* Asia to South Africa / Durban */}
                  <path d="M 790 230 Q 720 310 650 340 T 560 370" strokeDasharray="4 3" />
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
                        fontFamily="Open Sans, sans-serif"
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

      {/* Carousel Arrow Controls anchored to section sides */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md active:scale-95 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md active:scale-95 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};
