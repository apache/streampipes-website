---
title: StreamPi(pes) - Running StreamPipes on Raspberry Pi
author: Patrick Wiener
authorURL: "https://twitter.com/patrickwiener"
authorImageURL: "/img/wiener.png"
---
<img class="blog-image" style={{maxWidth: '100%'}} src="/img/blog/2020-01-23/streampipes_raspberrypi.png" alt="StreamPipes on Raspberry Pi"/>
**<div style={{float: 'left', paddingRight: '40px'}}>5 minutes to read</div>**
<br/>


This is the start of a two part series on how we want to bring StreamPipes closer to the edge. The [first part](/docs/blog/2020/01/23/streampipes_on_rpi) describes how we managed to build and deploy StreamPipes on one Raspberry Pi (Model 4), while the [second part](/docs/blog/2020/05/27/streampipes_on_k3s) further covers how to deploy StreamPipes over a Kubernetes cluster of two Raspberry Pi's via K3s using our StreamPipes helm chart.
<!--truncate-->

<TL;DR>

_With new advancements that came in the last StreamPipes release, we managed to reduce the required resources (mainly memory) drastically. To this extent, we cross-compiled StreamPipes Docker images for ARM support and deployed our lite version on a Raspberry Pi (Model 4). We showcase, that it is feasible to run analytical pipelines with ease and operate StreamPipes at moderate load._

Apache StreamPipes (incubating) is a self-service (Industrial) IoT toolbox to enable non-technical users to easily connect, analyze and explore IoT data streams. Users can leverage algorithms from an extensible toolbox to model their analytical pipelines. By building on a microservice architecture, StreamPipes components can be distributed in a cluster (e.g. Kubernetes)  as well as run on a single node for prototypical and development purposes using Docker. With the latest release of StreamPipes (0.65.0), we managed to reduce the memory consumption drastically to use less than 2Gig‘s of RAM for the lite version. Since we had a Raspberry Pi Model 4 laying around, we thought: hey why not just deploy StreamPipes on a Pi - and that’s what we did. Along the way, we learned quite some interesting things, that we want to share in this blog post.

When users model their analytical pipelines using the graphical pipeline editor, the corresponding pipeline element containers, hosting these algorithms, are invoked by a rest call from the backend to start a new thread with the corresponding algorithm. In typical edge use cases such as in the industrial internet of things (IIoT), it is oftentimes neither feasible nor necessary to simply send all raw data to the cloud to perform analytics. On the contrary, requirements often induce the challenges to either derive decisions in a time-sensitive manner (near realtime), preprocess  data to reduce and harmonize it, or anonymize it by pixeling personal information such as faces in video footages. In these scenarios, StreamPipes can aid by running dedicated pipeline element containers directly on the edge using edge nodes such as Raspberry Pi‘s close to where data origins to address the aforementioned challenges.

<img class="blog-image" align="center" style={{maxWidth: '80%'}} src="/img/blog/2020-01-23/00_idea.png" alt="StreamPipes lite on Raspberry Pi"/>

StreamPipes Docker images were only built for x86 based architectures. However, oftentimes edge devices such as Raspberry Pi's or Nvidia Jetson Nano's run ARM based 32 or 64bit architectures. Thus, we could not simply use our existing Docker images to deploy StreamPipes as is. Luckily, Docker offers solutions to cross-compile images. Together with Docker‘s experimental manifest feature, the deployment works like a charms [[1](https://docs.docker.com/engine/reference/commandline/manifest/)]. There are awesome blog posts online [[2](https://ownyourbits.com/2018/06/27/running-and-building-arm-docker-containers-in-x86/)] that guide you through the process of cross-compilation, so we are not going to cover it in this blog post. With that, we were able to build StreamPipes images for AMD, ARM32v7 and ARM64v8 by just adding a few lines to our Dockerfiles and CI/CD pipelines. After having built and pushed our newly created Docker images, we were able to use our existing installation workflow, e.g. StreamPipes CLI, to start StreamPipes on the Raspberry Pi.

<img class="blog-image" style={{maxWidth: '100%'}} src="/img/blog/2020-01-23/01_start.png" alt="StreamPipes CLI starting StreamPipes lite version on Raspberry Pi 4"/>

The figure shows StreamPipes CLI starting our internal `0.65.1-SNAPSHOT` version, where we tested the multiarch build of our images. As depicted, all StreamPipes lite services are started. Due to the fact, that we created a manifest for all our Docker images, we did not have to change a single image description specified in the various `docker-compose.yml` files in the service repository. This is pretty cool! The Docker daemon automatically pulls the correct image for the corresponding architecture - in our case ARM32v7. Taking a quick look at `htop` indicates that we operate on a constant level of consumed memory at around ~1.7GB.

<img class="blog-image" style={{maxWidth: '100%'}} src="/img/blog/2020-01-23/02_htop.png" alt="htop showing around 1.7GB memory consumption"/>

### Demo: Temperature Monitoring Pipeline
To test our setup, we deployed a simple temperature monitoring pipeline, that throws a notification whenever the temperature value exceeds a certain threshold (in this case: 65°C) and visualizes the results in a basic dashboard (see figure). Therefore, we use existing pipeline elements of the algorithm toolbox provided within the lite version. Thereby, StreamPipes lite already hooks you up with sample data sources - in this case a flow rate sensor - producing temperature, as well as mass flow measurements. So our temperature monitoring pipeline consists of the following pipeline elements:

- **Data source:** Flow rate sensor (mock data generating `<timestamp;sensorid;massflow;temperature>` each second)
- **Data processor:** Numerical filter (specified temperature threshold: > 65°C)
- **Data sinks:** Dashboard visualization, Notification (internal)

<img class="blog-image" style={{maxWidth: '100%'}} src="/img/blog/2020-01-23/03_pipeline.png" alt="Simple pipeline visualizing and notifying about temperature values above threshold (here 65°C)"/>

After saving and starting the pipeline, we built our dashboard based on the results of the pipeline, only showing values above 65°C. Additionally, we receive a notification for every event, that exceeds this temperature threshold.

<img class="blog-image" style={{maxWidth: '100%'}} src="/img/blog/2020-01-23/04_dashboard.png" alt="Dashboard"/>


### So, what's next?
Starting out as a simple hack session on a late afternoon, trying to test where we could potentially run StreamPipes on and push it to it's limits, we gained valueable insights on how to build and run it on various architectures. Even though we do not recommend deploying StreamPipes in it's full glory on single low-resourced devices such as Raspberry Pi's, we aim to bring certain algorithms closer to where data is generated - on the edge. Consequently - apart from x86 images - we plan on providing our StreamPipes Docker images for ARM based architectures in the future. As a sneak peak - we also plan on deploying StreamPipes over a K3s [[3](https://k3s.io/)] cluster, a lightweight Kubernetes distro especially suited for IoT and edge scenarios.

- **[Part 1: StreamPi(pes) - Running StreamPipes on Raspberry Pi](/blog/2020/01/23/streampipes_on_rpi)**
- [Part 2: Running StreamPipes the Kubernetes-Way using K3s](/blog/2020/05/27/streampipes_on_k3s)


### Useful links
- [1] [Docker manifest docs](https://docs.docker.com/engine/reference/commandline/manifest/)
- [2] [Running and Building ARM Docker containers in x86](https://ownyourbits.com/2018/06/27/running-and-building-arm-docker-containers-in-x86/)
- [3] [K3s - lightweight Kubernetes distro](https://k3s.io/)
