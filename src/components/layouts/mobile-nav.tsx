'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site';
import { mainNav } from '@/content/navigation';
import { SocialLinks } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-bold tracking-tight">
            {siteConfig.name}
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          {mainNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                'rounded-md px-3 py-2.5 text-sm transition-colors',
                pathname === href || pathname.startsWith(href + '/')
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {siteConfig.cv.show && (
          <>
            <Separator className="my-6" />
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href={siteConfig.cv.url} download>
                <Download className="mr-2 h-3.5 w-3.5" />
                {siteConfig.cv.label}
              </a>
            </Button>
          </>
        )}

        <Separator className="my-6" />
        <SocialLinks />
      </SheetContent>
    </Sheet>
  );
}