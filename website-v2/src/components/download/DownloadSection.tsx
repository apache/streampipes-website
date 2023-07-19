import React, { FC } from 'react';
import DownloadBox from './DownloadBox';
import DownloadFolder from './DownloadFolder';
import DownloadBrowser from './DownloadBrowser';
import DownloadMoreInfo from './DownloadMoreInfo';

const DownloadSection = (props) => (
  <>
    <DownloadBox {...props}></DownloadBox>
    <DownloadFolder></DownloadFolder>
    <DownloadBrowser></DownloadBrowser>
    {props.showMoreInfo ? (<DownloadMoreInfo></DownloadMoreInfo>) : (<></>)}
  </>

)

export default DownloadSection
