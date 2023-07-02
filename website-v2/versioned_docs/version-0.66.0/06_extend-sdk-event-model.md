---
id: extend-sdk-event-model
title: "SDK Guide: Event Model"
sidebar_label: "SDK: Event Model"
original_id: extend-sdk-event-model
---

## Introduction

The 0.61.0 release of StreamPipes introduces a new event model that replaces the ``Map`` representation of events at runtime. This guide explains the usage of the new event model to manipulate runtime events for data processors and data sink.

## Reference

This guide assumes that you are already familiar with the basic setup of [data processors](dev-guide-processor-sdk.md) and [data sinks](dev-guide-sink-sdk.md).

### Property Selectors

In most cases, fields that are subject to be transformed by pipeline elements are provided by the assigned ``MappingProperty`` (see the guide on [static properties](dev-guide-static-properties.md)).

Mapping properties return a ``PropertySelector`` that identifies a field based on (i) the **streamIndex** and (ii) the runtime name of the field.
Let's assume we have an event with the following structure:

```json
{
    "timestamp" : 1234556,
    "temperature" : 37.0,
    "deviceId" : "sensor1",
    "running" : true,
    "location" : {"latitude" : 34.4, "longitude" : -47},
    "lastValues" : [45, 22, 21]
}
```

In addition, we assume that a data processor exists (with one input node) that converts the temperature value (measured in degrees celsius) to a degree fahrenheit value.
In this case, a mapping property (selected by the pipeline developer in the StreamPipes UI) would link to the ``temperature`` field of the event.

The mapping property value will be the ``PropertySelector`` of the temperature value, which looks as follows:

```
s0::temperature
```

``s0`` identifies the stream (in this case, only one input streams exist, but as data processors might require more than one input stream, a stream identifier is required), while the appendix identifies the runtime name.

Note: If you add a new field to an input event, you don't need to provide the selector, you can just assign the runtime name as defined by the [output strategy](dev-guide-output-strategies.md).

### Reading Fields

You can get a field from an event by providing the corresponding selector:

```java

@Override
  public void onEvent(Event event, SpOutputCollector out) {

  PrimitiveField temperatureField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsPrimitive();
  }

```

Similarly, if your mapping property links to a nested property, use

```java

@Override
  public void onEvent(Event event, SpOutputCollector out) {

  NestedField nestedField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsNested();
  }

```

and for a list-based field:

```java

@Override
  public void onEvent(Event event, SpOutputCollector out) {

  ListField listField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsList();
  }

```

### Parsing Fields

#### Primitive Fields

A ``PrimitiveField`` contains convenience methods to directly cast a field to the target datatype:

```java

// parse the value as a float datatype
Float temperatureValue = event.getFieldBySelector(temperatureSelector).getAsPrimitive().getAsFloat();

// or do the same with a double datatype
Double temperatureValue = event.getFieldBySelector(temperatureSelector).getAsPrimitive().getAsDouble();

// extracting a string
String deviceId = event.getFieldBySelector(deviceIdSelector).getAsPrimitive().getAsString();

// this also works for extracting fields from nested fields:
Double latitude = event.getFieldBySelector(latitudeSelector).getAsPrimitive().getAsDouble();

// extracting boolean values
Boolean running = event.getFieldBySelector(runningSelector).getAsPrimitive().getAsBoolean();
```

In rare cases, you might want to receive a field directly based on the runtime name as follows:

```java
Double temperature = event.getFieldByRuntimeName("temperature").getAsPrimitive().getAsDouble();
```

#### List Fields

Lists can also be retrieved by providing the corresponding selector and can automatically be parsed to a list of primitive datatypes:

```java

List<Integer> lastValues = event.getFieldBySelector(lastValueSelector).getAsList().parseAsSimpleType(Integer.class);

```

(coming soon: parsing complex lists)


### Adding/Updating Fields

Primitive fields can easily be added to an event by providing the runtime name and the object:

```java

    // add a primitive field with runtime name "city" and value "Karlsruhe"
    event.addField("city", "Karlsruhe");

    // remove the field "temperature" from the event
    event.removeFieldBySelector(temperatureSelector);

    // add a new field
    event.addField("fahrenheit", 48);
```
