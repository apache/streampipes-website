import React, { FC } from 'react';

const DownloadBrowser = (props) => (
  <>
    <li className="installation-step">
      <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
        <div className="col-md-1 col-3">
            <span className="fa-stack fa-2x">
                 <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                 <strong className="fa-stack-1x"  style={{color:'white'}}>3</strong>
            </span>
        </div>
        <div className="col-md-11 col-9">
          Open your browser, navigate to http://localhost:80 (or use the domain name of your server) and finish the
          setup according to the instructions.
          The default login credentials are <code>admin@streampipes.apache.org</code>, password <code>admin</code>
        </div>
      </div>
    </li>

  </>
)

export default DownloadBrowser;
