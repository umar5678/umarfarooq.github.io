import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getRecentBlogPosts } from '@/lib/blog';
import { Container, Section, ScrollFade } from '@/components/common';

export function BlogPreview() {
  const posts = getRecentBlogPosts(3);
  if (posts.length === 0) return null;

  return (
    <Section id="blog">
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Writing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            From the Blog
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I write about the things I wish someone had told me — architecture
            decisions, hard problems, and lessons from building real products.
          </p>
        </ScrollFade>

        <div className="mt-12 divide-y divide-border">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold tracking-tight transition-colors group-hover:text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <div className="mt-2 flex flex-shrink-0 items-center gap-3 sm:mt-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={posts.length * 80}>
          <div className="mt-10">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              All posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}

// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { getRecentBlogPosts } from '@/lib/blog';
// import { Container, Section, ScrollFade } from '@/components/common';
// import { Separator } from '@/components/ui/separator';

// export function BlogPreview() {
//   const posts = getRecentBlogPosts(3);
//   if (posts.length === 0) return null;

//   return (
//     <Section id="blog">
//       <Container >
//         <ScrollFade>
//           <Separator className="mb-16" />

//           <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
//             Writing
//           </p>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
//             Latest from the Blog
//           </h2>
//         </ScrollFade>

//         <div className="mt-10 space-y-2">
//           {posts.map((post, i) => (
//             <ScrollFade key={post.slug} delay={i * 80}>
//               <Link
//                 href={`/blog/${post.slug}`}
//                 className="group block rounded-lg p-4 transition-colors hover:bg-muted/50"
//               >
//                 <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
//                   <h3 className="font-semibold transition-colors group-hover:text-foreground">
//                     {post.title}
//                   </h3>
//                   <span className="flex-shrink-0 font-mono text-xs text-muted-foreground">
//                     {post.readingTime}
//                   </span>
//                 </div>

//                 <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
//                   {post.description}
//                 </p>

//                 <div className="mt-2 flex items-center gap-3">
//                   <span className="font-mono text-xs text-muted-foreground">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: 'numeric',
//                       year: 'numeric',
//                     })}
//                   </span>
//                 </div>
//               </Link>
//             </ScrollFade>
//           ))}
//         </div>

//         <ScrollFade delay={posts.length * 80}>
//           <div className="mt-8">
//             <Link
//               href="/blog"
//               className="group inline-flex items-center text-sm font-medium transition-colors hover:text-foreground"
//             >
//               View all posts
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </ScrollFade>
//       </Container>
//     </Section>
//   );
// }


// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { getRecentBlogPosts } from '@/lib/blog';
// import { Container, Section, ScrollFade } from '@/components/common';

// export function BlogPreview() {
//   const posts = getRecentBlogPosts(3);
//   if (posts.length === 0) return null;

//   return (
//     <Section id="blog">
//       <Container>
//         <ScrollFade>
//           <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
//             Writing
//           </p>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
//             From the Blog
//           </h2>
//           <p className="mt-4 max-w-2xl text-muted-foreground">
//             I write about the things I wish someone had told me — architecture
//             decisions, hard problems, and lessons from building real products.
//           </p>
//         </ScrollFade>

//         <div className="mt-12 divide-y divide-border">
//           {posts.map((post, i) => (
//             <ScrollFade key={post.slug} delay={i * 80}>
//               <Link
//                 href={`/blog/${post.slug}`}
//                 className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
//               >
//                 <div className="min-w-0 flex-1">
//                   <h3 className="font-semibold tracking-tight transition-colors group-hover:text-foreground">
//                     {post.title}
//                   </h3>
//                   <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
//                     {post.description}
//                   </p>
//                 </div>

//                 <div className="mt-2 flex flex-shrink-0 items-center gap-3 sm:mt-0">
//                   <span className="font-mono text-xs text-muted-foreground">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: 'numeric',
//                     })}
//                   </span>
//                   <span className="font-mono text-xs text-muted-foreground">
//                     {post.readingTime}
//                   </span>
//                 </div>
//               </Link>
//             </ScrollFade>
//           ))}
//         </div>

//         <ScrollFade delay={posts.length * 80}>
//           <div className="mt-10">
//             <Link
//               href="/blog"
//               className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
//             >
//               All posts
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </ScrollFade>
//       </Container>
//     </Section>
//   );
// }