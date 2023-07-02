---
id: version-0.90.0-use-connect
title: StreamPipes Connect
sidebar_label: StreamPipes Connect
original_id: use-connect
---

StreamPipes Connect is the module to connect external data sources with Apache StreamPipes directly from the user interface. 
StreamPipes Connect offers various adapters for common communication protocols and some specific sensors. Besides connecting data, StreamPipes Connect offers ways to pre-process data without the need to build pipelines and integrates a schema guesser that listens for incoming data and recommends the recognized event schema.

The screenshot below illustrates the data marketplace, which shown after navigating to "StreamPipes Connect" and then clicking the "New adapter" button at the top.

<img class="docs-image" src="/docs/img/03_use-connect/01_connect-overview.png" alt="StreamPipes Connect Overview">

## Connecting new data sources

### Data Marketplace
The data marketplace shows a list of all adapters that are currently installed in Apache StreamPipes. Each adapter offers various configuration options which depend on the specifics of the adapter.
Adapters are distinguished a) by the data source concept they provide (data set or data stream) and b) the adapter type, where we distinguish between _generic adapters_, which usually implement a generic communication protocol such as MQTT or Apache Kafka or a specific sensor interface (e.g., for Netio power sockets).
Several filter options are available to find a suitable adapter. The configuration of a new adapter starts with selecting one of the available adapters, which starts an assistant that supports the adapter generation.

### Protocol/Basic Settings
In the first step, basic configurations need to be provided. For instance, for an Apache PLC4X adapter, the IP address of the PLC needs to be provided. In this example, we provide basic settings for connecting to an Apache Kafka broker. After all values are provided, the "Next" button opens the next step. 

<img class="docs-image" src="/docs/img/03_use-connect/06_connect-create.png" alt="StreamPipes Connect Basic Settings">

### Format Specification
The next step, format generation, is only available for generic adapters which support different message formats to be sent over the corresponding protocol. Think of a message broker that is able to consume messages in both JSON format or binary format.
Currently supported formats include XML, various JSON representations, images and CSV. After a format has been selected, further format configurations can be provided (depending on the selected format) to further customize the incoming message format.

<img class="docs-image" src="/docs/img/03_use-connect/02_customize-format.png" alt="StreamPipes Connect Format Selection">

### Schema Editor
In the next step, based on the previously provided protocol and format settings, the system will either provide the fixed/pre-defined schema of the adapter or, in case of specific adapters, will connect to the underlying system and try to listen for incoming data. After a few seconds, the schema editor will appear that provides a list of detected fields from the incoming events (the schema).

<img class="docs-image" src="/docs/img/03_use-connect/03_schema-editor.png" alt="StreamPipes Connect Schema Editor">

In the toolbar, several configuration options are available which transform the original schema:

* **Add Nested Property**. This option allows to modify the structure of the event by creating a nested structure. The schema can be simply changed by dragging and dropping fields into the nested structure.
* **Add Static Value**. This option allows to add a field containing a static value (e.g., an identifier) to the event.
* **Add Timestamp**. This options appends the current timestamp to each incoming event, useful in case the timestamp is not provided by the origin.
* **Refresh**. Re-triggers the schema guessing.
* **Delete field**. Select one or more fields by clicking the checkbox on the right and trigger the delete button.
* **Property scope**. For each field, a property scope can be defined which is either _Measurement_, _Dimension_ or _Header_. These values are later be used in the pipeline editor to assist in configuring pipeline elements and do not have any functional consequence. 
Use _Measurement_ to indicate the field measures a value (e.g., a temperature value from a sensor), use _Dimension_ for any identifier (e.g., the sensor ID) and use _Header_ for any other metadata such as timestamps.

For each field (also called event property) of the schema, additional configuration options are available by clicking the _Edit_ button:

* **Label**. Used to provide a human-readable label for the field, which will ease the identification of fields when building pipelines.
* **Runtime Name.** This is the identifier of the field in the underlying message representation format (e.g., the JSON key). Renaming the runtime name will trigger a so-called _transformation rule_ which renames the incoming field name to the new field name before forwarding it to StreamPipes.
* **Domain Property/Semantic Type**. To help StreamPipes better understand the value which is represented by the field, semantic type information can be given. Up from StreamPipes 0.68.0, the semantic type can be selected from a wide range of available options. Additionally, an URL can be manually provided that indicates the meaning of the value (e.g., http://schema.org/Temperature).
* **Mark as Timestamp**. Indicates that the selected value represents a timestamp. When selected, a _timestamp converter_ can be configured which will convert incoming timestamps to the UNIX timestamp.
* **Runtime Type**. Here, the data type can be changed  
* **Unit**. Allows to specify the unit in which the value is measured. Once selected, you can also automatically convert the unit to a target unit, which will then be inserted into the data stream produced by the adapter (see screenshot below). 

<img class="docs-image" src="/docs/img/03_use-connect/04_schema-editor-conversion.png" alt="StreamPipes Connect Unit Conversion">

Assigning a timestamp is mandatory and can be either done by adding a timestamp from the menu, or by choosing an existing field and marking it as timestamp.

### Adapter Generation
Finally, the adapter is ready to be started. In the _Adapter Generation_ page, a name and description for the resulting data stream must be provided.
Once started, StreamPipes creates your new adapter and displays a preview of the connected data, which refreshes about once per second.
Afterwards, the newly created data stream is available in the pipeline editor for further usage.

<img class="docs-image" src="/docs/img/03_use-connect/05_adapter-generation.png" alt="StreamPipes Connect Adapter Generation">

## Managing adapters

Currently running adapters are available in the "Running adapters" section of StreamPipes Connect. Existing adapters can be stopped and deleted. Currently, there is no mechanism to edit an existing adapter or to stop the adapter without deleting it.

### Adapter Templates
For frequently used configurations, adapter templates can be created. An adapter template is a pre-configured adapter which can be further customized by users. Created adapter templates are available in the marketplace similar to standard adapters.
