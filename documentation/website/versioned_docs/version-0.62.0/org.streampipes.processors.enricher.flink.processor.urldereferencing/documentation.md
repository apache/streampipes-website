---
id: version-0.62.0-org.streampipes.processors.enricher.flink.processor.urldereferencing
title: URL Dereferencing
sidebar_label: URL Dereferencing
original_id: org.streampipes.processors.enricher.flink.processor.urldereferencing
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.processors.enricher.flink.processor.urldereferencing/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Parses and appends the html page as a string to event.

***

## Required input
The URL Dereferencing processor requires an input stream that provides an input field of type 'string', representing 
the URL to dereference.

***

## Configuration

### URL
The field containing the URL to dereference.

## Output
The processor appends the extracted HTML page to each input event.