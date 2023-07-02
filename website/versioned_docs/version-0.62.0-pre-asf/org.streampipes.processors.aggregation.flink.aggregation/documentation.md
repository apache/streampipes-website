---
id: version-0.62.0-org.streampipes.processors.aggregation.flink.aggregation
title: Aggregation
sidebar_label: Aggregation
original_id: org.streampipes.processors.aggregation.flink.aggregation
---



<p align="center"> 
    <img src="/docs/img/pipeline-elements/org.streampipes.processors.aggregation.flink.aggregation/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Performs different aggregation functions based on a sliding time window (e.g., average, sum, min, max)

***

## Required input

The aggregation processor requires a data stream that has at least one field containing a numerical value.

***

## Configuration

### Group by
The aaggregation function can be calculated separately (partitioned) by the selected field value. 

### Output every
The frequency in which aggregated values are sent in seconds.

### Time window
The size of the time window in seconds

### Aggregated Value
The field used for calculating the aggregation value.

## Output

This processor appends the latest aggregated value to every input event that arrives.