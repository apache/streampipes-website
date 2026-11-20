import {nightlyComposeCommand, nightlyWindowsCommand, releaseComposeCommand} from '../components/download/composeCommands';
import React, {useState} from 'react';
import Layout from '@theme/Layout';
import {Bento, Card, CodePanel, Container, Headline, Lead, PageIntro, Section} from '../components/ui';
import DownloadSection from '../components/download/DownloadSection';
import styles from './pages.module.css';

const RELEASE = {version: '0.98.0', date: '15 December 2025'};


export default function Download() {
  const [build, setBuild] = useState('release');
  const [platform, setPlatform] = useState('unix');
  const nightly = build === 'nightly';
  const windows = platform === 'windows';
  const folder = nightly ? 'streampipes-dev' : `streampipes-${RELEASE.version}`;
  const command = nightly
    ? (windows ? nightlyWindowsCommand : nightlyComposeCommand)
    : releaseComposeCommand(RELEASE.version, windows ? 'curl.exe' : 'curl');
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
        <div className={styles.head}>
          <Headline level={2}>One command, running instance.</Headline>
          <Lead>Start a fresh installation with curl and Docker Compose v2.</Lead>
        </div>
        <div className={styles.installer}>
          <div className={styles.installOptions}>
            <fieldset>
              <legend>Build</legend>
              <label><input type="radio" name="build" checked={!nightly} onChange={() => setBuild('release')} />Latest release · {RELEASE.version}</label>
              <label><input type="radio" name="build" checked={nightly} onChange={() => setBuild('nightly')} />Nightly build</label>
            </fieldset>
            <label className={styles.platform}>Platform
              <select value={platform} onChange={event => setPlatform(event.target.value)}>
                <option value="unix">Linux / macOS</option>
                <option value="windows">Windows Command Prompt</option>
              </select>
            </label>
          </div>
          <div className={styles.installResult}>
            <CodePanel title={windows ? 'Windows Command Prompt' : 'Terminal'} language={windows ? 'batch' : 'bash'} code={command} wrap meta={nightly ? 'dev branch' : RELEASE.version} />
            <h3 className={styles.h3}>Sign in</h3>
            <p>Open <a href="http://localhost">localhost</a> and sign in as <code>admin@streampipes.apache.org</code>. {nightly
              ? <>Use the value of <code>SP_INITIAL_ADMIN_PASSWORD</code> in <code>{folder}/.env</code>.</>
              : <>The initial password is <code>admin</code>.</>}</p>
          </div>
        </div>
        <p className={styles.restartNote}>Restarting an existing installation? Use its original installer directory and <code>.env</code> file.</p>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <Bento>
          <Card span={2} to="/docs/quick-start-guide/" title="After installation" link="Open the quickstart">Create a first adapter, store its data, build a chart and put it on a dashboard.</Card>
          <Card span={2} to="/docs/configure-operate-deployment/" title="Production deployments" link="Deployment options">Kubernetes with the Helm chart and extension services next to the machines.</Card>
          <Card span={2} to="/docs/community-get-help/" title="Need help?" link="Support channels">GitHub Discussions, the user mailing list, and companies that offer support contracts.</Card>
        </Bento>
      </Container>
    </Section>
  </Layout>;
}
