import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Bento, Button, Card, CodePanel, Container, Headline, Lead, NumberedList, PageIntro, ScreenshotFrame, Section} from '../ui';
import styles from './usecases.module.css';

export type UseCase = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  summary: string;
  cover: {src: string; alt: string};
  problem: string[];
  steps: Array<{title: string; text: string}>;
  screenshots: Array<{src: string; alt: string; caption: string}>;
  extensions: Array<{name: string; id: string}>;
  related: Array<{label: string; to: string; text: string}>;
};

const RELEASE = '0.98.0';
const installCommand = `mkdir -p streampipes-${RELEASE} && cd streampipes-${RELEASE} \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${RELEASE}/installer/compose/docker-compose.yml \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/${RELEASE}/installer/compose/.env \\
  && docker compose up -d`;

export default function UseCasePage({useCase: u}: {useCase: UseCase}) {
  return <Layout title={u.title} description={u.summary}>
    <PageIntro eyebrow={`Use case · ${u.eyebrow}`} title={u.title} lead={u.lead} actions={<><Button to="/docs/quick-start-guide/">Try it with the quickstart</Button><Button to="/use-cases/" variant="ghost">All use cases</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container><ScreenshotFrame src={u.cover.src} alt={u.cover.alt} caption="Apache StreamPipes, demo data" priority /></Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div><Headline level={2}>The situation</Headline>{u.problem.map((p, i) => <p key={i} className={styles.prose}>{p}</p>)}</div>
          <div><Headline level={2}>How it works in StreamPipes</Headline><NumberedList items={u.steps.map(s => ({title: s.title, children: <p>{s.text}</p>}))} /></div>
        </div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>What it looks like</Headline></div>
        <div className={styles.shots}>{u.screenshots.map(s => <ScreenshotFrame key={s.src} src={s.src} alt={s.alt} caption={s.caption} />)}</div>
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div>
            <Headline level={2}>Extensions used</Headline>
            <Lead>All of these come with the standard installation.</Lead>
            <ul className={styles.chips}>{u.extensions.map(e => <li key={e.id}><Link to={`/docs/pe/org.apache.streampipes.${e.id}/`}>{e.name}</Link></li>)}</ul>
            <Button to="/integrations/" variant="ghost">Browse all integrations</Button>
          </div>
          <div>
            <Headline level={2}>Go deeper</Headline>
            <Bento className={styles.related}>{u.related.map(r => <Card key={r.to} span={6} to={r.to} title={r.label} link="Read">{r.text}</Card>)}</Bento>
          </div>
        </div>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.twoCol}>
          <div><Headline level={2}>Try it on your machine.</Headline><Lead>One command starts StreamPipes with Docker. The quickstart takes you from there to a first dashboard.</Lead><div className={styles.actions}><Button to="/docs/quick-start-guide/">Open the quickstart</Button><Button to="/download/" variant="secondary">All downloads</Button></div></div>
          <CodePanel title="docker compose" language="bash" code={installCommand} wrap meta={`release ${RELEASE}`} />
        </div>
      </Container>
    </Section>
  </Layout>;
}
