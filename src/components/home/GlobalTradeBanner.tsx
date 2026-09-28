import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { GlobalTradeMap } from './GlobalTradeMap';

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



      <Container size="full" className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[540px] lg:min-h-[660px]">

          {/* LEFT COLUMN: Hero Copy */}
          <div className="lg:col-span-4 xl:col-span-4 z-10 space-y-6 text-left">
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

          {/* RIGHT COLUMN: World Trade Map Enlarged to 8 Cols */}
          <div className="lg:col-span-8 xl:col-span-8 relative w-full min-h-[460px] sm:min-h-[560px] lg:min-h-[660px] xl:min-h-[740px] flex items-center justify-center">
            <GlobalTradeMap />
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
