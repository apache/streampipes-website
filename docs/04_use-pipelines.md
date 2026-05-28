---
id: use-pipelines
title: Pipelines
sidebar_label: Pipelines
---

The pipeline editor module supports building pipelines that transform a data stream using a set of resuable data processors and data sinks.
The empty pipeline editor looks similar to the illustration below after a new installation.

<img className="docs-image" src="/img/03_use-pipeline-editor/01_pipeline-editor-overview.png" alt="StreamPipes Pipeline Editor Overview"/>

## Pipeline Elements
The four main concepts data sets, data streams, data processors and data sinks are available at the top of the pipeline editor. By switching the tabs, the individual pipeline elements for each category can be found.
By clicking the questionmark symbol, which appears when hovering over an element, additional information can be viewed (e.g., for data streams a live preview of incoming data and the documentation of the pipeline element for data processors and sinks).

<img className="docs-image" src="/img/03_use-pipeline-editor/02_pipeline-element-info.png" alt="StreamPipes Pipeline Element Info"/>

## Creating Pipelines
Pipelines are built by dragging data streams, processors and sinks into the pipeline assembly area. Typically, a pipeline is built step-by-step starting with a data soure (stream or set). 
Afterwards, data processors and sinks are subsequently added to the pipeline. Connections between pipeline elements are made by selecting the gray connector of the source and moving it to the target pipeline element.
Once a connection is made, StreamPipes performs a quick validation step and, in case two pipeline elements are compatible, automatically opens a configuration window.

### Configuring Pipeline Elements
The configuration depends on the selected pipeline element and looks similar to the screenshot below.
In general, pipeline elements are configured by providing the required values. Once the pipeline element is fully configured, the _Save_ button activates and can be used to save the configuration for the pipeline element.

<img className="docs-image" src="/img/03_use-pipeline-editor/03_configure-pipeline-element.png" alt="StreamPipes Pipeline Element Configuration"/>

In addition, the following options are available in the pipeline element configuration menu:
* **Show documentation** extends the view and displays the pipeline element's documentation next to the configuration view.
* **Show only recommended settings** filters the list of available fields provided by the connected input data stream based on the _property scope_, e.g., so that only measurement values are displayed and dimension fields from the input stream are not available for selection. If deactivated, selections contain the full list of available fields that match the input requirement of the data processor.

### Pipeline Element Options
Further options for a pipeline element can be displayed by hovering over a pipeline element in the assembly area, so that additional buttons appear around the pipeline element:

* **Configure element** re-opens the configuration view to update the pipeline element configuration (only available for data processors and sinks)
* **Delete element** removes the pipeline element from the pipeline  
* **Help** opens the pipeline element's documentation
* **Compatible element** opens a dialog which shows all pipeline elements that are compatible to the current element's output data stream. The dialog offers an alternative to selecting pipeline elements directly from the pipeline element selection in the top.
* **Pipeline Element Recommendation** opens a dialog which shows all recommended pipeline elements that are compatible the current element's output data stream. The recommendation is based on previously connected pipeline elements and is displayed below.

### Pipeline Editor Options
Several pipeline editor options are available in the menu bar of the pipeline assembly:

<img className="docs-image" src="/img/03_use-pipeline-editor/05_pipeline-editor-options.png" alt="StreamPipes Pipeline Editor Options"/>

* **Save pipeline** opens the save dialog (see below)
* **Pan** allows to pan within the assembly area, useful for larger pipelines that do not fit in the screen
* **Select** is visible if pan mode is active and switches back to the default select mode
* **Zoom in/out** triggers the zoom in the pipeline assembly
* **Auto Layout** layouts the pipeline in a much more beautiful way than you are able to do by yourself ;-)
* **All pipeline modification saved** is displayed if the current pipeline has been cached. Cache updates are triggered after every change of the pipeline so that changes are not lost after reloading the window.
* **Hints** are shown to display current errors (e.g., incomplete pipelines). Details can be opened by clicking the hint button.
* **Clear assembly** clears the assembly and removes the current pipeline.

### Saving a pipeline
To save a pipeline, press the _save pipeline_ button. A dialog pops up where a name and description of the pipeline can be entered (only name is mandatory).
Additionally, a pipeline can be directly started after it has been stored by checking the corresponding button.

<img className="docs-image" src="/img/03_use-pipeline-editor/06_save-pipeline.png" alt="StreamPipes Save Pipeline Dialog"/>


The pipeline view lists all created pipelines and provides several views and actions to manage the lifecycle of pipelines.

