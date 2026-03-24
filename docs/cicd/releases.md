---
sidebar_position: 3
---

# Releases

DMKit uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and changelog generation. Releases are triggered automatically on every merge to `main`.

## How It Works

`semantic-release` reads the commit history since the last release and determines the next version number using [Conventional Commits](https://www.conventionalcommits.org/):

| Commit type | Version bump |
|---|---|
| `fix:` | Patch (`1.0.0` → `1.0.1`) |
| `feat:` | Minor (`1.0.0` → `1.1.0`) |
| `feat!:` or `BREAKING CHANGE:` | Major (`1.0.0` → `2.0.0`) |
| `chore:`, `docs:`, `refactor:`, `test:`, `ci:` | No release |

## What Gets Published

On each release, `semantic-release` automatically:

1. Determines the next semantic version
2. Updates `CHANGELOG.md` with the new release notes
3. Creates a GitHub Release with the changelog as the release body
4. Tags the commit with the version number (`v1.2.3`)
5. Commits the updated `CHANGELOG.md` back to `main`

## Configuration

`semantic-release` is configured in `dmkit-devops` and shared across repositories. The plugin chain is:

```
@semantic-release/commit-analyzer
@semantic-release/release-notes-generator
@semantic-release/changelog
@semantic-release/github
@semantic-release/git
```
