import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Button, Card, Container, Eyebrow, Headline, Lead, PageIntro, ScreenshotFrame, Section, SectionHead, Table} from '../components/ui';
import styles from './pages.module.css';

const topics = [
  {
    title: 'Single sign-on',
    lead: 'Log in through the identity provider you already run.',
    text: 'StreamPipes supports OpenID Connect and OAuth2. Configure one or more providers, such as Keycloak, Microsoft Entra ID or GitHub, through environment variables, map email, name and roles from token claims, and assign default roles to new users. Password login stays available alongside.',
    facts: ['OpenID Connect and OAuth2 providers', 'Several providers in parallel', 'Role mapping from token claims', 'Login method recorded in the audit log'],
    link: {label: 'Configure external identity providers', to: '/docs/configure-operate-security/'},
  },
  {
    title: 'Roles, groups and permissions',
    lead: 'Fine-grained control over who sees and changes what.',
    text: 'Built-in roles cover administrators, pipeline, dashboard, data explorer, connect and asset users; custom roles are composed from individual privileges. Groups make assignments reusable. Every resource has an owner and can be shared with users and groups, made public or exposed through a public link. Service accounts and API keys cover automation.',
    facts: ['Built-in and custom roles from fine-grained privileges', 'User groups for reusable assignments', 'Per-resource permissions with owners and public links', 'Service accounts and API keys for automation'],
    link: {label: 'Security and user management', to: '/docs/configure-operate-security/'},
    image: {src: '/img/home/security-edit-roles.webp', alt: 'Role editor with available and selected privileges', caption: 'Custom roles are composed from individual privileges.'},
  },
  {
    title: 'Audit log',
    lead: 'Who changed what, when, and how they signed in.',
    text: 'The audit log records logins and logouts, adapter, dataset, chart and dashboard changes, exports and imports, file uploads, mail configuration and security group changes. Review it in the Configuration area with filters, download it as CSV, JSON or Excel, and apply retention rules that delete or archive older entries on a schedule.',
    facts: ['Logins, resource changes, exports, security changes', 'Filterable view in the Configuration area', 'Download as CSV, JSON or Excel', 'Retention with delete, archive or both'],
    link: {label: 'General settings and configuration', to: '/docs/configure-operate-general-settings/'},
  },
  {
    title: 'Data retention and archival',
    lead: 'Keep the history you need, archive the rest.',
    text: 'Each dataset gets its own retention policy: delete entries older than a threshold, archive them to an export provider, or both, on a daily, weekly or monthly schedule, or on demand. Export providers write to a local folder or to S3-compatible object storage. Any dataset exports to CSV, JSON or Excel.',
    facts: ['Per-dataset policies: delete, archive or both', 'Daily, weekly, monthly or on demand', 'Archive to local folders or S3', 'Export as CSV, JSON or Excel'],
    link: {label: 'Datasets and retention', to: '/docs/use-datasets/'},
  },
  {
    title: 'Secured connections',
    lead: 'TLS where data moves, encryption where secrets rest.',
    text: 'The UI serves HTTPS, and the Kubernetes ingress supports TLS. Secrets stored in the platform are encrypted at rest. Certificates for OPC UA, MQTT and Kafka are managed in the Extension Services view, where server certificates are trusted or rejected and expiry alerts are sent by email. The OPC UA adapter can be restricted to secure endpoints only.',
    facts: ['HTTPS for the UI, TLS in the Kubernetes ingress', 'Encrypted secrets at rest', 'Certificate management with trust decisions and expiry alerts', 'Keystores and truststores for OPC UA, MQTT and Kafka'],
    link: {label: 'Extension services and certificates', to: '/docs/configure-operate-extension-services/'},
    image: {src: '/img/home/settings-extension-services.webp', alt: 'Extension services view with certificate management', caption: 'Certificates are trusted or rejected per extension service.'},
  },
  {
    title: 'Operations',
    lead: 'Run it like any other service in your landscape.',
    text: 'Adapters and pipelines expose metrics and logs in the UI, and a Prometheus endpoint feeds your monitoring. The Helm chart includes Prometheus and Grafana templates. Resources such as adapters, assets, dashboards, charts and files can be exported and imported between instances, and migrations run automatically when a new version is installed.',
    facts: ['Metrics and logs per adapter and pipeline', 'Prometheus endpoint, Helm chart with Prometheus and Grafana', 'Export and import of resources between instances', 'Automatic migrations on upgrade'],
    link: {label: 'Deploy and operate', to: '/docs/configure-operate-deployment/'},
  },
];

export default function Enterprise() {
  return <Layout title="Enterprise readiness" description="Apache StreamPipes for enterprise use: single sign-on with OpenID Connect, roles and permissions, audit log, dataset retention and archival, secured connections and operations, all under the Apache license.">
    <PageIntro eyebrow="Enterprise readiness" title="Ready for the plant. Ready for IT." lead="The controls an IT department expects, built into the open-source platform: identity, access control, audit trail, data lifecycle and secured connections. Everything is Apache licensed; nothing sits behind an enterprise tier." actions={<><Button to="/docs/configure-operate-security/">Security documentation</Button><Button to="/architecture/" variant="ghost">Architecture</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <ScreenshotFrame src="/img/home/security-overview.webp" alt="Security overview with user accounts, service accounts, groups and roles" width={1440} height={747} caption="Security overview: user accounts, service accounts, groups and roles" priority />
      </Container>
    </Section>
    {topics.map((t, i) => <Section key={t.title} tone={i % 2 === 0 ? 'tint' : 'light'} bordered>
      <Container>
        <div className={styles.twoCol}>
          <div>
            <Eyebrow>{t.title}</Eyebrow>
            <Headline level={2} className={styles.topicTitle}>{t.lead}</Headline>
            <p className={styles.prose}>{t.text}</p>
            <Button to={t.link.to} variant="ghost">{t.link.label}</Button>
          </div>
          <div>
            {t.image && <ScreenshotFrame src={t.image.src} alt={t.image.alt} caption={t.image.caption} className={styles.topicImage} />}
            <ul className={styles.factList}>{t.facts.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </Container>
    </Section>)}
    <Section tone="light" bordered>
      <Container>
        <SectionHead eyebrow="Also included" title={<>Small things<br />that matter in production.</>} />
        <Table head={['Capability', 'What it does']} rows={[
          ['Terms acknowledgment', 'Require users to accept terms of use after login, with your own title and text.'],
          ['Self-registration and password recovery', 'Toggle both in General Settings and define the default roles for new accounts.'],
          ['JWT signing', 'HMAC or RSA signing for tokens; generate and download a key pair from the UI.'],
          ['Email templates', 'Editable templates for password recovery and notifications.'],
          ['App name and links', 'Set the platform name and the documentation and support links shown on the login page.'],
          ['Certificate expiry alerts', 'Scheduled checks send an email before a trusted certificate expires.'],
        ]} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div><Headline level={2}>Need more than community support?</Headline><Lead>The community answers on GitHub Discussions and the mailing lists. Companies around the project offer support, training and development with guaranteed response times.</Lead></div>
          <Bento>
            <Card span={3} to="/docs/community-get-help/" title="Support options" link="Read">Community channels and commercial support providers.</Card>
            <Card span={3} to="/download/" title="Install StreamPipes" link="Download">Source release, Compose shortcuts and nightly builds.</Card>
          </Bento>
        </div>
      </Container>
    </Section>
  </Layout>;
}
