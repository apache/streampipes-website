---
id: extend-setup
title: Development Setup
sidebar_label: Development Setup
---

Pipeline elements in StreamPipes are provided as standalone microservices. New pipeline elements can be easily developed using the provided Maven archetypes and can be installed in StreamPipes at runtime.

In this section, we describe our recommended minimum setup for locally setting up a development instance of StreamPipes needed to develop, run and test new pipeline elements.

## IDE & required dev tools
StreamPipes does not have specific requirements on the IDE - so feel free to choose the IDE of your choice.
The only requirements in terms of development tools are that you have Java 8 and Maven installed.

## StreamPipes CLI: Docker-based local StreamPipes instance
In order to quickly test developed pipeline elements without needing to install all services required by StreamPipes, we provide a CLI tool that allows you to selectively start StreamPipes components.
The CLI tool allows to switch to several templates (based on docker-compose) depending on the role. 

The documentation on the usage of the CLI tool is available [here](06_extend-cli.md).

## Override the SP_HOST variable

By default, the backend/core of StreamPipes registers itself within StreamPipes' service discovery mechanism using an auto-discovered hostname.
Usually, this will be an IP address from the Docker network, which is not resolvable from outside. Therefore, for local development you need to override the hostname with an IP address which is accessible from your local host where you develop extensions.
When using the CLI, open the CLI folder ``installer/cli``, navigate to ``deploy/standalone/backend``, open the ``docker-compose.dev.yml`` file and add the SP_HOST env variable, e.g.

```
version: "3.4"
services:
  backend:
    ports:
      - "8030:8030"
    environment:
      - SP_HOST=host.docker.internal
```

Note that host.docker.internal will work as an alias under Docker for Desktop on Windows and Mac, but not on Linux or M1. In this case, provide a resolvable hostname or IP address manually.

## Starter projects

Now, once you've started the development instance, you are ready to develop your very first pipeline element.
Instead of starting from scratch, we recommend using our provided maven archetypes:

### Maven archetypes

Create the Maven archetype as described in the [Maven Archetypes](06_extend-archetypes.md) guide.

### Examples

We provide several examples that explain the usage of some concepts in this [Github repo](https://github.com/apache/streampipes-examples). 
