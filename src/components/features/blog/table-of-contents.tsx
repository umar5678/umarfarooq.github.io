'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { List, ChevronDown } from 'lucide-react';
import type { TocItem } from '@/types';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -75% 0px', threshold: 0 }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="rounded-lg border border-border">
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors hover:bg-muted/50"
      >
        <span className="flex items-center gap-2.5">
          <List className="h-4 w-4 text-muted-foreground" />
          Table of Contents
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Links */}
      {isOpen && (
        <nav className="border-t border-border px-5 py-4">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    'block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors',
                    item.level === 3 && 'pl-7',
                    activeId === item.id
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  )}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}