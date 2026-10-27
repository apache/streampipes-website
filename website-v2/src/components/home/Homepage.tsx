import React, {useEffect, useState} from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import sidebars from '../../../sidebars.json';
import {Accent, Actions, Badge, Bento, Button, Card, CodePanel, Container, DeploymentDiagram, Eyebrow, FeatureList, FlowDiagram, Headline, Lead, LogoWall, ScreenshotFrame, Section, SectionHead, Stat, Stats, Steps, TabPanel, Tabs} from '../ui';
import {useCases} from '../usecases/data';
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
  const reference = (sidebars as any).documentation.find((entry: any) => typeof entry?.label === 'string' && entry.label.endsWith('Extensions Reference'));
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
  {label: 'Python client', title: 'Your data in a notebook.', text: 'Load a dataset into pandas, subscribe to a live stream, or script the platform from Python.', language: 'python', file: 'explore_dataset.py',
    code: '# With an authenticated StreamPipes client\n# and an existing dataset named "flow-rate":\n\ndataset = client.dataLakeMeasureApi.get(\n    identifier="flow-rate"\n)\n\nframe = dataset.to_pandas()\nprint(frame.describe())',
    links: [{label: 'Python client docs', to: pythonDocs}]},
  {label: 'Java client & APIs', title: 'Automate it from your own services.', text: 'List resources, subscribe to streams, and start or stop pipelines through the Java client or the REST API.', language: 'java', file: 'PipelineAutomation.java',
    code: 'var client = StreamPipesClient.create(\n    "localhost", 80,\n    StreamPipesCredentials.withApiKey(user, apiKey));\n\nclient.pipelines().all()\n    .forEach(p -> client.pipelines().start(p));',
    links: [{label: 'Java client & APIs', to: docs('use-programmatic-access')}]},
  {label: 'Functions', title: 'Logic that does not fit a pipeline element.', text: 'A Function subscribes to a stream and handles each event in code. No need to build a reusable element for the editor when you need the logic only once.', language: 'java', file: 'StreamPipesFunction.java',
    code: '@Override\npublic List<String> requiredStreamIds() {\n  return List.of("your-stream-id");\n}\n\n@Override\npublic void onEvent(Event event, String streamId) {\n  // Apply your application-specific logic here.\n}',
    links: [{label: 'Build a Function', to: docs('extend-sdk-functions')}]},
  {label: 'Extension SDK', title: 'Extensions for your own systems.', text: 'Write adapters, processors and sinks for the protocols and logic your plant needs. Describe their configuration, and your team uses them in the editor like any built-in element.', language: 'java', file: 'ExtensionService.java',
    code: '@Override\npublic SpServiceDefinition provideServiceDefinition() {\n  return SpServiceDefinitionBuilder.create(\n      "plant-extensions", "Plant extensions", "", 8090)\n    .registerPipelineElement(new MyProcessor())\n    .build();\n}',
    links: [{label: 'Start with the SDK', to: docs('extend-setup')}, {label: 'Extend the UI', to: docs('extend-customize-ui')}]},
];

