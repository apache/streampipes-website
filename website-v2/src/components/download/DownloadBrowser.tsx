import React from 'react';

const DownloadBrowser = () => (
  <div className="download-step-item">
    <div className="download-step-index">2</div>
    <div className="download-step-content">
      <h4>Open the web interface</h4>
      <p>
        Open your browser and navigate to <code>http://localhost:80</code>, or use the host name of
        the server where StreamPipes is running, and complete the setup flow in the UI.
      </p>
      <p>
        The default credentials are <code>admin@streampipes.apache.org</code> and{' '}
        <code>admin</code>.
      </p>
    </div>
  </div>
);

export default DownloadBrowser;
