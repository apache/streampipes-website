---
id: use-managing-pipelines
title: Managing Pipelines
sidebar_label: Managing Pipelines
---

The pipeline view lists all created pipelines and provides several views and actions to manage the lifecycle of pipelines.

In the entry screen, an overview of all created pipelines is shown:

<img class="docs-image" src="/img/03_use-managing-pipelines/01_pipeline-overview.png" alt="StreamPipes Pipeline Overview"/>

## Pipeline Actions
Within the pipeline overview, for each pipeline several actions are available:
* **Start/Stop pipeline** Starts or stops the selected pipeline. Once clicked, StreamPipes will trigger the selected action for all pipeline elements and open a success or error dialog as illustrated below.
* **Show details** opens the pipeline detail view (see below).  
* **Modify pipeline** opens the pipeline in the pipeline editor, where the pipeline can be modified. Note that this button is only visible if the pipeline is not running.
* **Delete pipeline** opens a confirm dialog, which subsequently deletes the selected pipeline.

The screenshot below shows the status of a pipeline after it has been successfully started. By clicking the _Show details_ button, more information on the status of each corresponding pipeline element microservice becomes available. In case of failures, the failure reason will be shown for each pipeline element that has failed to start.

<img class="docs-image" src="/img/03_use-managing-pipelines/02_pipeline-start-dialog.png" alt="StreamPipes Pipeline Start Dialog"/>

## Organizing Pipelines into Categories
Pipelines can be organized into categories, which is a useful feature in case a larger amount of pipelines is created.
All categories will be shown as separate tabs in the pipeline overview. The same pipeline can be assigned to multiple categories.

To add a new category or to add a new pipeline to an existing category, click the _Manage Categories_ button and configured the category and assigned pipelines in the dialog.

## Pipeline Details
The pipeline details view can be opened by clicking the _Show details_ button in the pipeline overview panel.

<img class="docs-image" src="/img/03_use-managing-pipelines/03_pipeline-details.png" alt="StreamPipes Pipeline Details"/>

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

<img class="docs-image" src="/img/03_use-managing-pipelines/04_pipeline-quick-edit.png" alt="StreamPipes Pipeline Quick Edit"/>

After a configuration value was changed, make sure to click the _Update Pipeline_ button to save the changes.
