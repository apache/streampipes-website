import React, {useEffect, useState} from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import sidebars from '../../../sidebars.json';
import {Accent, Actions, Badge, Bento, Button, Card, CodePanel, Container, DeploymentDiagram, Eyebrow, FeatureList, FlowDiagram, Headline, Lead, LogoWall, ScreenshotFrame, Section, SectionHead, Stat, Stats, Steps, TabPanel, Tabs} from '../ui';
import styles from './Homepage.module.css';

const RELEASE = {version: '0.98.0', date: 'December 2025'};
const docs = (page: string) => `/docs/${page}/`;
const quickstart = docs('quick-start-guide');
const pythonDocs = 'https://streampipes.apache.org/docs/docs/python/dev/';
const githubRepo = 'https://github.com/apache/streampipes';
const pe = (id: string) => `/img/pipeline-elements/org.apache.streampipes.${id}/icon.png`;

const installCommand = `mkdir -p streampipes-${RELEASE.version} && cd streampipes-${RELEASE.version} \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${RELEASE.version}/installer/compose/docker-compose.yml \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${RELEASE.version}/installer/compose/.env \\
  && docker compose up -d`;

/** Count adapters, processors and sinks from the docs sidebar so the numbers track releases. */
function countExtensions() {
  const counts: Record<string, number> = {Adapters: 0, 'Data Processors': 0, 'Data Sinks': 0};
  const reference = (sidebars as any).documentation.find((entry: any) => entry?.label === '🧩 Extensions Reference');
  reference?.items?.forEach((category: any) => { if (category?.label in counts) counts[category.label] = new Set(category.items).size; });
  return counts;
}
const ext = countExtensions();

function useGithubStars() {
  const [stars, setStars] = useState<number | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/repos/apache/streampipes')
      .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
      .then(d => { if (!cancelled && typeof d.stargazers_count === 'number') setStars(d.stargazers_count); })
      .catch(() => undefined);
    return () => { cancelled = true; };
  }, []);
  return stars;
}

const connectors = [
  {name: 'OPC UA', src: pe('connect.iiot.adapters.opcua'), to: docs('how-to-opcua')},
  {name: 'Siemens S7', src: pe('connect.iiot.adapters.plc4x.s7'), to: docs('pe/org.apache.streampipes.connect.iiot.adapters.plc4x.s7')},
  {name: 'Modbus', src: pe('connect.iiot.adapters.plc4x.modbus'), to: docs('pe/org.apache.streampipes.connect.iiot.adapters.plc4x.modbus')},
  {name: 'MQTT', src: pe('connect.iiot.protocol.stream.mqtt'), to: docs('how-to-mqtt')},
  {name: 'Apache Kafka', src: pe('connect.iiot.protocol.stream.kafka'), to: docs('pe/org.apache.streampipes.connect.iiot.protocol.stream.kafka')},
  {name: 'Apache Pulsar', src: pe('connect.iiot.protocol.stream.pulsar'), to: docs('pe/org.apache.streampipes.connect.iiot.protocol.stream.pulsar')},
  {name: 'NATS', src: pe('connect.iiot.protocol.stream.nats'), to: docs('pe/org.apache.streampipes.connect.iiot.protocol.stream.nats')},
  {name: 'InfluxDB', src: pe('sinks.databases.jvm.influxdb'), to: docs('pe/org.apache.streampipes.sinks.databases.jvm.influxdb')},
  {name: 'Apache IoTDB', src: pe('sinks.databases.jvm.iotdb'), to: docs('pe/org.apache.streampipes.sinks.databases.jvm.iotdb')},
  {name: 'PostgreSQL', src: pe('sinks.databases.jvm.postgresql'), to: docs('pe/org.apache.streampipes.sinks.databases.jvm.postgresql')},
  {name: 'Slack', src: pe('sinks.notifications.jvm.slack'), to: docs('pe/org.apache.streampipes.sinks.notifications.jvm.slack')},
  {name: 'ROS', src: pe('connect.iiot.adapters.ros'), to: docs('pe/org.apache.streampipes.connect.iiot.adapters.ros')},
  {name: 'OI4', src: pe('connect.iiot.adapters.oi4'), to: docs('pe/org.apache.streampipes.connect.iiot.adapters.oi4')},
  {name: 'Milvus', src: pe('sinks.databases.jvm.milvus'), to: docs('pe/org.apache.streampipes.sinks.databases.jvm.milvus')},
];

