import type {UseCase} from './UseCasePage';

const img = (name: string) => `/img/usecases/${name}.webp`;

export const useCases: UseCase[] = [
  {
    slug: 'condition-monitoring',
    eyebrow: 'Operations',
    title: 'Condition monitoring with OPC UA',
    lead: 'Connect machines over OPC UA, keep an eye on the values that matter, and get a message when a trend or a threshold needs attention.',
    summary: 'Condition monitoring with Apache StreamPipes: connect machines via OPC UA, detect trends and threshold violations in real time, notify the team and monitor on dashboards.',
    cover: {src: img('pipeline-editor-example'), alt: 'Pipeline routing CNC process data to trend detection, a Microsoft Teams notification and dataset storage'},
    problem: [
      'Most newer machines expose their state over OPC UA, but the values tend to stay in the controller or in the vendor\'s own tool. Operators want one view across machines. Engineers want to hear about a drift before it turns into a stop.',
      'You can script all of this, but then you maintain connection code, buffering, storage and a dashboard for every machine. StreamPipes has those parts built in, and the data stays on your own infrastructure.',
    ],
    steps: [
      {title: 'Connect the machine', text: 'Create an OPC UA adapter, browse the server\'s node tree, pick the variables and choose pull or subscription mode. Signed and encrypted connections are supported.'},
      {title: 'Persist the stream', text: 'Add a Dataset sink or enable persistence on the adapter, so every value is stored with retention rules and available for charts later.'},
      {title: 'Detect what matters', text: 'Build a pipeline with the Trend processor or a Threshold Detector on the fields you care about, and route matches to a Microsoft Teams, Slack or email sink.'},
      {title: 'Monitor', text: 'Create charts on the dataset, combine them into a dashboard, and link the dashboard to the machine asset so operators find it from the asset view.'},
    ],
    screenshots: [
      {src: img('connect-create-opcua-browser'), alt: 'OPC UA node browser in the adapter wizard', caption: 'Pick variables directly from the OPC UA server.'},
      {src: img('dashboard-create'), alt: 'Dashboard with a density gauge, flow-rate chart and machine status indicator', caption: 'One dashboard per line, built from saved charts.'},
      {src: img('chart-status-heatmap'), alt: 'Status heatmap chart', caption: 'Status heatmaps show state changes over time.'},
    ],
    extensions: [
      {name: 'OPC UA', id: 'connect.iiot.adapters.opcua'}, {name: 'Trend', id: 'processors.siddhi.increase'}, {name: 'Threshold Detector', id: 'processors.filters.jvm.threshold'},
      {name: 'Sensor Limit Alert', id: 'processors.enricher.jvm.processor.limitsalert'}, {name: 'MS Teams Sink', id: 'sinks.notifications.jvm.msteams'}, {name: 'Email Notification', id: 'sinks.notifications.jvm.email'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'How to connect an OPC UA server', to: '/docs/how-to-opcua/', text: 'Pull and subscription mode, security modes and certificate trust.'},
      {label: 'Secure OPC UA integration', to: '/blog/2025/05/20/opc-ua-certificates/', text: 'A guide to X.509 authentication and certificate management.'},
      {label: 'Dashboards', to: '/docs/use-dashboards/', text: 'Compose saved charts into operational views.'},
    ],
  },
  {
    slug: 'plc-data-to-kafka-and-influxdb',
    eyebrow: 'Integration',
    title: 'PLC data to Kafka and InfluxDB',
    lead: 'Read Siemens S7 and Modbus controllers, clean up units and field names, and forward the events to the systems IT already runs.',
    summary: 'Forward Siemens S7 and Modbus PLC data to Apache Kafka and InfluxDB with Apache StreamPipes: connect with PLC4X adapters, harmonize fields and units, and publish to brokers and databases.',
    cover: {src: img('connect-create-select-adapter'), alt: 'Adapter library with PLC4X, Kafka and other connectors'},
    problem: [
      'IT wants machine data in Kafka topics and a time-series database, in a schema they can rely on. OT wants nothing installed on the controllers and no connections opened into the plant network.',
      'StreamPipes reads the controllers with its PLC4X adapters, lets you fix names, units and types once in the adapter, and publishes the result to Kafka, InfluxDB or both. The extension service that does the reading can sit next to the machines.',
    ],
    steps: [
      {title: 'Connect the controller', text: 'Create a PLC4X S7 or Modbus TCP adapter, define the addresses to read and the polling interval, and preview incoming events before you start.'},
      {title: 'Harmonize the schema', text: 'Rename fields, set measurement units and convert them, and attach metadata such as the machine or line, all in the adapter configuration.'},
      {title: 'Publish', text: 'Build a pipeline that ends in a Kafka Publisher and an InfluxDB sink. Add a Numerical Filter or Field Mapper in between if consumers need a subset.'},
      {title: 'Keep a copy', text: 'Persist the stream as a dataset with a retention policy, so the plant keeps its own history for charts and audits.'},
    ],
    screenshots: [
      {src: img('connect-create-configure-schema-measurement-unit'), alt: 'Schema editor with measurement unit configuration', caption: 'Measurement units and conversions are set once in the adapter.'},
      {src: img('pipeline-editor-configuration'), alt: 'Pipeline element configuration dialog', caption: 'Configure sinks against the stream\'s schema.'},
      {src: img('dataset-configure-retention'), alt: 'Dataset retention configuration dialog', caption: 'Retention keeps local history under control.'},
    ],
    extensions: [
      {name: 'PLC4X S7', id: 'connect.iiot.adapters.plc4x.s7'}, {name: 'Modbus TCP', id: 'connect.iiot.adapters.plc4x.generic.modbus-tcp'}, {name: 'Measurement Unit Converter', id: 'processors.transformation.jvm.measurementunitconverter'},
      {name: 'Field Renamer', id: 'processors.transformation.jvm.fieldrename'}, {name: 'Kafka Publisher', id: 'sinks.brokers.jvm.kafka'}, {name: 'InfluxDB', id: 'sinks.databases.jvm.influxdb'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'Connect IoT data', to: '/docs/use-connect/', text: 'Adapters, event preview and schema refinement.'},
      {label: 'Deployment options', to: '/docs/configure-operate-deployment/', text: 'Run extension services close to the machines.'},
      {label: 'Datasets', to: '/docs/use-datasets/', text: 'Persistence, retention and export.'},
    ],
  },
  {
    slug: 'mqtt-unified-namespace',
    eyebrow: 'Architecture',
    title: 'MQTT and a unified namespace',
    lead: 'Subscribe to the topics your broker already carries, turn raw payloads into typed streams with context, and publish the results back into the namespace.',
    summary: 'Use Apache StreamPipes with MQTT and a unified namespace: subscribe to broker topics, add types, units and asset context, process in pipelines, and publish results back to MQTT.',
    cover: {src: img('connect-create-adapter-settings-preview'), alt: 'Adapter settings with a live event preview'},
    problem: [
      'A unified namespace puts every signal on an MQTT broker. A topic, though, is just bytes. Someone still has to add types, units and context, and there has to be a place to compute and store derived values.',
      'StreamPipes subscribes to the broker with TLS and authentication, maps the payloads to typed streams, attaches assets and sites, and writes results back as new topics. The namespace gets richer instead of being copied somewhere else.',
    ],
    steps: [
      {title: 'Subscribe', text: 'Create an MQTT adapter with the broker URL, credentials or certificates, and the topic. The event preview shows the parsed payload before you commit.'},
      {title: 'Add context', text: 'Attach static metadata such as plant and line, map field names to your conventions, and link the stream to an asset.'},
      {title: 'Compute and store', text: 'Pipelines aggregate, filter or detect changes on the stream and store the outcome as datasets for charts.'},
      {title: 'Publish back', text: 'An MQTT Publisher sink writes derived values to new topics, so other systems on the namespace can use them.'},
    ],
    screenshots: [
      {src: img('connect-create-configure-metadata'), alt: 'Field metadata configuration in the adapter wizard', caption: 'Field metadata and units turn payloads into typed streams.'},
      {src: img('home-asset-preview'), alt: 'Home screen with asset preview', caption: 'Assets and sites give every stream its place.'},
      {src: img('pipeline-overview-grouped'), alt: 'Pipeline overview grouped by category', caption: 'Pipelines grouped by line or purpose.'},
    ],
    extensions: [
      {name: 'MQTT', id: 'connect.iiot.protocol.stream.mqtt'}, {name: 'MQTT Publisher', id: 'sinks.brokers.jvm.mqtt'}, {name: 'Static Metadata Enricher', id: 'processors.transformation.jvm.processor.staticmetadata'},
      {name: 'Field Mapper', id: 'processors.transformation.jvm.field-mapper'}, {name: 'Welford Change Detection', id: 'processors.changedetection.jvm.welford'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'How to connect MQTT', to: '/docs/how-to-mqtt/', text: 'Broker settings, authentication modes and TLS.'},
      {label: 'Assets and sites', to: '/docs/use-assets/', text: 'Model plants, lines and machines.'},
      {label: 'Architecture', to: '/docs/concepts-architecture/', text: 'How broker, core and extension services fit together.'},
    ],
  },
  {
    slug: 'anomaly-detection-with-python',
    eyebrow: 'Analytics',
    title: 'Anomaly detection with Python Functions',
    lead: 'Train a model on a dataset in a notebook, run it on the live stream as a StreamPipes Function, and get the predictions back as a stream.',
    summary: 'Anomaly detection with Apache StreamPipes and Python: load datasets into pandas, train a model, run it on live data as a StreamPipes Function and visualize predictions in charts.',
    cover: {src: img('prediction-analysis'), alt: 'Chart comparing sensor values with model predictions'},
    problem: [
      'Data scientists work in Python. Operators look at dashboards. Between a trained model and a running one there is usually glue code, a deployment, and a second data path that nobody wants to own.',
      'With the Python client, a dataset loads straight into pandas. The same client runs a Function that subscribes to the live stream, scores each event and publishes the result as a new stream, which charts and pipelines can use like any other.',
    ],
    steps: [
      {title: 'Get the history', text: 'Use the Python client to load a dataset into a pandas DataFrame, explore it and train a model, for example with scikit-learn or an ONNX export.'},
      {title: 'Write the Function', text: 'Subscribe to the live stream in a StreamPipes Function, score events with the model and emit an output stream with the prediction and a flag.'},
      {title: 'Run it', text: 'Functions run as part of an extension service, so they are started, monitored and restarted like any other component.'},
      {title: 'Act on it', text: 'Charts compare predictions with measurements, and a pipeline on the output stream can notify the team or store flagged events.'},
    ],
    screenshots: [
      {src: img('prediction-stream'), alt: 'Prediction data stream in StreamPipes', caption: 'The Function publishes predictions as a stream.'},
      {src: img('chart-timeseries'), alt: 'Time-series chart editor', caption: 'Compare predictions with measurements over time.'},
    ],
    extensions: [
      {name: 'Machine Data Simulator', id: 'connect.iiot.adapters.simulator.machine'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'}, {name: 'Email Notification', id: 'sinks.notifications.jvm.email'},
    ],
    related: [
      {label: 'Anomaly detection with Python Functions and ONNX', to: '/blog/2024/03/27/anomaly-detection-with-python-functions/', text: 'The full walkthrough with code.'},
      {label: 'Python client documentation', to: 'https://streampipes.apache.org/docs/docs/python/dev/', text: 'Datasets to pandas, live streams and Functions.'},
      {label: 'Functions', to: '/docs/extend-sdk-functions/', text: 'Event-driven code on connected streams in Java and Python.'},
    ],
  },
  {
    slug: 'alarms-and-events',
    eyebrow: 'Operations',
    title: 'Alarms, events and notifications',
    lead: 'Receive OPC UA alarms and events, measure how long states last, and send a message to the right channel when something changes.',
    summary: 'Alarm and event handling with Apache StreamPipes: receive OPC UA alarms and conditions, measure state durations, and send notifications to Slack, Teams, email or Telegram.',
    cover: {src: img('notification-pipeline'), alt: 'Pipeline sending notifications based on sensor events'},
    problem: [
      'Alarm lists live in the SCADA system and rarely reach the people on the phone. Nobody can say how long a machine stood still last week, or how often a warning came back.',
      'StreamPipes subscribes to OPC UA alarm and condition events, turns them into a stream, measures durations and counts, and sends messages to chat and email. The history ends up in a dataset you can look at later.',
    ],
    steps: [
      {title: 'Receive events', text: 'The OPC UA Events adapter subscribes to alarms and conditions and emits a flat event per notification. Choose the event type and the fields you need.'},
      {title: 'Measure', text: 'Boolean Timer and Boolean Counter processors measure how long a state lasted and how often it occurred.'},
      {title: 'Notify', text: 'Route events by severity to Slack, Microsoft Teams, email or Telegram sinks. Filters keep noise out of the channel.'},
      {title: 'Review', text: 'Persist events as a dataset and use status and traffic-light charts on dashboards to review alarm patterns.'},
    ],
    screenshots: [
      {src: img('opcua-configuration'), alt: 'OPC UA adapter configuration', caption: 'Configure the OPC UA connection and security.'},
      {src: img('chart-traffic-light'), alt: 'Traffic light chart', caption: 'Traffic-light charts show the latest state at a glance.'},
      {src: img('chart-status-heatmap'), alt: 'Status heatmap chart', caption: 'Status heatmaps reveal patterns over time.'},
    ],
    extensions: [
      {name: 'OPC UA Events', id: 'connect.iiot.adapters.opcua-alarms'}, {name: 'WinCC Alarm Archive', id: 'connectors.wincc.alarm.archive'}, {name: 'Boolean Timer', id: 'processors.transformation.jvm.booloperator.timer'},
      {name: 'Boolean Counter', id: 'processors.transformation.jvm.booloperator.counter'}, {name: 'Slack Notification', id: 'sinks.notifications.jvm.slack'}, {name: 'Telegram Publisher', id: 'sinks.notifications.jvm.telegram'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'How to receive OPC UA events', to: '/docs/how-to-opcua-events/', text: 'Event types, additional fields and what to expect during preview.'},
      {label: 'Charts', to: '/docs/use-charts/', text: 'Status, traffic-light and heatmap visualizations.'},
      {label: 'Pipelines', to: '/docs/use-pipelines/', text: 'Filter, route and notify in real time.'},
    ],
  },
];
