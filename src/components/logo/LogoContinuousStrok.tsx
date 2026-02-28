// components/logo/LogoContinuousStroke.tsx
'use client';

export function LogoContinuousStroke({ size = 48 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 80 50"
      width={size * 1.6}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq"
    >
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 220; }
          to { stroke-dashoffset: 0; }
        }
        .stroke-path {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: draw 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>

      {/* Single continuous path: U flowing into F */}
      <path
        className="stroke-path"
        d="M 8 8
           L 8 33
           C 8 44 38 44 38 33
           L 38 8
           M 38 8
           L 48 8
           M 48 8     
           L 72 8
           M 48 26
           L 66 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}