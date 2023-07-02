

/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const siteConfig = {
    title: 'Apache StreamPipes' /* title for your website */,
    tagline: 'Self-Service Data Analytics',
    url: 'https://streampipes.apache.org' /* your website url */,
    baseUrl: '/' /* base url for your project */,
    cleanUrl: false,

    projectName: 'streampipes-docs',
    organizationName: 'apache',

    headerLinks: [
        {doc: 'user-guide-introduction', label: 'Documentation'},
        {doc: 'faq-common-problems', label: 'FAQ'},
        {blog: true, label: 'Blog'},
        {search: true},
    ],
    algolia: {
        apiKey: '0fedc89dddf2810657708b178e56ef02',
        indexName: 'streampipes',
        algoliaOptions: {} // Optional, if provided by Algolia
    },

    disableHeaderTitle: true,
    docsSideNavCollapsible: true,

    headerIcon: 'img/sp-logo-color-docs.png',
    footerIcon: 'img/sp-logo-color.png',
    favicon: 'img/favicon.png',

    colors: {
        primaryColor: '#1b1464',
        secondaryColor: '#39b54a',
    },

    copyright:
    'Copyright © 2019 - ' +
    new Date().getFullYear() +
    ' The Apache Software Foundation',

    usePrism: ['jsx'],
    highlight: {
        theme: 'atom-one-dark',
    },

    scripts: [
        '/docs/js/matomo.js',
        '/docs/js/jquery-3.3.1.min.js',
        '/docs/js/buttons.js',
        '/docs/js/slick.min.js',
        '/docs/js/custom.js',
        '/docs/js/clipboard.min.js',
        '/docs/js/code-block-buttons.js'
    ],
    stylesheets: [
        '/docs/css/slick.min.css',
        '/docs/css/slick-theme.min.css',
        '/docs/css/fonts.css',
        '/docs/css/admonition.css',
        '/docs/css/custom.css',
        '/docs/css/code-block-buttons.css',
        '/docs/css/all.min.css'],

    onPageNav: 'separate',
    scrollToTop: true,
    scrollToTopOptions: {
        zIndex: 100,
    },

    /* Open Graph and Twitter card images */
    ogImage: 'img/favicon.png',
    twitterImage: 'img/docusaurus.png',
    repoUrl: 'https://github.com/apache/streampipes'
};

module.exports = siteConfig;
