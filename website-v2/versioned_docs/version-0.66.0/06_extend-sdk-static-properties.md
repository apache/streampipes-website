---
id: extend-sdk-static-properties
title: "SDK Guide: Static Properties"
sidebar_label: "SDK: Static Properties"
original_id: extend-sdk-static-properties
---

## Introduction
Static properties represent user-faced parameters that are provided by pipeline developers.
Processing elements can specify required static properties, which will render different UI views in the pipeline editor.

The following reference describes how static properties can be defined using the SDK.

<div class="admonition tip">
<div class="admonition-title">Code on Github</div>
<p>For all examples, the code can be found on <a href="https://github.com/apache/incubator-streampipes-examples/tree
/dev/streampipes-pipeline-elements-examples-processors-jvm/src/main/java/org/apache/streampipes/pe/examples/jvm
/staticproperty">Github</a>.</p>
</div>

## Reference

The methods described below to create static properties are available in the ``ProcessingElementBuilder`` and ``DataSinkBuilder`` classes and are usually used in the ``declareModel`` method of the controller class.

### Mapping property

In StreamPipes, processing elements usually operate on fields of an event stream. For instance, a filter processor operates on a specific field from an input stream (e.g., a field measuring the temperature).
Typically, pipeline developers should select the exact field where the operations is applied upon by themselves.
As this field is not yet known at pipeline element development time (as it is defined by the pipeline developer in the pipeline editor), mapping properties serve to map a stream requirement to a specific field from the actual input event stream.

### Unary mapping property

A unary mapping property maps a stream requirement to an actual field of an event stream. Therefore, the ``StreamRequirementsBuilder`` provides the opportunity to directly add a mapping property based along with a property requirement:

```java
.requiredStream(StreamRequirementsBuilder.
    create()
    .requiredPropertyWithUnaryMapping(EpRequirements.numberReq(),
            Labels.from("mp-key", "My Mapping", ""),
            PropertyScope.NONE)
    .build())
```

This leads to a selection dialog in the pipeline element customization which provides the user with a selection of all event properties (fields) from the input stream that match the specified property requirement:

<img src="/img/dev-guide-static-properties/sp-mapping-unary.png" width="80%" alt="Text"/>

At invocation time, the value can be extracted in the ``onInvocation`` method as follows:

```java
// Extract the mapping property value
String mappingPropertySelector = extractor.mappingPropertyValue("mp-key");
```

Note that this method returns a ``PropertySelector``, which can be used by the event model to extract the actual value of this field.

### N-ary mapping property

N-ary mapping properties work similar to unary mapping properties, but allow the mapping of one requirement to multiple event properties matching the requirement:

```java
.requiredStream(StreamRequirementsBuilder.
    create()
    .requiredPropertyWithNaryMapping(EpRequirements.numberReq(),
            Labels.from("mp-key", "My Mapping", ""),
            PropertyScope.NONE)
    .build())
```

This renders the following selection, where users can select more than one matching event property:

<img src="/img/dev-guide-static-properties/sp-mapping-nary.png" width="80%" alt="Text"/>

The following snippet returns a list containing the property selectors of all event properties that have been selected:

```java
// Extract the mapping property value
List<String> mappingPropertySelectors = extractor.mappingPropertyValues("mp-key");
```

### Free-Text Parameters

A free-text parameter requires the pipeline developer to enter a single value - which can be a string or another primitive data type.
The input of free-text parameters can be restricted to specific value ranges or can be linked to the value set of a connected input data stream.

#### Text Parameters

A text parameter lets the user enter a string value. The following code line in the controller class

```java
.requiredTextParameter(Labels.from(SP_KEY, "Example Name", "Example Description"))
```

leads to the following input dialog in the pipeline editor:

<img src="/img/dev-guide-static-properties/sp-text-parameter.png" width="80%" alt="Text"/>

Users can enter any value that will be converted to a string datatype. To receive the entered value in the ``onInvocation`` method, use the following method from the ``ParameterExtractor``

```java
String textParameter = extractor.singleValueParameter(SP_KEY, String.class);
```

#### Number parameters

A number parameter lets the user enter a number value, either a floating-point number or an integer:

```java
// create an integer parameter
.requiredIntegerParameter(Labels.from(SP_KEY, "Integer Parameter", "Example Description"))

// create a float parameter
.requiredFloatParameter(Labels.from("float-key", "Float Parameter", "Example Description"))

```

leads to the following input dialog in the pipeline editor only accepting integer values:

<img src="/img/dev-guide-static-properties/sp-number-parameter.png" width="80%" alt="Number Parameter"/>

