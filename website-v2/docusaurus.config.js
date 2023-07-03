module.exports={
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
    "/css/all.min.css"
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
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "docs/faq-common-problems",
          "label": "FAQ",
          "position": "left"
        }
      ]
    },
    announcementBar: {
      id: 'query',
      backgroundColor: 'var(--color-primary)',
      textColor: 'white',
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
