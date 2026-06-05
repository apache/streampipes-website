---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.knxnet-ip
title: KNXNet/IP
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

### Supported Transports

The following transports are supported by this adapter:

* udp
* pcap
* raw

### Transport Metadata

#### Required

**udp**



#### Advanced

**udp**

* local-port: Some connections require a UDP listener to listen on a fixed port.
Use this configuration option in order to define the port number of the local port. (INT)

### Protocol Metadata

#### Required



#### Optional

* knxproj-file-path: Path to the `knxproj` file. The default KNXnet/IP protocol doesn't provide all the information needed to be able to fully decode the messages. (STRING)
* knxproj-password: Optional password needed to read the knxproj file. (STRING)
* group-address-num-levels: KNX Addresses can be encoded in multiple ways. Which encoding is used, is too not provided by the protocol itself so it has to be provided externally:

- 3 Levels: {main-group (5 bit)}/{middle-group (3 bit)}/{sub-group (8 bit)}
- 2 Levels: {main-group (5 bit)}/{sub-group (11 bit)}
- 1 Level: {sub-group (16 bit)}

The default is 3 levels. If the `knxproj-file-path` this information is provided by the file. (INT)
* connection-type: Type of connection used to communicate. Possible values are:

- 'LINK_LAYER' (default): The client becomes a participant of the KNX bus and gets it's own individual KNX address.
- 'RAW': The client gets unmanaged access to the bus (be careful with this)
- 'BUSMONITOR': The client operates as a busmonitor where he can't actively participate on the bus. Only one 'BUSMONITOR' connection is allowed at the same time on a KNXnet/IP gateway. (STRING)

### Tags

The syntax to define tags is based on the PLC4X syntax, see https://plc4x.apache.org/users/protocols/s7.html.
Address Pattern:

```
propertyName=%{Memory-Area}{start-address}:{Data-Type}[{array-size}]

temperature=%I0.0:INT
```

## Best Practices

Instead of creating a large event containing all nodes that should be available in StreamPipes, consider to group the
fields logically into smaller adapters.
This will ease the definition of pipelines for users and eases future modifications.
