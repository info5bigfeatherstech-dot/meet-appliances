# AuraTrade Global — Home Appliances Sourcing, Import & Export Platform

**AuraTrade Global** is a premier, modern web application for an international home appliances **Import & Export trading and sourcing company**. 

> **Important Positioning Note**: AuraTrade Global operates strictly as a **neutral B2B sourcing, quality inspection, and container logistics partner** — it does **NOT** manufacture. All site copy, documentation, and product catalogs reflect an independent trade partner advocating for global buyers and retail chains.

---

## 🚀 Live Tech Stack

- **Framework**: React + Vite + TypeScript (Strict Mode with `verbatimModuleSyntax`)
- **Styling**: Tailwind CSS + Custom CSS Variables & Glassmorphism Design System
- **Animation**: Framer Motion (Page transitions, parallax, reveals) + GSAP & Canvas (World trade lanes & progress timelines)
- **Smooth Scrolling**: Lenis (@studio-freight / lenis) with `prefers-reduced-motion` compliance
- **Routing**: React Router v6 with `AnimatePresence` page transitions & scroll restoration
- **Icons**: Lucide React
- **Forms & Validation**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **SEO & Metadata**: `react-helmet-async`, Open Graph tags, semantic HTML5

---

## 🎨 Design System & Color Tokens

Defined in both `src/index.css` and `tailwind.config.js`:

| Token | Hex Value | Usage |
|---|---|---|
| **Primary Blue** | `#1E5EFF` | Primary brand accent, glowing CTAs, active highlights |
| **Deep Blue** | `#0B3AA8` | Gradients, primary hover states |
| **Dark Navy** | `#0A1A3F` | Dark hero accents, footer, high-contrast sections |
| **Accent Light Green** | `#7EE8B0` | Verified status badges, glows, live shipping indicators |
| **Soft Green** | `#C9F7DF` | Subtle tags, trust guarantee pills |
| **Background Gray** | `#F5F7FA` | Clean canvas background |
| **Border Gray** | `#E4E8EE` | Glass card dividers and structural borders |
| **Muted Text** | `#8A94A6` | Secondary labels, model codes, specs |
| **Body Text** | `#2B3340` | High-contrast readable typography |

**Typography**:
- **Headings**: `Plus Jakarta Sans` / `Sora`
- **Body**: `Inter`

---

## 📂 Project Structure

