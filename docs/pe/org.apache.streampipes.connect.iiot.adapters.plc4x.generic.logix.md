---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.logix
title: Logix CIP
sidebar_label: Logix CIP
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.logix/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting Logix CIP.

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

* tcp

### Transport Metadata

#### Required

**tcp**



#### Advanced

**tcp**

* keep-alive: Should keep-alive packets be sent? (BOOLEAN)
* no-delay: Should packets be sent instantly or should we give the OS some time to aggregate data. (BOOLEAN)
* default-timeout: Timeout after which a connection will be treated as disconnected. (INT)

### Protocol Metadata

#### Required



#### Optional

* communication-path: The communication path allows for connection routing across multiple backplanes. It uses a common format found in Logix controllers.
It consists of pairs of values, each pair begins with either 1 (Backplane) or 2 (Ethernet), followed by a slot in the case of a backplane address,
or if using Ethernet an ip address. e.g. [1,4,2,192.168.0.1,1,1] - Routes to the 4th slot in the first rack, which is a ethernet module, it then connects to the address 192.168.0.1, then finds the module in slot 1. (STRING)
* backplane: Without using routing information the backplane defaults to 1. This is overridden if communicationPath is provided. (INT)
* slot: The slot within the backplane the CPU is located. (INT)
* bigEndian: Configure if the connection should be set to transport data in Big-Endian format, or not. (BOOLEAN)

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
