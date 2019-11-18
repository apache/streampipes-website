---
id: version-0.62.0-org.streampipes.processors.filters.jvm.numericalfilter
title: Numerical Filter
sidebar_label: Numerical Filter
original_id: org.streampipes.processors.filters.jvm.numericalfilter
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.processors.filters.jvm.numericalfilter/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description
The Numerical Filter processor filters numerical values based on a given threshold.

***

## Required input
The processor works with any input event that has one field containing a numerical value.

***

## Configuration

### Field
Specifies the field name where the filter operation should be applied on.


### Operation
Specifies the filter operation that should be applied on the field.

### Threshold value
Specifies the threshold value.

## Output
The processor outputs the input event if it satisfies the filter expression.