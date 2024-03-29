---
id: org.apache.streampipes.sinks.brokers.jvm.jms
title: JMS Publisher
sidebar_label: JMS Publisher
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
    <img src="/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.jms/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Publishes events to a message broker (e.g., ActiveMQ) using the Java Message Service (JMS) protocol.

***

## Required input

This sink does not have any requirements and works with any incoming event type.

***

## Configuration

### JMS Broker Settings

The basic settings to connect to the broker. 
The JMS broker URL indicates the URL of the broker (e.g., tcp://localhost), the port indicates the port of the broker
 (e.g., 61616)


### JMS Topic

The topic where events should be sent to.

## Output

(not applicable for data sinks)