// components/logo/Logo.tsx
'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  size?: number;
  showText?: boolean;
  animate?: boolean;
  className?: string;
}

export function Logo({
  size = 48,
  showText = true,
  animate = true,
  className,
}: LogoProps) {
  // Viewbox adjusts based on whether text is shown
  const vw = 82;
  const vh = showText ? 62 : 48;
  const aspect = vw / vh;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      width={size * aspect}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq — Developer"
      className={cn('select-none', className)}
    >
      {/* ── Animations ─────────────────────────── */}
      {animate && (
        <style>{`
          /* Main U path draws on */
          @keyframes drawMain {
            from { stroke-dashoffset: 160; }
            to   { stroke-dashoffset: 0; }
          }
          /* F stem draws down */
          @keyframes drawStem {
            from { stroke-dashoffset: 36; }
            to   { stroke-dashoffset: 0; }
          }
          /* F mid-bar draws right */
          @keyframes drawMid {
            from { stroke-dashoffset: 20; }
            to   { stroke-dashoffset: 0; }
          }
          /* Nodes pop in */
          @keyframes nodePop {
            0%   { r: 0; opacity: 0; }
            70%  { r: 3; opacity: 1; }
            100% { r: 2.2; opacity: 1; }
          }
          /* Period appears */
          @keyframes dotPop {
            0%   { r: 0; opacity: 0; }
            60%  { r: 3.5; }
            100% { r: 2.8; opacity: 1; }
          }
          /* Text fades up */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          /* Cursor blink */
          @keyframes blink {
            0%, 49%  { opacity: 0.6; }
            50%, 100% { opacity: 0; }
          }
          /* Traveling dot */
          @keyframes tracer {
            0%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { opacity: 0; }
          }

          .uf-main {
            stroke-dasharray: 160;
            stroke-dashoffset: 160;
            animation: drawMain 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          .uf-stem {
            stroke-dasharray: 36;
            stroke-dashoffset: 36;
            animation: drawStem 0.5s cubic-bezier(0.33, 1, 0.68, 1) 0.9s forwards;
          }
          .uf-mid {
            stroke-dasharray: 20;
            stroke-dashoffset: 20;
            animation: drawMid 0.4s cubic-bezier(0.33, 1, 0.68, 1) 1.2s forwards;
          }
          .uf-node {
            r: 0;
            opacity: 0;
            animation: nodePop 0.35s ease-out forwards;
          }
          .uf-dot {
            r: 0;
            opacity: 0;
            animation: dotPop 0.4s ease-out 1.6s forwards;
          }
          .uf-text {
            opacity: 0;
            animation: fadeUp 0.6s ease-out 1.8s forwards;
          }
          .uf-cursor {
            animation: blink 1s step-end 2.2s infinite;
            opacity: 0;
          }
          .uf-tracer {
            opacity: 0;
            animation: tracer 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .uf-main, .uf-stem, .uf-mid {
              stroke-dashoffset: 0 !important;
              animation: none !important;
            }
            .uf-node { r: 2.2 !important; opacity: 1 !important; animation: none !important; }
            .uf-dot  { r: 2.8 !important; opacity: 1 !important; animation: none !important; }
            .uf-text { opacity: 1 !important; animation: none !important; }
            .uf-cursor, .uf-tracer { display: none; }
          }
        `}</style>
      )}

      {/* ── Letter Strokes ─────────────────────── */}

      {/* Main path: U left → bottom curve → right → bridge → F top bar */}
      <path
        className={animate ? 'uf-main' : undefined}
        d="
          M 10 8
          L 10 28
          Q 10 42 24 42
          Q 38 42 38 28
          L 38 8
          L 70 8
        "
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* F stem: drops from top bar */}
      <line
        className={animate ? 'uf-stem' : undefined}
        x1="48"
        y1="8"
        x2="48"
        y2="42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* F middle bar */}
      <line
        className={animate ? 'uf-mid' : undefined}
        x1="48"
        y1="24"
        x2="66"
        y2="24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* ── Traveling Dot (traces main path) ──── */}
      {animate && (
        <circle r="2" fill="currentColor" className="uf-tracer">
          <animateMotion
            dur="1.4s"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.65 0 0.35 1"
          >
            <mpath href="#tracerPath" />
          </animateMotion>
        </circle>
      )}

      {/* Hidden path for the tracer to follow */}
      <path
        id="tracerPath"
        d="
          M 10 8
          L 10 28
          Q 10 42 24 42
          Q 38 42 38 28
          L 38 8
          L 70 8
        "
        fill="none"
        stroke="none"
      />

      {/* ── Junction Nodes ─────────────────────── */}

      {/* Node: U top-left (start) */}
      <circle
        className={animate ? 'uf-node' : undefined}
        cx="10"
        cy="8"
        r={animate ? undefined : 2.2}
        fill="currentColor"
        style={animate ? { animationDelay: '0.1s' } : undefined}
      />

      {/* Node: U top-right / bridge start */}
      <circle
        className={animate ? 'uf-node' : undefined}
        cx="38"
        cy="8"
        r={animate ? undefined : 2.2}
        fill="currentColor"
        style={animate ? { animationDelay: '1.2s' } : undefined}
      />

      {/* Node: F stem + top bar intersection */}
      <circle
        className={animate ? 'uf-node' : undefined}
        cx="48"
        cy="8"
        r={animate ? undefined : 2.2}
        fill="currentColor"
        style={animate ? { animationDelay: '1.0s' } : undefined}
      />

      {/* Node: F stem + mid bar intersection */}
      <circle
        className={animate ? 'uf-node' : undefined}
        cx="48"
        cy="24"
        r={animate ? undefined : 2.2}
        fill="currentColor"
        style={animate ? { animationDelay: '1.3s' } : undefined}
      />

      {/* ── Period ─────────────────────────────── */}
      <circle
        className={animate ? 'uf-dot' : undefined}
        cx="76"
        cy="42"
        r={animate ? undefined : 2.8}
        fill="currentColor"
      />

      {/* ── Blinking Cursor ────────────────────── */}
      {animate && (
        <rect
          className="uf-cursor"
          x="74"
          y="5"
          width="1.5"
          height="10"
          rx="0.75"
          fill="currentColor"
        />
      )}

      {/* ── Name Text ──────────────────────────── */}
      {showText && (
        <text
          className={animate ? 'uf-text' : undefined}
          x="41"
          y="56"
          textAnchor="middle"
          fontSize="6.5"
          fontFamily="'JetBrains Mono', 'SF Mono', 'Fira Code', monospace"
          letterSpacing="3.5"
          fill="currentColor"
          opacity={animate ? undefined : 0.5}
        >
          UMAR FAROOQ
        </text>
      )}
    </svg>
  );
}


