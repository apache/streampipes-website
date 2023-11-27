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
    "/js/code-block-buttons.js"
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
          'Apache StreamPipes 0.93.0 is available! ⭐️',
    },
    "image": "img/favicon.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2019 - 2023 The Apache Software Foundation",
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
