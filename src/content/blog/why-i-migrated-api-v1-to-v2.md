---
title: "Why I Migrated from API v1 to v2 Mid-Project"
description: "When the scope of my restaurant management system expanded to include separate dashboards and real-time sync, the flat server architecture couldn't keep up. Here's how I redesigned it — and what I learned."
date: "2025-01-15"
tags: ["architecture", "backend", "nodejs"]
published: true
---

## The Original Architecture

When I started building the restaurant management system, the scope was straightforward: a public-facing web app, an admin dashboard embedded at `/admin`, a thermal printer integration, and a handful of React Native endpoints.

API v1 handled all of this with a flat folder structure:
```
src/
├── models/
├── routes/
├── controllers/
├── helpers/
└── services/
```


Each route file handled a feature area. Each controller matched a route file. Shared logic lived in helpers and services. It was simple, readable, and it worked — for the original scope.

## When the Scope Changed

Then the client requested a structural change. He wanted the admin dashboard **completely separated** from the public app — not as a route within the same application, but as an independent interface. He also wanted a separate receptionist dashboard where staff could manage orders.

His initial preference was desktop applications for both.

I proposed an alternative: standalone web applications, hosted on the same server under subdomains. Each app would be fully independent and isolated, but without the deployment overhead of native desktop software.

> With web apps, adding or improving a feature is simple — I deploy the update, the user refreshes the page, and the change is live. With desktop apps, every update requires building, uploading, downloading, uninstalling, installing, and running. That cycle repeats for every single update.

The client agreed.

## Designing v2

This decision required a full redesign of the server.

### Modular Architecture

Each feature became a self-contained module with four files:
```
src/modules/orders/
├── orders.validation.ts # Zod schemas
├── orders.routes.ts # Routes + Swagger docs
├── orders.controller.ts # Request/response handling
└── orders.service.ts # Business logic
```


In v1, validation lived inside controllers — tangled with request handling. In v2, validation schemas are standalone files that serve double duty: they validate incoming requests **and** generate API documentation automatically.

### Automatic API Documentation

I integrated `zod-to-openapi` with Swagger UI Express. The Zod schemas used for validation are the same schemas referenced by the documentation:

```typescript
const createOrderSchema = z.object({
  items: z.array(orderItemSchema).min(1),
  type: z.enum(['pickup', 'delivery']),
  scheduledTime: z.string().datetime().optional(),
});
```
Updating this schema automatically updates the Swagger docs. No manual synchronization required. Engineers who have worked with FastAPI would recognize the pattern immediately.

Redis Session Caching
In v1, every authenticated request made a database call to verify the user. In v2, Redis caches the result of the first authentication call. Every subsequent request during that session skips the database entirely.

The impact: reduced latency, lower database load, and faster response times across every authenticated endpoint.

Dual WebSocket Architecture
The introduction of multiple synchronized dashboards required a more robust real-time system. In v2, I adopted Socket.IO for all web clients while maintaining native ws for the Electron thermal printer app.

Managing two WebSocket transports on a single server was a challenge in itself. I learned about handshake mechanisms, connection lifecycle, client pooling, and how to prevent conflicts between the two systems.

The Lesson
Architecture decisions made at the start of a project are not permanent. When the scope changes, the architecture must evolve with it.

The cost of not evolving is technical debt that compounds with every new feature. The cost of evolving is a focused migration effort that pays dividends for the rest of the project's life.

v2 didn't just support the new requirements — it created a foundation that could comfortably support features well beyond what the project currently needed. That's the difference between building for today and building for tomorrow.