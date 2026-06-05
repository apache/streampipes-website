import React from 'react';
import DownloadBox from './DownloadBox';
import DownloadFolder from './DownloadFolder';
import DownloadBrowser from './DownloadBrowser';
import DownloadMoreInfo from './DownloadMoreInfo';

const DownloadSection = (props) => (
  <section className="download-workflow">
    <DownloadBox {...props}></DownloadBox>
    <div className="download-steps-card">
      <div className="download-steps-header">
        <span className="download-steps-eyebrow">Installation Flow</span>
        <h3>Start StreamPipes in a few steps</h3>
      </div>
      <DownloadFolder></DownloadFolder>
      <DownloadBrowser></DownloadBrowser>
      {props.showMoreInfo ? <DownloadMoreInfo></DownloadMoreInfo> : null}
    </div>
  </section>
);

export default DownloadSection;
