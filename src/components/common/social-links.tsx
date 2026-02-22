import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/site';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const links = [
  { href: siteConfig.social.github, icon: GitHubIcon, label: 'GitHub' },
  { href: siteConfig.social.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
  { href: siteConfig.social.twitter, icon: TwitterIcon, label: 'X (Twitter)' },
];

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}