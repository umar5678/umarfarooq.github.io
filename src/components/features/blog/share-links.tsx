'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { TwitterIcon, LinkedInIcon } from '@/components/common';
import { Button } from '@/components/ui/button';

interface ShareLinksProps {
  url: string;
  title: string;
}

export function ShareLinks({ url, title }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">
        Share
      </span>

      <Button variant="ghost" size="sm" onClick={copyLink} className="h-8 gap-2 px-3 text-xs">
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copied ? 'Copied!' : 'Copy link'}
      </Button>

      <Button variant="ghost" size="sm" asChild className="h-8 gap-2 px-3 text-xs">
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="h-3.5 w-3.5" />
          Tweet
        </a>
      </Button>

      <Button variant="ghost" size="sm" asChild className="h-8 gap-2 px-3 text-xs">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="h-3.5 w-3.5" />
          Share
        </a>
      </Button>
    </div>
  );
}