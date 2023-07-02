---
id: pipeline-elements
title: Overview
sidebar_label: Overview
---
<div className="pe-grid-container">
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor">
                <img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.absence/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Absence</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects whether an event does not arrive within a specified time after the
            occurrence of another event.
        </div>
        <div className="pe-container-item-footer">
            <div>
                <i className="fas fa-file" />
                <a href="/docs/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.absence">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-pattern-detection-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-pattern-detection-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.aggregation.flink.aggregation/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Aggregation</div>
            </div>
        </div>
        <div className="pe-container-item-body">Performs different aggregation functions</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.aggregation.flink.aggregation">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-aggregation-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-aggregation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.and/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">And</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects whether an event co-occurs with another event within a given time.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.and">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-pattern-detection-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-pattern-detection-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.protocol.stream.kafka/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Apache Kafka</div>
            </div>
        </div>
        <div className="pe-container-item-body">Consumes messages from an Apache Kafka broker</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.protocol.stream.kafka">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters-iiot">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.protocol.stream.pulsar/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Apache Pulsar</div>
            </div>
        </div>
        <div className="pe-container-item-body">Consumes messages from an Apache Pulsar broker</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.protocol.stream.pulsar">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters-iiot">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.processor.boilerplate/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Boilerplate Removal</div>
            </div>
        </div>
        <div className="pe-container-item-body">Removes boilerplate and extract fulltext from HTML</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.counter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Boolean Counter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Increases a counter on each change of a boolean value</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Boolean Inverter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Inverts the boolean value of the selected field</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.timer/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Boolean Timer</div>
            </div>
        </div>
        <div className="pe-container-item-body">Measures how long a boolean measure does not change</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.bufferrest/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Buffered REST Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Once a given amount of events is reached, events are posted to the given
            REST interface.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.csvmetadata/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">CSV Metadata Enricher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Enriches an event with additional fields from a</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.duration-value/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Calculate Duration</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculates the time between two timestamps.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.duration-value">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.chunker/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Chunker (English)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Segments given tokens of a text into different chunks</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.chunker">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.coindesk/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Coindesk Bitcoin Price</div>
            </div>
        </div>
        <div className="pe-container-item-body">The current bitcoin price from the Coindesk API.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.coindesk">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.compose/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Compose</div>
            </div>
        </div>
        <div className="pe-container-item-body">Merges two event streams</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.compose">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.couchdb/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">CouchDB</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores events in an Apache CouchDB database.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.jvm.couchdb">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.aggregation.flink.count/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Count Aggregation</div>
            </div>
        </div>
        <div className="pe-container-item-body">Performs an aggregation based on a given event property and outputs the
            number of occurrences.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.aggregation.flink.count">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-aggregation-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-aggregation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.count-array/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Count Array</div>
            </div>
        </div>
        <div className="pe-container-item-body">Counts the size of list items.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.count-array">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Creates JTS Point</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a JTS Point from Latitude and Longitude values</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.internal.jvm.dashboard/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Dashboard Sink</div>
            </div>
        </div>
        <div className="pe-container-item-body">Visualizes data streams in the StreamPipes dashboard</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.internal.jvm.dashboard">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-internal-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-internal-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.internal.jvm.datalake/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Data Lake</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores events in the StreamPipes data lake.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.internal.jvm.datalake">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-internal-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-internal-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Distance Calculator</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculates the distance between two geo points</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">EPSG Code</div>
            </div>
        </div>
        <div className="pe-container-item-body">Adds a corresponding EPSG Code to the Geo-Event</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.ditto/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Eclipse Ditto</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publishes events to Eclipse Ditto.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.ditto">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.flink.elasticsearch/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Elasticsearch</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores data in an elasticsearch cluster</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.notifications.jvm.email/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Email Notification</div>
            </div>
        </div>
        <div className="pe-container-item-body">Email service to send notifications emails</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.notifications.jvm.email">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-notifications-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-notifications-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.aggregation.flink.eventcount/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Event Counter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Counts the number of events within a time window.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.aggregation.flink.eventcount">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-aggregation-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-aggregation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.aggregation.flink.rate/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Event Rate</div>
            </div>
        </div>
        <div className="pe-container-item-body">Computes current event rate. Output is a number representing events per
            second.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.aggregation.flink.rate">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-aggregation-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-aggregation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.field-converter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Field Converter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Converts a string value to a number data type</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.field-converter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.fieldhasher/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Field Hasher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Hashes the value of a field using various hash functions.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.field-mapper/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Field Mapper</div>
            </div>
        </div>
        <div className="pe-container-item-body">Replaces one or more field with a new field and computes a hash value of
            these fields
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.field-mapper">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.field-renamer/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Field Renamer</div>
            </div>
        </div>
        <div className="pe-container-item-body">Replaces the runtime name of an event property with a custom defined name.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.field-renamer">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.protocol.set.file/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">File Set</div>
            </div>
        </div>
        <div className="pe-container-item-body">Reads the content from a local file.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.protocol.set.file">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.protocol.stream.file/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">File Stream</div>
            </div>
        </div>
        <div className="pe-container-item-body">null</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.protocol.stream.file">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.frequency/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Frequency Calculation</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculates the frequency of the event stream</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.frequency">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.frequencychange/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Frequency Change</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects when the frequency of the event stream changes</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.frequencychange">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.gdelt/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">GDELT</div>
            </div>
        </div>
        <div className="pe-container-item-body">Global Database of Society</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.gdelt">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Generic Image Classification</div>
            </div>
        </div>
        <div className="pe-container-item-body">Classification Description (Generic Model)</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-image-processing-jvm">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-image-processing-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.geo.jvm.geocoding/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Google Maps Geocoder</div>
            </div>
        </div>
        <div className="pe-container-item-body">Geocodes a placename to a latitude/longitude combination</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.geo.jvm.geocoding">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.protocol.set.http/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">HTTP Set</div>
            </div>
        </div>
        <div className="pe-container-item-body">Regularly poll an HTTP endpoint</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.protocol.set.http">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.protocol.stream.http/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">HTTP Stream</div>
            </div>
        </div>
        <div className="pe-container-item-body">Continuously fetched events from an HTTP REST endpoint.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.protocol.stream.http">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.iex.news/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">IEX Cloud News</div>
            </div>
        </div>
        <div className="pe-container-item-body">Fetches news for a given company (10 news / minutes maximum)</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.iex.news">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.iex.stocks/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">IEX Cloud Stock Quotes</div>
            </div>
        </div>
        <div className="pe-container-item-body">Live stock data provided by the IEXCloud API</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.iex.stocks">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.iss/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">ISS Location</div>
            </div>
        </div>
        <div className="pe-container-item-body">Current Location of the International Space Station (ISS)</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.iss">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.image-cropper/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Image Cropper</div>
            </div>
        </div>
        <div className="pe-container-item-body">Crops an image based on given bounding box coordinates</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-image-processing-jvm">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-image-processing-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.image-enricher/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Image Enricher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Enriches an image with a bounding box of given coordinates</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-image-processing-jvm">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-image-processing-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.image.set/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Image Upload (Set)</div>
            </div>
        </div>
        <div className="pe-container-item-body" />
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.image.set">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.image.stream/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Image Upload (Stream)</div>
            </div>
        </div>
        <div className="pe-container-item-body" />
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.image.stream">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.influxdb/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">InfluxDB</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores events in an InfluxDB.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.jvm.influxdb">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.influxdb.set/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">InfluxDB Set Adapter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a data set for an InfluxDB measurement</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.influxdb.set">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.influxdb.stream/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">InfluxDB Stream Adapter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a data stream for an InfluxDB measurement</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.influxdb.stream">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.iotdb/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">IoTDB</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores events in a IoTDB database.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.jvm.iotdb">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.jms/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">JMS Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publishes events to a JMS topic</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.jms">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.kafka/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Kafka Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publish events to Apache Kafka</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.kafka">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.flink.languagedetection/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Language Detection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects the language of a written text.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.flink.languagedetection">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.languagedetection/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Language Detection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects the language of a given text</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.protocol.stream.mqtt/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">MQTT</div>
            </div>
        </div>
        <div className="pe-container-item-body">null</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.protocol.stream.mqtt">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.mqtt/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">MQTT Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publishes events to a MQTT topic</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.processor.math.mathop/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Math</div>
            </div>
        </div>
        <div className="pe-container-item-body">Performs calculations on event properties (+, -, *, /, %)</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Measure Time Between Two Sensors</div>
            </div>
        </div>
        <div className="pe-container-item-body">Requires two booleans and measures the time between two signals</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Measurement Unit Converter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Converts a unit of measurement to another one</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.enrich/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Merge By Enrich</div>
            </div>
        </div>
        <div className="pe-container-item-body">Merges two event streams by adding properties of one stream to the other
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.enrich">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.merge/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Merge By Time</div>
            </div>
        </div>
        <div className="pe-container-item-body">Merges two event streams by timestamp</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.merge">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.mysql.set/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">MySQL Set Adapter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a data set from an SQL table</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.mysql.set">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.mysql.stream/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">MySql Stream Adapter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a data stream for a SQL table</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.mysql.stream">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.netio.mqtt/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">NETIO MQTT M2M</div>
            </div>
        </div>
        <div className="pe-container-item-body">Connect a NETIO power plugs over MQTT</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.netio.mqtt">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.netio.rest/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">NETIO http JSON</div>
            </div>
        </div>
        <div className="pe-container-item-body">Connect a NETIO REST power plug</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.netio.rest">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">NSW Traffic Cameras</div>
            </div>
        </div>
        <div className="pe-container-item-body">Traffic camera images produced by NSW Australia</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.namefinder/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Name Finder</div>
            </div>
        </div>
        <div className="pe-container-item-body">Finds a name in given Tokens of one document</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.namefinder">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.internal.jvm.notification/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Notification</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publish a notification to the StreamPipes UI.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.internal.jvm.notification">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-internal-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-internal-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.numericalfilter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Numerical Filter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Numerical Filter Description</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.numericalfilter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Numerical Filter (Siddhi)</div>
            </div>
        </div>
        <div className="pe-container-item-body" />
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.numericalfilter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.numericaltextfilter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Numerical Text Filter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Filters numerical and text values.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.opcua/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">OPC UA</div>
            </div>
        </div>
        <div className="pe-container-item-body">Reads values from an OPC-UA server</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.opcua">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.opcua/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">OPC-UA</div>
            </div>
        </div>
        <div className="pe-container-item-body">Writes values in an OPC-UA server</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.jvm.opcua">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.notifications.jvm.onesignal/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">OneSignal</div>
            </div>
        </div>
        <div className="pe-container-item-body">Send Push Message to OneSignal-Application</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-notifications-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-notifications-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.plc4x.s7/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">PLC4X S7</div>
            </div>
        </div>
        <div className="pe-container-item-body">Connect directly to your PLC</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.plc4x.s7">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.partofspeech/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Part of Speech (English)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Takes in a stream of tokens and appends a tag at the end of the word
            corresponding to the part of speech
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.peak-detection/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Peak Detection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detect peaks in time series data</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-pattern-detection-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-pattern-detection-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.databases.jvm.postgresql/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">PostgreSQL</div>
            </div>
        </div>
        <div className="pe-container-item-body">Stores events in a Postgres database.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.databases.jvm.postgresql">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-databases-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-databases-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.project/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Projection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Outputs a selectable subset of an input event type</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.project">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.pulsar/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Pulsar Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publish events to Apache Pulsar</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.qrcode/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">QR Code Reader</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects a QR Code in an image</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.imageclassification.qrcode">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-image-processing-jvm">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-image-processing-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.rest/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">REST Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Posts events to a REST interface</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rest">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.ros/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">ROS Bridge</div>
            </div>
        </div>
        <div className="pe-container-item-body">Connect Robots running on ROS.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.ros">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.rabbitmq/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">RabbitMQ Publisher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Forwards events to a RabbitMQ broker</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-brokers-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-brokers-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.simulator.randomdataset/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Random Data Simulator (Set)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publishes a bounded stream of random events</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.simulator.randomdatastream/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Random Data Simulator (Stream)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Publishes a continuous stream of random events</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.geo.jvm.reversegeocoding/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Reverse Geocoder</div>
            </div>
        </div>
        <div className="pe-container-item-body">Finds the nearest place based on latitude and longitude</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.sentencedetection/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Sentence Detection (English)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Splits a text up in sentences</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.sequence/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Sequence</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects a sequence of events.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-pattern-detection-flink">Docker Container</a>
            </div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-pattern-detection-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.sequence/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Sequence Detection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Merges events from two event streams, when the top event arrives first and
            then the bottom event
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.sequence">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Single Trajectory Creator</div>
            </div>
        </div>
        <div className="pe-container-item-body">Creates a trajectory from JTS point events</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.jvm.sizemeasure/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Size Measure</div>
            </div>
        </div>
        <div className="pe-container-item-body">Measures the size of an event in Bytes, KB or MB</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.slack/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Slack</div>
            </div>
        </div>
        <div className="pe-container-item-body">Subscribes to a Slack channel</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.slack">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.sinks.notifications.jvm.slack/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Slack Notification</div>
            </div>
        </div>
        <div className="pe-container-item-body">Slack bot to send notifications to Slack</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.sinks.notifications.jvm.slack">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/sinks-notifications-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-sinks-notifications-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.geo.flink/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Spatial Grid Enrichment</div>
            </div>
        </div>
        <div className="pe-container-item-body">Groups spatial events into cells of a given size</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.geo.flink">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.processor.speed/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Speed Calculator</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculates the speed of two latlng pairs in kilometers per hour</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.speed">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.split-array/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Split Array</div>
            </div>
        </div>
        <div className="pe-container-item-body">Outputs an event for each entry of a list.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.split-array">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Static Distance Calculator</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculates the distance between a fixed location and a moving location</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processor.geo.jvm.staticgeocoding/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Static Google Maps Geocoder</div>
            </div>
        </div>
        <div className="pe-container-item-body">Geocodes a fixed placename to lat/lng coordinates and</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-geo-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-geo-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Static Math</div>
            </div>
        </div>
        <div className="pe-container-item-body">Performs calculation on an event property with a static value (+, -, *, /,
            %)
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.statistics.flink.statistics-summary/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Statistics Summary</div>
            </div>
        </div>
        <div className="pe-container-item-body">Calculate simple descriptive summary statistics</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-statistics-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-statistics-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.stop/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Stream Stop Detection</div>
            </div>
        </div>
        <div className="pe-container-item-body">Triggers an event when the input data stream stops sending events</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.stop">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">String Counter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Increases a counter on each change of a string value.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">String Timer</div>
            </div>
        </div>
        <div className="pe-container-item-body">Measures how long a string value does not change</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.ti/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">TI Sensor Tag</div>
            </div>
        </div>
        <div className="pe-container-item-body">null</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.ti">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.taskduration/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Task Duration</div>
            </div>
        </div>
        <div className="pe-container-item-body">Computes the time difference between two events</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.taskduration">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.textfilter/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Text Filter</div>
            </div>
        </div>
        <div className="pe-container-item-body">Text Filter Description</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.textfilter">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.threshold/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Threshold Detector</div>
            </div>
        </div>
        <div className="pe-container-item-body">When threshold rule is fulfilled true is appended</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.filters.jvm.threshold">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-jvm">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.timestamp/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Timestamp Enricher</div>
            </div>
        </div>
        <div className="pe-container-item-body">Appends the current time in ms to the event payload</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.flink.timestamp">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Timestamp Extractor</div>
            </div>
        </div>
        <div className="pe-container-item-body">Extracts a timestamp into its individual time fields.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.tokenizer/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Tokenizer (English)</div>
            </div>
        </div>
        <div className="pe-container-item-body">Segments a text into different tokens</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Transform to boolean</div>
            </div>
        </div>
        <div className="pe-container-item-body">Transforms a string or number to a boolean</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.siddhi.increase/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Trend</div>
            </div>
        </div>
        <div className="pe-container-item-body">Detects the increase of a numerical field over a customizable time window.
            Example: A temperature value increases by 10 percent within 5 minutes.
        </div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.siddhi.increase">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-filters-siddhi">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-filters-siddhi">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.processor.trigonometry/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Trigonometry Functions</div>
            </div>
        </div>
        <div className="pe-container-item-body">Performs Trigonometric functions on event properties</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">URL Dereferencing</div>
            </div>
        </div>
        <div className="pe-container-item-body">Append the html page as a string to event</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-enricher-flink">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-enricher-flink">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.changed-value/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Value Changed</div>
            </div>
        </div>
        <div className="pe-container-item-body">Outpus an event every time a specific field changes.</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.transformation.jvm.changed-value">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-transformation-jvm">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-transformation-jvm">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.wikipedia.edit/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Wikipedia Edits</div>
            </div>
        </div>
        <div className="pe-container-item-body">Continuously publishes recent Wikipedia edits</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.edit">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-sink">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-sink"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.connect.adapters.wikipedia.new/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-sink">Data Sink</div>
                <div className="pe-container-item-label-name">Wikipedia New Articles</div>
            </div>
        </div>
        <div className="pe-container-item-body">Continuously publishes articles created on Wikipedia</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.new">Documentation</a></div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/connect-adapters">Docker
                Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-connect-adapters">Code
                on Github</a></div>
        </div>
    </div>
    <div className="pe-container-item pe-container-item-processor">
        <div className="pe-container-item-header">
            <div className="pe-container-item-icon pe-icon-processor"><img className="pe-icon" src="/docs/img/pipeline-elements/org.apache.streampipes.processors.textmining.flink.wordcount/icon.png" />
            </div>
            <div className="pe-container-item-header-pe">
                <div className="pe-container-item-label pe-container-item-label-processor">Data Processor</div>
                <div className="pe-container-item-label-name">Word Count</div>
            </div>
        </div>
        <div className="pe-container-item-body">Counts words on continuous text-based streams</div>
        <div className="pe-container-item-footer">
            <div><i className="fas fa-file" /> <a href="/docs/docs/pe/org.apache.streampipes.processors.textmining.flink.wordcount">Documentation</a>
            </div>
            <div><i className="fab fa-docker" /> <a href="https://hub.docker.com/r/streampipes/processors-text-mining-flink">Docker Container</a></div>
            <div><i className="fab fa-github" /> <a href="https://github.com/apache/streampipes/tree/dev/streampipes-extensions/streampipes-processors-text-mining-flink">Code
                on Github</a></div>
        </div>
    </div>
</div>
