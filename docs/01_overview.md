---
id: user-guide-introduction
title: Apache StreamPipes Documentation
sidebar_label: Overview
---

import StepFlow from '@site/src/components/docs/StepFlow.tsx';
import FeatureList from '@site/src/components/docs/FeatureList.tsx';
import UseCaseExample from '@site/src/components/docs/UseCaseExample.tsx';
import ScreenshotSlideshow from '@site/src/components/docs/ScreenshotSlideshow';

Apache StreamPipes is an open-source data platform for the Industrial IoT.
It helps teams set up an on-premise, extensible environment for connecting machines and software systems, turning incoming events into reusable data streams, processing those streams in real time, persisting historical data, and building charts and dashboards on top.
For developers, StreamPipes offers interfaces to extend the software with custom plugins, and provides client libraries to interact with resources programmatically.

This page is the entry point to the documentation.
It helps you understand what StreamPipes does, what the documentation covers, and where to start depending on your goal.

## The most important facts

<FeatureList
  items={[
    {
      title: 'StreamPipes is an industrial data platform',
      text: 'A complete IoT and industrial data platform that covers ingestion, stream processing, historical data, visualization, context modeling, and platform administration.',
    },
    {
      title: 'It can serve as your open-source IoT data infrastructure',
      text: 'StreamPipes is designed so teams can build and operate their own on-premise industrial data stack instead of stitching together separate proprietary tools for ingestion, storage, processing, and visualization.',
    },
    {
      title: 'The main user flow starts with connected data',
      text: 'In most cases, users begin in Connect, create or refine streams, optionally persist them as datasets, and then use them in pipelines, charts, dashboards, and assets.',
    },
    {
      title: 'Live and historical data work together',
      text: 'StreamPipes supports both data in motion and data at rest. A stream can drive live processing while also becoming a dataset for later exploration and visualization.',
    },
    {
      title: 'The platform is intentionally extensible',
      text: 'You can start with the built-in capabilities and extend the platform later with custom adapters, processors, sinks, and UI modules when your infrastructure or domain requires it.',
    }
  ]}
/>

## Screenshots

Here are some screenshots that help you understand what you can do with StreamPipes:

<ScreenshotSlideshow
title="StreamPipes Features"
items={[
{
src: '/img/2026/home-map.png',
alt: 'Home screen',
title: 'Home screen',
caption: 'The home screen shows a list of assets and resources in a map-style or table view.',
},
{
src: '/img/2026/connect-create-select-adapter.png',
alt: 'Adapters for industrial connectivity',
title: 'Adapters for industrial connectivity',
caption: 'Connect data from a large number of supported protocols like S7, OPC UA, Modbus or MQTT.',
},
{
src: '/img/2026/chart-timeseries.png',
alt: 'Chart library',
title: 'Chart library',
caption: 'Visualize data in a single platform using an extensive chart library.',
},
{
src: '/img/2026/dashboard-create.png',
alt: 'Dashboards',
title: 'Dashboards',
caption: 'Configure dashboards for shopfloor monitoring and more.',
},
{
src: '/img/2026/pipeline-editor-example.png',
alt: 'Pipelines',
title: 'Pipelines',
caption: 'Create pipelines for streaming data analytics to analyze machine data on-the-fly.',
},
{
src: '/img/2026/asset-create.png',
alt: 'Assets',
title: 'Assets',
caption: 'Assign resources to assets to organize your industrial data sources.',
},
]}
/>

## What you can do with StreamPipes

In practice, StreamPipes combines several jobs that are often spread across separate tools:

<StepFlow
  steps={[
    {
      title: 'Connect industrial and software sources',
      body: 'Use adapters to bring machine data, broker data, and other source events into the platform.',
    },
    {
      title: 'Refine and govern event structures',
      body: 'Inspect sample events, shape schemas, enrich field metadata, and normalize streams before other users rely on them.',
    },
    {
      title: 'Process streams in real time',
      body: 'Build pipelines with processors and sinks for filtering, enrichment, routing, notification, storage, and analytics.',
    },
    {
      title: 'Store and explore historical data',
      body: 'Persist streams as datasets so they can be inspected later, downloaded, governed, and reused in charts and dashboards.',
    },
    {
      title: 'Build operational views',
      body: 'Create charts from datasets and combine saved charts into dashboards for monitoring, analysis, and communication.',
    },
  ]}
/>

<UseCaseExample title="A simple StreamPipes workflow">
  A team connects a machine data source from OPC UA, persists the stream as a dataset, creates a chart to validate the data, and then adds that chart to a dashboard used by operators and engineers.
</UseCaseExample>

