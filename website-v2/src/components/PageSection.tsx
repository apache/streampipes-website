import React, { FC } from 'react';
import Layout from '@theme/Layout';

const PageSection = (props) => {

  const alignCenter = props.alignCenter ? 'align-items-center' : '';
  const alignContentCenter = props.alignContentCenter ? 'justify-content-center' : '';

  return (
    <>
      <section className={`section-padding-100 ${props.backgroundClass}`}>
        <div className="container">
          <div className={`row align-items-center ${alignCenter}`}>
            <div className="col-12">
              <h2 className="page-section-title">{props.sectionTitle}</h2>
              <div className={`d-flex flex-column ${alignContentCenter}`}>
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
