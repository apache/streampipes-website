---
id: org.streampipes.processors.transformation.jvm.processor.timestampextractor
title: Timestamp Extractor
sidebar_label: Timestamp Extractor
---



<p align="center"> 
    <img src="/docs/img/pipeline-elements/org.streampipes.processors.transformation.jvm.processor.timestampextractor/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

This processor extracts a timestamp into the individual time fields (e.g. day field, hour field, ....)

***

## Required input

This processor requires an event that provides a timestamp value (a field that is marked to be of type ``http://schema
.org/DateTime``.

***

## Configuration

### Timestamp Field

The field of the event containing the timestamp to parse.

### Extract Fields

Select the individual parts of the timestamp that should be extracted, e.g., Year, Minute and Day.

## Output

The output of this processor is a new event that contains the fields selected by the ``Extract Fields`` parameter.