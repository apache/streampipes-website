---
id: try-installation
title: Installation
sidebar_label: Installation
original_id: try-installation
---

import DownloadSection from '@site/src/components/download/DownloadSection.tsx';

The easiest way to install StreamPipes is our Docker-based installation. For production-grade deployments, we also
recommend looking at our Kubernetes support, which is also part of the installation kit.

## Prerequisites

The Docker-based installation requires **Docker** and **Docker Compose** to be installed on the target machine.
Installation instructions can be found below.

<div class="admonition info">
<div class="admonition-title">Install Docker</div>
<p>Go to https://docs.docker.com/installation/ and follow the instructions to install Docker for your OS. Make sure docker can be started as a non-root user (described in the installation manual, don’t forget to log out and in again) and check that Docker is installed correctly by executing docker-run hello-world</p>
</div>

<div class="admonition info">
<div class="admonition-title">Configure Docker</div>
<p>By default, Docker uses only a limited number of CPU cores and memory.
       If you run StreamPipes on Windows or on a Mac you need to adjust the default settings.
       To do that, click on the Docker icon in your tab bar and open the preferences.
       Go to the advanced preferences and set the **number of CPUs to 6** (recommended) and the **Memory to 4GB**.
       After changing the settings, Docker needs to be restarted.</p></div>

### Supported operating systems

The Docker-based installation supports the operating systems **Linux**, **Mac OS X** and **Windows 10**. Older windows
versions are not fully compatible with Docker. Linux VMs running under Windows might cause network problems with Docker,
therefore some manual work might be needed to make StreamPipes run properly.

### Web Browser

The StreamPipes application itself will be accessible through a web browser. We recommend a recent version of Chrome (
best experience), Firefox or Edge.

## Install StreamPipes

<DownloadSection version={'0.70.0'}></DownloadSection>

## Setup StreamPipes

Once you've opened the browser at the URL given above, you should see the StreamPipes application as shown below. At
initial startup, StreamPipes automatically performs an installation process.
After the installation has finished, continue by clicking on "Go to login
page", once all components are successfully configured.

On the login page, enter your credentials, then you should be forwarded to the home page.

Congratulations! You've successfully managed to install StreamPipes. Now we're ready to build our first pipeline!

<div class="my-carousel docs-carousel">
    <img src="/img/01_try-installation/03_login.png" alt="Go to login page"/>
    <img src="/img/01_try-installation/04_home.png" alt="Home page"/>
</div>

<div class="admonition error">
<div class="admonition-title">Errors during the installation process</div>
<p>In most cases, errors during the installation are due to an under-powered system.<br/>
If there is a problem with any of the components, please restart the whole system (<code>docker-compose down</code> and eventually also delete the volumes).
   Please also make sure that your system meets the hardware requirements as mentioned in the first section of the installation guide.</p>
</div>

## Next Steps

That's it! To ease your first steps with StreamPipes, we've created an [interactive tutorial](try-tutorial).
