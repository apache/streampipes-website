import React, { FC } from 'react';
import PageSection from '../PageSection';
import TwoColumnFeatureSection from '../TwoColumnFeatureSection';
import Subsection from '../Subsection';

const LovedByDevelopers = (props) => (
  <>
    <>
      <PageSection sectionTitle={"First-class developer support"} sectionSubtitle={"Easy to customize & extend"}
                   backgroundClass={"background-primary-light"}>
        <p className={"text-center"}>Apache StreamPipes is a great platform for developers: Implement custom adapters,
          data processors or sinks and install them at runtime.<br/> Use StreamPipes Functions to define processing
          logic based on real-time IIoT data.<br/> Or use the client libraries, available in Java and Python, to
          interact with live and historical data in an easy way.
        </p>
        <TwoColumnFeatureSection>
          <Subsection title={"Add your own extensions with the Software Development Kit"}>
            <p className={"text-left"}>It is easy to extend StreamPipes. Whether you need connectivity to a proprietary
              data source, want to
              implement your custom-tailored algorithm as a pipeline element or need a new interface to your third party
              system: Simply use the SDK to extend the functionality of StreamPipes.</p>

            <p className={"text-left"}>
              With its microservice architecture at its core, you can install your extensions at any time without the
              need to restart the whole system.
            </p>
            <div>
            <a href="/docs/extend-tutorial-data-processors/" className="sp-button sp-button-medium sp-button-blue"><i
              className="fas fa-hand-point-right"></i> Tutorial: SDK</a>
            </div>
          </Subsection>
          <div>
            <div className="homepage-media-frame">
              <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/sdk-data-processor.png"} alt={"SDK data processor"}/>
            </div>
          </div>
        </TwoColumnFeatureSection>
        <TwoColumnFeatureSection>
          <div>
            <div className="homepage-media-frame">
              <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/python-client.png"} alt={"Python client"}/>
            </div>
          </div>
          <Subsection title={"Interact with StreamPipes through our client libraries"}>
            <p className={"text-left"}>
              StreamPipes includes Java and Python libraries which allow you to interact with StreamPipes
              programmatically.
            </p>
            <p className={"text-left"}>
              You can modify the pipeline lifecycle, receive live data from all connected sources in a unified API, and
              Data Scientists love the possibility to extract historical data directly into Pandas data frames for
              in-depth analysis.
            </p>

            <p className={"text-left"}>And of course, you can also just use the provided REST interface!</p>

            <div>
              <a href="/docs/docs/python" className="sp-button sp-button-medium sp-button-blue"><i
                className="fas fa-hand-point-right"></i> Python Client</a>
            </div>
          </Subsection>
        </TwoColumnFeatureSection>
        <TwoColumnFeatureSection>
          <Subsection title={"Seamlessly integrate AI & Machine Learning"}>
            <p className={"text-left"}>
              Our Python client includes an integration with the OnlineML library River, so that you can get started
              with your custom anomaly detection and other ML features with just a few lines of code.
            </p>
            <p className={"text-left"}>
              But you can also integrate other ML models, and play back the results in form of a new data stream to
              StreamPipes.
            </p>
            <div>
              <a href="/docs/docs/python/latest/tutorials/4-using-online-machine-learning-on-a-streampipes-data-stream" className="sp-button sp-button-medium sp-button-blue"><i
                className="fas fa-hand-point-right"></i> Online ML with StreamPipes</a>
            </div>
          </Subsection>
          <div>
            <div className="homepage-media-frame">
              <img className="d-block w-100 mt-2 mb-2" src={"/img/screenshots/python-onlineml.png"} alt={"Online ML"}/>
            </div>
          </div>
        </TwoColumnFeatureSection>
      </PageSection>

    </>

  </>
)

export default LovedByDevelopers;
