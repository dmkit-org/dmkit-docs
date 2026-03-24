---
sidebar_position: 1
---

# CI/CD Overview

DMKit uses GitHub Actions for all CI/CD pipelines. Shared configuration and git hooks live in the `dmkit-ci` repository and are referenced by each sub-project.

## Pipeline Summary

| Trigger | What runs |
|---|---|
| Pull request | Lint, test, build |
| Merge to `main` | Lint, test, build, release, deploy |

## Shared Tooling (`dmkit-ci`)

| Tool | Purpose |
|---|---|
| `commitlint` | Enforces Conventional Commits on every commit message |
| `markdownlint-cli2` | Lints markdown files |
| `semantic-release` | Automated versioning and changelog generation from commit history |

## Commit Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

Types: feat, fix, chore, docs, refactor, test, ci
```

Examples:
```
feat(campaigns): add inline rename on campaign list
fix(battle-map): correct token snap offset at non-default grid sizes
docs(architecture): update canvas library decision
```

Commitlint runs as a git hook (installed via `make setup`) and as a CI check on every PR.
