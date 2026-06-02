---
id: concepts-introduction
title: Introduction
sidebar_label: Introduction
---

## What is Apache StreamPipes?

Apache StreamPipes is an open-source platform for working with industrial data in motion.
It helps teams connect machines, sensors, brokers, and software systems, turn incoming events into structured data streams, and build processing flows without starting from a custom integration stack.

In practice, StreamPipes combines several tasks that are often spread across multiple tools:

* connecting to OT and IT systems
* modeling and validating event schemas
* transforming and enriching live data
* forwarding data to databases, brokers, and business systems
* storing and exploring historical time-series data
* building dashboards and visual monitoring views

This makes StreamPipes especially useful when you want to move from isolated machine data to a maintainable data product that operators, engineers, and developers can all work with.

:::info Suggested image placeholder
**Image idea:** Product overview screenshot that shows the main modules in one view, for example Connect, Pipelines, Charts, and Dashboards.  
**Purpose:** Give new readers an immediate visual impression of StreamPipes as one integrated platform.
:::

## What problem does StreamPipes solve?

Industrial data projects usually start with a simple question: "How do we get data from machines into applications that can use it?"
The difficult part is not only reading the data source.
The real effort is typically in everything around it:

* handling many protocols and source formats
* creating a stable event structure
* enriching raw values with context
* routing data to the right downstream systems
* making data accessible to users who are not software developers
* operating the resulting stack securely and consistently

Without an integrated platform, these tasks are often split across protocol adapters, message brokers, custom scripts, dashboards, storage systems, and alerting tools.
That can work for prototypes, but it becomes expensive to maintain once multiple plants, teams, or use cases are involved.

StreamPipes reduces this integration overhead by providing one platform for the full path from ingestion to action.

## Who is StreamPipes for?

StreamPipes is designed for teams that work with industrial or machine-related event data and need both usability and extensibility.
Typical users include:

* operations and process experts who want to configure data flows without writing everything from scratch
* data and analytics teams who need clean, reusable event streams for downstream analysis
* platform and integration engineers who want a structured way to connect industrial assets
* developers who need extension points for custom adapters, processors, sinks, or UI modules

The platform is therefore not only a user interface for pipelines.
It is also a developer platform that can be adapted to company-specific infrastructure and domain logic.

## How StreamPipes fits into the data flow

At a high level, StreamPipes supports the full lifecycle of industrial event data:

1. **Connect data sources** using adapters for protocols, devices, brokers, or custom integrations.
2. **Normalize and describe events** so that data arrives with a clear structure and metadata.
3. **Process streams in real time** with filters, enrichments, transformations, and analytics logic.
4. **Deliver results** to storage systems, brokers, notifications, dashboards, or external applications.
5. **Explore and monitor data** through built-in visual tools and live views.

This flow is reflected in the core concepts of StreamPipes, which are described in more detail in the [Terms](03_concepts-terms.md) section:

* **Adapters** ingest data from external systems.
* **Data Streams** represent structured event streams inside StreamPipes.
* **Data Processors** transform or analyze those streams.
* **Data Sinks** persist, forward, or visualize the results.
* **Pipelines** connect these building blocks into executable flows.

:::info Suggested image placeholder
**Image idea:** Simple left-to-right lifecycle diagram: Source System -> Adapter -> Data Stream -> Processor -> Sink -> Dashboard/Database.  
**Purpose:** Help readers understand the basic execution model before they see detailed terminology.
:::

## Where StreamPipes helps most

StreamPipes is a strong fit when you need to build repeatable industrial data workflows, not just one-off integrations.
Common scenarios include:

* connecting PLCs, MQTT brokers, OPC UA servers, and similar systems to a shared data platform
* enriching raw telemetry before it is stored or forwarded
* implementing rule-based monitoring and event-driven reactions
* preparing live data for dashboards, analytics, or machine learning
* giving multiple teams a shared environment for ingestion, processing, and exploration

Compared with loosely coupled toolchains, StreamPipes offers a more consistent operating model.
Security, user management, pipeline lifecycle management, and extension handling can be managed within one platform instead of being assembled separately around each use case.

## StreamPipes as a platform

One of the key ideas behind StreamPipes is extensibility.
The platform includes many built-in pipeline elements, but it is not limited to them.
You can adapt StreamPipes to your domain in several ways:

* build custom adapters for proprietary devices or protocols
* add custom data processors and sinks for company-specific logic
* integrate Python- or Java-based functionality into processing workflows
* extend the user interface with additional views or micro frontends
* tailor the platform to internal branding and operational requirements

This allows teams to start with standard building blocks and gradually move toward specialized solutions without replacing the platform.

:::info Suggested image placeholder
**Image idea:** Extension map or annotated screenshot showing built-in elements plus custom extensions.  
**Purpose:** Communicate that StreamPipes is both ready to use and intentionally extensible.
:::

## What to read next

After this introduction, the best next steps are:

* [Terms](03_concepts-terms.md) to understand the platform building blocks such as adapters, streams, assets, and datasets
* [Architecture](03_concepts-architecture.md) to understand how StreamPipes implements these concepts technically
