import type { ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'refrigeration',
    name: 'Refrigeration & Freezers',
    slug: 'refrigeration',
    iconName: 'Refrigerator',
    itemCount: 48,
    description: 'Energy-rated multi-door, side-by-side, inverter compressors, and chest freezers sourced from audited tier-1 suppliers.',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['Inverter Twin Cooling', 'Total No Frost', 'Energy Class A+++/E', 'R600a Eco-Refrigerant']
  },
  {
    id: 'laundry',
    name: 'Washing Machines & Dryers',
    slug: 'laundry',
    iconName: 'WashingMachine',
    itemCount: 36,
    description: 'Front-load, top-load, and heat pump dryers with BLDC direct drive motors certified for international markets.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['BLDC Inverter Drive', 'Steam Sanitization', 'Heat Pump Drying', '1400 - 1600 RPM']
  },
  {
    id: 'climate',
    name: 'Air Conditioning & HVAC',
    slug: 'climate',
    iconName: 'Wind',
    itemCount: 42,
    description: 'Split wall-mounted, multi-split, and portable air conditioners with R32 refrigerant and T3 tropicalized compressors.',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['T3 Tropical Inverter', 'R32 High Efficiency', 'Smart WiFi App Ready', 'Gold Fin Anti-Corrosion']
  },
  {
    id: 'cooking',
    name: 'Cooking & Built-in Ovens',
    slug: 'cooking',
    iconName: 'Flame',
    itemCount: 54,
    description: 'Gas-on-glass hobs, induction cooktops, pyrolytic built-in convection ovens, and microwave combinations.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['Full Touch Convection', 'German Schott Glass', 'Safety Flame Failure', 'Air Fryer Oven Combo']
  },
  {
    id: 'small-appliances',
    name: 'Smart Small Kitchenware',
    slug: 'small-appliances',
    iconName: 'Coffee',
    itemCount: 75,
    description: 'High-speed air fryers, 20-bar Italian pump espresso machines, slow juicers, and multi-cookers for volume retail distribution.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['Visual Window Air Fryer', '20-Bar Thermoblock', 'Food Grade SS304', 'Custom OEM Gift Box Packaging']
  },
  {
    id: 'dishwashers',
    name: 'Dishwashers & Cleaning',
    slug: 'dishwashers',
    iconName: 'Sparkles',
    itemCount: 28,
    description: 'Fully integrated 60cm & 45cm dishwashers, tabletop models, and ultrasonic vegetable washers.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['14 Place Settings', 'Dual Zone Wash', 'Auto Door Open Drying', 'Low Noise 42dB']
  },
  {
    id: 'entertainment',
    name: 'Smart Television & Display',
    slug: 'entertainment',
    iconName: 'Tv',
    itemCount: 32,
    description: '4K QLED & OLED frameless smart televisions powered by licensed Android TV / Google TV OS for regional wholesalers.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['4K UHD Frameless', 'Dolby Vision & Atmos', 'Google TV Certified', 'DVB-T2 / S2 / ATSC Tuners']
  },
  {
    id: 'commercial',
    name: 'Commercial Beverage Coolers',
    slug: 'commercial',
    iconName: 'Wine',
    itemCount: 22,
    description: 'Upright display coolers, dual-zone wine cellars, ice makers, and stainless steel undercounter refrigeration units.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    highlightSpecs: ['Low-E Double Heated Glass', 'Embraco Compressor', 'LED Dynamic Display', 'Commercial NSF Certified']
  }
];
