---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.knxnet-ip
title: KNXNet/IP
description: "KNXNet/IP adapter for Apache StreamPipes: The adapter allows to connect devices supporting KNXNet/IP."
sidebar_label: KNXNet/IP
---

<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one or more
  ~ contributor license agreements.  See the NOTICE file distributed with
  ~ this work for additional information regarding copyright ownership.
  ~ The ASF licenses this file to You under the Apache License, Version 2.0
  ~ (the "License"); you may not use this file except in compliance with
  ~ the License.  You may obtain a copy of the License at
  ~
  ~    http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  ~
  -->



<p align="center"> 
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.knxnet-ip/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting KNXNet/IP.

***

## Configuration

The following configuration options are available when creating an adapter:

### PLC Address

This field requires the PLC address in form of the IP without the prefixed protocol (e.g., 192.168.34.56).

### Polling Interval

The polling interval requires a number in milliseconds, which represents the interval in which the adapter will poll the
PLC for new data. For instance, a polling interval of 1000 milliseconds will configure the adapter to send a request to
the PLC every second.

If a read is still running when the next poll is due, that poll is skipped. Read requests are bounded to five seconds;
configure driver request timeouts below this bound. After a failure, retries back off from one second up to sixty seconds.
Successful reads reset this backoff.

### Supported Transports

The following transports are supported by this adapter:

* udp

### Transport Metadata

#### Required

**udp**



#### Advanced

**udp**

* local-address: Local address to bind to. If not set, binds to all interfaces. (STRING)
* local-port: Local port to bind to. 0 uses ephemeral port. (INT)
* read-timeout-ms: Socket read timeout in milliseconds. 0 means no timeout. (INT)
* max-packet-size: Maximum UDP packet size in bytes. (INT)
* send-buffer-size: Send buffer size in bytes. 0 uses system default. (INT)
* receive-buffer-size: Receive buffer size in bytes. 0 uses system default. (INT)
* broadcast: Enable SO_BROADCAST for sending broadcast packets. (BOOLEAN)
* reuse-address: Enable SO_REUSEADDR to allow multiple bindings to the same address/port. (BOOLEAN)
* share-socket: Share the underlying UDP socket across multiple transport instances. When true, instances with the same localAddress:localPort will share a socket. This is useful for protocols where multiple logical connections share one UDP port. (BOOLEAN)
* multicast-ttl: Time-to-live for multicast packets (1-255). (INT)

### Protocol Metadata

#### Required



#### Optional

* knxproj-file-path: Path to the `knxproj` file. The default KNXnet/IP protocol doesn't provide all the information needed to be able to fully decode the messages. (FILE)
* knxproj-password: Optional password needed to read the knxproj file. (STRING)
* group-address-num-levels: KNX Addresses can be encoded in multiple ways. Which encoding is used, is too not provided by the protocol itself so it has to be provided externally:

- 3 Levels: \{main-group (5 bit)\}/\{middle-group (3 bit)\}/\{sub-group (8 bit)\}
- 2 Levels: \{main-group (5 bit)\}/\{sub-group (11 bit)\}
- 1 Level: \{sub-group (16 bit)\}

The default is 3 levels. If the `knxproj-file-path` this information is provided by the file. (INT)
* connection-type: Type of connection used to communicate. Possible values are:

- 'LINK_LAYER' (default): The client becomes a participant of the KNX bus and gets it's own individual KNX address.
- 'RAW': The client gets unmanaged access to the bus (be careful with this)
- 'BUSMONITOR': The client operates as a busmonitor where he can't actively participate on the bus. Only one 'BUSMONITOR' connection is allowed at the same time on a KNXnet/IP gateway. (STRING)
* request-timeout-ms: Maximum time (in milliseconds) to wait for a reply during the KNXnet/IP search, connect and tunnelling exchanges. (INT)

### Tags

The syntax to define tags is based on the PLC4X syntax, see https://plc4x.apache.org/plc4x/latest/users/protocols/s7.html.
Address Pattern:

```
propertyName=%{Memory-Area}{start-address}[{start-index}..{end-index}]:{Data-Type}

temperature=%I0.0:INT
```

### Browsing tags

Choose **Browse PLC tags** after configuring the connection, then load **Available tags** and select the readable tags.
The browse query defaults to `*` for S7 and ADS, which browse all available items with this query.
For OPC UA, it defaults to `ns=0;i=85` (the Objects folder). Children are loaded one level at a time
as you expand folders, avoiding a recursive browse of the entire server. Enter a parent NodeId to browse its children,
for example `ns=2;s=Demo.Industrial.CncMachine.RawData`, then select `cycleActive` from the results.
A query for a leaf node returns its children, not the leaf itself. Earlier saved OPC UA queries using `*` are
interpreted as the Objects folder. Include the server's endpoint path in **PLC Address**, for example
`localhost:4840/milo`; the path is case-sensitive. Query syntax and returned information depend on the driver and PLC. Unsupported connections report an error; use **Enter tags manually** instead.
Browsing waits up to ten seconds for the response and returns the connection to the shared cache afterwards.

The tree preserves the hierarchy supplied by the driver. Only readable items with an address can be selected.
S7 browsing can return memory areas and data blocks as byte addresses rather than symbolic, typed variables.
Use manual entry when you need different offsets, datatypes, or custom event field names.

Selected addresses are used unchanged for sampling and polling. Event field names start with `tag_`, followed by the
address with punctuation replaced by underscores. Conflicting names require manual entry. Browsing is performed only
while configuring the adapter; starting an adapter uses its saved selections without browsing again.

### Upgrading existing adapters

The version 3 migration keeps existing tags in the selected manual-entry option, preserving field names and addresses.

The version 2 adapter migration updates saved PLC4X configuration parameter names and legacy array addresses for PLC4X 1.0.
For example, `request-timeout` becomes `request-timeout-ms`, and `%DB42:28.0:BYTE[4]` becomes
`%DB42:28.0[0..3]:BYTE`. A single index selects a scalar; a range selects a list.
S7 connections now use the `s7` driver with the `cotp` transport. Rack and slot parameters use the `cotp.` prefix.
Explicit configuration values are retained. Unspecified settings use PLC4X 1.0 defaults, including its certificate
verification defaults. Review the [PLC4X migration guide](https://plc4x.apache.org/plc4x/latest/users/migrations/0.13.1-to-1.0.0/index.html)
for protocol-specific changes before connecting to a device after an upgrade.

## Best Practices

Instead of creating a large event containing all nodes that should be available in StreamPipes, consider to group the
fields logically into smaller adapters.
This will ease the definition of pipelines for users and eases future modifications.
