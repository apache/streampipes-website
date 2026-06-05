import React from 'react';

const DownloadMoreInfo = () => (
  <div className="download-step-item">
    <div className="download-step-index">3</div>
    <div className="download-step-content">
      <h4>Continue with the right guide</h4>
      <p>
        Use the <a href="/docs/quick-start-guide/">Quick Start Guide</a> for your first end-to-end
        walkthrough, or go directly to the{' '}
        <a href="/docs/configure-operate-deployment/">deployment page</a> if you need Kubernetes,
        distributed OT/IT setups, or non-default broker configurations.
      </p>
    </div>
  </div>
);

export default DownloadMoreInfo;
