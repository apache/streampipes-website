---
id: org.apache.streampipes.processors.transformation.jvm.booloperator.inverter
title: Boolean Inverter
sidebar_label: Boolean Inverter
original_id: org.apache.streampipes.processors.transformation.jvm.booloperator.inverter
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
    <img src="/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

This processor requires a boolean value in the data stream and inverts its value. (e.g. true -> flase)

***

## Required input

### Boolean Field

The boolean value to be inverted.

***

## Configuration
No further configuration required

## Output
The output schema is the same as the input schema. Just the value of the property is changed.