const icon = (d: string) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;
const icons = {
  plug: icon('M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8ZM12 18v4'),
  flow: icon('M3 5.5A1.5 1.5 0 0 1 4.5 4h4A1.5 1.5 0 0 1 10 5.5v3A1.5 1.5 0 0 1 8.5 10h-4A1.5 1.5 0 0 1 3 8.5v-3ZM14 15.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3ZM10 7h3a3 3 0 0 1 3 3v4'),
  db: icon('M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'),
  chart: icon('M3 20h18M6 16l4-6 4 3 5-8'),
  grid: icon('M3 4.5A1.5 1.5 0 0 1 4.5 3h5A1.5 1.5 0 0 1 11 4.5v5A1.5 1.5 0 0 1 9.5 11h-5A1.5 1.5 0 0 1 3 9.5v-5Zm10 0A1.5 1.5 0 0 1 14.5 3h5A1.5 1.5 0 0 1 21 4.5v2A1.5 1.5 0 0 1 19.5 8h-5A1.5 1.5 0 0 1 13 6.5v-2Zm0 7a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-8Zm-10 3A1.5 1.5 0 0 1 4.5 13h5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 9.5 21h-5A1.5 1.5 0 0 1 3 19.5v-5Z'),
  site: icon('M3 21V10l6 3V7l6 3V3h6v18H3Z'),
  code: icon('m8 8-4 4 4 4m8-8 4 4-4 4m-2-10-4 12'),
  mail: icon('M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm0 .5 9 6 9-6'),
  lock: icon('M7 11V8a5 5 0 0 1 10 0v3M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm6 4v3'),
  users: icon('M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6-7a3.5 3.5 0 0 1 0 7m4 8v-1.5a3.5 3.5 0 0 0-2.5-3.35'),
  list: icon('M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01'),
  clock: icon('M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 2'),
  shield: icon('M12 3 4 6v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-3Zm-3 9 2 2 4-4'),
  activity: icon('M3 12h4l3-8 4 16 3-8h4'),
  help: icon('M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2.5-11a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V15m0 2.5h.01'),
  github: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>,
};

const developerTools = [
  {label: 'Python client', title: 'Your data, in notebooks and apps.', text: 'Bring historical datasets into pandas, work with live streams and automate the platform from Python.', language: 'python', file: 'explore_dataset.py',
    code: '# With an authenticated StreamPipes client\n# and an existing dataset named "flow-rate":\n\ndataset = client.dataLakeMeasureApi.get(\n    identifier="flow-rate"\n)\n\nframe = dataset.to_pandas()\nprint(frame.describe())',
    links: [{label: 'Python client docs', to: pythonDocs}]},
  {label: 'Java client & APIs', title: 'Automate from your own services.', text: 'Inspect resources, subscribe to streams and manage pipeline lifecycles through the Java client or the REST API.', language: 'java', file: 'PipelineAutomation.java',
    code: 'var client = StreamPipesClient.create(\n    "localhost", 80,\n    StreamPipesCredentials.withApiKey(user, apiKey));\n\nclient.pipelines().all()\n    .forEach(p -> client.pipelines().start(p));',
    links: [{label: 'Java client & APIs', to: docs('use-programmatic-access')}]},
  {label: 'Functions', title: 'Write the logic your application needs.', text: 'Subscribe to connected streams and handle events in code, without building a reusable element for the visual editor.', language: 'java', file: 'StreamPipesFunction.java',
    code: '@Override\npublic List<String> requiredStreamIds() {\n  return List.of("your-stream-id");\n}\n\n@Override\npublic void onEvent(Event event, String streamId) {\n  // Apply your application-specific logic here.\n}',
    links: [{label: 'Build a Function', to: docs('extend-sdk-functions')}]},
  {label: 'Extension SDK', title: 'Make the platform fit your domain.', text: 'Build reusable adapters, processors and sinks. Describe their inputs and configuration so your team can use them inside StreamPipes.', language: 'java', file: 'ExtensionService.java',
    code: '@Override\npublic SpServiceDefinition provideServiceDefinition() {\n  return SpServiceDefinitionBuilder.create(\n      "plant-extensions", "Plant extensions", "", 8090)\n    .registerPipelineElement(new MyProcessor())\n    .build();\n}',
    links: [{label: 'Start with the SDK', to: docs('extend-setup')}, {label: 'Extend the UI', to: docs('extend-customize-ui')}]},
];

