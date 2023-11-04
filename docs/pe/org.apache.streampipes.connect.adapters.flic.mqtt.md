---
id: org.apache.streampipes.connect.adapters.flic.mqtt
title: Flic MQTT
sidebar_label: Flic MQTT
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
    <img src="/img/pipeline-elements/org.apache.streampipes.connect.adapters.flic.mqtt/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Connect Flic Smart Button over MQTT

***

## Required input

This adapter uses the MQTT protocol and requires the data in following exemplary JSON format:
{ "timestamp": 1584973344615, "click_type": SINGLE, "button_id": button1 }.
***

## Configuration

### Broker URL 

Example: tcp://test-server.com:1883 (Protocol required. Port required)

### Access Mode

The user can choose between unauthenticated or authenticated access.

### TOPIC
The topic the MQTT broker publishes to.

## Output

