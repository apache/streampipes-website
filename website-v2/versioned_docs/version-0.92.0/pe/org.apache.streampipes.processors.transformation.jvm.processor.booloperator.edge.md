---
id: org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge
title: Signal Edge Filter
sidebar_label: Signal Edge Filter
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
    <img src="/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Observes a boolean value and forwards the event when a signal edge is detected

***

## Required input

### Boolean Field
Boolean field that is observed

***

## Configuration
### Kind of edge
* Detect rising edges 
* Detect falling edges 
* Detect both
    
### Delay
Defines for how many events the signal must be stable before result is emitted.
(E.g. if set to 2, the result is not emitted if value toggles between true and false, it fires when two consecutive events are detected after the flank)

## Output
Emits input event, when the signal edge is detected