const modules = [
  {label: 'Connect', src: '/img/home/connect-create-select-adapter.webp', alt: 'Adapter library with industrial and software connectors', caption: 'Connect: choose an adapter for OPC UA, S7, Modbus, MQTT, Kafka and more.', to: docs('use-connect')},
  {label: 'Pipelines', src: '/img/home/pipeline-editor-example.webp', alt: 'Visual pipeline editor routing machine data to trend detection, a Teams notification and storage', caption: 'Pipelines: filter, detect and route live data in the visual editor.', to: docs('use-pipelines')},
  {label: 'Datasets', src: '/img/home/dataset-overview.webp', alt: 'Dataset workspace with stored events, retention and export providers', caption: 'Datasets: persisted history with retention, export and permissions.', to: docs('use-datasets')},
  {label: 'Charts', src: '/img/home/chart-timeseries.webp', alt: 'Chart editor with a time-series visualization', caption: 'Charts: query a dataset and pick the right visualization.', to: docs('use-charts')},
  {label: 'Dashboards', src: '/img/home/dashboard-create.webp', alt: 'Dashboard with a gauge, a flow-rate chart and a machine status indicator', caption: 'Dashboards: compose saved charts into one operational view.', to: docs('use-dashboards')},
  {label: 'Assets', src: '/img/home/asset-asset-link-overview.webp', alt: 'Machine asset with site assignment and linked resources', caption: 'Assets: plants, lines and machines with their linked data.', to: docs('use-assets')},
];

function ModuleShowcase() {
  const [selected, setSelected] = useState(0);
  const module = modules[selected];
  return <div className={styles.showcase}>
    <Tabs id="module" label="Product modules" items={modules.map(m => m.label)} selected={selected} onSelect={setSelected} className={styles.showcaseTabs} />
    <TabPanel id="module" selected={selected}>
      <ScreenshotFrame key={module.src} src={module.src} alt={module.alt} width={1440} height={751} priority={selected === 0}
        caption={<span className={styles.showcaseCaption}><span>{module.caption}</span><Button to={module.to} variant="ghost">Learn more</Button></span>} />
    </TabPanel>
    <div className={styles.preload} aria-hidden="true">{modules.slice(1).map(m => <img key={m.src} src={m.src} alt="" loading="lazy" decoding="async" />)}</div>
  </div>;
}

function Hero({stars}: {stars: number | null}) {
  return <Section tone="light" className={styles.hero}>
    <Container center narrow className={styles.heroCopy}>
      <Badge to="/download/">Apache top-level project · Release {RELEASE.version}</Badge>
      <Headline level={1}>The open-source platform<br />for <Accent>industrial data</Accent>.</Headline>
      <Lead>Connect machines, process live streams, store datasets and build the dashboards your team runs on. On your infrastructure, under the Apache license.</Lead>
      <Actions className={styles.heroActions}>
        <Button to={quickstart} size="large">Get started</Button>
        <Button href={githubRepo} variant="secondary" size="large" arrow={false}>{icons.github}{stars === null ? 'Star on GitHub' : `${stars.toLocaleString('en-US')} stars on GitHub`}</Button>
      </Actions>
      <p className={styles.heroNote}>Docker Compose or Kubernetes. No account, no vendor lock-in.</p>
    </Container>
    <Container className={styles.heroFrame}>
      <ModuleShowcase />
    </Container>
  </Section>;
}

