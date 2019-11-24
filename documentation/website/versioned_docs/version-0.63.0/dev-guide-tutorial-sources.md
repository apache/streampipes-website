---
id: version-0.63.0-dev-guide-tutorial-sources
title: Tutorial: Data Sources
sidebar_label: Tutorial: Data Sources
original_id: dev-guide-tutorial-sources
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

Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton.
Enter the following command in a command line of your choice (Apache Maven needs to be installed):

```
mvn archetype:generate \
-DarchetypeGroupId=org.streampipes -DarchetypeArtifactId=streampipes-archetype-pe-sources \
-DarchetypeVersion=0.63.0 -DgroupId=my.groupId \
-DartifactId=my-source -DclassNamePrefix=MySource -DpackageName=mypackagename
```

Configure the variables ``artifactId`` (which will be the Maven artifactId), ``classNamePrefix`` (which will be the class name of your data stream) and ``packageName``.

For this tutorial, use ``Vehicle`` as ``classNamePrefix``.

Your project will look as follows:

<img src="/docs/img/tutorial-sources/project-structure.PNG" alt="Project Structure">

That's it, go to the next section to learn how to create your first data stream!

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.
</p>
</div>

## Adding a data stream description

Now we will add a new data stream definition.
First, open the class `VehicleStream` which should look as follows:

```java

package my.groupId.pe.mypackagename;

import org.streampipes.model.SpDataStream;
import org.streampipes.model.graph.DataSourceDescription;
import org.streampipes.sdk.builder.DataStreamBuilder;
import org.streampipes.sdk.helpers.EpProperties;
import org.streampipes.sdk.helpers.Formats;
import org.streampipes.sdk.helpers.Protocols;
import org.streampipes.sources.AbstractAdapterIncludedStream;


public class MySourceStream extends AbstractAdapterIncludedStream {

  @Override
  public SpDataStream declareModel(DataSourceDescription sep) {
    return DataStreamBuilder.create("my.groupId-mypackagename", "MySource", "")
            .property(EpProperties.timestampProperty("timestamp"))

            // configure your stream here

            .format(Formats.jsonFormat())
            .protocol(Protocols.kafka("localhost", 9092, "TOPIC_SHOULD_BE_CHANGED"))
            .build();
  }

  @Override
  public void executeStream() {

  }
}
```

