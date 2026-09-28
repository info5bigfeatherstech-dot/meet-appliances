import React from 'react';
import { Link } from 'react-router-dom';
import { TRADE_SERVICES } from '../data/services';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SearchCheck, ShieldCheck, Ship, FileText, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const iconMap: Record<string, any> = {
    SearchCheck,
    ShieldCheck,
    Ship,
    FileText,
  };

  return (
    <div className="pt-8 pb-20 bg-brand-gray-bg min-h-screen">
      {/* Services Header */}
      <section className="py-16 md:py-20 bg-brand-blue-navy text-white relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-4">
              Comprehensive Trade Services
            </Badge>
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-white tracking-tight">
              Sourcing, Inspection & Freight Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We operate as your on-the-ground international trading arm. From negotiating Tier-1 benchmark prices to conducting pre-shipment drop tests and securing ocean slots, we manage every trade phase.
            </p>
          </div>
        </Container>
      </section>

      <Container size="xl">
        {/* Core Services Detailed Sections */}
        <div className="space-y-16">
          {TRADE_SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.iconName] || ShieldCheck;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                id={srv.id}
                key={srv.id}
                className="rounded-3xl bg-white p-8 sm:p-12 border border-brand-gray-border/80 shadow-card"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="blue" size="sm">
                        Service 0{idx + 1}
                      </Badge>
                    </div>

                    <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-blue-navy">
                      {srv.title}
                    </h2>

                    <p className="text-sm font-semibold text-brand-blue leading-relaxed">
                      {srv.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-brand-gray-text leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-brand-blue-navy uppercase tracking-wider">
                        Key Operational Advantages:
                      </h4>
                      <ul className="space-y-2">
                        {srv.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-brand-gray-text">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Link to="/contact">
                        <Button variant="primary" size="md" glow icon={<ArrowRight className="w-4 h-4" />}>
                          Inquire for {srv.title.split(' ')[0]}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Box */}
                  <div className="lg:col-span-5 bg-brand-gray-bg/80 rounded-2xl p-6 sm:p-8 border border-brand-gray-border/80 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-brand-gray-border">
                      <span className="text-xs font-bold text-brand-blue-navy uppercase tracking-wider">
                        Certified Deliverables
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-blue">
                        <Clock className="w-3.5 h-3.5" /> {srv.timeline}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="p-3 bg-white rounded-xl border border-brand-gray-border shadow-xs text-xs font-medium text-slate-800 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 text-[11px] text-brand-gray-muted leading-relaxed">
                      All audit reports and test findings are archived in your secure client portal for rapid customs and insurance retrieval.
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Trade Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-blue-navy text-white text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white">
            Need a Bespoke Trade or Consolidation Route?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto">
            Our trade coordinators manage complex multi-supplier container consolidations (LCL into FCL), OEM tooling protection, and specialized customs tariffs worldwide.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button variant="accent" size="lg" glow icon={<ArrowRight className="w-4 h-4" />}>
                Connect With Trade Desk
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
