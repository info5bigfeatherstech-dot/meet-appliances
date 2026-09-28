import React from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl',
  ...props
}) => {
  const sizeMap = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizeMap[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  dark = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 overflow-hidden',
        dark ? 'bg-brand-blue-navy text-white' : 'bg-brand-gray-bg text-brand-gray-text',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
