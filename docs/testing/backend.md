---
sidebar_position: 3
---

# Backend Testing

## Tools

| Tool | Purpose |
|---|---|
| Go `testing` package | Test runner and assertions |
| `testify/assert` | Cleaner assertion helpers |
| `testify/require` | Assertions that stop the test on failure |
| `net/http/httptest` | In-process HTTP handler testing |
| `uber/mock` | Interface mock generation |

## Running Tests

```bash
cd dmkit-backend

# All tests
go test ./...

# With coverage
go test ./... -coverprofile=coverage.out
go tool cover -func=coverage.out

# Specific package
go test ./internal/handler/...

# Verbose output
go test -v ./...
```

## Handler Tests with httptest

```go
func TestCreateCampaign(t *testing.T) {
    router := setupTestRouter()

    body := `{"name": "Test Campaign"}`
    req := httptest.NewRequest(http.MethodPost, "/api/v1/campaigns", strings.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+testToken)

    w := httptest.NewRecorder()
    router.ServeHTTP(w, req)

    assert.Equal(t, http.StatusCreated, w.Code)
}
```

## Database Tests

Tests that touch the database use a real test database with per-test transaction rollback:

```go
func TestCampaignStore(t *testing.T) {
    tx := testDB.Begin()
    defer tx.Rollback()

    store := NewCampaignStore(tx)
    campaign, err := store.Create(ctx, "user-123", "My Campaign")

    require.NoError(t, err)
    assert.Equal(t, "My Campaign", campaign.Name)
}
```

Each test gets a clean slate. No cleanup scripts required.

## What to Test

- Handler status codes and response bodies for all success and error paths
- Validation rejection (missing fields, invalid values)
- Auth middleware — `401` without token, `403` on another user's resource
- Store layer — create, read, update, delete, cascade behaviour
- Business logic — disposition validation, HP ceiling on token state
