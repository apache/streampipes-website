---
id: org.apache.streampipes.connect.iiot.adapters.plc4x.generic.s7
title: Siemens S7 (Basic)
sidebar_label: Siemens S7 (Basic)
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.plc4x.generic.s7/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

The adapter allows to connect devices supporting Siemens S7 (Basic).

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

* local-rack: Rack value for the client (PLC4X device). (INT)
* local-slot: Slot value for the client (PLC4X device). (INT)
* local-tsap: Local Transport Service Access Point. (INT)
* remote-rack: Rack value for the remote main CPU (PLC). (INT)
* remote-slot: Slot value for the remote main CPU (PLC). (INT)
* remote-rack2: Rack value for the remote secondary CPU (PLC). (INT)
* remote-slot2: Slot value for the remote secondary CPU (PLC). (INT)
* remote-tsap: Remote Transport Service Access Point. (INT)
* pdu-size: Maximum size of a data-packet sent to and received from the remote PLC. During the connection process both parties will negotiate a maximum size both parties can work with and is equal or smaller than the given value is used. The driver will automatically split up large requests to not exceed this value in a request or expected response. (INT)
* max-amq-caller: Maximum number of unconfirmed requests the PLC will accept in parallel before discarding with errors. This parameter also will be negotiated during the connection process and the maximum both parties can work with and is equal or smaller than the given value is used. The driver will automatically take care not exceeding this value while processing requests. Too many requests can cause a growing queue. (INT)
* max-amq-callee: Maximum number of unconfirmed responses or requests PLC4X will accept in parallel before discarding with errors. This option is available for completeness and is correctly handled out during the connection process, however it is currently not enforced on PLC4X’s side. So if a PLC would send more messages than agreed upon, these would still be processed. (INT)
* controller-type: As part of the connection process, usually the PLC4X S7 driver would try to identify the remote device. However some devices seem to have problems with this and hang up or cause other problems. In such a case, providing the controller-type will skip the identification process and hereby avoid this type of problem. Possible values are:/n- S7_300
- S7_400
- S7_1200
- S7-1500
- LOGO (STRING)
* read-timeout: This is the maximum waiting time for reading on the TCP channel. As there is no traffic, it must be assumed that the connection with the interlocutor was lost and it must be restarted. When the channel is closed, the "fail over" is carried out in case of having the secondary channel, or it is expected that it will be restored automatically, which is done every 4 seconds. (INT)
* ping: Time for supervision of TCP channels. If the channel is not active, a safe stop of the EventLoop must be performed, to ensure that no additional tasks are created. (BOOLEAN)
* ping-time: If your application requires sampling times greater than the set "read-timeout" time, it is important that the PING option is activated, this will prevent the TCP channel from being closed unnecessarily. (INT)
* retry-time: Time value in seconds at which the execution of the PING will be scheduled. Generally set by developer experience, but generally should be the same as (read-timeout / 2). (INT)

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
