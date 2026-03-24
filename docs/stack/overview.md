---
sidebar_position: 1
---

# Stack Overview

## Summary

| Layer | Technology |
|---|---|
| Frontend framework | Next.js 16 |
| UI language | TypeScript + React 19 |
| World/Location canvas | React Flow (`@xyflow/react`) |
| Battle map canvas | Konva (`react-konva`) |
| Backend language | Go 1.23 |
| Backend framework | Gin |
| Infrastructure | AWS (ECS Fargate, CloudFront, S3, DynamoDB, ECR) |
| IaC | Terraform |
| Auth | AWS Cognito |
| AI generation | Amazon Bedrock |
| CI/CD | GitHub Actions + semantic-release |

## Repository Map

| Repo | Purpose |
|---|---|
| `dmkit-frontend` | Next.js application |
| `dmkit-backend` | Go API server |
| `dmkit-infra` | Terraform infrastructure |
| `dmkit-devops` | Shared CI/CD workflows and git hooks |
| `dmkit-docs` | This documentation site |
