import React from 'react';

export const MeshBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(#1E5EFF 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Blob 1: Vibrant Deep Blue */}
      <div className="mesh-glow w-[550px] h-[550px] -top-32 -left-28 bg-[#1E5EFF]/20 animate-blob" />

      {/* Blob 2: Accent Light Green */}
      <div 
        className="mesh-glow w-[480px] h-[480px] top-40 right-[-10%] bg-[#7EE8B0]/25 animate-blob" 
        style={{ animationDelay: '3s' }}
      />

      {/* Blob 3: Deep Navy Glow */}
      <div 
        className="mesh-glow w-[600px] h-[600px] -bottom-40 left-1/3 bg-[#0B3AA8]/15 animate-blob" 
        style={{ animationDelay: '6s' }}
      />

      {/* Subtle linear overlay to soften transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-gray-bg/80" />
    </div>
  );
};
