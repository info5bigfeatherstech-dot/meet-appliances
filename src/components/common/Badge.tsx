import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'gray' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles = {
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    green: 'bg-brand-green/20 text-[#0c7045] border-brand-green/40',
    gray: 'bg-gray-100 text-brand-gray-text border-brand-gray-border',
    dark: 'bg-white/10 text-white/90 border-white/20 backdrop-blur-md',
    outline: 'bg-transparent text-brand-blue-navy border-brand-blue/30',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium rounded-full',
    md: 'text-xs px-3 py-1 font-semibold rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border tracking-wide uppercase',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
