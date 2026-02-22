import { Badge } from '@/components/ui/badge';

export function TechTag({ name }: { name: string }) {
  return (
    <Badge variant="secondary" className="font-mono text-xs font-normal">
      {name}
    </Badge>
  );
}