import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Container, Lead, PageIntro, Section} from '../../components/ui';
import styles from '../pages.module.css';

type Member = {name: string; github: string; pmc: boolean; contributions: number; imageSrc: string};

export default function Team() {
  const {siteConfig} = useDocusaurusContext();
  const team = (siteConfig.customFields as {team: Member[]}).team;
  return <Layout title="Team" description="Committers and PMC members of the Apache StreamPipes project.">
    <PageIntro eyebrow="Community" title="Team" lead="Committers and members of the Project Management Committee (PMC). The list is ordered by contribution count in the main repository and updated periodically." />
    <Section tone="light" className={styles.compact}>
      <Container>
        <div className={styles.teamGrid}>
          {team.map(member => <a key={member.github} className={styles.member} href={`https://github.com/${member.github}`} target="_blank" rel="noreferrer">
            <img src={member.imageSrc} alt="" loading="lazy" width="64" height="64" />
            <strong>{member.name}</strong>
            <span>@{member.github}</span>
            <span className={`${styles.role} ${member.pmc ? styles.rolePmc : ''}`}>{member.pmc ? 'PMC member' : 'Committer'}</span>
          </a>)}
        </div>
        <Lead className={styles.teamNote}>Want to join? Sustained contributions of any kind, code, documentation, reviews or community support, are how committers are invited. Start on the <a href="/community/get-involved/">get involved</a> page.</Lead>
      </Container>
    </Section>
  </Layout>;
}
