import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPostMeta } from '@/types';

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">Related Posts</h3>

      <div className="mt-5 space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-start justify-between gap-4 rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
          >
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm tracking-tight transition-colors group-hover:text-foreground line-clamp-1">
                {post.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                {post.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-[10px] font-normal px-1.5 py-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}