import type { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // 1. REFRIGERATION & FREEZERS
  // ==========================================
  {
    id: 'prod-rf-01',
    name: 'French Door 4-Door Inverter Refrigerator',
    category: 'Refrigeration & Freezers',
    subCategory: 'Multi-door',
    modelCode: 'AT-REF-618FD',
    badge: 'High Container Yield',
    description: 'Flagship 618-liter four-door refrigerator featuring triple evaporators, variable frequency inverter compressor, and smart touch control panel. Ideal for national retail chains and regional distributor networks.',
    features: [
      'Dual inverter system (compressor + variable DC fan)',
      'Independent triple cooling zones with zero odor transfer',
      'Electronic temperature touch display with child safety lock',
      'High-grade anti-fingerprint brushed dark inox finish',
      'Container loading optimization: 54 units / 40HQ'
    ],
    specs: {
      capacity: '618 Liters (Gross) / 542L Net',
      power: '160W (Annual consumption 320 kWh/yr)',
      energyRating: 'EU Class E (New) / DOE Star',
      dimensions: '911 x 706 x 1830 mm',
      voltage: '220-240V ~ 50/60Hz or 110V 60Hz',
      weight: '112 kg',
      certifications: ['CE', 'CB', 'RoHS', 'SASO', 'NOM', 'UL/ETL']
    },
    tradeTerms: ['FOB Shanghai / Ningbo', 'CIF Hamburg / Rotterdam', 'CIF Jebel Ali'],
    moq: '54 Units (1x 40HQ Container)',
    leadTime: '30-35 Working Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-rf-02',
    name: 'Side-by-Side 530L Total No-Frost Refrigerator',
    category: 'Refrigeration & Freezers',
    subCategory: 'Side-by-Side',
    modelCode: 'AT-REF-530SBS',
    badge: 'Best Volume Seller',
    description: 'Sleek 530L side-by-side refrigerator equipped with external chilled water dispenser, dual LED tower illumination, inverter compressor, and 90-degree door opening clearance for tight kitchen layouts.',
    features: [
      'Total No-Frost Multi Air Flow technology prevents frost buildup',
      'Non-plumbed 3.5L external water tank dispenser with micro-switch',
      'Super Freeze & Super Cool rapid chilling functions',
      'Premium PCM / VCM steel door with recessed ergonomic handle',
      'High container loading yield: 64 units per 40HQ'
    ],
    specs: {
      capacity: '530 Liters (345L Fridge / 185L Freezer)',
      power: '145W (Annual consumption 298 kWh/yr)',
      energyRating: 'EU Class E / G-Mark 4 Star',
      dimensions: '833 x 653 x 1775 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '89 kg',
      certifications: ['CE', 'CB', 'RoHS', 'G-Mark', 'SASO', 'SONCAP']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Santos', 'CIF Cape Town'],
    moq: '64 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-rf-03',
    name: 'Heavy-Duty Commercial Chest Freezer 380L',
    category: 'Refrigeration & Freezers',
    subCategory: 'Chest Freezer',
    modelCode: 'AT-FRZ-380CF',
    badge: 'T-Climate Class',
    description: 'Commercial deep freezer designed for tropical climates (T-Class up to 43°C ambient). Features embossed aluminum liner, removable wire storage baskets, key lock, and exterior drain port.',
    features: [
      'Heavy-duty copper tube evaporator with aluminum interior lining',
      'Mechanical thermostat with quick freezing switch (-12°C to -26°C)',
      'Thick 75mm high-density polyurethane cyclopentane foam insulation',
      'External handle with integrated safety cylinder key lock',
      'Castor wheels with directional front brakes for commercial mobility'
    ],
    specs: {
      capacity: '380 Liters Net Useful Capacity',
      power: '175W (R600a eco refrigerant)',
      energyRating: 'High Efficiency Tropical Class',
      dimensions: '1255 x 745 x 845 mm',
      voltage: '220-240V 50Hz / 115V 60Hz',
      weight: '56 kg',
      certifications: ['CE', 'CB', 'ETL', 'SASO', 'NOM']
    },
    tradeTerms: ['FOB Qingdao / Ningbo', 'CIF Lagos', 'CIF Manzanillo'],
    moq: '96 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 2. WASHING MACHINES & DRYERS
  // ==========================================
  {
    id: 'prod-wm-02',
    name: 'Front Load 10.5kg BLDC Washer & 7kg Dryer Combo',
    category: 'Washing Machines & Dryers',
    subCategory: 'Washer-Dryer',
    modelCode: 'AT-WMD-1057',
    badge: 'Best Seller',
    description: 'Heavy-duty 10.5kg wash with 7kg condensation dry capability, direct-drive brushless inverter motor, 15 customized wash cycles, and 99.9% allergy steam sanitization.',
    features: [
      'Direct Drive BLDC Motor with 10-year warranty compliance',
      'Steam Spa thermal allergy elimination protocol',
      'Add-Wash flap door feature during live cycle',
      'Honeycomb diamond stainless steel drum to prevent fiber wear',
      'Custom bilingual UI silk printing available'
    ],
    specs: {
      capacity: '10.5kg Wash / 7.0kg Dry',
      power: '2000W Max Heating / 400W Wash',
      energyRating: 'Energy Class A+++ / A',
      dimensions: '595 x 565 x 850 mm',
      voltage: '220-240V 50Hz',
      weight: '73 kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'EMC', 'G-Mark']
    },
    tradeTerms: ['FOB Qingdao / Ningbo', 'CIF Santos', 'CIF Port Klang'],
    moq: '152 Units (1x 40HQ Container)',
    leadTime: '28-35 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-wm-03',
    name: 'Twin-Tub Heavy Duty Semi-Automatic Washer 14kg',
    category: 'Washing Machines & Dryers',
    subCategory: 'Twin-Tub',
    modelCode: 'AT-WMT-1400',
    badge: 'High Durability',
    description: 'High capacity 14.0kg twin-tub washing machine with separate high-speed spin dryer tub. Engineered with anti-corrosion double plastic body and high-torque copper motor for developing markets.',
    features: [
      'Heavy-duty copper winding dual motors with thermal overload protector',
      'Super strong pulsator with 3D water stream for deep fabric penetration',
      'Rust-proof double wall reinforced polypropylene plastic cabinet',
      'Air Jet dry spinner system for accelerated clothes drying',
      'High container stuffing: 140 sets per 40HQ'
    ],
    specs: {
      capacity: '14.0kg Wash / 9.0kg Spin',
      power: '520W Wash / 220W Spin',
      energyRating: 'Commercial Grade Efficiency',
      dimensions: '960 x 550 x 1010 mm',
      voltage: '220V 50Hz / 127V 60Hz',
      weight: '34 kg',
      certifications: ['CE', 'CB', 'SASO', 'SONCAP', 'SABS']
    },
    tradeTerms: ['FOB Ningbo / Cixi', 'CIF Mombasa', 'CIF Douala'],
    moq: '140 Sets (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-wm-04',
    name: 'Heat Pump Sensor Clothes Dryer 9.0kg A+++',
    category: 'Washing Machines & Dryers',
    subCategory: 'Dryers',
    modelCode: 'AT-DRY-900HP',
    badge: 'European Premium Spec',
    description: 'Ultra-low energy heat pump tumble dryer with smart humidity sensors that automatically stop the cycle when clothes reach chosen dryness. Gentle low-temperature drying prevents garment shrinkage.',
    features: [
      'Closed-loop Heat Pump thermodynamic system saves up to 60% power',
      'Smart sensor precision drying (Extra Dry, Cupboard Dry, Iron Dry)',
      'Bi-directional reverse tumbling drum prevents bedsheet tangling',
      'Double lint filter with easy-clean condenser maintenance indicator',
      'Internal LED drum illumination with tempered glass door'
    ],
    specs: {
      capacity: '9.0kg Dry Capacity',
      power: '800W Connected Load (R290 Refrigerant)',
      energyRating: 'EU Energy Class A+++',
      dimensions: '595 x 650 x 845 mm',
      voltage: '220-240V ~ 50Hz',
      weight: '52 kg',
      certifications: ['CE', 'GS', 'CB', 'EMC', 'ERP', 'UKCA']
    },
    tradeTerms: ['FOB Shanghai / Ningbo', 'CIF Rotterdam', 'CIF Sydney'],
    moq: '168 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 3. AIR CONDITIONING & HVAC
  // ==========================================
  {
    id: 'prod-ac-03',
    name: 'T3 Tropicalized Inverter Split Air Conditioner 24,000 BTU',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Wall Split',
    modelCode: 'AT-AC-24T3',
    badge: 'High Ambient 58°C',
    description: 'Engineered for extreme high-temperature markets (Middle East, Africa, Latin America). Delivers continuous rated cooling up to 58°C ambient conditions with eco-friendly R32 refrigerant.',
    features: [
      'Tropical T3 twin-rotary inverter compressor (GMCC / Highly)',
      'Gold-Fin hydrophilic anti-corrosion condenser coating',
      'Self-cleaning 56°C high temperature sterilization cycle',
      'Built-in WiFi IoT module (Tuya / SmartLife compatible)',
      'Low noise airflow chamber (down to 24 dB(A))'
    ],
    specs: {
      capacity: '24,000 BTU / 2.0 Ton / 7000W',
      power: '2150W (CSPF 5.3)',
      energyRating: 'ESMA 5 Stars / SASO Class B',
      dimensions: 'Indoor: 1040x327x220 mm / Outdoor: 860x310x650 mm',
      voltage: '220-240V 50Hz (60Hz version optional)',
      weight: 'Indoor: 13.5kg / Outdoor: 44kg',
      certifications: ['SASO', 'G-Mark', 'CE', 'CB', 'SABS', 'CB-EMC']
    },
    tradeTerms: ['FOB Guangzhou / Foshan', 'CIF Jebel Ali', 'CIF Dammam'],
    moq: '180 Sets (1x 40HQ Container)',
    leadTime: '30 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ac-04',
    name: 'Multi-Split Quad-Zone DC Inverter System 36,000 BTU',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Multi-Split',
    modelCode: 'AT-AC-36MS',
    badge: 'Commercial Villa Spec',
    description: 'High performance 1-to-4 multi-split outdoor unit powering up to 4 independent indoor wall units or ducted cassettes. Individual room temperature control with smooth electronic expansion valves.',
    features: [
      'Single compact outdoor chassis drives up to 4 separate indoor units',
      'Full DC 3D inverter technology (compressor, outdoor fan, indoor motors)',
      'Long piping capability: up to 80m total length / 15m elevation drop',
      'Low ambient heating down to -20°C and cooling up to 52°C',
      'Centralized commercial controller or independent smartphone app'
    ],
    specs: {
      capacity: '36,000 BTU / 10.5 kW Max Capacity',
      power: '3200W (SEER 7.8 / SCOP 4.6)',
      energyRating: 'EU Class A++ (Cooling) / A+ (Heating)',
      dimensions: 'Outdoor: 980 x 395 x 790 mm',
      voltage: '220-240V ~ 50Hz 1-Phase',
      weight: 'Outdoor: 68 kg',
      certifications: ['CE', 'CB', 'RoHS', 'ERP', 'TUV']
    },
    tradeTerms: ['FOB Shunde / Zhuhai', 'CIF Piraeus', 'CIF Valparaiso'],
    moq: '120 Sets (1x 40HQ Container)',
    leadTime: '35 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ac-05',
    name: 'Eco R290 Smart Portable Air Conditioner 12,000 BTU',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Portable AC',
    modelCode: 'AT-AC-12PAC',
    badge: 'Plug & Play Retail',
    description: '3-in-1 portable air conditioner (Cooling, Dehumidifier, 3-Speed Fan) charged with eco-friendly zero-ODP R290 refrigerant. Includes universal window slider seal kit and remote control.',
    features: [
      'Self-evaporative condensation system: minimal manual water drainage required',
      'Integrated Tuya smart WiFi voice control (Alexa & Google Assistant)',
      'Washable dual nylon high-density dust filters',
      'Heavy-duty omni-directional smooth rolling caster wheels',
      'Full retail packaging certified to ISTA 1A drop standard'
    ],
    specs: {
      capacity: '12,000 BTU / 3.5 kW Cooling',
      power: '1350W (EER 2.6)',
      energyRating: 'EU Class A Energy Label',
      dimensions: '440 x 360 x 715 mm',
      voltage: '220-240V 50Hz / 110V 60Hz',
      weight: '29.5 kg',
      certifications: ['CE', 'GS', 'CB', 'RoHS', 'ETL', 'DOE']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Los Angeles', 'CIF Barcelona'],
    moq: '360 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 4. COOKING & BUILT-IN OVENS
  // ==========================================
  {
    id: 'prod-ov-04',
    name: 'Built-in Pyrolytic 75L Convection Oven & AirFry',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Built-in Oven',
    modelCode: 'AT-OV-75PYRO',
    badge: 'European Spec',
    description: 'European standard 60cm built-in multi-function oven with 480°C self-cleaning pyrolytic technology, quadruple glazed cool-touch door, and dedicated 360° AirFry convection mode.',
    features: [
      '480°C Pyrolytic self-cleaning cycle with automatic electronic door lock',
      'Quadruple heat-reflective glass door (exterior stays below 45°C)',
      'Telescopic full-extension chrome sliding rails',
      'Rotisserie spit & dedicated perforated AirFry basket included',
      'White LED touch control with metal control knobs'
    ],
    specs: {
      capacity: '75 Liters Cavity Volume',
      power: '3200W (Max Pyrolytic Mode)',
      energyRating: 'EU Energy Efficiency Class A+',
      dimensions: '595 x 575 x 595 mm (Cutout: 560 x 550 x 590 mm)',
      voltage: '220-240V 50/60Hz',
      weight: '38.5 kg',
      certifications: ['CE', 'GS', 'CB', 'RoHS', 'UKCA', 'ERP']
    },
    tradeTerms: ['FOB Zhongshan / Ningbo', 'CIF Valencia', 'CIF Felixstowe'],
    moq: '210 Units (1x 40HQ Container)',
    leadTime: '35 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ck-05',
    name: '90cm Gas-on-Glass 5-Burner Cooktop with Sabaf Burners',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Gas Hobs',
    modelCode: 'AT-HOB-905SB',
    badge: 'Italian Sabaf Burners',
    description: 'Premium 90cm built-in gas cooktop built on 8mm tempered ceramic thermal glass. Features authentic Italian Sabaf high-efficiency burners, heavy cast iron pan supports, and thermocouple safety valves.',
    features: [
      'Original Italian Sabaf brass burners including 4.2 kW dual-ring wok',
      'Thermocouple Flame Failure Device (FFD) cuts gas instantly if flame is lost',
      '8mm shatterproof beveled thermal tempered glass surface',
      'Heavy-duty matte enamel cast iron trivets for commercial wok stability',
      'Convertible gas nozzles: pre-jetted for LPG or Natural Gas (NG)'
    ],
    specs: {
      capacity: '5 Independent Gas Cooking Zones',
      power: 'Total Thermal Output 11.5 kW',
      energyRating: 'High Efficiency Combustion Class 1',
      dimensions: '870 x 510 x 100 mm (Cutout: 830 x 470 mm)',
      voltage: '220-240V AC Ignition or 1.5V D-Battery optional',
      weight: '18.2 kg',
      certifications: ['CE', 'CB', 'SASO', 'G-Mark', 'NOM', 'AGA']
    },
    tradeTerms: ['FOB Shunde / Zhongshan', 'CIF Tripoli', 'CIF Veracruz'],
    moq: '320 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ck-06',
    name: 'Frameless 4-Zone Induction Cooktop 60cm with FlexBridge',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Induction Hobs',
    modelCode: 'AT-IND-604B',
    badge: 'German Schott Glass',
    description: 'High-speed 7200W four-zone induction cooktop crafted with German Schott Ceran glass. Features FlexBridge joining two zones for large roasters, 9-stage slider touch control, and booster heat mode.',
    features: [
      'Original German Schott Ceran scratch-resistant glass substrate',
      'FlexBridge technology combines two vertical cooking zones into one giant zone',
      'Ultra-fast Booster function boils 1 liter of water in under 90 seconds',
      'Safety functions: Pan detection, residual heat indicator, child lock',
      'Individual 99-minute digital countdown timer for each zone'
    ],
    specs: {
      capacity: '4 Zones (2 x 1800W / Boost 2200W, 2 x 1400W / Boost 1800W)',
      power: '7200W Total Electrical Rating',
      energyRating: 'Over 90% Electromagnetic Transfer Efficiency',
      dimensions: '590 x 520 x 55 mm (Cutout: 560 x 490 mm)',
      voltage: '220-240V ~ 50/60Hz (Single or 2-Phase wiring)',
      weight: '11.5 kg',
      certifications: ['CE', 'CB', 'RoHS', 'EMC', 'UL/cUL']
    },
    tradeTerms: ['FOB Ningbo / Foshan', 'CIF Hamburg', 'CIF Melbourne'],
    moq: '480 Units (1x 40HQ Container)',
    leadTime: '30 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 5. SMART SMALL KITCHENWARE
  // ==========================================
  {
    id: 'prod-af-05',
    name: 'Dual-Zone Visual Window Digital Air Fryer 9.0L',
    category: 'Smart Small Kitchenware',
    subCategory: 'Air Fryers',
    modelCode: 'AT-AF-900DZ',
    badge: 'Fast Mover',
    description: 'Large capacity 9-liter dual chamber air fryer (4.5L + 4.5L) with independent temperature/time controls, Sync-Cook function, and panoramic viewing glass windows with interior lighting.',
    features: [
      'Dual independent heating elements and fans for synchronised dual meals',
      'Smart Sync Finish algorithm: both baskets finish cooking at the same instant',
      'Tempered glass view window with internal halogen lighting',
      'Food-grade non-stick ceramic coating (PFAS/PFOA free)',
      'Comprehensive retailer master carton packaging (drop-test 3A passed)'
    ],
    specs: {
      capacity: '9.0 Liters total (4.5L + 4.5L)',
      power: '2400W (1200W + 1200W Dual Element)',
      energyRating: 'Eco High-Speed Rapid Thermal Air Flow',
      dimensions: '400 x 365 x 320 mm',
      voltage: '220-240V / 110-127V Available',
      weight: '8.2 kg',
      certifications: ['CE', 'CB', 'ETL', 'FDA', 'LFGB', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo / Shenzhen', 'CIF Los Angeles', 'CIF Melbourne'],
    moq: '1,200 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'import',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-esp-08',
    name: 'Commercial-Grade Dual Boiler Espresso Machine 20-Bar',
    category: 'Smart Small Kitchenware',
    subCategory: 'Coffee Machines',
    modelCode: 'AT-ESP-20PRO',
    badge: 'Premium Sourcing',
    description: 'Prosumer 58mm commercial portafilter espresso machine with Italian ULKA 20-bar vibration pump, dual PID temperature control thermoblocks, and commercial dry steam wand.',
    features: [
      'Genuine Italian ULKA 20-bar high performance water pump',
      'Dual independent thermoblocks: brew coffee and steam milk simultaneously',
      '58mm solid brass chrome-plated commercial portafilter',
      'NTC PID precision temperature management (+/- 1°C stability)',
      'Customized laser branding and bespoke retail gift box available'
    ],
    specs: {
      capacity: '2.5 Liter removable water reservoir',
      power: '2200W Instant Heating',
      energyRating: 'A Energy Saver standby mode',
      dimensions: '320 x 280 x 380 mm',
      voltage: '220-240V 50Hz / 120V 60Hz',
      weight: '9.6 kg',
      certifications: ['CE', 'CB', 'ETL', 'FDA', 'LFGB', 'RoHS']
    },
    tradeTerms: ['FOB Shunde / Ningbo', 'CIF Genoa', 'CIF New York'],
    moq: '600 Units (1x 20GP Container) or 1400 (40HQ)',
    leadTime: '30 Days',
    tradeType: 'import',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-sm-09',
    name: 'Wide-Chute Cold Press Slow Masticating Juicer 250W',
    category: 'Smart Small Kitchenware',
    subCategory: 'Juicers',
    modelCode: 'AT-JCR-250W',
    badge: 'High Yield 95%',
    description: 'Low-speed 43 RPM masticating cold press juicer equipped with an extra-wide 82mm feeding chute capable of swallowing whole apples and citrus. Extracts up to 95% juice yield with minimal oxidation.',
    features: [
      'Extra-large 82mm flap-door hopper accepts whole fruits without pre-cutting',
      'Heavy-duty commercial Ultem PEI auger with cold-masticating technology',
      'Ultra-quiet DC motor operating below 55 decibels with reverse anti-clog function',
      'BPA-free Tritan juice bowl with dual cleaning wipers and silicone drip cap',
      'Includes specialized frozen fruit ice cream / sorbet strainer attachment'
    ],
    specs: {
      capacity: '1.0L Juice Pitcher / 1.2L Pulp Container',
      power: '250W High-Torque Pure Copper DC Motor',
      energyRating: 'Low-Energy High-Torque Mastication',
      dimensions: '210 x 180 x 480 mm',
      voltage: '220-240V ~ 50/60Hz / 120V 60Hz',
      weight: '6.4 kg',
      certifications: ['CE', 'CB', 'ETL', 'FDA', 'LFGB', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo / Shenzhen', 'CIF Santos', 'CIF Hamburg'],
    moq: '1,400 Units (1x 40HQ Container)',
    leadTime: '25-28 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 6. DISHWASHERS & CLEANING
  // ==========================================
  {
    id: 'prod-dw-07',
    name: '14-Place Fully Integrated 60cm Smart Dishwasher',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Integrated',
    modelCode: 'AT-DW-14INT',
    badge: 'A+++ Efficiency',
    description: 'High-end fully integrated kitchen dishwasher with sliding door hinge suitable for zero-clearance European cabinetry. Features BLDC water pump, 3rd cutlery rack, and auto door-pop drying.',
    features: [
      'Variable pressure BLDC circulation pump for whisper-quiet 42 dB wash',
      'Auto-Open door technology releases moist air for pristine dry glassware',
      'AquaStop 100% anti-flood electronic sensor valve',
      'Adjustable 3rd layer cutlery rack for flexible loading',
      'Custom cabinet front panel mounting kit included'
    ],
    specs: {
      capacity: '14 International Place Settings',
      power: '1900W (9.5L water per cycle)',
      energyRating: 'EU Class C (High Efficiency New Scale)',
      dimensions: '598 x 550 x 815 mm',
      voltage: '220-240V 50Hz',
      weight: '39 kg',
      certifications: ['CE', 'GS', 'CB', 'EMC', 'RoHS', 'WaterMark']
    },
    tradeTerms: ['FOB Ningbo / Foshan', 'CIF Sydney', 'CIF Genoa'],
    moq: '160 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-dw-08',
    name: 'Freestanding Inox 15-Place Heavy Duty Dishwasher',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Freestanding',
    modelCode: 'AT-DW-15FS',
    badge: 'Dual Zone Wash',
    description: 'Full-size 60cm freestanding dishwasher encased in brushed stainless steel. Features 3-tier spray arms, 70°C hygiene sanitizing rinse, and half-load dual zone efficiency mode.',
    features: [
      'Dual-zone wash system allows independent upper or lower basket washing',
      '70°C Baby-Care thermal rinse eliminates 99.99% of bacteria and viral pathogens',
      'Fingerprint-resistant stainless steel front door with LED display',
      'Interior blue LED illumination upon door opening',
      'Container loading efficiency: 180 units / 40HQ'
    ],
    specs: {
      capacity: '15 International Place Settings',
      power: '2100W Max Heating (10.0L water per cycle)',
      energyRating: 'EU Class B / ESMA 5 Star',
      dimensions: '598 x 600 x 845 mm',
      voltage: '220-240V 50/60Hz',
      weight: '44 kg',
      certifications: ['CE', 'CB', 'SASO', 'G-Mark', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo / Guangzhou', 'CIF Jebel Ali', 'CIF Southampton'],
    moq: '180 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-dw-09',
    name: 'Smart Compact Tabletop UV Dishwasher with Built-in Tank',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Countertop',
    modelCode: 'AT-DW-06TT',
    badge: 'No Plumbing Needed',
    description: 'Portable countertop smart dishwasher with integrated 5-liter water tank. Requires no permanent plumbing installation. Features 360-degree dual rotating wash arms and UV-C germicidal sterilization.',
    features: [
      'Dual water supply mode: manual pour into built-in 5L reservoir OR connect to faucet tap',
      'Medical-grade UV-C LED sterilization destroys bacteria after cycle completion',
      'Transparent viewing window with internal touch sensor control bar',
      'Fruit & vegetable ultrasonic wash program removes chemical pesticide residue',
      'High volume stuffing yield: 450 units per 40HQ container'
    ],
    specs: {
      capacity: '6 International Place Settings (32-piece tableware set)',
      power: '900W Rapid PTC Heating (5.0L water per cycle)',
      energyRating: 'Ultra-low water consumption',
      dimensions: '428 x 425 x 458 mm',
      voltage: '220-240V 50Hz / 110-120V 60Hz',
      weight: '12.5 kg',
      certifications: ['CE', 'CB', 'ETL', 'FDA', 'RoHS', 'PSE']
    },
    tradeTerms: ['FOB Shenzhen / Ningbo', 'CIF Long Beach', 'CIF Tokyo'],
    moq: '450 Units (1x 40HQ Container)',
    leadTime: '25 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 7. SMART TELEVISION & DISPLAY
  // ==========================================
  {
    id: 'prod-tv-06',
    name: '65" 4K QLED Bezel-less Smart Google TV',
    category: 'Smart Television & Display',
    subCategory: 'QLED TV',
    modelCode: 'AT-TV-65QLED',
    badge: 'Tier-1 Panel Source',
    description: 'Ultra-thin bezel-less 65-inch quantum dot 4K display equipped with official certified Google TV OS, MEMC 120Hz motion compensation, Dolby Vision and Dolby Atmos decoding.',
    features: [
      'Genuine Open-Cell Grade A+ panel (BOE / CSOT supply chain)',
      'Licensed Google TV OS with Far-Field Voice Assistant built-in',
      'Frameless aviation-grade alloy unibody frame',
      'Custom regional tuners: DVB-T2/C/S2, ATSC 3.0, ISDB-T',
      'Palletized anti-shock container packing with ISTA transit certification'
    ],
    specs: {
      capacity: '65 Inch 3840 x 2160 UHD Quantum Dot',
      power: '190W (Standby < 0.5W)',
      energyRating: 'Class F (EU New Standard) / Star 5',
      dimensions: '1446 x 290 x 892 mm (with stand)',
      voltage: '100-240V ~ 50/60Hz Universal',
      weight: '19.8 kg net',
      certifications: ['CE', 'CB', 'FCC', 'RoHS', 'Dolby Audio', 'Google Certified']
    },
    tradeTerms: ['FOB Shenzhen / Hong Kong', 'CIF Dubai', 'CIF Callao'],
    moq: '360 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-tv-07',
    name: '55" 4K UHD Commercial Frameless Display',
    category: 'Smart Television & Display',
    subCategory: 'Commercial Display',
    modelCode: 'AT-TV-55UHD',
    badge: 'Hospitality & Wholesale',
    description: '55-inch 4K UHD smart commercial television with Android Open Source Platform (AOSP) or certified Google TV OS, hospitality customization mode, and metal alloy feet.',
    features: [
      'Commercial hospitality management mode with USB clone configuration',
      'High-brightness 350-nit IPS panel with 178° viewing angle',
      'Dual 10W box speakers with clear voice dialogue enhancement',
      'Triple HDMI 2.1 inputs with ARC / eARC support',
      'Direct pallet stuffing: 480 units per 40HQ'
    ],
    specs: {
      capacity: '55 Inch 3840 x 2160 UHD Direct LED',
      power: '140W',
      energyRating: 'Energy Class E / G',
      dimensions: '1226 x 260 x 768 mm',
      voltage: '100-240V 50/60Hz',
      weight: '13.2 kg',
      certifications: ['CE', 'CB', 'RoHS', 'SASO', 'NOM']
    },
    tradeTerms: ['FOB Shenzhen / Guangzhou', 'CIF Alexandria', 'CIF Casablanca'],
    moq: '480 Units (1x 40HQ Container)',
    leadTime: '25 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-tv-08',
    name: '75" Mini-LED 144Hz Cinema Smart Television',
    category: 'Smart Television & Display',
    subCategory: 'Mini-LED TV',
    modelCode: 'AT-TV-75MLED',
    badge: '144Hz Native Gaming',
    description: 'Flagship 75-inch Mini-LED display featuring 1,200 local dimming zones, 2,000 nits peak brightness, 144Hz native refresh rate with VRR/FreeSync, and ONKYO 2.1 audio system with built-in subwoofer.',
    features: [
      'Mini-LED backlighting matrix with 1,200 full-array local dimming zones',
      'Native 144Hz panel with HDMI 2.1 48Gbps full bandwidth ports',
      'Dolby Vision IQ dynamic ambient adaptation and IMAX Enhanced certification',
      'Subwoofer integrated directly into rear backplate for 50W immersive acoustics',
      'Heavy-duty foam injection wooden-frame crate packing for maritime safety'
    ],
    specs: {
      capacity: '75 Inch 3840 x 2160 Mini-LED 144Hz',
      power: '280W Peak (Standby < 0.5W)',
      energyRating: 'High Dynamic Range Performance Class',
      dimensions: '1668 x 330 x 1020 mm (with base)',
      voltage: '100-240V 50/60Hz',
      weight: '34.5 kg net',
      certifications: ['CE', 'CB', 'FCC', 'RoHS', 'IMAX', 'Dolby Atmos']
    },
    tradeTerms: ['FOB Shenzhen / Hong Kong', 'CIF Rotterdam', 'CIF Los Angeles'],
    moq: '220 Units (1x 40HQ Container)',
    leadTime: '30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 8. COMMERCIAL BEVERAGE COOLERS
  // ==========================================
  {
    id: 'prod-com-01',
    name: 'Upright Single Glass Door Beverage Display Chiller 450L',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Display Chillers',
    modelCode: 'AT-BC-450U',
    badge: 'High Visibility Retail',
    description: 'Commercial 450-liter dynamic fan-cooled beverage display showcase. Built with heated Low-E double tempered glass door, dynamic top canopy illuminated advertising lightbox, and digital thermostat.',
    features: [
      'Low-E double layer heated tempered glass prevents condensation fogging in humid climates',
      'Dynamic ventilated air cooling system ensures rapid temperature recovery',
      'Heavy-duty PVC coated steel shelves (up to 45 kg load capacity per shelf)',
      'Bright vertical LED strips on both sides for maximum product visibility',
      'Embraco or Secop heavy commercial refrigeration compressor'
    ],
    specs: {
      capacity: '450 Liters (Holds up to 480 standard 330ml soda cans)',
      power: '260W (Operating temperature: 0°C to +10°C)',
      energyRating: 'Commercial High Efficiency R290',
      dimensions: '620 x 630 x 1985 mm',
      voltage: '220-240V 50Hz / 115V 60Hz',
      weight: '82 kg',
      certifications: ['CE', 'CB', 'NSF', 'RoHS', 'ETL Sanitation', 'SASO']
    },
    tradeTerms: ['FOB Qingdao / Ningbo', 'CIF Hamburg', 'CIF Dubai'],
    moq: '72 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-com-02',
    name: 'Dual-Zone Stainless Steel Undercounter Wine Cellar 52-Bottle',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Wine Cellars',
    modelCode: 'AT-WC-52DZ',
    badge: 'Prosumer Grade',
    description: 'Built-in undercounter 60cm dual-zone wine preservation cooler. Provides precision temperature zones for red (12-18°C) and white/champagne (5-12°C) with natural beechwood sliding shelves and anti-vibration damping.',
    features: [
      'Independent dual temperature zones with digital touch capacitive controls',
      'Vibration-damped compressor system prevents disturbance to wine sediments',
      'UV-blocking triple pane smoked tempered glass door with seamless 304 stainless frame',
      'Smooth sliding FSC-certified natural beechwood display shelves',
      'Front-breathing kickplate ventilation for seamless built-in undercounter installation'
    ],
    specs: {
      capacity: '52 Standard 750ml Bordeaux Wine Bottles (145 Liters)',
      power: '90W (Low noise < 38 dB)',
      energyRating: 'EU Class G / DOE Certified',
      dimensions: '595 x 570 x 820 mm (Cutout: 600 x 580 x 825 mm)',
      voltage: '220-240V 50Hz / 110-120V 60Hz',
      weight: '48 kg',
      certifications: ['CE', 'GS', 'CB', 'ETL', 'RoHS']
    },
    tradeTerms: ['FOB Zhongshan / Foshan', 'CIF Sydney', 'CIF Vancouver'],
    moq: '144 Units (1x 40HQ Container)',
    leadTime: '30 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-com-03',
    name: 'Commercial Stainless Steel Automatic Ice Cube Maker 120kg/24h',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Ice Machines',
    modelCode: 'AT-ICE-120PRO',
    badge: 'Heavy Commercial',
    description: 'Heavy-duty commercial gourmet ice machine capable of producing 120kg of crystal-clear hard square ice cubes per 24 hours. Built with food-grade 304 stainless steel and 45kg insulated storage bin.',
    features: [
      'Nickel-plated copper ice grid produces 120kg crystal ice cubes every 24 hours',
      '45kg high-density cyclopentane insulated food-grade ice storage bin',
      'One-touch automatic descaling and self-cleaning sterilization cycle',
      'Microcomputer intelligent control with ice thickness adjustment function',
      'High-grade commercial water filter and heavy stainless scoop included'
    ],
    specs: {
      capacity: '120 kg/24h Ice Yield (45kg Bin Capacity)',
      power: '650W (R290 Eco Refrigerant)',
      energyRating: 'Energy Star Commercial Ice Maker Standard',
      dimensions: '670 x 670 x 880 mm',
      voltage: '220-240V 50Hz / 115V 60Hz',
      weight: '62 kg',
      certifications: ['CE', 'CB', 'ETL', 'NSF Sanitation', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Jebel Ali', 'CIF Houston'],
    moq: '120 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const getCategoryBySlug = (slug: string): string => {
  const map: Record<string, string> = {
    'refrigeration': 'Refrigeration & Freezers',
    'laundry': 'Washing Machines & Dryers',
    'climate': 'Air Conditioning & HVAC',
    'cooking': 'Cooking & Built-in Ovens',
    'small-appliances': 'Smart Small Kitchenware',
    'dishwashers': 'Dishwashers & Cleaning',
    'entertainment': 'Smart Television & Display',
    'commercial': 'Commercial Beverage Coolers'
  };
  return map[slug.toLowerCase()] || '';
};

export const getProductsByCategory = (categorySlugOrName: string): Product[] => {
  const directName = getCategoryBySlug(categorySlugOrName);
  const target = (directName || categorySlugOrName).toLowerCase();
  return PRODUCTS_DATA.filter((p) => p.category.toLowerCase() === target);
};
