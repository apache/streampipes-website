import React from 'react';

const PageHeader = (props) => (
  <div className="page-banner-area">
    <div className="page-banner-accent page-banner-accent-left"></div>
    <div className="page-banner-accent page-banner-accent-right"></div>
    <div className="container">
      <div className="page-banner-shell">
        <div className="page-banner-content">
          <h1>{props.title}</h1>
          {props.subtitle ? <p className="page-banner-subtitle">{props.subtitle}</p> : null}
        </div>
      </div>
    </div>
  </div>
);

export default PageHeader;
