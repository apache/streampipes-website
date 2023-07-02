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

We'll create a new project using the provided sinks-standalone-jvm Maven archetype.
Enter the following command to create a new project based on the StreamPipes ``Sinks-JVM`` archetype:

```
mvn archetype:generate -DarchetypeGroupId=org.apache.streampipes \
-DarchetypeArtifactId=streampipes-archetype-pe-sinks-jvm -DarchetypeVersion=0.68.0 \
-DgroupId=org.streampipes.tutorial -DartifactId=sink-tutorial -DclassNamePrefix=Rest -DpackageName=geofencing
```

Once you've imported the generated project, the project structure should look as follows:

<img src="/docs/img/tutorial-sinks/project-structure-sinks.png" alt="Project Structure Data Sink"/>


<div class="admonition tip">
<div class="admonition-title">Tip</div>
<p>Besides the basic project skeleton, the sample project also includes an example Dockerfile you can use to package your application into a Docker container.</p>
</div>

Now you're ready to create your first data sink for StreamPipes!

## Adding data sink requirements

First, we will add a new stream requirement.
Open the class `RestController` which should look as follows:

```java
package org.streampipes.tutorial.pe.sink.rest;

import org.streampipes.model.DataSinkType;
import org.streampipes.model.graph.DataSinkDescription;
import org.streampipes.model.graph.DataSinkInvocation;
import org.streampipes.sdk.builder.DataSinkBuilder;
import org.streampipes.sdk.builder.StreamRequirementsBuilder;
import org.streampipes.sdk.extractor.DataSinkParameterExtractor;
import org.streampipes.sdk.helpers.EpRequirements;
import org.streampipes.sdk.helpers.Labels;
import org.streampipes.sdk.helpers.SupportedFormats;
import org.streampipes.sdk.helpers.SupportedProtocols;
import org.streampipes.wrapper.standalone.ConfiguredEventSink;
import org.streampipes.wrapper.standalone.declarer.StandaloneEventSinkDeclarer;
import org.streampipes.sdk.helpers.*;
import org.streampipes.sdk.utils.Assets;

public class RestController extends StandaloneEventSinkDeclarer<RestParameters> {

	private static final String EXAMPLE_KEY = "example-key";

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
	public ConfiguredEventSink<RestParameters> onInvocation(DataSinkInvocation graph, DataSinkParameterExtractor extractor) {

		 List<String> fieldsToSend = extractor.mappingPropertyValues("fields-to-send");
        
         RestParameters params = new RestParameters(graph, fieldsToSend);

		return new ConfiguredEventSink<>(params, Rest::new);
	}

}

```

In this class, we need to implement two methods: The `declareModel` method is used to define abstract stream requirements such as event properties that must be present in any input stream that is later connected to the element using the StreamPipes UI.
The second method, `onInvocation` is used to create and deploy program once a pipeline using this sink is started.

The ``declareModel`` method describes the properties of our data sink:
* ``category`` defines a category for this sink.
* ``withAssets`` denotes that we will provide an external documentation file and an icon, which can be found in the ``resources`` folder
* ``withLocales`` defines that we will provide an external language file, also available in the ``resources`` folder
* ``requiredStream`` defines requirements any input stream connected to this sink must provide. In this case, we do not have any specific requirements, we just forward all incoming events to the REST sink. However, we want to let the user display a list of available fields from the connected input event, where users can select a subset. This is defined by defining a Mapping from the empty requirement. This will later on render a selection dialog in the pipeline editor.

The ``onInvocation`` method is called when a pipeline containing the sink is started. Once a pipeline is started, we would like to extract user-defined parameters.
In this example, we simply extract the fields selected by users that should be forwarded to the REST sink. Finally, we return a new configured event sink containing the parameters.

## Pipeline element invocation

Once users start a pipeline that uses our geofencing component, the _getRuntime_ method in our class is called. The class `DataSinkInovcation` includes a graph that contains information on the configuration parameters a users has selected in the pipeline editor and information on the acutal streams that are connected to the pipeline element.

Before we explain in more detail how to extract these values from the processor invocation, we need to adapt a little helper class.
Open the file ```RestParameters``` and modify it as follows:

```java
public class RestParameters extends EventSinkBindingParams {

  private List<String> fieldsToSend;

  public RestParameters(DataSinkInvocation graph, List<String> fieldsToSend) {
    super(graph);
    this.fieldsToSend = fieldsToSend;
  }

  public List<String> getFieldsToSend() {
    return fieldsToSend;
  }
}
```

This file will later provide information on the configured pipeline element.

## Adding an implementation

Now open the class ``Rest`` to add the proper implementation (i.e., the Rest call executed for every incoming event).

Our final class should look as follows:

```java
private static Logger LOG = LoggerFactory.getLogger(Rest.class.getCanonicalName());

  private static final String REST_ENDPOINT_URI = YOUR_REQUEST_BIN_URL;
  private List<String> fieldsToSend;
  private SpDataFormatDefinition dataFormatDefinition;

  public Rest() {
    this.dataFormatDefinition = new JsonDataFormatDefinition();
  }

  @Override
  public void onInvocation(RestParameters parameters, EventSinkRuntimeContext runtimeContext) {
    this.fieldsToSend = parameters.getFieldsToSend();
  }

  @Override
  public void onEvent(Event event) {
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
  public void onDetach() {

  }
```
The only class variable you need to change right now is the REST_ENDPOINT_URL. Change this url to the URL provided by your request bin.
We'll ignore the other class variables and the constructor for now. Important are three methods, ``onInvocation``, ``onEvent`` and ``onDetach``.

The ``onInvocation`` method is called once a pipeline containing our REST data sink is started. The ``onEvent`` method is called for each incoming event. Finally, ``onDetach`` is called when a pipeline is stopped.

In the ``onInvocation`` method, we can extract the selected fields to be forwarded to the REST endpoint.
In the ``ònEvent`` method, we use a helper method to get a subset of the incoming event.
Finally, we convert the resulting ``Map`` to a JSON string and call the endpoint.


## Preparing the container
The final step is to define the deployment type of our new data source. In this tutorial, we will create a so-called `StandaloneModelSubmitter`.
This client will start an embedded web server that provides the description of our data source and automatically starts the program in an embedded container.

Go to the class `Init` that extends `StandaloneModelSubmitter` and should look as follows:
```java

public static void main(String[] args) throws Exception {
    DeclarersSingleton.getInstance()
            .add(new RestController());

    DeclarersSingleton.getInstance().setPort(Config.INSTANCE.getPort());
    DeclarersSingleton.getInstance().setHostName(Config.INSTANCE.getHost());

    DeclarersSingleton.getInstance().registerDataFormats(new JsonDataFormatFactory(),
            new CborDataFormatFactory(),
            new SmileDataFormatFactory(),
            new FstDataFormatFactory());

    DeclarersSingleton.getInstance().registerProtocols(new SpKafkaProtocolFactory(),
            new SpJmsProtocolFactory());

    new Init().init(Config.INSTANCE);
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

Execute the main method in the class `Main` we've just created.

The container automatically registers itself in the Consul installation of StreamPipes.

To install the just created element, open the StreamPipes UI and follow the manual provided in the [user guide](03_use-install-pipeline-elements.md).

## Read more

Congratulations! You've just created your first data sink for StreamPipes.
There are many more things to explore and data sinks can be defined in much more detail using multiple wrappers.
Follow our [SDK guide](../dev-guide-sdk-guide-sinks) to see what's possible!
