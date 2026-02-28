// components/HexLogo.tsx
export function HexLogo({ size = 80 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 100 110"
      width={size}
      height={size * 1.1}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="UF Developer Logo"
    >
      <style>{`
        @keyframes hexDraw {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0) translateY(0); opacity: 0; }
          80% { transform: scale(1.1) translateY(0); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .hex-border {
          stroke-dasharray: 400;
          animation: hexDraw 1.5s ease-out forwards;
        }
        .inner-text {
          animation: popIn 0.5s ease-out 1s forwards;
          opacity: 0;
          transform-origin: center;
        }
      `}</style>

      {/* Hexagon shape */}
      <polygon
        className="hex-border"
        points="50,2 95,27 95,77 50,102 5,77 5,27"
        fill="#0f172a"
        stroke="url(#hexGrad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Initials */}
      <text
        className="inner-text"
        x="50"
        y="48"
        textAnchor="middle"
        fontSize="28"
        fontWeight="800"
        fontFamily="'Inter', system-ui, sans-serif"
        fill="white"
      >
        UF
      </text>

      {/* Tagline */}
      <text
        className="inner-text"
        x="50"
        y="66"
        textAnchor="middle"
        fontSize="8"
        fontFamily="'JetBrains Mono', monospace"
        fill="#94a3b8"
        letterSpacing="2"
        style={{ animationDelay: '1.3s' }}
      >
        {'<DEV/>'}
      </text>
    </svg>
  );
}