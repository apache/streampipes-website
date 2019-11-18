/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
    {
        caption: 'User1',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/docusaurus.svg'.
        image: '/img/docusaurus.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
    },
];

const siteConfig = {
    title: 'StreamPipes' /* title for your website */,
    tagline: 'Self-Service Data Analytics',
    url: 'https://docs.streampipes.org' /* your website url */,
    baseUrl: '/docs/' /* base url for your project */,
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'streampipes-docs',
    organizationName: 'fzi',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: 'user-guide-introduction', label: 'User Guide'},
        {doc: 'dev-guide-introduction', label: 'Developer Guide'},
        {doc: 'pipeline-elements', label: 'Pipeline Elements'},
        {doc: 'faq-common-problems', label: 'FAQ'},
        {blog: true, label: 'Blog'},
        {page: 'community', label: 'Community'},
        {search: true},
    ],
    algolia: {
        apiKey: '0fedc89dddf2810657708b178e56ef02',
        indexName: 'streampipes',
        algoliaOptions: {} // Optional, if provided by Algolia
    },

    disableHeaderTitle: true,

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/sp-logo-right-white.png',
    footerIcon: 'img/sp-logo-right-white.png',
    favicon: 'img/favicon.png',

    /* colors for website */
    colors: {
        primaryColor: '#39b54a',
        secondaryColor: '#1b1464',
    },

    /* custom fonts for website */
    /*fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },*/

    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' FZI Forschungszentrum Informatik',

    usePrism: ['jsx'],
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'atom-one-dark',
    },

    // Add custom scripts here that would be placed in <script> tags
    scripts: ['https://code.jquery.com/jquery-3.3.1.min.js',
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
        '/js/custom.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/js/code-block-buttons.js'],
    stylesheets: ['https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://fonts.googleapis.com/css?family=Roboto',
        '/css/admonition.css',
        '/css/code-block-buttons.css',
        'https://use.fontawesome.com/releases/v5.7.2/css/all.css'],

    /* On page navigation for the current documentation page */
    onPageNav: 'separate',
    cleanUrl: true,
    scrollToTop: true,
    scrollToTopOptions: {
        zIndex: 100,
    },

    /* Open Graph and Twitter card images */
    ogImage: 'img/favicon.png',
    twitterImage: 'img/docusaurus.png',
    repoUrl: 'https://github.com/streampipes/streampipes'

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
