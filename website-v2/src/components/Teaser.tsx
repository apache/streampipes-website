import React, { FC } from 'react';
import TeaserFeature from './TeaserFeature';

const Teaser = (props) => (
  <>
    <section className="elements-area">
      <div className={"top-claim-area"}>
        {/*<h1 className="header-apache-text">Apache <span className="sp-green">S</span><span*/}
        {/*  className="sp-blue">tream</span><span className="sp-green">P</span><span*/}
        {/*  className="sp-blue">ipes</span>*/}
        {/*</h1>*/}
        <div className={"top-claim-area-subtitle"}>
          <span className={"top-claim-area-subtitle-text"}>All-In-One</span>
        </div>
        <div className={"top-claim-area-main-title"}>
          Industrial IoT Toolbox
        </div>
      </div>
      <div className="apache-teaser">Apache StreamPipes is a self-service Industrial IoT toolbox to enable non-technical
        users to
        connect, analyze and explore IoT data streams.
      </div>
      <div className={"after-apache-teaser"}></div>
      <div className={"teaser-actions text-center"}>
        <a href="/download" className="sp-button sp-button-large sp-button-blue sp-button-margin"><i
          className="fas fa-rocket"></i> Get started</a>
        <a href="/docs/user-guide-introduction"
           className="sp-button sp-button-large sp-button-gray sp-button-margin"><i
          className="fas fa-book"></i> Documentation
        </a>
        <a href="https://www.github.com/apache/streampipes"
           className="sp-button sp-button-large sp-button-gray sp-button-margin"><i
          className="fab fa-github"></i> Github
        </a>
      </div>

      <div className="container-header teaser-image">
        <div className="row">
          <div className="col-12 col-lg-4">
            <TeaserFeature
              icon={"fa-table-columns"}
              title={"Easy to use"}
              subtitle={"Intuitive web-based user interface"}>
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
    </section>
  </>
)

export default Teaser;
