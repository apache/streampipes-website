---
id: configure-operate-deployment
title: Deployment options
sidebar_label: Deployment options
---


## Introduction

StreamPipes comes with many different options to customize a deployment. This section introduces the various options you can choose from when installing StreamPipes.

You can choose between various **deployment modes**, choose from two different core packages and several extension packages, wich are described below.

## Deployment Mode

For the deployment model, you choose between a standard multi-container `Docker-Compose` installation and the `Kubernetes` installation.
we provide several `Docker-Compose` files for the various options shown here and a `helm chart`. 
See [Docker Deployment](06_deploy-docker.md) and [Kubernetes Deployment](06_deploy-kubernetes.md) for more details.

### Running StreamPipes in a non-containerized environment

Of course, it is also possible to launch StreamPipes in a non-containerized environment. 
You will need to build your own executable binaries by running `mvn package`.
In addition, it is required to install the required 3rd party services (see [Architecture](07_technicals-architecture.md)) and configure the environment variables as described in [Environment Variables](06_configure-operate-environment-variables.md).

## Core Service

We provide two different pre-packaged versions of core services. The default `streampipes-service-core` is a packaged JAR file which includes client libraries for the various messaging systems StreamPipes supports at the cost of a larger file size.
In case you plan to run StreamPipes on less resource-intensive hardware, we recommend to switch to the `streampipes-service-core-minimal` package, which only includes support for MQTT and NATS, but has a smaller file size and slightly improved startup performance.

## Extension Services

Similar to the core, we provide several pre-packaged extension services which differ mainly by their file size, number of supported adapters and pipeline elements and messaging systems.

The following packages exist:

* `streampipes-extensions-all-jvm` is the largest package and includes all official StreamPipes adapters and pipeline elements. It also includes support for all messaging systems Streampipes currently supports.
* `streampipes-extensions-all-iiot` is a subset of the aforementioned package and excludes adapters and pipeline elements which are often not relevant for IIoT use cases. For instance, the package excludes text mining-related pipeline elements.
* `streampipes-extensions-iiot-minimal` is a subset of the aforementioned package and includes only support for the lightweight messaging systems MQTT and NATS.

Generally said, in cases where you plan to deploy StreamPipes on a resource-limited edge device, we recommend a combination of the `streampipes-service-core-minimal` and `streampipes-extensions-iiot-minimal` package. This could, for instance, be a device with less than 4GB memory.
In other cases, it depends on the use case and if you need all adapters and pipeline elements or are ok with the IIoT-related extensions.

## Messaging System

StreamPipes can be configured to use different messaging systems for exchanging events between adapters and pipeline elements.
The section [Messaging](07_technicals-messaging.md) includes detailed information on the configuration of messaging systems. 


StreamPipes Compose is a simple collection of user-friendly `docker-compose` files that easily lets gain first-hand experience with Apache StreamPipes.

> **NOTE**: We recommend StreamPipes Compose to only use for initial try-out and testing. If you are a developer and
> want to develop new pipeline elements or core feature, use the [StreamPipes CLI](07_extend-cli.md).

#### TL;DR: A one-liner to rule them all :-)

```bash
docker-compose up -d
```
Go to http://localhost to finish the installation in the browser. Once finished, switch to the pipeline editor and start the interactive tour or check the [online tour](https://streampipes.apache.org/docs/user-guide-tour/) to learn how to create your first pipeline!

## Prerequisites
* Docker >= 17.06.0
* Docker-Compose >= 1.17.0 (Compose file format: 3.4)
* Google Chrome (recommended), Mozilla Firefox, Microsoft Edge

Tested on: **macOS, Linux, Windows 10 upwards** (CMD, PowerShell, GitBash)

**macOS** and **Windows** users can easily get Docker and Docker-Compose on their systems by installing **Docker for Mac/Windows** (recommended).

> **NOTE**: On purpose, we disabled all port mappings except of http port **80** to access the StreamPipes UI to provide minimal surface for conflicting ports.

## Usage
We provide several options to get you going:

- **default**: Default docker-compose file, called `docker-compose.yml`.
- **nats**: The standard installation which uses Nats as message broker,called `docker-compose.nats.yml`.
- **full**: Contains experimental Flink wrappers, called `docker-compose.full.yml`.

:::info

Other options include configurations for the internally used message broker. The current default is `Kafka`, but you can also start StreamPipes with `Nats`, `MQTT` or `Apache Pulsar`.
Use one of the other provided docker-compose files.

:::

**Starting** the **default** option is as easy as simply running:
> **NOTE**: Starting might take a while since `docker-compose up` also initially pulls all Docker images from Dockerhub.

```bash
docker-compose up -d
# go to `http://localhost` after all services are started
```
After all containers are successfully started just got to your browser and visit http://localhost to finish the installation. Once finished, switch to the pipeline editor and start the interactive tour or check the [online tour](https://streampipes.apache.org/docs/user-guide-tour/) to learn how to create your first pipeline!

**Stopping** the **default** option is similarly easy:
```bash
docker-compose down
# if you want to remove mapped data volumes, run:
# docker-compose down -v
```

Starting the **nats** option is almost the same, just specify the `docker-compose.nats.yml` file:
```bash
docker-compose -f docker-compose.nats.yml up -d
# go to `http://localhost` after all services are started
```
**Stopping** the **nats** option:
```bash
docker-compose -f docker-compose.nats.yml down
```


Starting the **full** option is almost the same, just specify the `docker-compose.full.yml` file:
```bash
docker-compose -f docker-compose.full.yml up -d
#go to `http://localhost` after all services are started
```
Stopping the **full** option:
```bash
docker-compose -f docker-compose.nats.yml down
#docker-compose -f docker-compose.nats.yml down -v
```

## Update services
To actively pull the latest available Docker images use:
```bash
docker-compose pull
```

## Upgrade
To upgrade to another StreamPipes version, simply edit the `SP_VERSION` in the `.env` file.
```
SP_VERSION=<VERSION>
```


## Prerequisites
Requires Helm (https://helm.sh/) and an actively running Kubernetes cluster.

## Usage
We provide helm chart options to get you going in the `installer/k8s`folder.

**Starting** the default helm chart option is as easy as simply running the following command from the root of this folder:
> **NOTE**: Starting might take a while since we also initially pull all Docker images from Dockerhub.

```bash
helm install streampipes ./
```
After a while, all containers should successfully started, indicated by the `Running` status.

The `values.yaml` file contains several configuration options to customize your StreamPipes installation. See the section below for all configuration options.

## Ingress

The helm chart provides several options to configure an Ingress or to define an Ingressroute that directly integrates with Traefik.

## Dynamic Volume Provisioning

You can override the `storageClassName` variable to configure StreamPipes for dynamic volume provisioning.

## Parameters

Here is an overview of the supported parameters to configure StreamPipes.

### Common parameters

| Parameter Name                                   | Description                                             | Value                                   |
|--------------------------------------------------|---------------------------------------------------------|-----------------------------------------|
| deployment                                       | Deployment type (lite or full)                          | lite                                    |
| preferredBroker                                  | Preferred broker for deployment                         | "nats"                                  |
| monitoringSystem                                 | Enable monitoring system (true/false)                   | false                                   |
| pullPolicy                                       | Image pull policy                                       | "Always"                                |
| restartPolicy                                    | Restart policy for the container                        | Always                                  |
| persistentVolumeReclaimPolicy                    | Reclaim policy for persistent volumes                   | "Delete"                                |
| persistentVolumeAccessModes                      | Access mode for persistent volumes                      | "ReadWriteOnce"                         |
| initialDelaySeconds                              | Initial delay for liveness and readiness probes         | 60                                      |
| periodSeconds                                    | Interval between liveness and readiness probes          | 30                                      |
| failureThreshold                                 | Number of consecutive failures for readiness probes     | 30                                      |
| hostPath                                         | Host path for the application                           | ""                                      |

### StreamPipes common parameters

| Parameter Name                                  | Description                                             | Value                                    |
|-------------------------------------------------|---------------------------------------------------------|------------------------------------------|
| streampipes.version                             | StreamPipes version                                     | "0.93.0-SNAPSHOT"                        |
| streampipes.registry                            | StreamPipes registry URL                                | "apachestreampipes"                      |
| streampipes.auth.secretName                     | The secret name for storing secrets                     | "sp-secrets"                             |
| streampipes.auth.users.admin.user               | The initial admin user                                  | "admin@streampipes.apache.org"           |
| streampipes.auth.users.admin.password           | The initial admin password (leave empty for autogen)    | "admin"                                  |
| streampipes.auth.users.service.user             | The initial service account user                        | "sp-service-client"                      |
| streampipes.auth.users.service.secret           | The initial service account secret                      | empty (auto-generated)                   |
| streampipes.auth.encryption.passcode            | Passcode for value encryption                           | empty (auto-generated)                   |
| streampipes.core.appName                        | StreamPipes backend application name                    | "backend"                                |
| streampipes.core.port                           | StreamPipes backend port                                | 8030                                     |
| streampipes.core.persistence.storageClassName   | Storage class name for backend PVs                      | "hostpath"                               |
| streampipes.core.persistence.storageSize        | Size of the backend PV                                  | "1Gi"                                    |
| streampipes.core.persistence.claimName          | Name of the backend PersistentVolumeClaim               | "backend-pvc"                            |
| streampipes.core.persistence.pvName             | Name of the backend PersistentVolume                    | "backend-pv"                             |
| streampipes.core.service.name                   | Name of the backend service                             | "backend"                                |
| streampipes.core.service.port                   | TargetPort of the StreamPipes backend service           | 8030                                     |
| streampipes.ui.appName                          | StreamPipes UI application name                         | "ui"                                     |
| streampipes.ui.resolverActive                   | Flag for enabling DNS resolver for Nginx proxy          | true                                     |
| streampipes.ui.port                             | StreamPipes UI port                                     | 8088                                     |
| streampipes.ui.resolver                         | DNS resolver for Nginx proxy                            | "kube-dns.kube-system.svc.cluster.local" |
| streampipes.ui.service.name                     | Name of the UI service                                  | "ui"                                     |
| streampipes.ui.service.type                     | Type of the UI service                                  | "ClusterIP"                              |
| streampipes.ui.service.nodePort                 | Node port for the UI service                            | 8088                                     |
| streampipes.ui.service.port                     | TargetPort of the StreamPipes UI service                | 8088                                     |
| streampipes.ingress.active                      | Flag for enabling Ingress for StreamPipes               | false                                    |
| streampipes.ingress.annotations                 | Annotations for Ingress                                 | {}                                       |
| streampipes.ingress.host                        | Hostname for Ingress                                    | ""                                       |
| streampipes.ingressroute.active                 | Flag for enabling IngressRoute for StreamPipes          | true                                     |
| streampipes.ingressroute.annotations            | Annotations for IngressRoute                            | {}                                       |
| streampipes.ingressroute.entryPoints            | Entry points for IngressRoute                           | ["web", "websecure"]                     |
| streampipes.ingressroute.host                   | Hostname for IngressRoute                               | ""                                       |
| streampipes.ingressroute.certResolverActive     | Flag for enabling certificate resolver for IngressRoute | true                                     |
| streampipes.ingressroute.certResolver           | Certificate resolver for IngressRoute                   | ""                                       |


### Extensions common parameters

| Parameter Name                                  | Description                                             | Value                                    |
|-------------------------------------------------|---------------------------------------------------------|------------------------------------------|
| extensions.iiot.appName                         | IIoT extensions application name                        | extensions-all-iiot                      |
| extensions.iiot.port                            | Port for the IIoT extensions application                | 8090                                     |
| extensions.iiot.service.name                    | Name of the IIoT extensions service                     | extensions-all-iiot                      |
| extensions.iiot.service.port                    | TargetPort of the IIoT extensions service               | 8090                                     |


### External common parameters

#### Couchdb common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.couchdb.appName                        | CouchDB application name                                 | "couchdb"                                |
| external.couchdb.version                        | CouchDB version                                          | 3.3.1                                    |
| external.couchdb.user                           | CouchDB admin username                                   | "admin"                                  |
| external.couchdb.password                       | CouchDB admin password                                   | empty (auto-generated)                   |
| external.couchdb.port                           | Port for the CouchDB service                             | 5984                                     |
| external.couchdb.service.name                   | Name of the CouchDB service                              | "couchdb"                                |
| external.couchdb.service.port                   | TargetPort of the CouchDB service                        | 5984                                     |
| external.couchdb.persistence.storageClassName   | Storage class name for CouchDB PVs                       | "hostpath"                               |
| external.couchdb.persistence.storageSize        | Size of the CouchDB PV                                   | "1Gi"                                    |
| external.couchdb.persistence.claimName          | Name of the CouchDB PersistentVolumeClaim                | "couchdb-pvc"                            |
| external.couchdb.persistence.pvName             | Name of the CouchDB PersistentVolume                     | "couchdb-pv"                             |

#### Influxdb common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.influxdb.appName                       | InfluxDB application name                                | "influxdb"                               |
| external.influxdb.version                       | InfluxDB version                                         | 2.6                                      |
| external.influxdb.username                      | InfluxDB admin username                                  | "admin"                                  |
| external.influxdb.password                      | InfluxDB admin password                                  | empty (auto-generated)                   |
| external.influxdb.adminToken                    | InfluxDB admin token                                     | empty (auto-generated)                   |
| external.influxdb.initOrg                       | InfluxDB initial organization                            | "sp"                                     |
| external.influxdb.initBucket                    | InfluxDB initial bucket                                  | "sp"                                     |
| external.influxdb.initMode                      | InfluxDB initialization mode                             | "setup"                                  |
| external.influxdb.apiPort                       | Port number for the InfluxDB service (API)               | 8083                                     |
| external.influxdb.httpPort                      | Port number for the InfluxDB service (HTTP)              | 8086                                     |
| external.influxdb.grpcPort                      | Port number for the InfluxDB service (gRPC)              | 8090                                     |
| external.influxdb.service.name                  | Name of the InfluxDB service                             | "influxdb"                               |
| external.influxdb.service.apiPort               | TargetPort of the InfluxDB service for API               | 8083                                     |
| external.influxdb.service.httpPort              | TargetPort of the InfluxDB service for HTTP              | 8086                                     |
| external.influxdb.service.grpcPort              | TargetPort of the InfluxDB service for gRPC              | 8090                                     |
| external.influxdb.persistence.storageClassName  | Storage class name for InfluxDB PVs                      | "hostpath"                               |
| external.influxdb.persistence.storageSize       | Size of the InfluxDB PV                                  | "1Gi"                                    |
| external.influxdb.persistence.storageSizeV1     | Size of the InfluxDB PV for v1 databases                 | "1Gi"                                    |
| external.influxdb.persistence.claimName         | Name of the InfluxDBv2 PersistentVolumeClaim             | "influxdb2-pvc"                          |
| external.influxdb.persistence.claimNameV1       | Name of the InfluxDBv1 PersistentVolumeClaim             | "influxdb-pvc"                           |
| external.influxdb.persistence.pvName            | Name of the InfluxDBv2 PersistentVolume                  | "influxdb2-pv"                           |
| external.influxdb.persistence.pvNameV1          | Name of the InfluxDBv1 PersistentVolume                  | "influxdb-pv"                            |


#### Nats common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.nats.appName                           | NATS application name                                    | "nats"                                   |
| external.nats.port                              | Port for the NATS service                                | 4222                                     |
| external.nats.version                           | NATS version                                             |                                          |
| external.nats.service.type                      | Type of the NATS service                                 | "NodePort"                               |
| external.nats.service.externalTrafficPolicy     | External traffic policy for the NATS service             | "Local"                                  |
| external.nats.service.name                      | Name of the NATS service                                 | "nats"                                   |
| external.nats.service.port                      | TargetPort of the NATS service                           | 4222                                     |


#### Kafka common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.kafka.appName                          | Kafka application name                                   | "kafka"                                  |
| external.kafka.version                          | Kafka version                                            | 2.2.0                                    |
| external.kafka.port                             | Port for the Kafka service                               | 9092                                     |
| external.kafka.external.hostname                | Name which will be advertised to external clients. Clients which use (default) port 9094       | "localhost"
| external.kafka.service.name                     | Name of the Kafka service                                | "kafka"                                  |
| external.kafka.service.port                     | TargetPort of the Kafka service                          | 9092                                     |
| external.kafka.service.portOutside              | Port for Kafka client outside of the cluster | 9094                              |
| external.kafka.persistence.storageClassName     | Storage class name for Kafka PVs                         | "hostpath"                               |
| external.kafka.persistence.storageSize          | Size of the Kafka PV                                     | "1Gi"                                    |
| external.kafka.persistence.claimName            | Name of the Kafka PersistentVolumeClaim                  | "kafka-pvc"                              |
| external.kafka.persistence.pvName               | Name of the Kafka PersistentVolume                       | "kafka-pv"                               |
|

#### Zookeeper common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.zookeeper.appName                      | ZooKeeper application name                               | "zookeeper"                              |
| external.zookeeper.version                      | ZooKeeper version                                        | 3.4.13                                   |
| external.zookeeper.port                         | Port for the ZooKeeper service                           | 2181                                     |
| external.zookeeper.service.name                 | Name of the ZooKeeper service                            | "zookeeper"                              |
| external.zookeeper.service.port                 | TargetPort of the ZooKeeper service                      | 2181                                     |
| external.zookeeper.persistence.storageClassName | Storage class name for ZooKeeper PVs                     | "hostpath"                               |
| external.zookeeper.persistence.storageSize      | Size of the ZooKeeper PV                                 | "1Gi"                                    |
| external.zookeeper.persistence.claimName        | Name of the ZooKeeper PersistentVolumeClaim              | "zookeeper-pvc"                          |
| external.zookeeper.persistence.pvName           | Name of the ZooKeeper PersistentVolume                   | "zookeeper-pv"                           |


#### Pulsar common parameters

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| external.pulsar.appName                         | pulsar application name                                  | "pulsar"                                 |
| external.pulsar.version                         | pulsar version                                           | 3.0.0                                    |
| external.pulsar.port                            | Port for the pulsar service                              | 6650                                     |
| external.pulsar.service.name                    | Name of the pulsar service                               | "pulsar"                                 |
| external.pulsar.service.port                    | TargetPort of the pulsar service                         | 6650                                     |
| external.pulsar.persistence.storageClassName    | Storage class name for pulsar PVs                        | "hostpath"                               |
| external.pulsar.persistence.storageSize         | Size of the pulsar PV                                    | "1Gi"                                    |
| external.pulsar.persistence.claimName           | Name of the pulsar PersistentVolumeClaim                 | "pulsar-pvc"                             |
| external.pulsar.persistence.pvName              | Name of the pulsar PersistentVolume                      | "pulsar-pv"                              |

### Monitoring common parameters

#### Monitoring - Prometheus

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| prometheus.appName                              | Prometheus application name                              | "prometheus"                             |
| prometheus.version                              | Prometheus version                                       | 2.45.0                                   |
| prometheus.port                                 | Prometheus port                                          | 9090                                     |
| prometheus.service.name                         | Prometheus service name                                  | "prometheus"                             |
| prometheus.service.port                         | Prometheus service port                                  | 9090                                     |
| prometheus.persistence.storageClassName         | Prometheus storage class name                            | "hostpath"                               |
| prometheus.persistence.storageSize              | Prometheus storage size                                  | "2Gi"                                    |
| prometheus.persistence.claimName                | Prometheus PVC claim name                                | "prometheus-pvc"                         |
| prometheus.persistence.pvName                   | Prometheus PV name                                       | "prometheus-pv"                          |
| prometheus.persistence.tokenStorageSize         | Prometheus token storage size                            | "16Ki"                                   |
| prometheus.config.scrapeInterval                | Prometheus scrape interval                               | 10s                                      |
| prometheus.config.evaluationInterval            | Prometheus evaluation interval                           | 15s                                      |
| prometheus.config.backendJobName                | Prometheus backend job name                              | "backend"                                |
| prometheus.config.extensionsName                | Prometheus extensions job name                           | "extensions-all-iiot"                    |
| prometheus.config.tokenFileName                 | Prometheus token file name                               | "token"                                  |
| prometheus.config.tokenFileDir                  | Prometheus token file directory                          | "/opt/data"

#### Monitoring - Grafana

| Parameter Name                                  | Description                                              | Value                                    |
|-------------------------------------------------|----------------------------------------------------------|------------------------------------------|
| grafana.appName                                 | Grafana application name                                 | "grafana"                                |
| grafana.version                                 | Grafana version                                          | 10.1.2                                   |
| grafana.port                                    | Grafana port                                             | 3000                                     |
| grafana.service.name                            | Grafana service name                                     | "grafana"                                |
| grafana.service.port                            | Grafana service port                                     | 3000                                     |
| grafana.persistence.storageClassName            | Grafana storage class name                               | "hostpath"                               |
| grafana.persistence.storageSize                 | Grafana storage size                                     | "1Gi"                                    |
| grafana.persistence.claimName                   | Grafana PVC claim name                                   | "grafana-pvc"                            |
| grafana.persistence.pvName                      | Grafana PV name                                          | "grafana-pv"                             |


## Auto-generation of parameters.

The helm chart includes a `secrets.yaml` file which auto-generates several settings as follows:

```yaml