// // components/Logo.tsx — Use as a React component
// export function Logo({ size = 40, animated = true }: { size?: number; animated?: boolean }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 200 60"
//       width={size * 5}
//       height={size * 1.5}
//       fill="none"
//       role="img"
//       aria-label="Umar Farooq - Developer Logo"
//     >
//       <style>{`
//         @keyframes slideLeft {
//           from { transform: translateX(10px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slideRight {
//           from { transform: translateX(-10px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes fadeUp {
//           from { transform: translateY(8px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .bracket-l { animation: slideLeft 0.6s ease-out forwards; }
//         .bracket-r { animation: slideRight 0.6s ease-out 0.2s forwards; opacity: 0; }
//         .name-text { animation: fadeUp 0.5s ease-out 0.4s forwards; opacity: 0; }
//         .role-text { animation: fadeUp 0.5s ease-out 0.6s forwards; opacity: 0; }
//         .accent-line { animation: fadeUp 0.3s ease-out 0.8s forwards; opacity: 0; }
//         .mono { font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace; }
//         .sans { font-family: 'Inter', system-ui, sans-serif; }
//       `}</style>

//       {/* Left bracket { */}
//       <text x="8" y="38" className="mono bracket-l" fontSize="36" fontWeight="300" fill="#7c3aed">
//         {'{ '}
//       </text>

//       {/* Name */}
//       <text x="42" y="28" className="sans name-text" fontSize="18" fontWeight="700" fill="currentColor">
//         UF
//       </text>

//       {/* Role subtitle */}
//       <text x="42" y="44" className="mono role-text" fontSize="10" fill="#64748b">
//         developer
//       </text>

//       {/* Right bracket } */}
//       <text x="120" y="38" className="mono bracket-r" fontSize="36" fontWeight="300" fill="#22d3ee">
//         {' }'}
//       </text>

//       {/* Accent underline */}
//       <rect className="accent-line" x="42" y="49" width="30" height="2" rx="1" fill="#7c3aed" />
//     </svg>
//   );
// }