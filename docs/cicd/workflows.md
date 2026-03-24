---
sidebar_position: 2
---

# Workflows

## Frontend (`dmkit-frontend`)

```yaml
# On pull request and push to main
steps:
  - Lint (ESLint + Prettier check)
  - Type check (tsc --noEmit)
  - Test (Vitest)
  - Build (next build)

# On push to main only
  - Deploy static build to S3
  - Invalidate CloudFront cache
```

## Backend (`dmkit-backend`)

```yaml
# On pull request and push to main
steps:
  - Lint (golangci-lint)
  - Test (go test ./... --coverage)
  - Build (go build)
  - Build Docker image

# On push to main only
  - Push image to ECR
  - Deploy new task definition to ECS Fargate
```

## Infrastructure (`dmkit-infra`)

```yaml
# On pull request
steps:
  - terraform fmt -check
  - terraform validate
  - terraform plan (output posted as PR comment)

# On push to main
steps:
  - terraform apply (auto-approved)
```

Uses GitHub OIDC to assume an IAM role — no stored AWS credentials.

## Docs (`dmkit-docs`)

```yaml
# On push to main
steps:
  - npm ci
  - npm run build
  - Deploy build/ to gh-pages branch
```
