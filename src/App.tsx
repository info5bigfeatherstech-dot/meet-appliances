import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useLenis } from './hooks/useLenis';

// Common Components
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Components & Pages
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminCategoriesPage } from './pages/admin/AdminCategoriesPage';
import { AdminProductsPage } from './pages/admin/AdminProductsPage';
import { AdminProductNewPage } from './pages/admin/AdminProductNewPage';
import { AdminProductEditPage } from './pages/admin/AdminProductEditPage';
import { AdminProductImportPage } from './pages/admin/AdminProductImportPage';
import { AdminFactoriesPage } from './pages/admin/AdminFactoriesPage';
import { AdminCustomersPage } from './pages/admin/AdminCustomersPage';
import { AdminShell } from './components/admin/layout/AdminShell';

// Scroll to top helper on route transition
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Animated Page Wrapper
const PageTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex-grow"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  // Initialize Lenis smooth scroll for storefront
  useLenis();

  // If on Admin route, isolate layout from storefront Navbar and Footer
  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminShell>
              <AdminDashboardPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <AdminShell>
              <AdminCategoriesPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminShell>
              <AdminProductsPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/products/new"
          element={
            <AdminShell>
              <AdminProductNewPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/products/:id/edit"
          element={
            <AdminShell>
              <AdminProductEditPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/products/import"
          element={
            <AdminShell>
              <AdminProductImportPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/factories"
          element={
            <AdminShell>
              <AdminFactoriesPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <AdminShell>
              <AdminCustomersPage />
            </AdminShell>
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminShell>
              <AdminDashboardPage />
            </AdminShell>
          }
        />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand-blue selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Route Views with AnimatePresence */}
      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransitionWrapper>

      {/* Comprehensive Multi-column Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
