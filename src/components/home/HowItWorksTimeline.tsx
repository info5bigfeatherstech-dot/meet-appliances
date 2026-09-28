import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { HOW_IT_WORKS_TIMELINE } from '../../data/services';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';
import { CheckCircle2, Clock, ShieldCheck, FileCheck, Anchor, Truck, Search, Inbox } from 'lucide-react';

export const HowItWorksTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Step icons map
  const stepIcons = [Inbox, Search, ShieldCheck, FileCheck, Anchor, Truck];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <RevealOnScroll direction="up">
            <Badge variant="blue" className="mb-3">
              Precision Execution
            </Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              From Inquiry to Container Delivery
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="font-subheading text-base text-brand-gray-muted mt-4 leading-relaxed capitalize">
              Our 6-phase global trading methodology eliminates supply chain surprises. Every container goes through structured sample approval, continuous assembly audits, and pre-loading inspection.
            </p>
          </RevealOnScroll>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl lg:max-w-6xl mx-auto">
          {/* Animated Connecting Progress Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-brand-gray-border/80 rounded-full">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-gradient-to-b from-brand-blue via-brand-green to-brand-blue origin-top rounded-full shadow-[0_0_12px_rgba(30,94,255,0.6)]"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {HOW_IT_WORKS_TIMELINE.map((item, index) => {
              const Icon = stepIcons[index] || CheckCircle2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 sm:gap-8 md:gap-10 lg:gap-12`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white border-2 border-brand-blue shadow-lg group-hover:scale-110 transition-transform">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-brand-blue text-white font-heading font-bold text-xs">
                      {item.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-11 sm:ml-16 md:ml-0 md:w-1/2 w-[calc(100%-2.75rem)] sm:w-[calc(100%-4rem)] md:w-1/2">
                    <RevealOnScroll direction={isEven ? 'left' : 'right'} delay={0.15}>
                      <div className="rounded-2xl bg-brand-gray-bg/70 hover:bg-white p-5 sm:p-7 md:p-8 border border-brand-gray-border/80 hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all group">
                        
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue">
                            <Icon className="w-4 h-4 text-brand-blue" />
                            Phase 0{item.step}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-medium text-brand-gray-muted bg-white px-2.5 py-1 rounded-full border border-brand-gray-border">
                            <Clock className="w-3 h-3 text-brand-green" />
                            {item.duration}
                          </span>
                        </div>

                        <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-1.5 group-hover:text-brand-blue transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs font-medium text-brand-blue-deep mb-3">
                          {item.subtitle}
                        </p>

                        <p className="text-xs text-brand-gray-text leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Deliverables tags */}
                        <div className="pt-3 border-t border-brand-gray-border/60">
                          <span className="text-[10px] uppercase font-bold text-brand-gray-muted tracking-wider block mb-2">
                            Key Deliverables & Sign-Offs:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.deliverables.map((deliv, dIdx) => (
                              <span
                                key={dIdx}
                                className="inline-flex items-center gap-1 text-[11px] bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-brand-gray-border/80 font-medium"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                {deliv}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </RevealOnScroll>
                  </div>

                  {/* Empty Spacer Column for balance on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
