---
id: user-guide-installation
title: Installation
sidebar_label: Installation
original_id: user-guide-installation
---
## Prerequisites

### Hardware

* Docker (latest version, see instructions below)
* Docker Compose (latest version., see instructions below)

### Supported operating systems
We rely on Docker and support three operating systems for the StreamPipes system

* Linux
* OSX
* Windows 10
    * Please note that older Windows versions are not compatible with Docker. Also Linux VMs under Windows might not work, due to network problems with docker.

### Web Browser
StreamPipes is a modern web application, therefore you need a recent version of Chrome (recommended), Firefox or Edge.

### Docker
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
       Go to the advanced preferences and set the **number of CPUs to 6** (recommended) and the **Memory to 4GB**.
       After changing the settings, Docker needs to be restarted.</p></div>


## Install StreamPipes

<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="linux" role="tabpanel" aria-labelledby="linux-tab">
        <ul style="padding-left:0">
            <li class="installation-step">
                <div class="wrapper-container" style="align-items: center;justify-content: center;">
                    <div class="wrapper-step">
                        <span class="fa-stack fa-2x">
                             <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                             <strong class="fa-stack-1x" style="color:white;">1</strong>
                        </span>
                    </div>
                    <div class="wrapper-instruction">
                        <a href="https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=incubator/streampipes/installer/0.66.0/apache-streampipes-installer-0.66.0-incubating-source-release.zip">Download</a>
                        the latest Apache StreamPipes release and extract the zip file to a directory of your choice.
                    </div>
                </div>
            </li>
            <li class="installation-step">
                <div class="wrapper-container" style="align-items: center;justify-content: center;">
                    <div class="wrapper-step">
                        <span class="fa-stack fa-2x">
                             <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                             <strong class="fa-stack-1x" style="color:white;">2</strong>
                        </span>
                    </div>
                    <div class="wrapper-instruction">
                       <div style="margin-bottom:5px;"><b>Linux/Mac:</b> In a command prompt, open the folder <code>installer/osx_linux</code> and run <code>./streampipes
                            start</code>.<br/>
                        </div>
                        <div style="margin-top:5px;">
                        <b>Windows 10:</b> In a command prompt, open the folder <code>installer/windows10</code> and run <code>streampipes.bat
                                                    start</code>.<br/>
                        </div>
                    </div>
                </div>
            </li>
            <li class="installation-step">
                <div class="wrapper-container" style="align-items: center;justify-content: center;">
                    <div class="wrapper-step">
                        <span class="fa-stack fa-2x">
                             <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                             <strong class="fa-stack-1x" style="color:white;">3</strong>
                        </span>
                    </div>
                    <div class="wrapper-instruction">
                       When asked, enter the version (full or lite).
                    </div>
                </div>
            </li>
            <li class="installation-step">
                <div class="wrapper-container" style="align-items: center;justify-content: center;">
                    <div class="wrapper-step">
                        <span class="fa-stack fa-2x">
                             <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                             <strong class="fa-stack-1x" style="color:white;">4</strong>
                        </span>
                    </div>
                    <div class="wrapper-instruction">
                        Open your browser, navigate to http://localhost:80 (or the domain name of your server) and finish the setup according to the instructions below.
                    </div>
                </div>
            </li>
        </ul>
        </div>
    </div>

## Setup StreamPipes

Once you've opened the browser at the URL given above, you should see StreamPipes application as shown below.
To set up the system, enter an email address and a password and click on install.
At this point, it is not necessary to change anything in the advanced settings menu.
The installation might take some time, continue by clicking on "Go to login page", once all components are successfully configured.


On the login page, enter your credentials, then you should be forwarded to the home page.

Congratulations! You've successfully managed to install StreamPipes. Now we're ready to build our first pipeline!

<div class="my-carousel">
    <img src="/docs/img/quickstart/setup/01_register_user.png" alt="Set Up User"/>
    <img src="/docs/img/quickstart/setup/02_user_set_up.png" alt="SetUp StreamPipes Components"/>
    <img src="/docs/img/quickstart/setup/03_login.png" alt="Go to login page"/>
    <img src="/docs/img/quickstart/setup/04_home.png" alt="Home page"/>
</div>

<div class="admonition error">
<div class="admonition-title">Errors during the installation process</div>
<p>In most cases, errors during the installation are due to an under-powered system.<br/>
If there is a problem with any of the components, please restart the whole system and delete the "config" directory on the server.
   This directory is in the same folder as the docker-compose.yml file.<br/>
   Please also make sure that your system meets the hardware requirements as mentioned in the first section of the installation guide.</p>
</div>

## Next Steps

Now you can continue with the tutorial on page [First steps](user-guide-first-steps.md).
