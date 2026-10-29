---
id: configure-operate-audit-logging
title: Audit Logging
sidebar_label: Audit Logging
---

## Introduction

Audit logging records selected administrative and data-management actions in StreamPipes. It provides an operational record of those actions together with the non-sensitive context captured for them. Audit events are written to a dedicated InfluxDB database.

Audit logging is disabled by default. Enable it only after providing a reachable InfluxDB endpoint and credentials for the audit database.

## Enable audit logging

Configure the following environment variables on the StreamPipes backend service, then restart the service. In a Docker Compose deployment, add them to the `environment` section of the `backend` service; use the equivalent environment-variable mechanism for Kubernetes or another deployment platform.

```yaml
environment:
  SP_AUDIT_ENABLED: "true"
  SP_AUDIT_INFLUX_URL: "http://localhost:8086"
  SP_AUDIT_INFLUX_DATABASE: "audit"
  SP_AUDIT_INFLUX_TOKEN: "sp-admin"
  SP_AUDIT_RETENTION_SCHEDULER_CRON: "0 0 10 * * *"
```

| Variable | Purpose |
|---|---|
| `SP_AUDIT_ENABLED` | Enables audit logging when set to `true`. |
| `SP_AUDIT_INFLUX_URL` | URL of the InfluxDB instance that stores audit events. |
| `SP_AUDIT_INFLUX_DATABASE` | Name of the database used for audit events. |
| `SP_AUDIT_INFLUX_TOKEN` | Token used to authenticate against the audit InfluxDB instance. Treat this value as a secret. |
| `SP_AUDIT_RETENTION_SCHEDULER_CRON` | Six-field cron expression that schedules the audit-retention job. The example runs it daily at 10:00. |

Use an InfluxDB endpoint that is reachable from the backend container or pod. Do not commit a real `SP_AUDIT_INFLUX_TOKEN` to a Compose file or source repository; provide it through your deployment platform's secret-management mechanism instead.

## Recorded information

Each event records the action. Where an action needs additional context, StreamPipes captures the metadata described below. Sensitive configuration values and credentials are intentionally not included.

| Audit event | Description | Additional information tracked |
|---|---|---|
| `sp.export.download` | Export package downloaded | Up to 100 asset IDs, total asset count, overwrite-existing-documents flag, and override-broker-settings flag |
| `sp.import.execute` | Asset import executed | Up to 100 asset IDs, total asset count, overwrite-existing-documents flag, and override-broker-settings flag |
| `sp.export-provider.create` | Export provider created | Provider type |
| `sp.export-provider.update` | Export provider updated | Provider type and names of changed provider fields |
| `sp.export-provider.delete` | Export provider deleted | Provider type |
| `sp.file.upload` | File upload attempted | File type |
| `sp.file.delete` | File deletion attempted | — |
| `sp.mail.configuration.update` | Mail configuration updated | Names of changed mail-configuration fields; no configuration values |
| `sp.mail.template.update` | Mail template updated | — |
| `sp.dataset.data.delete` | Dataset data deleted for a time range | Start and end timestamps |
| `sp.dataset.data.truncate` | Dataset data truncated | — |
| `sp.dataset.drop` | Dataset dropped | — |
| `sp.dataset.data.clear` | All dataset data cleared | — |
| `sp.dataset.retention.configure` | Dataset retention configured | — |
| `sp.dataset.retention.remove` | Dataset retention removed | — |
| `sp.dataset.retention.run` | Dataset retention job executed | — |
| `sp.dashboard.create` | Dashboard created | — |
| `sp.dashboard.edit` | Dashboard edited | — |
| `sp.dashboard.delete` | Dashboard deleted | — |
| `sp.chart.create` | Chart created | — |
| `sp.chart.edit` | Chart edited | — |
| `sp.chart.delete` | Chart deleted | — |
| `sp.asset.create` | Asset created | — |
| `sp.asset.edit` | Asset edited | — |
| `sp.asset.delete` | Asset deleted | — |
| `sp.pipeline.create` | Pipeline creation attempted | — |
| `sp.pipeline.start` | Pipeline start attempted | — |
| `sp.pipeline.stop` | Pipeline stop attempted | `forced` |
| `sp.pipeline.edit` | Pipeline edit attempted | — |
| `sp.adapter.create` | Adapter created through Connect | Stream ID and adapter-creation reason code; no adapter configuration or credentials |
| `sp.adapter.start` | Adapter start attempted | — |
| `sp.adapter.stop` | Adapter stop attempted | `forced` |
| `sp.adapter.edit` | Adapter edit attempted | List of recorded changes |
