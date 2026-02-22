import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProject } from '@/content/projects';
import { Container, Section, ScrollFade, TechTag } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

export function FeaturedProject() {
  const project = getFeaturedProject();
  if (!project) return null;

  return (
    <Section id="featured-project">
      <Container>
        {/* Header */}
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Featured Case Study
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
        </ScrollFade>

        {/* Metrics */}
        <ScrollFade delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.metrics.map(({ value, label }) => (
              <Card key={label} className="h-full border-border/50 bg-background">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <p className="text-3xl font-bold tracking-tight">{value}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollFade>

        {/* Description + Tech + CTA */}
        <ScrollFade delay={200}>
          <div className="mt-12 space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              Read the full case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}