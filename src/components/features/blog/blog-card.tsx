import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogPostMeta } from '@/types';

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block py-8 first:pt-0 last:pb-0">
      {/* Date + Reading Time */}
      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
        <span className="text-border">·</span>
        <span>{post.readingTime}</span>
        <span className="text-border">·</span>
        <span>{post.wordCount} words</span>
      </div>

      {/* Title */}
      <h2 className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mt-2 leading-relaxed text-muted-foreground line-clamp-2">
        {post.description}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="font-mono text-xs font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Read Link */}
      <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        Read article
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}