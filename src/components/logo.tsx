// components/logo.tsx
'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'wordmark' | 'full';
  animated?: boolean;
  tagline?: string;
  className?: string;
}

export function Logo({
  size = 40,
  variant = 'mark',
  animated = true,
  tagline = 'Software Developer',
  className,
}: LogoProps) {
  const svgWidth = Math.round(size * (80 / 54));

  return (
    <div
      className={cn(
        'inline-flex items-center select-none',
        variant !== 'mark' && 'gap-3',
        className,
      )}
    >
      <svg
        viewBox="0 0 80 54"
        width={svgWidth}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="UF monogram"
        className="shrink-0"
      >
        {animated && (
          <style>{`
            @keyframes uf-draw { to { stroke-dashoffset: 0 } }
            @keyframes uf-fade { to { opacity: 1 } }

            .uf-body {
              stroke-dasharray: 210;
              stroke-dashoffset: 210;
              animation: uf-draw 1.6s cubic-bezier(.65,0,.35,1) .1s forwards;
            }
            .uf-bar {
              stroke-dasharray: 18;
              stroke-dashoffset: 18;
              animation: uf-draw .35s cubic-bezier(.65,0,.35,1) 1.15s forwards;
            }
            .uf-dot-corner {
              opacity: 0;
              animation: uf-fade .3s ease 1.0s forwards;
            }
            .uf-dot-sig {
              opacity: 0;
              animation: uf-fade .35s ease 1.5s forwards;
            }

            @media (prefers-reduced-motion: reduce) {
              .uf-body, .uf-bar { animation: none; stroke-dashoffset: 0 }
              .uf-dot-corner, .uf-dot-sig { animation: none; opacity: 1 }
            }
          `}</style>
        )}

        {/*
          Continuous stroke: U → rounded corner → F top bar
          ───────────────────────────────────────────────────
          V 30          left side of U going down
          A 16 16 0 0 0 smooth semicircular U bottom
          V 14          right side going up, stop early
          Q 42 8 48 8   smooth rounded corner into F top bar
          H 66          F top bar extends right
        */}
        <path
          className={animated ? 'uf-body' : undefined}
          d="M 10 8 V 30 A 16 16 0 0 0 42 30 V 14 Q 42 8 48 8 H 66"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Accent dot — nestled inside the rounded corner pocket */}
       

        {/* F crossbar — separate from vertical with visible gap */}
        <path
          className={animated ? 'uf-bar' : undefined}
          d="M 49 25 H 63"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Signature dot — bottom-right anchor */}
        <circle
          className={animated ? 'uf-dot-sig' : undefined}
          cx="69"
          cy="46"
          r="2.5"
          fill="currentColor"
        />
      </svg>

      {/* ─── Typography ─── */}
      {variant !== 'mark' && (
        <div
          className="flex flex-col justify-center"
          style={{ gap: Math.max(size * 0.06, 2) }}
        >
          <span
            className="font-semibold tracking-[-0.02em] leading-none text-foreground"
            style={{ fontSize: Math.max(size * 0.4, 14) }}
          >
            Umar Farooq
          </span>

          {variant === 'full' && (
            <span
              className="font-normal tracking-[0.14em] uppercase leading-none text-muted-foreground"
              style={{ fontSize: Math.max(size * 0.2, 9) }}
            >
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// // components/logo.tsx
// 'use client';

// import { cn } from '@/lib/utils';

// interface LogoProps {
//   size?: number;
//   variant?: 'mark' | 'wordmark' | 'full';
//   animated?: boolean;
//   tagline?: string;
//   className?: string;
// }

// export function Logo({
//   size = 40,
//   variant = 'mark',
//   animated = true,
//   tagline = 'Software Developer',
//   className,
// }: LogoProps) {
//   const svgWidth = Math.round(size * (80 / 54));

//   return (
//     <div
//       className={cn(
//         'inline-flex items-center select-none',
//         variant !== 'mark' && 'gap-3',
//         className,
//       )}
//     >
//       <svg
//         viewBox="0 0 80 54"
//         width={svgWidth}
//         height={size}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//         aria-label="UF monogram"
//         className="shrink-0"
//       >
//         {animated && (
//           <style>{`
//             @keyframes uf-draw  { to { stroke-dashoffset: 0 } }
//             @keyframes uf-fade  { to { opacity: 1 } }

//             .uf-body {
//               stroke-dasharray: 200;
//               stroke-dashoffset: 200;
//               animation: uf-draw 1.6s cubic-bezier(.65,0,.35,1) .1s forwards;
//             }
//             .uf-cross {
//               stroke-dasharray: 24;
//               stroke-dashoffset: 24;
//               animation: uf-draw .4s cubic-bezier(.65,0,.35,1) 1.1s forwards;
//             }
//             .uf-dot {
//               opacity: 0;
//               animation: uf-fade .35s ease 1.5s forwards;
//             }

//             @media (prefers-reduced-motion: reduce) {
//               .uf-body,
//               .uf-cross { animation: none; stroke-dashoffset: 0 }
//               .uf-dot   { animation: none; opacity: 1 }
//             }
//           `}</style>
//         )}

//         {/*
//           The fix: sweep-flag 0 instead of 1
//           ────────────────────────────────────
//           V 30     — left side of U goes DOWN
//           A 16 16 0 0 0  — arc curves DOWNWARD (sweep=0)
//           V 8      — right side goes back UP
//           H 66     — F top bar
//         */}
//         <path
//           className={animated ? 'uf-body' : undefined}
//           d="M 10 8 V 30 A 16 16 0 0 0 42 30 V 8 H 66"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />

//         {/* F crossbar */}
//         <path
//           className={animated ? 'uf-cross' : undefined}
//           d="M 42 25 H 60"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />

//         {/* Accent dot */}
//         <circle
//           className={animated ? 'uf-dot' : undefined}
//           cx="69"
//           cy="46"
//           r="2.5"
//           fill="currentColor"
//         />
//       </svg>

//       {variant !== 'mark' && (
//         <div
//           className="flex flex-col justify-center"
//           style={{ gap: Math.max(size * 0.06, 2) }}
//         >
//           <span
//             className="font-semibold tracking-[-0.02em] leading-none text-foreground"
//             style={{ fontSize: Math.max(size * 0.4, 14) }}
//           >
//             Umar Farooq
//           </span>

//           {variant === 'full' && (
//             <span
//               className="font-normal tracking-[0.14em] uppercase leading-none text-muted-foreground"
//               style={{ fontSize: Math.max(size * 0.2, 9) }}
//             >
//               {tagline}
//             </span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // components/logo.tsx
// 'use client';

// import { cn } from '@/lib/utils';

// interface LogoProps {
//   /** Height of the logo mark in pixels (min recommended: 24) */
//   size?: number;
//   /** mark = icon only · wordmark = icon + name · full = icon + name + tagline */
//   variant?: 'mark' | 'wordmark' | 'full';
//   /** Draw-in entrance animation */
//   animated?: boolean;
//   /** Tagline text for the 'full' variant */
//   tagline?: string;
//   className?: string;
// }

// export function Logo({
//   size = 40,
//   variant = 'mark',
//   animated = true,
//   tagline = 'Software Developer',
//   className,
// }: LogoProps) {
//   const svgWidth = Math.round(size * (80 / 54));

//   return (
//     <div
//       className={cn(
//         'inline-flex items-center select-none',
//         variant !== 'mark' && 'gap-3',
//         className,
//       )}
//     >
//       {/* ─── Mark ─── */}
//       <svg
//         viewBox="0 0 80 54"
//         width={svgWidth}
//         height={size}
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//         aria-label="UF monogram"
//         className="shrink-0"
//       >
//         {animated && (
//           <style>{`
//             @keyframes uf-draw{to{stroke-dashoffset:0}}
//             @keyframes uf-fade{to{opacity:1}}

//             .uf-body{
//               stroke-dasharray:180;
//               stroke-dashoffset:180;
//               animation:uf-draw 1.8s cubic-bezier(.65,0,.35,1) .15s forwards;
//             }
//             .uf-cross{
//               stroke-dasharray:24;
//               stroke-dashoffset:24;
//               animation:uf-draw .45s cubic-bezier(.65,0,.35,1) 1.25s forwards;
//             }
//             .uf-dot{
//               opacity:0;
//               animation:uf-fade .4s ease 1.7s forwards;
//             }

//             @media(prefers-reduced-motion:reduce){
//               .uf-body,.uf-cross{animation:none;stroke-dashoffset:0}
//               .uf-dot{animation:none;opacity:1}
//             }
//           `}</style>
//         )}

//         {/* continuous stroke: U → F top bar */}
//         <path
//           className={animated ? 'uf-body' : undefined}
//           d="M 10 8 L 10 35 Q 10 46 22 46 L 32 46 Q 44 46 44 35 L 44 8 L 66 8"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />

//         {/* F crossbar */}
//         <path
//           className={animated ? 'uf-cross' : undefined}
//           d="M 44 26 L 60 26"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />

//         {/* accent dot – period / signature detail */}
//         <circle
//           className={animated ? 'uf-dot' : undefined}
//           cx="69"
//           cy="46"
//           r="2.5"
//           fill="currentColor"
//         />
//       </svg>

//       {/* ─── Typography ─── */}
//       {variant !== 'mark' && (
//         <div
//           className="flex flex-col justify-center"
//           style={{ gap: Math.max(size * 0.08, 3) }}
//         >
//           <span
//             className="font-semibold tracking-[-0.025em] leading-none text-neutral-900 dark:text-neutral-100"
//             style={{ fontSize: Math.max(size * 0.38, 13) }}
//           >
//             Umar Farooq
//           </span>

//           {variant === 'full' && (
//             <span
//               className="font-normal tracking-[0.16em] uppercase leading-none text-neutral-400 dark:text-neutral-500"
//               style={{ fontSize: Math.max(size * 0.2, 9) }}
//             >
//               {tagline}
//             </span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }