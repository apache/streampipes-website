---
id: extend-sdk-stream-requirements
title: "SDK Guide: Stream Requirements"
sidebar_label: "SDK: Stream Requirements"
original_id: extend-sdk-stream-requirements
---

## Introduction

Data processors and data sinks can define ``StreamRequirements``. Stream requirements allow pipeline elements to express requirements on an incoming event stream that are needed for the element to work properly.
Once users create pipelines in the StreamPipes Pipeline Editor, these requirements are verified against the connected event stream.
By using this feature, StreamPipes ensures that only pipeline elements can be connected that are syntactically and semantically valid.

This guide covers the creation of stream requirements. Before reading this section, we recommend that you make yourself familiar with the SDK guide on [data processors](dev-guide-processor-sdk.md) and [data sinks](dev-guide-sink-sdk.md).

<div class="admonition tip">
<div class="admonition-title">Code on Github</div>
<p>For all examples, the code can be found on <a href="https://www.github.com/apache/streampipes-examples/tree/dev/streampipes-pipeline-elements-examples-processors-jvm/src/main/java/org/apache/streampipes/pe/examples/jvm/requirements/">Github</a>.</p>
</div>

## The StreamRequirementsBuilder

Stream requirements can be defined in the ``declareModel`` method of the pipeline element class. Start with a method body like this:

```java

@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create(ID, PIPELINE_ELEMENT_NAME, DESCRIPTION)
            .requiredStream(StreamRequirementsBuilder.
                    create()

                    .build())

            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```

The ``StreamRequirementsBuilder`` class provides methods to add stream requirements to a pipeline element.

## Requirements on primitive fields

As a very first example, let's assume we would like to create a data processor that filters numerical values that are above a given threshold.
Consequently, any data stream that is connected to the filter processor needs to provide a numerical value.

The stream requirement would be assigned as follows:

```java
@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create(ID, PIPELINE_ELEMENT_NAME, DESCRIPTION)
            .requiredStream(StreamRequirementsBuilder
                    .create()
                    .requiredProperty(EpRequirements.numberReq())
                    .build())

            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```

Note the line starting with ``requiredProperty``, which requires any stream to provide a datatype of type ``number``.

In many cases, you'll want to let the user select a specific field from a data stream from all available fields that match the specified requirement. For that, you simply use the method ``requiredPropertyWithUnaryMapping`` as follows:

```java
@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create(ID, PIPELINE_ELEMENT_NAME, DESCRIPTION)
            .requiredStream(StreamRequirementsBuilder
                    .create()
                    .requiredPropertyWithUnaryMapping(EpRequirements.numberReq(),
                    Labels.from("number-mapping", "The value that should be filtered", ""), PropertyScope.NONE)
                    .build())

            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```

See also the developer guide on [static properties](dev-guide-static-properties.md) to better understand the usage of ``MappingProperties``.

Requirements on primitive fields can be specified for all common datatypes:

```java
 @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.requirements" +
            ".simple", "Simple requirements specification examples", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredProperty(EpRequirements.numberReq()) // any number
                    .requiredProperty(EpRequirements.doubleReq()) // any field of type double
                    .requiredProperty(EpRequirements.booleanReq()) // any field of type boolean
                    .requiredProperty(EpRequirements.integerReq()) // any field of type integer
                    .requiredProperty(EpRequirements.stringReq()) // any field of type string

                    .requiredProperty(EpRequirements.anyProperty()) // any field allowed (no restriction)
                    .requiredProperty(EpRequirements.timestampReq())  // any timestamp field
                    .build())


            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
```

### Specifying semantics

For some algorithms, only specifying the datatype is not sufficient. Let's consider a geofencing algorithm that detects the precense some geospatial coordinate (e.g., from a vehicle) within a given location.

You could specify something like this:

```java
    StreamRequirementsBuilder
    .create()
    .requiredPropertyWithUnaryMapping(EpRequirements.doubleEp(), Labels.from("mapping-latitude", "Latitude", ""), PropertyScope.NONE)
    .requiredPropertyWithUnaryMapping(EpRequirements.doubleEp(), Labels.from("mapping-longitude", "Longitude", ""), PropertyScope.NONE)
    .build()
```

However, this would allow users to create strange pipelines as users could connect any stream containing a double value to our geofencing algorithm.
To avoid such situations, you can also specify requirements based on the semantics of a field:

```java
    StreamRequirementsBuilder
    .create()
    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(SO.Latitude), Labels.from("mapping-latitude", "Latitude", ""), PropertyScope.NONE)
    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(SO.Longitude), Labels.from("mapping-longitude", "Longitude", ""), PropertyScope.NONE)
    .build()
```

Note that in this case, we make use of Schema.org's ``Latitude`` concept ([https://schema.org/latitude](https://schema.org/latitude)). StreamPipes already includes popular vocabularies for specifying semantics. You are also free to use your own vocabularies.


## Requirements on lists

Similarly to primitive requirements, you can define processors that require data streams with list fields, see the following examples:

```java
@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.requirements" +
            ".list", "List requirements specification examples", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredProperty(EpRequirements.listRequirement(Datatypes.Integer))
                    .requiredProperty(EpRequirements.listRequirement(Datatypes.Double))
                    .requiredProperty(EpRequirements.listRequirement(Datatypes.Boolean))
                    .requiredProperty(EpRequirements.listRequirement(Datatypes.String))
                    .build())


            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())

            .build();
  }
```

## Requirements on nested properties

(coming soon, see the Javadoc for now)



