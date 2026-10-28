---
title: "Apache StreamPipes compared with Telegraf, InfluxDB and Grafana"
authors: [dominikriemer]
image: /img/blog/covers/compare-telegraf-influxdb-grafana.png
tags: [comparison]
date: 2026-01-20
description: "Telegraf, InfluxDB and Grafana are a well-worn path for collecting and charting machine data. Where that path ends, and how StreamPipes relates to it."
---

A lot of teams start with the same three tools: Telegraf collects metrics, InfluxDB stores them, Grafana charts them. We used them ourselves before StreamPipes existed, and they are still a good choice for what they do. This post is about what the stack covers, what you tend to build around it over time, and where StreamPipes fits in, including the setup where StreamPipes writes into the same InfluxDB.

<!-- truncate -->

## What the stack does well

Telegraf has input plugins for OPC UA, Modbus, MQTT, SNMP and hundreds of other sources, and output plugins for InfluxDB and many other databases. InfluxDB is a time-series database with retention policies and a query language built for time-based analysis. Grafana is the standard for charting time-series data, with alerting and a large ecosystem of data sources and panels. If the task is "collect these metrics and chart them", the three tools do it with little effort, and all of them are open source.

## What you build around it

The stack has no shared model of what a stream is. Field names, units and types are conventions in Telegraf configuration files, repeated per source. There is no event preview while configuring a source, no catalog of streams, and no place where a line or machine is modelled so that its data can be found from the asset. Processing is limited to Telegraf's processor plugins and database-side queries; reacting to a live event, for example detecting a trend and notifying a team, means another component such as Kapacitor, Grafana alert rules or custom code. Users and permissions exist in Grafana, not across the pipeline. Extending the stack means writing Telegraf plugins in Go and deploying new agents.

None of this is a flaw. The stack is a set of focused tools, and teams with enough engineering time assemble them into a platform. The point is that the assembly is yours to do and to maintain.

## What StreamPipes adds

StreamPipes is that platform, already assembled. Adapters connect sources with a guided setup that shows incoming events and lets you set names, units and metadata once. The resulting typed streams drive pipelines that filter, enrich, detect and route in real time, with processors and sinks installed at runtime and validated against the schema. Datasets keep history with retention and export. Charts and dashboards are built on datasets, and assets and sites make them discoverable per machine. Roles, groups, permissions, single sign-on and an audit log cover the whole platform. Python and Java clients and an SDK extend it.

The storage underneath is a time-series database, and one of the included sinks writes to InfluxDB. Grafana can keep charting the data it already has, while StreamPipes handles connectivity, processing, context and history.

## Side by side

| Topic | Telegraf, InfluxDB, Grafana | Apache StreamPipes |
|---|---|---|
| Connect a source | Telegraf input plugin, configured in files | Adapter with guided setup and event preview |
| Schema, units, metadata | Conventions per configuration | Typed streams, set once, shared by all features |
| Real-time processing | Processor plugins, external alerting | Pipelines with processors and sinks, Functions |
| History | InfluxDB retention policies | Datasets with retention, archival and export |
| Visualization | Grafana | Built-in charts and dashboards; Grafana via InfluxDB sink |
| Asset context | Not modelled | Assets and sites |
| Access control and audit | Grafana users and teams | Platform-wide roles, groups, SSO, audit log |
| Extensibility | Go plugins | SDK for adapters, processors and sinks; Java and Python Functions |

## Choosing

Keep the stack if what you need is metrics and charts, your team is happy assembling tools, and Grafana is already the house standard. Use StreamPipes when the sources are industrial, when several people need a shared and governed view of the data, and when real-time processing and history should come out of one platform. The two meet at InfluxDB: StreamPipes can feed it, and Grafana can read it. The [quickstart](/docs/quick-start-guide/) takes about ten minutes.
