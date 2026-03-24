---
sidebar_position: 4
---

# Environments

## Current Environments

| Environment | Branch | URL |
|---|---|---|
| `dev` | `main` | TBD |

Currently only a `dev` environment is provisioned. Additional environments (staging, production) will be added as the project matures.

## Environment Configuration

Each environment lives in its own Terraform workspace under `dmkit-infra/envs/`:

```
envs/
└── dev/
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    ├── backend.tf
    └── terraform.tfvars
```

Environment-specific values (domain names, instance sizes, feature flags) are set in `terraform.tfvars` per environment.

## Promotion Strategy

When staging and production environments are added, the promotion flow will be:

```
Feature branch → PR → dev (auto-deploy on merge)
                   → staging (manual promote)
                   → production (manual promote with approval gate)
```