```
d:/Meet/
├── public/
│   └── favicon.svg               # SVG Trade mark favicon
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx        # Magnetic & glowing CTA button variants
│   │   │   ├── Card.tsx          # Glassmorphism & dark cards
│   │   │   ├── Container.tsx     # Responsive max-width wrappers
│   │   │   ├── Section.tsx       # Semantic layout sections
│   │   │   ├── Badge.tsx         # MOQ, certification, and trade pills
│   │   │   ├── AnimatedCounter.tsx # Viewport-triggered metric counter
│   │   │   ├── RevealOnScroll.tsx  # Framer Motion scroll reveals
│   │   │   ├── Marquee.tsx       # Smooth infinite brand logo strip
│   │   │   ├── ScrollProgressBar.tsx # Gradient scroll progress bar
│   │   │   ├── CustomCursor.tsx  # Desktop-only smooth spring follower
│   │   │   ├── WhatsAppButton.tsx# Interactive floating trade desk widget
│   │   │   ├── Navbar.tsx        # Glass sticky nav with mobile drawer
│   │   │   └── Footer.tsx        # Multi-column B2B footer with newsletter
│   │   └── home/
│   │       ├── HeroSection.tsx   # Word-by-word reveal, counters, CTAs
│   │       ├── MeshBackground.tsx# Fluid gradient mesh with blurred blobs
│   │       ├── ApplianceParallax.tsx # Depth-parallax floating appliances
│   │       ├── WorldTradeMapCanvas.tsx # 60fps canvas trade routes & pulses
│   │       ├── TrustedBrandsMarquee.tsx # Verified buyer & retail strip
│   │       ├── WhatWeDoSection.tsx # 4 core trader capabilities
│   │       ├── HowItWorksTimeline.tsx # 6-phase animated progress line
│   │       ├── FeaturedCategoriesSection.tsx # Category zoom grid
│   │       ├── GlobalReachSection.tsx # Shipping corridors & port hubs
│   │       ├── WhyChooseUsSection.tsx # 6 buyer protection pillars
│   │       ├── TestimonialsCarousel.tsx # Verified container feedback
│   │       └── CtaBanner.tsx     # High-conversion container RFQ banner
│   ├── data/
│   │   ├── company.ts            # Brand info, addresses, WhatsApp configs
│   │   ├── categories.ts         # 8 appliance categories with spec lists
│   │   ├── products.ts           # Appliance catalog with MOQ & Incoterms
│   │   ├── services.ts           # Sourcing, QA, freight & compliance
│   │   ├── stats.ts              # Hero counters and trust indicators
│   │   ├── tradeRoutes.ts        # Coordinates for global trade lanes
│   │   ├── testimonials.ts       # Global importer reviews & container tags
│   │   └── brands.ts             # Distribution marquee partners
│   ├── hooks/
│   │   └── useLenis.ts           # Lenis smooth scrolling with accessibility
│   ├── lib/
│   │   └── utils.ts              # Class merging & number formatting
│   ├── pages/
│   │   ├── HomePage.tsx          # Fully animated flagship landing page
│   │   ├── AboutPage.tsx         # Trader story, non-manufacturer pledge
│   │   ├── ProductsPage.tsx      # Filterable catalog (import/export/search)
│   │   ├── ProductDetailPage.tsx # Tech specs, MOQ sheet & quote launcher
│   │   ├── ServicesPage.tsx      # Deep dive into Sourcing & Inspection
│   │   ├── ContactPage.tsx       # Zod-validated RFQ form & tracking code
│   │   └── NotFoundPage.tsx      # 404 error screen
│   ├── types/
│   │   └── index.ts              # Strict TypeScript definitions
│   ├── App.tsx                   # Routes, AnimatePresence transitions
│   ├── main.tsx                  # Root mount
│   └── index.css                 # Design tokens and base styles
├── tailwind.config.js            # Custom tokens and keyframe animations
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Setup & Running Instructions

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v22)
- **Package Manager**: npm

### 2. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5174/](http://localhost:5174/) in your browser.

### 3. Production Build
Compile TypeScript and bundle optimized assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🖼️ How to Replace Appliance Images

All appliance catalog items are consolidated inside:
[`src/data/products.ts`](file:///d:/Meet/src/data/products.ts)

Each product has dedicated image and gallery fields:
```typescript
{
  id: 'prod-rf-01',
  name: 'French Door 4-Door Inverter Refrigerator',
  image: 'https://your-cdn-or-assets/refrigerator-main.jpg',
  gallery: [
    'https://your-cdn-or-assets/refrigerator-angle-1.jpg',
    'https://your-cdn-or-assets/refrigerator-interior.jpg'
  ],
  moq: '54 Units (1x 40HQ Container)',
  tradeTerms: ['FOB Shanghai', 'CIF Hamburg'],
  // ...
}
```
You can place local images in `public/appliances/` and reference them as `/appliances/your-image.png`.

---

## 🌍 Accessibility & Performance Features

1. **Reduced Motion**: All animations automatically respect `prefers-reduced-motion: reduce`, disabling heavy motion and keeping transitions instant.
2. **Device Detection**: The custom cursor follower only initializes on non-touch pointer devices (mouse) and stays inactive on tablets/phones.
3. **Contrast & Typography**: Adheres to WCAG AA color contrast standards.
4. **Form Validation**: Uses strict `zod` schema validation with real-time error states on corporate email, phone, and container specifications.
