import React from 'react';

const DownloadFolder = () => (
  <div className="download-step-item">
    <div className="download-step-index">1</div>
    <div className="download-step-content">
      <h4>Start the installer</h4>
      <p>
        Open the folder <code>installer/compose/</code> and run{' '}
        <code>docker compose up -d</code>. If your environment still uses the legacy Compose
        binary, <code>docker-compose up -d</code> works as well.
      </p>
      <p>
        For additional deployment models and broker-specific setups, continue with the{' '}
        <a href="/docs/configure-operate-deployment/">deployment documentation</a>.
      </p>
    </div>
  </div>
);

export default DownloadFolder;