const modules = [
  {label: 'Connect', src: '/img/home/connect-create-select-adapter.webp', alt: 'Adapter library with industrial and software connectors', caption: 'Connect: pick an adapter for OPC UA, S7, Modbus, MQTT, Kafka and others.', to: docs('use-connect')},
  {label: 'Pipelines', src: '/img/home/pipeline-editor-example.webp', alt: 'Visual pipeline editor routing machine data to trend detection, a Teams notification and storage', caption: 'Pipelines: filter, detect and route live data in the visual editor.', to: docs('use-pipelines')},
  {label: 'Datasets', src: '/img/home/dataset-overview.webp', alt: 'Dataset workspace with stored events, retention and export providers', caption: 'Datasets: stored history with retention rules, export and permissions.', to: docs('use-datasets')},
  {label: 'Charts', src: '/img/home/chart-timeseries.webp', alt: 'Chart editor with a time-series visualization', caption: 'Charts: query a dataset and pick the right visualization.', to: docs('use-charts')},
  {label: 'Dashboards', src: '/img/home/dashboard-create.webp', alt: 'Dashboard with a gauge, a flow-rate chart and a machine status indicator', caption: 'Dashboards: saved charts combined into one view for the team.', to: docs('use-dashboards')},
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
      <Lead>StreamPipes connects to machines and industrial systems, works on the data as it arrives, keeps the history, and turns it into charts and dashboards. It runs on your own servers under the Apache license.</Lead>
      <Actions className={styles.heroActions}>
        <Button to={quickstart} size="large">Get started</Button>
        <Button href={githubRepo} variant="secondary" size="large" arrow={false}>{icons.github}{stars === null ? 'Star on GitHub' : `${stars.toLocaleString('en-US')} stars on GitHub`}</Button>
      </Actions>
      <p className={styles.heroNote}>Runs with Docker Compose or Kubernetes. Nothing to sign up for.</p>
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
        <div><Eyebrow>Connectivity</Eyebrow><Headline level={3}>Works with the systems you already have.</Headline></div>
        <Button to="/integrations/" variant="ghost">All {ext.Adapters + ext['Data Processors'] + ext['Data Sinks']} integrations</Button>
      </div>
      <LogoWall logos={connectors} label="Supported protocols, brokers and databases" />
    </Container>
  </Section>;
}

function Platform({stars}: {stars: number | null}) {
  return <Section id="platform" tone="light" bordered>
    <Container>
      <Stats>
        <Stat value="Apache" label="Top-level project" note="A project of the Apache Software Foundation" to="https://www.apache.org/" />
        <Stat value={stars === null ? 'Open source' : stars.toLocaleString('en-US')} label={stars === null ? 'Apache License 2.0' : 'GitHub stars'} note={stars === null ? 'Source on GitHub' : 'Apache License 2.0'} to={githubRepo} />
        <Stat value={`${ext.Adapters}+`} label="Adapters" note="OPC UA, S7, Modbus, MQTT, Kafka and more" to={docs('use-connect')} />
        <Stat value={`${ext['Data Processors'] + ext['Data Sinks']}+`} label="Processors and sinks" note="Filtering, enrichment, detection, routing, storage" to={docs('use-pipelines')} />
      </Stats>
      <div className={styles.platformHead}>
        <SectionHead eyebrow="Platform" title={<>From the first connection<br />to the dashboard.</>} lead="Connecting a machine, processing its data, storing it and charting it usually means four tools. In StreamPipes they are modules of one platform, and all of them are open source." action={<Button to="/features/" variant="ghost">All features</Button>} />
      </div>
      <Bento>
        <Card span={3} to={docs('use-connect')} media={{src: '/img/home/connect-create-select-adapter.webp', alt: 'StreamPipes adapter library'}} title="Connect" link="Explore connectivity">Adapters connect machines, brokers and other software. You see the incoming events before you save anything, and you fix field names, types and units once.</Card>
        <Card span={3} to={docs('use-pipelines')} media={{src: '/img/home/pipeline-editor-example.webp', alt: 'StreamPipes visual pipeline editor'}} title="Pipelines" link="Explore pipelines">Filter, enrich and route live data in a visual editor. Elements are checked against the stream's schema, so a pipeline that saves is a pipeline that runs.</Card>
        <Card span={2} to={docs('use-dashboards')} media={{src: '/img/home/chart-timeseries.webp', alt: 'StreamPipes chart editor'}} title="Charts and dashboards" link="Explore dashboards">Query a dataset, pick a chart type, and put several charts together into a dashboard for the team.</Card>
        <Card span={2} to={docs('use-datasets')} icon={icons.db} title="Datasets" link="Explore datasets">Stored history for the streams you choose to keep. Inspect it, export it, import CSV files, and set retention rules.</Card>
        <Card span={2} to={docs('use-assets')} icon={icons.site} title="Assets and sites" link="Explore assets">Describe your plants, lines and machines, and attach the streams, datasets, pipelines and dashboards that belong to each.</Card>
      </Bento>
    </Container>
  </Section>;
}

function UseCases() {
  return <Section id="use-cases" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Use cases" title={<>What people<br />build with it.</>} lead="Five scenarios we see often, with the adapters, processors and sinks they use and the guide that goes with each." action={<Button to="/use-cases/" variant="ghost">All use cases</Button>} />
      <Bento>
        {useCases.slice(0, 3).map(u => <Card key={u.slug} span={2} to={`/use-cases/${u.slug}/`} media={{src: u.cover.src, alt: u.cover.alt}} title={u.title} link="Read the use case">{u.lead}</Card>)}
      </Bento>
    </Container>
  </Section>;
}

function HowItWorks() {
  return <Section id="architecture" tone="tint" bordered>
    <Container>
      <SectionHead eyebrow="How it works" title={<>What happens<br />to an event.</>} lead="An adapter turns raw signals into a typed stream. Pipelines work on that stream as events arrive. Datasets keep what you want to look at later, and charts and dashboards show it." />
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
    {title: 'Interfaces', text: 'The web UI for daily work, plus Java and Python clients and a REST API for anything you want to automate.'},
    {title: 'Core', text: 'Keeps track of adapters, pipelines, datasets, assets and users, watches what is running, and serves the UI.'},
    {title: 'Messaging layer', text: 'NATS or Kafka moves events between adapters, pipelines and sinks. Nothing talks point to point, so each part can run where it makes sense.'},
    {title: 'Extension services', text: 'Adapters, processors, sinks and Functions are packaged as separate services. Write your own with the SDK and install them while the platform is running.'},
    {title: 'Time-series storage', text: 'Datasets go into a time-series database. Retention rules decide how long they stay, and you can export them as CSV, JSON or Excel.'},
  ];
  return <Section id="architecture-overview" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Architecture" title={<>Several services,<br />one platform.</>} lead="A core, a message broker, and as many extension services as you need. Run all of it on one host with Docker Compose, or put the extension services into the plants and the core into the data center." />
      <div className={styles.archGrid}>
        <ScreenshotFrame src="/img/home/architecture.webp" alt="StreamPipes architecture: interfaces on top, the core and time-series database in the middle, a messaging layer, and extension services with adapters, processors, sinks and Functions connected to machines" width={1600} height={695} caption="Architecture overview" />
        <ol className={styles.layers}>{layers.map((layer, i) => <li key={layer.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{layer.title}</h3><p>{layer.text}</p></div></li>)}</ol>
      </div>
      <div className={styles.sectionFoot}><Button to="/architecture/" variant="ghost">Architecture in detail</Button></div>
    </Container>
  </Section>;
}

function Deployment() {
  return <Section id="deployment" tone="tint" bordered>
    <Container>
      <SectionHead eyebrow="Deployment" title={<>Extension services in the plant,<br />the core where your servers are.</>} lead="Each plant runs a small extension service next to its PLCs and machines. The service connects outbound to the broker, so you do not open any ports into the OT network. The core, the storage and the heavier processing stay in IT." />
      <div className={styles.deployFrame}><DeploymentDiagram /></div>
      <div className={styles.deploySteps}>
        <Steps items={[
          {title: 'Run it where the data is', text: 'Put extension services into the plant network, next to the equipment, and keep the core in the data center or in the cloud. The broker connects the two.'},
          {title: 'Start small, grow in place', text: 'One Docker Compose host is enough to try things out. The same services scale out on Kubernetes later, and your pipelines stay as they are.'},
          {title: 'The data stays yours', text: 'Everything runs on infrastructure you control. There is no usage metering and no proprietary format, and you can export a dataset whenever you want to.'},
        ]} />
      </div>
      <div className={styles.sectionFoot}><Button to={docs('configure-operate-deployment')} variant="ghost">Deployment options</Button><Button to={docs('configure-operate-extension-services')} variant="ghost">Extension services</Button></div>
    </Container>
  </Section>;
}

function Enterprise() {
  return <Section id="enterprise" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Enterprise readiness" title={<>The things<br />IT will ask about.</>} lead="Single sign-on, roles and permissions, an audit log, retention rules and encrypted connections are part of the platform. There is no separate enterprise edition." action={<Button to="/enterprise/" variant="ghost">Everything on enterprise readiness</Button>} />
      <Bento>
        <Card span={2} to={docs('configure-operate-environment-variables')} icon={icons.lock} title="Single sign-on" link="Configure OpenID Connect">Sign in through your identity provider with OpenID Connect or OAuth2. Several providers can be configured side by side, and roles can be taken from token claims.</Card>
        <Card span={2} to={docs('configure-operate-security')} icon={icons.users} title="Roles, groups and permissions" link="User management">Built-in roles, custom roles made from individual privileges, user groups, and permissions on every resource. Service accounts and API keys for anything automated.</Card>
        <Card span={2} to={docs('configure-operate-general-settings')} icon={icons.list} title="Audit log" link="Audit log">Logins and changes to adapters, datasets, charts, dashboards, exports and security settings are recorded. Filter the log, download it, and give it its own retention rule.</Card>
        <Card span={2} to={docs('use-datasets')} icon={icons.clock} title="Data retention and archival" link="Dataset retention">Each dataset gets a retention policy that deletes old data, archives it to a folder or S3, or does both, on a daily, weekly or monthly schedule.</Card>
        <Card span={2} to={docs('configure-operate-extension-services')} icon={icons.shield} title="Secured connections" link="Certificates and transport">HTTPS for the UI, encrypted secrets at rest, and certificate management for OPC UA, MQTT and Kafka with a warning before a certificate expires.</Card>
        <Card span={2} to={docs('configure-operate-deployment')} icon={icons.activity} title="Operations" link="Deploy and operate">Metrics and logs for every adapter and pipeline, a Prometheus endpoint, a Helm chart that includes Prometheus and Grafana, and migrations that run on upgrade.</Card>
      </Bento>
      <p className={styles.enterpriseNote}>Also in the box: a terms-of-use screen after login, switches for self-registration and password recovery, and a configurable app name. All of it under the Apache license.</p>
    </Container>
  </Section>;
}

function Developers() {
  const [selected, setSelected] = useState(0);
  const tool = developerTools[selected];
  return <Section id="developers" tone="light" bordered>
    <Container>
      <SectionHead eyebrow="Developers" title={<>Use it from<br />code, too.</>} lead="The visual tools are the start. Python and Java clients, Functions for event-driven code and an SDK for your own extensions cover the rest." />
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
          <Headline level={2}>Up and running<br />in a few minutes.</Headline>
          <Lead>The command on the right downloads the Compose files for release {RELEASE.version} and starts StreamPipes with Docker. From there, the quickstart takes you from a first data source to a dashboard.</Lead>
          <Actions className={styles.ctaActions}><Button to={quickstart} size="large">Open the quickstart</Button><Button to="/download/" variant="secondary" size="large">All downloads</Button></Actions>
        </div>
        <CodePanel title="docker compose" language="bash" code={installCommand} wrap meta={`release ${RELEASE.version}`} />
      </div>
      <div className={styles.community}>
        <FeatureList items={[
          {icon: icons.github, title: 'GitHub Discussions', text: 'Questions, ideas, and showing what you built. The maintainers read it.', to: 'https://github.com/apache/streampipes/discussions'},
          {icon: icons.mail, title: 'Mailing lists', text: 'The user list for questions, the dev list for decisions. This is how Apache projects work.', to: '/community/mailing-lists/'},
          {icon: icons.help, title: 'Support and training', text: 'The community helps on GitHub. If you need guaranteed response times, companies around the project offer support contracts.', to: docs('community-get-help')},
          {icon: icons.code, title: 'Contribute', text: 'Code, docs, tests, ideas. Start with a discussion or pick an issue labelled good first issue.', to: '/community/get-involved/'},
        ]} />
      </div>
    </Container>
  </Section>;
}

export default function Homepage() {
  const {collectAnchor} = useBrokenLinks();
  ['platform', 'use-cases', 'architecture', 'architecture-overview', 'deployment', 'enterprise', 'developers', 'install'].forEach(collectAnchor);
  const stars = useGithubStars();
  return <div className={`${styles.home} sp-home`}>
    <main>
      <Hero stars={stars} />
      <Connectors />
      <Platform stars={stars} />
      <UseCases />
      <HowItWorks />
      <Architecture />
      <Deployment />
      <Enterprise />
      <Developers />
      <GetStarted />
    </main>
  </div>;
}
