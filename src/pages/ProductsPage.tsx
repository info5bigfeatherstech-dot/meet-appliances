import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Box, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTradeType, setSelectedTradeType] = useState<'all' | 'import' | 'export' | 'both'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category and search query state with URL if params exist
  React.useEffect(() => {
    const cat = searchParams.get('category');
    const q = searchParams.get('q') || searchParams.get('search');
    if (cat) {
      setSelectedCategory(cat);
    }
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'all' ||
        product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.subCategory?.toLowerCase().includes(selectedCategory.toLowerCase());

      // Trade type check
      const matchesTradeType =
        selectedTradeType === 'all' ||
        product.tradeType === selectedTradeType ||
        product.tradeType === 'both';

      // Search query check
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTradeType && matchesSearch;
    });
  }, [selectedCategory, selectedTradeType, searchQuery]);

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

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 border border-brand-gray-border/80 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-brand-gray-muted absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by appliance, model code, spec..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-gray-border text-sm text-brand-blue-navy placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-brand-gray-muted hover:text-brand-blue"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Trade Mode Toggle */}
            <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs font-semibold text-brand-gray-muted shrink-0 mr-1">
                Trade Direction:
              </span>
              {[
                { id: 'all', label: 'All Modes' },
                { id: 'export', label: 'Export Line' },
                { id: 'import', label: 'Import Sourcing' },
                { id: 'both', label: 'Dual-Flow' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedTradeType(m.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                    selectedTradeType === m.id
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-brand-gray-bg text-brand-gray-text hover:bg-slate-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-brand-gray-border/60">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-brand-blue-navy text-white shadow-sm'
                  : 'bg-brand-gray-bg text-brand-gray-text hover:bg-slate-200'
              }`}
            >
              All Categories ({PRODUCTS_DATA.length})
            </button>

            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-brand-gray-bg text-brand-gray-text hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

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
            <Button
              variant="primary"
              size="sm"
              className="mt-6"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTradeType('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
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
