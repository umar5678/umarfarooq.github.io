import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

interface MetadataArgs {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata({ title, description, path = '' }: MetadataArgs): Metadata {
  const fullTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;

  const desc = description || siteConfig.description;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
    metadataBase: new URL(siteConfig.url),
  };
}