function Connectors() {
  return <Section tone="light" bordered className={styles.connectors} aria-label="Supported systems">
    <Container>
      <div className={styles.connectorsHead}>
        <div><Eyebrow>Connectivity</Eyebrow><Headline level={3}>Works with the systems you already run.</Headline></div>
        <Button to={docs('use-connect')} variant="ghost">All {ext.Adapters} adapters</Button>
      </div>
      <LogoWall logos={connectors} label="Supported protocols, brokers and databases" />
    </Container>
  </Section>;
}

function Platform({stars}: {stars: number | null}) {
  return <Section id="platform" tone="light" bordered>
    <Container>
      <Stats>
        <Stat value="Apache" label="Top-level project" note="Governed by the Apache Software Foundation" to="https://www.apache.org/" />
        <Stat value={stars === null ? 'Open source' : stars.toLocaleString('en-US')} label={stars === null ? 'Apache License 2.0' : 'GitHub stars'} note={stars === null ? 'Source on GitHub' : 'Apache License 2.0'} to={githubRepo} />
        <Stat value={`${ext.Adapters}+`} label="Adapters" note="OPC UA, S7, Modbus, MQTT, Kafka and more" to={docs('use-connect')} />
        <Stat value={`${ext['Data Processors'] + ext['Data Sinks']}+`} label="Processors and sinks" note="Filter, enrich, detect, route and store" to={docs('use-pipelines')} />
      </Stats>
      <div className={styles.platformHead}>
        <SectionHead eyebrow="Platform" title={<>One platform.<br />The whole data journey.</>} lead="From the first machine connection to the dashboard on the shop floor. Every step is built in, and every step is open." />
      </div>
      <Bento>
        <Card span={3} to={docs('use-connect')} media={{src: '/img/home/connect-create-select-adapter.webp', alt: 'StreamPipes adapter library'}} title="Connect" link="Explore connectivity">Bring machines, brokers and software systems into the platform with guided adapters, event previews and schema refinement.</Card>
        <Card span={3} to={docs('use-pipelines')} media={{src: '/img/home/pipeline-editor-example.webp', alt: 'StreamPipes visual pipeline editor'}} title="Pipelines" link="Explore pipelines">Filter, enrich, detect and route live data in a visual editor. Reuse validated pipelines as code.</Card>
        <Card span={2} to={docs('use-dashboards')} media={{src: '/img/home/chart-timeseries.webp', alt: 'StreamPipes chart editor'}} title="Charts and dashboards" link="Explore dashboards">Query datasets, choose the right visualization and compose shared operational views.</Card>
        <Card span={2} to={docs('use-datasets')} icon={icons.db} title="Datasets" link="Explore datasets">Persist streams as historical data. Inspect, export, import CSV and define retention and archival.</Card>
        <Card span={2} to={docs('use-assets')} icon={icons.site} title="Assets and sites" link="Explore assets">Model plants, lines and machines and link every stream, dataset, pipeline and dashboard to them.</Card>
      </Bento>
    </Container>
  </Section>;
}

function HowItWorks() {
  return <Section id="architecture" tone="tint" bordered>
    <Container>
      <SectionHead eyebrow="How it works" title={<>From machine signal<br />to insight.</>} lead="Adapters turn raw signals into typed streams. Pipelines act on them in real time. Datasets keep the history. Charts and dashboards make it visible." />
      <div className={styles.flow}>
        <FlowDiagram nodes={[
          {label: 'Machines and systems', sub: 'OPC UA, S7, MQTT, Kafka'},
          {label: 'Connect', sub: 'Adapters, schemas, units'},
          {label: 'Pipelines', sub: 'Processors and sinks'},
          {label: 'Datasets', sub: 'History and retention'},
          {label: 'Charts and dashboards', sub: 'Operators and teams'},
        ]} />
      </div>
    </Container>
  </Section>;
}

