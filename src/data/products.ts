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
  },
  // ==========================================
  // EXTENDED CATALOG: 6 MODELS PER CATEGORY
  // ==========================================
  {
    id: 'prod-rf-04',
    name: 'Top Mount Double-Door Inverter Refrigerator 320L',
    category: 'Refrigeration & Freezers',
    subCategory: 'Top Mount',
    modelCode: 'AT-REF-320TM',
    badge: 'Popular Volume',
    description: 'High-volume 320-liter top-mount frost-free refrigerator with electronic inverter thermostat, humidity-controlled crisper, and multi-directional airflow. Optimized for container yield in mass consumer markets.',
    features: [
      'Multi Air Flow 360 frost-free cooling column',
      'Electronic temperature touch sensor inside fresh zone',
      'Adjustable tempered glass shelving (150kg load rating)',
      'Reversible door hinge with recessed pocket handle',
      'Container loading yield: 108 units per 40HQ'
    ],
    specs: {
      capacity: '320 Liters (245L Fridge / 75L Freezer)',
      power: '120W (Annual consumption 215 kWh/yr)',
      energyRating: 'EU Class E / SASO 5 Star',
      dimensions: '600 x 670 x 1690 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '58 kg',
      certifications: ['CE', 'CB', 'RoHS', 'SASO', 'G-Mark', 'SONCAP']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Durban', 'CIF Casablanca'],
    moq: '108 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-rf-05',
    name: 'Retro Single-Door Compact Refrigerator with Chiller 135L',
    category: 'Refrigeration & Freezers',
    subCategory: 'Retro Compact',
    modelCode: 'AT-REF-135R',
    badge: 'Design Trend',
    description: 'Vintage 1950s curved retro silhouette compact refrigerator with chrome door handle, integrated ice chiller compartment, and ultra-quiet 37dB compressor. High margin retail and hospitality item.',
    features: [
      'Seamless rounded corner stamped metal door design',
      'Heavy-duty alloy chrome handle with positive latch',
      'Integrated 15L sub-zero ice-making compartment',
      'Mechanical thermostat control with auto-defrost tray',
      'High packing efficiency: 220 units per 40HQ'
    ],
    specs: {
      capacity: '135 Liters Net Capacity',
      power: '85W (Ultra-quiet 37 dB)',
      energyRating: 'EU Class D / Energy Star',
      dimensions: '540 x 580 x 960 mm',
      voltage: '220-240V ~ 50Hz / 115V 60Hz',
      weight: '31 kg',
      certifications: ['CE', 'CB', 'ETL', 'RoHS', 'ERP']
    },
    tradeTerms: ['FOB Shanghai', 'CIF Felixstowe', 'CIF Long Beach'],
    moq: '220 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-rf-06',
    name: 'Ultra-Deep Commercial Chest Freezer 510L',
    category: 'Refrigeration & Freezers',
    subCategory: 'Chest Freezer',
    modelCode: 'AT-FRZ-510LT',
    badge: 'Heavy Industrial',
    description: 'Heavy industrial 510-liter island chest freezer with dual balanced solid lids, quick freezing function down to -28°C, and heavy duty front water defrost drain. Built for supermarket and food-service volume.',
    features: [
      'Dual solid insulated lids with 90-degree self-balancing hinges',
      'Heavy copper coil wrapping with embossed stucco aluminum inner tank',
      'Front-facing dual LED power & rapid freeze status indicators',
      'Three heavy-gauge vinyl-coated wire hanging baskets',
      'Container loading: 68 sets per 40HQ'
    ],
    specs: {
      capacity: '510 Liters Net Usable Volume',
      power: '220W (R290 High Heat Transfer Refrigerant)',
      energyRating: 'T-Climate Heavy Commercial',
      dimensions: '1640 x 740 x 850 mm',
      voltage: '220-240V ~ 50Hz / 115V 60Hz',
      weight: '74 kg',
      certifications: ['CE', 'CB', 'ETL', 'SASO', 'NOM']
    },
    tradeTerms: ['FOB Qingdao', 'CIF Jeddah', 'CIF Guayaquil'],
    moq: '68 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-wm-05',
    name: 'Top-Load Inverter Smart Washing Machine 12kg',
    category: 'Washing Machines & Dryers',
    subCategory: 'Top-Load',
    modelCode: 'AT-WMT-120TL',
    badge: 'High Capacity',
    description: '12kg fully automatic top-load washer featuring direct-drive smart inverter motor, soft-closing hydraulic glass lid, and 3D waterfall cascade washing system. High container yield with KD pallet packing.',
    features: [
      'Smart Direct Drive Inverter with 55% power and water savings',
      'Soft-close tempered glass hydraulic damper lid',
      'Pillow drum pattern protects delicates from fabric strain',
      'Tub Clean high-temperature self-sterilization cycle',
      'Container stuffing: 114 units per 40HQ'
    ],
    specs: {
      capacity: '12.0kg Washing Capacity',
      power: '450W Wash / 350W Spin',
      energyRating: 'Energy Class A++',
      dimensions: '600 x 620 x 990 mm',
      voltage: '220-240V 50Hz',
      weight: '44 kg',
      certifications: ['CE', 'CB', 'SASO', 'G-Mark', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Dammam', 'CIF Manila'],
    moq: '114 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-wm-06',
    name: 'Front-Load Ultra-Slim BLDC Washer 8.0kg',
    category: 'Washing Machines & Dryers',
    subCategory: 'Front-Load',
    modelCode: 'AT-WMF-800SL',
    badge: 'Compact Urban',
    description: 'Space-saving 45cm slim-depth front load washing machine with 8.0kg wash capacity. Features 1400 RPM spin speed, silent brushless inverter drive, and 15-minute quick wash for apartments and urban retail distribution.',
    features: [
      'Ultra-slim 450mm cabinet depth with full 8kg drum volume',
      '1400 RPM maximum extraction spin for rapid drying',
      'Brushless DC motor operates under 54dB during full wash',
      'Automatic foam sensing and unbalance weight correction',
      'Container volume maximization: 216 units per 40HQ'
    ],
    specs: {
      capacity: '8.0kg Wash Capacity',
      power: '1900W Heating / 1400 RPM Spin',
      energyRating: 'EU Energy Class A (New Directive)',
      dimensions: '595 x 450 x 850 mm',
      voltage: '220-240V ~ 50Hz',
      weight: '60 kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'EMC']
    },
    tradeTerms: ['FOB Qingdao', 'CIF Genoa', 'CIF Valencia'],
    moq: '216 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-wm-07',
    name: 'Commercial Heavy-Duty Vended Washer 16kg',
    category: 'Washing Machines & Dryers',
    subCategory: 'Commercial Laundry',
    modelCode: 'AT-WM-160COM',
    badge: 'Heavy Commercial',
    description: 'Industrial-grade 16kg commercial laundry washer built with heavy gauge 304 stainless steel cabinet, high G-force extraction suspension, and programmable coin/card/token payment interfaces.',
    features: [
      'Heavy 304 stainless steel front panel and inner/outer tub',
      'Suspension shock system absorbs up to 400G high spin extraction',
      'Compatible with universal coin slide or central RFID card reader',
      'Dual hot and cold commercial water inlet valves for rapid fill',
      'Container loading: 52 units per 40HQ'
    ],
    specs: {
      capacity: '16.0kg Dry Linen Capacity',
      power: '3000W Heavy Duty Element / 750W Motor',
      energyRating: 'Commercial Grade A+++',
      dimensions: '750 x 780 x 1100 mm',
      voltage: '220-240V 50/60Hz or 3-Phase 380V',
      weight: '128 kg',
      certifications: ['CE', 'CB', 'ETL', 'RoHS']
    },
    tradeTerms: ['FOB Shanghai', 'CIF Dubai', 'CIF San Antonio'],
    moq: '52 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ac-06',
    name: 'High-Efficiency Inverter Split AC 12,000 BTU A+++',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Split Wall-Mounted',
    modelCode: 'AT-AC-12000INV',
    badge: 'A+++ Efficiency',
    description: 'Full DC inverter 12,000 BTU split air conditioner with SEER 8.5 energy rating, R32 eco-refrigerant, self-cleaning evaporator, and smart WiFi voice control. Massive European and Middle East container demand.',
    features: [
      'Full DC 3D Inverter (Compressor, Indoor Motor, Outdoor Motor)',
      'SEER 8.5 cooling / SCOP 4.6 heating ultra-low electricity consumption',
      '56°C high temperature evaporator self-sterilization',
      'Gold Fin anti-corrosive coating for coastal sea salt resilience',
      'High loading stuffing: 260 sets per 40HQ'
    ],
    specs: {
      capacity: '12,000 BTU/h (3.5 kW Nominal)',
      power: '850W Cooling / 900W Heating',
      energyRating: 'EU Class A+++ / T-Class Inverter',
      dimensions: 'Indoor: 805x194x285mm | Outdoor: 720x270x495mm',
      voltage: '220-240V ~ 50Hz',
      weight: 'Indoor: 8.5kg | Outdoor: 24kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'SASO', 'G-Mark']
    },
    tradeTerms: ['FOB Ningbo / Foshan', 'CIF Piraeus', 'CIF Dammam'],
    moq: '260 Sets (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ac-07',
    name: '4-Way Ceiling Cassette Inverter Heat Pump 36,000 BTU',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Cassette HVAC',
    modelCode: 'AT-AC-36000CAS',
    badge: 'Commercial HVAC',
    description: 'Commercial 4-way 360-degree airflow ceiling cassette air conditioner with 36,000 BTU capacity, integrated high-lift condensate drain pump, and slim panel architecture for corporate offices and restaurants.',
    features: [
      '360-degree uniform round airflow eliminates uncomfortable drafts',
      'Built-in 750mm high-head condensate drain lift pump with float switch',
      'Digital wired wall controller plus wireless remote included',
      'Fresh air intake cutout port for internal air quality compliance',
      'Container stuffing: 84 complete systems per 40HQ'
    ],
    specs: {
      capacity: '36,000 BTU/h (10.5 kW)',
      power: '3200W Nominal Operating Input',
      energyRating: 'Commercial SEER 6.1 Class A++',
      dimensions: 'Body: 840x840x245mm | Panel: 950x950x55mm',
      voltage: '220-240V 50Hz or 380V 3N~ 50Hz',
      weight: 'Indoor: 28kg | Outdoor: 65kg',
      certifications: ['CE', 'CB', 'ETL', 'SASO', 'RoHS']
    },
    tradeTerms: ['FOB Shunde / Ningbo', 'CIF Riyadh', 'CIF Callao'],
    moq: '84 Sets (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ac-08',
    name: 'Floor-Standing Commercial Column Air Conditioner 48,000 BTU',
    category: 'Air Conditioning & HVAC',
    subCategory: 'Floor-Standing',
    modelCode: 'AT-AC-48000FLR',
    badge: 'Heavy Cooling',
    description: 'High-power 48,000 BTU floor-standing column air conditioner engineered for large open spaces, hotel lobbies, and prayer halls. Delivers powerful 20-meter air throw with wide automatic 3D oscillation.',
    features: [
      'Extended 20-meter turbulent long-distance air throw',
      'T3 Tropical twin-rotary compressor runs reliably up to 55°C',
      'Child lock touch display with ambient temperature readout',
      'Washable high-density anti-dust and silver ion filter',
      'Container loading optimization: 64 sets per 40HQ'
    ],
    specs: {
      capacity: '48,000 BTU/h (14.0 kW)',
      power: '4600W (R410A / R32 Options)',
      energyRating: 'Tropical High Efficiency T3',
      dimensions: 'Indoor: 550x380x1850mm | Outdoor: 950x410x1330mm',
      voltage: '380-415V 3N~ 50Hz',
      weight: 'Indoor: 52kg | Outdoor: 98kg',
      certifications: ['CE', 'CB', 'SASO', 'G-Mark', 'SONCAP']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Kuwait', 'CIF Basra'],
    moq: '64 Sets (1x 40HQ Container)',
    leadTime: '28-35 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ck-07',
    name: 'Built-in Steam Combi Convection Oven 65L',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Steam Ovens',
    modelCode: 'AT-STM-65PRO',
    badge: 'Gourmet Tech',
    description: 'Premium 65L built-in steam and convection combi oven. Features direct steam injection boiler, 50 pre-programmed chef recipes, triple glazed heat reflective glass door, and full TFT color touch interface.',
    features: [
      'Dual pure steam injection and 360-degree true convection heating',
      'Food-grade 304 seamless laser-welded stainless interior cavity',
      'Pop-out motorized water tank with descaling reminder alert',
      'Quad-layer cool-touch glazed door with child safety lock',
      'Container stuffing efficiency: 216 units per 40HQ'
    ],
    specs: {
      capacity: '65 Liters Net Cooking Volume',
      power: '2800W Convection / 1800W Pure Steam',
      energyRating: 'EU Energy Class A+',
      dimensions: '595 x 550 x 595 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '41 kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'EMC']
    },
    tradeTerms: ['FOB Shunde / Zhongshan', 'CIF Hamburg', 'CIF Melbourne'],
    moq: '216 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ck-08',
    name: 'Free-Standing Commercial Range Cooker 90cm 5 Gas + Electric Oven',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Range Cookers',
    modelCode: 'AT-RNG-905FS',
    badge: 'Pro Chef Line',
    description: '90cm professional free-standing cooker with 5 heavy-duty cast iron gas burners including a central 4.2kW triple-ring wok burner, accompanied by a 110L multi-function fan-assisted electric oven.',
    features: [
      '5 Italian Sabaf gas burners with automatic flame failure safety valves',
      'Giant 110L electric fan oven with rotisserie spit and double grill',
      'Heavy cast iron pan supports with matte black enamel finish',
      'Full stainless steel 430 body with adjustable leveling feet',
      'Container loading optimization: 84 units per 40HQ'
    ],
    specs: {
      capacity: '110L Oven Volume / 90cm Cooktop',
      power: 'Total Gas 11.5 kW / Oven Electric 2900W',
      energyRating: 'Commercial Class A',
      dimensions: '900 x 600 x 850 mm',
      voltage: '220-240V 50/60Hz',
      weight: '76 kg',
      certifications: ['CE', 'CB', 'SASO', 'G-Mark', 'SONCAP']
    },
    tradeTerms: ['FOB Ningbo / Cixi', 'CIF Cape Town', 'CIF Valparaiso'],
    moq: '84 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-ck-09',
    name: 'Built-in Touch Sensor Microwave & Grill 34L',
    category: 'Cooking & Built-in Ovens',
    subCategory: 'Built-in Microwaves',
    modelCode: 'AT-MWG-34SS',
    badge: 'Clean Aesthetic',
    description: '34L built-in combination microwave with quartz grill, frameless black crystal glass fascia, sensor cooking presets, and stainless steel cavity. Matches seamlessly with 60cm built-in oven suites.',
    features: [
      '1000W Inverter microwave with 1100W quartz rapid grill',
      'Fingerprint-proof brushed stainless steel frame with touch door open',
      'Easy-to-clean diamond cavity with rotating glass turntable',
      '8 Auto-weight defrost and express reheat programs',
      'High container stuffing: 360 units per 40HQ'
    ],
    specs: {
      capacity: '34 Liters Cavity Volume',
      power: '1000W Micro / 1100W Grill',
      energyRating: 'High Efficiency Standard',
      dimensions: '595 x 410 x 388 mm',
      voltage: '220-240V ~ 50Hz',
      weight: '19.5 kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'FDA/ETL']
    },
    tradeTerms: ['FOB Shunde', 'CIF Southampton', 'CIF Auckland'],
    moq: '360 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-sm-10',
    name: 'Commercial Cast-Aluminum Stand Mixer 7.5L',
    category: 'Smart Small Kitchenware',
    subCategory: 'Mixers',
    modelCode: 'AT-MX-750PRO',
    badge: 'Heavy Commercial',
    description: 'Heavy die-cast aluminum 7.5L planetary stand mixer with 1500W pure copper motor, full metal internal gears, LED digital timer, and food-grade stainless steel dough hook, whisk, and beater.',
    features: [
      'Full metal gear transmission handles up to 2.5kg dense bread dough',
      '7.5L brushed stainless steel mixing bowl with dual comfort handles',
      '6-speed rotary dial with pulse and countdown timer LCD screen',
      'Tilt-head design with safety interlock power cut-off',
      'Container loading yield: 850 units per 40HQ'
    ],
    specs: {
      capacity: '7.5 Liters Bowl Capacity',
      power: '1500W Pure Copper High Torque Motor',
      energyRating: 'Class II Safety Appliance',
      dimensions: '410 x 240 x 360 mm',
      voltage: '220-240V 50/60Hz / 120V 60Hz',
      weight: '9.8 kg',
      certifications: ['CE', 'CB', 'GS', 'ETL', 'LFGB', 'FDA']
    },
    tradeTerms: ['FOB Ningbo / Shenzhen', 'CIF Antwerp', 'CIF Montreal'],
    moq: '500 Units',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-sm-11',
    name: 'High-Speed Vacuum Blender 1800W with Noise Shield',
    category: 'Smart Small Kitchenware',
    subCategory: 'Blenders',
    modelCode: 'AT-BLD-1800VAC',
    badge: 'Pro Smoothies',
    description: 'Commercial sound-enclosed vacuum blender that extracts air before blending to eliminate oxidation, preserving 90% more vitamins with silky zero-foam smoothie texture. Ideal for juice bars and premium retail.',
    features: [
      '-80kPa high-vacuum pump removes oxygen before 30,000 RPM blend',
      'Sound enclosure hood dampens blending noise to under 68dB',
      'Japanese 6-leaf hardened carbon steel ice-crushing blades',
      'BPA-free Tritan 2.0L jar with spill-proof safety sensor',
      'Container yield: 1100 units per 40HQ'
    ],
    specs: {
      capacity: '2.0 Liters Tritan Pitcher',
      power: '1800W Peak / 30,000 RPM',
      energyRating: 'Class I Commercial Appliance',
      dimensions: '220 x 240 x 480 mm',
      voltage: '220-240V 50/60Hz / 110V 60Hz',
      weight: '6.5 kg',
      certifications: ['CE', 'CB', 'RoHS', 'LFGB', 'FDA', 'ETL']
    },
    tradeTerms: ['FOB Shenzhen / Zhongshan', 'CIF Santos', 'CIF Barcelona'],
    moq: '500 Units',
    leadTime: '25-30 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-sm-12',
    name: 'Digital Multi-Function Induction Rice Cooker 5.0L',
    category: 'Smart Small Kitchenware',
    subCategory: 'Cookers',
    modelCode: 'AT-RC-500IND',
    badge: 'Smart Kitchen',
    description: '360° Induction Heating (IH) smart multi-cooker with heavy 3mm 7-layer spherical iron pot. Delivers even heat conduction for perfect fluffy rice, slow cooking, pressure stews, and cake baking.',
    features: [
      '1300W 3D surround electromagnetic induction heating',
      '3.0mm thick heavy spherical non-stick ceramic Daikin inner bowl',
      'Micro-pressure steam valve preserves natural grain aromas',
      'Smart 24-hour delayed start timer with automatic keep-warm mode',
      'Container loading efficiency: 1250 units per 40HQ'
    ],
    specs: {
      capacity: '5.0 Liters (10 Cups Uncooked Rice)',
      power: '1300W Induction Heating Coil',
      energyRating: 'Class 1 Thermal Efficiency',
      dimensions: '340 x 280 x 260 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '5.2 kg',
      certifications: ['CE', 'CB', 'RoHS', 'SASO', 'G-Mark']
    },
    tradeTerms: ['FOB Shunde', 'CIF Dubai', 'CIF Singapore'],
    moq: '600 Units',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-dw-10',
    name: 'Semi-Integrated 45cm Slimline Inox Dishwasher 10-Place',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Built-in Dishwashers',
    modelCode: 'AT-DW-45SLIM',
    badge: 'Slimline Spec',
    description: '45cm slimline semi-integrated dishwasher engineered for space-restricted modern kitchens. Holds 10 full place settings with dual orbital wash arms, LED display, and 70°C hygiene wash cycle.',
    features: [
      'Slim 450mm width holds 10 international standard place settings',
      'Dual orbital spray arms provide 100% corner basin coverage',
      'Electronic AquaStop overflow protection valve with double hose',
      'Flexible height-adjustable upper basket with fold-down cup tines',
      'Container loading stuffing: 216 units per 40HQ'
    ],
    specs: {
      capacity: '10 Place Settings (9.0L Water per cycle)',
      power: '1850W Max Heating / 0.74 kWh per Eco Cycle',
      energyRating: 'EU Energy Class C (New Directive)',
      dimensions: '448 x 570 x 815 mm',
      voltage: '220-240V ~ 50Hz',
      weight: '37.5 kg',
      certifications: ['CE', 'CB', 'GS', 'RoHS', 'EMC']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Antwerp', 'CIF Piraeus'],
    moq: '216 Units (1x 40HQ Container)',
    leadTime: '28-32 Days',
    tradeType: 'export',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-dw-11',
    name: 'Commercial Undercounter Glass & Dishwasher 30 Racks/Hr',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Commercial Dishwasher',
    modelCode: 'AT-DWC-30COM',
    badge: 'Heavy Commercial',
    description: 'High-speed commercial undercounter dishwasher with built-in rinse booster pump and detergent dispenser. Cleans and sanitizes 30 standard 500x500mm racks per hour with 60/120-second rapid cycles.',
    features: [
      'Heavy 304 food-grade stainless steel chassis, boiler, and wash tank',
      'Rapid 60-second and 120-second commercial cycle options',
      '85°C high-temperature thermal rinse kills 99.99% of bacteria',
      'Automatic peristaltic detergent and rinse aid dosing pumps built-in',
      'Container loading: 72 units per 40HQ'
    ],
    specs: {
      capacity: '30 Racks/Hour (500x500mm standard rack)',
      power: '5.2 kW (Boiler 4.5 kW / Wash 0.7 kW)',
      energyRating: 'Commercial Sanitation Standard',
      dimensions: '600 x 620 x 820 mm',
      voltage: '220-240V 50Hz or 380V 3N~ 50Hz',
      weight: '62 kg',
      certifications: ['CE', 'CB', 'ETL Sanitation', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Jebel Ali', 'CIF Houston'],
    moq: '72 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'both',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-dw-12',
    name: 'High-Pressure Tabletop Fruit & Vegetable Ultrasonic Purifier 15L',
    category: 'Dishwashers & Cleaning',
    subCategory: 'Ultrasonic Cleaning',
    modelCode: 'AT-US-15PUR',
    badge: 'Health Innovation',
    description: 'Modern countertop ultrasonic produce and tableware sanitizer. Utilizes hydroxyl water electrolysis and 40kHz ultrasonic cavitation to eliminate 99.8% of agricultural pesticides and food contaminants without chemicals.',
    features: [
      'Hydroxyl radical electrolysis decomposes pesticide molecular chains',
      '40kHz industrial ultrasonic transducers strip dirt from berries and seafood',
      '15-liter capacity holds whole poultry, vegetables, and baby bottles',
      'Touch control panel with dedicated Fruit, Seafood, Meat, and Utensil modes',
      'Container efficiency: 650 units per 40HQ'
    ],
    specs: {
      capacity: '15.0 Liters Basin Capacity',
      power: '120W Ultrasonic + 50W Electrolysis',
      energyRating: 'Class II Eco Sanitizer',
      dimensions: '380 x 360 x 300 mm',
      voltage: '100-240V Universal ~ 50/60Hz',
      weight: '5.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'FDA', 'FCC']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Rotterdam', 'CIF Los Angeles'],
    moq: '300 Units',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-tv-09',
    name: '85" 4K HDR10+ Commercial Hospitality Smart Display',
    category: 'Smart Television & Display',
    subCategory: 'Commercial Displays',
    modelCode: 'AT-TV-85HOSP',
    badge: 'Flagship Display',
    description: 'Gigantic 85" commercial 4K ultra-narrow bezel display with 500 nits high brightness panel, hospitality management CMS protocol, anti-glare coating, and 16/7 continuous operational certification.',
    features: [
      '85-inch 3840x2160 4K UHD VA panel with 500 nits brightness',
      'Integrated Pro:Centric & Lynk hospitality CMS content software',
      'Anti-glare matte surface treatment minimizes reflection in brightly lit lobbies',
      'Heavy-duty reinforced metal backplate with VESA 600x400 standard mounting',
      'Container loading yield: 68 sets per 40HQ'
    ],
    specs: {
      capacity: '85 Inch Diagonal (215 cm)',
      power: '280W Typical / 0.5W Standby',
      energyRating: 'Energy Star 8.0 / EU Class F',
      dimensions: '1895 x 1088 x 85 mm',
      voltage: '100-240V ~ 50/60Hz',
      weight: '43.5 kg',
      certifications: ['CE', 'CB', 'FCC', 'RoHS', 'SASO', 'NOM']
    },
    tradeTerms: ['FOB Shenzhen / Guangzhou', 'CIF Long Beach', 'CIF Dubai'],
    moq: '68 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-tv-10',
    name: '50" Frameless Android 13 4K UHD Television',
    category: 'Smart Television & Display',
    subCategory: 'Smart TVs',
    modelCode: 'AT-TV-50AND',
    badge: 'Top Retail Yield',
    description: 'Mass-market volume leader 50-inch 4K UHD smart TV powered by licensed Android 13 OS with Google Assistant, Dolby Audio, Bluetooth 5.2, and ultra-slim three-sided frameless aesthetic.',
    features: [
      'Licensed Android 13 with Google Play Store & Netflix 4K certification',
      'Frameless infinity edge bezel-less design with slim metal feet',
      'Dolby Audio + DTS Virtual:X 2x10W stereo sound system',
      'Dual-band 2.4G/5G WiFi with integrated Chromecast screen cast',
      'High container stuffing density: 440 units per 40HQ'
    ],
    specs: {
      capacity: '50 Inch Diagonal (127 cm)',
      power: '110W Operating Load',
      energyRating: 'EU Energy Class E / DOE Star',
      dimensions: '1112 x 645 x 78 mm',
      voltage: '100-240V ~ 50/60Hz',
      weight: '9.8 kg',
      certifications: ['CE', 'CB', 'FCC', 'RoHS', 'G-Mark', 'SASO']
    },
    tradeTerms: ['FOB Shenzhen / Huizhou', 'CIF Hamburg', 'CIF Callao'],
    moq: '440 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-tv-11',
    name: '43" Full HD Outdoor Weatherproof IP55 Display',
    category: 'Smart Television & Display',
    subCategory: 'Outdoor Displays',
    modelCode: 'AT-TV-43OD',
    badge: 'All-Weather Spec',
    description: 'Commercial 43-inch outdoor weatherproof smart television with IP55 water and dust resistance, 1500 nits sunlight-readable panel, internal temperature-controlled heating and cooling, and vandal-proof tempered glass.',
    features: [
      'IP55 certified sealed aluminum enclosure resists rain, snow, and dust',
      'Ultra-bright 1500 nits display readable in direct outdoor sunlight',
      'Impact-resistant 4mm IK08 anti-reflective tempered glass front',
      'Internal thermal sensor with automated fans and heating element (-20°C to 50°C)',
      'Container loading: 280 units per 40HQ'
    ],
    specs: {
      capacity: '43 Inch Diagonal (108 cm)',
      power: '160W (Automatic thermostatic heater max 220W)',
      energyRating: 'Commercial Outdoor Standard',
      dimensions: '990 x 590 x 95 mm',
      voltage: '110-240V ~ 50/60Hz',
      weight: '21 kg',
      certifications: ['CE', 'CB', 'ETL', 'IP55', 'IK08', 'RoHS']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Sydney', 'CIF Miami'],
    moq: '150 Units',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-com-04',
    name: 'Double Sliding Glass Door Back-Bar Chiller 330L',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Back-Bar Coolers',
    modelCode: 'AT-BAR-330SD',
    badge: 'Pub & Hotel Spec',
    description: 'Under-counter 330-liter double sliding glass door commercial back-bar cooler. Features forced-air rapid pull-down cooling, double-glazed LOW-E argon tempered glass doors, cylinder lock, and LED vertical illumination.',
    features: [
      'Space-saving self-closing double sliding glass doors',
      'Forced air dynamic cooling system chills warm drinks in under 45 minutes',
      'Electronic digital thermostat with automatic defrost cycle',
      'Heavy-duty chrome wire shelves with 45kg loading capacity per shelf',
      'Container stuffing optimization: 96 units per 40HQ'
    ],
    specs: {
      capacity: '330 Liters (Holds up to 310 x 330ml beverage cans)',
      power: '240W (R600a High Efficiency Hydrocarbon)',
      energyRating: 'Commercial Beverage Class B',
      dimensions: '1350 x 520 x 870 mm',
      voltage: '220-240V 50Hz / 115V 60Hz',
      weight: '78 kg',
      certifications: ['CE', 'CB', 'ETL Sanitation', 'RoHS', 'NSF']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Felixstowe', 'CIF Auckland'],
    moq: '96 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-com-05',
    name: 'Triple Hinged Glass Door Upright Supermarket Chiller 1050L',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Display Chillers',
    modelCode: 'AT-CHL-1050TG',
    badge: 'Supermarket Display',
    description: 'Giant 1050L triple glass door upright display chiller for hypermarkets and convenience stores. Equipped with top illuminated canopy lightbox, self-closing heated glass doors to eliminate condensation, and digital Carel controller.',
    features: [
      'Self-closing triple pane heated glass doors with zero condensation fogging',
      'Top LED backlit advertising lightbox for custom beverage branding',
      'Bottom-mounted heavy commercial Secop compressor for ease of maintenance',
      '12 adjustable wire shelves with price tag strips included',
      'Container loading yield: 24 units per 40HQ'
    ],
    specs: {
      capacity: '1050 Liters Net Usable Volume',
      power: '680W (R290 Eco Refrigerant)',
      energyRating: 'Commercial Efficiency Class C',
      dimensions: '1800 x 740 x 2050 mm',
      voltage: '220-240V 50Hz / 115V 60Hz',
      weight: '185 kg',
      certifications: ['CE', 'CB', 'ETL', 'SASO', 'RoHS']
    },
    tradeTerms: ['FOB Qingdao / Ningbo', 'CIF Durban', 'CIF Santos'],
    moq: '24 Units (1x 40HQ Container)',
    leadTime: '28-35 Days',
    tradeType: 'export',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-com-06',
    name: 'Heavy-Duty Stainless Steel Draft Beer Kegerator Dispenser',
    category: 'Commercial Beverage Coolers',
    subCategory: 'Beverage Dispensers',
    modelCode: 'AT-KEG-2TAP',
    badge: 'Dual Tap Pro',
    description: 'Commercial 304 stainless steel dual-tap draft beer dispenser kegerator. Accommodates two full half-barrel kegs, includes dual chrome draft beer tower, CO2 regulator tank mount, and heavy drip tray.',
    features: [
      'Dual chrome draft beer tower with brass faucets and air-cooled column',
      'Accommodates 2 full commercial half-barrel kegs or 4 sixth-barrel kegs',
      'Heavy-duty embossed stainless steel floor withstands keg loading wear',
      'Commercial rolling casters with front wheel step locks',
      'Container efficiency: 74 units per 40HQ'
    ],
    specs: {
      capacity: 'Holds 2x Half-Barrel Commercial Kegs',
      power: '220W (R600a Chilling Circuit)',
      energyRating: 'Commercial Food Service Standard',
      dimensions: '1240 x 790 x 980 mm (Excluding Tower)',
      voltage: '220-240V ~ 50Hz / 115V 60Hz',
      weight: '92 kg',
      certifications: ['CE', 'CB', 'ETL Sanitation', 'NSF-7', 'RoHS']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Rotterdam', 'CIF Halifax'],
    moq: '74 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80'
    ]
  },
  // ==========================================
  // 9. KITCHEN
  // ==========================================
  {
    id: 'prod-air-fryers',
    name: 'Smart Dual-Zone Digital Air Fryer 8.5L',
    category: 'Kitchen',
    subCategory: 'Air Fryers',
    modelCode: 'AT-KTC-AF85',
    badge: 'Best Volume Seller',
    description: 'High-capacity 8.5L dual-basket digital air fryer with independent zone synchronization, 360-degree rapid heat circulation, and non-stick ceramic crisper plates.',
    features: [
      'Dual independent cooking chambers with Sync-Finish technology',
      'Rapid 360° cyclone vortex heating system up to 220°C',
      'Smart digital touchscreen with 10 one-touch culinary presets',
      'Food-grade non-stick PTFE/PFOA-free dishwasher safe baskets',
      'High container loading yield: 680 units per 40HQ'
    ],
    specs: {
      capacity: '8.5 Liters (4.25L + 4.25L Dual Basket)',
      power: '2400W High Efficiency Heating',
      energyRating: 'ERP Class A+ Eco Standard',
      dimensions: '415 x 385 x 315 mm',
      voltage: '220-240V ~ 50/60Hz or 120V 60Hz',
      weight: '7.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'FDA', 'ETL Sanitation']
    },
    tradeTerms: ['FOB Ningbo / Shenzhen', 'CIF Hamburg', 'CIF Jebel Ali'],
    moq: '680 Units (1x 40HQ Container)',
    leadTime: '25-30 Working Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-blenders',
    name: 'High-Speed Commercial Grade Blender 2200W',
    category: 'Kitchen',
    subCategory: 'Blenders',
    modelCode: 'AT-KTC-BL22',
    badge: 'Heavy Duty Motor',
    description: 'Heavy-duty 2200W commercial blender featuring Japanese hardened stainless steel 6-leaf blades, 32,000 RPM pure copper motor, and 2.0L BPA-free Tritan jar.',
    features: [
      'Industrial pure copper wire motor reaching 32,000 RPM peak velocity',
      'Hardened Japanese stainless steel blades with wave serration',
      'Variable stepless speed dial and instant pulse lever control',
      'Heavy-duty 2.0L shock-resistant Tritan pitcher with tamper tool',
      'Dual thermal overload and current surge protection circuit'
    ],
    specs: {
      capacity: '2.0 Liters Unbreakable Tritan Jug',
      power: '2200W Pure Copper High-Torque Motor',
      energyRating: 'High-Speed Commercial Duty',
      dimensions: '220 x 240 x 490 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '5.2 kg',
      certifications: ['CE', 'CB', 'RoHS', 'LFGB', 'FDA']
    },
    tradeTerms: ['FOB Shunde', 'CIF Rotterdam', 'CIF Santos'],
    moq: '800 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-kettles',
    name: 'Precision Temperature Gooseneck Electric Kettle',
    category: 'Kitchen',
    subCategory: 'Kettles',
    modelCode: 'AT-KTC-KT17',
    badge: 'Barista Precision',
    description: '1.7L barista-grade gooseneck electric kettle with Strix thermostat, 1-degree precision digital temperature dial, and stainless steel interior.',
    features: [
      'British Strix temperature controller with auto shut-off & boil-dry protection',
      'Balanced counterweighted ergonomic handle with gooseneck spout',
      'LED base displaying real-time Celsius/Fahrenheit with 120-min keep-warm',
      '100% Food-grade SUS304 seamless inner cavity without plastic contact',
      'Ultra-fast 1800W rapid boiling element boils full kettle in 3.5 minutes'
    ],
    specs: {
      capacity: '1.7 Liters Full SUS304 Capacity',
      power: '1800W Rapid Boil Element',
      energyRating: 'Eco Rapid Thermostat',
      dimensions: '280 x 210 x 245 mm',
      voltage: '220-240V ~ 50/60Hz or 110V 60Hz',
      weight: '1.4 kg',
      certifications: ['CE', 'CB', 'RoHS', 'LFGB', 'UL']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Valencia', 'CIF Dubai'],
    moq: '1200 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-rice-cookers',
    name: 'Smart Induction Heating (IH) Fuzzy Logic Rice Cooker',
    category: 'Kitchen',
    subCategory: 'Rice Cookers',
    modelCode: 'AT-KTC-RC50',
    badge: 'Smart IH Heating',
    description: '5.0L smart induction heating rice cooker with microcomputer fuzzy logic temperature curves, 3D electromagnetic coil, and 3mm spherical iron pot.',
    features: [
      '360-degree electromagnetic induction heating ensures uniform boiling',
      'Heavyweight 3.0mm multi-layer non-stick spherical Daikin inner pot',
      'Multi-grain, brown rice, quick boil, steam, soup, and cake multi-menus',
      'Touch LED control panel with 24-hour preset delay timer',
      'Removable stainless steel steam valve and condensation collector'
    ],
    specs: {
      capacity: '5.0 Liters (10 Cups Raw / 20 Bowls Cooked)',
      power: '1300W Induction Coil Power',
      energyRating: 'Class 1 Energy Efficiency standard',
      dimensions: '380 x 280 x 260 mm',
      voltage: '220-240V ~ 50Hz',
      weight: '5.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'SASO', 'NOM']
    },
    tradeTerms: ['FOB Shunde / Foshan', 'CIF Singapore', 'CIF Jeddah'],
    moq: '900 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-toasters',
    name: '4-Slice Stainless Steel Digital Smart Toaster',
    category: 'Kitchen',
    subCategory: 'Toasters',
    modelCode: 'AT-KTC-TS04',
    badge: 'Extra Wide Slots',
    description: 'Premium brushed stainless steel 4-slice toaster with extra-wide 38mm self-centering slots, independent dual-zone levers, and countdown timer display.',
    features: [
      'Dual independent crumb trays and dual-zone control levers',
      '38mm extra-wide slots accommodating artisanal breads and bagels',
      '7-stage precision browning dial with LED countdown timer bar',
      'Bagel, Defrost, Reheat, and instant Cancel micro-switch buttons',
      'High-lift lever ensures easy retrieval of smaller bread slices'
    ],
    specs: {
      capacity: '4-Slice Extra Wide (38mm slot width)',
      power: '1800W Dual High-Speed Elements',
      energyRating: 'A-Class Heat Retention',
      dimensions: '300 x 275 x 195 mm',
      voltage: '220-240V ~ 50/60Hz or 120V 60Hz',
      weight: '2.9 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'ETL']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Southampton', 'CIF Los Angeles'],
    moq: '1100 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 10. HOME CARE
  // ==========================================
  {
    id: 'prod-vacuum-cleaners',
    name: 'Cordless Multi-Cyclone Smart Stick Vacuum Cleaner',
    category: 'Home Care',
    subCategory: 'Vacuum Cleaners',
    modelCode: 'AT-HMC-VC35',
    badge: '30kPa Powerful Suction',
    description: 'High-torque cordless stick vacuum cleaner powered by a 450W digital brushless motor delivering 30kPa suction, smart dust sensor, and 65-min runtime.',
    features: [
      '450W digital BLDC brushless motor producing 30,000 Pa suction',
      'Smart infrared particle sensor automatically regulates motor speed',
      'Detachable 8-cell 2500mAh lithium battery pack with 65-minute runtime',
      '5-layer HEPA filtration capturing 99.97% of microdust down to 0.3 microns',
      'LED motorized roller brush with anti-tangle V-shaped comb'
    ],
    specs: {
      capacity: '0.8L One-Touch Eject Dust Cup',
      power: '450W BLDC Motor / 30kPa Suction',
      energyRating: 'High-Density Lithium Ion Pack',
      dimensions: '1180 x 250 x 215 mm',
      voltage: '29.6V Li-ion Battery System',
      weight: '2.6 kg',
      certifications: ['CE', 'CB', 'RoHS', 'UN38.3', 'MSDS']
    },
    tradeTerms: ['FOB Suzhou / Shanghai', 'CIF Hamburg', 'CIF Dubai'],
    moq: '750 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-steam-cleaners',
    name: 'High-Pressure Sanitizing Handheld Steam Cleaner',
    category: 'Home Care',
    subCategory: 'Steam Cleaners',
    modelCode: 'AT-HMC-SC15',
    badge: '105°C Chemical-Free',
    description: '1050W multipurpose pressurized handheld steam cleaner generating 3.2 bar dry steam in 3 minutes for 99.9% biological sanitization without detergents.',
    features: [
      '3.2 Bar high-pressure steam jet eliminates greases, germs, and bedbugs',
      'Rapid boiler heating element generates continuous dry steam in 180 seconds',
      'Safety lock trigger and pressure-release safety valve cap',
      'Full 9-piece multi-surface accessories set for tiles, glass, and grout',
      'High-grade explosion-proof aluminum alloy boiler chamber'
    ],
    specs: {
      capacity: '350ml Pressurized Aluminum Boiler',
      power: '1050W Fast-Boil Circuit',
      energyRating: 'Chemical-Free 105°C Sanitization',
      dimensions: '255 x 140 x 220 mm',
      voltage: '220-240V ~ 50Hz / 110V 60Hz',
      weight: '1.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'EMC']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Rotterdam', 'CIF Santos'],
    moq: '1200 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-floor-cleaners',
    name: 'Smart Wet & Dry Dual-Roller Cordless Floor Washer',
    category: 'Home Care',
    subCategory: 'Floor Cleaners',
    modelCode: 'AT-HMC-FC28',
    badge: 'Self-Cleaning Station',
    description: 'All-in-one vacuum, mop, and self-cleaning wet & dry hard floor washer with dual counter-rotating rollers, clean/dirty water separation, and hot-air drying base.',
    features: [
      'Simultaneous wet vacuuming and scrubbing on hardwood, marble, and tile',
      'Intelligent LED voice assistant announces dirty water full and filter clean',
      'Dual tank separation: 850ml clean water + 700ml dirty water system',
      'Base station features one-touch auto roller self-cleaning and centrifugal drying',
      'Edge-to-edge cleaning head cleans tight along wall baseboards'
    ],
    specs: {
      capacity: '850ml Clean Water / 700ml Sewage Tank',
      power: '220W BLDC Suction Motor',
      energyRating: 'High-Capacity Lithium Li-Ion 4000mAh',
      dimensions: '1100 x 270 x 250 mm',
      voltage: '21.6V Cordless Battery Pack',
      weight: '4.5 kg',
      certifications: ['CE', 'CB', 'RoHS', 'UN38.3', 'EMC']
    },
    tradeTerms: ['FOB Suzhou', 'CIF Hamburg', 'CIF Singapore'],
    moq: '600 Units (1x 40HQ Container)',
    leadTime: '30-35 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-window-cleaners',
    name: 'Intelligent Automatic Robotic Window Cleaner',
    category: 'Home Care',
    subCategory: 'Window Cleaners',
    modelCode: 'AT-HMC-WC08',
    badge: 'Dual Ultrasonic Spray',
    description: 'High-rise smart window cleaning robot equipped with dual ultrasonic water spray nozzles, 3800Pa vacuum adsorption, laser edge detection, and remote control.',
    features: [
      '3800Pa strong vacuum suction holds up to 7kg vertical pull force',
      'Dual ultrasonic mist atomization nozzles moisten glass without streaking',
      'Smart AI path calculation (Z-shape and N-shape coverage modes)',
      'Built-in UPS emergency battery backup maintains suction for 25 mins if power cuts',
      'Safety climbing rope tested to withstand 150kg tensile resistance'
    ],
    specs: {
      capacity: '50ml Dual Automatic Water Reservoirs',
      power: '80W Ultra-Low Energy Brushless Motor',
      energyRating: 'Laser Frame Edge Detection',
      dimensions: '295 x 145 x 90 mm',
      voltage: '100-240V ~ 50/60Hz Global Adaptor',
      weight: '1.1 kg',
      certifications: ['CE', 'CB', 'RoHS', 'FCC', 'UL']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Antwerp', 'CIF Miami'],
    moq: '1000 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-carpet-cleaners',
    name: 'Deep Spot & Stain Portable Upholstery Carpet Cleaner',
    category: 'Home Care',
    subCategory: 'Carpet Cleaners',
    modelCode: 'AT-HMC-CC12',
    badge: '12kPa Deep Suction',
    description: 'Compact spot-cleaning carpet and fabric extractor featuring high-pressure pressurized spray, rotating motorized brush, and 12kPa powerful fluid extraction.',
    features: [
      '12,000 Pa high-vacuum fluid extraction pulls embedded stains out of fibers',
      'Dual water tank system separating clean formulation from extracted wastewater',
      'Extended 1.7m wire-reinforced flexible hose with precision spray brush head',
      'Self-cleaning hose flush cap cleans internal line after usage',
      'Compact carry handle with integrated power cord wrap'
    ],
    specs: {
      capacity: '1400ml Clean Water / 1200ml Dirty Water Tank',
      power: '650W High-Efficiency Motor',
      energyRating: 'Deep Fabric Spot Extraction',
      dimensions: '330 x 245 x 350 mm',
      voltage: '220-240V ~ 50Hz / 120V 60Hz',
      weight: '4.1 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'ETL']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Hamburg', 'CIF Sydney'],
    moq: '850 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 11. PERSONAL CARE
  // ==========================================
  {
    id: 'prod-hair-dryers',
    name: 'High-Speed 110,000 RPM Negative Ionic Hair Dryer',
    category: 'Personal Care',
    subCategory: 'Hair Dryers',
    modelCode: 'AT-PSC-HD16',
    badge: '110K RPM Brushless',
    description: 'Aerodynamic salon-grade high-speed hair dryer powered by a 110,000 RPM brushless motor, 200 million negative ion emitter, and intelligent thermal sensor.',
    features: [
      '110,000 RPM high-speed digital brushless motor generates 68m/s wind speed',
      '200 Million negative ions/cm³ neutralizes static electricity and locks moisture',
      'NTC microchip monitors airflow temperature 100 times per second',
      '3-Color LED temperature ring (Blue: Cold / Yellow: Warm / Red: Hot)',
      'Ultra-quiet acoustic noise reduction below 59 decibels'
    ],
    specs: {
      capacity: 'Airflow Velocity: 68 m/s',
      power: '1600W High Speed BLDC',
      energyRating: 'Fast 2-Minute Quick Drying',
      dimensions: '277 x 70 x 89 mm',
      voltage: '220-240V ~ 50/60Hz or 110V 60Hz',
      weight: '407 g (Ultra-light body)',
      certifications: ['CE', 'CB', 'RoHS', 'FCC', 'PSE']
    },
    tradeTerms: ['FOB Shenzhen / Ningbo', 'CIF London', 'CIF Dubai'],
    moq: '1500 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-hair-straighteners',
    name: 'Tourmaline Ceramic Floating Plate Hair Straightener',
    category: 'Personal Care',
    subCategory: 'Hair Straighteners',
    modelCode: 'AT-PSC-HS45',
    badge: '15-Sec Fast Heat',
    description: 'Professional styling iron featuring 3D floating tourmaline ceramic plates, PTC instant heat elements reaching 230°C in 15 seconds, and auto safety shut-off.',
    features: [
      'MCH dual heating elements provide instant 15-second temperature recovery',
      '3D floating ceramic tourmaline plates eliminate hair snagging and split ends',
      'Digital LCD display with 11 heat stages (130°C to 230°C) for all hair textures',
      '360-degree professional tangle-free swivel cord with hanging loop',
      '60-Minute automatic safety sleep mode shuts power down if unattended'
    ],
    specs: {
      capacity: 'Plate Width: 25 x 100 mm Floating Ceramic',
      power: '50W Instant MCH Elements',
      energyRating: 'Digital LCD Multi-Heat Control',
      dimensions: '295 x 35 x 30 mm',
      voltage: '100-240V Dual Voltage Global Use',
      weight: '380 g',
      certifications: ['CE', 'CB', 'RoHS', 'ETL', 'GS']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Paris', 'CIF Toronto'],
    moq: '1800 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-trimmers',
    name: 'Zero-Gapped Professional Cordless Beard & Hair Trimmer',
    category: 'Personal Care',
    subCategory: 'Trimmers',
    modelCode: 'AT-PSC-TR20',
    badge: 'Titanium T-Blade',
    description: 'Full-metal skeleton body hair & beard detail trimmer with zero-gapped carbon titanium T-blade, 7000 RPM high-torque motor, and Type-C quick charging.',
    features: [
      'Zero-gapped self-sharpening titanium carbon steel T-blade for crisp lining',
      '7,000 RPM micro-rotary motor cuts through thick coarse hair effortlessly',
      'LED smart digital display monitors remaining battery percentage',
      '1400mAh Li-ion battery delivers 180 minutes of continuous precision trimming',
      'USB Type-C universal fast charge interface with universal worldwide voltage'
    ],
    specs: {
      capacity: '180 Minutes Continuous Cordless Run Time',
      power: '7000 RPM Heavy-Torque Motor',
      energyRating: '1400mAh Quick Charge Li-Ion',
      dimensions: '150 x 40 x 30 mm',
      voltage: '5V Type-C Charging (100-240V Input)',
      weight: '210 g (Solid Zinc Alloy Body)',
      certifications: ['CE', 'CB', 'RoHS', 'UN38.3', 'FCC']
    },
    tradeTerms: ['FOB Ningbo / Yiwu', 'CIF Rotterdam', 'CIF Jebel Ali'],
    moq: '2000 Units (1x 40HQ Container)',
    leadTime: '18-22 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-shavers',
    name: '3D Rotary Floating Head Wet & Dry Electric Shaver',
    category: 'Personal Care',
    subCategory: 'Shavers',
    modelCode: 'AT-PSC-SH03',
    badge: 'IPX7 100% Waterproof',
    description: 'Ergonomic 3D independent floating triple-head electric rotary shaver with double-track ultra-thin steel foil, pop-up trimmer, and IPX7 full immersion washability.',
    features: [
      '3D Floating contour flex head automatically adapts to jawline and neck curves',
      'Dual-ring ultra-thin surgical stainless steel blades increase shaving surface by 50%',
      'IPX7 100% waterproof construction allows wet shaving with foam in the shower',
      'Pop-up precision trimmer for sideburns and mustache detailing',
      'Smart anti-pinch system guarantees consistent blade speed even when battery is low'
    ],
    specs: {
      capacity: '90 Minutes Shaving Time / 60 Min Charge',
      power: '8W High-Efficiency Motor',
      energyRating: 'IPX7 Waterproof Submersible',
      dimensions: '160 x 60 x 55 mm',
      voltage: 'USB-C 5V / 100-240V Compatible',
      weight: '185 g',
      certifications: ['CE', 'CB', 'RoHS', 'IPX7 Certified', 'FDA']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Hamburg', 'CIF Santos'],
    moq: '1600 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1508380702597-707c1b00a394?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508380702597-707c1b00a394?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-grooming',
    name: 'All-in-One IPX7 Waterproof Full Body Grooming Kit',
    category: 'Personal Care',
    subCategory: 'Grooming',
    modelCode: 'AT-PSC-GR10',
    badge: '10-in-1 Complete Kit',
    description: 'Complete 10-in-1 cordless multi-grooming kit with interchangeable heads for beard, body hair, nose/ear detailer, foil shaver, and hair clipper with 5 guide combs.',
    features: [
      'Interchangeable magnetic heads: Full Size Trimmer, Body Groomer, Nose Trimmer, Foil',
      'Self-sharpening stainless steel blades maintain zero-pull cutting sharpness',
      'IPX7 whole body waterproof design for easy cleaning under the tap',
      'LED battery power percentage display and travel lock indicator',
      'Includes premium molded storage base station and oil bottle accessories'
    ],
    specs: {
      capacity: '10 Attachments / 120-Min Run Time',
      power: '5W Micro Torque Motor',
      energyRating: 'Lithium Li-Ion 1200mAh',
      dimensions: '165 x 42 x 38 mm',
      voltage: '5V Type-C USB Rechargeable',
      weight: '190 g',
      certifications: ['CE', 'CB', 'RoHS', 'REACH', 'EMC']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Southampton', 'CIF Los Angeles'],
    moq: '1500 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 12. COOLING & AIR
  // ==========================================
  {
    id: 'prod-fans',
    name: 'DC Inverter Ultra-Silent 12-Speed Smart Pedestal Fan',
    category: 'Cooling & Air',
    subCategory: 'Fans',
    modelCode: 'AT-CLA-FN16',
    badge: '13dB Whisper Quiet',
    description: '16-inch smart convertible pedestal & desk fan powered by a high-efficiency DC inverter brushless motor with 9 bionic blades, 3D oscillation, and remote app control.',
    features: [
      'Brushless DC inverter motor consumes only 24W at maximum airflow',
      '9-Blade bionic aerodynamic fan blades produce gentle natural wind simulation',
      'Ultra-quiet operation at only 13 decibels on sleep mode',
      '3D 120-degree horizontal + 90-degree vertical multi-axis oscillation',
      'Magnetic remote control docks securely on top of motor housing'
    ],
    specs: {
      capacity: '16-Inch (400mm) 9-Blade Airflow Sweep',
      power: '24W Ultra-Low Energy DC Motor',
      energyRating: 'A+++ Low Power Eco Standard',
      dimensions: '400 x 380 x 1250 mm (Adjustable Height)',
      voltage: '100-240V ~ 50/60Hz Universal Adaptor',
      weight: '4.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'ERP', 'NOM']
    },
    tradeTerms: ['FOB Zhongshan / Foshan', 'CIF Hamburg', 'CIF Dubai'],
    moq: '900 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618941716939-553df3c6c278?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-air-purifiers',
    name: 'Medical-Grade H13 True HEPA Smart Room Air Purifier',
    category: 'Cooling & Air',
    subCategory: 'Air Purifiers',
    modelCode: 'AT-CLA-AP50',
    badge: 'CADR 500 m³/h',
    description: 'High-performance smart air purifier with 360-degree cylindrical True HEPA H13 filter, laser PM2.5 particle sensor, UV-C germicidal LED, and CADR of 500 m³/h.',
    features: [
      'High CADR of 500 m³/h purifies a 60m² master room in under 12 minutes',
      'H13 True HEPA filter + activated carbon removes 99.97% of smoke, pollen, and VOCs',
      'Real-time PM2.5 numerical display with 4-color air quality ambient ring',
      'Internal UV-C wavelength sterilization neutralizes airborne bacteria and viruses',
      'Smart WiFi smartphone app enables remote scheduling and filter lifespan tracking'
    ],
    specs: {
      capacity: 'CADR: 500 m³/h (Coverage up to 65 m²)',
      power: '45W BLDC Motor',
      energyRating: 'Energy Star / AHAM Certified',
      dimensions: '290 x 290 x 580 mm',
      voltage: '220-240V ~ 50Hz / 120V 60Hz',
      weight: '6.2 kg',
      certifications: ['CE', 'CB', 'RoHS', 'AHAM', 'CARB']
    },
    tradeTerms: ['FOB Ningbo / Shanghai', 'CIF Rotterdam', 'CIF Halifax'],
    moq: '550 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-cooling-humidifiers',
    name: 'Cool Mist Ultrasonic Quiet Air Humidifier 4.5L',
    category: 'Cooling & Air',
    subCategory: 'Humidifiers',
    modelCode: 'AT-CLA-HM45',
    badge: 'Top-Fill Ultrasonic',
    description: '4.5L large capacity top-fill ultrasonic cool mist humidifier with silver ion antimicrobial water tank, dual 360° rotating nozzles, and 30-hour continuous run time.',
    features: [
      'Convenient top-fill design allows pouring water directly without detaching tank',
      'High-frequency ultrasonic atomization disc produces micron-sized micro mist',
      'Ag+ silver ion antibacterial material prevents bacterial growth in water tank',
      'Adjustable mist dial produces up to 300 ml/h with automatic dry shut-off safety',
      'Built-in essential oil aroma sponge drawer for ambient room fragrance'
    ],
    specs: {
      capacity: '4.5 Liters Water Reservoir',
      power: '25W Ultrasonic High-Frequency Transducer',
      energyRating: 'Low-Wattage Whisper Circuit',
      dimensions: '200 x 200 x 310 mm',
      voltage: '100-240V ~ 50/60Hz',
      weight: '1.6 kg',
      certifications: ['CE', 'CB', 'RoHS', 'ETL', 'FCC']
    },
    tradeTerms: ['FOB Shunde', 'CIF Valencia', 'CIF Santos'],
    moq: '1200 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 13. LAUNDRY
  // ==========================================
  {
    id: 'prod-garment-steamers',
    name: 'Dual-Bar Professional Heavy-Duty Garment Steamer',
    category: 'Laundry',
    subCategory: 'Garment Steamers',
    modelCode: 'AT-LND-GS20',
    badge: 'Dual Aluminum Poles',
    description: 'Professional 2000W standing fabric steamer with dual reinforced aluminum support poles, 2.5L transparent water tank, and multi-angle rotatable ironing board.',
    features: [
      'Heavy-duty 2000W brass heater delivers continuous 45g/min high-penetration steam',
      'Double adjustable telescopic aluminum poles provide steady wobble-free hanging',
      '90-Degree multi-angle tilting ironing board for both vertical and flat steaming',
      'Large 2.5L removable water reservoir allows 75 minutes of uninterrupted steaming',
      'Triple insulated anti-kink steam hose with anti-scalding ceramic soleplate'
    ],
    specs: {
      capacity: '2.5 Liters Transparent Tank (75 Mins Steam)',
      power: '2000W High-Pressure Steam Boiler',
      energyRating: 'Rapid 45-Second Steam Output',
      dimensions: '350 x 300 x 1650 mm (Max Height)',
      voltage: '220-240V ~ 50/60Hz',
      weight: '6.4 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'SASO']
    },
    tradeTerms: ['FOB Ningbo / Cixi', 'CIF Hamburg', 'CIF Jeddah'],
    moq: '650 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-steam-irons',
    name: 'Titanium Ceramic Soleplate Electronic Steam Iron',
    category: 'Laundry',
    subCategory: 'Steam Irons',
    modelCode: 'AT-LND-SI24',
    badge: 'Anti-Drip & Anti-Calc',
    description: '2400W premium corded steam iron with diamond-ceramic glide soleplate, 180g steam shot burst, anti-drip electronic valve, and self-cleaning calc collector.',
    features: [
      'High-velocity 2400W heating element produces instant steam burst up to 180g/min',
      'Diamond-infused ceramic soleplate with 420 micro steam holes for seamless glide',
      'Anti-calc self-cleaning cartridge prevents limescale and mineral deposits',
      'Smart 3-way auto shut-off turns iron off if left upright or face-down',
      '350ml transparent water tank with extra-large ergonomic filling gate'
    ],
    specs: {
      capacity: '350ml Water Reservoir',
      power: '2400W Fast-Heat Coil',
      energyRating: 'Precision Fabric Thermostat',
      dimensions: '310 x 130 x 160 mm',
      voltage: '220-240V ~ 50/60Hz',
      weight: '1.45 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'ETL']
    },
    tradeTerms: ['FOB Ningbo', 'CIF Rotterdam', 'CIF Santos'],
    moq: '1400 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-drying-appliances',
    name: 'Portable Folding Constant-Temperature Clothes Dryer',
    category: 'Laundry',
    subCategory: 'Drying Appliances',
    modelCode: 'AT-LND-DA10',
    badge: 'Folding Compact Dryer',
    description: 'Space-saving folding portable warm-air clothes dryer with 1000W PTC ceramic blower, UV sanitization lamp, and 15kg load capacity for apartments and travel.',
    features: [
      '1000W PTC ceramic heat generator circulates 65°C gentle temperature air',
      'Integrated UV-C germicidal lamp sanitizes garments and kills dust mites',
      'Sturdy stainless steel frame supports up to 15kg of damp hanging laundry',
      'High-density Oxford cloth canopy retains heat and resists water condensation',
      'Foldable frame collapses in 30 seconds for under-bed or closet storage'
    ],
    specs: {
      capacity: '15 kg Hanging Weight Capacity',
      power: '1000W PTC Air Generator',
      energyRating: 'Energy-Saving Thermostat Timer',
      dimensions: '720 x 480 x 1480 mm (Assembled)',
      voltage: '220-240V ~ 50Hz / 120V 60Hz',
      weight: '3.6 kg',
      certifications: ['CE', 'CB', 'RoHS', 'EMC']
    },
    tradeTerms: ['FOB Shunde', 'CIF Southampton', 'CIF Los Angeles'],
    moq: '800 Units (1x 40HQ Container)',
    leadTime: '25-30 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // ==========================================
  // 14. HOME COMFORT
  // ==========================================
  {
    id: 'prod-heaters',
    name: 'PTC Ceramic Fast-Heating Oscillating Tower Heater',
    category: 'Home Comfort',
    subCategory: 'Heaters',
    modelCode: 'AT-HMC-HT22',
    badge: '2-Second Instant Warmth',
    description: '2200W ceramic PTC oscillating vertical tower space heater with digital thermostat, 70-degree wide sweep, ECO energy saving mode, and tip-over sensor.',
    features: [
      'Advanced PTC ceramic heating element heats up to comfort warmth in 2 seconds',
      '70-Degree motorized wide oscillation spreads uniform heat across 30m² space',
      'Intelligent digital thermostat regulates room temperature between 15°C and 35°C',
      'Dual safety protection: Built-in tip-over switch and thermal overheat sensor',
      'Touch control LED panel with 12-hour timer and remote control'
    ],
    specs: {
      capacity: 'Coverage: 25 - 35 m² Living Space',
      power: '2200W High / 1200W Low Ceramic Element',
      energyRating: 'ECO Smart Temperature Regulation',
      dimensions: '210 x 210 x 680 mm',
      voltage: '220-240V ~ 50Hz / 120V 60Hz',
      weight: '2.8 kg',
      certifications: ['CE', 'CB', 'RoHS', 'GS', 'ETL']
    },
    tradeTerms: ['FOB Ningbo / Cixi', 'CIF Hamburg', 'CIF Montreal'],
    moq: '950 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-comfort-humidifiers',
    name: 'Whisper-Quiet Large Capacity Smart Ambient Humidifier 6L',
    category: 'Home Comfort',
    subCategory: 'Humidifiers',
    modelCode: 'AT-HMC-HM60',
    badge: '6L Ultra Runtime',
    description: '6.0L intelligent room humidifier with built-in digital humidistat, warm and cool mist dual modes, remote control, and whisper-quiet 24dB operation.',
    features: [
      'Extra-large 6.0L water reservoir provides up to 50 hours of continuous humidification',
      'Dual hybrid mode: Cool mist for summer and warm soothing mist for winter dry air',
      'Automatic digital humidistat maintains target relative humidity between 40% and 80%',
      'Ultra-quiet acoustic sound dampening design runs below 24dB in night mode',
      'Wide top-fill opening allows easy cleaning and descaling'
    ],
    specs: {
      capacity: '6.0 Liters Water Capacity (Up to 50 Hours)',
      power: '30W Cool / 110W Warm Mist Mode',
      energyRating: 'Smart Humidistat Auto-Off',
      dimensions: '240 x 180 x 340 mm',
      voltage: '100-240V Universal Power Supply',
      weight: '2.2 kg',
      certifications: ['CE', 'CB', 'RoHS', 'FCC', 'UL']
    },
    tradeTerms: ['FOB Shenzhen', 'CIF Rotterdam', 'CIF Jebel Ali'],
    moq: '1100 Units (1x 40HQ Container)',
    leadTime: '20-25 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'prod-aroma-diffusers',
    name: 'Ultrasonic Essential Oil Realistic Flame Aroma Diffuser',
    category: 'Home Comfort',
    subCategory: 'Aroma Diffusers',
    modelCode: 'AT-HMC-AD30',
    badge: 'Realistic Flame Effect',
    description: 'Aesthetic ultrasonic essential oil aromatherapy diffuser combining ultrasonic mist with warm amber LED light to simulate a realistic cozy fireplace flame.',
    features: [
      'Patented optical flame simulation combines ultrasonic fog with amber lighting',
      'Ultra-quiet 20dB acoustic operation perfect for bedroom, office, and yoga studio',
      'Waterless auto shut-off protection automatically powers down when empty',
      'BPA-free medical-grade PP material safe for babies and essential oils',
      'Multi-color ambient mood light with breathing and solid light modes'
    ],
    specs: {
      capacity: '300ml Water Tank (10 Hours Continuous)',
      power: '12W Ultrasonic High-Frequency Transducer',
      energyRating: 'Energy-Saving USB-C 5V / 2A Input',
      dimensions: '170 x 75 x 100 mm',
      voltage: '5V Type-C USB Interface',
      weight: '290 g',
      certifications: ['CE', 'CB', 'RoHS', 'FCC', 'EMC']
    },
    tradeTerms: ['FOB Shenzhen / Yiwu', 'CIF Southampton', 'CIF Los Angeles'],
    moq: '2500 Units (1x 40HQ Container)',
    leadTime: '15-20 Days',
    tradeType: 'both',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

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
    'commercial': 'Commercial Beverage Coolers'
  };
  return map[slug.toLowerCase()] || '';
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
