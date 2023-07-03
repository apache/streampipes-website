---
id: extend-sdk-functions
title: "SDK Guide: Functions"
sidebar_label: "SDK: Functions"
original_id: extend-sdk-functions
---

## Introduction

Pipeline elements such as data processors and data sinks are a great way 
to create _reusable_ components that can be part of pipelines.
However, creating a pipeline element is not always the best choice:

* The behaviour of a data processor is bound to a specific input stream _and_
* A data processor doesn't contain any user-defined configuration _and_
* The intended action is fixed or known at build time and the data processor shouldn't be available in the pipeline editor.

To cover such use cases, we provide _StreamPipes Functions_. Functions 
are a great way to define custom processing logic based on previously 
connected data streams.

Functions can be registered in a similar way to pipeline elements, but define expected input 
streams at startup time. Functions are started once the corresponding _extensions service_ starts
and run until the service is stopped. 

## Writing a function

<div class="admonition warning">
    <div class="admonition-title">Work in Progress</div>
    <p>Functions are currently in preview mode and are not yet recommended for production usage. 
APIs are subject to change in a future version.</p>
</div>

To define a function, create a new extensions service using the [Maven Archetypes](06_extend-archetypes.md) or use an already existing service.

### Skeleton

Functions can be defined by creating a new class which extends the ``StreamPipesFunction`` class.

The basic skeleton looks like this:

```java
public class StreamPipesFunctionExample extends StreamPipesFunction {
  
  @Override
  public FunctionId getFunctionId() {
    return FunctionId.from("my-function-id", 1);
  }

  @Override
  public List<String> requiredStreamIds() {
    return List.of("<id of the required stream>");
  }

  @Override
  public void onServiceStarted(FunctionContext context) {
    // called when the service is started
  }

  @Override
  public void onEvent(Event event, String streamId) {
    // called when an event arrives
  }

  @Override
  public void onServiceStopped() {
    // called when the service is stopped
  }
}

```

The structure of a function class is easy to understand:
* _getFunctionId_ requires an identifier in form of a ``FunctionId``, which defines the id itself along with a version number that can be freely chosen.
* _requiredStreamIds_ expects a list of references to data streams that are already available in StreamPipes. See below to learn how to find the id of a stream in StreamPipes.
* _onServiceStarted_ is called once the extensions service is started and can be used to initialize the function.
* _onEvent_ is called every time a new event arrives and provides a ``streamId`` as a reference to the corresponding stream, which is useful in case multiple data streams are received by the function.
* _onServiceStopped_ is called when the extensions service is stopped and can be used to perform any required cleanup.

### Getting a stream ID

Functions require a reference to all data streams that should be retrieved by the function.
Currently, the only way to get the ID of a function is by navigating to the ``Asset Management`` view in the StreamPipes UI.
Create a new asset, click on ``Edit Asset`` and open ``Add Link`` in the _Linked Resources_ panel.
Choose ``Data Source`` as link type, select one of the available sources, copy the ``Resource ID`` and provide this ID in the ``requiredStreamIds`` method.

### Function Context

The ``onServiceStarted`` method provides a function context which provides several convenience methods to work with functions:

* _getFunctionId_ returns the current function identifier
* _getConfig_ returns a reference to configuration options of the extensions service
* _getClient_ returns a reference to the StreamPipes client to interact with features from the REST API.
* _getStreams_ returns the data model of all data streams defined in the ``requiredStreamIds`` method.
* _getSchema_ returns the schema of a specific data stream by providing the ``streamId``


## Registering a function

Registering a function is easy and can be done in the _Init_ class of the service.
E.g., considering a service definition as illustrated below, simply call ``registerFunction`` and 
provide an instance of your function.

```java

  @Override
  public SpServiceDefinition provideServiceDefinition() {
    return SpServiceDefinitionBuilder.create("my-service-id",
            "StreamPipes Function Example",
            "",
            8090)
        .registerFunction(new MyExampleFunction())
        .registerMessagingFormats(
            new JsonDataFormatFactory())
        .registerMessagingProtocols(
            new SpNatsProtocolFactory())
        .build();
  }
  
```

## Metrics & Monitoring

Similar to pipeline elements, function register at the StreamPipes core. 
Running functions can be seen in the pipeline view of the user interface under _Functions_, right below the list of available pipelines.
Similar to pipelines, simple metrics, monitoring info and exceptions can be viewed in the _Details_ section of each function. 
