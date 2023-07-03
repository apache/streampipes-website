import React, { FC } from 'react';


const Slideshare = (props) => (
  <>
    <div className="col-6">
      <div className="row"><h4 style={{width: '100%', textAlign: 'center'}}>{props.title}</h4>
      </div>
      <div className="row">
        <iframe src={props.slideshowUrl} width="595"
                height="485" frameBorder="0" marginWidth={0} marginHeight={0} scrolling="no"
                style={{border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%'}}
                allowFullScreen></iframe>
        <div style={{marginBottom: '5px'}}><strong> <a
          href={props.url}
          title={props.talkTitle} target="_blank">{props.talkTitle}</a> </strong> from <strong><a
          href="https://www.slideshare.net/streampipes"
          target="_blank">StreamPipes</a></strong></div>
      </div>
    </div>
  </>
)

export default Slideshare;
