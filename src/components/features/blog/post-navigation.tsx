import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/types';

interface PostNavigationProps {
  prev?: BlogPostMeta;
  next?: BlogPostMeta;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1">
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Older
            </div>
            <p className="mt-2 text-sm font-semibold tracking-tight transition-colors group-hover:text-foreground line-clamp-2">
              {prev.title}
            </p>
          </Link>
        )}
      </div>

      <div className="flex-1">
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex h-full flex-col items-end rounded-lg border border-border p-5 text-right transition-colors hover:border-foreground/20"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Newer
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-sm font-semibold tracking-tight transition-colors group-hover:text-foreground line-clamp-2">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}