---
id: version-0.67.0-extend-sdk-output-strategies
title: "SDK Guide: Output Strategies"
sidebar_label: "SDK: Output Strategies"
original_id: extend-sdk-output-strategies
---

## Introduction
In StreamPipes, output strategies determine the output of a data processor.
As the exact input schema of a processor is usually not yet known at development time (as processors can be connected with any stream that matches their requirements), output strategies are a concept to define how an input data stream is transformed to an output data stream.

The following reference describes how output strategies can be defined using the SDK.

<div class="admonition tip">
<div class="admonition-title">Code on Github</div>
<p>For all examples, the code can be found on <a href="https://www.github.com/apache/incubator-streampipes-examples
/tree/dev/streampipes-pipeline-elements-examples-processors-jvm/src/main/java/org/apache/streampipes/pe/examples/jvm
/outputstrategy/">Github</a>.</p>
</div>

## Reference

The methods described below to create static properties are available in the ``ProcessingElementBuilder`` class and are usually used in the ``declareModel`` method of the controller class.

As follows, we will use the following example event to explain how output strategies define the output of a data processor:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0,
    "deviceId" : "1"

}
```

### Keep Output

A ``KeepOutputStrategy`` declares that the output event schema will be equal to the input event schema.
In other terms, the processor does not change the schema, but might change the values of event properties.

A keep output strategy can be defined as follows:

```java

@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".keep", "Keep output example example", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredProperty(EpRequirements.anyProperty())
                    .build())
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())

            // declaring a keep output strategy
            .outputStrategy(OutputStrategies.keep())

            .build();
  }

```

According to the example above, the expected output event schema of the example input event would be:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0,
    "deviceId" : "1"

}
```

Data processors that perform filter operations (e.g., filtering temperature values that are above a given threshold) are a common example for using keep output strategies.


### Fixed Output

A ``FixedOutputStrategy`` declares that the data processor itself provides the event schema. The output schema does not depend on the input event.

Fixed output strategies need to provide the event schema they produce at development time:

```java

  @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".fixed", "Fixed output example", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredProperty(EpRequirements.anyProperty())
                    .build())
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())

            // the fixed output strategy provides the schema
            .outputStrategy(OutputStrategies.fixed(EpProperties.timestampProperty("timestamp"),
                    EpProperties.doubleEp(Labels.from("avg", "Average value", ""), "avg", SO.Number)))

            .build();
  }

```

In this example, we declare that the output schema always consists of two fields (``timestamp`` and ``avg``).

Therefore, an output event should look like:

```json
{
    "timestamp" : 1234556,
    "avg" : 36.0
}
```


### Append Output

An ``AppendOutputStrategy`` appends additional fields to a schema of an incoming event stream. For instance, data processors that perform enrichment operations usually make use of append output strategies.

Similar to the fixed output strategy, the additional fields must be provided at development time in the controller method as follows:

```java
  @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".append", "Append output example", "")

            // boilerplate code not relevant here, see above

            // declaring an append output
            .outputStrategy(OutputStrategies.append(EpProperties.integerEp(Labels.from("avg",
                    "The average value", ""), "avg", SO.Number)))

            .build();
  }
```

In this case, the output event would have an additional field ``avg``:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0,
    "deviceId" : "1",
    "avg" : 123.0

}
```

### Custom Output

In some cases, pipeline developers using the StreamPipes UI should be able to manually select fields from an input event schema. For such use cases, a ``CustomOutputStrategy`` can be used:

```java

@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".custom", "Custom output example", "")

            // boilerplate code not relevant here, see above

            // declaring a custom output
            .outputStrategy(OutputStrategies.custom())

            .build();
  }

```

If a data processor defines a custom output strategy, the customization dialog in the pipeline editor will show a dialog to let users select the fields to keep:

<img src="/docs/img/dev-guide-output-strategies/os-custom.png" width="80%" alt="Number Parameter">

Taking our example, and assuming that the user selects both the ``timestamp`` and the ``temperature`` the expected output event should look like this:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0
}
```

How do we know which fields were selected once the data processor is invoked? Use the proper method from the extractor in the ``onInvocation`` method:

