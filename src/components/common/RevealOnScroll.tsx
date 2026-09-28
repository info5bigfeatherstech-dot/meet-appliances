import React from 'react';
import { motion, type Variants } from 'framer-motion';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  distance = 30,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance, opacity: 0 };
      case 'down': return { y: -distance, opacity: 0 };
      case 'left': return { x: distance, opacity: 0 };
      case 'right': return { x: -distance, opacity: 0 };
      case 'none': return { opacity: 0 };
      default: return { y: distance, opacity: 0 };
    }
  };

  const variants: Variants = {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
