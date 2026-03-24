---
sidebar_position: 2
---

# Logging

:::note
Logging infrastructure is not yet configured. This section documents the planned approach.
:::

## Backend Logging

ECS Fargate tasks emit structured JSON logs via the `awslogs` log driver. Logs are collected by CloudWatch Logs automatically with no sidecar required.

**Log format:**
```json
{
  "time": "2026-03-23T10:00:00Z",
  "level": "info",
  "msg": "request completed",
  "method": "POST",
  "path": "/api/v1/campaigns",
  "status": 201,
  "duration_ms": 12,
  "user_id": "sub|abc123"
}
```

**Log levels:** `debug`, `info`, `warn`, `error`

Sensitive data (JWT tokens, passwords) must never appear in logs.

## Frontend Logging

Client-side errors are surfaced via the browser console in development. In production, unhandled errors should be captured and forwarded to a monitoring service (to be decided).

## Log Retention

CloudWatch log groups will be configured with a retention policy. Logs older than 30 days are expired automatically to control cost.
