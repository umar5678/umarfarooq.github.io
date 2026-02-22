import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface HireLinksProps {
  className?: string;
}

export function HireLinks({ className }: HireLinksProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <Button asChild>
        <a href={siteConfig.hire.upwork} target="_blank" rel="noopener noreferrer">
          Hire on Upwork
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href={siteConfig.hire.fiverr} target="_blank" rel="noopener noreferrer">
          Hire on Fiverr
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}