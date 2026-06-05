import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';
import DownloadSection from '../components/download/DownloadSection';

const Downloads: FC = () => (
  <Layout title={'Downloads'}>
    <PageHeader title={'Downloads'}></PageHeader>

    <PageSection
      backgroundClass={'background-white'}
      sectionTitle={'Install Apache StreamPipes'}
      sectionSubtitle={'The fastest path from download to a running instance'}
    >

      <div className="download-layout-grid">
        <div className="download-content-main">
          <DownloadSection version={'0.98.0'} showMoreInfo={true} releaseDate={'2025-12-15'}></DownloadSection>
        </div>

        <aside className="download-content-side">
          <div className="download-side-card">
            <h3>Prerequisites</h3>
            <ul className="download-checklist">
              <li>Docker installed and runnable on your machine</li>
              <li>Docker Compose support available</li>
              <li>Linux, macOS, or Windows 10 and newer</li>
            </ul>
            <p>
              Install Docker from <a href="https://docs.docker.com/install/" target="_blank" rel="noreferrer">docs.docker.com</a>.
            </p>
          </div>

          <div className="download-side-card">
            <h3>After installation</h3>
            <p>
              Continue with the <a href="/docs/quick-start-guide/">Quick Start Guide</a> to create your first
              adapter, dataset, chart, and dashboard.
            </p>
          </div>

          <div className="download-side-card">
            <h3>Need help?</h3>
            <p>
              Check the <a href="/docs/community-get-help/">Get Help</a> section to check our support channels.
            </p>
          </div>
        </aside>
      </div>
    </PageSection>
  </Layout>
);

export default Downloads;
