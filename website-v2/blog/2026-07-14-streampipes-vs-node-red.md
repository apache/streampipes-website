---
title: "When to use Apache StreamPipes, and when Node-RED is the better fit"
authors: [dominikriemer]
image: /img/blog/covers/compare-node-red.png
tags: [comparison]
date: 2026-07-14
description: "Node-RED and StreamPipes both have a flow editor, and that is roughly where the similarity ends. Where each one is strong, why StreamPipes is the better fit for professional machine data integration, and when to use which."
---

A question we get a lot: "We already use Node-RED, why would we need StreamPipes?" It is a fair question. Both tools have a browser-based editor where you connect boxes into a flow, and if that is all you have seen of either, they look like the same thing. They are not, and this post tries to explain where the difference is, so you can pick the right one for the job, or use both.

<!-- truncate -->

## What Node-RED is built for

Node-RED is a general-purpose, flow-based programming tool. A flow runs inside a single Node.js process, and the node library covers almost everything: HTTP, MQTT, serial ports, databases, cloud services, and thousands of community nodes. It is excellent for wiring devices and services together, for prototyping, for small automations at the edge, and for home and lab setups. A single developer can build something useful in an afternoon.

What Node-RED does not try to be is a data platform. There is no built-in time-series storage, no idea of a dataset with a retention rule, no user and role management beyond basic authentication, and no catalog of typed streams. Dashboards are an add-on. Once you run many flows across several sites, you end up building the operations side yourself.

## What Apache StreamPipes is built for

StreamPipes is an industrial IoT data platform. Its unit of work is a typed data stream: an adapter connects a source such as OPC UA, Siemens S7, Modbus or MQTT, describes the fields, units and metadata once, and every pipeline, chart and dashboard builds on that description. Pipelines are built from processors and sinks that are validated against the stream schema, run as separate services, and are monitored by the core. Datasets keep history with retention rules and export. Assets and sites give streams their place in the plant. Users, roles, groups, permissions, single sign-on and an audit log are part of the platform.

That is the setting StreamPipes is made for: several people, several machines, data that has to be kept and governed, and one platform that operators, engineers and developers all use.

## Where the difference is biggest: getting data out of machines

This is the point most comparisons gloss over, so it deserves its own section. Both tools can talk to a PLC. The experience of doing so is very different.

In Node-RED, industrial connectivity comes from community nodes. The OPC UA nodes, for example, expect you to know the node ids you want to read, to type them into a node configuration or inject them from a function node, and to deal with security settings, reconnects and data types in the flow yourself. That works well for a handful of tags on a server you know. It becomes hard to maintain once there is a server with thousands of nodes, several machines from different vendors, certificates to manage, and colleagues who have to understand the flow later.

StreamPipes treats machine connectivity as a product feature, not as a library. The OPC UA adapter opens the server's node tree in a browser, lets you pick the variables you want, and shows live values before you commit. You choose pull or subscription mode per adapter, pick the security mode and policy, and either upload a client certificate or let StreamPipes generate one. Certificates are managed in one place for all adapters, and X.509 user authentication is supported. Complex types in extension objects are decoded into flat fields. A second adapter subscribes to OPC UA alarms and conditions and turns them into a stream of events. All of that is configured in a wizard, with the schema, units and metadata of each field refined in the next step, and saved as an adapter that colleagues can inspect, copy and restart.

The same applies beyond OPC UA. StreamPipes ships adapters for Siemens S7, Modbus TCP, RTU and ASCII, Beckhoff TwinCAT ADS, Allen-Bradley and Logix CIP, EtherNet/IP, CANopen and generic CAN, IEC 60870-5-104, Mitsubishi SLMP, Schneider UMAS, KNXnet/IP, OI4 and the Siemens WinCC alarm archive, next to the usual MQTT, Kafka, NATS, HTTP, file and database sources. Every adapter follows the same pattern: a guided configuration, a live preview of the incoming events, a schema step where you fix field names, types and measurement units and can run a short transformation script against a sample, and then monitoring of throughput, errors and logs once it runs. When a machine changes, you edit the adapter and the change is validated against the pipelines that depend on it.

That is what we mean by professional-grade machine data integration. It is not that Node-RED cannot read a PLC. It is that in StreamPipes the hard parts are done once, in the platform, and every machine after the first one benefits.

## Where each one wins

| Question | Node-RED | Apache StreamPipes |
|---|---|---|
| Wire a device to a service in an afternoon | Yes, with the broadest node library available | Yes, for anything with an adapter; the SDK covers the rest |
| Connect industrial machines | Community nodes, node ids and security handled in the flow | Guided adapters with OPC UA node browser, certificate management, PLC protocols, live preview and schema editor |
| Keep and query months of machine history | Not built in | Datasets with retention, export and charts |
| Typed streams with units and metadata | Per flow, by convention | Core concept, shared by all features |
| Dashboards for operators | Via the dashboard add-on | Built in, with assets and permissions |
| Users, roles, SSO, audit log | Basic | Built in |
| Run processing next to the machines, manage centrally | Multiple independent instances | Extension services in OT, one core in IT |
| Custom logic | JavaScript function nodes | Java or Python Functions, SDK for reusable elements |
| Operating model | One process per instance | Core, broker and extension services on Docker or Kubernetes |

## Using both

The two get along fine. Node-RED can act as a bridge for a device StreamPipes has no adapter for, publishing to MQTT, where a StreamPipes adapter picks it up. In the other direction, StreamPipes can publish derived values to a broker that Node-RED flows react to. If you have Node-RED flows that work, keep them.

## Summary

Use Node-RED for integrations and automations where the flow is the whole product and one process is enough. Use StreamPipes when the sources are machines and the data has to become something a team shares: connected through adapters that handle the protocols, certificates and schemas properly, kept with history, shown on dashboards and governed with access control. The [integrations catalog](/integrations/) lists every adapter, and the [quickstart](/docs/quick-start-guide/) shows the StreamPipes side in about ten minutes.
