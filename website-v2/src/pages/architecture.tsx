import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Button, Card, Container, DeploymentDiagram, FlowDiagram, Headline, Lead, PageIntro, ScreenshotFrame, Section, SectionHead, Steps} from '../components/ui';
import styles from './pages.module.css';

const components = [
  {title: 'User interface', text: 'An Angular web application for everyday work: connecting sources, building pipelines, exploring datasets, creating charts and dashboards, managing assets, users and settings. It talks to the core over REST and can be extended with custom modules and themes.'},
  {title: 'Core', text: 'The management and monitoring service. It stores metadata, validates and starts pipelines, monitors adapters and running components, serves the UI and the REST API, and handles users, roles, permissions and audit events.'},
  {title: 'Messaging layer', text: 'An external broker carries every event between adapters, processors and sinks, so services stay decoupled. NATS is the lightweight default; Apache Kafka, MQTT and Apache Pulsar are supported where an organization standardizes on them.'},
  {title: 'Extension services', text: 'Microservices that contribute adapters, processors, sinks and Functions. Several can register with one core, each with its own set of capabilities, deployed and updated independently and placed where the data is.'},
  {title: 'Storage', text: 'A time-series database for datasets and historical analysis, and Apache CouchDB for configuration, metadata and user data. Both are part of the standard installation; retention and archival keep the time-series store under control.'},
  {title: 'Clients and APIs', text: 'Java and Python clients, the REST API and Functions give external applications access to resources, live streams and pipeline lifecycles without going through the UI.'},
];

export default function Architecture() {
  return <Layout title="Architecture" description="How Apache StreamPipes is built: core, message broker, extension services, time-series storage and clients, and how they are deployed across OT and IT with Docker Compose or Kubernetes.">
    <PageIntro eyebrow="Architecture" title="Built as services. Deployed where you need them." lead="StreamPipes is a set of cooperating services around a message broker. The core manages and monitors, extension services connect and process, storage keeps history and configuration. Each part runs where it fits: on one host for an evaluation, across plants and a data center in production." actions={<><Button to="/docs/concepts-architecture/">Architecture in the docs</Button><Button to="/docs/configure-operate-deployment/" variant="ghost">Deployment options</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <ScreenshotFrame src="/img/home/architecture.webp" alt="StreamPipes architecture: interfaces on top, the core and time-series database in the middle, a messaging layer, and extension services with adapters, processors, sinks and Functions connected to machines" width={1600} height={695} caption="Architecture overview" className={styles.diagramFrame} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Components" title={<>Six parts.<br />One platform.</>} lead="Every component has one job. Together they cover connectivity, processing, history, visualization and administration without a custom integration layer." />
        <div className={styles.componentList}>{components.map((c, i) => <div key={c.title} className={styles.componentRow}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{c.title}</h3><p>{c.text}</p></div></div>)}</div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <SectionHead eyebrow="Data flow" title={<>From machine signal<br />to insight.</>} lead="Adapters turn raw signals into typed streams. Pipelines act on them in real time. Datasets keep the history. Charts and dashboards make it visible." />
        <FlowDiagram nodes={[
          {label: 'Machines and systems', sub: 'OPC UA, S7, MQTT, Kafka'},
          {label: 'Connect', sub: 'Adapters, schemas, units'},
          {label: 'Pipelines', sub: 'Processors and sinks'},
          {label: 'Datasets', sub: 'History and retention'},
          {label: 'Charts and dashboards', sub: 'Operators and teams'},
        ]} />
        <p className={styles.note}>A stream is described once, with field types, measurement units and metadata. Every pipeline, chart and dashboard builds on that description, and the pipeline editor validates processors and sinks against it before anything runs.</p>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Extension services" title={<>Add capabilities<br />without touching the core.</>} lead="Each extension service registers its adapters, processors, sinks and Functions with the core. Install the built-in ones at runtime, or build your own with the SDK and deploy them next to the systems they integrate." />
        <ScreenshotFrame src="/img/home/extension-services.webp" alt="Multiple extension services at distributed locations registering with one StreamPipes core" width={1600} height={849} caption="Multiple extension services at distributed locations register with one core" className={styles.diagramFrame} />
        <div className={styles.actionsRow}><Button to="/integrations/" variant="ghost">Browse the built-in extensions</Button><Button to="/docs/extend-setup/" variant="ghost">Build your own</Button></div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <SectionHead eyebrow="Deployment" title={<>Extension services at the edge.<br />One core to manage them.</>} lead="Each plant runs a small extension service next to its PLCs and machines. It connects outbound to the broker, so the OT network needs no inbound ports. Core, storage, processors and sinks stay in IT, managed from one place." />
        <div className={styles.diagramFrame}><DeploymentDiagram /></div>
        <div className={styles.stepsBlock}>
          <Steps items={[
            {title: 'Run it where the data is', text: 'Place extension services in the OT network next to your equipment and keep the core in the data center or cloud. The broker connects both, with control flow only from IT to OT.'},
            {title: 'Start small, grow in place', text: 'A single Docker Compose host is enough to evaluate. The same services scale out on Kubernetes with the Helm chart without changing your pipelines.'},
            {title: 'Keep the data yours', text: 'Everything runs on your infrastructure. No usage metering, no proprietary formats: export datasets whenever you need.'},
          ]} />
        </div>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Communication" title={<>HTTP or NATS<br />between core and extensions.</>} lead="In many OT environments, opening inbound ports to extension services is undesirable or impossible. StreamPipes supports NATS request-reply as the transport between core and extension services, so a service in a restricted network only needs an outbound connection to the broker." />
        <Bento>
          <Card span={2} title="HTTP">The default for simple setups. The core calls extension services directly; suitable when all services share one network.</Card>
          <Card span={2} title="NATS">Core and extension services talk through the broker. No inbound ports on the extension side, optional token authentication, TLS on the connection.</Card>
          <Card span={2} title="Dual and auto">Extension services can offer both; the core picks the transport that is available, which eases migrations between the modes.</Card>
        </Bento>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div><Headline level={2}>Read the details.</Headline><Lead>The documentation covers every component, the data model, the deployment models and the configuration reference.</Lead></div>
          <Bento>
            <Card span={3} to="/docs/concepts-architecture/" title="Architecture" link="Read">Components, data model, communication modes and implementation notes.</Card>
            <Card span={3} to="/docs/configure-operate-deployment/" title="Deployment" link="Read">Docker Compose, distributed setups, brokers, Kubernetes and the Helm chart.</Card>
            <Card span={3} to="/docs/configure-operate-environment-variables/" title="Environment variables" link="Read">Every setting for identity, storage, transport, security and tuning.</Card>
            <Card span={3} to="/enterprise/" title="Enterprise readiness" link="Read">Identity, access control, audit log, data lifecycle and secured connections.</Card>
          </Bento>
        </div>
      </Container>
    </Section>
  </Layout>;
}
