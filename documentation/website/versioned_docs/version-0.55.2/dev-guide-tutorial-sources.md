---
id: version-0.55.2-dev-guide-tutorial-sources
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

Currently, there are two options to start a new project (option 1 is recommended):

**Option 1: Using a template project**

Clone the following project from our Github repo: https://github.com/streampipes/templates-sources

Import the project into an IDE of your choice.
You should see a structure like this:

<img src="/img/tutorial-sources/project-structure.PNG" alt="Project Structure">

Rename the class `TemplateSource.java` to `VehicleSource.java` and the class `TemplateStream.java` to `VehicleStream.java`.

That's it, go to the next section to learn how to create your first data stream!

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.
</p>
</div>

**Option 2: Start a new project from scratch**

If you want to start from scratch, we refer to the [Sources SDK guide](dev-guide-processor-sdk.md) which provides instructions on the general project setup.

## Adding a data stream description

Now we will add a new data stream definition.
First, open the class `VehicleStream` which should look as follows:

```java
package org.streampipes.tutorial.source;

import org.streampipes.model.EventStream;
import de.fzi.cep.sepa.model.impl.graph.SepDescription;
import de.fzi.cep.sepa.sources.AbstractAlreadyExistingStream;

public class VehiclePositionStream extends AbstractAlreadyExistingStream {

  @Override
  public EventStream declareModel(SepDescription sep) {


  }
}
```

This class extends the class `AbstractAlreadyExistingStream`. This class indicates that we only want to describe an already existing stream (e.g., a stream that already sends data to an existing Kafka broker).
In contrast, if you'd plan to define a stream that produces data (e.g., simulates vehicle positions directly from this module), you could extend the class `AbstractAdapterIncludedStream`.

No we will add the definition of the data stream. Add the following code inside of the `declareModel` method:
```java
return DataStreamBuilder.create("vehicle-position", "Vehicle Position", "An event stream " +
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
.protocol(Protocols.kafka("ipe-koi15.fzi.de", 9092, "org.streampipes.tutorial.vehicle"))
.build();
```
In this example, we defined that the data stream consists of events in a JSON format and that Kafka is used as a message broker to transmit events.
The last build() method call triggers the construction of the RDF-based data stream definition.

That's it! In the next section, we will connect the data stream to a source and inspect the generated RDF description.

## Adding a source description

A data source can be seen like a container for a set of data streams. Usually, a data source includes events that are logically or physically connected.
For instance, in our example we would add other streams produced by vehicle sensors (such as fuel consumption) to the same data source description.

Open the class `VehicleSource` which should look as follows:
```java
import org.streampipes.container.declarer.EventStreamDeclarer;
import org.streampipes.container.declarer.SemanticEventProducerDeclarer;
import org.streampipes.model.graph.DataSourceDescription;
import org.streampipes.sdk.builder.DataSourceBuilder;

import java.util.Arrays;
import java.util.List;

public class TemplateSource implements SemanticEventProducerDeclarer {

    @Override
    public DataSourceDescription declareModel() {
        return DataSourceBuilder.create("template-source", "Template Source", "This is a " +
                "template to build your first StreamPipes source")
                .build();

    }

    @Override
    public List<EventStreamDeclarer> getEventStreams() {
        return Arrays.asList(new TemplateStream());
    }
}
```
First, we need to define the source. Similar to data streams, a source consists of an id, a human-readable name and a description.
Replace the content defined in the `declareModel` method with the following code:
```java
return DataSourceBuilder.create("source-vehicle", "Vehicle Source", "A data source that " +
    "holds event streams produced by vehicles.")
    .build();
```
Now we need to add the data stream we created before. This can be done by including the stream into the `getEventStreams` method:
```java
@Override
    public List<EventStreamDeclarer> getEventStreams() {
    return Arrays.asList(new VehicleStream());
}
```

## Preparing the container

The final step is to define the deployment type of our new data source. In this tutorial, we will create a so-called `StandaloneModelSubmitter`.
This client will start an embedded web server that provides the description of our data source.

Create a new class `Main` that implements `StandaloneModelSubmitter` and add the following code into the main method:
```java
public static void main(String[] args) {

   DeclarersSingleton.getInstance().add(new VehicleSource());

   new Main().init(TemplateConfig.INSTANCE);

}
```
This code adds the `VehicleSource` and sets the port where the web server will be available. Finally, the `init` method is called
which triggers the generation of the corresponding RDF description and startup of the web server.

<div class="admonition info">
<div class="admonition-title">Info</div>
<p>In the example above, we make use of a class `TemplateConfig`.
       This class contains both mandatory and additional configuration parameters required by a pipeline element container.
       These values are stored in the Consul-based key-value store of your StreamPipes installation.
       The SDK guide contains a detailed manual on managing container configurations.</p>
</div>

## Starting the container

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>By default, the container registers itself using the hostname later used by the Docker container, leading to a 404 error when you try to access an RDF description.
       For local development, you need to change the hostname in Consul to `localhost`.
       Open the class `TemplateConfig.java` and change the value defined in the `HOST` variable from `template-sources` to `localhost`.</p>
</div>

Now we are ready to start our first container!

Execute the main method in the class `Main` we've just created, open a web browser and navigate to http://localhost:8090.

You should see something as follows:

<img src="/img/tutorial-sources/pe-overview.PNG" alt="Pipeline Element Container Overview">

Click on the link of the data source to see the RDF description of the pipeline element.

<img src="/img/tutorial-sources/pe-rdf.PNG" alt="Pipeline Element RDF description">

The container automatically registers itself in the Consul installation of StreamPipes.
To install the just created element, open the StreamPipes UI and follow the manual provided in the [user guide](user-guide-processing-elements.md).

## Read more

Congratulations! You've just created your first pipeline element for StreamPipes.
There are many more things to explore and data sources can be defined in much more detail.
Follow our [SDK guide](dev-guide-source-sdk.md) to see what's possible!