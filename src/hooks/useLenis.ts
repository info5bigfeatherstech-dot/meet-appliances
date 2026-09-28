import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    // Respect user's reduced motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    // Set smoothWheel to false to eliminate delayed wheel lag,
    // allowing native 60/120Hz compositor scrolling with 0 input latency
    const lenis = new Lenis({
      duration: 0.6,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: false, // Prevents rubber-banding/dragging delay
      touchMultiplier: 1.0,
    });

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }

    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);
}
