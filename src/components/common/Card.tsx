import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'glass' | 'white' | 'dark' | 'outline';
  interactive?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    glass: 'glass-card',
    white: 'bg-white border border-brand-gray-border shadow-card',
    dark: 'glass-card-dark text-white',
    outline: 'bg-transparent border border-brand-gray-border',
  };

  return (
    <motion.div
      whileHover={interactive ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variantStyles[variant],
        interactive && 'hover:shadow-card-hover hover:border-brand-blue/30 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