## StreamPipes as infrastructure

One of the most important points to understand is that StreamPipes is not only a convenient UI for selected data tasks.
It can be used as the foundation of an open-source IoT and industrial data infrastructure that teams run themselves.

This is especially relevant when you want to:

- keep industrial data on-premise
- control how ingestion, processing, storage, and visualization are combined
- avoid building a fragmented toolchain around many separate products
- establish one reusable platform for multiple plants, teams, or use cases

In that role, StreamPipes provides a coherent operating model across:

- source onboarding
- real-time processing
- historical persistence
- visualization and monitoring
- industrial context modeling
- extension and administration

The platform is also intentionally extensible.
Teams can start with built-in functionality and later add custom adapters, processors, sinks, or user interface extensions when company-specific infrastructure or domain logic requires it.

## How the documentation is organized

The documentation is structured around the main stages of using and operating the platform.

### Start here if you are new

- [Quick Start Guide](02_quick-start-guide.md): install StreamPipes and get one complete first workflow running
- [Introduction](03_concepts-introduction.md): understand what StreamPipes is and where it fits
- [Terms](03_concepts-terms.md): learn the core platform objects such as adapters, streams, processors, sinks, assets, and datasets

### Read these pages to use the product

- [Connect IoT Data](04_use-connect.md): onboard and operate data sources
- [Pipelines](04_use-pipelines.md): process live streams in real time
- [Datasets](04_use-datasets.md): work with persisted historical data
- [Charts](04_use-charts.md): query datasets and build visualizations
- [Dashboards](04_use-dashboards.md): assemble saved charts into monitoring views
- [Assets & Sites](04_use-assets.md): attach data to industrial structure and context

### Read these pages to operate the platform

- [General Settings](06_configure-operate-general-settings.md): configure instance-wide behavior
- [Manage Extensions](06_configure-operate-extensions.md): install and manage adapters, processors, and sinks
- [Extension Services](06_configure-operate-extension-services.md): inspect services, update service configuration, and manage certificates
- [Security](06_configure-operate-security.md): manage access and security-related configuration

### Read these pages to extend StreamPipes

- [Setup](07_extend-setup.md): prepare a development environment
- [CLI](07_extend-cli.md): scaffold and manage extension work
- [First Processor](07_extend-first-processor.md): build a first extension step by step
- [Customize UI](07_extend-customize-ui.md): extend the user interface

## Where most users should begin

If you are using StreamPipes for the first time, this is the recommended reading path:

1. [Quick Start Guide](02_quick-start-guide.md)
2. [Introduction](03_concepts-introduction.md)
3. [Connect IoT Data](04_use-connect.md)
4. [Datasets](04_use-datasets.md)
5. [Charts](04_use-charts.md)
6. [Dashboards](04_use-dashboards.md)
7. [Pipelines](04_use-pipelines.md)

This order works well because it follows the platform from ingestion to reuse instead of starting with the most complex modeling features first.

## Who this documentation is for

Different readers usually come to StreamPipes with different goals.

<FeatureList
  items={[
    {
      title: 'Operators and process experts',
      text: 'You usually want to connect data, inspect it, and turn it into operational views without building a custom data stack from scratch.',
      example: 'Start with Quick Start, Connect, Datasets, Charts, Dashboards, and Assets.',
    },
    {
      title: 'Data and analytics teams',
      text: 'You usually care about clean event structures, reusable historical data, and a governed path from raw machine signals to analysis-ready datasets.',
      example: 'Start with Concepts, Connect, Datasets, Charts, and Pipelines.',
    },
    {
      title: 'Platform and integration engineers',
      text: 'You usually need to understand extension installation, service configuration, security, deployment, and how the platform fits into the broader OT and IT landscape.',
      example: 'Start with Architecture, Configure & Operate, Extensions, and Extension Services.',
    },
    {
      title: 'Developers extending the platform',
      text: 'You usually need to understand the event model, extension points, SDK structure, and how custom adapters, processors, sinks, or UI modules fit into the system.',
      example: 'Start with Extend and then use the SDK-related pages as reference.',
    },
  ]}
/>

## What StreamPipes is not

It also helps to set expectations correctly.

StreamPipes is not:

- only a dashboard tool
- only a pipeline editor
- only a protocol adapter collection
- only a storage layer for time-series data

It becomes most useful when you use it as one connected platform for industrial data onboarding, processing, persistence, visualization, and governance.

## Recommended next step

If you want the fastest path to a first result, continue with the [Quick Start Guide](02_quick-start-guide.md).

If you want the mental model first, continue with [Introduction](03_concepts-introduction.md).
