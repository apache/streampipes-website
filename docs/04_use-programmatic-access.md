---
id: use-programmatic-access
title: Programmatic Access
sidebar_label: Programmatic Access
---

import UseCaseExample from '@site/src/components/docs/UseCaseExample.tsx';

Programmatic access is the right choice when StreamPipes should be controlled or queried from an external application instead of only from the web interface. Typical examples include lifecycle automation for pipelines, inventory or metadata queries, and live consumption of data streams from another service.

This page focuses on the Java client. If you are looking for Python support, use the dedicated Python documentation instead.

## When programmatic access makes sense

Not every integration with StreamPipes needs a custom extension. Sometimes the easier and more maintainable option is to keep StreamPipes as the platform and let an external application interact with it over the client API.

<UseCaseExample title="A practical automation scenario">
  A manufacturing application knows which product is currently being produced and starts or stops the corresponding monitoring pipelines automatically. The application does not need to implement StreamPipes functionality itself. It only needs to interact with the platform programmatically.
</UseCaseExample>

Other common scenarios are collecting live data from a stream inside another service, listing available streams or pipelines, or reusing platform metadata such as templates and sink definitions.

## Python client

We provide a Python client that allows to interact with StreamPipes and is tailored for data science support.

Find the complete guide here: [Python Documentation](https://streampipes.apache.org/docs/docs/python/latest/)


## Java Client 

### Start with the correct client version

The client library version should match the installed StreamPipes version. When you add the Java dependency, replace `${streampipes.version}` with the version of the StreamPipes installation you are working against.

```xml
<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-client</artifactId>
    <version>${streampipes.version}</version>
</dependency>
```

This version alignment matters because the client and the server should agree on the available API surface and data structures.

### Decide how the client should authenticate

To communicate with StreamPipes, the client needs valid credentials. In practice, there are two common choices.

An API token is tied to one user account and inherits that user’s permissions. A service account is separate from a person and is usually the better choice for automation or long-running integrations because it can be governed independently.

To obtain an API token in the UI, open the user menu and navigate to `Profile/API`. Administrators can create service accounts in the `Security` section.

The rule of thumb is simple: if the integration is personal and temporary, an API token may be acceptable. If the integration is operational and should outlive individual users, a service account is usually the better design.

### Connect the client to StreamPipes

Once the dependency and credentials are in place, the Java client can be created directly:

```java
CredentialsProvider credentials = StreamPipesCredentials
    .withApiKey("admin@streampipes.apache.org", "YOUR_API_KEY");

StreamPipesClient client = StreamPipesClient
    .create("localhost", 8082, credentials, true);
```

The credentials block can also be created with a service token instead of an API key. The client itself needs the host, the port, the credentials object, and the HTTPS flag. StreamPipes also provides convenience creation options, but the important point is that the client should connect to the same public address and protocol configuration your users would use in the browser.

### Use the client for metadata and lifecycle work

Once connected, the client can inspect streams, pipelines, sinks, and templates, and it can also trigger lifecycle operations such as starting or stopping pipelines.

```java
List<SpDataStream> streams = client.streams().all();

Optional<SpDataStream> stream = client.streams().get("STREAM_ID");
EventSchema schema = stream.get().getEventSchema();
List<EventProperty> fields = schema.getEventProperties();

List<Pipeline> pipelines = client.pipelines().all();
PipelineOperationStatus startStatus = client.pipelines().start(pipelines.get(0));
PipelineOperationStatus stopStatus = client.pipelines().stop("PIPELINE_ID");

List<PipelineElementTemplate> templates = client.pipelineElementTemplates().all();
List<DataSinkInvocation> dataSinks = client.sinks().all();
```

The most useful way to think about these calls is not as isolated snippets, but as a client-side view into the same platform objects users see in the UI. Streams expose schema, pipelines expose lifecycle, templates expose reusable configuration, and sinks expose available targets.

### Consume live data from streams

If the goal is not only to query metadata but also to consume live stream data, the client needs support for the messaging protocol used inside the StreamPipes installation.

Depending on the installation, that can mean adding support for Kafka, NATS, or MQTT:

```xml
<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-messaging-kafka</artifactId>
    <version>${streampipes.version}</version>
</dependency>

<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-messaging-nats</artifactId>
    <version>${streampipes.version}</version>
</dependency>

<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-messaging-mqtt</artifactId>
    <version>${streampipes.version}</version>
</dependency>
```

The client also needs the matching internal data format. JSON is the standard default:

```xml
<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-dataformat-json</artifactId>
    <version>${streampipes.version}</version>
</dependency>
```

After that, register the protocol and data format in the client:

```java
client.registerProtocol(new SpKafkaProtocolFactory());

// or NATS:
client.registerProtocol(new SpNatsProtocolFactory());

client.registerDataFormat(new JsonDataFormatFactory());
```

Then you can subscribe to a stream:

```java
client.streams().subscribe(dataStreams.get(0), new EventProcessor() {
  @Override
  public void onEvent(Event event) {
    MapUtils.debugPrint(System.out, "event", event.getRaw());
  }
});
```

This is the point where the client moves from platform automation into live stream consumption. The important operational question is therefore not only “does the Java code compile?” but also “does the chosen protocol match the actual StreamPipes installation?”

### How to work well with the client

The most reliable pattern is to use the client for clearly scoped tasks: read platform metadata, automate lifecycle operations, or consume live stream data in a controlled way. A service account with appropriately limited permissions is usually the best basis for that work.

It is also worth keeping the responsibilities clear. The client is a way to interact with StreamPipes, not to reimplement it. If your application needs the platform’s stream, pipeline, or dataset behavior, it is usually better to let StreamPipes remain the owner of that logic and use the client as the integration surface.
