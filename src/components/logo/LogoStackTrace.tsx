// components/logo/LogoStackTrace.tsx
'use client';

// Each line: [x-start, width] — the pattern of lines forms UF silhouette
const LINES: [number, number][] = [
  [0, 6],    // ██████
  [0, 2],    // ██
  [0, 2],    // ██        (U left stroke)
  [0, 6],    // ██████    (U bottom)
  [0, 0],    // (spacer)
  [0, 10],   // ██████████
  [0, 6],    // ██████    (F top + mid)
  [0, 2],    // ██        (F stem)
];

// Right side lines for U
const LINES_RIGHT: [number, number][] = [
  [8, 2],
  [8, 2],
  [8, 2],
  [0, 0],    // connects via bottom
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

export function LogoStackTrace({ size = 40 }: { size?: number }) {
  const lineHeight = 3;
  const gap = 2.5;
  const step = lineHeight + gap;

  return (
    <svg
      viewBox="0 0 56 48"
      width={size * 1.4}
      height={size * 1.2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq"
    >
      <style>{`
        @keyframes slideLine {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        .trace-line {
          transform-origin: left center;
          animation: slideLine 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* U shape */}
      <g>
        {/* Left vertical of U */}
        <rect className="trace-line" x="0" y="0" width="3" height="24" rx="1" fill="currentColor" style={{ animationDelay: '0ms' }} />
        {/* Right vertical of U */}
        <rect className="trace-line" x="18" y="0" width="3" height="24" rx="1" fill="currentColor" style={{ animationDelay: '100ms' }} />
        {/* Bottom curve of U */}
        <path className="trace-line" d="M0 22 Q0 30 10.5 30 Q21 30 21 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" style={{ animationDelay: '200ms' }} />
      </g>

      {/* F shape */}
      <g>
        {/* Vertical stem */}
        <rect className="trace-line" x="30" y="0" width="3" height="30" rx="1" fill="currentColor" style={{ animationDelay: '350ms' }} />
        {/* Top horizontal */}
        <rect className="trace-line" x="30" y="0" width="22" height="3" rx="1" fill="currentColor" style={{ animationDelay: '500ms' }} />
        {/* Middle horizontal */}
        <rect className="trace-line" x="30" y="13" width="16" height="3" rx="1" fill="currentColor" style={{ animationDelay: '650ms' }} />
      </g>

      {/* Subtle accent line — like a prompt */}
      <rect
        className="trace-line"
        x="0"
        y="40"
        width="52"
        height="0.5"
        fill="currentColor"
        opacity="0.15"
        style={{ animationDelay: '800ms' }}
      />
      {/* Cursor block */}
      <rect
        x="0"
        y="43"
        width="6"
        height="2"
        rx="0.5"
        fill="currentColor"
        opacity="0.3"
      >
        <animate attributeName="opacity" values="0.3;0;0.3" dur="1.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}