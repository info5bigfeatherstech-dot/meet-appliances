import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, ShieldCheck, Ship, FileCheck2, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';

export const WhatWeDoSection: React.FC = () => {
  const services = [
    {
      id: 'sourcing',
      title: 'Global Appliance Sourcing',
      tag: 'Strategic Vetting',
      icon: Search,
      color: 'blue',
      description: 'Matching your market requirements to vetted Tier-1 appliance production facilities. We audit factory finances, engineering tooling, and production capacities to eliminate middleman margins.',
      features: ['320+ Audited OEM/ODM Factories', 'Benchmark Price Verification', 'Bespoke Tooling Coordination'],
      link: '/services#sourcing',
    },
    {
      id: 'qa-inspection',
      title: 'Pre-Shipment Quality Assurance',
      tag: 'Zero Defect Policy',
      icon: ShieldCheck,
      color: 'green',
      description: 'Independent engineering inspection before any container seal is locked. Strict AQL Level II testing covering high-pot insulation, energy consumption, drop resilience, and aesthetic finishing.',
      features: ['AQL Level II Standard Testing', 'Full 40+ Page QC Photo Dossier', '100% Container Loading Supervision'],
      link: '/services#quality-inspection',
    },
    {
      id: 'container-logistics',
      title: 'Container Logistics & Ocean Freight',
      tag: 'Direct Space Allocations',
      icon: Ship,
      color: 'blue',
      description: 'Negotiating volume-tier maritime freight with top global shipping alliances. We maximize container cubing efficiency, prevent demurrage bottlenecks, and provide real-time container satellite tracking.',
      features: ['FOB, CIF, CFR & DDP Incoterms', 'Direct Ocean Carrier Allocations', 'Marine All-Risk Insurance Coverage'],
      link: '/services#import-export',
    },
    {
      id: 'customs-compliance',
      title: 'Regulatory & Trade Compliance',
      tag: 'Market Certification',
      icon: FileCheck2,
      color: 'green',
      description: 'Navigating regional statutory certifications across 58 destination countries. We manage accredited laboratory filings including CE, CB, RoHS, SASO Saber, G-Mark, NOM, and UL/ETL.',
      features: ['Accredited Lab Test Reports', 'Certificate of Origin & L/C Compliance', 'Multilingual Warning & Packaging Artwork'],
      link: '/services#compliance',
    },
  ];

  return (
    <section className="py-24 bg-brand-gray-bg relative overflow-hidden">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll direction="up">
            <Badge variant="blue" className="mb-3">
              Core Trading Capabilities
            </Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              End-to-End Appliance Import & Export Management
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="font-subheading text-base text-brand-gray-muted mt-4 leading-relaxed">
              We act as your dedicated offshore procurement, quality control, and shipping department. We do not manufacture—our sole mandate is protecting your capital and ensuring your containers arrive on schedule, exactly to specification.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isGreen = item.color === 'green';

            return (
              <RevealOnScroll key={item.id} direction="up" delay={0.1 * idx} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-2xl bg-white p-7 border border-brand-gray-border/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                        isGreen ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-blue/10 text-brand-blue'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <Badge variant={isGreen ? 'green' : 'blue'} size="sm">
                        {item.tag}
                      </Badge>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-3 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-brand-gray-text/80 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-brand-gray-border/60">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-brand-gray-text font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-deep pt-2 group/link"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-blue-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">
              Looking for a custom OEM/ODM sourcing project?
            </h4>
            <p className="text-xs text-slate-300">
              Submit your engineering drawings or target specs. We return verified factory quotes in 5 business days.
            </p>
          </div>
          <Link to="/contact" className="w-full sm:w-auto shrink-0">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-green text-brand-blue-navy font-bold text-xs sm:text-sm hover:bg-[#6edba0] transition-colors flex items-center justify-center gap-2 min-h-[44px]">
              <span>Submit Sourcing Spec</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
