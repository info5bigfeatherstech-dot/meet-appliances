import type { TradeRoute } from '../types';

export const TRADE_HUBS = [
  { id: 'asia-east', name: 'East Asia Cluster', city: 'Ningbo & Shanghai', type: 'Sourcing Hub', x: 74, y: 44, code: 'CN' },
  { id: 'asia-south', name: 'South Asia Hub', city: 'Shunde & Foshan', type: 'Sourcing Hub', x: 72, y: 50, code: 'CN' },
  { id: 'europe-north', name: 'North Europe Gateway', city: 'Rotterdam & Hamburg', type: 'Import Destination', x: 48, y: 28, code: 'EU' },
  { id: 'middle-east', name: 'Middle East Hub', city: 'Jebel Ali / Dubai', type: 'Trade Gateway', x: 60, y: 46, code: 'UAE' },
  { id: 'na-west', name: 'North America West', city: 'Los Angeles / Long Beach', type: 'Import Destination', x: 18, y: 38, code: 'USA' },
  { id: 'latam-east', name: 'South America East', city: 'Santos / Sao Paulo', type: 'Import Destination', x: 33, y: 72, code: 'BR' },
  { id: 'oceania', name: 'Oceania Hub', city: 'Sydney & Melbourne', type: 'Import Destination', x: 86, y: 76, code: 'AU' },
  { id: 'africa-south', name: 'Southern Africa Gateway', city: 'Durban', type: 'Import Destination', x: 53, y: 74, code: 'ZA' },
  { id: 'mediterranean', name: 'Mediterranean Corridor', city: 'Genoa / Valencia', type: 'Import Destination', x: 49, y: 35, code: 'IT' }
];

export const TRADE_ROUTES: TradeRoute[] = [
  {
    id: 'route-1',
    origin: { name: 'Ningbo Port', country: 'China', x: 74, y: 44 },
    destination: { name: 'Port of Rotterdam', country: 'Netherlands', x: 48, y: 28 },
    applianceCategory: 'Refrigeration & Dishwashers',
    transitTime: '26 - 30 Days',
    monthlyVolume: '180+ Containers'
  },
  {
    id: 'route-2',
    origin: { name: 'Shunde Hub', country: 'China', x: 72, y: 50 },
    destination: { name: 'Jebel Ali Port', country: 'UAE', x: 60, y: 46 },
    applianceCategory: 'Tropical AC & Kitchen Hobs',
    transitTime: '14 - 18 Days',
    monthlyVolume: '240+ Containers'
  },
  {
    id: 'route-3',
    origin: { name: 'Qingdao Port', country: 'China', x: 73, y: 40 },
    destination: { name: 'Port of Los Angeles', country: 'USA', x: 18, y: 38 },
    applianceCategory: 'Smart Small Kitchenware & TVs',
    transitTime: '16 - 20 Days',
    monthlyVolume: '310+ Containers'
  },
  {
    id: 'route-4',
    origin: { name: 'Foshan Cluster', country: 'China', x: 71, y: 49 },
    destination: { name: 'Port of Santos', country: 'Brazil', x: 33, y: 72 },
    applianceCategory: 'Microwaves & Washer-Dryers',
    transitTime: '32 - 38 Days',
    monthlyVolume: '95+ Containers'
  },
  {
    id: 'route-5',
    origin: { name: 'Ningbo Port', country: 'China', x: 74, y: 44 },
    destination: { name: 'Port of Sydney', country: 'Australia', x: 86, y: 76 },
    applianceCategory: 'Energy Star Induction Hobs & Ovens',
    transitTime: '15 - 19 Days',
    monthlyVolume: '140+ Containers'
  }
];
