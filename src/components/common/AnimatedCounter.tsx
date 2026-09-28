import React, { useEffect, useState, useRef } from 'react';
import { formatNumberWithCommas } from '../../lib/utils';

export interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const startVal = 0;
          const endVal = value;

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(startVal + (endVal - startVal) * easeOutProgress);
            
            setDisplayValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setDisplayValue(endVal);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatNumberWithCommas(displayValue)}
      {suffix}
    </span>
  );
};
