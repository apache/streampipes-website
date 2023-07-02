---
title: Running StreamPipes the Kubernetes-Way using k3s
author: Patrick Wiener
authorURL: "https://twitter.com/patrickwiener"
authorImageURL: "/docs/img/wiener.png"
---
<img class="blog-image" style="max-width:100%;" src="/docs/blog/assets/2020-05-27/streampipes_k3s.png" alt="StreamPipes on k3s"/>
**<div style="float: left; padding-right: 40px;">15 minutes to read</div>**
<br>


This blog post is the second part of a series on how we want to bring StreamPipes closer to the edge. The [first part](/docs/blog/2020/01/23/streampipes_on_rpi) describes how we managed to build and deploy StreamPipes on one Raspberry Pi (Model 4), while the [second part](/docs/blog/2020/05/27/streampipes_on_k3s) further covers how to deploy StreamPipes over a Kubernetes cluster of two Raspberry Pi's via k3s using our StreamPipes helm chart.
<!--truncate-->

**<TL;DR>**

**With new advancements that came in the last StreamPipes release, we managed to reduce the required resources (mainly memory) drastically. To this extent, we cross-compiled StreamPipes Docker images for ARM support and deployed our lite version on a Raspberry Pi (Model 4). We showcase, that it is feasible to run analytical pipelines with ease and operate StreamPipes at moderate load. Additionally, we demonstrate how to deploy StreamPipes over a two-node k3s cluster using our StreamPipes helm chart.**

<img class="blog-image" style="max-width:80%;" src="/docs/blog/assets/2020-05-27/k3s.png" alt="K3s"/>

## Introduction

While it is easy to get started with StreamPipes in no time using our single-node deployment [instructions](/docs/docs/user-guide-installation) using Docker and Docker-Compose, StreamPipes naturally is designed to run in a distributed cluster setup through its microservice architecture.

This architectural design paired with the advancements of multi-architecture StreamPipes images as described in the previous blog post allows us to run certain analytical pipeline element containers with ease on various target nodes as well as target hardware architecture wether it is X86, ARM32v7, or ARM64v8. This becomes more valuable, as we shift the focus away from centralized cloud or data center only deployments where we generally are provided with a homogenous compute landscape in terms of resources towards edge deployments that oftentimes envolve resource-limited, constrained devices that not only differ in terms of compute but also in terms of their chip architecture.

Thereby, having multi-architecture images in your repertoire is key to deal with the challenge of heterogeneity in compute resources along the edge-cloud continuum. However, there are other challenges that occur when dealing with distributed container deployments such as automating deployments itself, scaling them, managing the containerized applications, taking care of networking between services, or realizing fault-tolerance by comparing the desired state against the current one. If there wasn't some solution we could leverage that takes care of all of this.

## Well, which K to use? Kubernetes, K3s

