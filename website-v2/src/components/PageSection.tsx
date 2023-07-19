import React, { FC } from 'react';
import Layout from '@theme/Layout';
import PageSectionTitle from './PageSectionTitle';

const PageSection = (props) => {

  const alignCenter = props.alignCenter ? 'align-items-center' : '';
  const alignContentCenter = props.alignContentCenter ? 'text-center justify-content-center' : '';

  const lightModeClass = props.lightMode ? 'text-light' : '';
  const marginBottom = props.marginBottom ? props.marginBottom : '55px';

  return (
    <>
      <section className={`pt-5 pb-5 pt-md-12 ${props.backgroundClass}`}>
        <div className="container">
          <div className={`row align-items-center ${alignCenter}`}>
            <div className={"col-12"}>
              <PageSectionTitle title={props.sectionTitle}
                                marginBottom={marginBottom}
                                sectionSubtitle={props.sectionSubtitle}
                                lightMode={props.lightMode}></PageSectionTitle>
              <div className={`col-lg-12 col-md-12 order-md-0 ${alignContentCenter} ${lightModeClass}`}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageSection;
