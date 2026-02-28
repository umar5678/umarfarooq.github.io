// components/logo/LogoNegativeGrid.tsx
'use client';

const GRID = [
  // Row 0-6, Col 0-8
  // 1 = filled, 0 = gap (forms U and F in negative space)
  [1, 0, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1],
];

export function LogoNegativeGrid({ size = 48 }: { size?: number }) {
  const cellSize = 5;
  const gap = 1.5;
  const step = cellSize + gap;

  return (
    <svg
      viewBox={`0 0 ${9 * step - gap} ${7 * step - gap}`}
      width={size * 1.8}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Umar Farooq"
    >
      <style>{`
        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .cell {
          transform-origin: center;
          animation: popIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {GRID.map((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect
              key={`${x}-${y}`}
              className="cell"
              x={x * step}
              y={y * step}
              width={cellSize}
              height={cellSize}
              rx={1}
              fill="currentColor"
              style={{ animationDelay: `${(y * 9 + x) * 25}ms` }}
            />
          ) : null
        )
      )}
    </svg>
  );
}