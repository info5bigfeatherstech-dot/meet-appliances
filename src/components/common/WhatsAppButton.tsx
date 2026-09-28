import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick popup tooltip */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-brand-gray-border animate-fade-in transition-all">
          <div className="flex items-center justify-between pb-2 border-b border-brand-gray-border">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-brand-blue-navy">Trade Desk Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close Trade Desk Popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-brand-gray-text mt-2.5 leading-relaxed">
            Need an urgent container quote, FOB pricing or product spec sheet? Connect directly with our international trading coordinators.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-[#20ba59] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact Trade Desk on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[9px] font-bold text-white items-center justify-center">1</span>
        </span>
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-6" />
      </button>
    </div>
  );
};
