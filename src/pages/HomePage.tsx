import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustedBrandsMarquee } from '../components/home/TrustedBrandsMarquee';
import { GlobalTradeBanner } from '../components/home/GlobalTradeBanner';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { HowItWorksTimeline } from '../components/home/HowItWorksTimeline';
import { FeaturedCategoriesSection } from '../components/home/FeaturedCategoriesSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Full Hero Section */}
      <HeroSection />

      {/* 2. Trusted Brands Marquee Strip */}
      <TrustedBrandsMarquee />

      {/* 3. Global Sourcing Platform & Port Corridors Banner (Custom Reference Style) */}
      <GlobalTradeBanner />

      {/* 4. What We Do - Core Capabilities */}
      <WhatWeDoSection />

      {/* 4. How It Works - Animated Progress Timeline */}
      <HowItWorksTimeline />

      {/* 5. Featured Product Categories Grid */}
      <FeaturedCategoriesSection />

      {/* 6. Global Reach - Corridors & Port Hubs */}
      {/* <GlobalReachSection /> */}

      {/* 7. Why Choose Us - 6 Value Pillars */}
      <WhyChooseUsSection />

      {/* 8. Verified Importer Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}

      {/* 9. High-Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
};
