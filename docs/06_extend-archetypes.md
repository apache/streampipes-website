---
id: extend-archetypes
title: Maven Archetypes
sidebar_label: Maven Archetypes
---

In this tutorial we explain how you can use the Maven archetypes to develop your own StreamPipes processors and sinks.
We use IntelliJ in this tutorial, but it works with any IDE of your choice.

## Prerequisites
You need to have Maven installed, further you need an up and running StreamPipes installation on your development computer.

## Create Project
To create a new project, we provide multiple Maven Archteypes.
Currently, we provide archetypes for standalone Java-based microservices and archetypes for the experimental Flink wrapper.
The commands required to create a new pipeline element project can be found below. Make sure that you select a version compatible with your StreamPipes installation.
Copy the command into your terminal to create a new project.
The project will be created in the current folder.
First, the ``groupId`` of the resulting Maven artifact must be set.
We use ``groupId``: ``org.example`` and ``artifactId``: ``ExampleProcessor``.
You can keep the default values for the other settings, confirm them by hitting enter.

The current {sp.version} is 0.69.0 (for a pre-release version, use the SNAPSHOT appendix, e.g. 0.69.0-SNAPSHOT)

```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.apache.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-extensions-jvm  \
  -DarchetypeVersion={sp.version}
```
<details class="info">
    <summary>Other archetypes</summary>

## Processors Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.apache.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-processors-flink  \
  -DarchetypeVersion={sp.version}
```

## Sinks Flink
```bash
mvn archetype:generate                              	 	     \
  -DarchetypeGroupId=org.apache.streampipes          			         \
  -DarchetypeArtifactId=streampipes-archetype-pe-sinks-flink  \
  -DarchetypeVersion={sp.version}
```
</details>


## Project structure
Open the project in your IDE.
If everything worked, the structure should look similar to the following image.
In the *main* package, it is defined which processors / sinks you want to activate and the *pe.example* package contains two skeletons for creating a data processor and sink.
For details, have a look at the other parts of the Developer Guide, where these classes are explained in more depth.

<img src="/img/archetype/project_structure.png" width="30%" alt="Project Structure"/>

## Next steps

Click [here](06_extend-first-processor.md) to learn how to create your first data processor.


