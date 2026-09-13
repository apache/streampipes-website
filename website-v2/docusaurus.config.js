module.exports = {
  "title": "Apache StreamPipes",
  "tagline": "Self-Service Data Analytics",
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
          lastVersion: 'current'
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
    announcementBar: {
      id: 'query',
      backgroundColor: 'var(--color-accent)',
      textColor: 'white',
      isCloseable: false,
      content:
          'Apache StreamPipes 0.98.0 is available! ⭐️',
    },
    "image": "img/favicon.png",
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
