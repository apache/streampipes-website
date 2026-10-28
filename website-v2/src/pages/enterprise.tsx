import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Button, Card, Container, Eyebrow, Headline, Lead, PageIntro, ScreenshotFrame, Section, SectionHead, Table} from '../components/ui';
import styles from './pages.module.css';

const topics = [
  {
    title: 'Single sign-on',
    lead: 'Sign in with the identity provider you already have.',
    text: 'StreamPipes supports OpenID Connect and OAuth2. Providers such as Keycloak, Microsoft Entra ID or GitHub are configured through environment variables. You can set up several side by side, take email, name and roles from token claims, and give new users default roles. Password login stays available.',
    facts: ['OpenID Connect and OAuth2 providers', 'Several providers in parallel', 'Role mapping from token claims', 'Login method recorded in the audit log'],
    link: {label: 'Configure external identity providers', to: '/docs/configure-operate-security/'},
  },
  {
    title: 'Roles, groups and permissions',
    lead: 'Decide who sees and changes what.',
    text: 'Built-in roles cover administrators and the pipeline, dashboard, data explorer, connect and asset areas. Custom roles are put together from individual privileges, and groups make assignments reusable. Every resource has an owner and can be shared with users or groups, made public, or exposed through a link. Service accounts and API keys cover scripts and integrations.',
    facts: ['Built-in and custom roles from fine-grained privileges', 'User groups for reusable assignments', 'Per-resource permissions with owners and public links', 'Service accounts and API keys for automation'],
    link: {label: 'Security and user management', to: '/docs/configure-operate-security/'},
    image: {src: '/img/home/security-edit-roles.webp', alt: 'Role editor with available and selected privileges', caption: 'Custom roles are composed from individual privileges.'},
  },
  {
    title: 'Audit log',
    lead: 'A record of who changed what.',
    text: 'The audit log records logins and logouts, changes to adapters, datasets, charts and dashboards, exports and imports, file uploads, mail settings and security groups. You read it in the Configuration area with filters, download it as CSV, JSON or Excel, and give it a retention rule so it does not grow forever.',
    facts: ['Logins, resource changes, exports, security changes', 'Filterable view in the Configuration area', 'Download as CSV, JSON or Excel', 'Retention with delete, archive or both'],
    link: {label: 'General settings and configuration', to: '/docs/configure-operate-general-settings/'},
  },
  {
    title: 'Data retention and archival',
    lead: 'Keep what you need, archive the rest.',
    text: 'Each dataset gets its own retention policy: delete entries older than a threshold, archive them to an export provider, or both, on a daily, weekly or monthly schedule or whenever you trigger it. Export providers write to a local folder or to S3-compatible storage. Any dataset can be exported as CSV, JSON or Excel.',
    facts: ['Per-dataset policies: delete, archive or both', 'Daily, weekly, monthly or on demand', 'Archive to local folders or S3', 'Export as CSV, JSON or Excel'],
    link: {label: 'Datasets and retention', to: '/docs/use-datasets/'},
  },
  {
    title: 'Secured connections',
    lead: 'Encrypted on the wire and at rest.',
    text: 'The UI serves HTTPS and the Kubernetes ingress supports TLS. Secrets stored in the platform are encrypted. Certificates for OPC UA, MQTT and Kafka are handled in the Extension Services view, where you trust or reject a server certificate and get an email before one expires. The OPC UA adapter can be limited to secure endpoints.',
    facts: ['HTTPS for the UI, TLS in the Kubernetes ingress', 'Encrypted secrets at rest', 'Certificate management with trust decisions and expiry alerts', 'Keystores and truststores for OPC UA, MQTT and Kafka'],
    link: {label: 'Extension services and certificates', to: '/docs/configure-operate-extension-services/'},
    image: {src: '/img/home/settings-extension-services.webp', alt: 'Extension services view with certificate management', caption: 'Certificates are trusted or rejected per extension service.'},
  },
  {
    title: 'Operations',
    lead: 'Operate it like your other services.',
    text: 'Adapters and pipelines show metrics and logs in the UI, and a Prometheus endpoint feeds your monitoring. The Helm chart comes with Prometheus and Grafana templates. Adapters, assets, dashboards, charts and files can be exported and imported between instances, and migrations run on their own when you install a new version.',
    facts: ['Metrics and logs per adapter and pipeline', 'Prometheus endpoint, Helm chart with Prometheus and Grafana', 'Export and import of resources between instances', 'Automatic migrations on upgrade'],
    link: {label: 'Deploy and operate', to: '/docs/configure-operate-deployment/'},
  },
];

export default function Enterprise() {
  return <Layout title="Enterprise readiness" description="Apache StreamPipes for enterprise use: single sign-on with OpenID Connect, roles and permissions, audit log, dataset retention and archival, secured connections and operations, all under the Apache license.">
    <PageIntro eyebrow="Enterprise readiness" title="The things IT will ask about." lead="Single sign-on, roles and permissions, an audit log, retention rules and encrypted connections are part of the platform. There is no separate enterprise edition; everything on this page is in the Apache-licensed release." actions={<><Button to="/docs/configure-operate-security/">Security documentation</Button><Button to="/architecture/" variant="ghost">Architecture</Button></>} />
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
        <SectionHead eyebrow="Also included" title={<>Smaller things<br />you will still want.</>} />
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
          <div><Headline level={2}>If community support is not enough.</Headline><Lead>The community answers on GitHub Discussions and the mailing lists. Several companies around the project offer support contracts, training and development.</Lead></div>
          <Bento>
            <Card span={3} to="/docs/community-get-help/" title="Support options" link="Read">Community channels and companies that offer support.</Card>
            <Card span={3} to="/download/" title="Install StreamPipes" link="Download">Source release, one-command Compose setup and nightly builds.</Card>
          </Bento>
        </div>
      </Container>
    </Section>
  </Layout>;
}
