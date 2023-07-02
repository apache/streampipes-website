---
id: version-0.63.0-pre-asf-dev-guide-development-environment
title: Development Environment
sidebar_label: Development Environment
original_id: dev-guide-development-environment
---

In this section, we describe our recommended minimum setup for locally setting up a development instance of StreamPipes needed to develop, run and test new pipeline elements.

## IDE & required dev tools
StreamPipes does not have specific requirements on the IDE - so feel free to choose the IDE of your choice.
The only requirements in terms of development tools are that you have Java 8 and Maven installed.

## Docker-based local StreamPipes instance
In order to quickly test developed pipeline elements without needing to install all services required by StreamPipes, we provide a CLI tool that allows you to selectively start StreamPipes components.
The CLI tool allows to switch to several templates (based on docker-compose) depending on the role. For instance, if you are developing a pipeline element, use the template ``pe-developer``. This will start backend and ui components in a Docker container, while you can easily test your pipeline element in your IDE.

For now, we refer to the Github Readme for instructions on how to use the CLI tool: [https://github.com/streampipes/streampipes-cli](https://github.com/streampipes/streampipes-cli)

## Starter projects

Now, once you've started the development instance, you are ready to develop your very first pipeline element.
Instead of starting from scratch, we recommend using our provided maven archetypes:

### Maven archetypes

Create the Maven archetype as described in the [Getting Started](dev-guide-archetype) guide.

### Starting from scratch

In order to develop a new pipeline element from scratch, you need to create a new Maven project and import the following dependencies:

<details class="info">
<summary>pom.xml</summary>
```
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-container-standalone</artifactId>
    <version>0.63.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-sdk</artifactId>
    <version>0.63.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-vocabulary</artifactId>
    <version>0.63.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to develop a new data processor or data sink using the Apache Flink wrapper -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-wrapper-flink</artifactId>
    <version>0.63.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to develop a new data processor or data sink which is running directly on the JVM -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-wrapper-standalone</artifactId>
    <version>0.63.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-dataformat-json</artifactId>
    <version>0.63.0</version>
</dependency>
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-dataformat-smile</artifactId>
     <version>0.63.0</version>
</dependency>
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-dataformat-cbor</artifactId>
     <version>0.63.0</version>
</dependency>
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-dataformat-fst</artifactId>
     <version>0.63.0</version>
</dependency>
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-messaging-jms</artifactId>
     <version>0.63.0</version>
</dependency>
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-messaging-kafka</artifactId>
     <version>0.63.0</version>
</dependency>
```
</details>

The following three dependencies are mandatory:

* `streampipes-container-standalone`, defines that we are going to create a new pipeline element where the description will be accessible through an embedded web server.
* `streampipes-sdk` imports the SDK which provides many convencience functions to create new pipeline elements.
* `streampipes-vocabulary` imports various RDF vocabularies which are used by the SDK to auto-generate the semantic description of pipeline elements.

The following three dependencies might be optional depending on the pipeline element type you plan to create:

*  `streampipes-wrapper-flink` should be used in case you plan to connect a new data processor or data sink that uses Apache Flink for processing events at runtime.
*  `streampipes-wrapper-standalone` should be used in case you plan to connect a new data processor or data sink that does not use an external processing engine. Events are directly processed in a single-host fashion.


Finally, this dependency will provide abstract classes to define data sources and streams.