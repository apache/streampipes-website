---
id: version-0.62.0-org.streampipes.processors.enricher.flink.processor.math.mathop
title: Math
sidebar_label: Math
original_id: org.streampipes.processors.enricher.flink.processor.math.mathop
---



<p align="center"> 
    <img src="/docs/img/pipeline-elements/org.streampipes.processors.enricher.flink.processor.math.mathop/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Performs calculations on event properties (+, -, *, /, %).

***

## Required input
The math processor works with any event that has at least one field containing a numerical value.

***

## Configuration

### Left operand
The field from the input event that should be used as the left operand.

### Right operand
The field from the input event that should be used as the right operand.

### Operation
The math operation that should be performed.

## Output
The processor appends the calculation result to each input event.
