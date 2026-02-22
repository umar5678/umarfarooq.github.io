import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '@/content/about';
import { Container, Section, ScrollFade } from '@/components/common';

export function AboutPreview() {
  return (
    <Section id="about">
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            About
          </p>

          <blockquote className="mt-6 border-l-2 border-foreground/20 pl-6 text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
            {aboutContent.headline}
          </blockquote>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="mt-8 space-y-4">
            {aboutContent.introduction.slice(0, 2).map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
          >
            More about me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollFade>
      </Container>
    </Section>
  );
}