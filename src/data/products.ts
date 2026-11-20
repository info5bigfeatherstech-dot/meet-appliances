import type { Product } from '../types';

/**
 * Dynamic Catalog: Dummy products removed.
 * All products are now fetched dynamically from the Admin Panel API.
 */
export const PRODUCTS_DATA: Product[] = [];

export const getCategoryBySlug = (slug: string): string => {
  const map: Record<string, string> = {
    'kitchen': 'Kitchen',
    'home-care': 'Home Care',
    'personal-care': 'Personal Care',
    'cooling-air': 'Cooling & Air',
    'laundry': 'Laundry',
    'home-comfort': 'Home Comfort',
    'refrigeration': 'Refrigeration & Freezers',
    'climate': 'Air Conditioning & HVAC',
    'cooking': 'Cooking & Built-in Ovens',
    'small-appliances': 'Smart Small Kitchenware',
    'dishwashers': 'Dishwashers & Cleaning',
    'entertainment': 'Smart Television & Display',
    'commercial': 'Commercial Beverage Coolers',
  };
  return map[slug.toLowerCase()] || slug;
};

export const getProductsByCategory = (categorySlugOrName: string): Product[] => {
  const directName = getCategoryBySlug(categorySlugOrName);
  const target = (directName || categorySlugOrName).toLowerCase();
  return PRODUCTS_DATA.filter((p) => 
    p.category.toLowerCase() === target ||
    p.subCategory?.toLowerCase() === target ||
    p.category.toLowerCase().includes(target)
  );
};
