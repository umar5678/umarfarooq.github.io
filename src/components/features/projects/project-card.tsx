import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechTag } from '@/components/common';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full transition-colors hover:border-foreground/20">
        <CardContent className="flex h-full flex-col p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </p>

          <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
            {project.techStack.length > 4 && (
              <TechTag name={`+${project.techStack.length - 4}`} />
            )}
          </div>

          <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}