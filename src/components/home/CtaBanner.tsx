import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Container as ContainerIcon, ShieldCheck, PhoneCall } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { COMPANY_INFO } from '../../data/company';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-gray-bg">
      <Container size="xl">
        <RevealOnScroll direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-blue-deep via-brand-blue to-[#082a7a] text-white p-6 sm:p-10 lg:p-16 shadow-2xl">
            {/* Background Floating Decorative Blobs & Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-subtle" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
            
            {/* Geometric floating accent ring */}
            <div className="absolute top-10 right-1/4 w-32 h-32 rounded-full border border-white/10 pointer-events-none animate-float-slow" />
            <div className="absolute bottom-8 right-12 w-20 h-20 rounded-2xl border border-white/15 rotate-12 pointer-events-none animate-float-reverse" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-brand-green text-xs font-semibold mb-6 border border-white/20">
                {/* <Sparkles className="w-3.5 h-3.5" /> */}
                <span>Next Sourcing Cycle Now Open</span>
              </div>

              <h2 className="font-heading font-medium text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.15]">
                Ready to Secure Your Next Appliance Container?
              </h2>

              <p className="font-subheading text-sm sm:text-base text-slate-200 mt-4 max-w-2xl leading-relaxed">
                Send us your target model specifications, annual volume, and required port of destination. We return a fully-costed CIF/FOB quotation and factory audit report within 24 to 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="accent"
                    size="lg"
                    glow
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="w-full sm:w-auto px-6 sm:px-8 shadow-xl text-brand-blue-navy font-bold min-h-[44px]"
                  >
                    Request a Custom Quote
                  </Button>
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/20 transition-all min-h-[44px]"
                >
                  <PhoneCall className="w-4 h-4 text-brand-green" />
                  <span>Call Trade Desk: {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Security & Neutrality Guarantee Strip */}
              <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  AQL II Pre-Shipment Release Certificate Included
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ContainerIcon className="w-4 h-4 text-brand-green" />
                  Guaranteed Vessel Booking & Space Allocation
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};
