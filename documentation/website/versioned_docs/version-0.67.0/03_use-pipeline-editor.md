---
id: version-0.67.0-use-pipeline-editor
title: Pipeline Editor
sidebar_label: Pipeline Editor
original_id: use-pipeline-editor
---

The pipeline editor module supports building pipelines that transform a data stream using a set of resuable data processors and data sinks.
The empty pipeline editor looks similar to the illustration below after a new installation.

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/01_pipeline-editor-overview.png" alt="StreamPipes Pipeline Editor Overview">

## Pipeline Elements
The four main concepts data sets, data streams, data processors and data sinks are available at the top of the pipeline editor. By switching the tabs, the individual pipeline elements for each category can be found.
By clicking the questionmark symbol, which appears when hovering over an element, additional information can be viewed (e.g., for data streams a live preview of incoming data and the documentation of the pipeline element for data processors and sinks).

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/02_pipeline-element-info.png" alt="StreamPipes Pipeline Element Info">

## Creating Pipelines
Pipelines are built by dragging data streams, processors and sinks into the pipeline assembly area. Typically, a pipeline is built step-by-step starting with a data soure (stream or set). 
Afterwards, data processors and sinks are subsequently added to the pipeline. Connections between pipeline elements are made by selecting the gray connector of the source and moving it to the target pipeline element.
Once a connection is made, StreamPipes performs a quick validation step and, in case two pipeline elements are compatible, automatically opens a configuration window.

### Configuring Pipeline Elements
The configuration depends on the selected pipeline element and looks similar to the screenshot below.
In general, pipeline elements are configured by providing the required values. Once the pipeline element is fully configured, the _Save_ button activates and can be used to save the configuration for the pipeline element.

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/03_configure-pipeline-element.png" alt="StreamPipes Pipeline Element Configuration">

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

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/04_pipeline-element-recommendation.png" alt="StreamPipes Pipeline Element Recommendation">

### Pipeline Editor Options
Several pipeline editor options are available in the menu bar of the pipeline assembly:

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/05_pipeline-editor-options.png" alt="StreamPipes Pipeline Editor Options">

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

<img class="docs-image" src="/docs/img/03_use-pipeline-editor/06_save-pipeline.png" alt="StreamPipes Save Pipeline Dialog">


