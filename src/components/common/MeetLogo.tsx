import React from 'react';

export interface MeetLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark'; // 'light' for light backgrounds, 'dark' for dark navy/footer
  showWordmark?: boolean;
  className?: string;
}

export const MeetLogo: React.FC<MeetLogoProps> = ({
  size = 'md',
  variant = 'light',
  showWordmark = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
  };

  const textStyles = {
    sm: { title: 'text-lg', subtitle: 'text-[9px] tracking-[0.24em]' },
    md: { title: 'text-2xl', subtitle: 'text-[11px] tracking-[0.28em]' },
    lg: { title: 'text-3xl', subtitle: 'text-[13px] tracking-[0.32em]' },
  };

  const { width, height } = iconDimensions[size];
  const { title, subtitle } = textStyles[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem based on official "MA" circular orbit */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Upper Green Orbital Swirl */}
        <path
          d="M26 62 C26 38, 44 20, 68 20 C92 20, 102 36, 100 48 C98 58, 86 52, 84 45 C82 34, 74 29, 64 29 C46 29, 36 43, 36 60 C36 66, 38 72, 42 76 C37 77, 28 72, 26 62 Z"
          fill="url(#greenGrad)"
        />

        {/* Lower Blue Orbital Swirl */}
        <path
          d="M94 58 C94 82, 76 100, 52 100 C28 100, 18 84, 20 72 C22 62, 34 68, 36 75 C38 86, 46 91, 56 91 C74 91, 84 77, 84 60 C84 54, 82 48, 78 44 C83 43, 92 48, 94 58 Z"
          fill="url(#blueGrad)"
        />

        {/* Inner "M" in Vibrant Blue */}
        <path
          d="M32 72 L32 46 C32 43, 35 41, 38 43 L48 57 L58 43 C61 41, 64 43, 64 46 L64 72 C64 74, 62 76, 60 76 C58 76, 56 74, 56 72 L56 54 L49 64 C48 65, 46 65, 45 64 L39 54 L39 72 C39 74, 37 76, 35 76 C33 76, 32 74, 32 72 Z"
          fill="#0068B4"
        />

        {/* Inner "A" in Vibrant Leaf Green */}
        <path
          d="M62 75 C61 74, 61 71, 63 69 L74 44 C75 42, 78 41, 80 44 L91 69 C93 71, 92 74, 90 75 C88 77, 85 76, 84 73 L81 66 L72 66 L69 73 C68 76, 64 77, 62 75 Z M74 61 L79 61 L76.5 53 L74 61 Z"
          fill="#74C043"
        />

        {/* Dynamic Gradients */}
        <defs>
          <linearGradient id="greenGrad" x1="20" y1="20" x2="105" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#89D34F" />
            <stop offset="0.6" stopColor="#74C043" />
            <stop offset="1" stopColor="#5EA932" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="100" y1="100" x2="15" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#005B9E" />
            <stop offset="0.6" stopColor="#0068B4" />
            <stop offset="1" stopColor="#0094DE" />
          </linearGradient>
        </defs>
      </svg>

      {/* Meet Appliances Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span
              className={`font-heading font-semibold ${title} tracking-tight ${
                variant === 'dark' ? 'text-white' : 'text-[#0068B4]'
              }`}
            >
              Meet
            </span>
          </div>
          <span
            className={`font-heading font-bold uppercase ${subtitle} ${
              variant === 'dark' ? 'text-slate-300' : 'text-[#5A6572]'
            } mt-0.5`}
          >
            Appliances
          </span>
        </div>
      )}
    </div>
  );
};
