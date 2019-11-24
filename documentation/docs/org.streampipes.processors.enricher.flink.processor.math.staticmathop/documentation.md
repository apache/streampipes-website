---
id: org.streampipes.processors.enricher.flink.processor.math.staticmathop
title: Static Math
sidebar_label: Static Math
---



<p align="center"> 
    <img src="/docs/img/pipeline-elements/org.streampipes.processors.enricher.flink.processor.math.staticmathop/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Performs calculation on an event property with a static value (+, -, *, /, %).

***

## Required input
The math processor works with any event that has at least one field containing a numerical value.

***

## Configuration

### Left operand
The field from the input event that should be used as the left operand.

### Right operand value
Specify the value of the right operand.

### Operation
The math operation that should be performed.

## Output
The processor appends the calculation result to each input event.