---
id: extend-tutorial-data-sources
title: "Tutorial: Data Sources"
sidebar_label: "Tutorial: Data Sources"
original_id: extend-tutorial-data-sources
---

In this tutorial, we will add a new data source consisting of a single data stream. The source will be provided as a standalone component (i.e., the description will be accessible through an integrated web server).

## Objective

We are going to create a new data stream that is produced by a GPS sensor installed in a delivery vehicle.
The sensor produces a continuous stream of events that contain the current timestamp, the current lat/lng position of the vehicle and the plate number of the vehicle.
Events are published in a JSON format as follows:
```json
{
  "timestamp" : 145838399,
  "latitude" : 37.04,
  "longitude" : 17.04,
  "plateNumber" : "KA-AB 123"
}
```

These events are published to a Kafka broker using the topic `org.streampipes.tutorial.vehicle`.

In the following section, we show how to describe this stream in a form that allows you to import and use it in StreamPipes.

## Project setup

Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton (streampipes-archetype-extensions-jvm).
Enter the following command in a command line of your choice (Apache Maven needs to be installed):

```
mvn archetype:generate \
-DarchetypeGroupId=org.apache.streampipes -DarchetypeArtifactId=streampipes-archetype-extensions-jvm \
-DarchetypeVersion=0.69.0 -DgroupId=my.groupId \
-DartifactId=my-source -DclassNamePrefix=MySource -DpackageName=mypackagename
```

You will see a project structure similar to the structure shown in the [archetypes](06_extend-archetypes.md) section.

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.
</p>
</div>

## Adding a data stream description

Now we will add a new data stream definition.
First, create a new class `MyVehicleStream` which should look as follows:

```java

package org.apache.streampipes.pe.example;

import org.apache.streampipes.model.SpDataStream;
import org.apache.streampipes.sources.AbstractAdapterIncludedStream;

public class MyVehicleStream extends AbstractAdapterIncludedStream {

  @Override
  public SpDataStream declareModel() {
    return null;
  }

  @Override
  public void executeStream() {

  }
}
```

