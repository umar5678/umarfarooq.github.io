export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Platform {
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  image?: string;
}

export interface Challenge {
  title: string;
  narrative: string[];
  quote?: string;
  quoteAttribution?: string;
}

export interface ArchitecturalDecision {
  title: string;
  description: string;
  details: string[];
}

export interface PerformanceComparison {
  before: { label: string; score: number; platform: string };
  after: { label: string; score: number; platform: string; note?: string };
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'featured' | 'standard';
  category: string;
  year: string;
  duration: string;
  role: string;
  status: string;
  techStack: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  coverImage?: string;
  images?: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  clientLocation?: string;
  platforms?: Platform[];
  challenges?: Challenge[];
  architecturalDecisions?: ArchitecturalDecision[];
  performance?: PerformanceComparison;
  humanSide?: {
    quote: string;
    quoteAttribution: string;
    points: string[];
  };
}