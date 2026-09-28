import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface MegaMenuItem {
  label: string;
  query?: string;
  category?: string;
}

export interface MegaMenuCategory {
  title: string;
  slug: string;
  items: MegaMenuItem[];
  viewAllLink?: string;
  viewAllText?: string;
}

export const PRODUCTS_MEGA_MENU_DATA: {
  column1: MegaMenuCategory[];
  column2: MegaMenuCategory[];
  column3: MegaMenuCategory[];
} = {
  column1: [
    {
      title: 'KITCHEN',
      slug: 'cooking',
      viewAllText: 'View All Kitchen',
      viewAllLink: '/category/cooking',
      items: [
        { label: 'Air Fryers', query: 'Air Fryer' },
        { label: 'Blenders', query: 'Blender' },
        { label: 'Kettles', query: 'Kettle' },
        { label: 'Rice Cookers', query: 'Rice Cooker' },
        { label: 'Toasters', query: 'Toaster' },
      ],
    },
    {
      title: 'COOLING & AIR',
      slug: 'climate',
      items: [
        { label: 'Fans', query: 'Fan' },
        { label: 'Air Purifiers', query: 'Air Purifier' },
        { label: 'Humidifiers', query: 'Humidifier' },
      ],
    },
  ],
  column2: [
    {
      title: 'HOME CARE',
      slug: 'dishwashers',
      viewAllText: 'View All Home Care',
      viewAllLink: '/category/dishwashers',
      items: [
        { label: 'Vacuum Cleaners', query: 'Vacuum Cleaner' },
        { label: 'Steam Cleaners', query: 'Steam Cleaner' },
        { label: 'Floor Cleaners', query: 'Floor Cleaner' },
        { label: 'Window Cleaners', query: 'Window Cleaner' },
        { label: 'Carpet Cleaners', query: 'Carpet Cleaner' },
      ],
    },
    {
      title: 'LAUNDRY',
      slug: 'laundry',
      items: [
        { label: 'Garment Steamers', query: 'Garment Steamer' },
        { label: 'Steam Irons', query: 'Steam Iron' },
        { label: 'Drying Appliances', query: 'Dryer' },
      ],
    },
  ],
  column3: [
    {
      title: 'PERSONAL CARE',
      slug: 'small-appliances',
      viewAllText: 'View All Personal Care',
      viewAllLink: '/category/small-appliances',
      items: [
        { label: 'Hair Dryers', query: 'Hair Dryer' },
        { label: 'Hair Straighteners', query: 'Hair Straightener' },
        { label: 'Trimmers', query: 'Trimmer' },
        { label: 'Shavers', query: 'Shaver' },
        { label: 'Grooming', query: 'Grooming' },
      ],
    },
    {
      title: 'HOME COMFORT',
      slug: 'small-appliances',
      items: [
        { label: 'Heaters', query: 'Heater' },
        { label: 'Humidifiers', query: 'Humidifier' },
        { label: 'Aroma Diffusers', query: 'Aroma Diffuser' },
      ],
    },
  ],
};

interface ProductsMegaMenuProps {
  onClose?: () => void;
}

export const ProductsMegaMenu: React.FC<ProductsMegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full max-w-4xl bg-white rounded-3xl border border-brand-gray-border/90 shadow-[0_25px_60px_-15px_rgba(0,104,180,0.18)] p-6 sm:p-8 text-brand-gray-text select-none overflow-hidden"
    >
      {/* Top Header matching reference image: PRODUCTS and underline */}
      <div className="pb-4 mb-6 border-b border-brand-gray-border/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-heading font-semibold text-sm sm:text-base tracking-[0.2em] uppercase text-brand-blue-navy">
            Products
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green"></span>
        </div>
        <span className="text-[11px] font-semibold text-brand-blue bg-brand-blue-subtle px-3 py-1 rounded-full border border-brand-blue/20">
          Global B2B Sourcing Portfolio
        </span>
      </div>

      {/* 3 Columns Grid matching reference layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        
        {/* Column 1: KITCHEN and COOLING & AIR */}
        <div className="space-y-8">
          {PRODUCTS_MEGA_MENU_DATA.column1.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-brand-blue-navy">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      to={`/products?q=${encodeURIComponent(item.query || item.label)}`}
                      onClick={onClose}
                      className="group flex items-center gap-2 text-xs sm:text-sm text-brand-gray-text hover:text-brand-blue transition-colors"
                    >
                      <span className="text-slate-400 group-hover:text-brand-green font-bold transition-colors">
                        •
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {cat.viewAllLink && (
                <div className="pt-1.5">
                  <Link
                    to={cat.viewAllLink}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-deep transition-colors"
                  >
                    <span>{cat.viewAllText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2: HOME CARE and LAUNDRY */}
        <div className="space-y-8">
          {PRODUCTS_MEGA_MENU_DATA.column2.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-brand-blue-navy">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      to={`/products?q=${encodeURIComponent(item.query || item.label)}`}
                      onClick={onClose}
                      className="group flex items-center gap-2 text-xs sm:text-sm text-brand-gray-text hover:text-brand-blue transition-colors"
                    >
                      <span className="text-slate-400 group-hover:text-brand-green font-bold transition-colors">
                        •
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {cat.viewAllLink && (
                <div className="pt-1.5">
                  <Link
                    to={cat.viewAllLink}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-deep transition-colors"
                  >
                    <span>{cat.viewAllText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Column 3: PERSONAL CARE and HOME COMFORT */}
        <div className="space-y-8">
          {PRODUCTS_MEGA_MENU_DATA.column3.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-brand-blue-navy">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <Link
                      to={`/products?q=${encodeURIComponent(item.query || item.label)}`}
                      onClick={onClose}
                      className="group flex items-center gap-2 text-xs sm:text-sm text-brand-gray-text hover:text-brand-blue transition-colors"
                    >
                      <span className="text-slate-400 group-hover:text-brand-green font-bold transition-colors">
                        •
                      </span>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {cat.viewAllLink && (
                <div className="pt-1.5">
                  <Link
                    to={cat.viewAllLink}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-deep transition-colors"
                  >
                    <span>{cat.viewAllText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Action matching reference image: [ ALL PRODUCTS -> ] */}
      <div className="mt-8 pt-6 border-t border-brand-gray-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-brand-gray-muted">
          <Sparkles className="w-4 h-4 text-brand-green" />
          <span>Need custom OEM/ODM packaging or container load plans?</span>
        </div>

        <Link
          to="/products"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-deep text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-soft hover:shadow-card hover:scale-[1.02] active:scale-95"
        >
          <span>[ ALL PRODUCTS → ]</span>
        </Link>
      </div>

    </motion.div>
  );
};
