---
id: version-0.90.0-extend-tutorial-data-processors
title: Tutorial: Data Processors
sidebar_label: Tutorial: Data Processors
original_id: extend-tutorial-data-processors
---

In this tutorial, we will add a new data processor.

From an architectural point of view, we will create a self-contained service that includes the description of the data processor and an implementation.

## Objective

We are going to create a new data processor that realizes a simple geofencing algorithm - we detect vehicles that enter a specified radius around a user-defined location.
This pipeline element will be a generic element that works with any event stream that provides geospatial coordinates in form of a latitude/longitude pair.

The algorithm outputs every location event once the position has entered the geofence.


<div class="admonition note">
<div class="admonition-title">Note</div>
<p>The implementation in this tutorial is pretty simple - our processor will fire an event every time the GPS location is inside the geofence.
       In a real-world application, you would probably want to define a pattern that recognizes the _first_ event a vehicle enters the geofence.<br/>
       This can be easily done using a CEP library.</p>
</div>


## Project setup

Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton (streampipes-archetype-extensions-jvm).
Enter the following command in a command line of your choice (Apache Maven needs to be installed):

```
mvn archetype:generate \
-DarchetypeGroupId=org.apache.streampipes -DarchetypeArtifactId=streampipes-archetype-extensions-jvm \
-DarchetypeVersion=0.70.0 -DgroupId=my.groupId \
-DartifactId=my-example -DclassNamePrefix=MyExample -DpackageName=mypackagename
```

You will see a project structure similar to the structure shown in the [archetypes](06_extend-archetypes.md) section.

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.</p>
</div>

Now you're ready to create your first data processor for StreamPipes!

## Adding data processor requirements

First, we will add a new stream requirement.
Create a new class `GeofencingProcessor` which should look as follows:

```java
package org.apache.streampipes.pe.example;

import org.apache.streampipes.commons.exceptions.SpRuntimeException;
import org.apache.streampipes.model.DataProcessorType;
import org.apache.streampipes.model.graph.DataProcessorDescription;
import org.apache.streampipes.model.runtime.Event;
import org.apache.streampipes.sdk.builder.ProcessingElementBuilder;
import org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.apache.streampipes.sdk.helpers.EpRequirements;
import org.apache.streampipes.sdk.helpers.Labels;
import org.apache.streampipes.sdk.helpers.Locales;
import org.apache.streampipes.sdk.helpers.OutputStrategies;
import org.apache.streampipes.sdk.utils.Assets;
import org.apache.streampipes.wrapper.context.EventProcessorRuntimeContext;
import org.apache.streampipes.wrapper.routing.SpOutputCollector;
import org.apache.streampipes.wrapper.standalone.ProcessorParams;
import org.apache.streampipes.wrapper.standalone.StreamPipesDataProcessor;

public class GeofencingProcessor extends StreamPipesDataProcessor {

 private static final String LATITUDE_CENTER = "latitude-center";
 private static final String LONGITUDE_CENTER = "longitude-center";

 @Override
 public DataProcessorDescription declareModel() {
  return ProcessingElementBuilder.create("org.apache.streampipes.tutorial-geofencing")
          .category(DataProcessorType.ENRICH)
          .withAssets(Assets.DOCUMENTATION, Assets.ICON)
          .build();
 }

 @Override
 public void onInvocation(ProcessorParams parameters, SpOutputCollector spOutputCollector, EventProcessorRuntimeContext runtimeContext) throws SpRuntimeException {

 }

 @Override
 public void onEvent(Event event, SpOutputCollector collector) throws SpRuntimeException {

 }

 @Override
 public void onDetach() throws SpRuntimeException {

 }
}


```

In this class, we need to implement three methods: The `declareModel` method is used to define abstract stream requirements such as event properties that must be present in any input stream that is later connected to the element using the StreamPipes UI.
The second method, `onInvocation` is triggered once a pipeline is started. Finally, the `onEvent` method

