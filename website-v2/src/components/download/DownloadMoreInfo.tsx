import React, { FC } from 'react';

const DownloadMoreInfo = (props) => (
  <>
    <li className="installation-step">
      <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
        <div className="col-md-1 col-3">
            <span className="fa-stack fa-2x">
                 <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                 <strong className="fa-stack-1x" style={{color:'white'}}>4</strong>
            </span>
        </div>
        <div className="col-md-11 col-9">
          For a detailed description of the installer and migration guides, read the <a
          href="/docs/try-installation/"> installation guide</a>
          or learn about advanced <a href="/docs/deploy-docker/">Docker</a> or <a
          href="/docs/deploy-kubernetes/">K8s</a> deployment setups.
        </div>
      </div>
    </li>

  </>
)

export default DownloadMoreInfo;
