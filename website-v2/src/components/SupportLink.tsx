
import React, { FC } from 'react';

const SupportLink = (props) => (
<>
  <div className="support-links-area">
    <div className="more-service-content text-center" data-wow-delay=".1s">
      <a href={props.href}>
        <img src={props.imageSrc} alt=""/>
          <h4>{props.label}</h4>
      </a>
    </div>
  </div>
</>
)

export default SupportLink;
