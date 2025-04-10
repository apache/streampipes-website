---
id: org.apache.streampipes.processors.enricher.jvm.processor.expression
title: Math Expression
sidebar_label: Math Expression
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
    <img src="/img/pipeline-elements/org.apache.streampipes.processors.enricher.jvm.processor.expression/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description
A pipeline element that evaluates Math expressions using the Apache Commons JEXL library.

***

## Required input
This processor works with any input stream that contains numerical values.

***

## Configuration
A math expression can be defined using the JEXL syntax (see https://commons.apache.org/proper/commons-jexl/index.html).

Example:

```
flow_rate*2
```

It is also possible to use methods from `java.lang.Math`:

```
Math.pow(flow_rate^2)
```

All fields from th einput stream are available as variables.

## Output
For each expression, an additional field is created in the output stream. Field names are user-defined.
