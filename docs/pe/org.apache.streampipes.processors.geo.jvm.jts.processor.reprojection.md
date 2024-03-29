---
id: org.apache.streampipes.processors.geo.jvm.jts.processor.reprojection
title: Geo CRS Reprojection
sidebar_label: Geo CRS Reprojection
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
    <img src="/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.reprojection/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Change of CRS due reprojection

***

## Required input

*  WKT String of a JTS Point Geometry
*  Integer value representing Source EPSG code
*  Integer value representing Target EPSG code


***

## Configuration

Manual Input of  target EPSG Code and WKT will be reporjected.

### 1st parameter
Geometry WKT String

### 2nd parameter
Source EPSG code

### 3rd parameter
Target EPSG code

***

## Output

Update of event with new EPSG udn WKT-Literal in the dependent target epsg.

### Example