Similar to data sources, the SDK provides a builder class to generate the description for data processors.
Delete the content within the ``declareModel`` method and add the following lines to the `declareModel` method:

```java
return ProcessingElementBuilder.create("org.apache.streampipes.tutorial.geofencing", "Geofencing", "A simple geofencing data processor")
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

Such user-defined parameters are called _static properties_. There are many different types of static properties (see
 the [Processor SDK](06_extend-sdk-static-properties.md) for an overview).

In this example, we'll further add two very simple input fields to let users provide latitude and longitude of the geofence center.

Add the following line to the `declareModel` method:

```java
   .requiredFloatParameter(Labels.from(LATITUDE_KEY, "Latitude", "The latitude value"))
   .requiredFloatParameter(Labels.from(LONGITUDE_KEY, "Longitude", "The longitude value"))

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

That's it! We've now defined input requirements, required user input and an output strategy.
In the next section, you will learn how to extract these parameters once the pipeline element is invoked after a pipeline was created.

## Pipeline element invocation

Once users start a pipeline that uses our geofencing component, the _onInvocation_ method in our class is called. The class `ProcessorParams` includes convenient access to user-configured parameters a users has selected in the pipeline editor and information on the acutal streams that are connected to the pipeline element.

Next, we are interested in the fields of the input event stream that contains the latitude and longitude value we would like to compute against the geofence center location as follows:

```java
String latitudeFieldName = parameters.extractor().mappingPropertyValue("latitude-field");
String longitudeFieldName = parameters.extractor().mappingPropertyValue("longitude-field");
```

We use the same `internalId` we've used to define the mapping property requirements in the `declareModel` method.

Next, for extracting the geofence center coordinates, add to class variables centerLatitude and centerLongitude and assign the selected values using the following statements:

```java
this.centerLatitude = parameters.extractor().singleValueParameter(LATITUDE_CENTER, Float.class);
this.centerLongitude = parameters.extractor().singleValueParameter(LONGITUDE_CENTER, Float.class);
```

The radius value can be extracted as follows:

```java
int radius = parameters.extractor().singleValueParameter("radius", Float.class);
```

Great! That's all we need to describe a data processor for usage in StreamPipes. Your processor class should look as follows:

```java
package org.apache.streampipes.pe.example;

import org.apache.streampipes.commons.exceptions.SpRuntimeException;
import org.apache.streampipes.model.DataProcessorType;
import org.apache.streampipes.model.graph.DataProcessorDescription;
import org.apache.streampipes.model.runtime.Event;
import org.apache.streampipes.model.schema.PropertyScope;
import org.apache.streampipes.sdk.builder.ProcessingElementBuilder;
import org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.apache.streampipes.sdk.helpers.EpRequirements;
import org.apache.streampipes.sdk.helpers.Labels;
import org.apache.streampipes.sdk.helpers.Locales;
import org.apache.streampipes.sdk.helpers.OutputStrategies;
import org.apache.streampipes.sdk.utils.Assets;
import org.apache.streampipes.vocabulary.Geo;
import org.apache.streampipes.wrapper.context.EventProcessorRuntimeContext;
import org.apache.streampipes.wrapper.routing.SpOutputCollector;
import org.apache.streampipes.wrapper.standalone.ProcessorParams;
import org.apache.streampipes.wrapper.standalone.StreamPipesDataProcessor;

public class GeofencingProcessor extends StreamPipesDataProcessor {

 private static final String LATITUDE_CENTER = "latitude-center";
 private static final String LONGITUDE_CENTER = "longitude-center";

 private float centerLatitude;
 private float centerLongitude;
 private String latitudeFieldName;
 private String longitudeFieldName;
 
 private int radius;

 @Override
 public DataProcessorDescription declareModel() {
  return ProcessingElementBuilder.create("org.streampipes.tutorial-geofencing")
          .category(DataProcessorType.ENRICH)
          .withAssets(Assets.DOCUMENTATION, Assets.ICON)
          .withLocales(Locales.EN)
          .requiredStream(StreamRequirementsBuilder
                  .create()
                  .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lat),
                          Labels.from("latitude-field", "Latitude", "The event " +
                                  "property containing the latitude value"), PropertyScope.MEASUREMENT_PROPERTY)
                  .requiredPropertyWithUnaryMapping(EpRequirements.domainPropertyReq(Geo.lng),
                          Labels.from("longitude-field", "Longitude", "The event " +
                                  "property containing the longitude value"), PropertyScope.MEASUREMENT_PROPERTY)
                  .build())
          .outputStrategy(OutputStrategies.keep())
          .requiredIntegerParameter("radius", "Geofence Size", "The size of the circular geofence in meters.", 0, 1000, 1)
          .requiredFloatParameter(Labels.from(LATITUDE_CENTER, "Latitude", "The latitude value"))
          .requiredFloatParameter(Labels.from(LONGITUDE_CENTER, "Longitude", "The longitude value"))
          .build();
 }

 @Override
 public void onInvocation(ProcessorParams parameters, 
                          SpOutputCollector spOutputCollector, 
                          EventProcessorRuntimeContext runtimeContext) throws SpRuntimeException {
  this.centerLatitude = parameters.extractor().singleValueParameter(LATITUDE_CENTER, Float.class);
  this.centerLongitude = parameters.extractor().singleValueParameter(LONGITUDE_CENTER, Float.class);
  this.latitudeFieldName = parameters.extractor().mappingPropertyValue("latitude-field");
  this.longitudeFieldName = parameters.extractor().mappingPropertyValue("longitude-field");
  this.radius = parameters.extractor().singleValueParameter("radius", Integer.class);
 }

 @Override
 public void onEvent(Event event, SpOutputCollector collector) throws SpRuntimeException {

 }

 @Override
 public void onDetach() throws SpRuntimeException {

 }
}


```

