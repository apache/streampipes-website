import React, { FC } from 'react';
import PageSection from '../PageSection';
import SupportLink from '../SupportLink';

const Support = (props) => (
  <>
    <PageSection sectionTitle={"Resources & Support"}
                 backgroundClass={"background-light"}>
      <section className="d-sm-flex clearfix align-items-center justify-content-center">
        <SupportLink imageSrc={"/img/open_source/icon-github.png"} href={"https://www.github.com/apache/streampipes"}
                     label={"Github"}></SupportLink>
        <SupportLink imageSrc={"/img/open_source/icon-docs.png"} href={"/docs/user-guide-introduction/"}
                     label={"Documentation"}></SupportLink>
        <SupportLink imageSrc={"/img/open_source/icon-docker.png"} href={"https://hub.docker.com/u/apachestreampipes"}
                     label={"Docker Hub"}></SupportLink>
        <SupportLink imageSrc={"/img/open_source/icon-pypi.png"} href={"https://pypi.org/project/streampipes/"}
                     label={"PyPi"}></SupportLink>
        <SupportLink imageSrc={"/img/open_source/icon-mail.png"} href={"/mailinglists.html"}
                     label={"Mailing Lists"}></SupportLink>
      </section>


    </PageSection>

  </>
)

export default Support;
