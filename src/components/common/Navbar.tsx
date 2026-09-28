import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, Shield, PhoneCall, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { MeetLogo } from './MeetLogo';
import { ProductsMegaMenu, ALL_MEGA_MENU_CATEGORIES } from './ProductsMegaMenu';
import { COMPANY_INFO } from '../../data/company';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsProductsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsProductsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 280);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products', hasMegaMenu: true },
    { label: 'Services & Sourcing', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top micro bar for trade credentials */}
      <div className="hidden lg:block bg-brand-blue-navy text-xs text-slate-300 py-1.5 px-6 border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-green" />
              <span>International Appliance Sourcing & Container Freight</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-blue" />
              <span>Strict AQL II Pre-Shipment Inspection Guaranteed</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Trading Desk: {COMPANY_INFO.phone}</span>
            <span className="text-white/20">|</span>
            <span>{COMPANY_INFO.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-nav shadow-soft py-3'
            : 'bg-white/95 lg:bg-white/90 backdrop-blur-md py-4 border-b border-brand-gray-border/60'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official Meet Appliances Emblem */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <MeetLogo size="md" variant="light" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                        className={cn(
                          'px-3.5 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 cursor-pointer select-none',
                          isActive || isProductsMenuOpen
                            ? 'text-brand-blue font-semibold bg-brand-blue-subtle/50'
                            : 'text-brand-gray-text hover:text-brand-blue hover:bg-brand-blue-subtle/50'
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-300',
                            isProductsMenuOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                          )}
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'px-3.5 py-2 text-sm font-medium rounded-lg transition-all relative',
                      isActive
                        ? 'text-brand-blue font-semibold'
                        : 'text-brand-gray-text hover:text-brand-blue hover:bg-brand-blue-subtle/50'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link to="/contact">
                <Button variant="primary" size="sm" glow icon={<ArrowRight className="w-4 h-4" />}>
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-brand-blue-navy hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown Centered Across Viewport */}
        <AnimatePresence>
          {isProductsMenuOpen && (
            <div
              className="hidden md:flex absolute top-full left-0 right-0 pt-2 justify-center px-4 z-50 pointer-events-none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full max-w-5xl pointer-events-auto">
                <ProductsMegaMenu onClose={() => setIsProductsMenuOpen(false)} />
              </div>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-[65px] z-40 bg-white/95 backdrop-blur-xl border-b border-brand-gray-border shadow-xl px-4 sm:px-6 py-6 max-h-[calc(100dvh-70px)] overflow-y-auto pb-[calc(2rem+var(--sab,0px))]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                if (link.hasMegaMenu) {
                  return (
                    <div key={link.href} className="border-b border-brand-gray-border/60 pb-2">
                      <button
                        onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                          mobileProductsExpanded || isActive
                            ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                            : 'text-brand-gray-text hover:bg-gray-50'
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <span>{link.label}</span>
                          <span className="text-[10px] bg-brand-green/20 text-emerald-700 font-bold px-2 py-0.5 rounded-full">
                            Portfolio
                          </span>
                        </span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform duration-300',
                            mobileProductsExpanded && 'rotate-180 text-brand-blue'
                          )}
                        />
                      </button>

                      {/* Mobile Accordion for Products Categories */}
                      {mobileProductsExpanded && (
                        <div className="px-4 py-3 space-y-4 bg-brand-gray-bg/60 rounded-xl mt-1 text-xs font-mono">
                          {ALL_MEGA_MENU_CATEGORIES.map((cat) => (
                            <div key={cat.title} className="space-y-1.5">
                              <Link
                                to={`/products?category=${cat.categorySlug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-mono font-bold text-gray-900 block uppercase text-[11px] hover:text-brand-blue"
                              >
                                {cat.title}
                              </Link>
                              <div className="space-y-1">
                                {cat.items.map((item) => (
                                  <Link
                                    key={item.productId}
                                    to={`/products/${item.productId}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-2.5 py-1.5 bg-white rounded-lg border border-brand-gray-border text-slate-700 hover:text-brand-blue font-medium truncate"
                                  >
                                    • {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}

                          <div className="pt-2">
                            <Link
                              to="/products"
                              onClick={() => setMobileMenuOpen(false)}
                              className="inline-flex w-full items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-900 text-white font-mono font-bold text-xs uppercase"
                            >
                              [ ALL PRODUCTS → ]
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                        : 'text-brand-gray-text hover:bg-gray-50'
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand-blue"></span>}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-brand-gray-border flex flex-col gap-3">
                <Link to="/contact" className="w-full">
                  <Button variant="primary" size="md" className="w-full justify-center" glow icon={<ArrowRight className="w-4 h-4" />}>
                    Request Container Quote
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-brand-gray-muted pt-2">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Trade Desk: {COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
