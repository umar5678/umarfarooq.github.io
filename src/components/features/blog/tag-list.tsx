import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TagListProps {
  tags: string[];
  activeTag?: string;
}

export function TagList({ tags, activeTag }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog">
        <Badge
          variant={!activeTag ? 'default' : 'secondary'}
          className={cn(
            'cursor-pointer font-mono text-xs font-normal transition-colors',
            !activeTag && 'pointer-events-none'
          )}
        >
          All
        </Badge>
      </Link>

      {tags.map((tag) => (
        <Link key={tag} href={`/blog/tag/${tag}`}>
          <Badge
            variant={activeTag === tag ? 'default' : 'secondary'}
            className={cn(
              'cursor-pointer font-mono text-xs font-normal transition-colors',
              activeTag === tag && 'pointer-events-none'
            )}
          >
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
}