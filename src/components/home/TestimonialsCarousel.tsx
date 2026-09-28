import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Box } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-brand-gray-bg relative overflow-hidden">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll direction="up">
            <Badge variant="blue" className="mb-3">
              Verified Importer Feedback
            </Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              Trusted by Procurement Executives Worldwide
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="font-subheading text-base text-brand-gray-muted mt-3">
              Discover how our transparent sourcing and rigorous QA protocols protect global appliance distribution chains.
            </p>
          </RevealOnScroll>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="rounded-3xl bg-white p-8 sm:p-12 border border-brand-gray-border/80 shadow-card relative"
            >
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-blue/10 pointer-events-none" />

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-base sm:text-xl text-brand-blue-navy font-normal leading-relaxed italic mb-8">
                "{current.review}"
              </p>

              {/* Verified Container Shipment Pill */}
              <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-blue-subtle text-brand-blue text-xs font-semibold">
                <Box className="w-4 h-4 text-brand-blue" />
                <span>Verified Shipment: {current.shipmentType}</span>
              </div>

              {/* Author profile & company */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-brand-gray-border/60">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/30"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-base text-brand-blue-navy">
                      {current.name}
                    </h4>
                    <p className="text-xs text-brand-gray-muted">
                      {current.role} • <span className="font-medium text-slate-700">{current.company}</span>
                    </p>
                    <span className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider">
                      {current.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Audited B2B Buyer</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-brand-blue' : 'w-2.5 bg-brand-gray-border hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-brand-gray-border flex items-center justify-center text-brand-blue-navy hover:bg-brand-blue hover:text-white transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-brand-gray-border flex items-center justify-center text-brand-blue-navy hover:bg-brand-blue hover:text-white transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
