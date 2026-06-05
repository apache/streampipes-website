import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PageSection from '../../components/PageSection';
import PageHeader from '../../components/PageHeader';

const Team: FC = () => {
  const {siteConfig} = useDocusaurusContext();
  const {team} = siteConfig.customFields as { team: any[] };

  const teamMemberSection = team.map(member => {
    return (
      <div className="col-lg-4 col-md-6 col-12" key={member.github}>
        <div className="team-card">
          <div className="team-thumbnail">
            <img src={member.imageSrc} alt={`${member.name} GitHub profile`} />
          </div>
          <div className="team-member-name">
            <h4>{member.name}</h4>
            <div className="team-meta">
              <span className={`team-role-badge ${member.pmc ? 'team-role-pmc' : 'team-role-committer'}`}>
                {member.pmc ? 'PMC' : 'Committer'}
              </span>
            </div>
            <a
              className="team-github-link"
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noreferrer"
            >
              @{member.github}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout title={'Team'}>
      <PageHeader title={'Team'} subtitle={'Committers and PMC members active in the Apache StreamPipes project'}></PageHeader>
      <PageSection backgroundClass={"background-white"} sectionTitle={"StreamPipes Committers"}>
        <h5 className="section-subtitle">
          Get to know our team! The list of team members is ordered by contribution count (which is periodically updated) in the <code>apache/streampipes</code> repository history.
        </h5>

        <div className="row">
          {teamMemberSection}
        </div>
      </PageSection>
    </Layout>
  );
};

export default Team;
