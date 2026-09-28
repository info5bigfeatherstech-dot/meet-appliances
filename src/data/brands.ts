export interface BrandPartner {
  id: string;
  name: string;
  subtitle: string;
  category: string;
}

export const BRAND_PARTNERS: BrandPartner[] = [
  { id: '1', name: 'NORDHAUS', subtitle: 'Kitchen Suites Germany', category: 'Major Domestic' },
  { id: '2', name: 'SOLARIA CLIMATE', subtitle: 'Inverter Systems', category: 'HVAC' },
  { id: '3', name: 'AURA PRO APPLIANCES', subtitle: 'Global Sourcing Line', category: 'Smart Small' },
  { id: '4', name: 'VANGUARD LIVING', subtitle: 'United Kingdom', category: 'Built-in Cooking' },
  { id: '5', name: 'AL-MADINA TECH', subtitle: 'GCC Distribution', category: 'Tropical Cooling' },
  { id: '6', name: 'PACIFIC HORIZON', subtitle: 'Australasia Import', category: 'Laundry & Dish' },
  { id: '7', name: 'EUROMARK TRADING', subtitle: 'Rotterdam Port Hub', category: 'Refrigeration' },
  { id: '8', name: 'ANDES HOME CORP', subtitle: 'South America Retail', category: 'Home Displays' },
];
