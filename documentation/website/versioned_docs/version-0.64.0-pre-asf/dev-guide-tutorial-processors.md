---
id: version-0.64.0-pre-asf-dev-guide-tutorial-processors
title: Tutorial: Data Processors
sidebar_label: Tutorial: Data Processors
original_id: dev-guide-tutorial-processors
---

In this tutorial, we will add a new data processor using the Apache Flink wrapper.

From an architectural point of view, we will create a self-contained service that includes the description of the data processor and a Flink-compatible implementation.
Once a pipeline is started that uses this data processor, the implementation is submitted to an Apache Flink cluster.

## Objective

We are going to create a new data processor that realized a simple geofencing algorithm - we detect vehicles that enter a specified radius around a user-defined location.
This pipeline element will be a generic element that works with any event stream that provides geospatial coordinates in form of a latitude/longitude pair.

The algorithm outputs every location event once the position has entered the geofence.


<div class="admonition note">
<div class="admonition-title">Note</div>
<p>The implementation in this tutorial is pretty simple - our processor will fire an event every time the GPS location is inside the geofence.
       In a real-world application, you would probably want to define a pattern that recognizes the _first_ event a vehicle enters the geofence.<br/>
       This can be easily done using a CEP library, e.g., Apache Flink CEP.</p>
</div>


## Project setup

To create new projects from scratch, several Maven archetypes exist to start developing.
Enter the following command to create a new project based on the StreamPipes ``Processors-Flink`` archetype:

```
mvn archetype:generate -DarchetypeGroupId=org.streampipes \
-DarchetypeArtifactId=streampipes-archetype-pe-processors-flink -DarchetypeVersion=0.64.0 \
-DgroupId=org.streampipes.tutorial -DartifactId=geofence-tutorial -DclassNamePrefix=Geofencing -DpackageName=geofencing
```


Once you've imported the generated project, the project structure should look as follows:

<img src="/docs/img/tutorial-processors/project-structure-processor.PNG" alt="Project Structure Data Processor">


Due to a dependency conflict in the 0.64.0 release, add open your pom.xml and add the following lines to the ``dependencies`` section:
```
<dependency>
    <groupId>javax.validation</groupId>
    <artifactId>validation-api</artifactId>
    <version>2.0.1.Final</version>
</dependency>

```

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.</p>
</div>

Now you're ready to create your first data processor for StreamPipes!

## Adding data processor requirements

First, we will add a new stream requirement.
Open the class `GeofencingController` which should look as follows:

```java
package org.streampipes.tutorial.pe.processor.geofencing;

import org.streampipes.tutorial.config.Config;

import org.streampipes.model.DataProcessorType;
import org.streampipes.model.graph.DataProcessorDescription;
import org.streampipes.model.graph.DataProcessorInvocation;
import org.streampipes.sdk.builder.ProcessingElementBuilder;
import org.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.streampipes.sdk.extractor.ProcessingElementParameterExtractor;
import org.streampipes.sdk.helpers.EpRequirements;
import org.streampipes.sdk.helpers.Labels;
import org.streampipes.sdk.helpers.OutputStrategies;
import org.streampipes.sdk.helpers.SupportedFormats;
import org.streampipes.sdk.helpers.SupportedProtocols;
import org.streampipes.wrapper.flink.FlinkDataProcessorDeclarer;
import org.streampipes.wrapper.flink.FlinkDataProcessorRuntime;

public class GeofencingController extends
				FlinkDataProcessorDeclarer<GeofencingParameters> {

	private static final String EXAMPLE_KEY = "example-key";

	@Override
	public DataProcessorDescription declareModel() {
		return ProcessingElementBuilder.create("org.streampipes.tutorial-geofencing")
						.category(DataProcessorType.ENRICH)
                        .withAssets(Assets.DOCUMENTATION, Assets.ICON)
						.withLocales(Locales.EN)
						.requiredStream(StreamRequirementsBuilder
							.create()
							.requiredProperty(EpRequirements.anyProperty())
							.build())
						.outputStrategy(OutputStrategies.keep())
						.requiredTextParameter(Labels.from(EXAMPLE_KEY, "Example Text Parameter", "Example " +
				"Text Parameter Description"))
						.build();
	}

	@Override
	public FlinkDataProcessorRuntime<GeofencingParameters> getRuntime(DataProcessorInvocation
				graph, ProcessingElementParameterExtractor extractor) {

		String exampleString = extractor.singleValueParameter(EXAMPLE_KEY, String.class);

		GeofencingParameters params = new GeofencingParameters(graph, exampleString);

		return new GeofencingProgram(params, Config.INSTANCE.getDebug());
	}

}

```