Fortunately, there exists a few solutions in the container ecosystem with the open source container orchestrator [Kubernetes](https://kubernetes.io) (K8s) being the defacto standard, thereby incorporating the best ideas of Google's internal large-scale container cluster management system [Borg](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/) (see academic paper about the details published at [EuroSys 2015](https://research.google/pubs/pub43438/)). Since we are not going to write "yet another K8s basics blog post", we refer to their docs or other awesome blog posts such as the [Kubernetes 101](https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16) to get familiarized with the concepts and terminology. With all the power, concepts and terminology K8s provides, it is oftentimes hard for newcomers to get started. Additionally, not all use cases necessarily need these extra features that K8s adds.

On the other hand, there exists [K3s](https://k3s.io/), a lightweight Kubernetes distro by Rancher that was introduced early 2019 and has since then gained huge popularity. As it is stated on their website:

* **Perfect for Edge**: _K3s is a highly available, certified Kubernetes distribution designed for production workloads in unattended, resource-constrained, remote locations or inside IoT appliances_
* **Simplified & Secure**: _K3s is packaged as a single <40MB binary that reduces the dependencies and steps needed to install, run and auto-update a production Kubernetes cluster._
* **Optimized for ARM**: _Both ARM64 and ARMv7 are supported with binaries and multiarch images available for both. K3s works great from something as small as a Raspberry Pi to an AWS a1.4xlarge 32GiB server._

Thus, this lead us to the point to say, hey why not use K3s to manage StreamPipes in all its glory. The containerized microservice design in addition to the newly available multiarch images are a great fit.


## StreamPipes Helm Chart
While you can easily write an deploy K8s YAML-based manifests for your deployments and services and so on the standard way, it is way more convenient to leverage  [Helm](https://helm.sh/), the package manager for K8s. Helm describes complex, distributed deployments using **charts** in order to provide repeatable application installation, easy updates, rollbacks etc.

To this extent, we wrote a Helm chart for StreamPipes that can be found on our Github [incubator-streampipes-installer](https://github.com/apache/incubator-streampipes-installer/tree/dev/helm-chart) repository. This allows to deploy StreamPipes as one liner as shown later. Helm charts follow a certain directory structure as depicted in the following:

```
helm-chart/
  Chart.yaml
  values.yaml
  templates/
  ...
```
The `Chart.yaml` file contains a description of the chart, e.g., metadata such as chart name, version, maintainers etc.

The `values.yaml` file contains default values for all charts and in our case serves the purpose to provide a central place to store all variable/values, e.g., `streampipes.registry: "apachestreampipes"`, that replace chart templates such as the registry and version of the StreamPipes backend image:

```yaml
...
image: {{ .Values.streampipes.registry }}/backend:{{ .Values.streampipes.version }}
...
```

Lastly, the `template/` directory is for template files. When Helm evaluates a chart, it sends all of the files in this directory through the template rendering engine before collecting the results and finally forwarding them to K8s. If interested, you can read more on this in the [official Helm documentation](https://helm.sh/docs/).


## The almighty StreamPi K3s Cluster
As pointed out in the first part of the series, we have gained valueable insights on how to run and deploy StreamPipes on a Raspberry Pi. This worked out so greatly, that we thought, why not step up the game, use another Pi and built the **almighty StreamPi cluster** by leveraging K3s for orchestration and management.

**Note**: We are aware that this is far off from a production-grade setup, especially running StreamPipes core services such as the central pipeline management backend, or the UI in a two-node cluster. However, it provides a solid starting point for more elaborate deployments along the edge-cloud continuum.

As shown in the following figure, starting from the multiarch images hosted on [Dockerhub](https://hub.docker.com/search?q=apachestreampipes&type=image), we first provisioned the two Pi's with Docker, install and setup K3s and finally deploy our StreamPipes helm chart in order for users to connect, analyze and exploit their IIoT data with StreamPipes.


<img class="blog-image" style="max-width:100%;" src="/docs/blog/assets/2020-05-27/deployment.png" alt="Deployment"/>

In the remainder, we cover how we installed Helm and K3s to form our almighty StreamPi K3s cluster. At the time of writing, we tested our deployment using the latest version of the Docker, Helm as well as K3s in the following setup

* 2x Raspberry Pi Model 4 (4GiB RAM): `streampi-01`, `streampi-02`
* Raspbian Buster 10
* Docker 19.03.8
* Helm 3.1.2
* K3s v1.17.4+k3s1


### 1. Install Docker
SSH into your Raspberry Pi's and run the following command:
```bash
curl -sSL https://get.docker.com | sh
```

### 2. Install K3s
Now that we got Helm installed, we can proceed and install K3s. Thus, we must check wether we fulfill all the requirements. These are mainly network related, such that specific ports (server on `6443`) are accessible. You should carefully read about this in their [official documentation](https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/).

Other than that, lean back and enjoy - the installation happens so fast, you might miss it if you get a coffee :)

#### SSH into K3s server (`streampi-01`)
On the server node, run the following command:

```bash
sudo curl -sfL https://get.k3s.io | sh -
```
A kubeconfig file is written to `/etc/rancher/k3s/k3s.yaml` and the service is automatically started or restarted. The install script will install k3s and additional utilities, such as `kubectl`, `crictl`, `k3s-killall.sh`, and `k3s-uninstall.sh`.

The K3s installer creates a systemd service which can be used to `stop`, `start`, `restart` and check the `status` of the K3s server.

```bash
sudo systemctl status k3s.service

● k3s.service - Lightweight Kubernetes
   Loaded: loaded (/etc/systemd/system/k3s.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2020-04-11 15:54:07 BST; 3 days ago
     Docs: https://k3s.io
  Process: 10193 ExecStartPre=/sbin/modprobe br_netfilter (code=exited, status=0/SUCCESS)
  Process: 10194 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)
 Main PID: 10195 (k3s-server)
 (...)
```

Next, copy the server node token in order to connect additional agent nodes to the cluster.
```bash
sudo cat /var/lib/rancher/k3s/server/node-token
```

#### SSH into K3s agent (`streampi-02`)
Now, open a new terminal session and SSH into your agent and run the following command, thereby adding the copied `K3S_TOKEN` to connect to the server, that is specified using `K3S_URL`.

```bash
sudo curl -sfL https://get.k3s.io | K3S_URL=https://streampi-01:6443 \
K3S_TOKEN=<NODE_TOKEN> sh -
```

The K3s installer creates a systemd service which can be used to `stop`, `start`, `restart` and check the `status` of the K3s agent.

```bash
sudo systemctl status k3s-agent.service

● k3s-agent.service - Lightweight Kubernetes
   Loaded: loaded (/etc/systemd/system/k3s-agent.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2020-04-11 16:05:37 BST; 3 days ago
     Docs: https://k3s.io
  Process: 24469 ExecStartPre=/sbin/modprobe br_netfilter (code=exited, status=0/SUCCESS)
  Process: 24470 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)
 Main PID: 24471 (k3s-agent)
 (...)
```

That's it ... that's all!

When you go back to the terminal session on the K3s server you can list all nodes in the cluster using standard `kubectl` commands.

```bash
kubectl get nodes
NAME              STATUS   ROLES    AGE   VERSION
streampi-02   Ready    <none>   3d    v1.17.4+k3s1
streampi-01   Ready    master   3d    v1.17.4+k3s1
```

Hmmm - but wait. We did only add one agent node to the cluster right? Well, that's true, however when installing K3s using the script the server automatically installs and runs an agent on the same node.

### 3. Install Helm
SSH into the RPi that should act as the K3s server later on - in our case this is `streampi-01` and install Helm. Since we are using Helm 3 there is no need to install tiller. Thus, installing helm is as simple as running the following command:

```bash
curl -sSL https://get.helm.sh/helm-v3.1.2-linux-arm.tar.gz | sudo tar -xzf - -C /usr/local/bin/ linux-arm/helm --strip-components=1
```
This command downloads the Helm binary release from Github, extracts only the binary and puts it in `/usr/local/bin`. Try go check `helm version` to see if it worked.

```bash
version.BuildInfo{Version:"v3.1.2", GitCommit:"d878d4d45863e42fd5cff6743294a11d28a9abce", GitTreeState:"clean", GoVersion:"go1.13.8"}
```

To use Helm, we can set and export `KUBECONFIG` environment variable to point to the kubeconfig under `/etc/rancher/k3s/k3s.yaml`.
```bash
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
```
Alternatively, if you want this permanently you can either add it to your `.bashrc`/`.zshrc`, or create a `.kube` directory in your home directory and symlink the `k3s.yaml`.

```bash
mkdir $HOME/.kube
ln -s /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
```


## Deploy StreamPipes on K3s using Helm
Now, that we have all set up, we can go ahead and deploy StreamPipes using our Helm chart. Therefore, we go to the server node (`streampi-01`), where we installed Helm. Next, we clone our StreamPipes installer repository (`dev` branch) and navigate to the helm-chart directory.

**Note**: At the point of writing, the helm chart is **only** available in the `dev` branch. This will change in the future as we update the repository.

```bash
git clone -b dev --single-branch https://github.com/apache/incubator-streampipes-installer.git
cd incubator-streampipes-installer
```

At this point, we can leverage Helm's `install` command in order to install the StreamPipes Helm chart. Since Helm reads the K3s kubeconfig, it forwards the deployment request to K3s. As per default, we deploy StreamPipes `lite` version, where we only start standalone Java-based pipeline elements and disregard the ones building on top of our Flink wrapper.

```bash
helm install streampipes helm-chart

NAME: streampipes
LAST DEPLOYED: Tue Apr 14 18:13:19 2020
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

Next, K3s receives this requests and goes ahead and downloads the corresponding Docker images and starts the deployments in the right order according to the specified dependencies, creates services as well as persistent volume claims when needed. This step takes some time depending on your internet connection and the hardware when starting the containers. You can check the status of the StreamPipes Helm installation using `kubectl get pods -o wide` (when adding `-w`, you can automatically watch for changes). You can also use the custom command below to only display the pod name, status as well as the node where it was scheduled and deployed to.

```bash
kubectl get pods -o=custom-columns=NAME:.metadata.name,STATUS:.status.phase,NODE:.spec.nodeName

NAME                                           STATUS    NODE
activemq-66d58f47cf-b88nb                      Running   streampi-01
zookeeper-5d9947686f-7vpjb                     Running   streampi-02
couchdb-77db98cf7b-6nn99                       Running   streampi-02
consul-55965f966b-tjcfb                        Running   streampi-02
influxdb-b95b6479-mvgbg                        Running   streampi-02
backend-6cdfb7bbf9-b4vgh                       Running   streampi-02
pipeline-elements-all-jvm-64795974-g2xhv       Running   streampi-02
kafka-657b5fb77-xtw8p                          Running   streampi-01
connect-master-56f5f947d-n2t5b                 Running   streampi-01
sources-watertank-simulator-6958f7844c-2jv78   Running   streampi-01
connect-worker-fdbd6f464-m6vm8                 Running   streampi-01
nginx-5d4498d4f5-fcccq                         Running   streampi-02
```

As can be seen, a fair amount of StreamPipes containers aka pods were deployed on `streampi-01` and `streampi-02`. When everything goes well, you should see all containers in the status `RUNNING` after a couple of minutes. To access K8s cluster UI pod a `NodePort` was created. The `NodePort` publishes the UI (nginx) service on every node using using its public IP and a port. Then you can access the service using any of the cluster IPs and the assigned port.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  selector:
    app: nginx
  type: NodePort
  ports:
    - name: main
      protocol: TCP
      port: 80 # container port
      targetPort: 80 # node port
```

That means, you can go and check the StreamPipes UI either on `http://streampi-01/` or `http://streampi-02/` - K8s service handles the routing to the nginx pod containing the UI - just to name one nice feature.

<img class="blog-image" style="max-width:100%;" src="/docs/blog/assets/2020-05-27/streampi_installation.png" alt="Installation"/>

## Sum up & Where to go from here?
Starting out as a simple hack session on a late afternoon, we build multi-archicture StreamPipes Docker images and deployed them on a Raspberry Pi in the first part of the series. Though, this is was feasible StreamPipes architectural microservice design provides a natural fit for a distributed cluster deployment. To this extent, we provide a StreamPipes Helm chart that lets you easily deploy StreamPipes in a one-liner in a Kubernetes cluster as showcased using a testbed of two Raspberry Pi's and lightweight K3s.

As of now, we let K8s handle the scheduling of containers for us in a random fashion. From here, we can further explore K8s feature such as `nodeSelector` or `nodeAffinity` that helps you use labels (`key=value` pairs) for pod to node assignment.

<img class="blog-image" style="max-width:60%;" src="/docs/blog/assets/2020-05-27/helm_k3s.png" alt="HelmK3s"/>

- [Part 1: StreamPi(pes) - Running StreamPipes on Raspberry Pi](/docs/blog/2020/01/23/streampipes_on_rpi)
- **[Part 2: Running StreamPipes the Kubernetes-Way using K3s](/docs/blog/2020/05/27/streampipes_on_k3s)**


### Useful links

- [1] [K3s - lightweight Kubernetes distro](https://k3s.io/)
- [2] [Helm - the package manager for Kubernetes](https://helm.sh/)
- [3] [Github: StreamPipes Helm chart](https://github.com/apache/incubator-streampipes-installer/tree/dev/helm-chart)
