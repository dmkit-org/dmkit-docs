---
sidebar_position: 1
---

# Monitoring Overview

:::note
Monitoring infrastructure is not yet configured. This section documents the planned approach.
:::

## Planned Stack

| Concern | Tool |
|---|---|
| Application logs | AWS CloudWatch Logs (ECS task logs via awslogs driver) |
| Metrics | AWS CloudWatch Metrics |
| Distributed tracing | AWS X-Ray |
| Uptime / availability | AWS CloudWatch Synthetics (canaries) |
| Alerts | CloudWatch Alarms → SNS → email / Slack |

## Key Signals to Monitor

**Backend API:**
- Request latency (p50, p95, p99)
- Error rate (5xx responses)
- ECS task CPU and memory utilisation
- DynamoDB read/write capacity and throttle events

**Frontend:**
- CloudFront cache hit rate
- CloudFront 4xx and 5xx error rate
- S3 origin request count

**AI generation:**
- Bedrock invocation count and latency
- Bedrock throttle errors
