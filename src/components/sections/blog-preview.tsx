import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getRecentBlogPosts } from '@/lib/blog';
import { Container, Section, ScrollFade } from '@/components/common';
import { Separator } from '@/components/ui/separator';

export function BlogPreview() {
  const posts = getRecentBlogPosts(3);
  if (posts.length === 0) return null;

  return (
    <Section id="blog">
      <Container >
        <ScrollFade>
          <Separator className="mb-16" />

          <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Writing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Latest from the Blog
          </h2>
        </ScrollFade>

        <div className="mt-10 space-y-2">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-lg p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-semibold transition-colors group-hover:text-foreground">
                    {post.title}
                  </h3>
                  <span className="flex-shrink-0 font-mono text-xs text-muted-foreground">
                    {post.readingTime}
                  </span>
                </div>

                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={posts.length * 80}>
          <div className="mt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center text-sm font-medium transition-colors hover:text-foreground"
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}