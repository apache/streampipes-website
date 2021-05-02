---
id: use-data-explorer
title: Data Explorer
sidebar_label: Data Explorer
---

The data explorer can be used to visualize and explore data streams that are persisted by using the **Data Lake** sink.

<img class="docs-image" src="/docs/img/03_use-data-explorer/01_data-explorer-overview.png" alt="StreamPipes Data Explorer Overview">

It provides a canvas where various visualizations from multiple pipelines can be placed. A global date and time range can be selected for all displayed visualizations.

The data explorer is currently available as an early beta version and features are still subject to change. A more detailed documentation will be available once the data explorer is available in a stable version.

## Using the data explorer

In the data explorer, any pipeline that uses the so-called **Data Lake** sink can be explored in the data explorer. Switch to the pipeline editor and add the data lake sink to a data processor or stream.
The sink requires an index name as a configuration parameter, which is used as an identifier in the data explorer.
