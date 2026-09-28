import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Box, 
  FileText, 
  Sparkles
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const category = PRODUCT_CATEGORIES.find(
    (c) => c.slug.toLowerCase() === (slug || '').toLowerCase() || c.id.toLowerCase() === (slug || '').toLowerCase()
  );

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray-bg select-none">
      
      {/* 1. Category Hero Banner */}
      <section className="relative bg-brand-blue-navy text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 -z-10">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-25 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-navy via-brand-blue-navy/95 to-brand-blue-navy/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-navy via-transparent to-transparent" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited B2B Sourcing Portfolio • {category.itemCount}+ Factory Models</span>
              </div>

              <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                {category.name}
              </h1>

              <p className="font-subheading text-sm text-slate-300 max-w-2xl leading-relaxed">
                {category.description} Sourced directly from pre-vetted OEM/ODM manufacturing hubs with strict AQL II pre-shipment inspections and container load optimization.
              </p>

              {/* Benchmark Feature Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {category.highlightSpecs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-xs font-medium text-slate-200 border border-white/15"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Sourcing Credentials Card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 shadow-2xl space-y-4">
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-brand-green">
                Category Trade Guarantee
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>100% Pre-Shipment Audit:</strong> Electrical Hi-Pot, functional stress test, and cosmetic inspection before dispatch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Box className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Container Maximization:</strong> Computer-modeled 3D pallet and carton loading for maximum freight yield.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Private Label Ready:</strong> Full OEM/ODM branding, silk-screen UI, and bilingual retail packaging.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/10">
                <Link to="/contact">
                  <Button variant="accent" size="sm" className="w-full justify-center" icon={<ArrowRight className="w-4 h-4" />}>
                    Request Sourcing Dossier
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Products Showcase Section */}
      <section className="py-12 sm:py-16">
        <Container size="xl">
          
          {/* Header Controls: Subcategory filter & View mode switcher */}
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-brand-gray-border/80">
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-blue-navy tracking-tight">
              Featured {category.name} Models
            </h2>
            <p className="font-subheading text-xs sm:text-sm text-brand-gray-muted mt-1">
              Showing {products.length} verified commercial models ready for containerized volume allocation.
            </p>
          </div>          {/* PRODUCT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <Link
                key={prod.id}
                to={`/products/${prod.id}`}
                className="group rounded-3xl bg-white border border-brand-gray-border/90 shadow-card hover:shadow-card-hover hover:border-brand-blue/40 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Product Image Frame */}
                <div className="relative h-72 sm:h-80 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-brand-blue-navy/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-sm">
                      {prod.modelCode}
                    </span>
                    {prod.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-brand-green text-brand-blue-navy text-[11px] font-bold shadow-sm">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom overlay: Subcategory & MOQ */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {prod.subCategory || category.name}
                    </span>
                    <span className="text-[11px] text-slate-200 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {prod.moq}
                    </span>
                  </div>
                </div>

                {/* Card Footer: Clean Product Identity only */}
                <div className="p-5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-brand-blue-navy group-hover:text-brand-blue transition-colors truncate">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-brand-gray-muted mt-0.5">
                      Click to inspect full technical specifications
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-gray-bg group-hover:bg-brand-blue group-hover:text-white text-brand-blue-navy flex items-center justify-center shrink-0 transition-colors shadow-xs">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </Container>
      </section>

    </div>
  );
};
