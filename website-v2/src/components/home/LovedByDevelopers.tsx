import React, { FC } from 'react';

const LovedByDevelopers = (props) => (
  <>
    <div className="page-banner-area">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="page-banner-content">
              <h2>
                {props.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
)

export default LovedByDevelopers;
