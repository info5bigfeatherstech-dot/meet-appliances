const fs = require('fs');

const newProducts = [
  // ------------------------------------------
  // 1. REFRIGERATION & FREEZERS (3 new -> total 6)
  // ------------------------------------------
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

  // ------------------------------------------
  // 2. WASHING MACHINES & DRYERS (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 3. AIR CONDITIONING & HVAC (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 4. COOKING & BUILT-IN OVENS (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 5. SMART SMALL KITCHENWARE (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 6. DISHWASHERS & CLEANING (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 7. SMART TELEVISION & DISPLAY (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80']
  },

  // ------------------------------------------
  // 8. COMMERCIAL BEVERAGE COOLERS (3 new -> total 6)
  // ------------------------------------------
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
    gallery: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80']
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
    gallery: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80']
  }
];

// Read existing products.ts
const productsFilePath = 'src/data/products.ts';
let content = fs.readFileSync(productsFilePath, 'utf8');

// Find insertion point before `export const getCategoryBySlug`
const splitMarker = 'export const getCategoryBySlug';
if (!content.includes(splitMarker)) {
  console.error('Marker not found');
  process.exit(1);
}

const parts = content.split(splitMarker);
const beforePart = parts[0].trimEnd();

// We need to insert the items before `];`
const lastBracketIndex = beforePart.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error('Closing bracket not found');
  process.exit(1);
}

const mainList = beforePart.substring(0, lastBracketIndex).trimEnd();

// Format new products as TS objects
function formatProduct(p) {
  return `  {
    id: '${p.id}',
    name: '${p.name.replace(/'/g, "\\'")}',
    category: '${p.category}',
    subCategory: '${p.subCategory}',
    modelCode: '${p.modelCode}',
    badge: '${p.badge}',
    description: '${p.description.replace(/'/g, "\\'")}',
    features: [
${p.features.map(f => `      '${f.replace(/'/g, "\\'")}'`).join(',\n')}
    ],
    specs: {
      capacity: '${p.specs.capacity.replace(/'/g, "\\'")}',
      power: '${p.specs.power.replace(/'/g, "\\'")}',
      energyRating: '${p.specs.energyRating.replace(/'/g, "\\'")}',
      dimensions: '${p.specs.dimensions.replace(/'/g, "\\'")}',
      voltage: '${p.specs.voltage.replace(/'/g, "\\'")}',
      weight: '${p.specs.weight.replace(/'/g, "\\'")}',
      certifications: [${p.specs.certifications.map(c => `'${c}'`).join(', ')}]
    },
    tradeTerms: [${p.tradeTerms.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}],
    moq: '${p.moq.replace(/'/g, "\\'")}',
    leadTime: '${p.leadTime.replace(/'/g, "\\'")}',
    tradeType: '${p.tradeType}',
    isFeatured: ${p.isFeatured},
    image: '${p.image}',
    gallery: [
${p.gallery.map(g => `      '${g}'`).join(',\n')}
    ]
  }`;
}

const formattedNewItems = newProducts.map(formatProduct).join(',\n');

const newContent = `${mainList},
  // ==========================================
  // EXTENDED CATALOG: 6 MODELS PER CATEGORY
  // ==========================================
${formattedNewItems}
];

export const getCategoryBySlug${parts[1]}`;

fs.writeFileSync(productsFilePath, newContent, 'utf8');
console.log('Successfully added 24 products! Total products now 48.');
