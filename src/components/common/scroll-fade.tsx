'use client';

import { cn } from '@/lib/utils';
import { useScrollFade } from '@/hooks/use-scroll-fade';
import type { ReactNode, CSSProperties } from 'react';

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollFade({ children, className, delay = 0 }: ScrollFadeProps) {
  const { ref, isVisible } = useScrollFade(0.1);

  return (
    <div
      ref={ref}
      className={cn('scroll-fade', isVisible && 'visible', className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}