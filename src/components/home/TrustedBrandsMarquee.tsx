import React from 'react';
import { Marquee } from '../common/Marquee';
import { BRAND_PARTNERS } from '../../data/brands';
import { Container } from '../common/Container';
import { Award } from 'lucide-react';

export const TrustedBrandsMarquee: React.FC = () => {
  return (
    <section id="brands-marquee" className="py-12 bg-white border-y border-brand-gray-border/80">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
              <Award className="w-4 h-4 text-brand-green" />
              <span>Global Supply Network</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-blue-navy mt-1">
              Trusted by Leading Importers & Retail Chains
            </h3>
          </div>
          <p className="text-xs text-brand-gray-muted max-w-md">
            We partner with premier distributors and OEM brand licensors across Europe, the Americas, GCC, and Asia-Pacific.
          </p>
        </div>

        <Marquee speed={28} pauseOnHover={true}>
          {BRAND_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-brand-gray-bg/80 border border-brand-gray-border/70 hover:border-brand-blue/30 hover:bg-brand-blue-subtle/30 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-blue-navy text-white flex items-center justify-center font-heading font-bold text-xs group-hover:bg-brand-blue transition-colors">
                {partner.name.substring(0, 2)}
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-sm tracking-wide text-brand-blue-navy block group-hover:text-brand-blue transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-brand-gray-muted uppercase tracking-wider block">
                  {partner.subtitle}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </Container>
    </section>
  );
};
