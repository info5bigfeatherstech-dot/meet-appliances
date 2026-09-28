import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MeetLogo } from './MeetLogo';
import { COMPANY_INFO } from '../../data/company';
import { Container } from './Container';
import { WavyBackground } from '@/components/ui/wavy-background';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-blue-navy text-white relative overflow-hidden">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue-deep z-20" />

      {/* Interactive Wavy Canvas Background */}
      <WavyBackground
        className="w-full pt-8 pb-5 sm:pt-10 sm:pb-6"
        containerClassName="w-full relative"
        backgroundFill="#091B33"
        colors={["#0068B4", "#74C043", "#004D85", "#38bdf8", "#5A6572"]}
        waveWidth={45}
        waveOpacity={0.28}
        blur={10}
        speed="slow"
      >
        <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          {/* Col 1: Brand & Strict Trader Disclaimer */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <MeetLogo size="lg" variant="dark" />
            </Link>
            
            <p className="font-montreal font-medium text-slate-300 text-sm leading-relaxed max-w-sm">
              Your trusted global sourcing, trading, and logistics partner for residential & commercial appliances. Connecting international distributors to audited tier-1 manufacturing hubs with end-to-end AQL II quality control.
            </p>

            <div className="font-montreal font-medium rounded-xl bg-white/5 border border-white/10 p-3.5 text-xs text-slate-300 leading-relaxed">
              <span className="text-brand-green font-semibold block mb-1">Neutral Trading & Sourcing Partner</span>
              Meet Appliances is a dedicated international trader and sourcing agent. We do not manufacture; we represent global buyers and oversee factory vetting, quality inspections, and maritime container logistics.
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1 text-[11px] bg-white/10 text-slate-200 px-2.5 py-1 rounded-md border border-white/10">
                  <ShieldCheck className="w-3 h-3 text-brand-green" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Appliance Categories */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Appliances
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/products?category=refrigeration" className="hover:text-brand-green transition-colors">Refrigeration & Freezers</Link></li>
              <li><Link to="/products?category=laundry" className="hover:text-brand-green transition-colors">Washing & Drying Machines</Link></li>
              <li><Link to="/products?category=climate" className="hover:text-brand-green transition-colors">Air Conditioning & HVAC</Link></li>
              <li><Link to="/products?category=cooking" className="hover:text-brand-green transition-colors">Built-in Ovens & Cooktops</Link></li>
              <li><Link to="/products?category=small-appliances" className="hover:text-brand-green transition-colors">Smart Small Kitchenware</Link></li>
              <li><Link to="/products?category=commercial" className="hover:text-brand-green transition-colors">Commercial Beverage Coolers</Link></li>
            </ul>
          </div>

          {/* Col 3: Sourcing & Trade Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Trade Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/services#sourcing" className="hover:text-brand-green transition-colors">Factory Sourcing & Vetting</Link></li>
              <li><Link to="/services#quality-inspection" className="hover:text-brand-green transition-colors">Pre-Shipment Inspection (QA)</Link></li>
              <li><Link to="/services#import-export" className="hover:text-brand-green transition-colors">Container Logistics & Ocean Freight</Link></li>
              <li><Link to="/services#compliance" className="hover:text-brand-green transition-colors">Customs & Lab Certifications</Link></li>
              <li><Link to="/about" className="hover:text-brand-green transition-colors">About Meet Appliances</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Request Container Quote</Link></li>
            </ul>
          </div>

          {/* Col 4: Trade Intelligence & Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Trade Intelligence
            </h4>
            <p className="font-montreal font-medium text-slate-300 text-xs leading-relaxed mb-4">
              Receive quarterly ocean freight rate trends, appliance regulatory updates, and seasonal sourcing advisories.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-brand-green text-xs bg-brand-green/10 border border-brand-green/30 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Sourcing reports will be emailed to you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-base sm:text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all min-h-[44px]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to Trade Report"
                    className="absolute right-1 top-1 bottom-1 px-4 bg-brand-green text-brand-blue-navy rounded-lg hover:bg-white transition-colors flex items-center justify-center min-w-[44px]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="font-montreal text-[11px] text-slate-400 block">Strictly B2B trade updates. No spam.</span>
              </form>
            )}

            {/* Direct Contact info */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-slate-300">Incoterms® 2020 Compliant</span>
            <span className="text-slate-300">B2B Trade Only</span>
            <Link to="/contact" className="hover:text-white transition-colors py-1">Inquiry Desk</Link>
          </div>
        </div>
      </Container>
    </WavyBackground>
  </footer>
  );
};
