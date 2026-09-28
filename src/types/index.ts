export type TradeMode = 'import' | 'export' | 'both';

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  modelCode: string;
  badge?: string;
  description: string;
  features: string[];
  specs: {
    capacity?: string;
    power?: string;
    energyRating?: string;
    dimensions?: string;
    voltage?: string;
    weight?: string;
    certifications: string[];
  };
  tradeTerms: string[]; // ['FOB Shanghai', 'CIF Rotterdam', 'EXW Ningbo']
  moq: string; // '500 Units / 1x40HQ Container'
  leadTime: string; // '25-35 Days'
  tradeType: TradeMode;
  isFeatured?: boolean;
  image: string;
  gallery?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  itemCount: number;
  description: string;
  image: string;
  highlightSpecs: string[];
}

export interface TradeService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryCode: string;
  rating: number;
  review: string;
  shipmentType: string;
  avatar: string;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface TradeRoute {
  id: string;
  origin: { name: string; country: string; x: number; y: number };
  destination: { name: string; country: string; x: number; y: number };
  applianceCategory: string;
  transitTime: string;
  monthlyVolume: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}
