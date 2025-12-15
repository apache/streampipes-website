---
id: choosing-the-right-flavor
title: Choosing the right flavor
sidebar_label: Service selection options
---


## Introduction

StreamPipes comes with many different options to customize a deployment. This section introduces the various options you can choose from when installing StreamPipes.

You can choose between various **deployment modes**, choose from two different core packages and several extension packages, wich are described below.

## Deployment Mode

For the deployment model, you choose between a standard multi-container `Docker-Compose` installation and the `Kubernetes` installation.
we provide several `Docker-Compose` files for the various options shown here and a `helm chart`. 
See [Docker Deployment](05_deploy-docker.md) and [Kubernetes Deployment](05_deploy-kubernetes.md) for more details.

### Running StreamPipes in a non-containerized environment

Of course, it is also possible to launch StreamPipes in a non-containerized environment. 
You will need to build your own executable binaries by running `mvn package`.
In addition, it is required to install the required 3rd party services (see [Architecture](07_technicals-architecture.md)) and configure the environment variables as described in [Environment Variables](05_deploy-environment-variables.md).

## Core Service

We provide two different pre-packaged versions of core services. The default `streampipes-service-core` is a packaged JAR file which includes client libraries for the various messaging systems StreamPipes supports at the cost of a larger file size.
In case you plan to run StreamPipes on less resource-intensive hardware, we recommend to switch to the `streampipes-service-core-minimal` package, which only includes support for MQTT and NATS, but has a smaller file size and slightly improved startup performance.

## Extension Services

Similar to the core, we provide several pre-packaged extension services which differ mainly by their file size, number of supported adapters and pipeline elements and messaging systems.

The following packages exist:

* `streampipes-extensions-all-jvm` is the largest package and includes all official StreamPipes adapters and pipeline elements. It also includes support for all messaging systems Streampipes currently supports.
* `streampipes-extensions-all-iiot` is a subset of the aforementioned package and excludes adapters and pipeline elements which are often not relevant for IIoT use cases. For instance, the package excludes text mining-related pipeline elements.
* `streampipes-extensions-iiot-minimal` is a subset of the aforementioned package and includes only support for the lightweight messaging systems MQTT and NATS.

Generally said, in cases where you plan to deploy StreamPipes on a resource-limited edge device, we recommend a combination of the `streampipes-service-core-minimal` and `streampipes-extensions-iiot-minimal` package. This could, for instance, be a device with less than 4GB memory.
In other cases, it depends on the use case and if you need all adapters and pipeline elements or are ok with the IIoT-related extensions.

## Messaging System

StreamPipes can be configured to use different messaging systems for exchanging events between adapters and pipeline elements.
The section [Messaging](07_technicals-messaging.md) includes detailed information on the configuration of messaging systems. 
