import React, { useState } from 'react';
import {
  WORLD_LAND_PATH,
  CHINA_PATH,
  MAP_LENSES,
  COUNTRY_PINS,
  type MapLens,
  type MapPin,
} from '../../data/worldMapData';

export const GlobalTradeMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeLens, setActiveLens] = useState<string | null>(null);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}>
      {/* 1. Deep Oceanic Theme Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071526] via-[#091B33] to-[#050F1C] -z-20" />

      {/* Atmospheric radial brand glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      {/* 2. Main High-Precision World Map SVG (Cropped tightly to maximize continent scale) */}
      <svg
        viewBox="60 30 1880 815"
        className="w-full h-full object-contain max-h-[750px] lg:max-h-[840px] xl:max-h-[900px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Theme Land Gradient: Corporate Ice-Blue matching brand palette */}
          <linearGradient id="themeLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7ec8f8" />
            <stop offset="45%" stopColor="#6cbcf3" />
            <stop offset="85%" stopColor="#5aaee8" />
            <stop offset="100%" stopColor="#6dc0f5" />
          </linearGradient>

          {/* China Sourcing Hub Gradient: Brand Green highlight */}
          <linearGradient id="chinaSourcingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8de05a" />
            <stop offset="50%" stopColor="#74C043" />
            <stop offset="100%" stopColor="#5ca332" />
          </linearGradient>

          {/* Translucent Dark Glass Lens Gradient */}
          <radialGradient id="themeLensGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#071526" stopOpacity="0.38" />
            <stop offset="75%" stopColor="#091B33" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#040D17" stopOpacity="0.60" />
          </radialGradient>

          {/* Red Pin Drop Shadow */}
          <filter id="redPinGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#f43f5e" floodOpacity="0.9" />
          </filter>

          {/* Orange Pin Drop Shadow */}
          <filter id="orangePinGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f97316" floodOpacity="0.9" />
          </filter>

          {/* Brand Green Glow */}
          <filter id="greenPinGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#74C043" floodOpacity="0.95" />
          </filter>
        </defs>

        {/* 3. SOLID GEOGRAPHICALLY ACCURATE WORLD CONTINENTS */}
        <g id="world-continents">
          {/* Base Continents: Sharp, high-contrast theme color */}
          <path
            d={WORLD_LAND_PATH}
            fill="url(#themeLandGradient)"
            stroke="#bfe4fc"
            strokeWidth="0.7"
            strokeLinejoin="round"
            className="transition-colors duration-500"
          />

          {/* China Sourcing Core: Highlighted in Meet's Brand Green */}
          {CHINA_PATH && (
            <path
              d={CHINA_PATH}
              fill="url(#chinaSourcingGradient)"
              stroke="#a5f377"
              strokeWidth="1.2"
              strokeLinejoin="round"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-90"
            />
          )}
        </g>

        {/* 4. FIVE CIRCULAR TRANSLUCENT DARK LENSES (Matching the reference layout) */}
        <g id="trade-lenses">
          {MAP_LENSES.map((lens: MapLens) => {
            const isHovered = activeLens === lens.id;
            return (
              <g
                key={lens.id}
                className="cursor-pointer transition-transform duration-300"
                onMouseEnter={() => setActiveLens(lens.id)}
                onMouseLeave={() => setActiveLens(null)}
              >
                {/* Translucent glass circle body */}
                <circle
                  cx={lens.cx}
                  cy={lens.cy}
                  r={lens.r + (isHovered ? 6 : 0)}
                  fill="url(#themeLensGrad)"
                  stroke={isHovered ? '#74C043' : 'rgba(255, 255, 255, 0.28)'}
                  strokeWidth={isHovered ? 2 : 1.2}
                  className="transition-all duration-300"
                />

                {/* Subtle inner ring highlight on hover */}
                {isHovered && (
                  <circle
                    cx={lens.cx}
                    cy={lens.cy}
                    r={lens.r - 8}
                    fill="none"
                    stroke="rgba(116, 192, 67, 0.35)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* 5. LEADER LINES FOR PINS (Exact crisp elbow lines from pins to labels) */}
        <g stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {COUNTRY_PINS.filter((p) => p.leader && p.targetX && p.targetY).map((pin: MapPin, idx: number) => {
            if (pin.leader === 'left') {
              // Horizontal elbow leading to left label
              const midX = pin.x - 35;
              return (
                <polyline
                  key={idx}
                  points={`${pin.x},${pin.y} ${midX},${pin.targetY} ${pin.targetX},${pin.targetY}`}
                  fill="none"
                />
              );
            }
            if (pin.leader === 'right') {
              // Diagonal elbow leading out to the right label column
              const midX = pin.x + 50;
              return (
                <polyline
                  key={idx}
                  points={`${pin.x},${pin.y} ${midX},${pin.targetY} ${pin.targetX},${pin.targetY}`}
                  fill="none"
                />
              );
            }
            if (pin.leader === 'top') {
              // Vertical upward line
              return (
                <line
                  key={idx}
                  x1={pin.x}
                  y1={pin.y}
                  x2={pin.targetX}
                  y2={pin.targetY}
                />
              );
            }
            return null;
          })}
        </g>

        {/* 6. COUNTRY PINPOINTS (Red & Orange Dots with white halos) */}
        <g id="pins">
          {COUNTRY_PINS.map((pin: MapPin, idx: number) => {
            if (pin.type === 'label-only') return null;

            const isRed = pin.type === 'red';
            const dotColor = isRed ? '#f43f5e' : '#f97316';
            const filterId = isRed ? 'url(#redPinGlow)' : 'url(#orangePinGlow)';
            const isHovered = hoveredPin === pin.name;

            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPin(pin.name)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                {/* Glow ring */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isRed ? 8 : 6.8}
                  fill={dotColor}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  filter={filterId}
                  className="transition-transform duration-200"
                />
                {/* Inner white highlight */}
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={isRed ? 3 : 2.5}
                  fill="#FFFFFF"
                />

                {/* Animated pulse on hover */}
                {isHovered && (
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r={18}
                    fill="none"
                    stroke={dotColor}
                    strokeWidth="1.8"
                    className="animate-ping opacity-75"
                  />
                )}
              </g>
            );
          })}

          {/* SOURCING HUB BEACON: China Production Base (Brand Green) */}
          <g className="cursor-pointer">
            {/* Animated sonar ripple */}
            <circle
              cx={1517}
              cy={275}
              r={24}
              fill="none"
              stroke="#74C043"
              strokeWidth="1.8"
              className="animate-ping opacity-60"
            />
            {/* Hub base halo */}
            <circle
              cx={1517}
              cy={275}
              r={9.5}
              fill="#74C043"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              filter="url(#greenPinGlow)"
            />
            <circle cx={1517} cy={275} r={4} fill="#091B33" />
          </g>
        </g>

        {/* 7. CRISP TYPOGRAPHY LABELS (Montserrat/Sans-Serif, High Legibility) */}
        <g fontFamily="'Montserrat', 'Open Sans', sans-serif" fontWeight="600">
          {COUNTRY_PINS.map((pin: MapPin, idx: number) => {
            let labelX = pin.labelX || pin.x;
            let labelY = pin.labelY || pin.y;
            let anchor = pin.anchor || 'start';
            let fontSize = pin.fontSize || 16;
            let fill = '#FFFFFF';

            if (pin.leader === 'left' && pin.targetX && pin.targetY) {
              labelX = pin.targetX - 8;
              labelY = pin.targetY + 5;
              anchor = 'end';
            } else if (pin.leader === 'right' && pin.targetX && pin.targetY) {
              labelX = pin.targetX + 10;
              labelY = pin.targetY + 5;
              anchor = 'start';
            } else if (pin.leader === 'top' && pin.targetX && pin.targetY) {
              labelX = pin.targetX;
              labelY = pin.targetY - 8;
              anchor = 'middle';
              fill = '#e0f2fe';
            }

            const isHovered = hoveredPin === pin.name;

            return (
              <text
                key={idx}
                x={labelX}
                y={labelY}
                textAnchor={anchor}
                fill={isHovered ? '#74C043' : fill}
                fontSize={fontSize}
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] select-none pointer-events-none transition-colors duration-200"
              >
                {pin.name}
              </text>
            );
          })}
        </g>
      </svg>

    </div>
  );
};
