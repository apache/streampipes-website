---
id: technicals-messaging
title: Messaging
sidebar_label: Messaging
---

## Architecture

To exchange messages at runtime between individual [Extensions Services](07_technicals-architecture.md), StreamPipes uses external messaging systems.
This corresponds to an event-driven architecture with a central message broker and decoupled services which consume and produce events from the messaging system.

There are many different open source messaging systems on the market, which each have individual strengths. 
To provide a flexible system which matches different needs, StreamPipes can be configured to use various messaging systems.

## Supported messaging systems

The following messaging systems are currently supported:

* Apache Kafka
* Apache Pulsar
* MQTT
* NATS

## Configure StreamPipes to use another messaging system

Configuring StreamPipes for one of these messaging system is an installation-time configuration.
We currently do not recommend to change the configuration at runtime.

The protocol can be configured with the environment variable `SP_PRIORITIZED_PROTOCOL` assigned to the core with one of the following values:

```bash
SP_PRIORITIZED_PROTOCOL=kafka # Use Kafka as protocol
SP_PRIORITIZED_PROTOCOL=pulsar # Use Pulsar as protocol
SP_PRIORITIZED_PROTOCOL=mqtt # Use MQTT as protocol
SP_PRIORITIZED_PROTOCOL=nats # Use NATS as protocol
```

Note that each extension service can support an arbitrary number of protocols. For instance, you can have a lightweight extension service which only supports NATS, but have another, cloud-centered service which supports Kafka, both registered at the Core.
To select a protocol when multiple protocols are supported by two pipeline elements, StreamPipes selects a protocol based on a priority, which can be configured in the [Configuration View](03_use-configurations.md).
StreamPipes ensures that only pipeline elements which have a commonly supported protocol can be connected.

Note that you might need to change the installation files. For the `Docker-Compose` based installation, we provide various compose file for different messaging setups. For the `Kubernetes` installation, we provide variables which can be set in the helm chart's `values.yaml` file.

### Configure broker addresses

By default, StreamPipes assumes that the messaging system is started from its own environment, e.g., the system configured in the selected `Docker-Compose` file.

Besides that, it is also possible to let StreamPipes connect to an externally provided messaging system. For this purpose, various environment variables exist.

* `SP_PRIORITIZED_PROTOCOL` to set the prioritized protocol to either `kafka`, `mqtt`, `nats` or `pulsar`

* `SP_KAFKA_HOST`, `SP_KAFKA_PORT` to configure Kafka access
* `SP_MQTT_HOST`, `SP_MQTT_PORT` to configure MQTT access
* `SP_NATS_HOST`, `SP_NATS_PORT` to configure NATS access
* `SP_PULSAR_URL` to configure Pulsar access


Most settings can also be set in the UI under `Settings->Messaging`.

:::warning Installation-time configurations
Although it is currently possible to change messaging settings in the user interface, we do not support dynamic modification of messaging systems.
Choosing a proper system is considered an installation-time setting which should not be changed afterwards.
Already existing Adapters and pipeline elements are not properly updated after changes of the messaging layer.
:::

