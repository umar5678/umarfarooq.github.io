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
        </ScrollFade>

        <div className="mt-14 space-y-12">
          {aboutContent.approach.map((item, i) => (
            <ScrollFade key={item.step} delay={i * 80}>
              <div className="group relative flex gap-6 md:gap-8">
                {/* Number */}
                <div className="flex-shrink-0 pt-0.5">
                  <span className="block font-mono text-4xl font-bold text-muted-foreground/20 transition-colors group-hover:text-muted-foreground/50">
                    {item.step}
                  </span>
                </div>

                {/* Vertical Line + Content */}
                <div className="border-l border-border pl-6 md:pl-8">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </Container>
    </Section>
  );
}