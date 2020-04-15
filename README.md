[![Github Actions](https://img.shields.io/github/workflow/status/apache/incubator-streampipes-website/Build%20and%20Deploy)](https://github.com/apache/incubator-streampipes-website/actions/)
# Apache StreamPipes (incubating) Website + Docs

## Intro
This repository includes the website and documentation of Apache StreamPipes (incubating) on [https://streampipes.apache.org](https://streampipes.apache.org).
Two different technologies are used to create both sites:
* The website uses [harp.js](http://harpjs.com/) to create static pages from ejs files.
* The documentation uses [Docusaurus](https://docusaurus.io/) to create a versioned documentation.

Both parts are merged to a single directory during the CI process.

Node.js and npm are required to build both sites.

## Build & run website

* Run ``npm install`` from the root directory of this repository.
* Run ``npm run start-website`` to start the website locally for debugging purposes. The content will be served on port 9000.
* Run ``npm run build-website`` to build the website. This will create a folder ``build`` that contains the generated static HTML and asset files.

## Build Documentation

* Run ``npm install`` from the ``documentation/website`` directory.
* Run ``npm run start`` to start the documentation for debugging purposes. The content will be served on ``http://localhost:3000/docs``
* Run ``npm run build`` to build the documentation This will create a folder ``build/streampipes-docs`` that includes all required static files.
* Run ``npm run ds-version NEW_VERSION`` to release a new docs version.

## Deploy

* First, build the website as explained above.
* Then, build the documentation as explained above.
* Copy the content from the generated documentation (content from ``streampipes-docs``) to the ``build`` folder into a subdirectory named ``docs``.
