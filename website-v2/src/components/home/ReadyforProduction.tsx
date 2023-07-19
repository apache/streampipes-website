import React, { FC } from 'react';
import PageSection from '../PageSection';
import Subsection from '../Subsection';
import TwoColumnFeatureSection from '../TwoColumnFeatureSection';

const ReadyforProduction = (props) => (
  <>
    <PageSection sectionTitle={"Ready for production. Out of the box."} lightMode
                 sectionSubtitle={"Other features"} backgroundClass={"background-primary"}>

      <TwoColumnFeatureSection>
        <Subsection title={"User Management"}>
          <p className={"text-left text-light"}>
            User management is included and can be configured directly from the user interface.
          </p>
          <p className={"text-left text-light"}>
            StreamPipes supports the management of users, groups and permissions, so that access to views can be individually restricted.
          </p>
        </Subsection>
        <div>
          <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/streampipes-user-management.png"} alt={"User Management"}/>
        </div>
      </TwoColumnFeatureSection>

      <TwoColumnFeatureSection>
        <div>
          <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/streampipes-mail-configuration.png"} alt={"Mail Configuration"}/>
        </div>
        <Subsection title={"Email & notifications"}>
          <p className={"text-left text-light"}>
            StreamPipes can be configured to send emails, e.g., as notifications directly from the pipeline editor.
          </p>
          <p className={"text-left text-light"}>
            With configured email settings, user self-registration and password recovery can be activated.
          </p>
        </Subsection>
      </TwoColumnFeatureSection>

      <TwoColumnFeatureSection>
        <Subsection title={"Container-based deployment"}>
          <p className={"text-left text-light"}>
            Besides the official source code releases, Apache StreamPipes offers ready-to-use deployment packages.
          </p>
          <p className={"text-left text-light"}>
            Several Docker Compose files are available to start StreamPipes with one of the supported message brokers for local setups.
          </p>
          <p className={"text-left text-light"}>
            In addition, helm charts are provided to deploy StreamPipes to Kubernetes clusters.
          </p>
        </Subsection>
        <div>
          <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/streampipes-cli.png"} alt={"Online ML"}/>
        </div>
      </TwoColumnFeatureSection>
    </PageSection>

  </>
)

export default ReadyforProduction;
