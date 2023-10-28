import React, { FC } from 'react';

const DownloadFolder = (props) => (
  <>
    <li className="installation-step">
      <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
        <div className="col-md-1 col-3">
            <span className="fa-stack fa-2x">
                 <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                 <strong className="fa-stack-1x" style={{color:'white'}}>2</strong>
            </span>
        </div>
        <div className="col-md-11 col-9">
          In a command prompt, open the folder <code>installer/compose/</code> and run <code>docker-compose up -d</code> , or you could try the Quickstart mode with predefined example asset. Please follow the <a
            target="asf" href="https://streampipes.apache.org/docs/next/deploy-docker/">Docker Deployment</a> to explore this new mode.
        </div>
      </div>
    </li>

  </>
)

export default DownloadFolder;
