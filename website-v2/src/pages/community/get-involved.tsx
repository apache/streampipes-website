import React from 'react';
import Layout from '@theme/Layout';
import {Bento, Button, Card, Container, Headline, Lead, NumberedList, PageIntro, Section, Table} from '../../components/ui';
import styles from '../pages.module.css';

const repositories = [
  ['streampipes', 'Core platform, extension services, backend components and the main UI application.', 'https://github.com/apache/streampipes'],
  ['streampipes-website', 'Website, product pages, and user and developer documentation.', 'https://github.com/apache/streampipes-website'],
  ['streampipes-examples', 'Example projects, sample extensions and reference material for contributors.', 'https://github.com/apache/streampipes-examples'],
];

export default function GetInvolved() {
  return <Layout title="Get involved" description="Contribute code, documentation, ideas and feedback to Apache StreamPipes. Where to start, which channels to use, and the main repositories.">
    <PageIntro eyebrow="Community" title="Get involved" lead="StreamPipes is built by its community. You do not need a big feature to get started: bug reports, better docs, testing, small UI fixes and updated examples all help." actions={<><Button href="https://github.com/apache/streampipes/issues" variant="secondary">Browse open issues</Button><Button href="https://github.com/apache/streampipes/discussions" variant="ghost">Start a discussion</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <NumberedList items={[
          {title: 'Start with a discussion', children: <p>Before you start on something larger, ask on the <a href="/community/mailing-lists/">mailing lists</a> or in <a href="https://github.com/apache/streampipes/discussions">GitHub Discussions</a>. You get feedback on the idea, and you find out whether someone is already working on it.</p>},
          {title: 'Pick an issue or report one', children: <p>Many contributions start from an issue. Report a bug, propose an improvement, or pick an open issue in the <a href="https://github.com/apache/streampipes/issues">tracker</a> that matches what you know.</p>},
          {title: 'Open a pull request', children: <p>Open a pull request against the right repository and explain what it changes and why. Small, focused pull requests get reviewed faster.</p>},
        ]} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Where things happen.</Headline><Lead>Pick the channel that fits what you want to do.</Lead></div>
        <Bento>
          <Card span={2} to="/community/mailing-lists/" title="Mailing lists" link="Open mailing lists">Design discussions, contributor questions, and decisions that people should be able to find later. This is how Apache projects work.</Card>
          <Card span={2} href="https://github.com/apache/streampipes/discussions" title="GitHub Discussions" link="Open discussions">Questions, ideas and early feedback, when you want a quick conversation before committing to anything.</Card>
          <Card span={2} href="https://github.com/apache/streampipes/issues" title="GitHub Issues" link="Browse issues">Bugs, feature requests and tasks that should be tracked.</Card>
        </Bento>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Source code.</Headline><Lead>The repositories for code, documentation and examples.</Lead></div>
        <Table head={['Repository', 'What it contains', 'Link']} rows={repositories.map(([name, text, link]) => [<code>{name}</code>, text, <a href={link}>Open repository</a>])} />
      </Container>
    </Section>
  </Layout>;
}
