import React from 'react';
import PageSection from '../PageSection';
import Subsection from '../Subsection';
import TwoColumnFeatureSection from '../TwoColumnFeatureSection';

const FlexibleDeployment = () => (
  <>
    <PageSection
      sectionTitle={'Deploy StreamPipes where it fits your architecture'}
      sectionSubtitle={'From single-host installs to distributed OT/IT setups'}
      backgroundClass={'background-white'}
    >
      <TwoColumnFeatureSection>
        <Subsection title={'Flexible deployment concepts'}>
          <p className={'text-left'}>
            Apache StreamPipes is not tied to one installation model. Start with a simple Docker
            Compose setup for evaluation, local environments, and smaller installations, or move to
            Kubernetes when you need cluster-level operations, storage classes, ingress control, and
            explicit infrastructure management.
          </p>
          <p className={'text-left'}>
            The official deployment packages cover different broker and footprint choices, including
            the default NATS-based setup, Kafka-based deployments, and minimal variants for leaner
            environments.
          </p>
          <div>
            <a href="/docs/configure-operate-deployment/" className="sp-button sp-button-medium sp-button-blue">
              <i className="fas fa-hand-point-right"></i> Deployment options
            </a>
          </div>
        </Subsection>
        <div>
          <div className="homepage-media-frame">
            <img
              className="d-block w-100 mt-2 mb-2"
              src={'/img/architecture/streampipes-deployment-options.png'}
              alt={'Deployment overview with Docker, Kubernetes, and supported brokers'}
            />
          </div>
        </div>
      </TwoColumnFeatureSection>

      <TwoColumnFeatureSection>
        <div>
          <div className="homepage-media-frame">
            <img
              className="d-block w-100 mt-2 mb-2"
              src={'/img/architecture/streampipes-distributed-deployment.png'}
              alt={'Distributed StreamPipes deployment across OT and IT environments'}
            />
          </div>
        </div>
        <Subsection title={'Distributed OT/IT deployment'}>
          <p className={'text-left'}>
            A central advantage of StreamPipes is that extension services can run close to machines
            and industrial networks while the UI, core services, metadata, and historical storage
            stay in a central IT environment.
          </p>
          <p className={'text-left'}>
            This makes it possible to place connectivity in the OT network, keep machine access local,
            and still manage adapters and processing centrally. In NATS-based setups, OT-side
            extension services can be integrated without requiring incoming traffic to be opened
            from central IT into the plant network.
          </p>
          <p className={'text-left'}>
            The result is one platform that supports centralized governance without forcing all data
            collection components into the same network zone.
          </p>
        </Subsection>
      </TwoColumnFeatureSection>
    </PageSection>
  </>
);

export default FlexibleDeployment;
