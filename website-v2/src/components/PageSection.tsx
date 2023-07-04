import React, { FC } from 'react';
import Layout from '@theme/Layout';
import PageSectionTitle from './PageSectionTitle';

const PageSection = (props) => {

  const alignCenter = props.alignCenter ? 'align-items-center' : '';
  const alignContentCenter = props.alignContentCenter ? 'text-center justify-content-center' : '';

  return (
    <>
      <section className={`pt-10 pt-md-12 ${props.backgroundClass}`}>
        <div className="container-lg">
          <div className={`row align-items-center ${alignCenter}`}>
            <div className={"col-12"}>
              <PageSectionTitle title={props.sectionTitle} subtitle={"test"}></PageSectionTitle>
              <div className={`col-lg-12 col-md-12 order-md-0 ${alignContentCenter}`}>
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
