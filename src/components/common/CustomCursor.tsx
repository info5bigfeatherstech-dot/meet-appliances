import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, select, textarea, [data-interactive="true"]');
        setIsHoveringInteractive(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-brand-blue/50"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 24 : 16),
          y: mousePosition.y - (isHoveringInteractive ? 24 : 16),
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          backgroundColor: isHoveringInteractive ? 'rgba(30, 94, 255, 0.08)' : 'transparent',
          borderColor: isHoveringInteractive ? '#1E5EFF' : 'rgba(30, 94, 255, 0.4)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-brand-blue"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
        }}
        style={{ width: 6, height: 6 }}
      />
    </>
  );
};
