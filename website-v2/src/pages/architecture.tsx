import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Button, Card, Container, DeploymentDiagram, FlowDiagram, Headline, Lead, PageIntro, ScreenshotFrame, Section, SectionHead, Steps} from '../components/ui';
import styles from './pages.module.css';

const components = [
  {title: 'User interface', text: 'An Angular web application for daily work: connecting sources, building pipelines, exploring datasets, creating charts and dashboards, managing assets, users and settings. It talks to the core over REST, and you can add your own modules and theme.'},
  {title: 'Core', text: 'The service that manages and monitors everything else. It stores metadata, checks and starts pipelines, watches adapters and other running components, serves the UI and the REST API, and takes care of users, roles, permissions and the audit log.'},
  {title: 'Messaging layer', text: 'A broker carries every event between adapters, processors and sinks, so no two services talk to each other directly. NATS is the default because it is small and copes well with being deployed near machines. Kafka, MQTT and Pulsar work too if that is what you already run.'},
  {title: 'Extension services', text: 'Services that bring adapters, processors, sinks and Functions. Several can register with one core, each with its own set, and each is deployed and updated on its own, ideally close to the systems it talks to.'},
  {title: 'Storage', text: 'A time-series database for datasets, and Apache CouchDB for configuration, metadata and user data. Both come with the standard installation. Retention rules keep the time-series database from growing without limit.'},
  {title: 'Clients and APIs', text: 'Java and Python clients, the REST API and Functions let other applications read resources, subscribe to live streams and control pipelines without the UI.'},
];

export default function Architecture() {
  return <Layout title="Architecture" description="How Apache StreamPipes is built: core, message broker, extension services, time-series storage and clients, and how they are deployed across OT and IT with Docker Compose or Kubernetes.">
    <PageIntro eyebrow="Architecture" title="How StreamPipes is built." lead="StreamPipes is a set of services around a message broker. The core manages and monitors, extension services connect and process, and two databases keep history and configuration. You decide where each part runs: all on one host to try it out, or spread across plants and a data center in production." actions={<><Button to="/docs/concepts-architecture/">Architecture in the docs</Button><Button to="/docs/configure-operate-deployment/" variant="ghost">Deployment options</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <ScreenshotFrame src="/img/home/architecture.webp" alt="StreamPipes architecture: interfaces on top, the core and time-series database in the middle, a messaging layer, and extension services with adapters, processors, sinks and Functions connected to machines" width={1600} height={695} caption="Architecture overview" className={styles.diagramFrame} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Components" title={<>The parts.</>} lead="Each service has one job. Together they cover connecting, processing, storing, visualizing and administering, with no custom integration layer in between." />
        <div className={styles.componentList}>{components.map((c, i) => <div key={c.title} className={styles.componentRow}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{c.title}</h3><p>{c.text}</p></div></div>)}</div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <SectionHead eyebrow="Data flow" title={<>What happens<br />to an event.</>} lead="An adapter turns raw signals into a typed stream. Pipelines work on that stream as events arrive. Datasets keep what you want to look at later, and charts and dashboards show it." />
        <FlowDiagram nodes={[
          {label: 'Machines and systems', sub: 'OPC UA, S7, MQTT, Kafka'},
          {label: 'Connect', sub: 'Adapters, schemas, units'},
          {label: 'Pipelines', sub: 'Processors and sinks'},
          {label: 'Datasets', sub: 'History and retention'},
          {label: 'Charts and dashboards', sub: 'Operators and teams'},
        ]} />
        <p className={styles.note}>A stream is described once, with field types, measurement units and metadata. Every pipeline, chart and dashboard builds on that description, and the pipeline editor checks processors and sinks against it before anything runs.</p>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Extension services" title={<>New capabilities<br />without touching the core.</>} lead="Each extension service registers its adapters, processors, sinks and Functions with the core. The built-in ones install while the platform runs. Your own, written with the SDK, run next to the systems they talk to." />
        <ScreenshotFrame src="/img/home/extension-services.webp" alt="Multiple extension services at distributed locations registering with one StreamPipes core" width={1600} height={849} caption="Multiple extension services at distributed locations register with one core" className={styles.diagramFrame} />
        <div className={styles.actionsRow}><Button to="/integrations/" variant="ghost">Browse the built-in extensions</Button><Button to="/docs/extend-setup/" variant="ghost">Build your own</Button></div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <SectionHead eyebrow="Deployment" title="Extension services in the plant, the core in your data center." lead="Each plant runs a small extension service next to its PLCs and machines. The service connects outbound to the broker, so you do not open any ports into the OT network. The core, the storage and the heavier processing stay in IT." />
        <div className={styles.diagramFrame}><DeploymentDiagram /></div>
        <div className={styles.stepsBlock}>
          <Steps items={[
            {title: 'Run it where the data is', text: 'Put extension services into the plant network, next to the equipment, and keep the core in the data center or in the cloud. The broker connects the two.'},
            {title: 'Start small, grow in place', text: 'One Docker Compose host is enough to try things out. The same services scale out on Kubernetes with the Helm chart later, and your pipelines stay as they are.'},
            {title: 'The data stays yours', text: 'Everything runs on infrastructure you control. There is no usage metering and no proprietary format, and you can export a dataset whenever you want to.'},
          ]} />
        </div>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Communication" title={<>HTTP or NATS between<br />the core and the extensions.</>} lead="In many plants, opening an inbound port to a service is not an option. StreamPipes can route the traffic between the core and extension services through NATS instead of HTTP, so a service in a restricted network only ever connects outward." />
        <Bento>
          <Card span={2} title="HTTP">The default. The core calls extension services directly, which is fine when everything shares one network.</Card>
          <Card span={2} title="NATS">Core and extension services talk through the broker. No inbound ports on the extension side, optional token authentication, TLS on the connection.</Card>
          <Card span={2} title="Dual and auto">Extension services can offer both, and the core uses whichever is available. Handy while you move from one mode to the other.</Card>
        </Bento>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div><Headline level={2}>The details are in the docs.</Headline><Lead>Components, the data model, the deployment models and the full configuration reference.</Lead></div>
          <Bento>
            <Card span={3} to="/docs/concepts-architecture/" title="Architecture" link="Read">Components, data model, communication modes and implementation notes.</Card>
            <Card span={3} to="/docs/configure-operate-deployment/" title="Deployment" link="Read">Docker Compose, distributed setups, brokers, Kubernetes and the Helm chart.</Card>
            <Card span={3} to="/docs/configure-operate-environment-variables/" title="Environment variables" link="Read">Every setting for identity, storage, transport, security and tuning.</Card>
            <Card span={3} to="/enterprise/" title="Enterprise readiness" link="Read">Single sign-on, permissions, audit log, retention and encrypted connections.</Card>
          </Bento>
        </div>
      </Container>
    </Section>
  </Layout>;
}
