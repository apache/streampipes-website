[![Github Actions](https://img.shields.io/github/actions/workflow/status/apache/streampipes-website/deploy-website.yml?label=Build%20and%20Deploy)](https://github.com/apache/streampipes-website/actions/)
# Apache StreamPipes Website + Docs

## Intro
This repository includes the website and documentation of Apache StreamPipes on [https://streampipes.apache.org](https://streampipes.apache.org).
Two different technologies are used to create both sites:
* The website & documentation uses [Docusaurus](https://docusaurus.io/) to create a versioned documentation.
* The Python docs are auto-generated from the main code repo using MkDocs.

Both parts are merged to a single directory during the CI process.

Node.js(at most v18) and npm are required to build the documentation.

## Build Website & Documentation

* Run ``npm install`` from the ``website-v2`` directory by first running ``cd ./website-v2``.
* Run ``npm run start`` to start the documentation for debugging purposes. The content will be served on ``http://localhost:3000``
* Run ``npm run build`` to build the documentation This will create a folder ``website-v2/build`` that includes all required static files.
* Run ``npm run ds-version NEW_VERSION`` to release a new docs version.

## Deploy

* First, build the website and documentation as explained above.
* Copy the content from the `docs-python` to the ``website-v2/build`` folder into a subdirectory named ``python``.

The deployment step is done automatically using the asf.yaml process.
Code must be merged into the `master` branch in order to trigger an update of the website.