In this class, we need to implement two methods: The `declareModel` method is used to define abstract stream requirements such as event properties that must be present in any input stream that is later connected to the element using the StreamPipes UI.
The second method, `getRuntime` is used to create and deploy the parameterized Flink program once a pipeline using this element is started.

Similar to data sources, the SDK provides a builder class to generate the description for data processors.
Delete the content within the ``declareModel`` method and add the following lines to the `declareModel` method:

```java
return ProcessingElementBuilder.create("org.streampipes.tutorial.geofencing", "Geofencing", "A simple geofencing data processor " +
            "using the Apache Flink wrapper")
```

This creates a new data processor with the ID, title and description assigned to the element builder.
Next, we add some _stream requirements_ to the description. As we'd like to develop a generic pipeline element that works with any event that provides a lat/lng pair, we define two stream requirements as stated below:

```java
.requiredStream(StreamRequirementsBuilder
    .create()
    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lat),
            Labels.from("latitude-field", "Latitude", "The event " +
            "property containing the latitude value"), PropertyScope.MEASUREMENT_PROPERTY)
    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lng),
            Labels.from("longitude-field", "Longitude", "The event " +
                    "property containing the longitude value"), PropertyScope.MEASUREMENT_PROPERTY)
    .build())
```

The first line, `.requiredStream()` defines that we want a data processor with exactly one input stream. Adding more stream requirements would create elements with multiple input connectors in StreamPipes.
Stream requirements can be assigned by using the `StreamRequirementsBuilder` class.
In our example, we define two requirements, so-called _domain property requirements_. In contrast to _data type requirements_ where we'd expect an event property with a field of a specific data type (e.g., float), domain property requirements expect a specific domain property, e.g., from a vocabulary such as the WGS84 Geo vocab.

Once a pipeline is deployed, we are interested in the actual field (and its field name) that contains the latitude and longitude values.
In some cases, there might me more than one field that satisfies a property requirement and we would like users to select the property the geofencing component should operate on.
Therefore, our example uses the method `requiredPropertyWithUnaryMapping`, which will map a requirement to a real event property of an input stream and  let the user choose the appropriate field in the StreamPipes UI when pipelines are defined.

Finally, the `PropertyScope` indicates that the required property is a measurement value (in contrast to a dimension value). This allows us later to provide improved user guidance in the pipeline editor.

Besides requirements, users should be able to define the center coordinate of the Geofence and the size of the fence defined as a radius around the center in meters.
The radius can be defined by adding a simple required text field to the description:

```java
.requiredIntegerParameter("radius", "Geofence Size", "The size of the circular geofence in meters.", 0, 1000, 1)
```

Similar to mapping properties, text parameters have an internalId (radius), a label and a description.
In addition, we can assign a _value specification_ to the parameter indicating the value range we support.
Our example supports a radius value between 0 and 1000 with a granularity of 1.
In the StreamPipes UI, a required text parameter is rendered as a text input field, in case we provide an optional value specification, a slider input is automatically generated.

