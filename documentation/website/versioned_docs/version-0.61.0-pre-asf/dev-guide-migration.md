---
id: version-0.61.0-pre-asf-dev-guide-migration
title: Migration Guide v0.61
sidebar_label: Migration Guide
original_id: dev-guide-migration
---

Version 0.61.0 of StreamPipes comes with an improved event model. This model makes it easier to support more complex data streams (e.g., streams containing nested properties and lists) and includes features such as automatically resolving conflicts when merging two event streams.

If you are only using the pipeline elements that are included in StreamPipes, you only need to update the element description (My Elements -> Update).
However, if you've already developed your own pipeline elements, some code changes are required to make your elements work with versions >= 0.61.0.

<div class="admonition info">
<div class="admonition-title">Don't be afraid!</div>
<p>Although this guide may look long and complicated, migrating pipeline elements is quite simple. Once you've understood how the new event model works, you'll be able to migrate an element within just a few minutes.</p>
</div>

## Migrating Data Processors

### JVM Wrapper

#### Engine Class

1. Make the class **implement** ``EventProcessor`` instead of **extending** ``StandaloneEventProcessorEngine``

```java
// old
public class MyProcessor extends StandaloneEventProcessorEngine<MyProcessorParameters> { ... }

// new
public class MyProcessor implements EventProcessor<MyProcessorParameters>{ ... }
```

2. Change the signature of the ``onInvocation`` method:

```java
// old
  @Override
  public void onInvocation(MyProcessorParameters params, DataProcessorInvocation dataProcessorInvocation) {

  }

// new
  @Override
  public void onInvocation(MyProcessorParameters params, SpOutputCollector spOutputCollector, EventProcessorRuntimeContext runtimeContext) throws SpRuntimeException {

  }
```

3. Change the signature of the ``onEvent`` method:

```java
// old
  @Override
  public void onEvent(Map<String, Object> in, String s, SpOutputCollector out) {

  }

// new
  @Override
  public void onEvent(Event in, SpOutputCollector out) throws SpRuntimeException {

  }
```

4. Refactor the ``onEvent``method to the new event model:

* Replace all ``collector.onEvent()`` calls to the collector with ``collector.collect()``
* Replace all fields that are accessed from a **MappingProperty** with the new **FieldSelector** from the Event class, e.g.:

```java
// old
  @Override
  public void onEvent(Map<String, Object> in, String s, SpOutputCollector out) {
     String value = String.valueOf(in.get(valueField));
  }

// new
  @Override
  public void onEvent(Event in, SpOutputCollector out) throws SpRuntimeException {
    String value = in.getFieldBySelector(valueField).getAsPrimitive().getAsString();
  }
```

See the documentation on the event class for further details.

5. Forward an ``Event`` instead of a ``Map`` to the collector. If needed, create a new instance of the ``Event`` class.

6. Modify the modifications of the input event, e.g.:

```java
// old
  @Override
  public void onEvent(Map<String, Object> in, String s, SpOutputCollector out) {
     in.put("new", "a new field");
     out.onEvent(in);
  }

// new
  @Override
  public void onEvent(Event in, SpOutputCollector out) throws SpRuntimeException {
    in.addField("new", "a new field");
    out.collect(in);
  }
```

#### Controller

1. In the ``onInvocation`` method, use a method reference instead of the lambda expression as return type:

```java
// old
return new ConfiguredEventProcessor<>(params, () -> new MyProcessor(params));

// new
return new ConfiguredEventProcessor<>(params, MyProcessor::new);
```

2. Change the signature of the ``onInvocation`` method:

```java
// old
  @Override
  public ConfiguredEventProcessor<MyParameters> onInvocation(DataProcessorInvocation graph) { ... }

// new
  @Override
  public ConfiguredEventProcessor<MyParameters> onInvocation(DataProcessorInvocation graph, ProcessingElementParameterExtractor extractor) { ... }
```

3. If existing, remove the ``fromExtractor`` method and use the provided ``ProcessingElementParameterExtractor``


### Flink Wrapper


## Migrating Data Sinks

### JVM Wrapper

#### Sink Class

1. Make the class **implement** ``EventSink`` instead of **extending** ``EventSink``

```java
// old
public class MySink extends EventSink<MySinkParameters> { ... }

// new
public class MySink implements EventSink<MySinkParameters>{ ... }
```

2. If present, remove the constructor that includes the parameter class.

3. Change the ``bind`` method to ``onInvocation`` as follows:

```java
// old
  @Override
  public void bind(DemonstratorValveParameters parameters) throws SpRuntimeException { ... }

// new
  @Override
  public void onInvocation(DemonstratorValveParameters parameters, EventSinkRuntimeContext runtimeContext) throws SpRuntimeException { ... }
```

4. Change the signature of the ``onEvent`` method

```java
// old
  @Override
  public void onEvent(Map<String, Object> event, String sourceInfo) {

// new
  @Override
  public void onEvent(Event event) {
```

5. If necessary, adapt your logic to use the new event object.

6. Rename the ``discard`` method to ``onDetach``.

#### Controller

1. In the ``onInvocation`` method, use a method reference instead of the lambda expression as return type:

```java
// old
return new ConfiguredEventSink<>(params, () -> new MySink(params));

// new
return new ConfiguredEventSink<>(params, MySink::new);
```