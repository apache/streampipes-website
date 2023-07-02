---
id: user-guide-installation
title: Installation
sidebar_label: Installation
original_id: user-guide-installation
---

<div class="admonition error">
<div class="admonition-title">StreamPipes desktop version</div>
<p>StreamPipes usually runs on a big data infrastructure. We did our best that you can install it yourself with less powerful hardware, even on your laptop.<br/>
   By default, StreamPipes will start a lightweight version (not including big data tools) with few pipeline elements. To start the full version, run ./streampipes start bigdata.</p>
</div>

## Prerequisites
StreamPipes is a modern web application, therefore you need Chrome (recommended) or Firefox to test it.

### Supported operating systems
We rely on Docker and support three operating systems for the StreamPipes system

* Linux
* OSX
* Windows 10
    * Please note that older Windows versions are not compatible with Docker. Also Linux VMs under Windows might not work, due to network problems with docker.

### Installation
You need to have Docker installed on your system before you continue with the installation guide.


<div class="admonition info">
<div class="admonition-title">Install Docker</div>
<p>Go to https://docs.docker.com/installation/ and follow the instructions to install Docker for your OS. Make sure docker can be started as a non-root user (described in the installation manual, don’t forget to log out and in again) and check that Docker is installed correctly by executing docker-run hello-world</p>
</div>

<div class="admonition info">
<div class="admonition-title">Configure Docker</div>
<p>By default, Docker uses only a limited number of CPU cores and memory.
       If you run StreamPipes on Windows or on a Mac you need to adjust the default settings.
       To do that, click on the Docker icon in your tab bar and open the preferences.
       Go to the advanced preferences and set the **number of CPUs to 6** (recommended) and the **Memory to 8GB**.
       After changing the settings, Docker needs to be restarted.</p></div>


<div class="admonition warn">
<div class="admonition-title">Server Recommendations</div>
<p>
<li>Unix based OS is recommended (also works with Windows)</li>
    <li>min. 12 GB RAM (16 recommended)</li>
    <li>Docker (latest version, see instructions above)</li>
    <li>Docker Compose (latest version., see instructions above)</li>
</p>
</div>

## Install StreamPipes
We provide a script to install, stop, and start StreamPipes.


The installer is available in two different versions, one to run StreamPipes on your laptop and another big data version which is intended to be run on a more powerful computer or server.
In the desktop version, only a limited amount of processors is available to ensure that the system also runs with less memory.

1. Clone or download the installer script from [https://www.github.com/streampipes/streampipes-installer](https://www.github.com/streampipes/streampipes-installer)
2. Execute ``./streampipes start`` to run a lightweight StreamPipes version with few pipelines elements (not including Big Data frameworks) or start the full version (16GB RAM recommended) by executing ``./streampipes start bigdata``
3. Open your browser, navigate to ``http://YOUR_HOSTNAME_HERE`` and follow the installation instructions.
4. Once finished, switch to the pipeline editor and start the interactive tour or check the [online tour](https://docs.streampipes.org/docs/user-guide-tour) to learn how to create your first pipeline!


<div class="admonition info">
<div class="admonition-title">Installation might take some minutes</div>
<p> StreamPipes is a modular, easily extensible system consisting of several micro services.
       The installer automatically downloads all required services. Depending on your internet connection, the first installation may take some while.</p></div>


After installing it, open your browser and navigate to `localhost`.

Now you can continue with the tutorial on page [Getting Started](user-guide-getting-started.md).
