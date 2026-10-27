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
  {
    slug: 'wincc-alarm-history',
    eyebrow: 'Operations',
    title: 'Alarm history from WinCC',
    lead: 'Read the alarm archives a Siemens WinCC system writes, turn them into a stream, and find out which alarms keep coming back and how long they stay active.',
    summary: 'Alarm history with Apache StreamPipes: read Siemens WinCC alarm archive CSV files including segmented circular logs, count and time alarms, and review them on dashboards.',
    cover: {src: img('chart-status-heatmap'), alt: 'Status heatmap showing alarm states over time'},
    problem: [
      'WinCC keeps its alarm history in CSV archives on the SCADA server. The data is there, but reading it means copying files around and writing a parser that survives the circular log rotating underneath it. So the history stays where it is, and questions like "how often did this alarm fire last month" get answered from memory.',
      'The WinCC Alarm Archive adapter reads those files directly, single archive or segmented circular log, and emits one event per alarm. From there it is an ordinary stream: you can count, time, store and chart it like any other data in StreamPipes.',
    ],
    steps: [
      {title: 'Point the adapter at the archive', text: 'Enter the archive directory, the base name such as Meldungsarchiv, and whether WinCC writes a segmented circular log. Set the timezone of the WinCC host so the TimeString column becomes a correct Unix timestamp.'},
      {title: 'Replay without duplicates', text: 'The adapter fingerprints file content, so a segment that WinCC reuses is read again as a new generation while unchanged copies are skipped. An optional delay between replayed events keeps slower consumers from dropping anything during a large backfill.'},
      {title: 'Count and time the alarms', text: 'A String Counter counts how often each alarm text appears, a String Timer measures how long an alarm stayed active, and a Task Duration processor tracks the time between state changes.'},
      {title: 'Review and share', text: 'Store the alarm events as a dataset. Status heatmaps show when alarms cluster, and a Slack or Teams sink forwards the ones that matter to the people on shift.'},
    ],
    screenshots: [
      {src: img('wincc-adapter-config'), alt: 'Configuration of the WinCC Alarm Archive adapter with archive directory, base name and segmented circular log settings', caption: 'Archive directory, base name and circular log settings.'},
      {src: img('notification-pipeline'), alt: 'Pipeline routing events to notification sinks', caption: 'Route the alarms that matter to chat and email.'},
      {src: img('chart-traffic-light'), alt: 'Traffic light chart', caption: 'Traffic-light charts show the latest alarm state.'},
    ],
    extensions: [
      {name: 'WinCC Alarm Archive', id: 'connectors.wincc.alarm.archive'}, {name: 'String Counter', id: 'processors.transformation.jvm.stringoperator.counter'}, {name: 'String Timer', id: 'processors.transformation.jvm.stringoperator.timer'},
      {name: 'Task Duration', id: 'processors.transformation.jvm.taskduration'}, {name: 'Slack Notification', id: 'sinks.notifications.jvm.slack'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'Alarms, events and notifications', to: '/use-cases/alarms-and-events/', text: 'The same idea for live OPC UA alarms and conditions.'},
      {label: 'Connect', to: '/docs/use-connect/', text: 'How adapters, previews and schema refinement work.'},
      {label: 'Charts', to: '/docs/use-charts/', text: 'Status, traffic-light and heatmap visualizations.'},
    ],
  },
  {
    slug: 'machine-state-tracking',
    eyebrow: 'Production',
    title: 'Machine state tracking',
    lead: 'Turn the running, blocked and fault signals of a machine into states, measure how long each state lasts, and see where the time went per line and shift.',
    summary: 'Machine state tracking with Apache StreamPipes: read machine signals from PLCs, convert them into states, measure how long each state lasts, and review stops on dashboards.',
    cover: {src: img('dashboard-create'), alt: 'Dashboard with a gauge, a flow-rate chart and a machine status light'},
    problem: [
      'Most controllers already expose a handful of bits that say whether the machine is running, blocked, starved or in fault. What is missing is the bookkeeping: how long was the machine in each state, how often did it stop, and which stops cost the most time.',
      'Clipboards and spreadsheets fill the gap in many plants. A pipeline in StreamPipes does the same job continuously, with the results stored as datasets that charts and dashboards can use right away.',
    ],
    steps: [
      {title: 'Read the signals', text: 'Create a Siemens S7, Modbus or OPC UA adapter and pick the running, blocked and fault addresses. The event preview shows the raw bits so you can check them against the machine.'},
      {title: 'Turn bits into states', text: 'The Boolean To State processor maps the boolean fields to a readable state such as running, blocked or fault, with a default state when none of them is set.'},
      {title: 'Measure durations and counts', text: 'Task Duration measures how long each state lasted. Boolean Timer and Boolean Counter track a single signal, for example how long and how often the fault bit was set.'},
      {title: 'Review per line and shift', text: 'Store the state changes and durations as datasets. A status heatmap shows the day at a glance, a dashboard per line gives supervisors the stop times without a spreadsheet, and a mail goes out when a stop runs long.'},
    ],
    screenshots: [
      {src: img('machine-state-pipeline'), alt: 'Pipeline turning machine signals into states, durations, a dataset and a downtime email', caption: 'States, durations, storage and a downtime mail in one pipeline.'},
      {src: img('machine-state-config'), alt: 'Configuration of the Boolean To State processor', caption: 'Map boolean signals to named machine states.'},
      {src: img('chart-status-heatmap'), alt: 'Status heatmap chart', caption: 'States over time: running, blocked and fault periods per machine.'},
    ],
    extensions: [
      {name: 'PLC4X S7', id: 'connect.iiot.adapters.plc4x.s7'}, {name: 'Modbus TCP', id: 'connect.iiot.adapters.plc4x.generic.modbus-tcp'}, {name: 'Boolean To State', id: 'processors.transformation.jvm.processor.booloperator.state'},
      {name: 'Task Duration', id: 'processors.transformation.jvm.taskduration'}, {name: 'Boolean Timer', id: 'processors.transformation.jvm.booloperator.timer'}, {name: 'Boolean Counter', id: 'processors.transformation.jvm.booloperator.counter'},
      {name: 'Email Notification', id: 'sinks.notifications.jvm.email'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'Condition monitoring with OPC UA', to: '/use-cases/condition-monitoring/', text: 'Watch values and trends on the same machines.'},
      {label: 'Dashboards', to: '/docs/use-dashboards/', text: 'Compose saved charts into views for the shop floor.'},
      {label: 'Assets', to: '/docs/use-assets/', text: 'Link streams and dashboards to machines and lines.'},
    ],
  },
  {
    slug: 'quality-control-with-control-limits',
    eyebrow: 'Quality',
    title: 'Quality control with statistical limits',
    lead: 'Attach control and warning limits to a measurement, get an alert the moment a value breaks them, and spot a slow drift before a part goes out of spec.',
    summary: 'Statistical quality control with Apache StreamPipes: enrich measurements with control and warning limits, alert on breaches, detect drift with change detection, and chart the process.',
    cover: {src: img('chart-timeseries'), alt: 'Time-series chart of a measurement'},
    problem: [
      'A diameter, a torque, a fill weight: the measurement exists, the limits exist, and still the first sign of trouble is a rejected batch. Control charts on paper or in a spreadsheet are checked once a shift, if at all.',
      'StreamPipes puts the limits next to the live value. Every measurement carries its control and warning limits, a breach becomes an event that can notify someone, and a change detector flags the drift that a fixed limit would miss.',
    ],
    steps: [
      {title: 'Connect the measurement', text: 'Read the value from the controller or gauge with an OPC UA, S7 or Modbus adapter, or from a file. Set the unit in the adapter so charts show it correctly.'},
      {title: 'Attach the limits', text: 'The Quality Control Limits Enrichment processor adds upper and lower control limits and warning limits to each event. The limits are configured once and travel with the data.'},
      {title: 'Alert on a breach', text: 'The Sensor Limit Alert processor emits an event only when a value crosses a limit, including which limit and whether it was a warning or a control breach. Route those events to Teams, Slack or email.'},
      {title: 'Watch for drift', text: 'Welford Change Detection tracks mean and standard deviation of the stream and raises a flag when the process shifts, even while every single value is still within its limits.'},
    ],
    screenshots: [
      {src: img('quality-pipeline'), alt: 'Pipeline enriching measurements with control limits, alerting to Teams and storing a dataset', caption: 'Limits, alerts and storage in one pipeline.'},
      {src: img('quality-limits-config'), alt: 'Configuration of the Quality Control Limits Enrichment processor', caption: 'Control and warning limits are set once in the processor.'},
      {src: img('quality-alert-config'), alt: 'Configuration of the Sensor Limit Alert processor', caption: 'The alert checks the value against the limits that travel with it.'},
    ],
    extensions: [
      {name: 'OPC UA', id: 'connect.iiot.adapters.opcua'}, {name: 'Quality Control Limits Enrichment', id: 'processors.enricher.jvm.processor.limitsenrichment'}, {name: 'Sensor Limit Alert', id: 'processors.enricher.jvm.processor.limitsalert'},
      {name: 'Welford Change Detection', id: 'processors.changedetection.jvm.welford'}, {name: 'Moving Average', id: 'processors.filters.jvm.movingaverage'}, {name: 'MS Teams Sink', id: 'sinks.notifications.jvm.msteams'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'Anomaly detection with Python', to: '/use-cases/anomaly-detection-with-python/', text: 'When fixed limits are not enough, train a model on the data.'},
      {label: 'Charts', to: '/docs/use-charts/', text: 'Time-series charts and thresholds.'},
      {label: 'Pipelines', to: '/docs/use-pipelines/', text: 'How processors are chained and configured.'},
    ],
  },
  {
    slug: 'data-reduction-before-the-cloud',
    eyebrow: 'Edge',
    title: 'Reduce data before it leaves the plant',
    lead: 'Clean up raw payloads with a script at the adapter, keep only the changes that matter, compress the rest, and send a fraction of the original volume to the cloud.',
    summary: 'Edge data reduction with Apache StreamPipes: transform raw adapter data with JavaScript or Groovy scripts, filter unchanged values, compress with swinging door trending, and ship batches to the cloud.',
    cover: {src: '/img/home/connect-create-configure-schema-example.webp', alt: 'Script editor in the adapter wizard transforming a raw event with JavaScript'},
    problem: [
      'A sensor that reports every 100 milliseconds produces almost a million values a day, most of them identical to the previous one. Sending all of that to a cloud platform costs bandwidth and money, and the raw payload usually needs cleaning up anyway: odd timestamp formats, nested fields, values in the wrong unit.',
      'StreamPipes runs where the data is. The adapter reshapes the payload before it enters the platform, a pipeline reduces the stream, and only the result crosses the firewall. The full-resolution data can still stay on site as a dataset with a retention policy.',
    ],
    steps: [
      {title: 'Reshape the raw payload', text: 'In the adapter wizard, open the script editor and write a few lines of JavaScript or Groovy against a sample event: parse the timestamp, flatten nested objects, drop fields nobody needs, compute a value. Run it, compare input and output, and save it as a transformation template for the next adapter.'},
      {title: 'Keep only the changes', text: 'The Value Changed processor forwards an event only when a field actually changed, and Rate Limit caps how many events pass per interval. For many status and setpoint signals, this alone removes most of the traffic.'},
      {title: 'Compress the trends', text: 'For analog values, the Swinging Door Trending filter keeps the points that define the curve within a compression deviation you set, and drops the rest.'},
      {title: 'Ship in batches', text: 'Send the reduced stream with a Kafka or Pulsar publisher, or collect events into batches with the Buffered REST Publisher. Keep a local copy as a dataset or write Parquet files for later analysis.'},
    ],
    screenshots: [
      {src: img('script-editor'), alt: 'Script editor with the original event and the transformed preview side by side', caption: 'A few lines of JavaScript, run against a sample event.'},
      {src: img('sdt-config'), alt: 'Configuration of the Swinging Door Trending filter', caption: 'Set the compression deviation and minimum interval.'},
      {src: img('reduction-pipeline'), alt: 'Pipeline compressing a stream for Kafka and keeping a full copy as a dataset', caption: 'Compressed to Kafka, full resolution kept on site.'},
    ],
    extensions: [
      {name: 'MQTT', id: 'connect.iiot.protocol.stream.mqtt'}, {name: 'Value Changed', id: 'processors.transformation.jvm.changed-value'}, {name: 'Rate Limit', id: 'processors.filters.jvm.limit'},
      {name: 'Swinging Door Trending Filter', id: 'processors.filters.jvm.sdt'}, {name: 'JavaScript Eval', id: 'processors.enricher.jvm.jseval'}, {name: 'Buffered REST Publisher', id: 'sinks.brokers.jvm.bufferrest'},
      {name: 'Kafka Publisher', id: 'sinks.brokers.jvm.kafka'}, {name: 'parquet', id: 'sinks.databases.jvm.parquet'}, {name: 'Dataset', id: 'sinks.internal.jvm.dataset'},
    ],
    related: [
      {label: 'Script-based transformations', to: '/docs/use-connect/#using-script-based-transformations', text: 'The script editor, available languages and templates.'},
      {label: 'Architecture and deployment', to: '/architecture/', text: 'Run extension services close to the machines.'},
      {label: 'PLC data to Kafka and InfluxDB', to: '/use-cases/plc-data-to-kafka-and-influxdb/', text: 'The integration side of the same setup.'},
    ],
  },
];
