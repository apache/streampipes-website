---
id: user-guide-processing-elements
title: Processing Elements
sidebar_label: Processing Elements
original_id: user-guide-processing-elements
---

This page explains some processing elements (not including the full list) that are available in the StreamPipes Starter Kit.
New Processing Elements can also be included during runtime.
The once presented on this page come with StreamPipes and cen be used immediately. 
Check the [developer guide](dev-guide-tutorial-processors) to learn how new Processing Elements can be implemented and integrated into StreamPipes.

## Data Streams

<details class="info">
<summary>Water Level</summary>

{'{'}
"underflow": false,
"overflow": false,
"level": 74.2184,
"timestamp": 1515450274503,
"sensorId": "level01"
{'}'}
</details>

<details class="info">
<summary>Flow Rate</summary>

		Example Event:
			{'{'}
				"mass_flow":5.344,
				"temperature":45.8665,
				"timestamp":1515450053387,
				"sensorId":"flowrate01"
        {'}'}
</details>

<details class="info">
<summary>Pressure Tank</summary>

    Example Event:
		{'{'}
			"pressure": 57.1648,
			"timestamp": 1515450424800,
			"sensorId": "pressure01"
		  {'}'}
</details>

<details class="info">
<summary>Vehicle Position</summary>
 		Example Event:
		{'{'}
			"latitude": 40.7551,
			"plateNumber": "level02",
			"timestamp": 1515450606449,
			"longitude": -73.953
		  {'}'}
</details>
    
## Processing Elements

<div class="admonition info">
<div class="admonition-title">Numerical Filter</div>
<p>Filters numerical values based on a given threshold</p>
</div>

<div class="admonition info">
<div class="admonition-title">Projection</div>
<p>Outputs a subset of an incoming event, e.g., if the input event contains both temperature and machineId, only the temperature can be send to the next component</p>
</div>

<div class="admonition info">
<div class="admonition-title">Text Filter</div>
<p>Filters text-based fields based on a filter condition</p>
</div>

<div class="admonition info">
<div class="admonition-title">Aggregation</div>
<p> Can be used to aggregate measurements, e.g., to calculate the average temperature during the last 10 minutes</p>
</div>

<div class="admonition info">
<div class="admonition-title">Peak Detection</div>
<p>This component detects peaks in time series data</p>
</div>

<div class="admonition info">
<div class="admonition-title">Timestamp Enrichment</div>
<p>Appends the current time to any incoming event</p>
</div>

<div class="admonition info">
<div class="admonition-title">Increase</div>
<p>Detects the increase of a value over time, e.g., a 10-percent-increase of the temperature within 5 minutes</p>
</div>

<div class="admonition info">
<div class="admonition-title">Co-Occurrence</div>
<p>Can be used to detect the co-occurrence of two events, e.g., a high temperature occurs together with high dust particle level within 10 minutes
</p>
</div>

...and many more!

## Data Sinks

<div class="admonition info">
<div class="admonition-title">Notification</div>
<p>Creates a notification in the ProaSense UI.</p>
</div>

<div class="admonition info">
<div class="admonition-title">Dashboard</div>
<p>Forwards events to the visualization component</p>
</div>

<div class="admonition info">
<div class="admonition-title">CouchDB</div>
<p>Stores data in a CouchDB database</p>
</div>

<div class="admonition info">
<div class="admonition-title">Kafka Publisher</div>
<p>Forwards data to a Kafka cluster</p>
</div>

<div class="admonition info">
<div class="admonition-title">Elasticsearch</div>
<p>Stores data in an Elasticsearch cluster</p>
</div>

...and many more!

## Further resources

Also check the github project [https://www.github.com/streampipes/streampipes-pipeline-elements](https://www.github.com/streampipes/streampipes-pipeline-elements) to get an up-to-date list of available pipeline elements.

