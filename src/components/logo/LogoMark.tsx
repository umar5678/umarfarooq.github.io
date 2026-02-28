// components/logo/LogoMark.tsx
'use client';

import { cn } from '@/lib/utils';

interface LogoMarkProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export function LogoMark({ size = 32, animate = true, className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="UF"
      className={cn('select-none', className)}
    >
      {animate && (
        <style>{`
          @keyframes markDraw {
            from { stroke-dashoffset: 120; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes markStem {
            from { stroke-dashoffset: 28; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes markMid {
            from { stroke-dashoffset: 14; }
            to   { stroke-dashoffset: 0; }
          }
          .mark-main {
            stroke-dasharray: 120;
            stroke-dashoffset: 120;
            animation: markDraw 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          .mark-stem {
            stroke-dasharray: 28;
            stroke-dashoffset: 28;
            animation: markStem 0.4s ease-out 0.8s forwards;
          }
          .mark-mid {
            stroke-dasharray: 14;
            stroke-dashoffset: 14;
            animation: markMid 0.3s ease-out 1.0s forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .mark-main, .mark-stem, .mark-mid {
              stroke-dashoffset: 0 !important;
              animation: none !important;
            }
          }
        `}</style>
      )}

      {/* U → bridge → F top */}
      <path
        className={animate ? 'mark-main' : undefined}
        d="
          M 6 10
          L 6 26
          Q 6 36 14 36
          Q 22 36 22 26
          L 22 10
          L 42 10
        "
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* F stem */}
      <line
        className={animate ? 'mark-stem' : undefined}
        x1="30" y1="10" x2="30" y2="36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* F mid bar */}
      <line
        className={animate ? 'mark-mid' : undefined}
        x1="30" y1="22" x2="40" y2="22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}