---
id: dev-guide-archetype
title: Start Developing
sidebar_label: Start Developing
original_id: dev-guide-archetype
---

In this tutorial we explain how you can use the Maven archetypes to develop your own StreamPipes processors and sinks.
We use IntelliJ in this tutorial, but it works with any IDE of your choice.

## Prerequisites
You need to have Maven installed, further you need an up and running StreamPipes installation on your development computer.
To ease the configuration of environment variables, we use the IntelliJ [env Plugin](https://plugins.jetbrains.com/plugin/7861-envfile).
Install this in IntelliJ. The development also works without the plugin, then you have to set the environment variables manually instead of using the env configuration file.

## Create Project
To create a new project, we provide multiple Maven Archteypes.
Currently, we have archetypes for the JVM and Flink wrappers, each for processors and sinks.
The commands required to create a new pipeline element project can be found below. Make sure that you select a version compatible with your StreamPipes installation.
Copy the command into your terminal to create a new project.
The project will be created in the current folder.
First, the ``groupId`` of the resulting Maven artifact must be set.
We use ``groupId``: ``org.example`` and ``artifactId``: ``ExampleProcessor``.
You can keep the default values for the other settings, confirm them by hitting enter.
Now, a new folder with the name ``ExampleProcessor`` is generated.


```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion={sp.version}
```
<details class="info">
    <summary>Select: [Processors / Sinks] [JVM / Flink]</summary>

## Processors JVM
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-jvm  \
  -DarchetypeVersion=0.64.0
```

## Processors Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-flink  \
  -DarchetypeVersion=0.64.0
```

## Sinks JVM
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-sinks-jvm  \
  -DarchetypeVersion=0.64.0
```

## Sinks Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-sinks-flink  \
  -DarchetypeVersion=0.64.0
```
</details>


## Edit Processor
Open the project in your IDE.
If everything worked, the structure should look similar to the following image.
The *config* package contains all the configuration parameters of your processors / sinks.
In the *main* package, it is defined which processors / sinks you want to activate and the *pe.processor.example* package contains three classes with the application logic.
For details, have a look at the other parts of the Developer Guide, where these classes are explained in more depth.

<img src="/img/archetype/project_structure.png" width="30%" alt="Project Structure"/>

Due to a dependency conflict in the 0.64.0 release, open your pom.xml and add the following lines to the ``dependencies`` section:
```
<dependency>
    <groupId>javax.validation</groupId>
    <artifactId>validation-api</artifactId>
    <version>2.0.1.Final</version>
</dependency>

```

Open the class *Example* and edit the ``onEvent`` method to print the incoming event, log it to the console and send it to the next component without changing it.

```java
@Override
public void onEvent(Event event, SpOutputCollector collector) {
    // Print the incoming event on the console
    System.out.println(in);

    // Hand the incoming event to the output collector without changing it.
    collector.onEvent(in);
}
```

## Start Processor
Before the processor can be started, you need to edit the *env* file in the *development* folder.
Replace all local hosts in this file with the IP address or DNS name of your computer.
This is relevant to make the mapping between the services running in Docker and your component running in the local IDE.
After all updates are updated, this file is used by the envfile plugin to provide configuration parameters to the pipeline element.
Alternatively, environment variables can also be set on your host or IDE.
Now start the project by clicking on **(Run -> Edit Configuration)**.
Add a new configuration in the Configuration menu by clicking on the + sign and select **Application**.
Name the configuration *ExampleProcessor* and select the *Init* class as the 'Main class'.
Then set *ExampleProcessor* in 'Use classpath of module'.


As the last step, switch to the tab *EnvFile* and load the env file.
Click on 'Enable EnvFile' to activate it and add the just edited env file by clicking on the + sign.
Save all the changes by clicking *Apply*.
Now you can start the processor.

<div class="my-carousel">
    <img src="/img/archetype/run_configuration.png" alt="Configuration View"/>
    <img src="/img/archetype/run_env_configuration.png" alt="Environment Configuration View"/>
</div>

To check if the service is up and running, open the browser on *'localhost:6666'*. The machine-readable escription of the processor should be visible as shown below.

<img src="/img/archetype/endpoint.png" width="90%" alt="Project Structure"/>


<div class="admonition error">
<div class="admonition-title">Common Problems</div>
<p>
If the service description is not shown on 'localhost:6666', you might have to change the port address.
This needs to be done in the configuration of your service, further explained in the configurations part of the developer guide.

If the service does not show up in the StreamPipes installation menu, click on 'MANAGE ENDPOINTS' and add 'http://<span></span>YOUR_IP_OR_DNS_NAME:6666'.
Use the IP or DNS name you provided in the env file.
After adding the endpoint, a new processor with the name *Example* should show up.
</p>
</div>

Now you can go to StreamPipes.
Your new processor *'Example'* should now show up in the installation menu.
Install it, then switch to the pipeline view and create a simple pipeline that makes use of your newly created processor.
In case you opened the StreamPipes installation for the first time, it should have been automatically installed during the setup process.

<img src="/img/archetype/example_pipeline.png" width="80%" alt="Project Structure"/>

Start this pipeline.
Now you should see logging messages in your console and, once you've created a visualisation, you can also see the resulting events of your component in StreamPipes.

Congratulations, you have just created your first processor!
From here on you can start experimenting and implement your own algorithms.