```java
@Override
  public ConfiguredEventProcessor<DummyParameters> onInvocation(DataProcessorInvocation graph, ProcessingElementParameterExtractor extractor) {

    List<String> outputSelectors = extractor.outputKeySelectors();

    return new ConfiguredEventProcessor<>(new DummyParameters(graph), DummyEngine::new);
  }
```

### Transform Output

A ``TransformOutputStrategy`` declares that one or more fields of an incoming event stream are transformed. Transformations can be applied to the datatype of the property, the runtime name of the property, or any other scheam-related declaration such as measurement units.

#### Static Transform Operations

Static transform operations do not depend on any user input (at pipeline development time) in order to know how to transform a field of an incoming event schema.

Let's say our data processor transforms strings (that are actually a number) to a number datatype. In this case, we can use a static transform output strategy:

```java

  @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".transform", "Transform output example example", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from
                            ("str", "The date property as a string", ""), PropertyScope.NONE)
                    .build())
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())

            // static transform operation
            .outputStrategy(OutputStrategies.transform(TransformOperations
                    .staticDatatypeTransformation("str", Datatypes.Long)))

            .build();
  }

```

Note the mapping property that we use to determine which field of the input event should be transformed.

The expected output event would look like this:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0,
    "deviceId" : 1
}
```

#### Dynamic Transform Operations

Sometimes, user input depends on the exact transform output. Let's take a field renaming processor as an example, which lets the user rename a field from an input event schema to another field name.
For such use cases, we can use a ``DynamicTransformOperation``:

```java

  @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".transform", "Transform output example example", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from
                            ("str", "The date property as a string", ""), PropertyScope.NONE)
                    .build())
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())

            // the text input to enter the new runtime name
            .requiredTextparameter(Labels.from("new-runtime-name", "New Runtime Name", ""))

            // static transform operation
            .outputStrategy(OutputStrategies.transform(TransformOperations
                    .dynamicRuntimeNameTransformation("str", "new-runtime-name")))

            .build();
  }

```

For dynamic transform operations, an additional identifier that links to another static property can be assigned and later be fetched in the ``onInvocation`` method.

Assuming we want to rename the field ``temperature`` to ``temp``, the resulting output event should look like this:

```json
{
    "timestamp" : 1234556,
    "temp" : 37.0,
    "deviceId" : 1
}
```

### Custom Transform Output

Finally, in some cases the output schema cannot be described at pipeline development time. For these (usually rare) cases, a ``CustomTransformOutput`` strategy can be used.

In this case, a callback function will be invoked in the controller class just after a user has filled in any static properties and clicks on ``Save`` in the pipeline editor.

To define a custom transform output, we need to implement an interface in the controller class:

```java
public class CustomTransformOutputController extends
        StandaloneEventProcessingDeclarer<DummyParameters> implements
        ResolvesContainerProvidedOutputStrategy<DataProcessorInvocation, ProcessingElementParameterExtractor> {


@Override
  public EventSchema resolveOutputStrategy(DataProcessorInvocation processingElement, ProcessingElementParameterExtractor parameterExtractor) throws SpRuntimeException {

  }
}
```

In addition, the output strategy must be declared in the ``declareModel`` method:

```java

@Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +
            ".customtransform", "Custom transform output example example", "")
            .requiredStream(StreamRequirementsBuilder.
                    create()
                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from
                            ("str", "The date property as a string", ""), PropertyScope.NONE)
                    .build())
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())

            // declare a custom transform output
            .outputStrategy(OutputStrategies.customTransformation())

            .build();
  }

```

Once a new pipeline using this data processor is created and the configuration is saved, the ``resolveOutputStrategy`` method will be called, so that an event schema can be provided based on the given configuration. An extractor instance (see the guide on static properties) is available to extract the selected static properties and the connected event stream.

```java
@Override
  public EventSchema resolveOutputStrategy(DataProcessorInvocation processingElement, ProcessingElementParameterExtractor parameterExtractor) throws SpRuntimeException {
    return new EventSchema(Arrays
            .asList(EpProperties
                    .stringEp(Labels.from("runtime", "I was added at runtime", ""), "runtime", SO.Text)));
  }
```

In this example, the output event schema should look like this:

```json
{
    "runtime" : "Hello world!"
}
```

