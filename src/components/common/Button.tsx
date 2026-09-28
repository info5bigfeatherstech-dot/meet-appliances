import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  glow = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: cn(
      'bg-brand-blue text-white shadow-soft hover:bg-brand-blue-deep active:scale-[0.98]',
      glow && 'shadow-glow-blue hover:shadow-[0_0_40px_rgba(30,94,255,0.5)]'
    ),
    secondary: 'bg-white text-brand-blue-navy border border-brand-gray-border hover:border-brand-blue hover:text-brand-blue shadow-sm active:scale-[0.98]',
    accent: cn(
      'bg-brand-green text-brand-blue-navy font-semibold hover:bg-[#6bd69e] active:scale-[0.98]',
      glow && 'shadow-glow-green hover:shadow-[0_0_35px_rgba(126,232,176,0.6)]'
    ),
    outline: 'bg-transparent text-brand-blue-navy border border-brand-gray-border hover:border-brand-blue hover:text-brand-blue active:scale-[0.98]',
    ghost: 'bg-transparent text-brand-gray-text hover:bg-brand-blue-subtle hover:text-brand-blue',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
