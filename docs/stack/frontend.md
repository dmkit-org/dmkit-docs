---
sidebar_position: 2
---

# Frontend Stack

## Core

| Concern | Technology | Notes |
|---|---|---|
| Framework | Next.js 16 | App Router, static export for S3/CloudFront hosting |
| Language | TypeScript | Strict mode |
| UI | React 19 | Concurrent features, server components where applicable |

## Canvas Libraries

| Canvas | Library | Why |
|---|---|---|
| World & Location | React Flow (`@xyflow/react`) | MIT licensed, infinite canvas, React-native nodes, typed edges for travel routes |
| Battle map | Konva (`react-konva`) | Grid support, token drag-snap, image layer for map backgrounds |

## Testing

| Layer | Tool |
|---|---|
| Unit & component | Vitest + React Testing Library |
| E2E | Playwright |

## Code Quality

- ESLint with `eslint-config-next`
- Prettier for formatting
- Commitlint enforcing Conventional Commits (via `dmkit-devops`)

## Build & Deploy

The frontend is built as a static export (`next build`) and deployed to an S3 bucket served through CloudFront. There is no Node.js server at runtime.
