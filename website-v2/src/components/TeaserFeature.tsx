import React, { FC } from 'react';

const TeaserFeature = (props) => (
  <>
    <div className="feature-highlights d-flex justify-content-center flex-column">
                            <span className="feature-highlights-icon">
                                <i className={`fas ${props.icon}`}></i>
                            </span>
      <div className="feature-highlights-title">{props.title}</div>
      <div
        className="feature-highlights-subtitle">{props.subtitle}
      </div>
    </div>
  </>
)

export default TeaserFeature;