function Architecture() {
  const layers = [
    {title: 'Interfaces', text: 'The web UI for everyday work, Java and Python clients and REST APIs for automation, and connections to third-party systems.'},
    {title: 'Core', text: 'Manages adapters, pipelines, datasets, assets and users, monitors every running component and serves the UI.'},
    {title: 'Messaging layer', text: 'NATS or Kafka carries events between adapters, pipelines and sinks, so each part can run where it fits best.'},
    {title: 'Extension services', text: 'Adapters, processors, sinks and Functions run as separate services. Add your own with the SDK and install them at runtime.'},
    {title: 'Time-series storage', text: 'Persisted datasets live in a time-series database with retention rules and export to CSV, JSON or Excel.'},
  ];
  return <Section id="architecture-overview" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Architecture" title={<>Built as services.<br />Deployed where you need them.</>} lead="A core, a message broker and any number of extension services. Run everything on one host with Docker Compose, or spread extension services across plants and scale the core on Kubernetes." />
      <div className={styles.archGrid}>
        <ScreenshotFrame src="/img/home/architecture.webp" alt="StreamPipes architecture: interfaces on top, the core and time-series database in the middle, a messaging layer, and extension services with adapters, processors, sinks and Functions connected to machines" width={1600} height={695} caption="Architecture overview" />
        <ol className={styles.layers}>{layers.map((layer, i) => <li key={layer.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{layer.title}</h3><p>{layer.text}</p></div></li>)}</ol>
      </div>
      <div className={styles.sectionFoot}><Button to={docs('concepts-architecture')} variant="ghost">Architecture in detail</Button></div>
    </Container>
  </Section>;
}

function Deployment() {
  return <Section id="deployment" tone="tint" bordered>
    <Container>
      <SectionHead eyebrow="Deployment" title={<>Extension services at the edge.<br />One core to manage them.</>} lead="Each plant runs a small extension service next to its PLCs and machines. It connects outbound to the broker, so the OT network needs no inbound ports. Core, storage, processors and sinks stay in IT, managed from one place." />
      <div className={styles.deployFrame}><DeploymentDiagram /></div>
      <div className={styles.deploySteps}>
        <Steps items={[
          {title: 'Run it where the data is', text: 'Place extension services in the OT network next to your equipment and keep the core in the data center or cloud. The broker connects both, with control flow only from IT to OT.'},
          {title: 'Start small, grow in place', text: 'A single Docker Compose host is enough to evaluate. The same services scale out on Kubernetes without changing your pipelines.'},
          {title: 'Keep the data yours', text: 'Everything runs on your infrastructure. No usage metering, no proprietary formats: export datasets whenever you need.'},
        ]} />
      </div>
      <div className={styles.sectionFoot}><Button to={docs('configure-operate-deployment')} variant="ghost">Deployment options</Button><Button to={docs('configure-operate-extension-services')} variant="ghost">Extension services</Button></div>
    </Container>
  </Section>;
}

function Enterprise() {
  return <Section id="enterprise" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Enterprise readiness" title={<>Ready for the plant.<br />Ready for IT.</>} lead="The controls an IT department expects, built into the open-source platform: identity, access control, audit trail, data lifecycle and secured connections." action={<Button to={docs('configure-operate-security')} variant="ghost">Security and operations docs</Button>} />
      <Bento>
        <Card span={2} to={docs('configure-operate-environment-variables')} icon={icons.lock} title="Single sign-on" link="Configure OpenID Connect">Log in through your identity provider with OpenID Connect or OAuth2. Configure one or more providers and map roles from token claims.</Card>
        <Card span={2} to={docs('configure-operate-security')} icon={icons.users} title="Roles, groups and permissions" link="User management">Built-in and custom roles from fine-grained privileges, user groups, per-resource permissions with owners and public links, service accounts and API keys.</Card>
        <Card span={2} to={docs('configure-operate-general-settings')} icon={icons.list} title="Audit log" link="Audit log">Who changed what: logins, adapters, datasets, charts, dashboards, exports and security groups. Filter, download as CSV, JSON or Excel, and apply retention rules.</Card>
        <Card span={2} to={docs('use-datasets')} icon={icons.clock} title="Data retention and archival" link="Dataset retention">Per-dataset retention policies that delete, archive or both, on a daily, weekly or monthly schedule. Archive to a local folder or S3 and export CSV, JSON or Excel.</Card>
        <Card span={2} to={docs('configure-operate-extension-services')} icon={icons.shield} title="Secured connections" link="Certificates and transport">HTTPS for the UI, encrypted secrets at rest, certificate management for OPC UA, MQTT and Kafka with expiry alerts, and NATS transport between core and extension services.</Card>
        <Card span={2} to={docs('configure-operate-deployment')} icon={icons.activity} title="Operations" link="Deploy and operate">Metrics and logs per adapter and pipeline, a Prometheus endpoint, a Helm chart with Prometheus and Grafana, export and import of resources, and automatic migrations on upgrade.</Card>
      </Bento>
      <p className={styles.enterpriseNote}>Terms-of-use acknowledgment after login, self-registration and password-recovery toggles, and a configurable app name round it off. All of it is Apache licensed; nothing sits behind an enterprise tier.</p>
    </Container>
  </Section>;
}

function Developers() {
  const [selected, setSelected] = useState(0);
  const tool = developerTools[selected];
  return <Section id="developers" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Developers" title={<>Integrate. Automate.<br />Extend.</>} lead="Start with the visual tools. Go further with client libraries, event-driven Functions and an SDK for your own extensions." />
      <Tabs id="developer" label="Developer tools" items={developerTools.map(t => t.label)} selected={selected} onSelect={setSelected} />
      <TabPanel id="developer" selected={selected} className={styles.developerPanel}>
        <div className={styles.developerCopy}>
          <Headline level={3}>{tool.title}</Headline>
          <p>{tool.text}</p>
          <Actions>{tool.links.map(link => <Button key={link.to} to={link.to} variant="ghost">{link.label}</Button>)}</Actions>
        </div>
        <CodePanel title={tool.file} language={tool.language} code={tool.code} meta={tool.language === 'python' ? 'Python' : 'Java'} />
      </TabPanel>
    </Container>
  </Section>;
}

function GetStarted() {
  return <Section id="install" tone="tint" bordered>
    <Container>
      <div className={styles.ctaGrid}>
        <div>
          <Eyebrow>Get started</Eyebrow>
          <Headline level={2}>Running in minutes.<br />On your machine.</Headline>
          <Lead>One command downloads the Compose files for release {RELEASE.version} and starts StreamPipes with Docker. Then follow the quickstart from your first data source to a working dashboard.</Lead>
          <Actions className={styles.ctaActions}><Button to={quickstart} size="large">Open the quickstart</Button><Button to="/download/" variant="secondary" size="large">All downloads</Button></Actions>
        </div>
        <CodePanel title="docker compose" language="bash" code={installCommand} wrap meta={`release ${RELEASE.version}`} />
      </div>
      <div className={styles.community}>
        <FeatureList items={[
          {icon: icons.github, title: 'GitHub Discussions', text: 'Questions, ideas and show-and-tell with maintainers and users.', to: 'https://github.com/apache/streampipes/discussions'},
          {icon: icons.mail, title: 'Mailing lists', text: 'Development and user lists, the Apache way. Decisions happen in the open.', to: '/community/mailing-lists/'},
          {icon: icons.help, title: 'Support and training', text: 'Community support on GitHub, commercial support from companies around the project.', to: docs('community-get-help')},
          {icon: icons.code, title: 'Contribute', text: 'Code, documentation, testing and ideas. Start with a discussion or pick an issue.', to: '/community/get-involved/'},
        ]} />
      </div>
    </Container>
  </Section>;
}

export default function Homepage() {
  const {collectAnchor} = useBrokenLinks();
  ['platform', 'architecture', 'architecture-overview', 'deployment', 'enterprise', 'developers', 'install'].forEach(collectAnchor);
  const stars = useGithubStars();
  return <div className={`${styles.home} sp-home`}>
    <main>
      <Hero stars={stars} />
      <Connectors />
      <Platform stars={stars} />
      <HowItWorks />
      <Architecture />
      <Deployment />
      <Enterprise />
      <Developers />
      <GetStarted />
    </main>
  </div>;
}
