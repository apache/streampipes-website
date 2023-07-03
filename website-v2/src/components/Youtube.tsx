import React, { FC } from 'react';


const Youtube = (props) => (
  <>
    <div className="col-6">
      <div className="row"><h4 style={{width:'100%',textAlign:'center'}}>{props.title}</h4></div>
      <div className="row">
        <div className="col-12">
          <iframe width="560" height="315" src={props.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  </>
)

export default Youtube;
