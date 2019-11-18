---
id: org.streampipes.processors.aggregation.flink.rate
title: Event Rate
sidebar_label: Event Rate
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.processors.aggregation.flink.rate/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Computes the current event rate. Output is a number representing events per second.

***

## Required input

The event rate processor works with any stream and does not have any specific requirements.

***

## Configuration

### Time Baseline
Time window size used for calculating the rate in seconds, also defines the output rate

## Output