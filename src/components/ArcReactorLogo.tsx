import React from 'react';

interface ArcReactorLogoProps {
  className?: string;
  size?: number;
  pulsing?: boolean;
}

export const ArcReactorLogo: React.FC<ArcReactorLogoProps> = ({
  className = '',
  size = 36,
  pulsing = true
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${pulsing ? 'animate-pulse-glow' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="drop-shadow-[0_0_8px_rgba(230,36,41,0.5)] transition-transform duration-300 hover:rotate-45"
      >
        <defs>
          <radialGradient id="arcGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="75%" stopColor="#e62429" />
            <stop offset="100%" stopColor="#800a0d" />
          </radialGradient>
        </defs>

        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" fill="#161b22" stroke="#e62429" strokeWidth="3.5" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#30363d" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Coil pins */}
        <g stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          <line x1="50" y1="12" x2="50" y2="24" />
          <line x1="50" y1="76" x2="50" y2="88" />
          <line x1="12" y1="50" x2="24" y2="50" />
          <line x1="76" y1="50" x2="88" y2="50" />
          <line x1="23" y1="23" x2="31" y2="31" />
          <line x1="69" y1="69" x2="77" y2="77" />
          <line x1="23" y1="77" x2="31" y2="69" />
          <line x1="69" y1="31" x2="77" y2="23" />
        </g>

        {/* Inner Ring */}
        <circle cx="50" cy="50" r="26" fill="#0b0e14" stroke="#f59e0b" strokeWidth="2" />

        {/* Glowing Center */}
        <circle cx="50" cy="50" r="17" fill="url(#arcGlow)" />

        {/* Central Triangle */}
        <polygon points="50,38 60,56 40,56" fill="#ffffff" opacity="0.95" />
        <circle cx="50" cy="50" r="3.5" fill="#e62429" />
      </svg>
    </div>
  );
};
