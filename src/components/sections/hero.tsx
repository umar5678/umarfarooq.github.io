import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/components/common';
import type { CSSProperties } from 'react';

export function Hero() {
  return (
    <section className="hero-glow relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        {/* Availability */}
        {siteConfig.status.available && (
          <div
            className="hero-animate inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            style={{ '--delay': '0ms' } as CSSProperties}
          >
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.status.message}
          </div>
        )}

        {/* Role Label */}
        <p
          className="hero-animate mt-8 font-mono text-sm tracking-widest text-muted-foreground uppercase"
          style={{ '--delay': '100ms' } as CSSProperties}
        >
          {siteConfig.title}
        </p>

        {/* Name */}
        <h1
          className="hero-animate mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{ '--delay': '200ms' } as CSSProperties}
        >
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl"
          style={{ '--delay': '300ms' } as CSSProperties}
        >
          {siteConfig.tagline}
        </p>

        {/* Supporting Text */}
        <p
          className="hero-animate mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground/80"
          style={{ '--delay': '400ms' } as CSSProperties}
        >
          From first conversation to final deployment — I listen, architect, and
          deliver production-grade systems. End to end. Solo.
        </p>

        {/* CTAs */}
        <div
          className="hero-animate mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ '--delay': '500ms' } as CSSProperties}
        >
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Social */}
        <div
          className="hero-animate mt-10 flex justify-center"
          style={{ '--delay': '600ms' } as CSSProperties}
        >
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}