The pipeline editor performs type validation and ensures that only numbers can be added by the user. To receive the entered value in the ``onInvocation`` method, use the following method from the ``ParameterExtractor``

```java
// Extract the integer parameter value
Integer integerParameter = extractor.singleValueParameter(SP_KEY, Integer.class);

// Extract the float parameter value
Float floatParameter = extractor.singleValueParameter("float-key", Float.class);

```

#### Numbers with value specification

You can also specify the value range of a number-based free text parameter:

```java
// create an integer parameter with value range
.requiredIntegerParameter(Labels.from(SP_KEY, "Integer Parameter", "Example Description"), 0, 100, 1)

```

which renders the following input field:

<img src="/img/dev-guide-static-properties/sp-number-parameter-with-range.png" width="80%" alt="Number Parameter"/>

Receive the entered value in the same way as a standard number parameter.

#### Free-text parameters linked to an event property


### Single-Value Selections

Single-value selections let the user select from a pre-defined list of options.
A single-value selection requires to select exactly one option.

```java
.requiredSingleValueSelection(Labels.from("id", "Example Name", "Example Description"),
    Options.from("Option A", "Option B", "Option C"))

```

Single-value selections will be rendered as a set of radio buttons in the pipeline editor:

<img src="/img/dev-guide-static-properties/sp-single-selection.png" width="80%" alt="Number Parameter"/>

To extract the selected value, use the following method from the parameter extractor:

```java
// Extract the selected value
String selectedSingleValue = extractor.selectedSingleValue("id", String.class);
```

<div class="admonition tip">
<div class="admonition-title">Declaring options</div>
<p>Sometimes, you may want to use an internal name that differs from the display name of an option.
For that, you can use the method Options.from(Tuple2{'<'}String, String{'>'}) and the extractor method selectedSingleValueInternalName.</p>
</div>



### Multi-Value Selections

Multi-value selections let the user select from a pre-defined list of options, where multiple or no option might be selected.

```java
.requiredMultiValueSelection(Labels.from("id", "Example Name", "Example Description"),
    Options.from("Option A", "Option B", "Option C"))

```

Multi-value selections will be rendered as a set of checkboxes in the pipeline editor:

<img src="/img/dev-guide-static-properties/sp-multi-selection.png" width="80%" alt="Number Parameter"/>

To extract the selected value, use the following method from the parameter extractor:

```java
// Extract the selected value
List<String> selectedMultiValue = extractor.selectedMultiValues("id", String.class);
```

### Domain Concepts

(coming soon...)

### Collections

You can also define collections based on other static properties.

```java
// create a collection parameter
.requiredParameterAsCollection(Labels.from("collection", "Example Name", "Example " +
        "Description"), StaticProperties.stringFreeTextProperty(Labels
        .from("text-property","Text","")))
```

While the items of the collection can be provided in the same way as the underlying static property, the UI provides buttons to add and remove items to the collections.

<img src="/img/dev-guide-static-properties/sp-collection.png" width="80%" alt="Number Parameter"/>

To extract the selected values from the collection, use the following method from the parameter extractor:

```java
// Extract the text parameter value
List<String> textParameters = extractor.singleValueParameterFromCollection("collection", String.class);
```

### Runtime-resolvable selections

In some cases, the options of selection parameters are not static, but depend on other values or might change at runtime. In this case, you can use runtime-resolvable selections.

First, let your controller class implement ``ResolvesContainerProvidedOptions``:

```java
public class RuntimeResolvableSingleValue extends
     StandaloneEventProcessingDeclarer<DummyParameters> implements ResolvesContainerProvidedOptions { ... }
```

Next, define the parameter in the ``declareModel`` method:

```java
// create a single value selection parameter that is resolved at runtime
    .requiredSingleValueSelectionFromContainer(Labels.from("id", "Example Name", "Example " +
            "Description"))
```

Finally, implement the method ``resolveOptions``, which will be called at runtime once the processor is used:

```java
  @Override
  public List<RuntimeOptions> resolveOptions(String requestId, EventProperty linkedEventProperty) {
    return Arrays.asList(new RuntimeOptions("I was defined at runtime", ""));
  }
```

The UI will render a single-value parameter based on the options provided at runtime:

<img src="/img/dev-guide-static-properties/sp-single-selection-remote.png" width="80%" alt="Number Parameter"/>

The parameter extraction does not differ from the extraction of static single-value parameters.

<div class="admonition info">
<div class="admonition-title">Multi-value selections</div>
<p>Although this example shows the usage of runtime-resolvable selections using single value selections, the same also works for multi-value selections!</p>
</div>


