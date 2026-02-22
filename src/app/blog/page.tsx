import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getBlogPosts, getAllTags } from '@/lib/blog';
import { Container, Section, ScrollFade } from '@/components/common';
import { BlogCard, TagList } from '@/components/features/blog';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'Writing about software architecture, full-stack development, problem solving, and lessons from building production systems.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const allTags = getAllTags();

  return (
    <Section>
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground/60 uppercase">
            Writing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Thinking out loud about architecture decisions, hard problems, and
            lessons from building real products. No fluff — just things I wish
            someone had told me.
          </p>
        </ScrollFade>

        {/* Tags */}
        {allTags.length > 0 && (
          <ScrollFade delay={60}>
            <div className="mt-8">
              <TagList tags={allTags} />
            </div>
          </ScrollFade>
        )}

        {/* Posts */}
        <ScrollFade delay={100}>
          <Separator className="mt-10" />
          <div className="divide-y divide-border">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </ScrollFade>

        {posts.length === 0 && (
          <ScrollFade>
            <div className="mt-14 py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No posts yet. Check back soon.
              </p>
            </div>
          </ScrollFade>
        )}
      </Container>
    </Section>
  );
}