---
sidebar_position: 3
---

# Backend Stack

## Core

| Concern | Technology | Notes |
|---|---|---|
| Language | Go 1.23 | |
| Framework | Gin | HTTP routing, middleware, request binding |
| Serialization | `encoding/json` + `goccy/go-json` | Fast JSON encoding |
| Validation | `go-playground/validator` | Struct tag-based request validation |

## Key Dependencies

| Package | Purpose |
|---|---|
| `gin-gonic/gin` | HTTP framework |
| `go-playground/validator/v10` | Request validation |
| `goccy/go-yaml` | YAML config parsing |
| `uber/mock` | Mock generation for unit tests |

## Testing

| Layer | Tool |
|---|---|
| Unit & integration | Go `testing` package + `testify` |
| HTTP handlers | `httptest` |
| Database | Real database with per-test transaction rollback |

## Project Structure

```
dmkit-backend/
├── cmd/          # Application entry points
├── internal/     # Private application code
│   ├── handler/  # HTTP handlers
│   ├── service/  # Business logic
│   ├── store/    # Data access layer
│   └── model/   # Domain types
└── bin/          # Compiled binaries
```

## API Conventions

- All routes are prefixed with `/api/v1`
- Authentication required on all routes via `Authorization: Bearer <token>`
- JSON request and response bodies
- Conventional HTTP status codes: `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`
