import React, { FC } from 'react';
import PageSection from '../PageSection';
import FeatureItemHorizontal from '../FeatureItemHorizontal';

const LovedByUsers = (props) => (
  <>
    <>
      <PageSection sectionTitle={"A single user interface for everything."}
                   sectionSubtitle={"No more application wiring"} backgroundClass={"background-white"}>
        <FeatureItemHorizontal featureNumber={"01."} title={"IIoT Connectivity"}
                               images={[
                                 {src: "/img/screenshots/streampipes-connect-opcua.png", alt: "StreamPipes Connect OPC-UA Browser"},
                                 {src: "/img/screenshots/streampipes-connect-overview.png", alt: "StreamPipes Connect"},
                                 {src: "/img/screenshots/streampipes-connect-schema-editor.png", alt: "StreamPipes Connect Schema Editor"}]}>
          <p className={"text-left"}>Integrate data streams using the built-in StreamPipes Connect library
            with support many industrial protoocls such as S7, MQTT, Modbus, OPC-UA and many other IT protocols such as Apache Kafka and Apache Pulsar.</p>
          <hr/>
          <p><b>Some included adapters and integrations:</b></p>
          <p className={"text-left"}>
            <a href="https://kafka.apache.org">Apache Kafka</a>,
            <a href="https://pulsar.apache.org">Apache Pulsar</a>,
            <a href="https://plc4x.apache.org">Apache PLC4X (e.g., S7</a>,
            <a href="https://www.ros.org">Robot Operating System (ROS)</a>,
            OPC-UA, MQTT and more.
          </p>
          <hr/>
          <p className={"text-left"}>Adapters can be easily configured right from the user interface - with an intuitive
            configuration
            menu.</p>
          <p className={"text-left"}>Pre-processing rules can be added to harmonize data before ingestion, e.g.,
            transformation of
            measurement units.</p>
          <a href="/docs/use-connect" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Learn more</a>
        </FeatureItemHorizontal>
        <FeatureItemHorizontal featureNumber={"02."} title={"Analyze"} images={[{src: "/img/screenshots/sp-editor-pipeline.png", alt: "StreamPipes Pipeline Editor"}, {src: "/img/screenshots/sp-editor-config-trend.png", alt: "Pipeline Editor Configuration"}]}>
          <p className={"text-left"}>Harmonize and analyze data by using the real-time algorithm toolbox ranging from simple filters up to pre-trained neural networks - or build your own algorithm with the provided SDK.</p>
          <hr/>
          <p className={"text-left"}><b>Some included data processors:</b></p>
          <p className={"text-left"}>
            Trend Detection, Peak Detection, Numerical Filter, Sequence, Boilerplate Removal, Event Rate, Field Converter, Frequency Calculation,
            Generic image Classification, Measurement Unit Converter, Projection, Timestamp Enricher, Trigonometry Functions and many more.
          </p>
          <hr/>
          <p>Our pipeline elements focus on analyzing industrial IoT data - for instance, we provide many operators to transform process data from PLC systems.</p>
          <a href="/docs/use-pipeline-editor" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Learn more</a>
        </FeatureItemHorizontal>
        <FeatureItemHorizontal featureNumber={"03."} title={"Exploit"} images={[{src: "/img/screenshots/sp-data-explorer-config.png", alt: "Data Explorer Widgets"}, {src: "/img/screenshots/sp-explorer-ts.png", alt: "StreamPipes Data Explorer Time Series Chart"}, {src: "/img/screenshots/sp-dashboard.png", alt: "Live Dashboard"}]}>
          <p className={"text-left"}>Trigger notifications, configure your real-time dashboard or send data to third-party systems such as databases (e.g., Kafka or Elasticsearch), external services (e.g., Slack) or IoT actuators.</p>
          <hr/>
          <p className={"text-left"}><b>Some included data sinks:</b></p>
          <p>
            <a href="https://kafka.apache.org">Apache Kafka</a>,
            <a href="https://pulsar.apache.org">Apache Pulsar</a>,
            <a href="https://couchdb.apache.org">Apache CouchDB</a>,
            <a href="https://iotdb.apache.org">Apache IoTDB</a>,
            OPC-UA, RabbitMQ, Email, Slack, Internal Notification, PostgreSQL and more.
          </p>
          <hr/>
          <p className={"text-left"}>The brand-new data explorer gives you an intuitive and feature-rich component to visually analyze persisted time-series data and comes with ready-to-use visualizations such as heatmaps, value distribution charts or time-series charts.</p>
          <hr/>
          <p className={"text-left"}>Use the live dashboard to visualize data in real-time, e.g., show critical values directly on the shopfloor.</p>
          <a href="/docs/use-data-explorer" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Data Explorer</a>
          <a href="/docs/use-dashboard" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Live Dashboard</a>
        </FeatureItemHorizontal>
      </PageSection>

    </>

  </>
)

export default LovedByUsers;