This class extends the class ``AbstractAdapterIncludedStream``, which indicates that this source continuously produces data (configured in the ``executeStream()`` method.
In contrast, the class `AbstractAlreadyExistingStream` indicates that we only want to describe an already existing stream (e.g., a stream that already sends data to an existing Kafka broker).

Next, we will add the definition of the data stream. Add the following code inside of the `declareModel` method:
```java
return DataStreamBuilder.create("org.streampipes.tutorial.vehicle.position", "Vehicle Position", "An event stream " +
          "that produces current vehicle positions")
```

This line creates a new instance of the SDK's `DataStreamBuilder` by providing three basic parameters:
The first parameter must be a unique identifier of your data stream.
The second and third parameters indicate a label and a description of your stream.
These values will later be used in the StreamPipes UI to display stream details in a human-readable manner.

Next, we will add the properties as stated above to the stream definition by adding the following lines:
```java
.property(EpProperties.timestampProperty("timestamp"))
.property(EpProperties.stringEp(Labels.from("plate-number", "Plate Number", "Denotes the plate number of the vehicle"), "plateNumber", "http://my.company/plateNumber"))
.property(EpProperties.doubleEp(Labels.from("latitude", "Latitude", "Denotes the latitude value of the vehicle's position"), "latitude", Geo.lat))
.property(EpProperties.doubleEp(Labels.from("longitude", "Longitude", "Denotes the longitude value of the vehicle's position"), "longitude", Geo.lng))
```
These four _event properties_ compose our _event schema_. An event property must, at least, provide the following attributes:

* **Runtime Name**. The runtime name indicates the key of the property at runtime, e.g., if our JSON message contains a structure such as `{"plateNumber" : "KA-F 123"}`, the runtime name must be `plateNumber`.
* **Runtime Type**. An event property must have a primitive type (we will later see how to model more complex properties such as lists and nested properties).
  The type must be an instance of `XMLSchema` primitives, however, the SDK provides convenience methods to provide the property type.
* **Domain Property**. The domain property indicates the semantics of the event property. For instance, the `latitude` property is linked to the `http://www.w3.org/2003/01/geo/wgs84_pos#lat` property of the WGS84 vocabulary.
  The domain property should be an URI as part of an existing or domain-specific vocabulary. The SDK provides convenience methods for popuplar vocabularies (e.g., Schema.org, Dolce or WGS84).

In order to complete the minimum required specification of an event stream, we need to provide information on the transport format and protocol of the data stream at runtime.

This can be achieved by extending the builder with the respective properties:
```java
.format(Formats.jsonFormat())
.protocol(Protocols.kafka("localhost", 9094, "TOPIC_SHOULD_BE_CHANGED"))
.build();
```

Set ``org.streampipes.tutorial.vehicle`` as your new topic by replacing the term ``TOPIC_SHOULD_BE_CHANGED`.

In this example, we defined that the data stream consists of events in a JSON format and that Kafka is used as a message broker to transmit events.
The last build() method call triggers the construction of the data stream definition.

That's it! In the next section, we will connect the data stream to a source and inspect the generated RDF description.

## Creating some dummy data

Let's assume our stream should produce some random values that are sent to StreamPipes. We'll add a very simple data simulator to the ``executeStream`` method as follows:

```java
@Override
  public void executeStream() {

    SpKafkaProducer producer = new SpKafkaProducer("localhost:9094", "my-topic", Collections.emptyList());
    Random random = new Random();
    Runnable runnable = () -> {
      for (;;) {
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("timestamp", System.currentTimeMillis());
        jsonObject.addProperty("plateNumber", "KA-FZ 1");
        jsonObject.addProperty("latitude", random.nextDouble());
        jsonObject.addProperty("longitude", random.nextDouble());
    
        producer.publish(jsonObject.toString());
    
        try {
        TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
        e.printStackTrace();
        }
  
      }
    };

    new Thread(runnable).start();
  }
```

Change the topic and the URL of your Kafka broker (as stated in the controller).

## Registering the data stream

You need to register the stream in the service definition. Open the ``Init`` class and register the ``MyVehicleStream``:

```java

  @Override
  public SpServiceDefinition provideServiceDefinition() {
    return SpServiceDefinitionBuilder.create("org.apache.streampipes",
                    "human-readable service name",
                    "human-readable service description", 8090)
            .registerPipelineElement(new ExampleDataProcessor())
            .registerPipelineElement(new ExampleDataSink())
            .registerPipelineElement(new MyVehicleStream())
            .registerMessagingFormats(
                    new JsonDataFormatFactory(),
                    new CborDataFormatFactory(),
                    new SmileDataFormatFactory(),
                    new FstDataFormatFactory())
            .registerMessagingProtocols(
                    new SpKafkaProtocolFactory(),
                    new SpJmsProtocolFactory(),
                    new SpMqttProtocolFactory())
            .build();
  }

```

You can remove the other two example classes if you want.

## Starting the service

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Once you start the service, it will register in StreamPipes with the hostname. The hostname will be auto-discovered and should work out-of-the-box.
In some cases, the detected hostname is not resolvable from within a container (where the core is running). In this case, provide a SP_HOST environment variable to override the auto-discovery.
</p>
</div>

Now we are ready to start our first container!

Execute the main method in the class `Init`, open a web browser and navigate to http://localhost:8090, or change the port according to the value of the ``SP_PORT`` variable in the env file.

Configure your IDE to provide an environment variable called ``SP_DEBUG`` with value ``true`` when starting the project.

You should see something as follows:

<img src="/img/tutorial-sources/pe-overview.PNG" alt="Pipeline Element Container Overview"/>

Click on the link of the data source to see the generated description of the pipeline element.

<img src="/img/tutorial-sources/pe-rdf.PNG" alt="Pipeline Element description"/>

The container automatically registers itself in StreamPipes.

To install the just created element, open the StreamPipes UI and install the source over the ``Install Pipeline Elements`` section.

## Read more

Congratulations! You've just created your first pipeline element for StreamPipes.
There are many more things to explore and data sources can be defined in much more detail.
