import type { BlogPost } from '@/types';

const posts: BlogPost[] = [
  {
    slug: 'why-i-migrated-api-v1-to-v2',
    title: 'Why I Migrated from API v1 to v2 Mid-Project',
    description:
      'The architectural decisions behind restructuring a production server while feature development continued.',
    date: '2025-01-15',
    tags: ['architecture', 'backend', 'engineering'],
    readingTime: '8 min read',
    published: true,
    content: [
      'When I first started building the restaurant management system, the scope was straightforward: a public-facing web app, an admin dashboard embedded at /admin, a thermal printer integration, and a handful of React Native endpoints. API v1 handled all of this with a flat folder structure — models, routes, controllers, and shared helpers.',
      'Then the client asked for a structural change. He wanted the admin dashboard completely separated from the public app. He also wanted a dedicated receptionist dashboard. His initial preference was desktop applications for both.',
      'I proposed web apps instead — standalone applications hosted on subdomains of the same domain. Each app would be fully independent and isolated, but without the deployment and maintenance overhead of native desktop software. The client agreed.',
      'This decision required a full redesign of the server. The flat v1 structure could not support multiple independent clients, each needing their own real-time synchronization, authentication flows, and data access patterns. I migrated to a modular architecture where each feature became a self-contained module with four files: validation (Zod), routes (with inline Swagger docs), controller, and service.',
      'The migration also introduced Redis-based session caching, dual WebSocket transports (Socket.IO for web clients, native ws for the Electron printer app), and automatic API documentation powered by zod-to-openapi. Updating a Zod validation schema now automatically updates the Swagger docs — no manual synchronization required.',
      'The lesson: architecture decisions made at the start of a project are not permanent. When the scope changes, the architecture must evolve with it. The cost of not evolving is technical debt that compounds with every new feature.',
    ],
  },
  {
    slug: 'printing-receipts-pakistan-to-belgium',
    title: 'Printing Receipts from Pakistan to Belgium',
    description:
      'How I connected to a thermal printer 6,000 km away — with no tutorial, no guide, and no physical access.',
    date: '2025-01-08',
    tags: ['electron', 'problem-solving', 'hardware'],
    readingTime: '6 min read',
    published: true,
    content: [
      'The thermal printer was sitting in the client\'s restaurant kitchen in Belgium. I was working from Pakistan. There was no YouTube tutorial, no blog post, and no ready-made guide for what I needed to do.',
      'The requirement was specific: connect to that particular thermal printer model, send structured order data, and trigger silent printing — no dialog boxes, no user interaction. When a customer places an order, the receipt should print automatically in the kitchen.',
      'I started with deep research: reading the printer\'s user manual, scouring documentation for the ESC/POS command set, and piecing together anything that could point me in the right direction. I tried, failed, tried again, and failed again.',
      'Eventually, the Electron app was listening for WebSocket events from the server, formatting order data into a structured receipt layout, and sending it to the printer. The printer was producing receipts on the other side of the world.',
      'Because the hardware was remote, I had to guide the client through every physical step — where to connect cables, how to assign a static IP, how to reset the printer and retrieve its network address. I worked on his machine through remote desktop to configure the printer properly.',
      'I deliberately tackled this before starting the main project. Previous developers had been stuck at exactly this point. I built a test app and a sandbox server — once I confirmed the receipt printed successfully from Pakistan to Belgium, I knew the rest of the project was viable.',
    ],
  },
  {
    slug: 'what-solo-development-taught-me',
    title: 'What 5 Months of Solo Full-Stack Development Taught Me',
    description:
      'Lessons on architecture, communication, scope management, and knowing when good enough is the right call.',
    date: '2025-01-01',
    tags: ['career', 'lessons', 'freelancing'],
    readingTime: '10 min read',
    published: true,
    content: [
      'I used to believe that everything should be perfect. Every function, every component, every API response — meticulously crafted to an ideal standard. Five months of building a complete platform solo taught me that reliability and "good enough" are often more valuable than perfection.',
      'The restaurant management system spans six interconnected platforms: a customer-facing PWA, an admin dashboard, a receptionist dashboard, a React Native mobile app, an Electron thermal printer application, and a Node.js server with real-time synchronization across all of them. I built every piece alone.',
      'The most important skill I developed was not technical. It was communication. The client came to me after previous developers had failed — they had simply cloned his existing Wix website without understanding the actual problem. I took a different approach: I listened, asked questions, documented my understanding, and shared it back before writing any code.',
      'Scope management was another critical lesson. There was a point where the relationship between the client and my CEO became strained — tensions around scope, expectations, and communication. I stepped in, mediated the conflict, and kept the project on track.',
      'Looking back, the experience taught me that building software is fundamentally about solving problems for people. The technology is a tool. The real skill is understanding what needs to be built, communicating clearly, and delivering something that works — reliably, on time, and in a way that the client can trust.',
    ],
  },
];

export function getBlogPosts(): BlogPost[] {
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return getBlogPosts().slice(0, count);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug && p.published);
}

export function getAllBlogSlugs(): string[] {
  return posts.filter((p) => p.published).map((p) => p.slug);
}