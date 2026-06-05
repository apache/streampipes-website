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

This guide helps you get from a fresh installation to a first working result in StreamPipes.

The guide begins with installation and then walks through one complete first-run flow in the product.

## Before you start

The easiest way to install StreamPipes is the Docker-based installation.


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

For production-oriented setups, also review the Kubernetes-based deployment options that are part of the installation kit or check the [Deployment](06_configure-operate-deployment.md) section.

After starting StreamPipes and opening the provided URL in your browser, StreamPipes performs its initial installation flow.

You should see the following login screen:

<ScreenshotFigure
src="/img/2026/login.png"
alt="Login screen"
title="Login Screen"
/>

After login, you are ready to work in the web interface.

:::danger If installation components do not start
If the installation does not complete successfully, the most common reason is an underpowered local environment.

Check that:

- Docker has enough memory assigned
- all required containers are running
- you restarted the stack cleanly if the first startup failed

If necessary, stop the deployment, remove the containers, and start again with a clean state.
:::

## First steps

After installation, this quick start takes you through one simple end-to-end workflow:

- create a sample adapter using the machine data simulator
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


### Step 1: Connect a first data source

Open `Connect` and create a new adapter.

For a first test, the `Machine Data Simulator` is usually the best choice because it lets you validate the platform flow without depending on an external machine or broker.

<UseCaseExample title="Recommended first source">
  Start with the Machine Data Simulator for your first adapter. It removes protocol and network uncertainty from the first run, so you can focus on learning the StreamPipes workflow itself.
</UseCaseExample>

To create the adapter:

1. Open `Connect`.
2. Click `New Adapter`.
3. Choose `Machine Data Simulator`.
4. Configure the `Machine Data Simulator`, e.g.,  by choosing the `Flow Rate` sensor and a frequency of `1000ms`.
5. Click `Next` to see a preview of the data. We don't apply any transformation script for now, so it's enough to click `Next`.
6. In the `Configure schema` section, choose the `timestamp` row and set the scope from `Measurement` to `Timestamp`.
7. Click `Next` to open the adapter settings view.

If your preferred adapter is not visible, first install the required extension in `Configuration > Extensions`.


### Step 2: Start the adapter and persist the events

On the final adapter step, give the adapter a clear name and enable persistence.

To do that:

1. Enter a meaningful adapter name.
2. Enable `Persist events`.
3. Start the adapter.

If your installation offers additional startup options such as asset linking or event-rate reduction, you can leave them at their defaults for the first run unless you already know you need them.

#### Why persistence matters in the quick start

Persistence creates a dataset from the incoming events. That dataset becomes the basis for charts and dashboards.

Without persistence, you may still have a live stream, but you will not get the full chart and dashboard workflow that best demonstrates the current StreamPipes product model.

#### What success looks like

After the adapter starts successfully:

- the stream is available in StreamPipes
- events begin to flow in the live preview dialog

If no data appears later in the quick start, come back to this step first and verify that the adapter is actually running and persistence was enabled.

### Step 3: Check the dataset

Next, confirm that the persisted data is available as a dataset.

To do that:

1. Open `Datasets`.
2. Find the dataset created from your adapter.
3. Check the event counters.
4. Open the preview.

You should see incoming records and a schema that matches the data you connected.

This is the first important checkpoint in the quick start. Once data reaches a dataset, the rest of the workflow usually becomes straightforward.

<ScreenshotFigure
src="/img/2026/dataset-overview.png"
alt="Dataset overview with event counts, retention column, and export provider section"
title="Dataset Overview"
/>

### Step 4: Create a chart

Now create a visualization from the dataset.

To create your first chart:

1. Open `Charts`.
2. Create a new chart.
3. Select the dataset from the dropdown.
4. Keep `Raw` as a query type.
5. In the fields selection, choose `Select all` to query all fields from the dataset.
6. Use the preview to confirm the query result.
7. Switch to the `Visualization` tab and choose `Time Series Chart` as visualization type.
8. Save the chart.

<ScreenshotFigure
src="/img/2026/chart-timeseries.png"
alt="Chart editor with time series visualization, toolbar, data preview, and visualization settings"
/>


### Step 5: Add the chart to a dashboard

Dashboards in the current StreamPipes version are built from saved charts.

To create a dashboard:

1. Open `Dashboards`.
2. Create a new dashboard.
3. Open the dashboard if it does not directly open.
4. Add the chart you saved in the previous step.
5. Arrange the chart on the grid.
6. Save the dashboard.

<ScreenshotFigure
src="/img/2026/dashboard-create.png"
alt="Dashboard view"
/>

At this point, you have completed a full first-use flow: from data onboarding to a reusable dashboard view.

### Optional next step: Build a pipeline

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
