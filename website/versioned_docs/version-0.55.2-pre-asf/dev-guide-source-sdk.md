---
id: version-0.55.2-pre-asf-dev-guide-sdk-guide-sources
title: SDK Guide Sources
sidebar_label: SDK Guide Sources
original_id: dev-guide-sdk-guide-sources
---

## Project Setup

Open the IDE of your choice and create a new maven project. Add the following dependencies to your pom file:

<details class="info">
<summary>pom.xml</summary>
```xml
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-container-standalone</artifactId>
    <version>0.50.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-sdk</artifactId>
    <version>0.50.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to connect a new data stream with StreamPipes -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-sources</artifactId>
    <version>0.50.0</version>
</dependency>
```
</details>

Now you need to create three new classes:

First, create a new class `MyStreamController` as follows:
```java
import org.streampipes.model.SpDataStream;
import org.streampipes.model.graph.DataSourceDescription;
import org.streampipes.sources.AbstractAlreadyExistingStream;

public class MyStreamController extends AbstractAlreadyExistingStream {

  @Override
  public SpDataStream declareModel(DataSourceDescription sep) {

  }
}
```
Next, create a new class `MyStreamSource` as follows:

```java
import org.streampipes.container.declarer.EventStreamDeclarer;
import org.streampipes.container.declarer.SemanticEventProducerDeclarer;
import org.streampipes.model.graph.DataSourceDescription;

import java.util.List;

public class MyStreamSource implements SemanticEventProducerDeclarer {

    @Override
    public DataSourceDescription declareModel() {
      return null;
    }

    @Override
    public List<EventStreamDeclarer> getEventStreams() {
        return null;
    }
}
```

## SDK Reference
The complete SDK reference for defining data processors will follow soon. Please check the SDK's Javadoc for now!