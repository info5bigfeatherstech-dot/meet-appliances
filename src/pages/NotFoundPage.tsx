import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Globe, Search, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-brand-gray-bg min-h-[75vh] flex items-center">
      <Container size="md" className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6">
          <Globe className="w-10 h-10 animate-pulse" />
        </div>
        
        <span className="font-mono text-sm font-bold text-brand-blue tracking-widest uppercase">
          Error 404 • Trade Route Not Found
        </span>
        
        <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-brand-blue-navy mt-2 mb-4">
          Shipping Lane Unavailable
        </h1>

        <p className="text-sm text-brand-gray-muted max-w-md mx-auto leading-relaxed mb-8">
          The requested page or appliance catalog item may have been moved, renamed, or is currently undergoing seasonal catalog updates.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="md" glow icon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" size="md" icon={<Search className="w-4 h-4" />}>
              Browse Appliances
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
