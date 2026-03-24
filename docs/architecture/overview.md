---
sidebar_position: 1
---

# Architecture Overview

DMKit is a D&D campaign management tool for Dungeon Masters. It is built as a monorepo where each sub-project has its own git repository.

## Monorepo Structure

```
dmkit/
├── dmkit-frontend/   # Next.js application
├── dmkit-backend/    # Go API server
├── dmkit-infra/      # Terraform infrastructure
├── dmkit-devops/         # CI/CD pipelines and shared hooks
├── dmkit-docs/       # This documentation site
├── docs/             # Specs and proof artifacts
└── stories/          # Feature stories
```

## Application Hierarchy

All campaign data follows a strict hierarchy. Each level has its own view or canvas.

```
Campaign
├── PlayerCharacters[]
├── Factions[]
├── Quests[]
├── SessionNotes[]
└── World(s)
    └── Location(s)
        └── Area(s)
            └── Token instances

Entity Library (per Campaign)
├── Characters  (NPCs with disposition)
├── Items
└── Hazards
```

## Request Flow

```
Browser (Next.js)
    │
    │ HTTPS
    ▼
CloudFront
    │
    ├── /api/* ──▶ ECS Fargate (Go + Gin)
    │                   │
    │                   ├── DynamoDB
    │                   ├── S3 (assets)
    │                   └── Amazon Bedrock (AI generation)
    │
    └── /*     ──▶ S3 (static frontend build)
```

Authentication is handled by AWS Cognito. All API requests carry a Cognito JWT validated by the backend before any data is accessed.