This class extends the class ``AbstractAdapterIncludedStream``, which indicates that this source continuously produces data (configured in the ``executeStream()`` method.
In contrast, the class `AbstractAlreadyExistingStream` indicates that we only want to describe an already existing stream (e.g., a stream that already sends data to an existing Kafka broker).

No we will add the definition of the data stream. Add the following code inside of the `declareModel` method:
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

This can be achieved by extending the builder with the respective properties (which should already have been auto-generated):
```java
.format(Formats.jsonFormat())
.protocol(Protocols.kafka("localhost", 9092, "TOPIC_SHOULD_BE_CHANGED"))
.build();
```

Set ``org.streampipes.tutorial.vehicle`` as your new topic by replacing the term ``TOPIC_SHOULD_BE_CHANGED`.

In this example, we defined that the data stream consists of events in a JSON format and that Kafka is used as a message broker to transmit events.
The last build() method call triggers the construction of the RDF-based data stream definition.

That's it! In the next section, we will connect the data stream to a source and inspect the generated RDF description.

## Creating some dummy data

Let's assume our stream should produce some random values that are sent to StreamPipes. We'll add a very simple data simulator to the ``executeStream`` method as follows:

```java
@Override
  public void executeStream() {

    SpKafkaProducer producer = new SpKafkaProducer("localhost:9092", "TOPIC_SHOULD_BE_CHANGED");
    Random random = new Random();
    Runnable runnable = new Runnable() {
      @Override
      public void run() {
        for (;;) {
          JsonObject jsonObject = new JsonObject();
          jsonObject.addProperty("timestamp", System.currentTimeMillis());
          jsonObject.addProperty("plateNumber", "KA-FZ 1");
          jsonObject.addProperty("latitude", random.nextDouble());
          jsonObject.addProperty("longitude", random.nextDouble());

          producer.publish(jsonObject.toString());

          try {
            Thread.sleep(1000);
          } catch (InterruptedException e) {
            e.printStackTrace();
          }

        }
      }
    };

    new Thread(runnable).start();
  }
```

Change the topic and the URL of your Kafka broker (as stated in the controller).

## Adding a source description

A data source can be seen like a container for a set of data streams. Usually, a data source includes events that are logically or physically connected.
For instance, in our example we would add other streams produced by vehicle sensors (such as fuel consumption) to the same data source description.

Open the class `DataSource` which should look as follows:
```java

package my.groupId.pe.mypackagename;

import org.streampipes.container.declarer.DataStreamDeclarer;
import org.streampipes.container.declarer.SemanticEventProducerDeclarer;
import org.streampipes.model.graph.DataSourceDescription;
import org.streampipes.sdk.builder.DataSourceBuilder;

import java.util.Arrays;
import java.util.List;


public class DataSource implements SemanticEventProducerDeclarer {

  public DataSourceDescription declareModel() {
    return DataSourceBuilder.create("my.groupId.mypackagename.source", "MySource " +
        "Source", "")
            .build();
  }

  public List<DataStreamDeclarer> getEventStreams() {
    return Arrays.asList(new MySourceStream());
  }
}
```
First, we need to define the source. Similar to data streams, a source consists of an id, a human-readable name and a description.
Replace the content defined in the `declareModel` method with the following code:
```java
return DataSourceBuilder.create("org.streampipes.tutorial.source.vehicle", "Vehicle Source", "A data source that " +
    "holds event streams produced by vehicles.")
    .build();
```

## Preparing the container

The final step is to define the deployment type of our new data source. In this tutorial, we will create a so-called `StandaloneModelSubmitter`.
This client will start an embedded web server that provides the description of our data source.

Go to the class `Init` that implements `StandaloneModelSubmitter`, which should look as follows:
```java
package my.groupId.main;

import org.streampipes.container.init.DeclarersSingleton;
import org.streampipes.container.standalone.init.StandaloneModelSubmitter;
import my.groupId.config.Config;
import my.groupId.pe.mypackagename.DataSource;

public class Init extends StandaloneModelSubmitter {

  public static void main(String[] args) throws Exception {
    DeclarersSingleton.getInstance()
            .add(new DataSource());

    new Init().init(Config.INSTANCE);

  }
}
```
This code adds the `VehicleSource`. Finally, the `init` method is called
which triggers the generation of the corresponding RDF description and startup of the web server.

<div class="admonition info">
<div class="admonition-title">Info</div>
<p>In the example above, we make use of a class `Config`.
       This class contains both mandatory and additional configuration parameters required by a pipeline element container.
       These values are stored in the Consul-based key-value store of your StreamPipes installation.
       The SDK guide contains a detailed manual on managing container configurations.</p>
</div>

## Starting the container

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>By default, the container registers itself using the hostname later used by the Docker container, leading to a 404 error when you try to access an RDF description.
       For local development, we provide an environment file in the ``development`` folder. You can add your hostname here, which will override settings from the Config class.
       For instance, use the IntelliJ ``EnvFile`` plugin to automatically provide the environment variables upon start.
</p>
</div>

Now we are ready to start our first container!

Execute the main method in the class `Main` we've just created, open a web browser and navigate to http://localhost:8090, or change the port according to the value of the ``SP_PORT`` variable in the env file.

You should see something as follows:

<img src="/docs/img/tutorial-sources/pe-overview.PNG" alt="Pipeline Element Container Overview">

Click on the link of the data source to see the RDF description of the pipeline element.

<img src="/docs/img/tutorial-sources/pe-rdf.PNG" alt="Pipeline Element RDF description">

The container automatically registers itself in the Consul installation of StreamPipes.
To install the just created element, open the StreamPipes UI and follow the manual provided in the [user guide](user-guide-introduction).

## Read more

Congratulations! You've just created your first pipeline element for StreamPipes.
There are many more things to explore and data sources can be defined in much more detail.
Follow our [SDK guide](dev-guide-source-sdk) to see what's possible!