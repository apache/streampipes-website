---
id: concepts-overview
title: StreamPipes Concepts
sidebar_label: Overview
---

To understand how StreamPipes works, the knowledge of a few core concepts, illustrated below, will be helpful.

<img className="docs-image" src="/img/02_concepts-overview/01_overview.png" alt="Overview of concepts"/>

## Adapter
An adapter connects to any external data source and forwards received events to the internal StreamPipes system. Within StreamPipes, the output of adapters are available in form of the two primary building blocks **Data Set** and **Data Stream**.
Adapters can be either created by using StreamPipes Connect, a module to easily connect to new data sources directly from the user interface, or by defining an adapter using the provided Software Development Kit (SDK).

## Data Set / Data Stream
**Data Streams** and **Data Sets** represent the primary source for working with events in StreamPipes.
A stream is an ordered sequence of events, where an event typically consists of one or more observation values and additional metadata. The "structure" (or schema) of an event provided by a data stream or set is stored in the internal semantic schema registry of StreamPipes.
While data streams are typically unbounded, data sets have a fixed end and are internally "replayed" by the system from beginning to end once they are used as part of a pipeline.
As follows, although when referring to data streams, most concepts also apply for data sets.

## Data Processor
**Data Processors** in StreamPipes transform one or more input data streams into an output data stream.
Such transformations can be rather simple, e.g. filtering based on a predefined rule or more complex, e.g. applying rule-based or learning-based algorithms on the data.  
Data Processors can be applied on any data stream that matches the input requirements of a processor. In addition, most processors can be configured by providing user-defined parameters directly in the user interface.
Processing elements define stream requirements that are a set of minimum properties an incoming event stream must provide. Data processors can keep state or perform stateless operations.
At runtime, data streams are processed by using one of the underlying runtime wrappers (see the developer guide for more details).

## Data Sink
**Data Sinks** consume event streams similar to Data Processors, but do not provide an output data stream. As such, data sinks typically perform some action or trigger a visualization as a result of a stream transformation.
Similar to data processors, sinks also require for the presence of specific input requirements of any bound data stream and can be customized.
StreamPipes provides several internal data sinks, e.g., to create notifications, visualize live data or persist historical data of incoming streams. In addition, various data sinks are provided to forward data streams to external systems such as databases.

## Pipeline
A pipeline in Apache StreamPipes describes the transformation process from a data stream to a data sink. Typically, a pipeline consists of at least one data stream (or data set), zero or more data processors and at least one data sink.
Pipelines are built by users in a graphical way using the **Pipeline Editor** and can be started and stopped at any time.
