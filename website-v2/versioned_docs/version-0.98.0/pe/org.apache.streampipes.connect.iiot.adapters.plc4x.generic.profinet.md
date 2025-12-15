---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.profinet
title: Profinet
sidebar_label: Profinet
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.profinet/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting Profinet.

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

* raw

### Transport Metadata

#### Required

**raw**



#### Advanced

**raw**

* resolve-mac-address: If set to true, the transport will automatically resolve the MAC address for a given IP address (Allows connecting to a raw-socket device using the devices host-name or ip-address). (BOOLEAN)
* support-vlans: Should VLan packets be automatically unpacked? (BOOLEAN)
* protocol-id: When provided, filters all packets to let only packets matching this ethernet protocol-id pass. (INT)

### Protocol Metadata

#### Required

* gsd-directory:  (STRING)

#### Optional

* gsd-directory:  (STRING)
* dap-id:  (STRING)
* ip-address:  (STRING)

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
