---
title: "Apache StreamPipes and ThingsBoard: device platform or data platform?"
authors: [dominikriemer]
image: /img/blog/covers/compare-thingsboard.png
tags: [comparison]
date: 2025-09-16
description: "ThingsBoard starts from the device, StreamPipes starts from the data. That difference explains most of what each one does well."
---

ThingsBoard comes up in almost every evaluation we hear about, and it deserves to. It is a mature open-source IoT platform with dashboards, rule processing and a plugin model, which on paper sounds like StreamPipes. The difference is the question each tool starts from. ThingsBoard asks: which devices do I have, and what are they reporting? StreamPipes asks: what data is coming from my machines, and what should happen with it? Most of the differences below follow from that.

<!-- truncate -->

## ThingsBoard in short

ThingsBoard is a device management and telemetry platform. Devices connect over MQTT, CoAP, HTTP or LwM2M, are provisioned and grouped, and send telemetry and attributes. Rule chains react to incoming data with filters, enrichment and actions. Dashboards are built from widgets bound to device telemetry, and a multi-tenant model with customers and users is part of the core. The community edition is open source; some features such as white-labeling, advanced rule nodes and integrations are reserved for the professional edition.

It fits well when you own a fleet of devices that speak IP protocols, when provisioning and device state are what you manage, and when you need dashboards separated by tenant for different customers.

## StreamPipes in short

StreamPipes is an industrial data platform under the Apache Software Foundation. It connects to industrial systems with adapters for OPC UA, Siemens S7, Modbus, PLC4X-based protocols, MQTT, Kafka and more, including an OPC UA node browser and support for OPC UA alarms and events. Every source becomes a typed data stream. Pipelines process streams in real time with validated processors and sinks. Datasets keep history with retention and export. Charts and dashboards are built on datasets, and assets and sites organize everything by plant, line and machine. Users, roles, groups, permissions, single sign-on and an audit log are included, and everything is Apache licensed with no separate edition.

It fits well when the sources are machines and controllers rather than devices you provision yourself, and when the goal is a data foundation that operators, engineers and developers share.

## Side by side

| Topic | ThingsBoard | Apache StreamPipes |
|---|---|---|
| Primary object | Device with telemetry and attributes | Typed data stream from an adapter |
| Industrial protocols | Gateway with OPC UA, Modbus and others | Native adapters incl. OPC UA browser, S7, Modbus, PLC4X family |
| Processing | Rule chains | Pipelines with validated processors and sinks, plus Functions |
| History | Telemetry storage per device | Datasets with retention, archival and export |
| Context model | Devices, assets, customers, tenants | Assets and sites linked to streams, datasets, dashboards |
| Multi-tenancy | Yes, core concept | No; one instance per organization |
| Licensing | Community edition open source, professional edition commercial | Fully Apache licensed |
| Extensibility | Custom rule nodes, widgets, integrations | SDK for adapters, processors, sinks; Java and Python Functions; UI modules |

## Choosing

If you manage many devices and need views separated by customer, ThingsBoard is built for exactly that, and the professional edition adds what larger deployments need. If your data comes from machines and controllers, if you want processing, history and dashboards on typed streams, and if you want all of it under one open-source license with no feature tiers, start with StreamPipes.

The two can also run side by side: a ThingsBoard gateway can forward telemetry to MQTT, and StreamPipes subscribes to it from there. The [quickstart](/docs/quick-start-guide/) is the fastest way to see the StreamPipes side.
