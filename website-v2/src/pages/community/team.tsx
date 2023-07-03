import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import PageSection from '../../components/PageSection';
import PageHeader from '../../components/PageHeader';


const Team: FC = () => {

  const {siteConfig} = useDocusaurusContext();
  const {team} = siteConfig.customFields as { team: any[] };

  const teamMemberSection = team.map(member => {
      return (
        <div className="col-md-4 col-12">
          <div className="single-team-slide text-center">
            <div className="team-thumbnail">
              <img src={member.imageSrc} alt=""/>
            </div>
            <div className="team-member-name">
              <h4>{member.name}</h4>
            </div>
          </div>
        </div>
      );
  });

  return (
    <Layout title={'Team'}>
      <PageHeader title={'Team'}></PageHeader>
      <PageSection backgroundClass={"background-white"} sectionTitle={"StreamPipes Committers"}>
        <h5 className="section-subtitle">Current committers, sorted by last name:</h5>

        <div className="row wrap">
          {teamMemberSection}
        </div>
      </PageSection>
    </Layout>
)
}


export default Team;