Such user-defined parameters are called _static properties_. There are many different types of static properties (see the [Processor SDK](dev-guide-sdk-guide-processors#docsNav) for an overview).

One example are _DomainProperties_ we use for defining the center of the geofence.
Our data processor requires a lat/lng pair that marks the center of the geofence.
However, letting users directly input latitude and longitude coordinates wouldn't be very user-friendly.
Therefore, we can link required text parameters to _ontology concepts_. By understanding the required input, the StreamPipes UI is able to determine which user interface works best for a specific concept.

Add the following line to the `declareModel` method:

```java
.requiredOntologyConcept(Labels.from("location", "Geofence Center", "Provide the coordinate of the " +
    "geofence center"), OntologyProperties.mandatory(Geo.lat), OntologyProperties.mandatory(Geo.lng))

```

We've now defined that we would like to receive an instance that provides a latitude and a longitude coordinate.
Users can input these values either manually, or they can look up _domain knowledge_, i.e., knowledge stored isolated from the stream definition.

Finally, we need to define technical requirements of the data processor, called _groundings_.
StreamPipes supports various runtime data formats (e.g., JSON or Thrift) and various protocols (e.g., Kafka or JMS).
Each component defines supports formats and protocol separately.
For our example, we'd like to support JSON-based messages and Kafka as input and output broker protocol, so append the following:

```java
.supportedProtocols(SupportedProtocols.kafka())
.supportedFormats(SupportedFormats.jsonFormat())
.build();
```

Now we need to define the output of our Geofencing pipeline element.
As explained in the first section, the element should fire every time some geo-located entity arrives within the defined geofence.
Therefore, the processor outputs the same schema as it receives as an input.
Although we don't know the exact input right now as it depends on the stream users connect in StreamPipes when creating pipelines, we can define an _output strategy_ as follows:

```java
.outputStrategy(OutputStrategies.keep())
```

This defines a _KeepOutputStrategy_, i.e., the input event schema is not modified by the processor.
There are many more output strategies you can define depending on the functionality you desire, e.g., _AppendOutput_ for defining a processor that enriches events or _CustomOutput_ in case you would like users to select the output by themselves.

That's it! We've now defined input requirements, required user input, technical requirements concerned with data format and protocol and an output strategy.
In the next section, you will learn how to extract these parameters once the pipeline element is invoked after a pipeline was created.

## Pipeline element invocation

Once users start a pipeline that uses our geofencing component, the _getRuntime_ method in our class is called. The class `DataSinkInovcation` includes a graph that contains information on the configuration parameters a users has selected in the pipeline editor and information on the acutal streams that are connected to the pipeline element.

Before we explain in more detail how to extract these values from the processor invocation, we need to adapt a little helper class.
Open the file ```GeofencingParameters``` and modify it as follows:

```java
public class GeofencingParameters extends EventProcessorBindingParams {

  private String latitudeFieldName;
  private String longitudeFieldName;

  private Float centerLatitude;
  private Float centerLongitude;

  private Integer radius;

  public GeofencingParameters(DataProcessorInvocation graph, String latitudeFieldName, String longitudeFieldName,
                              Float centerLatitude, Float centerLongitude, Integer radius) {
    super(graph);
    this.latitudeFieldName = latitudeFieldName;
    this.longitudeFieldName = longitudeFieldName;
    this.centerLatitude = centerLatitude;
    this.centerLongitude = centerLongitude;
    this.radius = radius;
  }

  public String getLatitudeFieldName() {
    return latitudeFieldName;
  }

  public String getLongitudeFieldName() {
    return longitudeFieldName;
  }

  public Float getCenterLatitude() {
    return centerLatitude;
  }

  public Float getCenterLongitude() {
    return centerLongitude;
  }

  public Integer getRadius() {
    return radius;
  }
```

This simple Pojo class will later serve to store user-defined parameters in a single object.

Now we go back to the controller class and extract these values from the invocation object.

The ``ProcessingElementParameterExtractor``  provides convenience methods to extract the relevant information from the `DataProcessorInvocation` object.

Next, we are interested in the fields of the input event stream that contains the latitude and longitude value we would like to compute against the geofence center location as follows:

```java
String latitudeFieldName = extractor.mappingPropertyValue("latitude-field");
String longitudeFieldName = extractor.mappingPropertyValue("longitude-field");
```

We use the same `internalId` we've used to define the mapping property requirements in the `declareModel` method.

Next, for extracting the geofence center coordinates, we use the following statements:

```java
Float centerLatitude = extractor.supportedOntologyPropertyValue("location", Geo.lat, Float.class);
Float centerLongitude = extractor.supportedOntologyPropertyValue("location", Geo.lng, Float.class);
```

The radius value can be extracted as follows:

```java
Integer radius = extractor.singleValueParameter("radius", Integer.class);
```

Now we can create a new instance of our previously created parameter class:

```java
GeofencingParameters params = new GeofencingParameters(dataProcessorInvocation, latitudeFieldName,
            longitudeFieldName, centerLatitude, centerLongitude, radius);
```

Finally, return an instance of the class ```GeofencingProgram```:

```java
return new GeofencingProgram(params, true);
```

<div class="admonition tip">
<div class="admonition-title">Info</div>
<p>The line above uses the Flink MiniCluster to start the Flink program for debugging purposes.
       Before you build the project and use it in a real environment, replace the line as follows, which triggers cluster execution:
       <code>return new GeofencingProgram(params, new FlinkDeploymentConfig(Config.JAR_FILE, Config.INSTANCE.getFlinkHost(), Config.INSTANCE.getFlinkPort())</code></p>
</div>


Great! That's all we need to describe a data processor for usage in StreamPipes. Your controller class should look as follows:

```java
import org.streampipes.model.graph.DataProcessorDescription;
import org.streampipes.model.graph.DataProcessorInvocation;
import org.streampipes.model.schema.PropertyScope;
import org.streampipes.sdk.builder.ProcessingElementBuilder;
import org.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.streampipes.sdk.extractor.ProcessingElementParameterExtractor;
import org.streampipes.sdk.helpers.EpRequirements;
import org.streampipes.sdk.helpers.Labels;
import org.streampipes.sdk.helpers.OntologyProperties;
import org.streampipes.sdk.helpers.OutputStrategies;
import org.streampipes.sdk.helpers.SupportedFormats;
import org.streampipes.sdk.helpers.SupportedProtocols;
import org.streampipes.vocabulary.Geo;
import org.streampipes.wrapper.flink.FlinkDataProcessorDeclarer;
import org.streampipes.wrapper.flink.FlinkDataProcessorRuntime;

public class GeofencingController extends FlinkDataProcessorDeclarer<GeofencingParameters> {

  @Override
  protected FlinkDataProcessorRuntime<GeofencingParameters> getRuntime(DataProcessorInvocation dataProcessorInvocation) {
    ProcessingElementParameterExtractor extractor = ProcessingElementParameterExtractor.from(dataProcessorInvocation);

    String latitudeFieldName = extractor.mappingPropertyValue("latitude-field");
    String longitudeFieldName = extractor.mappingPropertyValue("longitude-field");

    Float centerLatitude = extractor.supportedOntologyPropertyValue("location", Geo.lat, Float.class);
    Float centerLongitude = extractor.supportedOntologyPropertyValue("location", Geo.lng, Float.class);

    Integer radius = extractor.singleValueParameter("radius", Integer.class);

    GeofencingParameters params = new GeofencingParameters(dataProcessorInvocation, latitudeFieldName,
            longitudeFieldName, centerLatitude, centerLongitude, radius);

    return new GeofencingProgram(params);
  }

  @Override
  public DataProcessorDescription declareModel() {
    return ProcessingElementBuilder.create("geofencing-flink", "Geofencing", "A simple geofencing data processor " +
            "using the Apache Flink wrapper")
            .requiredStream(StreamRequirementsBuilder
                    .create()
                    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lat),
                            Labels.from("latitude-field", "Latitude", "The event " +
                            "property containing the latitude value"), PropertyScope.MEASUREMENT_PROPERTY)
                    .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lng),
                            Labels.from("longitude-field", "Longitude", "The event " +
                                    "property containing the longitude value"), PropertyScope.MEASUREMENT_PROPERTY)
                    .build())
            .requiredIntegerParameter("radius", "Geofence Size", "The size of the circular geofence in meters.",
                    0, 1000, 1)
            .requiredOntologyConcept(Labels.from("location", "Geofence Center", "Provide the coordinate of the " +
                    "geofence center"), OntologyProperties.mandatory(Geo.lat), OntologyProperties.mandatory(Geo.lng))
            .supportedProtocols(SupportedProtocols.kafka())
            .supportedFormats(SupportedFormats.jsonFormat())
            .outputStrategy(OutputStrategies.keep())
            .build();
  }
}

```

## Adding an implementation

Everything we need to do now is to add an implementation which does not differ from writing an Apache Flink topology.

Open the class `GeofencingProcessor.java` and add the following piece of code, which realizes the Geofencing functionality:

```java
public class GeofencingProcessor implements FlatMapFunction<Map<String, Object>, Map<String, Object>> {

  private String latitudeFieldName;
  private String longitudeFieldName;

  private Float centerLatitude;
  private Float centerLongitude;

  private Integer radius;

  public GeofencingProcessor(String latitudeFieldName, String longitudeFieldName, Float centerLatitude, Float centerLongitude, Integer radius) {
    this.latitudeFieldName = latitudeFieldName;
    this.longitudeFieldName = longitudeFieldName;
    this.centerLatitude = centerLatitude;
    this.centerLongitude = centerLongitude;
    this.radius = radius;
  }

  @Override
  public void flatMap(Event in, Collector<Event> out) throws Exception {
    Float latitude = in.getFieldBySelector(latitudeFieldName).getAsPrimitive().getAsFloat();
    Float longitude = in.getFieldBySelector(longitudeFieldName).getAsPrimitive().getAsFloat();

    Float distance = distFrom(latitude, longitude, centerLatitude, centerLongitude);

    if (distance <= radius) {
      out.collect(in);
    }
  }

  public static Float distFrom(float lat1, float lng1, float lat2, float lng2) {
    double earthRadius = 6371000;
    double dLat = Math.toRadians(lat2-lat1);
    double dLng = Math.toRadians(lng2-lng1);
    double a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                    Math.sin(dLng/2) * Math.sin(dLng/2);
    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (float) (earthRadius * c);
  }

}
```

We won't go into details here as this isn't StreamPipes-related code, but in general the class extracts latitude and longitude fields from the input event (which is provided as a map data type) and calculates the distance between the geofence center and these coordinates.
If the distance is below the given radius, the event is forwarded to the next operator.

Finally, we need to connect this program to the Flink topology. StreamPipes automatically adds things like the Kafka consumer and producer, so that you only need to invoke the actual geofencing processor.
Open the file `GeofencingProgram` and append the following line inside the `getApplicationLogic()` method:

```java
return dataStreams[0].flatMap(new GeofencingProcessor(params.getLatitudeFieldName(), params.getLongitudeFieldName(),
    params.getCenterLatitude(), params.getCenterLongitude(), params.getRadius()));
```

## Preparing the container
The final step is to define the deployment type of our new data source. In this tutorial, we will create a so-called `StandaloneModelSubmitter`.
This client will start an embedded web server that provides the description of our data source and automatically submits the program to the registered Apache Flink cluster.

Go to the class `Init` that extends `StandaloneModelSubmitter` and should look as follows:
```java
package org.streampipes.tutorial.main;

import org.streampipes.container.init.DeclarersSingleton;
import org.streampipes.container.standalone.init.StandaloneModelSubmitter;

import org.streampipes.tutorial.config.Config;
import org.streampipes.tutorial.pe.processor.geofencing.GeofencingController;

public class Init extends StandaloneModelSubmitter {

  public static void main(String[] args) throws Exception {
    DeclarersSingleton.getInstance()
            .add(new GeofencingController());

    new Init().init(Config.INSTANCE);

  }
}
```

<div class="admonition info">
<div class="admonition-title">Info</div>
<p>In the example above, we make use of a class `Config`.
       This class contains both mandatory and additional configuration parameters required by a pipeline element container.
       These values are stored in the Consul-based key-value store of your StreamPipes installation.
       The SDK guide contains a detailed manual on managing container configurations.
</p>
</div>

## Starting the container
<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>By default, the container registers itself using the hostname later used by the Docker container, leading to a 404 error when you try to access an RDF description.
       For local development, we provide an environment file in the ``development`` folder. You can add your hostname here, which will override settings from the Config class.
       For instance, use the IntelliJ ``EnvFile`` plugin to automatically provide the environment variables upon start.
</p>
</div>


<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p> The default port of all pipeline element containers as defined in the `Config` file is port 8090.
       If you'd like to run mutliple containers at the same time on your development machine, change the port in the environment file.
</p>
</div>

Now we are ready to start our container!

Execute the main method in the class `Main` we've just created, open a web browser and navigate to http://localhost:8090 (or the port you have assigned in the environment file).

You should see something as follows:

<img src="/docs/img/tutorial-processors/pe-overview-flink.PNG" alt="Pipeline Element Container Overview (Flink)">

Click on the link of the data source to see the RDF description of the pipeline element.

<img src="/docs/img/tutorial-processors/pe-rdf-geofencing.PNG" alt="Geofencing RDF description">

The container automatically registers itself in the Consul installation of StreamPipes.
To install the just created element, open the StreamPipes UI and follow the manual provided in the [user guide](user-guide-installation).

## Read more

Congratulations! You've just created your first data processor for StreamPipes.
There are many more things to explore and data processors can be defined in much more detail using multiple wrappers.
Follow our [SDK guide](dev-guide-sdk-guide-processors) to see what's possible!