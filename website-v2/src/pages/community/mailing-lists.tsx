import React from 'react';
import Layout from '@theme/Layout';
import {Container, Headline, Lead, PageIntro, Section, Table} from '../../components/ui';
import styles from '../pages.module.css';

const list = (name: string) => [
  <code>{name}@streampipes.apache.org</code>,
  <a href={`mailto:${name}-subscribe@streampipes.apache.org`}>Subscribe</a>,
  <a href={`mailto:${name}-unsubscribe@streampipes.apache.org`}>Unsubscribe</a>,
  <a href={`mailto:${name}@streampipes.apache.org`}>Post</a>,
  <a href={`https://lists.apache.org/list.html?${name}@streampipes.apache.org`}>Archive</a>,
];
const head = ['List', 'Subscribe', 'Unsubscribe', 'Post', 'Archive'];

export default function MailingLists() {
  return <Layout title="Mailing lists" description="Subscribe to the Apache StreamPipes user and developer mailing lists to ask questions, follow development and take part in decisions.">
    <PageIntro eyebrow="Community" title="Mailing lists" lead="Apache projects discuss and decide on mailing lists. To subscribe, send an empty email to the subscribe address and confirm the reply. The archives are public." />
    <Section tone="light" className={styles.compact}>
      <Container>
        <div className={styles.head}><Headline level={2}>Users</Headline><Lead>Questions, problems, feature requests: the user list is where the community answers.</Lead></div>
        <Table head={head} rows={[list('users')]} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Developers</Headline><Lead>Want to contribute? The dev list carries design discussions and votes. The commits list gets a mail for every change.</Lead></div>
        <Table head={head} rows={[list('dev'), list('commits')]} />
      </Container>
    </Section>
  </Layout>;
}
