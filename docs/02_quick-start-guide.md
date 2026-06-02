---
id: quick-start-guide
title: Quick Start Guide
sidebar_label: "🚀 Quick Start Guide"
---

import DownloadSection from '@site/src/components/download/DownloadSection.tsx';
import StepFlow from '@site/src/components/docs/StepFlow.tsx';
import DocVisualPlaceholder from '@site/src/components/docs/DocVisualPlaceholder.tsx';
import UseCaseExample from '@site/src/components/docs/UseCaseExample.tsx';
import ScreenshotFigure from '@site/src/components/docs/ScreenshotFigure';
import ScreenshotComparison from '@site/src/components/docs/ScreenshotComparison';
import ScreenshotSlideshow from '@site/src/components/docs/ScreenshotSlideshow';

This guide helps you get from a fresh installation to a first working result in StreamPipes.

The guide begins with installation and then walks through one complete first-run flow in the product.

## Before you start

The easiest way to install StreamPipes is the Docker-based installation.

<ScreenshotFigure
src="/img/2026/home-map.png"
alt="StreamPipes home page with the factory map overview"
title="Quickstart Home Overview"
caption="The quickstart home page highlights the main entry points and gives users a high-level overview of the available factory assets."
/>

<ScreenshotComparison
  title="Comparison Example"
  eyebrow="Style Check"
  summary="Use this component when documentation needs to contrast two related screens, for example two dashboard states or two setup outcomes."
  items={[
    {
      src: '/img/2026/home-map.png',
      alt: 'Home page with the map-based overview',
      title: 'Map-centric Overview',
      caption: 'A broad landing view that emphasizes navigation and spatial context.',
    },
    {
      src: '/img/2026/home-table.png',
      alt: 'Home page with the table-based overview',
      title: 'Table-centric Overview',
      caption: 'A denser operational view that emphasizes records and structured status information.',
    },
  ]}
/>

<ScreenshotSlideshow
  title="Slideshow Example"
  eyebrow="Style Check"
  badge="Preview"
  items={[
    {
      src: '/img/2026/login.png',
      alt: 'Login screen',
      title: 'Login',
      caption: 'The first step after installation is authenticating with the initial credentials.',
    },
    {
      src: '/img/2026/home-map.png',
      alt: 'Home page with map overview',
      title: 'Home Overview',
      caption: 'After sign-in, users land on the home screen and can orient themselves in the product.',
    },
    {
      src: '/img/2026/settings-site-create.png',
      alt: 'Site creation settings screen',
      title: 'Initial Configuration',
      caption: 'A later setup step can introduce more structured configuration views and forms.',
    },
  ]}
/>


### Prerequisites

You need:

- `Docker`
- `Docker Compose`
- a recent version of `Chrome`, `Firefox`, or `Edge`

The Docker-based installation is supported on:

- `Linux`
- `macOS`
- `Windows 10` and newer

