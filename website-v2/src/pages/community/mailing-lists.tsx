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
    <PageIntro eyebrow="Community" title="Mailing lists" lead="Mailing lists are where Apache projects discuss and decide. Send an empty email to the subscribe address, confirm the reply, and you are in. Archives are public." />
    <Section tone="light" className={styles.compact}>
      <Container>
        <div className={styles.head}><Headline level={2}>Users</Headline><Lead>You use StreamPipes and have questions, problems or feature requests? The community answers on the user list.</Lead></div>
        <Table head={head} rows={[list('users')]} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Developers</Headline><Lead>Interested in contributing? Subscribe to the developer list for design discussions and votes, and to the commits list to follow every change.</Lead></div>
        <Table head={head} rows={[list('dev'), list('commits')]} />
      </Container>
    </Section>
  </Layout>;
}
