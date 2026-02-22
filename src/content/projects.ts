import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'restaurant-management-system',
    title: 'Restaurant Management System',
    subtitle:
      'A complete, custom-built platform for a restaurant in Belgium — 6 interconnected platforms, one developer, zero compromises.',
    description:
      "The client's previous Wix-based system scored 47 on Lighthouse. Previous developers had cloned his website without understanding the actual problem. I took a different approach — I listened, understood, and built a production system that scores 94+ on desktop.",
    type: 'featured',
    category: 'Full-Stack Platform',
    year: '2024',
    duration: '5–6 months',
    role: 'Solo Developer (End-to-End)',
    status: 'In Production',
    clientLocation: 'Belgium',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'Socket.IO',
      'React Native',
      'Electron',
      'Tailwind CSS',
      'TanStack Query',
    ],
    highlights: [
      'Built 6 interconnected platforms entirely solo',
      'Replaced a Wix-based system — Lighthouse score from 47 to 94+',
      'Real-time sync across all dashboards via WebSockets',
      'Solved thermal printer integration that previous developers could not',
      'Learned React Native and delivered a production app in 12 days',
      'Automatic API documentation via Zod + Swagger',
    ],
    metrics: [
      { value: '6', label: 'Platforms Built' },
      { value: '1', label: 'Developer' },
      { value: '5 mo', label: 'Duration' },
      { value: '94+', label: 'Lighthouse Score' },
    ],
    platforms: [
      {
        name: 'Public-Facing Web App (PWA)',
        description:
          'A customer-facing progressive web app for browsing the menu, customizing items, and placing orders with pickup or delivery.',
        techStack: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'TanStack Query',
          'Socket.IO',
          'PWA',
        ],
        features: [
          'Menu browsing with category navigation',
          'Item customization — toppings, extras, exclusion rules',
          'Pickup and delivery ordering with time scheduling',
          'Installable on Android and iOS — no app store required',
          'Smart two-finger map interaction with auto-unlock',
          'Mobile-first bottom drawer for item customization',
        ],
      },
      {
        name: 'Admin Dashboard',
        description:
          'A comprehensive management panel where the restaurant owner controls every aspect of the business.',
        techStack: [
          'Next.js',
          'TypeScript',
          'shadcn/ui',
          'TanStack Query',
          'TanStack Table',
          'Socket.IO',
        ],
        features: [
          'Full menu management — items, categories, toppings, customization rules',
          'Delivery zone management with dynamic fee structures',
          'Operating hours and restaurant availability control',
          'Content, SEO, and social media management',
          'Staff management with role-based access',
          'Order management with direct receipt printing',
          'Real-time notifications and bulk operations',
          'Drag-and-drop reordering for categories, items, and zones',
        ],
      },
      {
        name: 'Receptionist Dashboard',
        description:
          'A dedicated panel for front-of-house staff to process orders and access restaurant information.',
        techStack: ['Next.js', 'TypeScript', 'shadcn/ui', 'TanStack Query', 'Socket.IO'],
        features: [
          'Process and manage orders — update statuses, view details',
          'Create orders on behalf of customers (pickup or delivery)',
          'View operating hours, delivery zones, and fee structures',
          'Manage active login sessions',
          'Real-time sync with admin dashboard',
        ],
      },
      {
        name: 'React Native Mobile App',
        description:
          'A mobile app for the restaurant owner to manage orders and toggle availability on the go.',
        techStack: ['React Native', 'Firebase Cloud Messaging'],
        features: [
          'Real-time push notifications for new orders',
          'Order management — search, filter, update status',
          'Restaurant open/close toggle',
          'Share order details to WhatsApp with Google Maps links',
        ],
      },
      {
        name: 'Electron Thermal Printer App',
        description:
          'A desktop application that silently prints order receipts — no dialog boxes, no user intervention.',
        techStack: ['Electron', 'CommonJS', 'WebSocket (ws)'],
        features: [
          'Silent printing — zero user interaction required',
          'Print queue with multi-level retry logic',
          'Network-level and WebSocket reconnection handling',
          'Operational logging for remote debugging',
        ],
      },
      {
        name: 'Server & Real-Time Architecture',
        description:
          'The central backend powering all platforms with real-time synchronization.',
        techStack: [
          'Node.js',
          'Express',
          'MongoDB',
          'Redis',
          'Socket.IO',
          'WebSocket (ws)',
          'JWT',
          'Zod',
          'Swagger',
          'FCM',
        ],
        features: [
          'Modular architecture — each feature is a self-contained module',
          'Dual WebSocket transport — Socket.IO for web, native ws for Electron',
          'Redis-based session caching — eliminates DB calls per request',
          'Automatic API documentation via Zod + Swagger',
          'Surgical TanStack Query cache updates over WebSocket',
          'Offset-based pagination optimized for admin interfaces',
        ],
      },
    ],
    challenges: [
      {
        title: 'The Thermal Printer',
        narrative: [
          'The printer was sitting in the client\'s restaurant kitchen in Belgium. I was working from Pakistan.',
          'There was no YouTube tutorial, no blog post, and no ready-made guide for what I needed to do — connect to that specific thermal printer model, send structured payloads, and trigger silent printing without any user interaction.',
          'I started with deep research: reading the printer\'s user manual, scouring documentation, and piecing together anything that could point me in the right direction.',
          'I tried, failed, tried again, and failed again. But I kept at it. Eventually, the printer was responding — the Electron app was listening for WebSocket events from the server, sending formatted data, and the printer was producing receipts on the other side of the world.',
          'I deliberately tackled this before starting the main project. Previous developers had been stuck at exactly this point. I built a test app and a sandbox server — once I confirmed the receipt printed successfully from Pakistan to Belgium, I knew the rest of the project was viable.',
        ],
        quote: 'Previous developers had been stuck at exactly this point.',
      },
      {
        title: 'Understanding the Business',
        narrative: [
          'The client came to me saying, "I\'m using this Wix-based system, but it\'s not what I want." The developers he had worked with previously had simply looked at his Wix website and started cloning it in React.',
          'I took a different approach. I listened. I asked questions. I explained my understanding back to him, sought clarification, and did independent research before writing any code. I documented my interpretation and shared it with him.',
          'When he finally said, "Yes — now you understand. I\'m very happy. Go build it," that was when development began.',
        ],
        quote:
          "Everything you built already exists in my current Wix setup. You haven't added anything.",
        quoteAttribution: 'The client, to previous developers',
      },
      {
        title: 'Learning React Native in 10 Days',
        narrative: [
          'I had ten days to build the admin mobile app. In the first eight days, I learned React Native from scratch, built four practice apps, and tested everything end to end.',
          'One of those practice apps was a mini social media platform — authentication, CRUD, posting, liking, commenting, and real-time notifications via FCM.',
          'On day nine, I started building the actual production app. I delivered it on day twelve. It was reviewed and approved.',
        ],
      },
    ],
    architecturalDecisions: [
      {
        title: 'API v1 → v2 Migration',
        description:
          'When the client requested separate dashboards, I migrated the entire server from a flat structure to a modular architecture.',
        details: [
          'Each feature became a self-contained module (validation, routes, controller, service)',
          'Zod schemas drive both validation and Swagger documentation automatically',
          'Redis caches authentication results — subsequent requests skip the database',
          'Dual WebSocket architecture: Socket.IO for web clients, native ws for Electron',
          'Clean internal API lets any HTTP module trigger real-time events',
        ],
      },
      {
        title: 'Web Apps Over Desktop Apps',
        description:
          'The client initially wanted desktop applications for both dashboards. I proposed web apps instead.',
        details: [
          'Updates deploy instantly — no download/install cycles',
          'Cross-platform by default — Chrome, Safari, Edge, any OS',
          'Independent apps on subdomains, sharing the same server',
          'Significantly lower maintenance overhead',
        ],
      },
      {
        title: 'Infrastructure Proximity',
        description:
          'Hosted on a Hetzner VPS in Germany — chosen for geographic proximity to Belgian users.',
        details: [
          'MongoDB co-located with the server in Germany',
          'Database query latency: ~30–120ms for Belgian users vs. 100–300ms from Pakistan',
          'Cloudinary CDN for image delivery and optimization',
        ],
      },
    ],
    performance: {
      before: { label: 'Wix-Based Website', score: 47, platform: 'Wix' },
      after: {
        label: 'Custom Platform',
        score: 94,
        platform: 'Next.js',
        note: '60+ on mobile (Lighthouse applies 4× CPU throttle)',
      },
    },
    humanSide: {
      quote: 'This project survived because of you.',
      quoteAttribution: 'Both the client and my CEO',
      points: [
        'Mediated conflict between the client and my CEO when tensions arose around scope and expectations',
        'Managed requirements creep without derailing the timeline or the relationship',
        'Built the entire system solo — every frontend, every backend, every deployment',
      ],
    },
  },

  // --- Standard Projects (replace with your real projects) ---

  {
    slug: 'project-two',
    title: 'Project Title Here',
    subtitle: 'A brief one-line description of what this project does and who it serves.',
    description:
      'A longer description explaining the project scope, your role, and the outcome. Replace this with your actual project details.',
    type: 'standard',
    category: 'Web Application',
    year: '2024',
    duration: '4 weeks',
    role: 'Full-Stack Developer',
    status: 'Completed',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Key achievement or feature #1',
      'Key achievement or feature #2',
      'Key achievement or feature #3',
    ],
    metrics: [
      { value: '—', label: 'Metric 1' },
      { value: '—', label: 'Metric 2' },
    ],
  },

  {
    slug: 'project-three',
    title: 'Another Project Title',
    subtitle: 'Another one-line summary. Replace with real project details.',
    description:
      'Full description of the project. What problem it solves, how you built it, what the outcome was.',
    type: 'standard',
    category: 'API / Backend',
    year: '2023',
    duration: '3 weeks',
    role: 'Backend Developer',
    status: 'Completed',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
    highlights: [
      'Key achievement #1',
      'Key achievement #2',
      'Key achievement #3',
    ],
    metrics: [
      { value: '—', label: 'Metric 1' },
      { value: '—', label: 'Metric 2' },
    ],
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.type === 'featured');
}

export function getStandardProjects(): Project[] {
  return projects.filter((p) => p.type === 'standard');
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}