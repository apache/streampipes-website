---
id: user-guide-introduction-old
title: Introduction
sidebar_label: Introduction
original_id: user-guide-introduction-old
---

StreamPipes is a framework that enables users to work with data streams.
It uses a lot of different technologies especially form the fields of big data, distributed computing and semantic web.
One of the core concepts of StreamPipes is to add a higher semantic layer on top of big data processing technologies to ease their usage.
StreamPipes is not just a UI, it is a framework with a lot of different capabilities, like modelling new data processing pipelines, execute them in a distributed environment.
On top it uses semantics to provide guidance to non-technical people for better analyzing their data streams in a self-service manner.



## Pipelines
The core concept of StreamPipes are data processing pipelines.
Those pipelines use data from different sources (Data Streams), then transform it via Processing Elements and store them in an database or send it to third party systems (Data Sinks).
A brief introduction is given in the following sections.
At the next page a detailed tour through StreamPies explains all the different features that are available.


## Data Streams
Data Streams represent the primary source for data in StreamPipes.
A stream is an ordered sequence of events, where an event is described as one or more observation values.
Those events can come from different sources like sensors, machines, log files or many more.
It does not matter what kind of serialization format the events have or which kind of transportation protocol the individual data streams use.
As long as a semantic description is provided StreamPipes is capable of processing the data.


## Processing Elements
Processing Elements are defined as an processor that transforms one or more input event streams to an output event stream. 
Those transformations can be rather simple like filtering out events based on a predefined rule or more complex by applying algorithms on the data.  
Processing elements define stream requirements that are a set of minimum properties an incoming event stream must provide. 
Furthermore, Processing Elements describe their output based on a set of output strategies.
They also describe further (human) input in form of configuration parameters.
The Processing Elements can be implemented in multiple technologies.
This information is not necessary when constructing a pipeline, the user does not need to know where and how the actual algorithm is deployed and executed.
During the modelling phase it is possible to set configuration parameters, wich are then injected into the program when it is started.
A description is provided for all parameters and it is ensured by the system that the user can just enter semantically correct values.


## Data Sinks
Data Sinks consume event streams similar to processing elements with the difference that sinks do not provide an output stream, i.e., they are defined as sinks that perform some action or trigger a visualization as a result of a stream transformation.
The sinks also define stream requirements that must be fulfilled.
In a pipeline it is not necessary to use a processing element to transform data.
Often it can make sense to just use a data sink and connect it directly to the sensor to store the raw data into a data store for offline analysis.
This is very simple with StreamPipes and no additional code must be written to create such a data lake.


## Target Audience
StreamPipes focuses on multiple target groups.
This guide is for users who interact with the graphical user interface in the browser.
If you are interested in the technical details or plan to extend the system with new algorithms, please read the Developer Guide.
The graphical user interface is designed for domain experts who want to analyze data, but are not interested in technical details and do not want to write code.
The SDK can be used by software developers to extend the framework with new functionality.
After importing newly developed pipeline elements, they are available to all users of StreamPipes.


## Next Steps
To test StreamPipes on your local environment go to the [installation guide](user-guide-installation.md).
If you are further interested in the concepts of StreamPipes continue with the [tour](user-guide-tour.md).
