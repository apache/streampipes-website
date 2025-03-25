---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.bacnet-ip
title: BACnet/IP
sidebar_label: BACnet/IP
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.bacnet-ip/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting BACnet/IP.

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
* tcp
* pcap

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

* ede-file-path: Path to the location of a single EDE file, that contains the descriptor for the target device. (STRING)
* ede-directory-path: Path to the directory used for storing multiple EDE files. These files contain the descriptors for the possible target devices. (STRING)

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
