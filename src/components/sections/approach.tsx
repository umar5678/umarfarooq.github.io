// components/sections/Approach.tsx
import { aboutContent } from '@/content/about';
import { Container, Section, ScrollFade } from '@/components/common';

export function Approach() {
  return (
    <Section id="approach">
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            How I Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            My Approach
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every project follows the same discipline — whether it takes two
            weeks or six months.
          </p>
        </ScrollFade>

        {/* 2×2 card grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {aboutContent.approach.map((item, i) => (
            <ScrollFade key={item.step} delay={i * 80}>
              <div className="group h-full rounded-xl border border-border/50 p-6 transition-colors hover:border-border hover:bg-card/50 md:p-8">
                <span className="font-mono text-5xl font-bold text-muted-foreground/[0.08] transition-colors group-hover:text-muted-foreground/20">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// import { aboutContent } from '@/content/about';
// import { Container, Section, ScrollFade } from '@/components/common';

// export function Approach() {
//   return (
//     <Section id="approach">
//       <Container>
//         <ScrollFade>
//           <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
//             How I Work
//           </p>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
//             My Approach
//           </h2>
//           <p className="mt-4 max-w-2xl text-muted-foreground">
//             Every project follows the same discipline — whether it takes two
//             weeks or six months.
//           </p>
//         </ScrollFade>

//         <div className="mt-14 space-y-12">
//           {aboutContent.approach.map((item, i) => (
//             <ScrollFade key={item.step} delay={i * 80}>
//               <div className="group relative flex gap-6 md:gap-8">
//                 <div className="flex-shrink-0 pt-0.5">
//                   <span className="block font-mono text-4xl font-bold text-muted-foreground/15 transition-colors group-hover:text-muted-foreground/40">
//                     {item.step}
//                   </span>
//                 </div>

//                 <div className="border-l border-border pl-6 transition-colors group-hover:border-foreground/20 md:pl-8">
//                   <h3 className="text-lg font-semibold tracking-tight">
//                     {item.title}
//                   </h3>
//                   <p className="mt-2.5 leading-relaxed text-muted-foreground">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </ScrollFade>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }