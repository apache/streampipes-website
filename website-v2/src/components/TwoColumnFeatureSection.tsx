import React, { FC } from 'react';

const TwoColumnFeatureSection = (props) => {

  return (
    <>
      <div className="container-lg mb-5 mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 order-md-0">
            {props.children[0]}
          </div>
          <div className="col-lg-6 col-md-12 order-md-1">
            {props.children[1]}
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoColumnFeatureSection;
