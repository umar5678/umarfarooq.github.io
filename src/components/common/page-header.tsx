import { cn } from '@/lib/utils';

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ label, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {label && (
        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}