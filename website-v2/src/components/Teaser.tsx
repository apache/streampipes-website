import React, { FC } from 'react';
import TeaserFeature from './TeaserFeature';
import CircleContainer from './CircleContainer';

const Teaser = (props) => (
  <>
    <section className="elements-area" style={{borderBottom: '1px solid #cecece'}}>
      <div className={"row"}>
        <div className={"col-lg-9 col-12 container-lg d-flex align-items-center justify-content-center"}>
          <div className={"left-claim-section"}>
            <div className={"top-claim-area"}>
              <div className={"top-claim-area-subtitle"}>
                <span className={"top-claim-area-subtitle-text"}>All-In-One</span>
              </div>
              <div className={"top-claim-area-main-title"}>
                Industrial IoT Toolbox
              </div>
            </div>
            <div className="apache-teaser">Apache StreamPipes is a self-service Industrial IoT toolbox to enable
              non-technical
              users to
              connect, analyze and explore IoT data streams.
            </div>
            <div className={"after-apache-teaser"}></div>
            <div className={"teaser-actions text-center"}>
              <a href="/download/" className="sp-button sp-button-large sp-button-blue sp-button-margin"><i
                className="fas fa-download"></i> Download</a>
              <a href="/docs"
                 className="sp-button sp-button-large sp-button-gray sp-button-margin"><i
                className="fas fa-book"></i> Documentation
              </a>
              <a href="https://www.github.com/apache/streampipes"
                 className="sp-button sp-button-large sp-button-gray sp-button-margin"><i
                className="fab fa-github"></i> Github
              </a>
            </div>

            <div className="container-header">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <TeaserFeature
                    icon={"fa-table-columns"}
                    title={"Easy to use"}
                    subtitle={"Intuitive and fully integrated web-based user interface"}>
                  </TeaserFeature>
                </div>
                <div className="col-12 col-lg-4">
                  <TeaserFeature
                    icon={"fa-bolt"}
                    title={"Powerful"}
                    subtitle={"Quickly implement your IIoT use cases"}>
                  </TeaserFeature>
                </div>
                <div className="col-12 col-lg-4">
                  <TeaserFeature
                    icon={"fa-code"}
                    title={"Extensible"}
                    subtitle={"Developer tools for Java, Python and TypeScript"}>
                  </TeaserFeature>
                </div>
                {/*<a href="https://www.apache.org/events/current-event.html">*/}
                {/*  <img src="https://www.apache.org/events/current-event-125x125.png"*/}
                {/*       className={"event-image"}/>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>
        <div className={"col-lg-3 d-none d-lg-block teaser-image"}>
        </div>
      </div>
    </section>
  </>
)

export default Teaser;