In the entry screen, an overview of all created pipelines is shown:

<img className="docs-image" src="/img/03_use-managing-pipelines/01_pipeline-overview.png" alt="StreamPipes Pipeline Overview"/>

## Pipeline Actions
Within the pipeline overview, for each pipeline several actions are available:
* **Start/Stop pipeline** Starts or stops the selected pipeline. Once clicked, StreamPipes will trigger the selected action for all pipeline elements and open a success or error dialog as illustrated below.
* **Show details** opens the pipeline detail view (see below).
* **Modify pipeline** opens the pipeline in the pipeline editor, where the pipeline can be modified. Note that this button is only visible if the pipeline is not running.
* **Delete pipeline** opens a confirm dialog, which subsequently deletes the selected pipeline.

The screenshot below shows the status of a pipeline after it has been successfully started. By clicking the _Show details_ button, more information on the status of each corresponding pipeline element microservice becomes available. In case of failures, the failure reason will be shown for each pipeline element that has failed to start.

<img className="docs-image" src="/img/03_use-managing-pipelines/02_pipeline-start-dialog.png" alt="StreamPipes Pipeline Start Dialog"/>

## Organizing Pipelines into Categories
Pipelines can be organized into categories, which is a useful feature in case a larger amount of pipelines is created.
All categories will be shown as separate tabs in the pipeline overview. The same pipeline can be assigned to multiple categories.

To add a new category or to add a new pipeline to an existing category, click the _Manage Categories_ button and configured the category and assigned pipelines in the dialog.

## Pipeline Details
The pipeline details view can be opened by clicking the _Show details_ button in the pipeline overview panel.

<img className="docs-image" src="/img/03_use-managing-pipelines/03_pipeline-details.png" alt="StreamPipes Pipeline Details"/>

### Overview
The overview section displays the graphical structure of the pipeline and provides some statistics about recent pipeline actions. Additionally, pipelines can be directly started, stopped, modified and deletes within this view.

### Monitoring
Monitoring features will become available in version 0.68.0.

### Errors
Monitoring of failures and logs will become available in version 0.69.0.

### QuickEdit
The quick edit feature (only available for pipelines that are not running) is a quick and convenient way to modify some pipeline element configurations without opening the pipeline in the pipeline editor.
To use the quick edit feature, switch to the _QuickEdit_ tab, which will display the selected pipeline.

By clicking a pipeline element from the preview canvas, available configuration options of the selected pipeline element can be modified. Note that only modifications that do not affect the pipeline structure (e.g., different output streams) can be changed.

<img className="docs-image" src="/img/03_use-managing-pipelines/04_pipeline-quick-edit.png" alt="StreamPipes Pipeline Quick Edit"/>

After a configuration value was changed, make sure to click the _Update Pipeline_ button to save the changes.


In Apache StreamPipes, pipelines represent the flow of data from sources (streams), through processors (filters, transformations, etc.), and finally to sinks (third-party-systems, storage, notifications).
Traditionally, pipelines are created through the web-based user interface.
However, they can also be defined programmatically as code, offering the flexibility to manage pipelines using Infrastructure as Code (IaC) practices.

This guide explains how to define and create pipelines programmatically using a YAML structure.

## Introduction

Defining pipelines as code allows you to automate the creation, management, and deployment of StreamPipes pipelines.
This is especially useful for managing multiple StreamPipes instances across environments.
Pipelines are written in a YAML format (or alternatively as JSON) and can be deployed programmatically via the StreamPipes REST API.

This guide provides an overview of how to structure pipeline definitions in YAML and deploy them using the API.

## Pipeline YAML Structure

A pipeline in YAML consists of several key sections:

