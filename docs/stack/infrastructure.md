---
sidebar_position: 4
---

# Infrastructure

All infrastructure is provisioned with Terraform in the `dmkit-infra` repository. AWS is the sole cloud provider.

## AWS Services

| Service | Purpose |
|---|---|
| ECS Fargate | Backend API containers — no EC2 instances to manage |
| ECR | Docker image registry for backend images |
| CloudFront | CDN serving both the frontend (S3) and API (ECS) |
| S3 | Frontend static build hosting + user asset storage (map images) |
| DynamoDB | Application database |
| Cognito | Authentication — user pools + Google federated identity |
| Amazon Bedrock | AI world map image generation |
| IAM | Roles for ECS task execution and GitHub OIDC federation |

## Environments

| Environment | Branch | Notes |
|---|---|---|
| `dev` | `main` | Currently the only provisioned environment |

## Terraform Structure

```
dmkit-infra/
├── envs/
│   └── dev/             # Dev environment wiring
└── modules/
    ├── networking/       # VPC, subnets, internet gateway
    ├── ecs/              # ECS Fargate cluster and service
    ├── frontend/         # S3 bucket + CloudFront distribution
    ├── database/         # DynamoDB table
    ├── ecr/              # ECR repository
    └── iam/              # IAM roles for ECS and GitHub OIDC
```

## Remote State

Terraform state is stored remotely:

- **S3 bucket:** `dmkit-terraform-state` (versioned, encrypted)
- **DynamoDB table:** `dmkit-terraform-lock` (state locking)

Before running `terraform init` for the first time, bootstrap the state backend:

```bash
AWS_PROFILE=dmkit ./scripts/bootstrap.sh
```

## Authentication

Local development uses AWS IAM Identity Center (SSO). No long-lived access keys are used.

```bash
aws sso login --profile dmkit
export AWS_PROFILE=dmkit
```

CI/CD uses GitHub OIDC federation — the pipeline assumes an IAM role without storing static credentials.
