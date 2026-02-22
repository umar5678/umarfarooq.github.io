import { Mail } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Container, Section, ScrollFade, HireLinks, WhatsAppIcon } from '@/components/common';
import { Button } from '@/components/ui/button';

export function ContactCta() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <Section id="contact">
      <Container>
        <ScrollFade>
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Get in Touch
            </p>

            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
              Let&rsquo;s build something
              <br className="hidden sm:block" />
              {' '}that matters.
            </h2>

            <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground">
              Whether you need a complete product built from scratch or an experienced
              developer for your team — I&rsquo;m ready to talk.
            </p>

            {/* Hire Platforms */}
            <div className="mt-10 flex justify-center">
              <HireLinks />
            </div>

            {/* Direct Contact */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}