:::info Install Docker
Go to [docs.docker.com](https://docs.docker.com/installation/) and follow the instructions for your operating system.

Make sure Docker can be started as a non-root user where required and verify the installation with a simple test such as `docker run hello-world`.
:::

## Install StreamPipes

Use the installation package below to start a local or test instance.

<DownloadSection version={'0.98.0'} releaseDate={'2025-12-15'}></DownloadSection>

For production-oriented setups, also review the Kubernetes-based deployment options that are part of the installation kit.

## Complete the initial setup

After starting StreamPipes and opening the provided URL in your browser, StreamPipes performs its initial installation flow.

To complete the first setup:

1. Open the StreamPipes URL in your browser.
2. Wait until the installation process finishes.
3. Click `Go to login page`.
4. Sign in with the credentials from your installation.

After login, you are ready to work in the web interface.

<DocVisualPlaceholder
  title="First login and home screen"
  purpose="Orient new users after installation and show that the main modules are ready to use."
/>

:::danger If installation components do not start
If the installation does not complete successfully, the most common reason is an underpowered local environment.

Check that:

- Docker has enough memory assigned
- all required containers are running
- you restarted the stack cleanly if the first startup failed

If necessary, stop the deployment, remove the containers, and start again with a clean state.
:::

## What you will build

After installation, this quick start takes you through one simple end-to-end workflow:

- create a sample adapter, ideally with a simulator source
- persist the events so StreamPipes creates a dataset
- create a chart from that dataset
- add the chart to a dashboard

The goal is not to explain every feature. The goal is to get one complete flow running so you understand how StreamPipes works as an industrial data platform.

<StepFlow
  steps={[
    {
      title: 'Connect a data source',
      body: 'Create one adapter in Connect so StreamPipes can start receiving events.',
    },
    {
      title: 'Create a reusable data stream',
      body: 'Publish the source into the platform as a managed stream other features can use.',
    },
    {
      title: 'Persist the data as a dataset',
      body: 'Enable persistence so live events become durable operational data.',
    },
    {
      title: 'Create a chart',
      body: 'Query the dataset and confirm that the data can be visualized correctly.',
    },
    {
      title: 'Place the chart on a dashboard',
      body: 'Turn the first chart into a reusable operational view for monitoring.',
    },
  ]}
/>

If you complete these steps once, the rest of the platform becomes much easier to understand.

<DocVisualPlaceholder
  title="Quick start overview"
  purpose="Show the first-run flow from Connect to Datasets, Charts, and Dashboards in one simple diagram."
/>

## Understand the first-run path

A good first StreamPipes experience is not to start with a complex pipeline. Start with a simpler path that proves the platform is working:

1. create one source in `Connect`
2. persist its events
3. confirm the dataset receives data
4. build one chart
5. add the chart to a dashboard

This gives you a concrete result quickly and introduces the main objects of the platform in the right order.

## Step 1: Connect a first data source

Open `Connect` and create a new adapter.

For a first test, a simulator adapter is usually the best choice because it lets you validate the platform flow without depending on an external machine or broker.

<UseCaseExample title="Recommended first source">
  Start with a simulator or sample-style adapter if one is available in your installation. It removes protocol and network uncertainty from the first run, so you can focus on learning the StreamPipes workflow itself.
</UseCaseExample>

To create the adapter:

1. Open `Connect`.
2. Click `New Adapter`.
3. Choose a sample or simulator-style adapter if one is available in your installation.
4. Configure the adapter parameters.
5. Move through the creation wizard until the final step.

If your preferred adapter is not visible, first install the required extension in `Configuration > Extensions`.

### What to pay attention to during adapter creation

While creating the adapter, do not rush through the wizard. The important idea is that StreamPipes does more than establish a connection.

During onboarding, you can already:

- validate incoming sample events
- refine the schema
- adjust field metadata
- add transformations if needed
- decide whether the stream should be persisted immediately

For the quick start, keep the schema simple and focus on getting a clean, running stream.

<DocVisualPlaceholder
  title="Connect wizard"
  purpose="Show adapter selection, sample preview, schema refinement, and start options in one current UI screenshot."
/>

## Step 2: Start the adapter and persist the events

On the final adapter step, give the adapter a clear name and enable persistence.

To do that:

1. Enter a meaningful adapter name.
2. Enable `Persist events`.
3. Start the adapter.

If your installation offers additional startup options such as asset linking or event-rate reduction, you can leave them at their defaults for the first run unless you already know you need them.

### Why persistence matters in the quick start

Persistence creates a dataset from the incoming events. That dataset becomes the basis for charts and dashboards.

Without persistence, you may still have a live stream, but you will not get the full chart and dashboard workflow that best demonstrates the current StreamPipes product model.

### What success looks like

After the adapter starts successfully:

- the stream is available in StreamPipes
- events begin to flow
- a dataset is created and starts filling with records

If no data appears later in the quick start, come back to this step first and verify that the adapter is actually running and persistence was enabled.

## Step 3: Check the dataset

Next, confirm that the persisted data is available as a dataset.

To do that:

1. Open `Datasets`.
2. Find the dataset created from your adapter.
3. Check the event counters.
4. Open the preview.

You should see incoming records and a schema that matches the data you connected.

This is the first important checkpoint in the quick start. Once data reaches a dataset, the rest of the workflow usually becomes straightforward.

<DocVisualPlaceholder
  title="Dataset overview and preview"
  purpose="Show where users confirm that persisted events are arriving and inspect the resulting schema."
/>

## Step 4: Create a chart

Now create a visualization from the dataset.

To create your first chart:

1. Open `Charts`.
2. Create a new chart.
3. Select the dataset from the dropdown.
4. Choose a query type such as `Raw`, `Aggregated`, or `Single`.
5. Configure the fields needed for the chart.
6. Use the preview to confirm the query result.
7. Choose a visualization type.
8. Save the chart.

For a first run:

- use `Single` when you want one current value
- use `Raw` when you want to see individual incoming events
- use `Aggregated` when you want to summarize values over time

### A simple first chart

If your sample data contains a numeric measurement such as temperature, pressure, speed, or fill level, start with a simple line chart or value view. These are the fastest visualizations to validate.

The goal here is not to build the perfect visualization. The goal is to confirm that the dataset can be queried and rendered correctly.

<DocVisualPlaceholder
  title="First chart creation"
  purpose="Show dataset selection, query preview, and visualization choice in the current chart workflow."
/>

## Step 5: Add the chart to a dashboard

Dashboards in the current StreamPipes version are built from saved charts.

To create a dashboard:

1. Open `Dashboards`.
2. Create a new dashboard.
3. Configure the basic dashboard settings.
4. Open the chart panel on the right side.
5. Add the chart you saved in the previous step.
6. Arrange the chart on the grid.
7. Save the dashboard.

At this point, you have completed a full first-use flow: from data onboarding to a reusable dashboard view.

### Why this matters

This is the moment where StreamPipes usually becomes clear to new users:

- `Connect` creates usable data streams
- `Datasets` preserve the data
- `Charts` query and visualize it
- `Dashboards` combine saved visualizations into an operational view

<DocVisualPlaceholder
  title="Dashboard editor with saved chart"
  purpose="Show the current dashboard model where saved charts are added from the side panel."
/>

## Optional next step: Build a pipeline

Once the quick start flow above works, the next logical step is to create a pipeline that transforms or enriches your live stream before persisting or visualizing it.

Open `Pipelines` when you want to:

- filter noisy data
- calculate KPIs
- combine processing steps
- send results to sinks
- create curated downstream datasets

For many users, pipelines make more sense after the basic source-to-visualization flow is already working.

## If something is missing

If you cannot complete one of the steps, the most common reasons are:

- the required adapter or sink is not installed
- the adapter is not running
- `Persist events` was not enabled
- no events are arriving from the source
- the dataset is empty, so the chart query has nothing to show

Check these in order. Most first-run issues are resolved by going one step upstream.

## Where to go next

After this quick start, continue with the feature guides for the areas you used:

- [Connect](04_use-connect.md)
- [Datasets](04_use-datasets.md)
- [Charts](04_use-charts.md)
- [Dashboards](04_use-dashboards.md)
- [Pipelines](04_use-pipelines.md)

If you want a better mental model before going deeper, read the concepts pages next:

- [Introduction](03_concepts-introduction.md)
- [Terms](03_concepts-terms.md)
- [Architecture](03_concepts-architecture.md)
