
// components/sections/AboutPreview.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '@/content/about';
import { Section, ScrollFade } from '@/components/common';

export function AboutPreview() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFade>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:gap-16">
            {/* Left — label + pull quote */}
            <div>
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                About
              </p>
              <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;{aboutContent.headline}&rdquo;
              </blockquote>
            </div>

            {/* Right — intro + link, separated by a left border */}
            <div className="flex flex-col justify-end">
              <div className="space-y-4 md:border-l md:border-border/50 md:pl-8">
                {aboutContent.introduction.slice(0, 2).map((paragraph, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 md:pl-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </Section>
  );
}

// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { aboutContent } from '@/content/about';
// import { Container, Section, ScrollFade } from '@/components/common';

// export function AboutPreview() {
//   return (
//     <Section id="about">
//       <Container>
//         <ScrollFade>
//           <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
//             About
//           </p>

//           <blockquote className="mt-6 text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
//             &ldquo;{aboutContent.headline}&rdquo;
//           </blockquote>
//         </ScrollFade>

//         <ScrollFade delay={100}>
//           <div className="mt-8 space-y-4">
//             {aboutContent.introduction.slice(0, 2).map((paragraph, i) => (
//               <p key={i} className="leading-relaxed text-muted-foreground">
//                 {paragraph}
//               </p>
//             ))}
//           </div>

//           <div className="mt-6">
//             <Link
//               href="/about"
//               className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
//             >
//               The full story
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </div>
//         </ScrollFade>
//       </Container>
//     </Section>
//   );
// }