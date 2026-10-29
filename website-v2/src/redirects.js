/**
 * Redirect configuration for @docusaurus/plugin-client-redirects.
 *
 * Background: the "current" docs (served at /docs/) were restructured and a
 * number of page ids disappeared. Google Search Console reported ~650 URLs
 * as "Not found (404)" afterwards, many of them with good rankings. This file
 * maps every removed id to its closest successor so old links keep working.
 */

// Old doc ids (as they were in 0.98.0 and earlier) -> id in the current docs.
const RENAMED_DOCS = {
  // Getting started
  'try-overview': 'quick-start-guide',
  'try-installation': 'quick-start-guide',
  'try-tutorial': 'quick-start-guide',
  'user-guide-first-steps': 'quick-start-guide',
  'user-guide-tour': 'quick-start-guide',
  'user-guide-for-quickstart': 'quick-start-guide',
  // Concepts
  'introduction': 'concepts-introduction',
  'concepts-overview': 'concepts-introduction',
  'concepts-adapter': 'concepts-terms',
  'concepts-data-streams': 'concepts-terms',
  'concepts-glossary': 'concepts-terms',
  'concepts-pipelines': 'concepts-terms',
  'technicals-architecture': 'concepts-architecture',
  'technicals-messaging': 'concepts-architecture',
  'technicals-runtime-wrappers': 'concepts-architecture',
  'technicals-user-guidance': 'concepts-architecture',
  // Use
  'use-dashboard': 'use-dashboards',
  'use-data-explorer': 'use-charts',
  'use-pipeline-editor': 'use-pipelines',
  'use-managing-pipelines': 'use-pipelines',
  'use-notifications': 'use-pipelines',
  'use-install-pipeline-elements': 'configure-operate-extensions',
  'use-configurations': 'configure-operate-general-settings',
  'use-programmatically-create-adapters': 'use-programmatic-access',
  'use-programmatically-create-pipelines': 'use-programmatic-access',
  'extend-client': 'use-programmatic-access',
  // Deploy / operate
  'choosing-the-right-flavor': 'configure-operate-deployment',
  'deploy-docker': 'configure-operate-deployment',
  'deploy-kubernetes': 'configure-operate-deployment',
  'deploy-environment-variables': 'configure-operate-environment-variables',
  'deploy-security': 'configure-operate-security',
  'deploy-use-ssl': 'configure-operate-tls',
  'deploy-retention-config': 'use-datasets',
  'debugging-debugging': 'faq-common-problems',
  'debugging-monitoring': 'use-pipelines',
  // Extend
  'extend-tutorial-adapters': 'how-to-custom-adapter',
  'extend-tutorial-data-sources': 'how-to-custom-adapter',
  'extend-tutorial-data-processors': 'how-to-custom-data-processor',
  'extend-tutorial-data-sinks': 'how-to-custom-data-sink',
  'extend-sdk-migration-service-discovery': 'extend-sdk-migration',
};

// Pipeline elements that were removed from the current docs but still exist
// in the last released version.
const REMOVED_PIPELINE_ELEMENTS = [
  'org.apache.streampipes.connect.iiot.adapters.iolink',
  'org.apache.streampipes.connect.iiot.adapters.netio.mqtt',
  'org.apache.streampipes.connect.iiot.adapters.netio.rest',
  'org.apache.streampipes.connect.iiot.adapters.plc4x.generic.bacnet-ip',
  'org.apache.streampipes.connect.iiot.adapters.plc4x.generic.open-protocol',
  'org.apache.streampipes.connect.iiot.adapters.plc4x.generic.profinet',
  'org.apache.streampipes.sinks.internal.jvm.datalake',
  'org.apache.streampipes.sinks.internal.jvm.notification',
];
const LAST_RELEASE = '0.98.0';

// Obsolete version prefixes (/docs/0.95.0/..., /docs/next/...) are stripped
// server-side with a 301 in nginx_config/default.conf before these client
// redirects apply, so only unversioned paths are listed here.

const redirects = [];

for (const [oldId, newId] of Object.entries(RENAMED_DOCS)) {
  redirects.push({ to: `/docs/${newId}/`, from: `/docs/${oldId}/` });
}

for (const id of REMOVED_PIPELINE_ELEMENTS) {
  redirects.push({ to: `/docs/${LAST_RELEASE}/pe/${id}/`, from: `/docs/pe/${id}/` });
}

module.exports = {
  fromExtensions: ['html'],
  redirects,
};
