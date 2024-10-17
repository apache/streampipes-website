---
id: use-programmatically-create-adapters
title: Adapters as Code
sidebar_label: Adapters as Code
---

In Apache StreamPipes, adapters are typically created via the web interface. 
However, it is possible to create adapters programmatically using a compact YAML format and the StreamPipes REST API. 
Programmatic creation of adapters can be a useful feature in cases where many similar adapters have to be created. 
In this case, an externally managed YAMl file containing the full adapter configuration can be used and modified.

## Introduction

In StreamPipes, adapters are responsible for collecting data from various industrial data sources. 
While the UI simplifies this process, you can also manage adapters programmatically for better automation, integration with CI/CD pipelines, or infrastructure-as-code practices.

This guide demonstrates how to define and create adapters using a YAML format and StreamPipes REST API, offering more flexibility to manage adapters programmatically.

## Adapter YAML Structure

An adapter in StreamPipes can be defined using a YAML file, which contains a compact description of the adapter configuration.
The basic structure of the YAML format for an adapter definition includes:

- **Name**: The name of the adapter.
- **ID**: A unique ID for the adapter
- **Description**: An additional description of the adapter
- **AppID**: The adapter type
- **Configuration**: Configuration details such as connection details, polling intervals, data format, and more
- **Schema**: Schema refinements, e.g., additional label, description, semantic type and property scope
- **Enrich**: Enrichment rules. Currently, only timestamp enrichment rules are supported in the YAML specification
- **Transform**: Transformation rules. Currently, rename and measurement unit transforms are supported.
- **CreateOptions**: Additional operations that are executed upon adapter generation.

Here’s a sample structure to define an OPC-UA adapter:

```yaml
name: My OPC Adapter
id: testadapter
description: Test
appId: org.apache.streampipes.connect.iiot.adapters.opcua
configuration:
  - opc_host_or_url: OPC_URL
    opc_server_url: opc.tcp://localhost:62541/milo
  - adapter_type: PULL_MODE
    pulling_interval: 1000
  - access_mode: UNAUTHENTICATED
  - available_nodes:
    - "ns=2;s=Leakage Test Station/temperature"
    - "ns=2;s=Leakage Test Station/pressure"

schema:
  temperature:
    propertyScope: measurement
    label: Temp
    description: Temperature value
    semanticType: http://schema.org/temperature

enrich:
  timestamp: timestamp

transform:
  rename:
    pressure: pressure3

createOptions:
  persist: true
  start: true
```

## Programmatically creating adapters

Here is a walkthrough to create an adapter programmatically over the API:

### Background: Internal adapter generation process

The YAML definition file is a more compact notation of StreamPipes internal data format to represent an adapter.
When creating an adapter over the user interface, StreamPipes requires some basic, adapter-specific settings.
Afterwards, a `Guess Schema` step is executed. In this step, StreamPipes connects to the underlying data sources, receives some samples of live data, determines the exact schema of the data stream and provides user with the source schema.
This schema can be further refined using `Transformation Rules`. 

When an adapter is created using the more compact YAML notation, the same process is applied. Based on the provided configuration, the API connects to the given data source and determines the schema.
The transformation rules provided in the YAMl definition are then applied on the original schema.
Therefore, it is important that the provided schema refinement and transformation steps fit the original schema.

### Getting a valid definition file

The easiest way to create a valid YAML file is the user interface. Within the StreamPipes Connect view, it is possible to export the YAML definition for all existing adapters.
In addition, the adapter generation wizard also offers the option to view the adapter configuration before creating the adapter by clicking the `Code` checkbox:

<img className="docs-image" src="/img/03_use-programmatically-create-adapters/01_adapter-generation-code.png" alt="StreamPipes Adapter Code View"/>

Another option is to open the adapter details view:

<img className="docs-image" src="/img/03_use-programmatically-create-adapters/02_adapter-details-view-code.png" alt="StreamPipes Adapter Details Code View"/>

You can copy this definition and modify it according to your needs.

#### Configuration

For each configuration option in the user interface, there is a mapping to the YAMl definition.

A configuration value is a key/value pair, where the key corresponds to the internal name of the configuration and the value depends on the configuration type.

#### Schema

Schema definitions enhance the metadata of each field from the input stream.
The following configurations are supported:

* `label` to add an additional (human-readable) label to the field
* `description` for an additional description
* `propertyScope` to determine the type of the field (HEADER_PROPERTY, DIMENSION_PROPERTY or MEASUREMENT_PROPERTY)
* `semanticType` to provide the semantic type of the field (e.g., `https://schema.org/temperature`)

#### Enrich

* `timestamp` defines that an additional field named timestamp is added to each incoming event containing the ingestion time as a UNIX timestamp.

#### Transform

Currently, the following transforms are supported:

* `rename` defines renaming of individual fields from the input stream. A valid configuration consists of a key/value pair, where the key indicates the original field name and the value the target field name.
* `measurementUnit` defines a value transformation between measurement units. A valid configuration consists of a key/value pair, where the key indicates the field name and the value the target measurement unit.

#### CreateOptions

Currently, two settings can be provided in the `CreateOptions` section:

* `persist` indicates whether the data stream produced by the adapter should also be stored. In this case, a `Persist Pipeline` is automatically created.
* `start` indicates whether the adapter should be immediately started after creation.

### API

To create a new adapter, call the StreamPipes API as follows:

```
POST /streampipes-backend/api/v2/compact-adapters
Content-type: application/yml
Accept: application/yml
```

You must provide valid credentials by either adding a Bearer token or an API key:

```
X-API-USER: your username
X-API-KEY: your api key
```

The body of the request should contain the YAML definition.

:::info
It is also possible to provide the adapter specification as a JSON document. In this case, change the `Content-type` to `application/json`.


