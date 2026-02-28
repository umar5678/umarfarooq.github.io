// components/logo/LogoCodeBlock.tsx
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function LogoCodeBlock({ size = 48 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      viewBox="0 0 120 56"
      width={size * 2.4}
      height={size * 1.12}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq"
      className="cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes typeChar {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .char {
          font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          opacity: 0;
          animation: typeChar 0.05s ease forwards;
        }
        .line-num {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
        }
        .cursor-block {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      {/* Subtle border */}
      <rect
        x="0.5"
        y="0.5"
        width="119"
        height="55"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.1"
      />

      {/* Line numbers */}
      <text className="line-num" x="10" y="20" fontSize="9" fill="currentColor" opacity="0.2">1</text>
      <text className="line-num" x="10" y="34" fontSize="9" fill="currentColor" opacity="0.2">2</text>
      <text className="line-num" x="10" y="48" fontSize="9" fill="currentColor" opacity="0.2">3</text>

      {/* Separator line */}
      <line x1="22" y1="6" x2="22" y2="50" stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.5" />

      {/* Line 1: const */}
      <text y="20" fontSize="10" fill="currentColor">
        <tspan className="char" x="28" opacity="0.4" style={{ animationDelay: '0ms' }}>const</tspan>
        <tspan className="char" x="60" fontWeight="700" style={{ animationDelay: '80ms' }}>UF</tspan>
        <tspan className="char" x="78" opacity="0.4" style={{ animationDelay: '160ms' }}>=</tspan>
      </text>

      {/* Line 2: role */}
      <text y="34" fontSize="10" fill="currentColor">
        <tspan className="char" x="34" opacity="0.3" style={{ animationDelay: '240ms' }}>{'{'}</tspan>
        <tspan className="char" x="42" opacity="0.5" style={{ animationDelay: '320ms' }}>dev</tspan>
        <tspan className="char" x="62" opacity="0.3" style={{ animationDelay: '400ms' }}>:</tspan>
        <tspan className="char" x="70" fontWeight="600" style={{ animationDelay: '480ms' }}>
          {hovered ? '"building"' : 'true'}
        </tspan>
        <tspan className="char" x={hovered ? 115 : 92} opacity="0.3" style={{ animationDelay: '500ms' }}>{'}'}</tspan>
      </text>

      {/* Line 3: empty with cursor */}
      <rect
        className="cursor-block"
        x="28"
        y="41"
        width="5"
        height="10"
        rx="0.5"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}