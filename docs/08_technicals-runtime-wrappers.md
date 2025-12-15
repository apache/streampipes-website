---
id: technicals-runtime-wrappers
title: Runtime Wrappers
sidebar_label: Runtime Wrappers
---

## Overview

In general, StreamPipes has an exchangeable runtime layer, e.g., the actual processing of incoming events can be delegated to a third-party stream processing system such as Kafka Streams or Apache Flink.

The default runtime wrapper is the StreamPipes Native Wrapper, called the `StandaloneWrapper`.

Although not recommended for production, we invite interested developers to check out our experimental wrappers:

* Kafka Streams runtime wrapper at [https://github.com/apache/streampipes/tree/dev/streampipes-wrapper-kafka-streams](https://github.com/apache/streampipes/tree/dev/streampipes-wrapper-kafka-streams) 
* Apache Flink runtime wrapper at [https://github.com/apache/streampipes/tree/dev/streampipes-wrapper-flink](https://github.com/apache/streampipes/tree/dev/streampipes-wrapper-flink)

## Assigning a runtime wrapper to an extension service

Runtime wrappers can be assigned in the `Service Definition` of the `Init` class of an extension service:

```java

  @Override
  public SpServiceDefinition provideServiceDefinition(){
    return SpServiceDefinitionBuilder.create("org.apache.streampipes.extensions.all.jvm",
    "StreamPipes Extensions (JVM)",
    "",8090)
    ...
    .registerRuntimeProvider(new StandaloneStreamPipesRuntimeProvider())
    ...
    .build();
  }

```

Please let us know through our communication channels if you are interested in this feature and if you are willing to contribute!
