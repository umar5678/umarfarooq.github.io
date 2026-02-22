// components/sections/Hero.tsx
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/common';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-b border-border/40">
      {/* Subtle background glow — static, no animation */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-10 pb-20  md:pb-32 md:pt-16">
        {/* ── Top bar: status + socials ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {siteConfig.status.available && (
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.status.message}
            </div>
          )}
          <div className="hidden sm:block">
            <SocialLinks />
          </div>
        </div>

        {/* ── Name — massive, left-aligned, depth via opacity ── */}
        <h1 className="mt-16 text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.85] tracking-tighter md:mt-24">
          {siteConfig.name.split(' ')[0]}
          <br />
          <span className="text-muted-foreground/20">
            {siteConfig.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        {/* ── Role with line accent ── */}
        <div className="mt-8 flex items-center gap-4">
          <span className="block h-px w-10 bg-foreground/30" />
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {siteConfig.title}
          </p>
        </div>

        {/* ── Two-column: description + CTAs ── */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground/80 md:text-xl">
            I don&rsquo;t start with code. I start with a conversation &mdash;
            understand the real problem, architect the right solution, then
            build and ship the entire system. Solo.
          </p>

          <div className="flex items-end">
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Let&rsquo;s Talk</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ── Footer bar: tech · location ── */}
        <div className="mt-20 flex flex-col gap-4 border-t border-border/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="block sm:hidden">
            <SocialLinks />
          </div>

          <p className="hidden font-mono text-[11px] tracking-widest text-muted-foreground/25 uppercase sm:block">
            React &middot; Node.js &middot; TypeScript &middot; Next.js
          </p>

          <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground/40">
            <MapPin className="h-3 w-3" />
            <span>Pakistan &middot; Building worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { siteConfig } from '@/content/site';
// import { Button } from '@/components/ui/button';
// import { SocialLinks } from '@/components/common';
// import type { CSSProperties } from 'react';

// export function Hero() {
//   return (
//     <section className="hero-glow relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
//       <div className="mx-auto max-w-3xl px-6 py-24 text-center">
//         {/* Availability */}
//         {siteConfig.status.available && (
//           <div
//             className="hero-animate inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
//             style={{ '--delay': '0ms' } as CSSProperties}
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="pulse-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//             </span>
//             {siteConfig.status.message}
//           </div>
//         )}

//         {/* Role */}
//         <p
//           className="hero-animate mt-8 font-mono text-sm tracking-widest text-muted-foreground uppercase"
//           style={{ '--delay': '100ms' } as CSSProperties}
//         >
//           {siteConfig.title}
//         </p>

//         {/* Name */}
//         <h1
//           className="hero-animate mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
//           style={{ '--delay': '200ms' } as CSSProperties}
//         >
//           {siteConfig.name}
//         </h1>

//         {/* Tagline */}
//         <p
//           className="hero-animate mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl"
//           style={{ '--delay': '300ms' } as CSSProperties}
//         >
//           {siteConfig.tagline}
//         </p>

//         {/* Supporting — the human touch */}
//         <p
//           className="hero-animate mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground/80"
//           style={{ '--delay': '400ms' } as CSSProperties}
//         >
//           Not because I&rsquo;m smarter. Because I listen first, understand the
//           real problem, then architect and deliver a complete system — end to
//           end, alone.
//         </p>

//         {/* CTAs */}
//         <div
//           className="hero-animate mt-10 flex flex-wrap items-center justify-center gap-4"
//           style={{ '--delay': '500ms' } as CSSProperties}
//         >
//           <Button asChild size="lg">
//             <Link href="/projects">
//               See My Work
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//           <Button variant="outline" size="lg" asChild>
//             <Link href="/contact">Let&rsquo;s Talk</Link>
//           </Button>
//         </div>

//         {/* Social + Location */}
//         <div
//           className="hero-animate mt-10 flex flex-col items-center gap-4 opacity-0"
//           style={{ '--delay': '600ms' } as CSSProperties}
//         >
//           <SocialLinks />
//           <p className="font-mono text-xs tracking-wide text-muted-foreground/50">
//             Based in Pakistan · Building for the world
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }