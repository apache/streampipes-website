import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Bento, Button, Card, Container, Eyebrow, Headline, Lead, PageIntro, ScreenshotFrame, Section, SectionHead} from '../components/ui';
import styles from './pages.module.css';

const img = (name: string) => `/img/home/${name}.webp`;

const features = [
  {
    id: 'connect', eyebrow: 'Connect', title: 'Bring your machines into the picture.',
    text: 'Adapters connect industrial equipment, message brokers, databases, files and software systems. A guided setup shows incoming events before anything is saved, and the schema editor fixes field names, types, measurement units and metadata once, so every pipeline, chart and dashboard builds on the same description.',
    facts: ['OPC UA with node browser and alarms, Siemens S7, Modbus and other PLC4X protocols', 'MQTT, Kafka, Pulsar, NATS, files, HTTP and database adapters', 'Live event preview, schema refinement and unit conversion', 'Adapter metrics, logs and lifecycle control'],
    shots: [{src: img('connect-create-select-adapter'), alt: 'Adapter library', caption: 'Pick an adapter from the library.'}, {src: img('connect-create-configure-schema-example'), alt: 'Schema editor with field types and units', caption: 'Refine the schema with types, units and metadata.'}],
    link: '/docs/use-connect/',
  },
  {
    id: 'pipelines', eyebrow: 'Pipelines', title: 'Turn incoming events into actions.',
    text: 'The visual editor connects streams, processors and sinks from left to right. Compatibility checks only allow elements that fit the incoming schema, each element is configured against the real fields, and a live preview shows the result. Pipelines run as monitored components with metrics and logs, and templates standardize recurring patterns.',
    facts: ['Filter, enrich, detect, aggregate and route in real time', 'Validated against the stream schema before it runs', 'Live preview, metrics and logs per pipeline', 'Templates and pipelines as code for reuse'],
    shots: [{src: img('pipeline-editor-example'), alt: 'Pipeline editor with a trend detection and notification pipeline', caption: 'Detect a trend, notify a team, store the data.'}, {src: img('pipeline-details'), alt: 'Pipeline details with metrics and logs', caption: 'Operate pipelines from the details view.'}],
    link: '/docs/use-pipelines/',
  },
  {
    id: 'datasets', eyebrow: 'Datasets', title: 'Make live data useful for the long run.',
    text: 'Datasets are persisted streams. Check freshness and size, preview stored events, import CSV files when the live connection is not the start, and download data when it must leave the platform. Retention policies delete or archive older data on a schedule, with export providers that write to local folders or S3.',
    facts: ['Persist any stream with one setting', 'Import CSV, export CSV, JSON or Excel', 'Retention: delete, archive or both, daily to monthly', 'Permissions per dataset'],
    shots: [{src: img('dataset-overview'), alt: 'Dataset workspace', caption: 'One place for stored events, retention and export.'}, {src: img('dataset-export-provider-dialog-s3'), alt: 'S3 export provider configuration', caption: 'Archive to S3 with reusable export providers.'}],
    link: '/docs/use-datasets/',
  },
  {
    id: 'charts', eyebrow: 'Charts', title: 'Ask better questions of your data.',
    text: 'A chart starts with a dataset, becomes a query with fields, filters, grouping and aggregation, and ends in a visualization that matches the question. Time series, heatmaps, distributions, gauges, tables, status and traffic-light charts cover the typical industrial views.',
    facts: ['Raw, aggregated and single-value queries', 'Fields, filters, grouping, order and time selection', 'Time series, heatmaps, histograms, gauges, tables and more', 'Saved charts are reused across dashboards'],
    shots: [{src: img('chart-timeseries'), alt: 'Time-series chart editor', caption: 'From a dataset to a query, from a query to a chart.'}, {src: img('chart-status-heatmap'), alt: 'Status heatmap chart', caption: 'Status heatmaps show state changes over time.'}],
    link: '/docs/use-charts/',
  },
  {
    id: 'dashboards', eyebrow: 'Dashboards', title: 'Give your team a shared operational view.',
    text: 'Dashboards arrange saved charts into one screen for a machine, a line or a process. Grid and slide views, shared time settings across charts, a kiosk mode for the shop floor, and links to assets make them easy to find and easy to keep on a wall.',
    facts: ['Grid or slide layouts', 'Shared time range across charts', 'Kiosk mode and cloning', 'Linked to assets and governed by permissions'],
    shots: [{src: img('dashboard-create'), alt: 'Dashboard with gauge, chart and status indicator', caption: 'Individual charts, one coordinated view.'}, {src: img('dashboard-preview'), alt: 'Dashboard in preview mode', caption: 'Preview and kiosk mode for operators.'}],
    link: '/docs/use-dashboards/',
  },
  {
    id: 'assets', eyebrow: 'Assets and sites', title: 'Put every dataset in its industrial context.',
    text: 'Model plants, lines, stations and machines as assets, place them at sites with locations, and link adapters, datasets, pipelines, charts and dashboards to them. Operators start from the machine they care about and find the resources that belong to it, on a map or in a table.',
    facts: ['Nested assets and reusable site structures', 'Labels, custom fields and locations', 'Links to streams, datasets, pipelines, charts and dashboards', 'Map and table views on the home screen'],
    shots: [{src: img('asset-asset-link-overview'), alt: 'Asset with linked resources', caption: 'Start from the machine, find its data.'}, {src: img('home-map'), alt: 'Home screen with assets on a map', caption: 'Assets and sites on the map.'}],
    link: '/docs/use-assets/',
  },
  {
    id: 'administration', eyebrow: 'Administration', title: 'Run it as a platform, not a tool.',
    text: 'Install and update extensions at runtime, manage extension services and their certificates, configure users, roles, groups and permissions, set instance-wide options such as self-registration and terms of use, review the audit log, and export or import resources between instances.',
    facts: ['Extensions installed and updated at runtime', 'Users, roles, groups, service accounts and API keys', 'Audit log, email templates, terms acknowledgment', 'Export and import of resources'],
    shots: [{src: img('settings-extensions'), alt: 'Extensions catalog in the configuration area', caption: 'Install adapters, processors and sinks at runtime.'}, {src: img('security-overview'), alt: 'Security overview', caption: 'Accounts, groups and roles in one place.'}],
    link: '/docs/configure-operate-general-settings/',
  },
];

