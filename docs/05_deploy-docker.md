---
id: deploy-docker
title: Docker Deployment
sidebar_label: Docker Deployment
---

StreamPipes Compose is a simple collection of user-friendly `docker-compose` files that easily lets gain first-hand experience with Apache StreamPipes.

> **NOTE**: We recommend StreamPipes Compose to only use for initial try-out and testing. If you are a developer and
> want to develop new pipeline elements or core feature, use the [StreamPipes CLI](06_extend-cli.md).

#### TL;DR: A one-liner to rule them all :-)

```bash
docker-compose up -d
```
Go to http://localhost to finish the installation in the browser. Once finished, switch to the pipeline editor and start the interactive tour or check the [online tour](https://streampipes.apache.org/docs/user-guide-tour/) to learn how to create your first pipeline!

## Prerequisites
* Docker >= 17.06.0
* Docker-Compose >= 1.17.0 (Compose file format: 3.4)
* Google Chrome (recommended), Mozilla Firefox, Microsoft Edge

Tested on: **macOS, Linux, Windows 10 upwards** (CMD, PowerShell, GitBash)

**macOS** and **Windows** users can easily get Docker and Docker-Compose on their systems by installing **Docker for Mac/Windows** (recommended).

> **NOTE**: On purpose, we disabled all port mappings except of http port **80** to access the StreamPipes UI to provide minimal surface for conflicting ports.

## Usage
We provide several options to get you going:

- **default**: Default docker-compose file, called `docker-compose.yml`.
- **nats**: The standard installation which uses Nats as message broker,called `docker-compose.nats.yml`.
- **full**: Contains experimental Flink wrappers, called `docker-compose.full.yml`.

:::info

Other options include configurations for the internally used message broker. The current default is `Kafka`, but you can also start StreamPipes with `Nats`, `MQTT` or `Apache Pulsar`.
Use one of the other provided docker-compose files.

:::

**Starting** the **default** option is as easy as simply running:
> **NOTE**: Starting might take a while since `docker-compose up` also initially pulls all Docker images from Dockerhub.

```bash
docker-compose up -d
# go to `http://localhost` after all services are started
```
After all containers are successfully started just got to your browser and visit http://localhost to finish the installation. Once finished, switch to the pipeline editor and start the interactive tour or check the [online tour](https://streampipes.apache.org/docs/user-guide-tour/) to learn how to create your first pipeline!

**Stopping** the **default** option is similarly easy:
```bash
docker-compose down
# if you want to remove mapped data volumes, run:
# docker-compose down -v
```

Starting the **nats** option is almost the same, just specify the `docker-compose.nats.yml` file:
```bash
docker-compose -f docker-compose.nats.yml up -d
# go to `http://localhost` after all services are started
```
**Stopping** the **nats** option:
```bash
docker-compose -f docker-compose.nats.yml down
```


Starting the **full** option is almost the same, just specify the `docker-compose.full.yml` file:
```bash
docker-compose -f docker-compose.full.yml up -d
#go to `http://localhost` after all services are started
```
Stopping the **full** option:
```bash
docker-compose -f docker-compose.nats.yml down
#docker-compose -f docker-compose.nats.yml down -v
```

## Update services
To actively pull the latest available Docker images use:
```bash
docker-compose pull
```

## Upgrade
To upgrade to another StreamPipes version, simply edit the `SP_VERSION` in the `.env` file.
```
SP_VERSION=<VERSION>
```
