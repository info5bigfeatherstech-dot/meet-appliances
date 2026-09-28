import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/products';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ArrowLeft, ShieldCheck, Check, Ship } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS_DATA.find((p) => p.id === id) || PRODUCTS_DATA[0];
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Similar products in same category
  const similarProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="py-10 bg-brand-gray-bg min-h-screen">
      <Container size="xl">
        {/* Back Link */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gray-muted hover:text-brand-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Appliance Catalog</span>
          </button>
        </div>

        {/* Main Product Showcase Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-brand-gray-border/80 shadow-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-80 sm:h-[420px] border border-brand-gray-border/80">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-brand-green text-brand-blue-navy text-xs font-bold shadow-md">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails if available */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === img ? 'border-brand-blue scale-105' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Inspection Guarantee Pill */}
              <div className="p-4 rounded-2xl bg-brand-blue-subtle/50 border border-brand-blue/20 text-xs text-brand-gray-text flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-brand-blue-navy block">Pre-Shipment Inspection Included</span>
                  Every order of {product.modelCode} undergoes statistical AQL Level II functional hi-pot insulation, drop tests, and container loading supervision before dispatch.
                </div>
              </div>
            </div>

            {/* Right Column: Specs & Inquiry Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="blue" size="sm">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-brand-gray-muted font-mono bg-brand-gray-bg px-2.5 py-0.5 rounded border border-brand-gray-border">
                    {product.modelCode}
                  </span>
                </div>

                <h1 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-blue-navy">
                  {product.name}
                </h1>

                <p className="text-sm text-brand-gray-text/90 mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Commercial Terms Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-brand-gray-bg border border-brand-gray-border">
                <div>
                  <span className="text-[11px] text-brand-gray-muted uppercase tracking-wide block">MOQ / Packaging:</span>
                  <span className="text-xs font-bold text-brand-blue-navy block mt-0.5">{product.moq}</span>
                </div>
                <div>
                  <span className="text-[11px] text-brand-gray-muted uppercase tracking-wide block">Production Lead Time:</span>
                  <span className="text-xs font-bold text-brand-blue-navy block mt-0.5">{product.leadTime}</span>
                </div>
                <div>
                  <span className="text-[11px] text-brand-gray-muted uppercase tracking-wide block">Trade Direction:</span>
                  <span className="text-xs font-bold text-brand-blue capitalize block mt-0.5">{product.tradeType}</span>
                </div>
              </div>

              {/* Trade Ports & Incoterms */}
              <div>
                <span className="text-xs font-bold text-brand-blue-navy block mb-2">
                  Available Trade Terms & Ports:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.tradeTerms.map((term, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 text-xs bg-white text-slate-700 px-3 py-1.5 rounded-xl border border-brand-gray-border font-medium"
                    >
                      <Ship className="w-3.5 h-3.5 text-brand-blue" />
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div>
                <span className="text-xs font-bold text-brand-blue-navy block mb-2">
                  Standard Factory Features:
                </span>
                <ul className="space-y-2">
                  {product.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-brand-gray-text">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action buttons */}
              <div className="pt-4 border-t border-brand-gray-border/60 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to={`/contact?model=${encodeURIComponent(product.modelCode)}&category=${encodeURIComponent(product.category)}`}
                  className="w-full sm:w-auto flex-1"
                >
                  <Button variant="primary" size="lg" glow className="w-full justify-center">
                    Request Container Quote for This Model
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/18005829471?text=${encodeURIComponent(`Hi Meet Appliances, please send commercial pricing & spec dossier for model: ${product.modelCode} (${product.name}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="secondary" size="lg" className="w-full justify-center">
                    Instant WhatsApp Spec
                  </Button>
                </a>
              </div>
            </div>

          </div>

          {/* Full Technical Specifications Sheet */}
          <div className="mt-12 pt-8 border-t border-brand-gray-border/80">
            <h3 className="font-heading font-bold text-xl text-brand-blue-navy mb-6">
              Engineering & Compliance Specifications
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-brand-gray-text border border-brand-gray-border rounded-2xl overflow-hidden">
                <tbody className="divide-y divide-brand-gray-border">
                  <tr className="bg-brand-gray-bg/60">
                    <td className="py-3 px-4 font-semibold text-brand-blue-navy w-1/3">Model Reference Code</td>
                    <td className="py-3 px-4 font-mono font-medium">{product.modelCode}</td>
                  </tr>
                  {product.specs.capacity && (
                    <tr>
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Volume / Capacity</td>
                      <td className="py-3 px-4">{product.specs.capacity}</td>
                    </tr>
                  )}
                  {product.specs.power && (
                    <tr className="bg-brand-gray-bg/60">
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Electrical Power Rating</td>
                      <td className="py-3 px-4">{product.specs.power}</td>
                    </tr>
                  )}
                  {product.specs.energyRating && (
                    <tr>
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Energy Efficiency Standard</td>
                      <td className="py-3 px-4">{product.specs.energyRating}</td>
                    </tr>
                  )}
                  {product.specs.voltage && (
                    <tr className="bg-brand-gray-bg/60">
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Voltage / Frequency</td>
                      <td className="py-3 px-4">{product.specs.voltage}</td>
                    </tr>
                  )}
                  {product.specs.dimensions && (
                    <tr>
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Product Dimensions (W x D x H)</td>
                      <td className="py-3 px-4">{product.specs.dimensions}</td>
                    </tr>
                  )}
                  {product.specs.weight && (
                    <tr className="bg-brand-gray-bg/60">
                      <td className="py-3 px-4 font-semibold text-brand-blue-navy">Net Weight / Gross Weight</td>
                      <td className="py-3 px-4">{product.specs.weight}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-3 px-4 font-semibold text-brand-blue-navy">Compliance & Safety Certifications</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1.5">
                        {product.specs.certifications.map((c) => (
                          <span key={c} className="bg-brand-blue/10 text-brand-blue font-semibold px-2 py-0.5 rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Similar Appliances */}
        {similarProducts.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-2xl text-brand-blue-navy mb-6">
              Alternative Models in {product.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="rounded-2xl bg-white p-5 border border-brand-gray-border hover:shadow-card hover:border-brand-blue/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] text-brand-gray-muted uppercase font-mono">{p.modelCode}</span>
                    <h4 className="font-heading font-bold text-sm text-brand-blue-navy group-hover:text-brand-blue mt-1">
                      {p.name}
                    </h4>
                    <p className="text-xs text-brand-gray-muted mt-1">{p.moq}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
