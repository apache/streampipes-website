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
    <PageIntro eyebrow="Download" title="Install Apache StreamPipes" lead="The source release is the official download. If you just want to try StreamPipes, the Compose commands further down start a complete instance in one go. You need Docker with Compose on Linux, macOS or Windows." />
    <Section tone="light" className={styles.compact}>
      <Container>
        <DownloadSection version={RELEASE.version} releaseDate={RELEASE.date} showMoreInfo />
        <p className={styles.note}>A note on versions: the <a href="/docs/0.98.0/user-guide-introduction/">0.98.0 documentation</a> matches this release. The default <a href="/docs/user-guide-introduction/">documentation</a> and the screenshots on this site show the upcoming release, called Next, which you can run with the nightly build below.</p>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>One command, running instance.</Headline><Lead>Each command creates a folder, downloads the Compose file and the environment file, and starts the default setup. Edit the environment file before you use an instance for real.</Lead></div>
        <div className={styles.twoCol}>
          <div><h3 className={styles.h3}>Latest release {RELEASE.version}</h3><p className={styles.p}>The current release with the default NATS setup.</p><CodePanel title="docker compose" language="bash" code={compose(RELEASE.version)} wrap meta={`release ${RELEASE.version}`} /></div>
          <div><h3 className={styles.h3}>Nightly build</h3><p className={styles.p}>Follows the dev branch. No guarantees, and things can break between builds.</p><CodePanel title="docker compose" language="bash" code={compose('dev')} wrap meta="dev branch" /></div>
        </div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <Bento>
          <Card span={2} to="/docs/quick-start-guide/" title="After installation" link="Open the quickstart">Create a first adapter, store its data, build a chart and put it on a dashboard.</Card>
          <Card span={2} to="/docs/configure-operate-deployment/" title="Production deployments" link="Deployment options">Kubernetes with the Helm chart, Kafka instead of NATS, extension services next to the machines.</Card>
          <Card span={2} to="/docs/community-get-help/" title="Need help?" link="Support channels">GitHub Discussions, the user mailing list, and companies that offer support contracts.</Card>
        </Bento>
      </Container>
    </Section>
  </Layout>;
}
