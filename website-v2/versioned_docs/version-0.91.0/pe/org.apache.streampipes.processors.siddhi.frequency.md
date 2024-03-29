---
id: org.apache.streampipes.processors.siddhi.frequency
title: Frequency Calculation
sidebar_label: Frequency Calculation
original_id: org.apache.streampipes.processors.siddhi.frequency
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



Frequency calculation with Siddhi CEP engine.

***

## Description

Calculates the frequency of the event stream.

***

## Required input

Does not have any specific input requirements.

***

## Configuration

### Time Unit

The time unit of the window. e.g, hrs, min and sec

### Time window length 

The time duration of the window in seconds.

## Output

Outputs the events according to the frequency specified.
