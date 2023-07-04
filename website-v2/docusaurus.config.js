module.exports = {
  "title": "Apache StreamPipes",
  "tagline": "Self-Service Data Analytics",
  "url": "https://streampipes.apache.org",
  "baseUrl": "/",
  "organizationName": "apache",
  "projectName": "streampipes-docs",
  "scripts": [
    "/js/matomo.js",
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
    "/css/responsive.css",
    "/css/team.css",
    "/css/custom-website.css",
    "/css/page-banner.css"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "disableHeaderTitle": true,
    "repoUrl": "https://github.com/apache/streampipes",
    team: require('./src/config/team.js'),
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
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
          "customCss": "./src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
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
          '\u{1F914} Apache StreamPipes 0.92.0 is available! ⭐️',
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
