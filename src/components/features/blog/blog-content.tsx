'use client';

import { useEffect, useRef } from 'react';

interface BlogContentProps {
  html: string;
}

export function BlogContent({ html }: BlogContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const pres = ref.current.querySelectorAll('pre');

    pres.forEach((pre) => {
      if (pre.querySelector('.code-copy-btn')) return;

      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';

      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        if (!code) return;

        try {
          await navigator.clipboard.writeText(code.textContent || '');
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = 'Copy';
          }, 2000);
        } catch {
          btn.textContent = 'Failed';
          setTimeout(() => {
            btn.textContent = 'Copy';
          }, 2000);
        }
      });

      pre.appendChild(btn);
    });
  }, [html]);

  return (
    <article
      ref={ref}
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}