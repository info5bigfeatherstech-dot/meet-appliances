import React from 'react';
import { cn } from '../../lib/utils';

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds
  pauseOnHover?: boolean;
  className?: string;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 30,
  pauseOnHover = true,
  className = '',
  reverse = false,
}) => {
  return (
    <div
      className={cn(
        'group flex overflow-hidden select-none gap-6 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]',
        className
      )}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-6',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-6',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
