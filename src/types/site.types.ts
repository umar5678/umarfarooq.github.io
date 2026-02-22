export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  status: {
    available: boolean;
    message: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    location: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  hire: {
    upwork: string;
    fiverr: string;
  };
  cv: {
    show: boolean;
    url: string;
    label: string;
  };
}