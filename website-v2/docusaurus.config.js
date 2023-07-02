module.exports={
  "title": "Apache StreamPipes",
  "tagline": "Self-Service Data Analytics",
  "url": "https://streampipes.apache.org",
  "baseUrl": "/",
  "organizationName": "apache",
  "projectName": "streampipes-docs",
  "scripts": [
    "/docs/js/matomo.js",
    "/docs/js/jquery-3.3.1.min.js",
    "/docs/js/buttons.js",
    "/docs/js/slick.min.js",
    "/docs/js/custom.js",
    "/docs/js/clipboard.min.js",
    "/docs/js/code-block-buttons.js"
  ],
  "stylesheets": [
    "/docs/css/slick.min.css",
    "/docs/css/slick-theme.min.css",
    "/docs/css/fonts.css",
    "/docs/css/admonition.css",
    "/docs/css/custom.css",
    "/docs/css/code-block-buttons.css",
    "/docs/css/all.min.css"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "disableHeaderTitle": true,
    "repoUrl": "https://github.com/apache/streampipes"
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
          "sidebarPath": "./sidebars.json"
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
    "navbar": {
      "title": "Apache StreamPipes",
      "logo": {
        "src": "img/sp-logo-color-docs.png"
      },
      "items": [
        {
          "to": "docs/user-guide-introduction",
          "label": "Documentation",
          "position": "left"
        },
        {
          "to": "docs/faq-common-problems",
          "label": "FAQ",
          "position": "left"
        }
      ]
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
