'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site';
import { mainNav } from '@/content/navigation';
import { MobileNav } from './mobile-nav';
import { Logo } from '../logo/Logo';
import { HexLogo } from '../logo/HexLogo';
import { LogoContinuousStroke } from '../logo/LogoContinuousStrok';
import { LogoNegativeGrid } from '../logo/LogoNegativeGrid';
import { LogoStackTrace } from '../logo/LogoStackTrace';
import { LogoDeconstructed } from '../logo/LogoDeconstructed';
import { LogoCodeBlock } from '../logo/LogoCodeBlock';
import { LogoMark } from '../logo/LogoMark';

export function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const firstName = siteConfig.name.split(' ')[0];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled
            ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          {/* ── Name ── */}
          <Link
            href="/"
            className="shrink-0 text-base font-bold tracking-tight mt-6"
          >
            {/* <Logo /> */}
            {/* <HexLogo /> */}
            <LogoContinuousStroke size={28} />
            {/* <LogoMark /> */}
            {/* <LogoNegativeGrid /> */}
            {/* <LogoStackTrace /> */}
            {/* <LogoDeconstructed /> */}
            {/* <LogoCodeBlock /> */}
            {/* {firstName} */}
            <span className="text-muted-foreground/25">.</span>
          </Link>

          {/* ── Connecting line — mirrors the hero's line accent ── */}
          <div className="mx-6 hidden h-px flex-1 bg-border/30 md:block" />

          {/* ── Desktop nav — mono/uppercase to match section labels ── */}
          <nav className="hidden items-center gap-7 md:flex">
            {mainNav.map(({ label, href }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'group relative py-1 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-300',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground/80 hover:text-foreground'
                  )}
                >
                  {label}
                  {/* Expanding underline */}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Divider ── */}
          <div className="mx-3 hidden h-3.5 w-px bg-border/30 md:block" />

          {/* ── Actions ── */}
          <div className="ml-auto flex items-center gap-0.5 md:ml-0">
            {siteConfig.cv.show && (
              <a
                href={siteConfig.cv.url}
                download
                className="hidden h-8 w-8 items-center justify-center rounded-md text-muted-foreground/90 transition-colors duration-200 hover:text-foreground sm:flex"
                aria-label="Download CV"
              >
                <Download className="h-3.5 w-3.5" />
              </a>
            )}

            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground/90 transition-colors duration-200 hover:text-foreground"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
              </button>
            )}

            {/* ── Mobile trigger — asymmetric lines ── */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground md:hidden"
              aria-label="Open menu"
            >
              <div className="flex w-3.5 flex-col items-end gap-[5px]">
                <span className="block h-[1.5px] w-full bg-current" />
                <span className="block h-[1.5px] w-[60%] bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';
// import { Sun, Moon, Download, Menu } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { siteConfig } from '@/content/site';
// import { mainNav } from '@/content/navigation';
// import { Button } from '@/components/ui/button';
// import { MobileNav } from './mobile-nav';

// export function SiteHeader() {
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => setMounted(true), []);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
//       <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
//         {/* Logo */}
//         <Link href="/" className="text-lg font-bold tracking-tight">
//           {siteConfig.name}
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {mainNav.map(({ label, href }) => (
//             <Link
//               key={href}
//               href={href}
//               className={cn(
//                 'text-sm transition-colors hover:text-foreground',
//                 pathname === href || pathname.startsWith(href + '/')
//                   ? 'text-foreground'
//                   : 'text-muted-foreground'
//               )}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center gap-2">
//           {/* CV Download */}
//           {siteConfig.cv.show && (
//             <Button
//               variant="outline"
//               size="sm"
//               asChild
//               className="hidden sm:inline-flex"
//             >
//               <a href={siteConfig.cv.url} download>
//                 <Download className="mr-2 h-3.5 w-3.5" />
//                 CV
//               </a>
//             </Button>
//           )}

//           {/* Theme Toggle */}
//           {mounted && (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               aria-label="Toggle theme"
//             >
//               {theme === 'dark' ? (
//                 <Sun className="h-4 w-4" />
//               ) : (
//                 <Moon className="h-4 w-4" />
//               )}
//             </Button>
//           )}

//           {/* Mobile Menu Trigger */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setMobileOpen(true)}
//             aria-label="Open menu"
//           >
//             <Menu className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
//     </header>
//   );
// }