## Adding an implementation

Everything we need to do now is to add an implementation.

Add the following piece of code to the onEvent method, which realizes the Geofencing functionality:

```java

  @Override
  public void onEvent(Event event, SpOutputCollector collector) throws SpRuntimeException {
      float latitude = event.getFieldBySelector(latitudeFieldName).getAsPrimitive().getAsFloat();
      float longitude = event.getFieldBySelector(longitudeFieldName).getAsPrimitive().getAsFloat();

      float distance = distFrom(latitude, longitude, centerLatitude, centerLongitude);

      if (distance <= radius) {
      collector.collect(event);
      }
  }

  public static float distFrom(float lat1, float lng1, float lat2, float lng2) {
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

See the [event model](06_extend-sdk-event-model.md) guide to learn how to extract parameters from events.

## Registering the pipeline element
The final step is to register the data processor in the `Init` method. Add the following line to the `SpServiceDefinitionBuilder`:

```java
 .registerPipelineElement(new GeofencingProcessor())
```

## Starting the service
<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Once you start the service, it will register in StreamPipes with the hostname. The hostname will be auto-discovered and should work out-of-the-box.
In some cases, the detected hostname is not resolvable from within a container (where the core is running). In this case, provide a SP_HOST environment variable to override the auto-discovery.
</p>
</div>


<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p> The default port of all pipeline element services as defined in the `create` method is port 8090.
       If you'd like to run multiple services at the same time on your development machine, change the port here. As an alternative, you can also provide an env variable `SP_PORT` which overrides the port settings. This is useful to use different configs for dev and prod environments.
</p>
</div>

Now we are ready to start our service!

Configure your IDE to provide an environment variable called ``SP_DEBUG`` with value ``true`` when starting the project.

Execute the main method in the class `Init` we've just created.

The service automatically registers itself in StreamPipes.
To install the just created element, open the StreamPipes UI and follow the manual provided in the [user guide](03_use-install-pipeline-elements.md).

## Read more

Congratulations! You've just created your first data processor for StreamPipes.
There are many more things to explore and data processors can be defined in much more detail using multiple wrappers.
Follow our [SDK guide](06_extend-sdk-static-properties.md) to see what's possible!
