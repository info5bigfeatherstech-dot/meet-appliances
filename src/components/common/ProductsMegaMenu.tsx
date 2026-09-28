import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductsByCategory } from '../../data/products';

export interface MenuCategoryGroup {
  title: string;
  slug: string;
}

export const MEGA_MENU_COLUMNS: MenuCategoryGroup[][] = [
  // Column 1
  [
    { title: 'REFRIGERATION & FREEZERS', slug: 'refrigeration' },
    { title: 'COOKING & BUILT-IN OVENS', slug: 'cooking' },
  ],
  // Column 2
  [
    { title: 'WASHING MACHINES & DRYERS', slug: 'laundry' },
    { title: 'DISHWASHERS & CLEANING', slug: 'dishwashers' },
  ],
  // Column 3
  [
    { title: 'AIR CONDITIONING & HVAC', slug: 'climate' },
    { title: 'SMART SMALL KITCHENWARE', slug: 'small-appliances' },
  ],
];

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
      className="w-full max-w-5xl bg-white rounded-3xl border border-brand-gray-border/90 shadow-[0_25px_60px_-15px_rgba(0,104,180,0.18)] p-6 sm:p-8 text-brand-gray-text select-none overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {MEGA_MENU_COLUMNS.map((column, colIdx) => (
          <div key={colIdx} className="space-y-8">
            {column.map((cat) => {
              const products = getProductsByCategory(cat.slug).slice(0, 6);
              return (
                <div key={cat.slug} className="space-y-3">
                  <Link
                    to={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="group inline-flex items-center gap-1.5"
                  >
                    <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-brand-blue-navy group-hover:text-brand-blue transition-colors">
                      {cat.title}
                    </h4>
                  </Link>
                  <ul className="space-y-2">
                    {products.map((p) => (
                      <li key={p.id}>
                        <Link
                          to={`/products/${p.id}`}
                          onClick={onClose}
                          className="group flex items-center gap-2 text-xs sm:text-sm text-brand-gray-text hover:text-brand-blue transition-colors"
                        >
                          <span className="text-slate-400 group-hover:text-brand-green font-bold transition-colors">
                            •
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform line-clamp-1">
                            {p.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
