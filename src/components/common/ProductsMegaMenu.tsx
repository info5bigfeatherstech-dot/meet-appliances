import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface MegaMenuItem {
  name: string;
  productId: string;
}

export interface MegaMenuCategory {
  title: string;
  categorySlug: string;
  viewAllLabel?: string;
  items: MegaMenuItem[];
}

export const MEGA_MENU_ROW_1: MegaMenuCategory[] = [
  {
    title: 'KITCHEN',
    categorySlug: 'kitchen',
    viewAllLabel: 'View All Kitchen',
    items: [
      { name: 'Air Fryers', productId: 'prod-air-fryers' },
      { name: 'Blenders', productId: 'prod-blenders' },
      { name: 'Kettles', productId: 'prod-kettles' },
      { name: 'Rice Cookers', productId: 'prod-rice-cookers' },
      { name: 'Toasters', productId: 'prod-toasters' },
    ],
  },
  {
    title: 'HOME CARE',
    categorySlug: 'home-care',
    viewAllLabel: 'View All Home Care',
    items: [
      { name: 'Vacuum Cleaners', productId: 'prod-vacuum-cleaners' },
      { name: 'Steam Cleaners', productId: 'prod-steam-cleaners' },
      { name: 'Floor Cleaners', productId: 'prod-floor-cleaners' },
      { name: 'Window Cleaners', productId: 'prod-window-cleaners' },
      { name: 'Carpet Cleaners', productId: 'prod-carpet-cleaners' },
    ],
  },
  {
    title: 'PERSONAL CARE',
    categorySlug: 'personal-care',
    viewAllLabel: 'View All Personal Care',
    items: [
      { name: 'Hair Dryers', productId: 'prod-hair-dryers' },
      { name: 'Hair Straighteners', productId: 'prod-hair-straighteners' },
      { name: 'Trimmers', productId: 'prod-trimmers' },
      { name: 'Shavers', productId: 'prod-shavers' },
      { name: 'Grooming', productId: 'prod-grooming' },
    ],
  },
];

export const MEGA_MENU_ROW_2: MegaMenuCategory[] = [
  {
    title: 'COOLING & AIR',
    categorySlug: 'cooling-air',
    items: [
      { name: 'Fans', productId: 'prod-fans' },
      { name: 'Air Purifiers', productId: 'prod-air-purifiers' },
      { name: 'Humidifiers', productId: 'prod-cooling-humidifiers' },
    ],
  },
  {
    title: 'LAUNDRY',
    categorySlug: 'laundry',
    items: [
      { name: 'Garment Steamers', productId: 'prod-garment-steamers' },
      { name: 'Steam Irons', productId: 'prod-steam-irons' },
      { name: 'Drying Appliances', productId: 'prod-drying-appliances' },
    ],
  },
  {
    title: 'HOME COMFORT',
    categorySlug: 'home-comfort',
    items: [
      { name: 'Heaters', productId: 'prod-heaters' },
      { name: 'Humidifiers', productId: 'prod-comfort-humidifiers' },
      { name: 'Aroma Diffusers', productId: 'prod-aroma-diffusers' },
    ],
  },
];

export const ALL_MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  ...MEGA_MENU_ROW_1,
  ...MEGA_MENU_ROW_2,
];

// Compatibility export
export const MEGA_MENU_COLUMNS = [
  MEGA_MENU_ROW_1,
  MEGA_MENU_ROW_2,
];

interface ProductsMegaMenuProps {
  onClose?: () => void;
}

export const ProductsMegaMenu: React.FC<ProductsMegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto bg-[#fafafa] rounded-2xl border border-gray-200/90 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] p-6 sm:p-8 text-gray-800 select-none font-mono"
    >
      {/* Row 1: Kitchen, Home Care, Personal Care */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {MEGA_MENU_ROW_1.map((cat) => (
          <div key={cat.title} className="flex flex-col justify-between">
            <div>
              <h4 className="font-mono font-bold text-xs tracking-wider uppercase text-gray-900 mb-3">
                {cat.title}
              </h4>
              <ul className="space-y-2 mb-4">
                {cat.items.map((item) => (
                  <li key={item.productId}>
                    <Link
                      to={`/products/${item.productId}`}
                      onClick={onClose}
                      className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-700 hover:text-black transition-colors"
                    >
                      <span className="text-gray-900 font-bold">•</span>
                      <span className="group-hover:underline underline-offset-2">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {cat.viewAllLabel && (
              <div className="pt-2">
                <Link
                  to={`/products?category=${cat.categorySlug}`}
                  onClick={onClose}
                  className="font-mono text-xs text-gray-700 hover:text-black hover:underline underline-offset-2 transition-colors inline-block"
                >
                  {cat.viewAllLabel}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Row 2: Cooling & Air, Laundry, Home Comfort */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mt-8 sm:mt-10">
        {MEGA_MENU_ROW_2.map((cat) => (
          <div key={cat.title}>
            <h4 className="font-mono font-bold text-xs tracking-wider uppercase text-gray-900 mb-3">
              {cat.title}
            </h4>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item.productId}>
                  <Link
                    to={`/products/${item.productId}`}
                    onClick={onClose}
                    className="group flex items-center gap-2 text-xs sm:text-[13px] text-gray-700 hover:text-black transition-colors"
                  >
                    <span className="text-gray-900 font-bold">•</span>
                    <span className="group-hover:underline underline-offset-2">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Centered Bottom Link */}
      <div className="text-center pt-8 pb-1">
        <Link
          to="/products"
          onClick={onClose}
          className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-gray-700 hover:text-black transition-colors inline-flex items-center gap-1 group"
        >
          <span>[ ALL PRODUCTS → ]</span>
        </Link>
      </div>
    </motion.div>
  );
};
