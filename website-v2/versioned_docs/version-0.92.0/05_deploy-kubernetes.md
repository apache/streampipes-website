---
id: deploy-kubernetes
title: Kubernetes Deployment
sidebar_label: Kubernetes Deployment
---

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

The `values.yaml` file contains several configuration options to customize your StreamPipes installation. See the file for all configuration options.

## Ingress

The helm chart provides several options to configure an Ingress or to define an Ingressroute that directly integrates with Traefik.

## Dynamic Volume Provisioning

You can override the `storageClassName` variable to configure StreamPipes for dynamic volume provisioning.


## Deleting the current helm chart deployment:
```bash
helm uninstall streampipes
```
