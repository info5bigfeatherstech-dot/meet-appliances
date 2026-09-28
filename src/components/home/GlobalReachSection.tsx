import React, { useState } from 'react';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';
import { TRADE_HUBS, TRADE_ROUTES } from '../../data/tradeRoutes';
import { WorldTradeMapCanvas } from './WorldTradeMapCanvas';
import { Globe, Clock, Box, ArrowRight } from 'lucide-react';

export const GlobalReachSection: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState(TRADE_ROUTES[0]);

  return (
    <section className="py-24 bg-brand-blue-navy text-white relative overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealOnScroll direction="up">
            <Badge variant="dark" className="mb-3">
              Worldwide Maritime Network
            </Badge>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white tracking-tight">
              58 Destination Countries, Zero Blindspots
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-base text-slate-300 mt-4 leading-relaxed">
              We contract direct ocean liner allocations across Maersk, MSC, COSCO, and CMA CGM. Whether shipping full container loads (FCL) to Europe or multi-stop consolidation to South America, your cargo moves with scheduled precision.
            </p>
          </RevealOnScroll>
        </div>

        {/* Global Map Display with Real-Time Routing Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Canvas Map Interactive Area */}
          <div className="lg:col-span-8 rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-green" />
                <span className="font-heading font-bold text-sm tracking-wide text-white">
                  Real-Time Trade Lanes & Port Hubs
                </span>
              </div>
              <span className="text-xs text-brand-green font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                Active Shipping Season
              </span>
            </div>

            {/* Canvas World Map */}
            <div className="h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden bg-slate-900/60 border border-white/5">
              <WorldTradeMapCanvas />
            </div>

            {/* Hubs pill ribbon */}
            <div className="mt-5 flex flex-wrap gap-2 pt-2">
              {TRADE_HUBS.map((hub) => (
                <div
                  key={hub.id}
                  className="inline-flex items-center gap-1.5 text-xs bg-white/10 text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 hover:border-brand-green transition-colors"
                >
                  <span className={`w-2 h-2 rounded-full ${hub.type === 'Sourcing Hub' ? 'bg-brand-blue' : 'bg-brand-green'}`}></span>
                  <span className="font-semibold text-white">{hub.city}</span>
                  <span className="text-[10px] text-slate-400">({hub.code})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sourcing Corridors Selector */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Major Shipping Corridors
            </h3>

            <div className="space-y-3">
              {TRADE_ROUTES.map((route) => {
                const isSelected = selectedRoute.id === route.id;

                return (
                  <div
                    key={route.id}
                    onClick={() => setSelectedRoute(route)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-brand-blue/20 border-brand-green shadow-glow-green/20'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className="text-brand-green">{route.origin.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-white">{route.destination.name}</span>
                    </div>

                    <div className="text-xs text-slate-300 font-medium mt-1">
                      {route.applianceCategory}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-blue" />
                        {route.transitTime}
                      </span>
                      <span className="flex items-center gap-1 text-slate-300 font-medium">
                        <Box className="w-3 h-3 text-brand-green" />
                        {route.monthlyVolume}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Sourcing Advice */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="font-semibold text-white block mb-1">Need a custom port quote?</span>
              We provide spot rates & long-term contract pricing for FOB, CIF, and CFR shipments with demurrage protection.
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
