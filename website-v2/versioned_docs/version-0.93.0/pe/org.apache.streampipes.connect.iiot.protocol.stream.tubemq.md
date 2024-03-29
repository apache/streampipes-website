---
id: org.apache.streampipes.connect.iiot.protocol.stream.tubemq
title: Apache TubeMQ (InLong)
sidebar_label: Apache TubeMQ (InLong)
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.iiot.protocol.stream.tubemq/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Consumes messages from an Apache TubeMQ broker.

***

## Configuration

### TubeMQ Master Information

This field describes the endpoints of all the TubeMQ masters.

The format should be like `ip1:port1,ip2:port2,ip3:port3`.

### TubeMQ Topic

The topic where events should be sent to.

### TubeMQ Consumer Group

The consumer group of the TubeMQ Consumer.

