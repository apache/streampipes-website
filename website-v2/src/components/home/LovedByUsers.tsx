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
                                 {src: "/img/2026/connect-create-select-adapter.png", alt: "StreamPipes Connect Adapter Library"},
                                 {src: "/img/2026/connect-create-opcua-browser.png", alt: "StreamPipes Connect OPC UA browser"},
                                 {src: "/img/2026/connect-create-configure-schema-example.png", alt: "StreamPipes Connect Schema Transformations"}]}>
          <p className={"text-left"}>Integrate data streams using the built-in StreamPipes Connect library
            with support many industrial protoocls such as S7, MQTT, Modbus, OPC UA, OPC UA Events, WinCC Alarm Archive and many other IT protocols such as Apache Kafka and Apache Pulsar.</p>
          <hr/>
          <p><b>Some included adapters and integrations:</b></p>
          <p className={"text-left"}>
            <a href="https://opcfoundation.org/">OPC UA</a>,
            <a href="https://kafka.apache.org">Apache Kafka</a>,
            <a href="https://mqtt.org">MQTT</a>,
            <a href="https://plc4x.apache.org">Apache PLC4X (e.g., S7, Modbus)</a>,
            <a href="https://www.ros.org">Robot Operating System (ROS)</a>,
            and many more.
          </p>
          <hr/>
          <p className={"text-left"}>Adapters can be easily configured right from the user interface - with an intuitive
            configuration
            menu.</p>
          <p className={"text-left"}>Pre-processing rules can be added to harmonize data before ingestion, e.g.,
            transformation of
            measurement units.</p>
          <a href="/docs/use-connect/" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Learn more</a>
        </FeatureItemHorizontal>
        <FeatureItemHorizontal featureNumber={"02."} title={"Analyze"} images={[{src: "/img/2026/pipeline-editor-example.png", alt: "StreamPipes Pipeline Editor"}, {src: "/img/2026/pipeline-editor-configuration.png", alt: "Pipeline Configuration"}, {src: "/img/2026/pipeline-overview-grouped.png", alt: "Pipeline Overview"}]}>
          <p className={"text-left"}>Harmonize and analyze data by using the real-time algorithm toolbox ranging from simple filters up to pre-trained neural networks - or build your own algorithm with the provided SDK.</p>
          <hr/>
          <p className={"text-left"}><b>Some included data processors:</b></p>
          <p className={"text-left"}>
            Trend Detection, Peak Detection, Numerical Filter, Sequence, Boilerplate Removal, Event Rate, Field Converter, Frequency Calculation,
            Generic image Classification, Measurement Unit Converter, Projection, Timestamp Enricher, Trigonometry Functions and many more.
          </p>
          <hr/>
          <p>Our pipeline elements focus on analyzing industrial IoT data - for instance, we provide many operators to transform process data from PLC systems.</p>
          <a href="/docs/use-pipelines/" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Learn more</a>
        </FeatureItemHorizontal>
        <FeatureItemHorizontal featureNumber={"03."} title={"Exploit"} images={[{src: "/img/2026/dashboard-create.png", alt: "Dashboards"}, {src: "/img/2026/chart-status-heatmap.png", alt: "StreamPipes Status Heatmap"}, {src: "/img/2026/chart-traffic-light.png", alt: "Chart Traffic Light"}]}>
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
          <p className={"text-left"}>The chart library gives you an intuitive and feature-rich component to visually analyze persisted time-series data and comes with ready-to-use visualizations such as heatmaps, value distribution charts or time-series charts.</p>
          <hr/>
          <p className={"text-left"}>Use the live dashboard to visualize data in real-time, e.g., show critical values directly on the shopfloor.</p>
          <a href="/docs/use-charts/" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Charts</a>
          <a href="/docs/use-dashboards/" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Dashboards</a>
        </FeatureItemHorizontal>
        <FeatureItemHorizontal featureNumber={"04."} title={"Manage"} images={[{src: "/img/2026/home-map.png", alt: "Homepage"}, {src: "/img/2026/asset-create.png", alt: "Asset Management"}, {src: "/img/2026/dataset-export-provider-dialog-s3.png", alt: "Retention Config"}]}>
          <p className={"text-left"}>Manage assets, sites, locations and assign resources to physical assets. Organize your unified namespace.</p>
          <hr/>
          <p className={"text-left"}>As an integrated data platform you can manage assets, sites, users, permissions and much more. Developer interfaces ensure that StreamPipes integrates with your existing infrastructure.</p>
          <hr/>
          <a href="/docs/use-assets/" className="sp-button sp-button-medium sp-button-blue"><i
            className="fas fa-hand-point-right"></i> Assets</a>
        </FeatureItemHorizontal>
      </PageSection>

    </>

  </>
)

export default LovedByUsers;
