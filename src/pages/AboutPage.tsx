import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ShieldCheck, Target, Globe, ArrowRight, Scale } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2012', title: 'Founded in Global Trade Port', desc: 'Began operations as an independent sourcing bureau connecting European distributors with Ningbo refrigeration producers.' },
    { year: '2015', title: 'Established Resident QA Team', desc: 'Built dedicated engineering inspection squads in Shunde, Ningbo, and Qingdao for 100% pre-shipment testing.' },
    { year: '2018', title: '50-Country Milestone', desc: 'Expanded trade coverage to Latin America, Middle East, and Sub-Saharan Africa with tailored regional certification support.' },
    { year: '2021', title: 'Direct Carrier Alliances', desc: 'Secured priority annual container allocations across Maersk and MSC to bypass post-pandemic supply chain crunches.' },
    { year: '2024+', title: '14,000+ Containers Shipped', desc: 'Recognized as premier international appliance sourcing partner with $280M+ cumulative merchandise delivered.' },
  ];

  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="py-16 md:py-20 bg-brand-blue-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-4">
              Our Identity & Purpose
            </Badge>
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl text-white tracking-tight">
              An Independent Partner Advocating for the Importer
            </h1>
            <p className="font-subheading text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We do not manufacture appliances. We exist to protect international brands, distributors, and retail chains from the risks, hidden costs, and quality compromises of overseas procurement.
            </p>
          </div>
        </Container>
      </section>

      {/* Critical Non-Manufacturer Disclaimer Banner */}
      <section className="py-8 bg-brand-blue-subtle border-b border-brand-gray-border">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-2xl border border-brand-blue/20 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-brand-blue-navy uppercase tracking-wide">
                Our Non-Manufacturing Guarantee & Trader Independence
              </h3>
              <p className="text-xs text-brand-gray-text mt-1 leading-relaxed">
                Meet Appliances does not own factories or assembly lines. When you work with a factory sales representative, their allegiance belongs to the manufacturer. When you work with Meet Appliances, our sole fiduciary duty is to <strong>YOU</strong>—ensuring verified components, rock-bottom volume tariffs, and zero defect tolerance before cargo is loaded.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-20 bg-brand-gray-bg">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-8 border border-brand-gray-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-3">Our Mission</h3>
              <p className="text-xs text-brand-gray-text leading-relaxed">
                To eliminate the friction and vulnerability of international appliance commerce through fearless factory vetting, rigorous engineering verification, and guaranteed maritime freight delivery.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-brand-gray-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-3">Global Vision</h3>
              <p className="text-xs text-brand-gray-text leading-relaxed">
                To be the undisputed global benchmark for home appliance sourcing intelligence—trusted by tier-1 retailers across all 5 continents for flawless container delivery.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-brand-gray-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-3">Zero Compromise</h3>
              <p className="text-xs text-brand-gray-text leading-relaxed">
                We reject products that fail any component test, irrespective of factory pushback. Our engineering reports are exhaustive, objective, and backed by verifiable photographic evidence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sourcing & Verification Workflow */}
      <section className="py-20 bg-white">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="blue" className="mb-3">
              Due Diligence
            </Badge>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              Our 5-Pillar Supplier Vetting Protocol
            </h2>
            <p className="text-base text-brand-gray-muted mt-3">
              Only 14% of audited manufacturing applicants pass our strict onboarding criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Financial Solvency', desc: 'Verification of audited balance sheets to prevent factory default or insolvency midway through production cycles.' },
              { step: '02', title: 'Tooling & Machinery', desc: 'Inspection of robotic welding, automated metal stamping, and plastic injection molds for consistency.' },
              { step: '03', title: 'Ethical Standards', desc: 'BSCI & SA8000 compliance ensuring safe worker environments and zero exploitative labor.' },
              { step: '04', title: 'Lab Accreditation', desc: 'Verification of in-house testing labs, thermal chambers, and salt-spray corrosion test equipment.' },
              { step: '05', title: 'Component Traceability', desc: 'Strict tracking of tier-1 compressors (GMCC, Embraco), motors, and PCBA microcontrollers.' },
            ].map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-gray-bg border border-brand-gray-border">
                <span className="font-heading font-semibold text-2xl text-brand-blue block mb-2">{v.step}</span>
                <h4 className="font-heading font-bold text-base text-brand-blue-navy mb-2">{v.title}</h4>
                <p className="text-xs text-brand-gray-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Historical Milestones */}
      <section className="py-20 bg-brand-gray-bg">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
              Our Growth Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white border border-brand-gray-border shadow-sm">
                <div className="font-heading font-semibold text-xl text-brand-blue shrink-0 w-20">
                  {m.year}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-brand-blue-navy mb-1">{m.title}</h4>
                  <p className="text-xs text-brand-gray-muted leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="primary" size="lg" glow icon={<ArrowRight className="w-4 h-4" />}>
                Partner with Meet Appliances Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
