import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';
import DownloadBox from '../components/download/DownloadBox';
import DownloadFolder from '../components/download/DownloadFolder';
import DownloadBrowser from '../components/download/DownloadBrowser';
import DownloadMoreInfo from '../components/download/DownloadMoreInfo';


const Downloads: FC = () => (
  <Layout title={'Downloads'}>
    <PageHeader title={"Downloads"}></PageHeader>
    <PageSection backgroundClass={"background-white"} sectionTitle={"Install StreamPipes"}>

      <h5 style={{textAlign: 'center',marginBottom: '15px'}}>The easiest way to get started is our Docker-based
        installation.</h5>
      <div className="installation-manual-part">
        <h5 className="feature-item-margin"><span className="feature-highlights-bg">Prerequisites</span></h5>
        <h6></h6>
        <ul>
          <li><i className="fas fa-check sp-color-green"></i>The Docker-based installation works with Linux, MacOS and
            Windows 10.
          </li>
          <li><i className="fas fa-check sp-color-green"></i> Install <a
            href="https://docs.docker.com/install/" target="_blank">Docker</a> and <a
            href="https://docs.docker.com/compose/install/" target="_blank">Docker Compose</a>
          </li>
        </ul>
      </div>
      <div className="installation-manual-part">
        <h5 className="feature-item-margin"><span className="feature-highlights-bg">Installation</span></h5>
        <ul>
          <DownloadBox></DownloadBox>
          <DownloadFolder></DownloadFolder>
          <DownloadBrowser></DownloadBrowser>
          <DownloadMoreInfo></DownloadMoreInfo>
          <hr/>
        </ul>
      </div>
    </PageSection>
    <PageSection backgroundClass={"background-primary-light"} sectionTitle={"Getting Started"}>
      <div className="installation-manual-part">
        <h5 className="feature-item-margin"><span className="feature-highlights-bg">How to start</span></h5>
        <h6></h6>
        <ul>
          <li className="installation-step">
            <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
              <div className="col-md-1 col-3">
                                                    <span className="fa-stack fa-2x">
                                                         <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                                                         <i className="fas fa-check fa-stack-1x"
                                                            style={{color:'white'}}></i>
                                                    </span>
              </div>
              <div className="col-md-11 col-9">
                Check the <a href="https://streampipes.apache.org/docs/docs/user-guide-introduction.html"> user
                guide</a> and learn how to make your first steps with StreamPipes!
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="installation-manual-part">
        <h5 className="feature-item-margin"><span className="feature-highlights-bg">Get help</span></h5>
        <h6></h6>
        <ul>
          <li className="installation-step">
            <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
              <div className="col-md-1 col-3">
                                                    <span className="fa-stack fa-2x">
                                                         <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                                                         <i className="fas fa-check fa-stack-1x"
                                                            style={{color:'white'}}></i>
                                                    </span>
              </div>
              <div className="col-md-11 col-9">
                Ask your question on our <a href="https://github.com/apache/streampipes/discussions">GitHub
                discussion</a> page.
              </div>
            </div>
          </li>
          <li className="installation-step">
            <div className="row" style={{alignItems: 'center',justifyContent: 'center'}}>
              <div className="col-md-1 col-3">
                                                    <span className="fa-stack fa-2x">
                                                         <i className="fas fa-circle fa-stack-2x sp-color-green"></i>
                                                         <i className="fas fa-check fa-stack-1x"
                                                            style={{color:'white'}}></i>
                                                    </span>
              </div>
              <div className="col-md-11 col-9">
                Send an <a href="mailto:users@streampipes.apache.org">email</a> to our mailing list and we'll be glad to
                help!
              </div>
            </div>
          </li>
        </ul>
      </div>
    </PageSection>
  </Layout>
)


export default Downloads;
