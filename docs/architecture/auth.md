---
sidebar_position: 5
---

# Authentication

## Provider

Authentication is handled by **AWS Cognito**. Cognito manages user accounts, password hashing, session tokens, and OAuth flows. No custom auth logic is implemented in the application.

## Login Methods

| Method | Notes |
|---|---|
| Email + password | Native Cognito user pool |
| Google OAuth | Cognito federated identity via Google as an identity provider |

## JWT Flow

```
User logs in (Cognito)
    │
    ▼
Cognito issues JWT (ID token + Access token)
    │
    ▼
Frontend stores token (memory / secure cookie)
    │
    ▼
All API requests include: Authorization: Bearer <token>
    │
    ▼
Backend validates JWT signature against Cognito JWKS
    │
    ▼
User subject ID extracted and used to scope all data queries
```

## Data Scoping

All campaign data is owned by a user identified by their Cognito **subject ID** (`sub` claim). The backend enforces this on every request:

- `GET /campaigns` returns only the authenticated user's campaigns
- Any request to access another user's resource returns `403 Forbidden`
- Any request without a valid JWT returns `401 Unauthorized`

## Protected Routes

Unauthenticated users attempting to access any route under `/campaigns` are redirected to the login page. The frontend checks session state on load and on route change.
