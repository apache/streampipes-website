---
id: org.apache.streampipes.sinks.databases.jvm.iotdb
title: IoTDB
sidebar_label: IoTDB
original_id: org.apache.streampipes.sinks.databases.jvm.iotdb
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
    <img src="/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.iotdb/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Stores events in a IoTDB database.

***

## Required input

This sink does not have any requirements and works with any incoming event type.

***

## Configuration

### Hostname

The hostname of the IoTDB instance.

### Port

The port of the IoTDB instance (default 6667).

### Storage Group Name

The name of the storage group where events will be stored (will be created if it does not exist).
For each element of the stream a new time series will be created.

### Username

The username for the IoTDB Server.

### Password

The password for the IoTDB Server.

## Output

(not applicable for data sinks)
