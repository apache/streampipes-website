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
      <div className="download-page-intro">
        <p className="download-page-lead">
          The standard path is the official source release. If you prefer a shorter command for local
          evaluation or demos, you can also start StreamPipes directly from the Compose files shown
          below.
        </p>
      </div>

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

      <div className="download-command-section">
        <div className="download-command-header">
          <span className="download-steps-eyebrow">Convenience Setup</span>
          <h3>Start StreamPipes with a single shell command</h3>
          <p>
            These shortcuts create a local folder, download <code>docker-compose.yml</code> and
            <code> .env</code>, and start the default Compose setup immediately.
          </p>
        </div>

        <div className="download-command-grid">
          <div className="download-command-card">
            <h4>Nightly build (unreleased)</h4>
            <p>
              Tracks the current <code>dev</code> branch and is useful when you want the latest version.
              Unreleased versions come without any guarantees and can include breaking changes.
            </p>
            <pre className="download-command-block">
              <code>{`mkdir -p streampipes-nightly && cd streampipes-nightly \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/dev/installer/compose/docker-compose.yml \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/dev/installer/compose/.env \\
  && docker compose up -d`}</code>
            </pre>
          </div>

          <div className="download-command-card">
            <h4>Latest release</h4>
            <p>
              Pinned to Apache StreamPipes <code>0.98.0</code>, which is the latest release version.
              Includes the NATS-based setup and a pre-configured .env file which should be changed for production usage.
            </p>
            <pre className="download-command-block">
              <code>{`mkdir -p streampipes-0.98.0 && cd streampipes-0.98.0 \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/0.98.0/installer/compose/docker-compose.yml \\
  && curl -fsSLO https://raw.githubusercontent.com/apache/streampipes/0.98.0/installer/compose/.env \\
  && docker compose up -d`}</code>
            </pre>
          </div>
        </div>
      </div>
    </PageSection>
  </Layout>
);

export default Downloads;
