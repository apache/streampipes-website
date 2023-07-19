---
id: faq-common-problems
title: Common Problems
sidebar_label: Common Problems
original_id: faq-common-problems
---

* Windows 10: Consul, Kafka, Zookeeper, or Kafka-Rest did not start
* Linux / OSX: Consul does not start
* Run StreamPipes in a VM in Windows
* Only few processors are available in the pipeline editor
* No data is shown in the live dashbord
* Windows 10: Should I use settings windows containers or docker containers?
* Configurations are not deleted
* Help us to improve StreamPipes and this documentation
* Docker Network already used

## Windows 10: Consul, Kafka, Zookeeper, or Kafka-Rest did not start
**Problem:** You get an error message similar to: `ERROR: for consul  Cannot start service consul: b'driver failed programming external connectivity on endpoint sp-test_consul_1 (eae0457fc03c1364b8e81a6e155ca4b95ee1e1d01bb3c1aa9dd5192bdcb7b91a): Error starting userland proxy: mkdir /port/tcp:0.0.0.0:8600:tcp:172.30.0.9:8600: input/output error`

**Solution:** To resolve this problem, stop StreamPipes with `streampipes stop` and restart Docker via the Docker settings in the task bar.
After Docker was restarted, run `streampipes start`.

## Consul does not start
**Problem:** After starting StreamPipes with `streampipes start`, there is an error with Consul:

**Solution:** To resolve this, execute `streampipes stop`, wait a minute and start it again with `streampipes start`. If you've installed an old version of StreamPipes (before the installer was available), make sure that no network suffixed with `spnet` exists in Docker. Type `docker network ls` to check and `docker network rm NETWORK_NAME` to remove the existing network before running the installer.

## Run StreamPipes in a VM in Windows
**Problem:** StreamPipes does not work properly with Docker under Windows 8 or earlier versions.

**Solution:** We do support virtual machines (VMs), but if you run them under Windows, there might be problems with docker and its network configurations.
Please use Windows 10, OSX or Linux.
You can also use a VM from a cloud provider to test StreamPipes.


## Only few processors are available in the pipeline editor
**Problem:** In the Pipeline Editor, only a few processors can be used in pipelines.

**Solution:** In the demo/desktop version, we only integrated a few processors. To ensure that you can easily try out StreamPipes (even on your laptop),
 we tried to make it as lightweight as possible. If you are interested in more sophisticated algorithms, pleas contact us.


## No data is shown in the live dashboard
**Problem:** The live dashboard does not show any data.

**Solution:** If this is the case, your IP is probably configured wrong.
You can reinstall the system by running `streampipes clean` and then `streampipes start` again.
This will delete all StreamPipes configurations. StreamPipes is designed as a server application and requires a fixed IP.
We created a version to easily run it on your laptop and test it, but on your laptop you usually get a new IP when you change the network.
This problem only occurs in testing scenarios, in production scenarios the IP can also be changed manually without data loss.

## Windows 10: Should I use settings windows containers or docker containers
**Problem:** StreamPipes does not work with Windows 10.

**Solution:** You should use docker containers. Go to the docker settings on our taks bar and select 'Switch to Docker containers'.

## Configurations are not deleted
**Problem:** The configurations are not deleted from the host system. Even after manually removing the 'config/' folder StreamPipes settings are note deleted.
Also the Consul settings are still there.

**Solution:** Probably Docker did not mount a volume in the 'config/' folder. You must delete the anonymous docker volumes manually. See in docker [documentation](https://docs.docker.com/engine/reference/commandline/volume_rm/).


## Docker Network already used
**Problem:** When starting StreamPipes the error message: "Creating network 'streampipes-cli_spnet' with driver 'bridge' Pool overlaps with other one on this address space" is shown.

**Solution:** Delete old networks for example with "docker network prune".

## Help us to improve StreamPipes and this documentation
Help us to improve this section.
If you have any problems with the system or with the documentation, do not hesitate to contact us.
Our goal is to continuously improve StreamPipes.
Your help and feedback is welcome.
