---
id: extend-tutorial-data-sinks
title: "Tutorial: Data Sinks"
sidebar_label: "Tutorial: Data Sinks"
original_id: extend-tutorial-data-sinks
---

In this tutorial, we will add a new data sink using the standalone wrapper.

From an architectural point of view, we will create a self-contained service that includes the description of the data sink and a corresponding implementation.

## Objective

We are going to create a new data sink that calls an external HTTP endpoint to forward data to an external service.

For each incoming event, an external service is invoked using an HTTP POST request. In this example, we'll call an endpoint provided by [RequestBin](https://requestbin.com/).
To setup your own endpoint, go to [https://requestbin.com/](https://requestbin.com/) and click "Create a request bin". Copy the URL of the newly created endpoint.


## Project setup

Instead of creating a new project from scratch, we recommend to use the Maven archetype to create a new project skeleton (streampipes-archetype-extensions-jvm).
Enter the following command in a command line of your choice (Apache Maven needs to be installed):

```
mvn archetype:generate -DarchetypeGroupId=org.apache.streampipes \
-DarchetypeArtifactId=streampipes-archetype-extensions-jvm -DarchetypeVersion=0.68.0 \
-DgroupId=org.streampipes.tutorial -DartifactId=sink-tutorial -DclassNamePrefix=Rest -DpackageName=mypackage
```

You will see a project structure similar to the structure shown in the [archetypes](06_extend-archetypes.md) section.

<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.</p>
</div>

Now you're ready to create your first data sink for StreamPipes!

## Adding data sink requirements

First, we will add a new stream requirement.
Create a class `RestSink` which should look as follows:

```java
package org.apache.streampipes.pe.example;

import org.apache.streampipes.commons.exceptions.SpRuntimeException;
import org.apache.streampipes.model.DataSinkType;
import org.apache.streampipes.model.graph.DataSinkDescription;
import org.apache.streampipes.model.runtime.Event;
import org.apache.streampipes.model.schema.PropertyScope;
import org.apache.streampipes.sdk.builder.DataSinkBuilder;
import org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.apache.streampipes.sdk.helpers.EpRequirements;
import org.apache.streampipes.sdk.helpers.Labels;
import org.apache.streampipes.sdk.helpers.Locales;
import org.apache.streampipes.sdk.utils.Assets;
import org.apache.streampipes.wrapper.context.EventSinkRuntimeContext;
import org.apache.streampipes.wrapper.standalone.SinkParams;
import org.apache.streampipes.wrapper.standalone.StreamPipesDataSink;

public class RestSink extends StreamPipesDataSink {

  @Override
  public DataSinkDescription declareModel() {
    return DataSinkBuilder.create("org.streampipes.tutorial.pe.sink.rest")
        .category(DataSinkType.NOTIFICATION)
        .withAssets(Assets.DOCUMENTATION, Assets.ICON)
        .withLocales(Locales.EN)
        .requiredStream(StreamRequirementsBuilder
                .create()
                .requiredPropertyWithNaryMapping(EpRequirements.anyProperty(), Labels.withId(
                        "fields-to-send"), PropertyScope.NONE)
                .build())
        .build();
  }

  @Override
  public void onInvocation(SinkParams parameters, EventSinkRuntimeContext runtimeContext) throws SpRuntimeException {

  }

  @Override
  public void onEvent(Event event) throws SpRuntimeException {

  }

  @Override
  public void onDetach() throws SpRuntimeException {

  }
}


```

In this class, we need to implement three methods: The `declareModel` method is used to define abstract stream requirements such as event properties that must be present in any input stream that is later connected to the element using the StreamPipes UI.
The second method, `onInvocation` is called once a pipeline using this sink is started. The third method, `onEvent`, is called for every incoming event.

The ``declareModel`` method describes the properties of our data sink:
* ``category`` defines a category for this sink.
* ``withAssets`` denotes that we will provide an external documentation file and an icon, which can be found in the ``resources`` folder
* ``withLocales`` defines that we will provide an external language file, also available in the ``resources`` folder
* ``requiredStream`` defines requirements any input stream connected to this sink must provide. In this case, we do not have any specific requirements, we just forward all incoming events to the REST sink. However, we want to let the user display a list of available fields from the connected input event, where users can select a subset. This is defined by defining a Mapping from the empty requirement. This will later on render a selection dialog in the pipeline editor.

The ``onInvocation`` method is called when a pipeline containing the sink is started. Once a pipeline is started, we would like to extract user-defined parameters.
In this example, we simply extract the fields selected by users that should be forwarded to the REST sink. Finally, we return a new configured event sink containing the parameters.

## Pipeline element invocation

Once users start a pipeline that uses our geofencing component, the _onInvocation_ method in our class is called. The class `SinkParams` includes a graph that contains information on the configuration parameters a users has selected in the pipeline editor and information on the acutal streams that are connected to the pipeline element.


## Adding an implementation

Now we'll add a proper implementation (i.e., the Rest call executed for every incoming event) to the following methods:

Our final class should look as follows:

```java
package org.apache.streampipes.pe.example;

import com.google.common.base.Charsets;
import org.apache.http.client.fluent.Request;
import org.apache.http.entity.StringEntity;
import org.apache.streampipes.commons.exceptions.SpRuntimeException;
import org.apache.streampipes.dataformat.SpDataFormatDefinition;
import org.apache.streampipes.dataformat.json.JsonDataFormatDefinition;
import org.apache.streampipes.model.DataSinkType;
import org.apache.streampipes.model.graph.DataSinkDescription;
import org.apache.streampipes.model.runtime.Event;
import org.apache.streampipes.model.schema.PropertyScope;
import org.apache.streampipes.sdk.builder.DataSinkBuilder;
import org.apache.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.apache.streampipes.sdk.helpers.EpRequirements;
import org.apache.streampipes.sdk.helpers.Labels;
import org.apache.streampipes.sdk.helpers.Locales;
import org.apache.streampipes.sdk.utils.Assets;
import org.apache.streampipes.wrapper.context.EventSinkRuntimeContext;
import org.apache.streampipes.wrapper.standalone.SinkParams;
import org.apache.streampipes.wrapper.standalone.StreamPipesDataSink;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public class RestSink extends StreamPipesDataSink {

  private static final Logger LOG = LoggerFactory.getLogger(RestSink.class);

  private static final String REST_ENDPOINT_URI = YOUR_REQUEST_BIN_URL;
  private List<String> fieldsToSend;
  private SpDataFormatDefinition dataFormatDefinition;

  @Override
  public DataSinkDescription declareModel() {
    ...
  }

  @Override
  public void onInvocation(SinkParams parameters, EventSinkRuntimeContext runtimeContext) throws SpRuntimeException {
    this.dataFormatDefinition = new JsonDataFormatDefinition();
    this.fieldsToSend = parameters.extractor().mappingPropertyValues("fields-to-send");

  }

  @Override
  public void onEvent(Event event) throws SpRuntimeException {
    Map<String, Object> outEventMap = event.getSubset(fieldsToSend).getRaw();
    try {
      String json = new String(dataFormatDefinition.fromMap(outEventMap));
      Request.Post(REST_ENDPOINT_URI).body(new StringEntity(json, Charsets.UTF_8)).execute();
    } catch (SpRuntimeException e) {
      LOG.error("Could not parse incoming event");
    } catch (IOException e) {
      LOG.error("Could not reach endpoint at {}", REST_ENDPOINT_URI);
    }
  }

  @Override
  public void onDetach() throws SpRuntimeException {

  }
}

```
The only class variable you need to change right now is the REST_ENDPOINT_URL. Change this url to the URL provided by your request bin.
In the ``ònEvent`` method, we use a helper method to get a subset of the incoming event.
Finally, we convert the resulting ``Map`` to a JSON string and call the endpoint.


## Preparing the service
The final step is to register the sink as a pipeline element.

Go to the class `Init` and register the sink:
```java
.registerPipelineElement(new RestSink())
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

Execute the main method in the class `Init` we've just created, open a web browser and navigate to http://localhost:8090 (or the port you have assigned).

The services automatically registers itself in StreamPipes.

To install the created element, open the StreamPipes UI and follow the manual provided in the [user guide](03_use-install-pipeline-elements.md).

## Read more

Congratulations! You've just created your first data sink for StreamPipes.
There are many more things to explore and data sinks can be defined in much more detail using multiple wrappers.
Follow our [SDK guide](../dev-guide-sdk-guide-sinks) to see what's possible!
