---
id: version-0.62.0-org.streampipes.sinks.databases.jvm.postgresql
title: PostgreSQL
sidebar_label: PostgreSQL
original_id: org.streampipes.sinks.databases.jvm.postgresql
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.sinks.databases.jvm.postgresql/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

Stores events in a Postgres database.

***

## Required input

This sink does not have any requirements and works with any incoming event type.

***

## Configuration

### Hostname

The hostname of the PostgreSQL instance.

### Port

The port of the PostgreSQL instance (default 5432).

### Database Name

The name of the database where events will be stored

### Table Name

The name of the table where events will be stored (will be created if it does not exist)

### Username

The username for the PostgreSQL Server.

### Password

The password for the PostgreSQL Server.

## Output

(not applicable for data sinks)
