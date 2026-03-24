---
sidebar_position: 1
---

# Testing Strategy

## Goals

- **80% code coverage** across frontend and backend
- Tests run on every pull request and block merge on failure
- E2E tests cover critical user flows only — not every story

## Test Layers

### Frontend

| Layer | Tool | What it covers |
|---|---|---|
| Unit | Vitest | Pure functions, hooks, utilities |
| Component | Vitest + React Testing Library | User interactions, state changes, form validation |
| E2E | Playwright | Critical flows end to end in a real browser |

### Backend

| Layer | Tool | What it covers |
|---|---|---|
| Unit | Go `testing` + testify | Pure logic, no I/O |
| Integration | httptest + testify | HTTP handlers against real request/response cycles |
| Database | Real PostgreSQL + transaction rollback | Data persistence, constraints, cascade behaviour |

## Database Testing

Backend tests that touch the database use a real test database (not mocks). Each test wraps its operations in a transaction that is rolled back on completion. This prevents test pollution without requiring cleanup scripts and catches real constraint and migration issues that mocks would hide.

## E2E Flows

Playwright covers these critical paths:

| Flow | Story |
|---|---|
| Native login and logout | S0 |
| Google OAuth login | S0 |
| Create a campaign scoped to a user | S1 |
| Create a quest and link a character | S5 |
| Drag an entity from the panel onto the battle map | S13 |
| Export a campaign and import it on a fresh account | S17 |

## Coverage Enforcement

Coverage thresholds are enforced in CI. A PR that drops total coverage below 80% will fail.

```bash
# Frontend
vitest run --coverage

# Backend
go test ./... -coverprofile=coverage.out
go tool cover -func=coverage.out
```
