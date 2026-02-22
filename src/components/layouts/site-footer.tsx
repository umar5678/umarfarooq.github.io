import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { mainNav } from '@/content/navigation';
import { SocialLinks } from '@/components/common';
import { Separator } from '@/components/ui/separator';

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-tight">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.title}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {mainNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <SocialLinks />

          <Separator />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}