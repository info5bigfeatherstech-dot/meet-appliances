import type { TradeService, TimelineStep } from '../types';

export const TRADE_SERVICES: TradeService[] = [
  {
    id: 'sourcing',
    title: 'Strategic Factory Sourcing & Vetting',
    tagline: 'Connecting your brand to audited, tier-1 home appliance manufacturers worldwide.',
    description: 'We eliminate supplier risk by conducting rigorous on-site factory audits, financial solvency evaluations, machinery capability assessments, and production capacity verifications across key global manufacturing hubs.',
    iconName: 'SearchCheck',
    benefits: [
      'Access to 320+ pre-vetted OEM/ODM manufacturing partners',
      'Benchmark pricing negotiations with container-volume leverage',
      'Comprehensive factory audit reports (BSCI, ISO, SA8000 compliance)',
      'Custom tooling and private label molding coordination'
    ],
    deliverables: [
      'Comprehensive Supplier Audit Dossier',
      'Comparative Price Breakdown & Bill of Materials',
      'Production Capacity & Bottleneck Analysis',
      'Tooling & Prototype Feasibility Study'
    ],
    timeline: '5 - 10 Business Days'
  },
  {
    id: 'quality-inspection',
    title: 'Pre-Shipment Quality Assurance (QA/QC)',
    tagline: 'Zero-tolerance inspection protocols before any container is sealed.',
    description: 'Our certified quality engineers carry out comprehensive AQL standard inspections covering electrical safety (high-pot test, earth leakage), thermal performance, drop tests, cosmetic finish, and container stowage security.',
    iconName: 'ShieldCheck',
    benefits: [
      'ISO 2859-1 (AQL Level II) certified inspection framework',
      'On-site functional endurance, climate-chamber, and drop testing',
      'Live photo & high-definition video documentation during testing',
      '100% container loading supervision (CLS) protocol'
    ],
    deliverables: [
      'Detailed 40+ Page QC Inspection Report',
      'Electrical Hi-Pot & Functional Pass Certificates',
      'Carton Drop & Transit Packaging Verification',
      'Container Seal & Loading Logbook'
    ],
    timeline: 'Conducted 24-48h Prior to Loading'
  },
  {
    id: 'import-export',
    title: 'Global Export & Import Management',
    tagline: 'Turnkey international trade execution across 58 destination countries.',
    description: 'We orchestrate multi-modal freight contracts, manage bill of lading transfers, letter of credit (LC) compliance, and streamline international customs clearance under standard Incoterms (FOB, CIF, CFR, DDP).',
    iconName: 'Ship',
    benefits: [
      'Preferred ocean carrier contracts with guaranteed space allocation',
      'Complete Letter of Credit (L/C at sight) banking documentation',
      'Optimal container cubing calculation (maximizing units per 40HQ)',
      'Marine cargo all-risk insurance coverage (Institute Cargo Clauses A)'
    ],
    deliverables: [
      'Clean On-Board Bill of Lading (B/L)',
      'Commercial Invoice & Packing List attested by Chambers',
      'Insurance Certificate covering 110% of CIF value',
      'Real-time GPS Container Milestones Tracking'
    ],
    timeline: 'Continuous Throughout Voyage'
  },
  {
    id: 'compliance',
    title: 'Trade Compliance & Certification',
    tagline: 'Navigating regional electrical and environmental standards seamlessly.',
    description: 'Every market possesses unique mandatory regulatory barriers. We secure laboratory testing and official certification filings including CE, CB, RoHS, REACH, SASO Saber, NOM, G-Mark, and UL/ETL.',
    iconName: 'FileText',
    benefits: [
      'Direct liaison with accredited testing houses (TUV, SGS, Intertek)',
      'Energy efficiency label filings (EU EPREL, US EnergyStar, SASO EER)',
      'Chemical and material safety verifications (RoHS, REACH SVHC)',
      'Multilingual instruction manual and safety warning compliance'
    ],
    deliverables: [
      'CB Test Certificate & Test Reports',
      'Declaration of Conformity (DoC) Dossiers',
      'Regional Customs Clearance Safety Certifications',
      'Compliant Packaging Artwork & Warning Labels'
    ],
    timeline: 'Coordinated with Tooling / Pre-Production'
  }
];

export const HOW_IT_WORKS_TIMELINE: TimelineStep[] = [
  {
    step: 1,
    title: 'Inquiry & Specification Definition',
    subtitle: 'Clarifying market standards, volumes, and target pricing.',
    description: 'You share your technical requirements, desired certifications, target FOB/CIF price, and projected container volume. Our sourcing team evaluates technical feasibility and local market conformity.',
    deliverables: ['Product Requirement Document (PRD)', 'Cost & Duty Feasibility Estimate', 'Regulatory Roadmap'],
    duration: '1 - 3 Days'
  },
  {
    step: 2,
    title: 'Factory Sourcing & Sample Approval',
    subtitle: 'Leveraging our 320+ audited supplier network for best quotation.',
    description: 'We issue tenders to pre-vetted appliance manufacturers, negotiate volume pricing, and deliver functional pre-production golden samples to your office for physical evaluation and sign-off.',
    deliverables: ['Tier-1 Supplier Matrix', 'Golden Reference Sample', 'Commercial Agreement & Trade Terms'],
    duration: '7 - 14 Days'
  },
  {
    step: 3,
    title: 'Production Oversight & In-Line QC',
    subtitle: 'Continuous monitoring of critical components and assembly line.',
    description: 'During assembly, our resident engineers audit component batches (compressors, motors, PCBA boards, thermal sensors) to guarantee zero deviations from the approved golden sample.',
    deliverables: ['In-Line Quality Audit', 'Component Origin Certification', 'Weekly Production Progress Log'],
    duration: '20 - 30 Days'
  },
  {
    step: 4,
    title: 'Pre-Shipment Inspection (AQL II)',
    subtitle: 'Exhaustive functional, drop, and electrical safety testing.',
    description: 'Before release, randomized statistical sampling undergoes rigorous Hi-Pot insulation tests, power draw checks, finish scrutiny, and barcode validation. Nothing ships without an inspection pass certificate.',
    deliverables: ['Full AQL Inspection Dossier', 'Photo & Video Inspection Vault', 'QC Release Authorization'],
    duration: '2 - 3 Days'
  },
  {
    step: 5,
    title: 'Container Loading & Ocean Freight',
    subtitle: 'Optimized stowage and multimodal vessel booking.',
    description: 'Our team supervises container loading on-site, recording container integrity, moisture desiccant placement, and seal numbers. We coordinate direct vessel sailings to your designated port of entry.',
    deliverables: ['Container Loading Supervision Report', 'Vessel Booking Confirmation & Bill of Lading', 'Seal Verification'],
    duration: '3 - 5 Days'
  },
  {
    step: 6,
    title: 'Customs Clearance & Port Delivery',
    subtitle: 'Full documentation dispatch and final destination handoff.',
    description: 'We furnish all necessary commercial invoices, certificates of origin, and laboratory conformity papers for rapid customs release, delivering your containers directly to your regional fulfillment center.',
    deliverables: ['Customs Release Dossier', 'Certificate of Origin (CO)', 'Final Handover Acceptance'],
    duration: 'Transit Time Dependent'
  }
];
