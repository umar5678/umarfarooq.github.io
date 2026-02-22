import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getStandardProjects } from '@/content/projects';
import { Container, Section, ScrollFade } from '@/components/common';
import { ProjectCard } from '@/components/features/projects';

export function ProjectsPreview() {
  const projects = getStandardProjects();
  if (projects.length === 0) return null;

  return (
    <Section id="projects">
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Other Projects
          </h2>
        </ScrollFade>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollFade key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={projects.length * 100}>
          <div className="mt-10">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}