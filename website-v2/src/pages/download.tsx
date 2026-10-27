import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Card, CodePanel, Container, Headline, Lead, PageIntro, Section} from '../components/ui';
import DownloadSection from '../components/download/DownloadSection';
import styles from './pages.module.css';

const RELEASE = {version: '0.98.0', date: '15 December 2025'};
const compose = (ref: string) => `mkdir -p streampipes-${ref} && cd streampipes-${ref} \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${ref}/installer/compose/docker-compose.yml \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${ref}/installer/compose/.env \\
  && docker compose up -d`;

export default function Download() {
  return <Layout title="Download" description="Download the Apache StreamPipes source release or start the latest release and nightly builds with a single Docker Compose command.">
    <PageIntro eyebrow="Download" title="Install Apache StreamPipes" lead="The official source release is the standard path. For a quick evaluation, the Compose shortcuts below start a complete instance with one command. Docker with Compose on Linux, macOS or Windows is all you need." />
    <Section tone="light" className={styles.compact}>
      <Container>
        <DownloadSection version={RELEASE.version} releaseDate={RELEASE.date} showMoreInfo />
        <p className={styles.note}>Which docs apply? The <a href="/docs/0.98.0/user-guide-introduction/">0.98.0 documentation</a> matches this release. The default <a href="/docs/user-guide-introduction/">documentation</a> and the screenshots on this site describe the upcoming release, labelled "Next", which you can try with the nightly build below.</p>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>One command, running instance.</Headline><Lead>Each shortcut creates a folder, downloads the Compose file and its environment file, and starts the default setup. Change the environment file before using an instance in production.</Lead></div>
        <div className={styles.twoCol}>
          <div><h3 className={styles.h3}>Latest release {RELEASE.version}</h3><p className={styles.p}>Pinned to the current release with the NATS-based default setup.</p><CodePanel title="docker compose" language="bash" code={compose(RELEASE.version)} wrap meta={`release ${RELEASE.version}`} /></div>
          <div><h3 className={styles.h3}>Nightly build</h3><p className={styles.p}>Tracks the dev branch. No guarantees, and it can include breaking changes.</p><CodePanel title="docker compose" language="bash" code={compose('dev')} wrap meta="dev branch" /></div>
        </div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <Bento>
          <Card span={2} to="/docs/quick-start-guide/" title="After installation" link="Open the quickstart">Create your first adapter, persist a dataset, build a chart and place it on a dashboard.</Card>
          <Card span={2} to="/docs/configure-operate-deployment/" title="Production deployments" link="Deployment options">Kubernetes with the Helm chart, Kafka instead of NATS, and extension services next to your machines.</Card>
          <Card span={2} to="/docs/community-get-help/" title="Need help?" link="Support channels">GitHub Discussions, the user mailing list, and commercial support from companies around the project.</Card>
        </Bento>
      </Container>
    </Section>
  </Layout>;
}
