---
id: org.apache.streampipes.processors.enricher.flink.timestamp
title: Timestamp Enricher
sidebar_label: Timestamp Enricher
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
    <img src="/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.timestamp/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description
Appends the current time in ms to the event payload.

***

## Required input
The timestamp enricher works with any input event.

***

## Configuration

(no further configuration required)

## Output
This processor appends the current system time to every input event.
