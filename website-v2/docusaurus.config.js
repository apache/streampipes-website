module.exports = {
  "title": "Apache StreamPipes",
  "tagline": "Open-source industrial IoT data platform",
  "url": "https://streampipes.apache.org",
  "baseUrl": "/",
  "trailingSlash": true,
  "organizationName": "apache",
  "projectName": "streampipes-docs",
  "scripts": [
    "/js/jquery-3.3.1.min.js",
    "/js/buttons.js",
    "/js/slick.min.js",
    "/js/custom.js",
    "/js/clipboard.min.js",
    "/js/code-block-buttons.js",
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      async: true,
      'data-website-id': '510e1ad6-2442-42ed-bf29-17ad4b316986',
      'data-project-name': 'Apache StreamPipes',
      'data-project-color': '#FFFFFF',
      'data-project-logo':
          'https://streampipes.apache.org/img/favicon.png',
      'data-launcher-button-hidden': 'true',
      'data-modal-override-open-id': 'ask-ai-input',
      'data-modal-override-open-class': 'search-input',
      'data-modal-disclaimer':
          'This is a custom LLM for Apache StreamPipes with access to all [documentation](https://streampipes.apache.org/docs/user-guide-introduction/), [GitHub Open Issues, PRs and READMEs](https://github.com/apache/streampipes).&#10;&#10;Companies deploy assistants like this ([built by kapa.ai](https://kapa.ai)) on docs via [website widget](https://docs.kapa.ai/integrations/website-widget) (Docker, Reddit), in [support forms](https://docs.kapa.ai/integrations/support-form-deflector) for ticket deflection (Monday.com, Mapbox), or as [Slack bots](https://docs.kapa.ai/integrations/slack-bot) with private sources.',
      'data-modal-example-questions':
          'How do I install StreamPipes?,How can I contribute to StreamPipes?',
      'data-button-text-color': '#130E46',
      'data-modal-header-bg-color': '#ffffff',
      'data-modal-title-color': '#130E46',
      'data-modal-title': 'Apache StreamPipes AI',
      'data-modal-disclaimer-text-color': '#000000',
      'data-consent-required': 'true',
      'data-consent-screen-disclaimer':
          "By clicking \"I agree, let's chat\", you consent to the use of the AI assistant in accordance with kapa.ai's [Privacy Policy](https://www.kapa.ai/content/privacy-policy). This service uses reCAPTCHA, which requires your consent to Google's [Privacy Policy](https://policies.google.com/privacy) and [Terms of Service](https://policies.google.com/terms). By proceeding, you explicitly agree to both kapa.ai's and Google's privacy policies.",
    },
  ],
  "stylesheets": [
    "/css/slick.min.css",
    "/css/slick-theme.min.css",
    "/css/fonts.css",
    "/css/admonition.css",
    "/css/custom.css",
    "/css/code-block-buttons.css",
    "/css/all.min.css",

    "/css/bootstrap.min.css",
    "/css/buttons.css",
    "/css/team.css",
    "/css/custom-website.css",
    "/css/page-banner.css",
    "/css/responsive.css",
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "disableHeaderTitle": true,
    "repoUrl": "https://github.com/apache/streampipes",
    team: require('./src/team/team.js'),
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  noIndex: false,
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "./sidebars.json",
          lastVersion: 'current',
          versions: {
            '0.97.0': { noIndex: true },
            '0.95.1': { noIndex: true }
          }
        },
        "sitemap": {
          changefreq: 'weekly',
          ignorePatterns: ['/docs/0.97.0/**', '/docs/0.95.1/**']
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [
            "./src/css/customTheme.css",
              require.resolve('./src/css/page-section.scss')
          ]
        }
      }
    ]
  ],
  "headTags": [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            '@id': 'https://streampipes.apache.org/#software',
            name: 'Apache StreamPipes',
            url: 'https://streampipes.apache.org/',
            applicationCategory: 'DeveloperApplication',
            applicationSubCategory: 'Industrial IoT data platform',
            operatingSystem: 'Linux, macOS, Windows (Docker)',
            softwareVersion: '0.98.0',
            license: 'https://www.apache.org/licenses/LICENSE-2.0',
            isAccessibleForFree: true,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            downloadUrl: 'https://streampipes.apache.org/download/',
            softwareHelp: 'https://streampipes.apache.org/docs/user-guide-introduction/',
            codeRepository: 'https://github.com/apache/streampipes',
            description: 'Open-source industrial IoT data platform to connect machines, process live data streams, store datasets and build charts and dashboards.',
            author: { '@id': 'https://www.apache.org/#organization' }
          },
          {
            '@type': 'Organization',
            '@id': 'https://www.apache.org/#organization',
            name: 'The Apache Software Foundation',
            url: 'https://www.apache.org/',
            logo: 'https://streampipes.apache.org/img/asf_logo_wide.svg'
          },
          {
            '@type': 'WebSite',
            '@id': 'https://streampipes.apache.org/#website',
            url: 'https://streampipes.apache.org/',
            name: 'Apache StreamPipes',
            publisher: { '@id': 'https://www.apache.org/#organization' }
          }
        ]
      })
    }
  ],
  "plugins": [
    "./src/plugins/matomo",
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    prism: {
      additionalLanguages: ['java']
    },
    matomo: {
      matomoUrl: '//analytics.apache.org/',
      siteId: '35',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    "navbar": {
      "logo": {
        "src": "img/sp-logo-color.png"
      },
      "items": require('./src/navbar/navbar.js')
    },
    "image": "img/streampipes-social-card.png",
    "metadata": [
      {
        name: 'description',
        content: 'Apache StreamPipes is an open-source industrial IoT data platform. Connect machines via OPC UA, MQTT, S7 and Modbus, process live data in visual pipelines, store datasets and build charts and dashboards.'
      },
      {
        name: 'keywords',
        content: 'industrial IoT, IIoT platform, open source, OPC UA, MQTT, Siemens S7, Modbus, stream processing, dashboards, Apache StreamPipes'
      },
      { name: 'twitter:site', content: '@StreamPipes' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Apache StreamPipes' }
    ],
    "footer": {
      "links": [],
      "copyright": "Copyright © 2019 - 2026 The Apache Software Foundation",
      "logo": {
        "src": "img/sp-logo-color.png"
      }
    },
    // "algolia": {
    //   "apiKey": "0fedc89dddf2810657708b178e56ef02",
    //   "indexName": "streampipes",
    //   "algoliaOptions": {}
    // }
  }
}
