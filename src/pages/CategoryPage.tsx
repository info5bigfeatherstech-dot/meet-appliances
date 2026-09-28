import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Box, 
  FileText, 
  ArrowLeft,
  Table as TableIcon,
  LayoutGrid,
  Sparkles
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const category = PRODUCT_CATEGORIES.find(
    (c) => c.slug.toLowerCase() === (slug || '').toLowerCase() || c.id.toLowerCase() === (slug || '').toLowerCase()
  );

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const products = getProductsByCategory(category.slug);

  // Extract unique subcategories
  const subCategories = ['all', ...Array.from(new Set(products.map((p) => p.subCategory).filter(Boolean))) as string[]];

  const filteredProducts = selectedSubCategory === 'all'
    ? products
    : products.filter((p) => p.subCategory === selectedSubCategory);

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
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-brand-green font-medium">{category.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited B2B Sourcing Portfolio • {category.itemCount}+ Factory Models</span>
              </div>

              <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                {category.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-gray-border/80">
            <div>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-blue-navy tracking-tight">
                Featured {category.name} Models
              </h2>
              <p className="text-xs sm:text-sm text-brand-gray-muted mt-1">
                Showing {filteredProducts.length} verified commercial models ready for containerized volume allocation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Subcategory Pills */}
              {subCategories.length > 2 && (
                <div className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-white border border-brand-gray-border text-xs">
                  {subCategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubCategory(sub)}
                      className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-all ${
                        selectedSubCategory === sub
                          ? 'bg-brand-blue text-white shadow-xs'
                          : 'text-brand-gray-text hover:text-brand-blue'
                      }`}
                    >
                      {sub === 'all' ? 'All Types' : sub}
                    </button>
                  ))}
                </div>
              )}

              {/* View Mode Toggle: Cards vs Comparison Matrix */}
              <div className="flex items-center p-1 rounded-xl bg-white border border-brand-gray-border text-xs">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === 'cards'
                      ? 'bg-brand-blue text-white shadow-xs'
                      : 'text-brand-gray-text hover:text-brand-blue'
                  }`}
                  title="Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Product Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('matrix')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === 'matrix'
                      ? 'bg-brand-blue text-white shadow-xs'
                      : 'text-brand-gray-text hover:text-brand-blue'
                  }`}
                  title="Technical Comparison Matrix"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Compare Matrix</span>
                </button>
              </div>
            </div>
          </div>

          {/* VIEW MODE A: RICH PRODUCT CARDS */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="rounded-3xl bg-white border border-brand-gray-border/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Image Frame */}
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-brand-blue-navy/85 backdrop-blur-md text-white text-[11px] font-semibold">
                        {prod.modelCode}
                      </span>
                      {prod.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-brand-green text-brand-blue-navy text-[11px] font-bold shadow-sm">
                          {prod.badge}
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay: Subcategory */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-semibold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md">
                        {prod.subCategory || category.name}
                      </span>
                      <span className="text-[11px] text-slate-200">
                        {prod.moq}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <Link to={`/products/${prod.id}`}>
                      <h3 className="font-heading font-semibold text-lg text-brand-blue-navy group-hover:text-brand-blue transition-colors line-clamp-2 mb-2">
                        {prod.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-brand-gray-muted line-clamp-2 mb-4 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Key Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-brand-gray-bg border border-brand-gray-border mb-4 text-xs">
                      <div>
                        <span className="text-[10px] text-brand-gray-muted uppercase font-bold block">Capacity</span>
                        <span className="font-semibold text-brand-blue-navy truncate block">
                          {prod.specs.capacity || 'Commercial Standard'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-gray-muted uppercase font-bold block">Energy / Efficiency</span>
                        <span className="font-semibold text-brand-blue-navy truncate block">
                          {prod.specs.energyRating || 'Eco Class A'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-gray-muted uppercase font-bold block">Power Rating</span>
                        <span className="font-semibold text-brand-blue-navy truncate block">
                          {prod.specs.power || 'High Efficiency'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-gray-muted uppercase font-bold block">Lead Time</span>
                        <span className="font-semibold text-brand-blue truncate block">
                          {prod.leadTime}
                        </span>
                      </div>
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-1.5 mb-5 flex-1">
                      {prod.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Certification Badges */}
                    <div className="flex flex-wrap gap-1 mb-5 pt-3 border-t border-brand-gray-border/60">
                      {prod.specs.certifications.slice(0, 5).map((cert) => (
                        <span
                          key={cert}
                          className="px-2 py-0.5 rounded bg-brand-blue-subtle text-brand-blue text-[10px] font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex items-center gap-2">
                      <Link to={`/contact?product=${encodeURIComponent(prod.modelCode + ' - ' + prod.name)}`} className="flex-1">
                        <Button variant="primary" size="sm" className="w-full justify-center text-xs">
                          Request Quote
                        </Button>
                      </Link>
                      <Link to={`/products/${prod.id}`}>
                        <Button variant="secondary" size="sm" className="px-3" title="View Full Specs">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW MODE B: SIDE-BY-SIDE TECHNICAL COMPARISON MATRIX */}
          {viewMode === 'matrix' && (
            <div className="bg-white rounded-3xl border border-brand-gray-border shadow-card overflow-hidden">
              <div className="p-6 bg-brand-blue-navy text-white flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-lg">
                    {category.name} — Technical Specification Matrix
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Compare capacities, voltage standards, certifications, and container stuffed quantities across models.
                  </p>
                </div>
                <Link to="/contact">
                  <Button variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Inquire All Models
                  </Button>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-gray-bg border-b border-brand-gray-border text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-6 w-1/4">Specification Parameter</th>
                      {filteredProducts.map((p) => (
                        <th key={p.id} className="py-4 px-6 w-1/4 min-w-[220px]">
                          <span className="text-brand-blue-navy block text-sm font-semibold">{p.name}</span>
                          <span className="text-brand-blue font-mono font-medium text-xs">{p.modelCode}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-gray-border">
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Visual Preview</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6">
                          <img src={p.image} alt={p.name} className="w-24 h-24 object-cover rounded-xl border border-brand-gray-border" />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Capacity / Size</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 font-medium text-slate-800">{p.specs.capacity || 'N/A'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Power / Energy Rating</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 font-medium text-slate-800">
                          <div>{p.specs.power || 'N/A'}</div>
                          <div className="text-brand-green font-semibold text-[11px] mt-0.5">{p.specs.energyRating}</div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Voltage & Frequency</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 text-slate-800">{p.specs.voltage || '220-240V 50Hz'}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Dimensions & Weight</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 text-slate-800">
                          <div>{p.specs.dimensions}</div>
                          <div className="text-slate-500 text-[11px]">Weight: {p.specs.weight}</div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">MOQ & Container Load</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 font-bold text-brand-blue">
                          {p.moq}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Production Lead Time</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6 text-slate-800">{p.leadTime}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Certifications</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-3 px-6">
                          <div className="flex flex-wrap gap-1">
                            {p.specs.certifications.map((c) => (
                              <span key={c} className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue font-semibold text-[10px]">
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-brand-blue-navy bg-brand-gray-bg/40">Commercial Action</td>
                      {filteredProducts.map((p) => (
                        <td key={p.id} className="py-4 px-6">
                          <Link to={`/contact?product=${encodeURIComponent(p.modelCode + ' - ' + p.name)}`}>
                            <Button variant="primary" size="sm" className="w-full justify-center text-xs">
                              Request CIF Quote
                            </Button>
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </Container>
      </section>

      {/* 3. Category Quality Control Protocol Banner */}
      <section className="py-12 bg-white border-y border-brand-gray-border/80">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <Badge variant="blue">Auditing Standards</Badge>
              <h3 className="font-heading font-semibold text-2xl text-brand-blue-navy">
                Factory QA Protocol for {category.name}
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray-muted leading-relaxed">
                Before any container door is sealed, our independent inspectors execute strict AQL Level II sampling protocols. We are your advocate on the factory floor.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-brand-gray-bg border border-brand-gray-border">
                <span className="w-7 h-7 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs mb-2">1</span>
                <h4 className="font-heading font-semibold text-xs text-brand-blue-navy mb-1">Hi-Pot & Electrical</h4>
                <p className="text-[11px] text-brand-gray-muted leading-relaxed">High-voltage dielectric withstand, earth resistance, and power cord pull strength tests.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-gray-bg border border-brand-gray-border">
                <span className="w-7 h-7 rounded-lg bg-brand-green/20 text-emerald-800 flex items-center justify-center font-bold text-xs mb-2">2</span>
                <h4 className="font-heading font-semibold text-xs text-brand-blue-navy mb-1">Thermal Chamber</h4>
                <p className="text-[11px] text-brand-gray-muted leading-relaxed">43°C tropical ambient testing verifying compressor cooling and heating coil longevity.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-gray-bg border border-brand-gray-border">
                <span className="w-7 h-7 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs mb-2">3</span>
                <h4 className="font-heading font-semibold text-xs text-brand-blue-navy mb-1">ISTA Drop & Packaging</h4>
                <p className="text-[11px] text-brand-gray-muted leading-relaxed">10-point corner, edge, and face drop test ensuring zero ocean transit breakage.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Other Categories Navigation Strip */}
      <section className="py-16 bg-brand-gray-bg">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-brand-blue-navy">
              Explore Other Appliance Categories
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray-muted mt-1">
              Select another product vertical to inspect verified models, container yield, and technical specs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 6).map((other) => (
              <Link
                key={other.id}
                to={`/category/${other.slug}`}
                className="group p-4 rounded-2xl bg-white border border-brand-gray-border hover:border-brand-blue shadow-xs hover:shadow-card transition-all text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img src={other.image} alt={other.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-heading font-semibold text-xs text-brand-blue-navy group-hover:text-brand-blue transition-colors line-clamp-1">
                  {other.name}
                </h4>
                <span className="text-[10px] text-brand-gray-muted mt-0.5">
                  {other.itemCount}+ Models
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gray-muted hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Master Appliance Catalog</span>
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
};
