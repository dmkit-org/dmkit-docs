---
sidebar_position: 3
---

# Alerts

:::note
Alerting infrastructure is not yet configured. This section documents the planned approach.
:::

## Alert Routing

```
CloudWatch Alarm
    │
    ▼
SNS Topic
    │
    ├── Email notification
    └── Slack webhook (planned)
```

## Planned Alert Thresholds

| Signal | Threshold | Severity |
|---|---|---|
| API 5xx error rate | > 1% over 5 minutes | High |
| API p99 latency | > 2000ms over 5 minutes | Medium |
| ECS task CPU | > 80% sustained for 10 minutes | Medium |
| ECS task memory | > 85% | High |
| DynamoDB throttle events | Any | Medium |
| Bedrock throttle errors | > 5 in 5 minutes | Low |
| ECS task count drops to 0 | Immediately | Critical |

## On-Call

On-call rotation is not yet established. Critical alerts will route to all engineers until a formal rotation is in place.