apiVersion: v1
kind: Secret
metadata:
  name: sp-secrets
  namespace: {{ .Release.Namespace | quote }}
type: Opaque
data:
  sp-initial-admin-password: {{ ternary (randAlphaNum 10) .Values.streampipes.auth.users.admin.password (empty .Values.streampipes.auth.users.admin.password) | b64enc | quote }}
  sp-initial-client-secret: {{ ternary (randAlphaNum 35) .Values.streampipes.auth.users.service.secret (empty .Values.streampipes.auth.users.service.secret) | b64enc | quote }}
  sp-encryption-passcode:  {{ ternary (randAlphaNum 20) .Values.streampipes.auth.encryption.passcode (empty .Values.streampipes.auth.encryption.passcode) | b64enc | quote }}
  sp-couchdb-password:  {{ ternary (randAlphaNum 20) .Values.external.couchdb.password (empty .Values.external.couchdb.password) | b64enc | quote }}
  sp-ts-storage-password:  {{ ternary (randAlphaNum 20) .Values.external.influxdb.password (empty .Values.external.influxdb.password) | b64enc | quote }}
  sp-ts-storage-token:  {{ ternary (randAlphaNum 20) .Values.external.influxdb.adminToken (empty .Values.external.influxdb.adminToken) | b64enc | quote }}

```


## Deleting the current helm chart deployment:
```bash
helm uninstall streampipes
```


his page explains how SSL Certificates can be used to provide transport layer security between your Browser and the Streampipes Backend.

## Prerequisites
You need a valid Certificate consisting of a Private and a Public Key. Both Keys must be in PEM Format. Please note that your Private Key should never be shared, otherwise the communication can not be considered secure.

## Edit docker-compose.yml
In order to use SSL you have to open port 443 on the nginx Service. Incoming insecure Traffic on Port 80 will be automatically rerouted to Port 443.

The Environment-Variable NGINX_SSL must be set to "true".

Finally you have to inject the Certificates into the Docker-Container. In the example below, the Certificates are placed in the directory /etc/ssl/private/ on the host machine. Please change the path according to the place where the Certificates are located on your machine. The path after the colon should not be changed!
```yaml
[...]
  nginx:
    image: apachestreampipes/ui
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NGINX_SSL=true
    volumes:
      - /etc/ssl/private/private.pem:/etc/nginx/ssl/ssl.pem
      - /etc/ssl/private/public.pem:/etc/nginx/ssl/cert.pem
    depends_on:
      - backend
    networks:
      spnet:
[...]
```