- **ID**: A unique identifier for the pipeline.
- **Name and Description**: Optional fields to describe the pipeline.
- **Pipeline Elements**: The components that make up the pipeline, including streams (data sources), processors (data transformations), and sinks (output destinations).
- **Create Options**: Specifies how and when to start the pipeline (e.g., `start: false` means the pipeline won't start automatically).

Here’s a high-level breakdown of the structure:

```yaml
id: my-pipeline
name: ""
description: ""
pipelineElements:  # Define pipeline components here
  - type: stream     # Data source
    ref: <reference> # Unique reference ID
    id: <data-stream-id> # ID of the stream

  - type: processor  # Data transformation
    ref: <reference> # Unique reference ID
    id: <processor-id> # ID of the processor
    connectedTo:     # Previous pipeline element reference(s)
      - <reference>
    configuration:   # Processor-specific configurations
      - <configuration-option>

  - type: sink       # Data sink (output)
    ref: <reference> # Unique reference ID
    id: <sink-id>    # ID of the sink
    connectedTo:     # Previous pipeline element reference(s)
      - <reference>
    configuration:   # Sink-specific configurations
      - <configuration-option>

createOptions:
  start: <true|false>  # Whether to start the pipeline immediately
```

## Pipeline Elements

### Building blocks

The key building blocks of a pipeline include:

#### Stream
A stream represents a data source in the pipeline, such as a sensor feed, API, or message queue. It is referenced by a unique ID that identifies the data stream.

#### Processor
A processor transforms, filters, or enriches the data coming from a stream or another processor. Each processor has configuration parameters that control its behavior, such as filtering criteria or mapping options.

#### Sink
A sink sends the processed data to a final destination, such as a database, file storage, or another service. Sinks may also have configuration options that specify where and how the data should be sent.

A pipeline element is selected by providing its ID. For processors and sinks, the ID  refers to the `appId` of the pipeline element, e.g., `org.apache.streampipes.processors.filters.jvm.numericalfilter`.
For data streams, the ID refers to the `elementId` of the data stream.

To define connections between pipeline elements, the `ref` and `connectedTo` fields can be used.
`ref` can be a short string (e.g., `stream01` or `processor01`) which will be used as an internal identifier of the pipeline element.
Within the `connectedTo` list, connections to other pipeline elements can be defined.
Each item of the list should relate to an existing `ref`.

### Configuration

In the `configuration` section, which only applies for data processors and sinks, the pipeline element configuration can be applied.
The configuration options depend on the pipeline element and have the same structure as the adapter configuration (see [Adapters as Code](use-programmatically-create-adapters))
The easiest way to determine a valid configuration is the web interface.

After creating a pipeline in the web interface and clicking on `Save pipeline`, the option `Show pipeline configuration as code` shows the current pipeline configuration in YAML or JSON format:

<img className="docs-image" src="/img/03_use-programmatically-create-pipelines/01_pipeline-editor-pipeline-as-code.png" alt="StreamPipes Pipeline Editor Code View"/>

Another option is to view the pipeline details for an existing pipeline. Here, the YAMl definition of the pipeline can be viewed by clicking the `View pipeline as code` button:

<img className="docs-image" src="/img/03_use-programmatically-create-pipelines/02_pipeline-details-pipeline-as-code.png" alt="StreamPipes Pipeline Editor Code View"/>


## Example pipeline as Code

Here's an example of a pipeline written in YAML format:

```yaml
id: my-pipeline
name: "Density Filter Pipeline"
description: "A pipeline that filters data based on the density and stores it in a data lake."
pipelineElements:
  - type: stream
    ref: stream01
    id: sp:spdatastream:GWWzMD
  - type: processor
    ref: processor01
    id: org.apache.streampipes.processors.filters.jvm.numericalfilter
    connectedTo:
      - stream01
    configuration:
      - number-mapping: s0::density
      - operation: <
      - value: "12"
  - type: sink
    ref: sink01
    id: org.apache.streampipes.sinks.internal.jvm.datalake
    connectedTo:
      - processor01
    configuration:
      - timestamp_mapping: s0::timestamp
      - db_measurement: my-measurement
      - schema_update: Update schema
      - dimensions_selection:
          - sensorId
      - ignore_duplicates: false
createOptions:
  start: false
```

Stream: The pipeline begins with a data stream (sp:spdatastream:GWWzMD) referenced by stream01. This is the source of the data.

Processor: The data is passed through a numerical filter processor (org.apache.streampipes.processors.filters.jvm.numericalfilter) which checks if the field s0::density is less than 12. The filter is connected to the stream via reference stream01.

Sink: The filtered data is then sent to a data lake (org.apache.streampipes.sinks.internal.jvm.datalake). The sink is configured with several parameters including the mapping of the timestamp (s0::timestamp) and schema update options. The sink is connected to the processor via reference processor01.

Create Options: The pipeline is set to not start automatically (start: false).

## API

To create a new pipeline, call the StreamPipes API as follows:

```
POST /streampipes-backend/api/v2/compact-pipelines
Content-type: application/yml
Accept: application/yml
```

You must provide valid credentials by either adding a Bearer token or an API key:

```
X-API-USER: your username
X-API-KEY: your api key
```

The body of the request should contain the YAML definition.

:::info
It is also possible to provide the pipeline specification as a JSON document. In this case, change the `Content-type` to `application/json`.
