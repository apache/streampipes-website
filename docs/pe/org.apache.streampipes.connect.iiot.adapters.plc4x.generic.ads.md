---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.ads
title: Beckhoff TwinCat ADS
sidebar_label: Beckhoff TwinCat ADS
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.ads/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting Beckhoff TwinCat ADS.

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

* target-ams-net-id: AMS-Net-Id of the target. An AMS-Net-Id has the regular format of an IPv4 IP-Address, however with 6 segments instead of 4. (STRING)
* target-ams-port: AMS port of the target. (INT)
* source-ams-net-id: AMS-Net-Id of the source. An AMS-Net-Id has the regular format of an IPv4 IP-Address, however with 6 segments instead of 4. (STRING)
* source-ams-port: AMS port of the source. (INT)

#### Optional

* target-ams-net-id: AMS-Net-Id of the target. An AMS-Net-Id has the regular format of an IPv4 IP-Address, however with 6 segments instead of 4. (STRING)
* target-ams-port: AMS port of the target. (INT)
* source-ams-net-id: AMS-Net-Id of the source. An AMS-Net-Id has the regular format of an IPv4 IP-Address, however with 6 segments instead of 4. (STRING)
* source-ams-port: AMS port of the source. (INT)
* timeout-request: Default timeout for all types of requests. (INT)
* load-symbol-and-data-type-tables: Configures, if when connecting the data-type- and symbol-table should be read. This is an optimization that can help in cases, where the PLC program is pretty large and downloading the full tables is causing problems. When disabled, symbolic addresses will manually be resolved as soon as an address is used. (BOOLEAN)

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
