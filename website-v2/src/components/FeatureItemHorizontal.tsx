import React, { Children, FC } from 'react';

const FeatureItemHorizontal = (props) => (
  <>
    <section className="elements-area section-padding-50">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="single-service-area">
              <h2 className={"feature-hz-number"}>{props.featureNumber}</h2>
              <h4 className={"feature-hz-title"}>{props.title}</h4>
              {props.children}
            </div>
          </div>
          <div className="col-md-8">
            {props.images.map(image => {
              return (<img className="d-block w-100 mt-2 mb-2" src={image.src} alt={image.alt}/>)
            })}
          </div>
        </div>
        <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
      </div>
    </section>
  </>
)

export default FeatureItemHorizontal;

