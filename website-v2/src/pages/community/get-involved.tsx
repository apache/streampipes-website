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
    <PageIntro eyebrow="Community" title="Get involved" lead="StreamPipes grows through its community. You do not need to start with a large feature: bug reports, documentation improvements, testing, UI refinements, example updates and small fixes all move the project forward." actions={<><Button href="https://github.com/apache/streampipes/issues" variant="secondary">Browse open issues</Button><Button href="https://github.com/apache/streampipes/discussions" variant="ghost">Start a discussion</Button></>} />
    <Section tone="light" className={styles.compact}>
      <Container>
        <NumberedList items={[
          {title: 'Start with a discussion', children: <p>If you want feedback on an idea, need product context, or want to know whether work is already in progress, ask on the <a href="/community/mailing-lists/">mailing lists</a> or in <a href="https://github.com/apache/streampipes/discussions">GitHub Discussions</a> before opening a larger pull request.</p>},
          {title: 'Pick an issue or report one', children: <p>Contributions often begin with an issue. Report bugs, propose improvements, or look for an existing task in the <a href="https://github.com/apache/streampipes/issues">issue tracker</a> that matches your interest.</p>},
          {title: 'Open a pull request', children: <p>Open a focused pull request against the relevant repository and describe motivation, scope and follow-up work. Smaller, single-topic pull requests are easier to review and integrate.</p>},
        ]} />
      </Container>
    </Section>
    <Section tone="tint" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Where things happen.</Headline><Lead>Choose the channel that fits the kind of contribution.</Lead></div>
        <Bento>
          <Card span={2} to="/community/mailing-lists/" title="Mailing lists" link="Open mailing lists">Design discussions, contributor questions and decisions that should be easy to reference later. The Apache way.</Card>
          <Card span={2} href="https://github.com/apache/streampipes/discussions" title="GitHub Discussions" link="Open discussions">Questions, ideas and early feedback when you want a low-friction conversation around a possible contribution.</Card>
          <Card span={2} href="https://github.com/apache/streampipes/issues" title="GitHub Issues" link="Browse issues">Actionable bugs, feature requests and work items that should be tracked explicitly in the project backlog.</Card>
        </Bento>
      </Container>
    </Section>
    <Section tone="light" bordered>
      <Container>
        <div className={styles.head}><Headline level={2}>Source code.</Headline><Lead>The main repositories for code, documentation and examples.</Lead></div>
        <Table head={['Repository', 'What it contains', 'Link']} rows={repositories.map(([name, text, link]) => [<code>{name}</code>, text, <a href={link}>Open repository</a>])} />
      </Container>
    </Section>
  </Layout>;
}
