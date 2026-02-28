// components/logo/LogoDeconstructed.tsx
'use client';

export function LogoDeconstructed({ size = 48 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 90 50"
      width={size * 1.8}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq"
    >
      <style>{`
        @keyframes fadeFragment {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fragment {
          opacity: 0;
          animation: fadeFragment 0.5s ease-out forwards;
        }
      `}</style>

      {/* U — only partial strokes, brain fills in the rest */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {/* U: top-left fragment */}
        <line className="fragment" x1="8" y1="8" x2="8" y2="22" style={{ animationDelay: '0ms' }} />

        {/* U: bottom curve fragment */}
        <path className="fragment" d="M8 28 Q8 40 22 40" style={{ animationDelay: '120ms' }} />

        {/* U: right side fragment (partial) */}
        <line className="fragment" x1="32" y1="8" x2="32" y2="18" style={{ animationDelay: '240ms' }} />

        {/* U: bottom-right curve hint */}
        <path className="fragment" d="M28 40 Q32 40 32 34" style={{ animationDelay: '360ms' }} />
      </g>

      {/* F — deconstructed */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {/* F: vertical stem (partial — gap in middle) */}
        <line className="fragment" x1="52" y1="8" x2="52" y2="20" style={{ animationDelay: '500ms' }} />
        <line className="fragment" x1="52" y1="28" x2="52" y2="42" style={{ animationDelay: '620ms' }} />

        {/* F: top bar (partial) */}
        <line className="fragment" x1="52" y1="8" x2="68" y2="8" style={{ animationDelay: '740ms' }} />
        <line className="fragment" x1="72" y1="8" x2="80" y2="8" style={{ animationDelay: '820ms' }} />

        {/* F: middle bar (partial) */}
        <line className="fragment" x1="54" y1="24" x2="70" y2="24" style={{ animationDelay: '940ms' }} />
      </g>

      {/* Tiny dot — the period in "umar.dev" feel */}
      <circle
        className="fragment"
        cx="86"
        cy="42"
        r="2"
        fill="currentColor"
        style={{ animationDelay: '1100ms' }}
      />
    </svg>
  );
}