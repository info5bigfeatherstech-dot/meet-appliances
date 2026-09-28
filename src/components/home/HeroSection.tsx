import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Ship, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { HERO_STATS } from '../../data/stats';

interface HeroMediaSlide {
  id: number;
  type: 'video' | 'image';
  src: string;
  poster: string;
  category: string;
  title: string;
  headline: string;
  highlightWord: string;
  subheadline: string;
}

const HERO_SLIDES: HeroMediaSlide[] = [
  {
    id: 0,
    type: 'video',
    src: 'https://assets.mixkit.co/videos/42023/42023-720.mp4',
    poster: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
    category: 'GLOBAL MARITIME FREIGHT',
    title: 'Ocean Container Transit',
    headline: 'Global Appliances, Delivered With',
    highlightWord: 'Confidence.',
    subheadline: 'Connecting international distributors to 320+ vetted tier-1 factories. End-to-end AQL II quality inspections and guaranteed container allocations worldwide.',
  },
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85',
    poster: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85',
    category: 'TIER-1 SOURCING PORTFOLIO',
    title: 'Major Kitchen & White Goods Suites',
    headline: 'European Standard Appliances, Sourced at',
    highlightWord: 'Volume.',
    subheadline: 'Multi-door inverter refrigeration, built-in pyrolytic ovens, induction hobs, and BLDC washers ready for your private label distribution.',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=85',
    poster: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=85',
    category: 'QUALITY ASSURANCE & LOGISTICS',
    title: 'Container Loading & Terminal Dispatch',
    headline: 'Zero Defect Policy Before Any Container is',
    highlightWord: 'Sealed.',
    subheadline: 'Rigorous high-pot electrical tests, climate chamber endurance, carton drop resilience, and 100% container loading supervision (CLS).',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideDuration = 7000; // 7 seconds per slide

  // Automatic media loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Video playback
  useEffect(() => {
    if (HERO_SLIDES[currentSlide].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('brands-marquee');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-brand-blue-navy text-white">
      
      {/* ============================================================== */}
      {/* 1. ENTIRE SCREEN BACKGROUND MEDIA (VIDEO & IMAGES ON LOOP)      */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {active.type === 'video' ? (
            <motion.div
              key="hero-video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={videoRef}
                src={active.src}
                poster={active.poster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          ) : (
            <motion.div
              key={`hero-img-${active.id}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* High-Contrast Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091B33]/95 via-[#091B33]/80 to-[#091B33]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091B33] via-transparent to-[#091B33]/70 z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* ============================================================== */}
      {/* 2. LEFT AND RIGHT SCROLL ARROWS (CENTERED ON HERO SIDES)       */}
      {/* ============================================================== */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl active:scale-95 group focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-brand-blue border border-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl active:scale-95 group focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* ============================================================== */}
      {/* 3. FOREGROUND HERO CONTENT OVERLAY                              */}
      {/* ============================================================== */}
      <Container size="xl" className="relative z-20 my-auto pt-16 pb-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Neutrality & Active Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
            <span className="font-heading font-bold text-brand-green uppercase tracking-wide">
              {active.category}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              100% Neutral Sourcing Trader • We Do Not Manufacture
            </span>
          </div>

          {/* Dynamic Headline synced with the active loop slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-md">
                {active.headline}{' '}
                <span className="text-brand-green underline decoration-brand-green/40 decoration-4 underline-offset-6">
                  {active.highlightWord}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
                {active.subheadline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/contact">
              <Button
                variant="accent"
                size="lg"
                glow
                icon={<ArrowRight className="w-5 h-5" />}
                className="px-8 shadow-glow-green text-brand-blue-navy font-bold text-sm sm:text-base"
              >
                Get a Container Quote
              </Button>
            </Link>

            <Link to="/products">
              <Button
                variant="secondary"
                size="lg"
                className="px-8 bg-white/10 hover:bg-white/25 text-white border-white/30 backdrop-blur-md text-sm sm:text-base font-semibold"
              >
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Key Trust Checkmarks */}
          <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              Pre-Shipment Hi-Pot & Drop Testing
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Ship className="w-4 h-4 text-brand-green" />
              Direct Port Space Allocations
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              FOB / CIF / CFR Trade Terms
            </span>
          </div>

        </div>
      </Container>

      {/* ============================================================== */}
      {/* 4. BOTTOM STATS STRIP & SLIDE INDICATOR DOTS                    */}
      {/* ============================================================== */}
      <div className="relative z-20 pb-6 pt-2">
        <Container size="xl">
          
          {/* Subtle Slide Indicators */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? 'w-8 h-2 bg-brand-green shadow-glow-green/60'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Four Animated Metric Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-black/35 backdrop-blur-md p-4 sm:p-5 border border-white/10"
              >
                <div className="font-heading font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-brand-green mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5 truncate">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center pt-4">
            <button
              onClick={scrollToNext}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-brand-green transition-colors focus:outline-none"
              aria-label="Scroll to explore more"
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-brand-green" />
              </motion.div>
            </button>
          </div>

        </Container>
      </div>

    </section>
  );
};
