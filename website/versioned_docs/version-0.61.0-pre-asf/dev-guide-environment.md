---
id: version-0.61.0-pre-asf-dev-guide-development-environment
title: Development Environment
sidebar_label: Development Environment
original_id: dev-guide-development-environment
---

In this section, we describe our recommended minimum setup for locally setting up a development instance of StreamPipes needed to develop, run and test new pipeline elements.

## IDE & required dev tools
StreamPipes does not have specific requirements on the IDE - so feel free to choose the IDE of your choice.
The only requirements in terms of development tools are that you have Java 8 and Maven installed.

## Docker-based local StreamPipes instance
In order to quickly test developed pipeline elements without needing to install all services required by StreamPipes, we provide a lightweight docker-compose file for development purposes.
If you have Docker installed on your development machine, simply run the following docker-compose file, which has been successfully tested on both Linux and Windows-based operating systems.

### Docker-Compose File
<details class="info">
<summary>docker-compose.yml</summary>
#### Docker Compose
```yaml
version: "2"
services:
  consul:
    image: consul
    environment:
      - "CONSUL_LOCAL_CONFIG={\"disable_update_check\": true}"
      - "CONSUL_BIND_INTERFACE=eth0"
      - "CONSUL_HTTP_ADDR=0.0.0.0"
    entrypoint:
      - consul
      - agent
      - -server
      - -bootstrap-expect=1
      - -data-dir=/consul/data
      - -node=consul-one
      - -bind={{ GetInterfaceIP "eth0" }}
      - -client=0.0.0.0
      - -enable-script-checks=true
      - -ui
    volumes:
      - ./config/consul:/consul/data
    ports:
      - "8500:8500"
      - "8600:8600"
    networks:
      spnet:
        ipv4_address: 172.30.0.9

  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"
    networks:
      spnet:

  kafka:
    image: wurstmeister/kafka:0.10.0.1
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: ###TODO ADD HOSTNAME HERE ###
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      spnet:

  backend:
    image: ipe-wim-gitlab.fzi.de:5000/streampipes/ce/backend:SNAPSHOT
    depends_on:
      - "consul"
    ports:
      - "8030:8030"
    volumes:
      - ./config:/root/.streampipes
      - ./config/aduna:/root/.aduna
    networks:
      spnet:

  activemq:
    image: ipe-wim-gitlab.fzi.de:5000/streampipes/services/activemq
    ports:
      - "61616:61616"
      - "61614:61614"
      - "8161:8161"
    networks:
      spnet:

  couchdb:
    image: couchdb
    ports:
      - "5984:5984"
    volumes:
      - ./config/couchdb/data:/usr/local/var/lib/couchdb
    networks:
      spnet:

  jobmanager:
    image: ipe-wim-gitlab.fzi.de:5000/streampipes/services/flink
    ports:
      - "8081:8099"
    command: jobmanager
    networks:
      spnet:

  taskmanager:
    image: ipe-wim-gitlab.fzi.de:5000/streampipes/services/flink
    command: taskmanager
    environment:
      - FLINK_NUM_SLOTS=20
    networks:
      spnet:

  nginx:
    image: ipe-wim-gitlab.fzi.de:5000/streampipes/ui/dev
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      spnet:

networks:
  spnet:
    driver: bridge
    ipam:
     config:
       - subnet: 172.30.0.0/16
         gateway: 172.30.0.1
```
</details>

Do not forget to replace the ##Add HOSTNAME## variable in the compose file with the hostname of your machine!

## Starter projects

Now, once you've started the development instance, you are ready to develop your very first pipeline element.
Instead of starting from scratch, we recommend using either one of our sample projects as a starting point or one of our provided maven archetypes:

### Sample projects

We provide basic skeletons for defining data sources, data processors and data sinks in form of sample projects.
These are available on Github as defined below. Just clone the project and change the corresponding groupId and artifactId as you like.

*   templates-sources (https://github.com/streampipes/templates-sources) <!-- Link does not work -->
    This sample project can be used to connect new data streams with StreamPipes.

*   templates-flink (https://github.com/streampipes/templates-flink) <!-- Link does not work -->
    This sample project can be used to define new data processors and data sinks for StreamPipes that are executed in an Apache Flink cluster.

### Maven archetypes
(coming soon)

### Starting from scratch

In order to develop a new pipeline element from scratch, you need to create a new Maven project and import the following dependencies:

<details class="info">
<summary>pom.xml</summary>
```
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-container-standalone</artifactId>
    <version>0.50.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-sdk</artifactId>
    <version>0.50.0</version>
</dependency>

<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-vocabulary</artifactId>
    <version>0.50.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to connect a new data stream with StreamPipes -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-sources</artifactId>
    <version>0.50.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to develop a new data processor or data sink using the Apache Flink wrapper -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-wrapper-flink</artifactId>
    <version>0.50.0</version>
</dependency>

<!-- This dependency needs to be imported if you plan to develop a new data processor or data sink which is running directly on the JVM -->
<dependency>
    <groupId>org.streampipes</groupId>
    <artifactId>streampipes-wrapper-standalone</artifactId>
    <version>0.50.0</version>
</dependency>
```
</details>

The following three dependencies are mandatory:

* `streampipes-container-standalone`, defines that we are going to create a new pipeline element where the description will be accessible through an embedded web server.
* `streampipes-sdk` imports the SDK which provides many convencience functions to create new pipeline elements.
* `streampipes-vocabulary` imports various RDF vocabularies which are used by the SDK to auto-generate the semantic description of pipeline elements.

The following three dependencies might be optional depending on the pipeline element type you plan to create:

*  `streampipes-sources` should be used in case you plan to connect a new data stream with StreamPipes.
*  `streampipes-wrapper-flink` should be used in case you plan to connect a new data processor or data sink that uses Apache Flink for processing events at runtime.
*  `streampipes-wrapper-standalone` should be used in case you plan to connect a new data processor or data sink that does not use an external processing engine. Events are directly processed in a single-host fashion.




Finally, this dependency will provide abstract classes to define data sources and streams.