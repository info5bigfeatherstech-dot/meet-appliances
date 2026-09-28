import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Box, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS_DATA;
    const catLower = selectedCategory.toLowerCase();
    return PRODUCTS_DATA.filter((product) => {
      return (
        product.category.toLowerCase().includes(catLower) ||
        product.subCategory?.toLowerCase().includes(catLower)
      );
    });
  }, [selectedCategory]);

  return (
    <div className="py-12 bg-brand-gray-bg min-h-screen">
      <Container size="xl">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="blue" className="mb-3">
            B2B Trade Catalog
          </Badge>
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
            Appliance Sourcing Portfolio
          </h1>
          <p className="font-subheading text-base text-brand-gray-muted mt-2 max-w-2xl">
            Explore container-optimized residential and commercial appliances ready for private label OEM/ODM branding, accredited certifications, and worldwide ocean delivery.
          </p>
        </div>

        {/* Category active filter indicator if routed from category */}
        {selectedCategory !== 'all' && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs text-brand-gray-text font-medium">Category:</span>
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-semibold capitalize">
              {selectedCategory}
            </span>
            <Link to="/products" className="text-xs text-slate-500 hover:text-brand-blue underline ml-2">
              View all products
            </Link>
          </div>
        )}

        {/* Results Count & Notice */}
        <div className="flex items-center justify-between text-xs text-brand-gray-muted mb-6">
          <span>
            Showing <strong className="text-brand-blue-navy">{filteredProducts.length}</strong> appliances ready for volume container dispatch
          </span>
          <span className="hidden sm:inline">All models tested under AQL II inspection protocols</span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-brand-gray-border">
            <Box className="w-12 h-12 text-brand-gray-muted mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-brand-blue-navy">No appliances match your criteria</h3>
            <p className="text-xs text-brand-gray-muted mt-1 max-w-sm mx-auto">
              We frequently source custom models not listed in our public catalog. Contact our trade desk with your specific requirement.
            </p>
            <Link to="/products">
              <Button
                variant="primary"
                size="sm"
                className="mt-6"
              >
                View All Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/products/${prod.id}`}
                    className="group rounded-3xl bg-white border border-brand-gray-border/80 shadow-card hover:shadow-card-hover hover:border-brand-blue/30 transition-all flex flex-col overflow-hidden h-full"
                  >
                    {/* Image Area */}
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
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

                      {/* Bottom overlay: Category & MOQ */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                          {prod.subCategory || prod.category}
                        </span>
                        <span className="text-[11px] text-slate-200 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-lg">
                          {prod.moq}
                        </span>
                      </div>
                    </div>

                    {/* Card Footer: Clean Product Identity only */}
                    <div className="p-5 flex items-center justify-between gap-3 mt-auto">
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </div>
  );
};
