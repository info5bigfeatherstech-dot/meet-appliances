import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/categories';
import { Container } from '../common/Container';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { Badge } from '../common/Badge';

export const FeaturedCategoriesSection: React.FC = () => {
  const categories = PRODUCT_CATEGORIES.slice(0, 6);

  return (
    <section className="py-24 bg-brand-gray-bg relative overflow-hidden">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <RevealOnScroll direction="up">
              <Badge variant="blue" className="mb-3">
                Appliance Portfolio
              </Badge>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-blue-navy tracking-tight">
                Featured Appliance Categories
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="font-subheading text-base text-brand-gray-muted mt-3">
                Pre-tested to international electrical standards (CE, CB, UL, SASO, NOM) with flexible container load optimization.
              </p>
            </RevealOnScroll>
          </div>

          {/* <RevealOnScroll direction="left" delay={0.25}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-deep group"
            >
              <span>View All 8 Categories</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll> */}
        </div>

        {/* Categories Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <RevealOnScroll key={cat.id} direction="up" delay={0.1 * idx}>
              <Link to={`/category/${cat.slug}`} className="block group">
                <div className="relative rounded-3xl overflow-hidden bg-white border border-brand-gray-border/80 shadow-card group-hover:shadow-card-hover group-hover:border-brand-blue/30 transition-all duration-500">
                  
                  {/* Category Image with Zoom & Dark Gradient */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-navy via-brand-blue-navy/40 to-transparent" />
                    
                    {/* Item count tag */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                        {cat.itemCount}+ Models Available
                      </span>
                    </div>

                    {/* Category Title on Image */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="font-heading font-bold text-2xl text-white group-hover:text-brand-green transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs text-brand-gray-text/90 leading-relaxed mb-4">
                      {cat.description}
                    </p>



                    <div className="flex items-center justify-between pt-2 text-xs font-bold text-brand-blue group-hover:text-brand-blue-deep">
                      <span>Explore Sourcing Models</span>
                      <div className="w-7 h-7 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
};
