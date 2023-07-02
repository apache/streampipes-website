---
id: try-installation
title: Installation
sidebar_label: Installation
original_id: try-installation
---

The easiest way to install StreamPipes is our Docker-based installation. For production-grade deployments, we also
recommend looking at our Kubernetes support, which is also part of the installation kit.

## Prerequisites

The Docker-based installation requires **Docker** and **Docker Compose** to be installed on the target machine.
Installation instructions can be found below.

<div class="admonition info">
    <div class="admonition-title">Install Docker</div>
    <p>Go to https://docs.docker.com/installation/ and follow the instructions to install Docker for your OS. Make sure
        docker can be started as a non-root user (described in the installation manual, don’t forget to log out and in
        again) and check that Docker is installed correctly by executing docker-run hello-world</p>
</div>

### Supported operating systems

The Docker-based installation supports the operating systems **Linux**, **Mac OS X** and **Windows 10**. Older windows
versions are not fully compatible with Docker. Linux VMs running under Windows might cause network problems with Docker,
therefore some manual work might be needed to make StreamPipes run properly.

### Web Browser

The StreamPipes application itself will be accessible through a web browser. We recommend a recent version of Chrome (
best experience), Firefox or Edge.

## Install StreamPipes

<ul style="padding-left:0">
    <li class="installation-step" style="margin-top:20px;">
        <div class="wrapper-container" style="">
            <div class="wrapper-step">
              <span class="fa-stack fa-2x">
                   <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                   <strong class="fa-stack-1x" style="color:white;">1</strong>
              </span>
            </div>
            <div class="wrapper-instruction">
                Download the latest Apache StreamPipes release and extract the zip file to a directory of your choice.
                <table class="table" style="margin-top:30px;">
                    <thead>
                    <tr style="background:rgb(27, 20, 100);color:white;">
                        <th scope="col" style="border-bottom:0px;border-top:0px;">File</th>
                        <th scope="col" style="border-bottom:0px;border-top:0px;">Version</th>
                        <th scope="col" style="border-bottom:0px;border-top:0px;">Release Date</th>
                        <th scope="col" style="border-bottom:0px;border-top:0px;">Signatures</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <a href="https://www.apache.org/dyn/closer.lua?action=download&filename=streampipes/0.90.0/apache-streampipes-0.90.0-source-release.zip">apache-streampipes-0.90.0-source-release.zip</a>
                        </td>
                        <td>0.90.0</td>
                        <td>2023-01-17</td>
                        <td>
                            <a href="https://downloads.apache.org/streampipes/0.90.0/apache-streampipes-0.90.0-source-release.zip.sha512">SHA</a>
                            <a href="https://downloads.apache.org/streampipes/0.90.0/apache-streampipes-0.90.0-source-release.zip.asc">PGP</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="alert alert-info" role="alert">
                        The above release file should be verified using the PGP signatures and the <a
                            href="https://downloads.apache.org/streampipes/KEYS">project release KEYS</a>. See the
                        official ASF <a target="asf" href="https://www.apache.org/dyn/closer.cgi#verify">verification
                        instructions</a> for a description of using the PGP and KEYS files for verification. A SHA512
                        checksum is also provided as an additional verification method.
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li class="installation-step">
        <div class="wrapper-container">
            <div class="wrapper-step">
              <span class="fa-stack fa-2x">
                   <i class="fas fa-circle fa-stack-2x sp-color-green"></i>
                   <strong class="fa-stack-1x" style="color:white;">2</strong>
              </span>
            </div>
            <div class="wrapper-instruction">
                <div style="margin-bottom:5px;">In a command prompt, open the folder <code>installer/compose</code> and
                    run <code>docker-compose up -d</code>
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
                Open your browser, navigate to http://localhost:80 (or the domain name of your server) and log in using
                the default email <code>admin@streampipes.apache.org</code> and default password <code>admin</code>.
            </div>
        </div>
    </li>
</ul>

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
        If there is a problem with any of the components, please restart the whole system (<code>docker-compose
            down</code> and eventually also delete the volumes).
        Please also make sure that you've assigned enough memory available to Docker.</p>
</div>

## Next Steps

That's it! Have a look at the usage guide to learn how to use Apache StreamPipes.
