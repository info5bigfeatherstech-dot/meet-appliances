import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { InteractiveGlobe } from './InteractiveGlobe';

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

export const GlobalTradeBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
            <path d="M20 210 L45 80 L60 80 L85 210 M45 130 L75 130" />
            <path d="M5 75 L150 75 L110 50 L45 75" />
            <line x1="120" y1="75" x2="120" y2="135" stroke="#7EE8B0" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="115" y="135" width="10" height="6" fill="#7EE8B0" />

            <path d="M360 210 L385 60 L400 60 L425 210 M385 120 L415 120" />
            <path d="M330 55 L490 55 L450 30 L385 55" />
            <line x1="460" y1="55" x2="460" y2="125" stroke="#1E5EFF" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="455" y="125" width="10" height="6" fill="#1E5EFF" />

            <path d="M680 210 L705 70 L720 70 L745 210 M705 125 L735 125" />
            <path d="M650 65 L810 65 L770 40 L705 65" />
            <line x1="775" y1="65" x2="775" y2="140" stroke="#7EE8B0" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="770" y="140" width="10" height="6" fill="#7EE8B0" />

            <path d="M1100 210 L1125 65 L1140 65 L1165 210 M1125 120 L1155 120" />
            <path d="M1070 60 L1230 60 L1190 35 L1125 60" />

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

          {/* LEFT COLUMN: Hero Copy */}
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
                {/* Tagline */}
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
                  <Link to={slide.ctaLink} className="inline-block w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-green text-brand-blue-navy font-bold text-xs sm:text-sm hover:bg-[#6edba0] shadow-glow-green transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 min-h-[44px]">
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Sourcing Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-6 text-xs text-slate-300">
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">320+</span>
                <span className="text-[11px] text-slate-400">Audited Factories</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">58</span>
                <span className="text-[11px] text-slate-400">Destination Ports</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div>
                <span className="font-bold text-brand-green text-base block font-heading">AQL II</span>
                <span className="text-[11px] text-slate-400">Pre-Shipment Pass</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D WebGL Maritime Network Globe */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            <InteractiveGlobe />
          </div>

        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-brand-green shadow-glow-green/50' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>

      {/* Carousel Arrow Controls anchored to section sides */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md active:scale-95 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md active:scale-95 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};
