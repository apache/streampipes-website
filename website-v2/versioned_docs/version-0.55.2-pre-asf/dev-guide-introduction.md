---
id: dev-guide-introduction
title: Introduction
sidebar_label: Introduction
original_id: dev-guide-introduction
---

StreamPipes is an open platform which can be easily extended at runtime by adding new data streams, data processors and data sinks.
When developing new components, usually multiple elements, called _pipeline elements_, are bundled into a self-contained _pipeline element container_. This container is deployed as a standalone microservice. This service is self-descriptive and exposes its description (see below for a detailed explanation) to the StreamPipes management backend. Once the service is deployed, it can be installed using the StreamPipes UI and all elements provided by this service are ready to be used as part of new pipelines.

To ease the extension of StreamPipes, we provide a powerful Software Development Kit (SDK) that allows you to define new pipeline elements for your StreamPipes instance.

## Concepts

In this section, we briefly describe the main concepts of StreamPipes. Although it might give an abstract overview, we are sure that many concepts will be more clear once you've created your very first pipeline element yourself. So check out our tutorials!

### Data Stream

A _Data Stream_ is the main concept to describe the source of a pipeline. _DataStreams_ consist of
an RDF _description_ (which will be generated automatically when using the SDK) and a runtime
_implementation_. The description includes information on the _schema_ of a data stream, e.g., measurement properties the payload of a stream provides.
Furthermore, the description contains information on the _grounding_, such as the transport format (e.g., JSON) and transport protoocol (e.g., MQTT or Kafka).
One or more data streams are assigned to a _Data Source_ to improve discovery of existing streams.

### Data Processor
_Data Processors_ transform on or more input event streams to an output event stream. Data processors can be stateless (e.g., filter operations on every event of an input stream) or stateful (e.g., time-based aggregations using sliding windows).
Similar to data streams, processors consist of an RDF _description_ and a corresponding _implementation_. The description is being used by the StreamPipes backend in order to determine the compatibility of a data processor and an input event stream and includes information the required minimum event schema as well as required user input and the definition of the output event stream.

The implementation of a data processor can be defined using a set of provided _runtime wrappers_. These wrappers define where computation logic actually takes place once a pipeline was started. We currently provide runtime wrappers for various Big Data processing engines (e.g., Apache Flink) and lightweight standalone processors.

### Data Sink
The concept of _Data Sinks_ is very similar to the concept of data processors with the exception that sinks do not produce any output streams.
Therefore, sinks are used in StreamPipes to mark the end of a pipeline and reflect 3rd party applications, notifications or dashboard components.

### Static Property
Some data processors or data sinks might require input from users when pipelines are created using these elements.
For instance, a generic filter component might require information on the filter operation and a threshold value.
Such required user input can be modeled by defining _static properties_. Static properties can be defined in many ways, e.g., plain text input, selections (e.g., radio buttons) or can be linked to separately stored domain knowledge.
The SDK contains many convenient functions that help you defining static properties.

### Output Strategy
As mentioned above, data processors also define the output event schema. However, as data processors in StreamPipes are often generic and can therefore be linked to any event stream that matches the input requirement of a data processor, the exact output schema is not known in the development phase when a data processor is defined.
Therefore, data processors define their output using _output strategies_. Such strategies describe the transformation process, i.e., how an input stream is transformed to an output stream.
Multiple pre-defined output strategies exist that you can choose depending on the behaviour of a data processor.
For instance, the output schema of a filter component is usually similar to the input schema, so you would use a _KeepOutputStrategy_.
On the other hand, an enrichment component usually adds additional properties to an input schema - this can be defined using a _AppendOutputStrategy_.
Sometimes you want to let the user define the output schema. In this case, a _CustomOutputStrategy_ can be defined.

## Clients

As stated in the beginning, pipeline element containers are deployed as self-contained microservices. The client types describes the environment this service is running in.
Currently supported clients are _standalone_, which defines a standalone service that contains both the description and implementation part (which is often submitted to a computing cluster prior to pipeline execution) in addition to an embedded Jetty web server which creates a fat jar file, and _embedded_, which creates a war file that can be imported into an existing application server.

