import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, Clock, FileText, Scale } from 'lucide-react';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Tier-1 Benchmark Pricing',
      description: 'By pooling multi-buyer container volumes across global ports, we secure wholesale manufacturing tariffs that individual importers cannot achieve alone.',
      highlight: 'Up to 12% Cost Advantage',
    },
    {
      icon: Scale,
      title: '100% Neutral Sourcing Advocate',
      description: 'Unlike factory sales reps who conceal production defects, we represent YOU. If a batch fails Hi-Pot insulation or drop tests, it does not leave the factory floor.',
      highlight: 'Zero Factory Bias',
    },
    {
      icon: ShieldCheck,
      title: 'Audited Supplier Network',
      description: 'We maintain an active registry of 320+ pre-vetted OEM/ODM manufacturers, with verified ISO 9001, BSCI ethical labor, and automated robotic stamping facilities.',
      highlight: 'Strict 5-Point Vetting',
    },
    {
      icon: CheckCircle2,
      title: 'Zero-Tolerance AQL II QA',
      description: 'Our resident engineers test electrical safety, temperature pull-down curves, noise decibels, and packaging drop resilience before release.',
      highlight: '99.4% Pre-Shipment Pass Rate',
    },
    {
      icon: Clock,
      title: 'Guaranteed Container Sailing',
      description: 'Direct slot agreements with top container ocean carriers minimize rolled cargo and demurrage penalties, keeping your retail shelves consistently stocked.',
      highlight: '98.7% On-Time Voyage',
    },
    {
      icon: FileText,
      title: 'Comprehensive Trade Documentation',
      description: 'From Letters of Credit (L/C) compliance to Certificate of Origin, Saber filings, and CE/CB test verification, we handle every piece of customs bureaucracy.',
      highlight: 'Full Incoterms 2020 Compliance',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll direction="up">
            <Badge variant="blue" className="mb-3">
              The Meet Appliances Advantage
            </Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              Why Global Importers Rely on Meet Appliances
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-base text-brand-gray-muted mt-4 leading-relaxed">
              International trade should be dependable, transparent, and profitable. We eliminate cross-border friction, language barriers, and product defect risks.
            </p>
          </RevealOnScroll>
        </div>

        {/* 6-Pillar Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <RevealOnScroll key={index} direction="up" delay={0.1 * index} className="h-full">
                <div className="h-full rounded-2xl bg-brand-gray-bg/60 hover:bg-white p-7 border border-brand-gray-border/80 hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-brand-blue-navy mb-2.5 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-brand-gray-text/90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-brand-gray-border/60 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                    <span>Guaranteed SLA Standard</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