export default function Features() {
  return <Layout title="Features" description="Apache StreamPipes features: connect industrial data sources, build real-time pipelines, persist datasets with retention, create charts and dashboards, model assets and sites, and administer the platform.">
    <PageIntro eyebrow="Features" title="One platform. The whole data journey." lead="From the first machine connection to the dashboard on the shop floor, every step is built in. This page walks through the modules of StreamPipes as they appear in the product; the documentation has the details for each." actions={<><Button to="/docs/quick-start-guide/">Try it with the quickstart</Button><Button to="/use-cases/" variant="ghost">See the use cases</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <nav className={styles.jumpList} aria-label="Features on this page">{features.map(f => <a key={f.id} href={`#${f.id}`}>{f.eyebrow}</a>)}</nav>
      </Container>
    </Section>
    {features.map((f, i) => <Section key={f.id} id={f.id} tone={i % 2 === 0 ? 'tint' : 'light'} bordered>
      <Container>
        <div className={styles.twoCol}>
          <div>
            <Eyebrow>{f.eyebrow}</Eyebrow>
            <Headline level={2} className={styles.topicTitle}>{f.title}</Headline>
            <p className={styles.prose}>{f.text}</p>
            <ul className={styles.factList}>{f.facts.map(x => <li key={x}>{x}</li>)}</ul>
            <div className={styles.actionsRow}><Button to={f.link} variant="ghost">{f.eyebrow} in the docs</Button></div>
          </div>
          <div className={styles.shotStack}>{f.shots.map(s => <ScreenshotFrame key={s.src} src={s.src} alt={s.alt} caption={s.caption} />)}</div>
        </div>
      </Container>
    </Section>)}
    <Section tone="tint" bordered>
      <Container>
        <SectionHead eyebrow="Beyond the UI" title={<>Integrate. Automate.<br />Extend.</>} lead="Everything on this page is also reachable from code: Python and Java clients, the REST API, Functions for event-driven logic, and an SDK for your own adapters, processors and sinks." />
        <Bento>
          <Card span={2} to="/integrations/" title="Integrations" link="Browse the catalog">All adapters, processors and sinks that ship with the platform.</Card>
          <Card span={2} to="/#developers" title="Developer tools" link="Clients, Functions, SDK">Python and Java clients, Functions and the extension SDK.</Card>
          <Card span={2} to="/enterprise/" title="Enterprise readiness" link="Identity, audit, security">Single sign-on, roles, audit log, retention and secured connections.</Card>
        </Bento>
      </Container>
    </Section>
  </Layout>;
}
