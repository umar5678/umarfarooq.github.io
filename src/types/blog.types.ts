export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  readingTime: string;
  wordCount: number;
  published: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  toc: TocItem[];
}