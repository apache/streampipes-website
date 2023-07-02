---
id: version-0.55.2-pre-asf-user-guide-software-components
title: Software Components
sidebar_label: Software Components
original_id: user-guide-software-components
---

This page contains all the software components that can be used within the StreamPipes framework.
Some of them are mandatory but others are just necessary for a special capabilities.
In the [Installation Guide](user-guide-installation.md) we  already provide a docker-compose.yml file with all the necessary components 
for a minimal setup.
Extend this configuration files with further containers described on this page and configure StreamPipes
according to your needs.


## StreamPipes Framework

<details class="tip">
<summary>StreamPipes Backend</summary>

#### Description
The StreamPipes Backend is the main component of the StreamPipes Framework. It contains the application logic to create and execute pipelines.
Furthermore, it provides a REST-API that is used by other components for communication.

#### Docker Compose
```yaml
backend:
  image: streampipes/backend
  depends_on:
    - "consul"
  ports:
    - "8030:8030"
  volumes:
    - ./config:/root/.streampipes
    - ./config/aduna:/root/.aduna
  networks:
    spnet:
```
</details>


<details class="tip">
<summary>StreamPipes UI</summary>

#### Description
This service uses nginx and contains the UI of StreamPipes.
The UI can, for example, be used to import new pipeline elements, create new pipelines and manage the pipeline
execution. The UI communicates with the backend via the REST interface.

#### Docker Compose
```yaml
nginx:
  image: streampipes/ui
  ports:
    - "80:80"
  depends_on:
    - backend
  networks:
    spnet:
```
</details>

## StreamPipes Services

<details class="tip">
<summary>Consul</summary>
#### Description
Consul is used to store configuration parameters of the backend service and processing elements.
It is further used for service discovery. Once a processing element container is started in the network, it is
automatically discovered via the service discovery feature of Consul.

#### Docker Compose
```yaml
consul:
    image: consul
    environment:
      - "CONSUL_LOCAL_CONFIG={\"disable_update_check\": true}"
      - "CONSUL_BIND_INTERFACE=eth0"
      - "CONSUL_HTTP_ADDR=0.0.0.0"
    entrypoint:
      - consul
      - agent
      - -server
      - -bootstrap-expect=1
      - -data-dir=/consul/data
      - -node=consul-one
      - -bind={{ GetInterfaceIP "eth0" }}
      - -client=0.0.0.0
      - -enable-script-checks=true
      - -ui
    volumes:
      - ./config/consul:/consul/data
    ports:
      - "8500:8500"
      - "8600:8600"
    networks:
      spnet:
        ipv4_address: 172.30.0.9
```
</details>

<details class="tip">
<summary>Zookeeper</summary>
#### Description
Apache Kafka and Apache Flink require zookeeper to manage their clusters.

#### Docker Compose
```yaml
zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"
    networks:
      spnet:
```
</details>

<details class="tip">
<summary>Kafka</summary>

#### Description
Kafka is used as the primary message broker. It is possible to use other brokers or even multiple message brokers in a single pipeline, but Kafka is the
default. The communication between the processing elements in a pipeline is mostly done via Kafka.

#### Docker Compose
```yaml
  kafka:
    image: wurstmeister/kafka:0.10.0.1
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: ###TODO ADD HOSTNAME HERE ###
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      spnet:
```
</details>

<details class="tip">
<summary>ActiveMQ</summary>
#### Description
ActiveMQ is another message broker which can be used in addition to Kafka. Currently, the main purpose is to provide
an endpoint for the websocket connections required by the real-time dashboard of the StreamPipes UI.

#### Docker Compose
```yaml
activemq:
  image: streampipes/activemq
  ports:
    - "61616:61616"
    - "61614:61614"
    - "8161:8161"
  networks:
    spnet:

    ```
</details>

<details class="tip">
<summary>CouchDB</summary>

#### Description
CouchDB is the main database for StreamPipes data that needs to be persisted such as pipelines, users and visualizations created in the dashboard.

#### Docker Compose
```yaml
couchdb:
  image: couchdb
  ports:
    - "5984:5984"
  volumes:
    - ./config/couchdb/data:/usr/local/var/lib/couchdb
  networks:
    spnet:
```
</details>

<details class="tip">
<summary>Flink</summary>
#### Description
This service sets up a sample flink cluster with one jobmanager and one taskmanager. Although this cluster can be used for testing, it is not recommended for production use.

#### Docker Compose
```yaml
jobmanager:
  image: streampipes/flink
  ports:
    - "8081:8099"
  command: jobmanager
  networks:
    spnet:


taskmanager:
  image: ipe-wim-gitlab.fzi.de:5000/streampipes/services/flink
  command: taskmanager
  environment:
    - FLINK_NUM_SLOTS=20
  networks:
    spnet:
```
</details>


## Processing Elements

<details class="tip">
<summary>PE Examples Sources</summary>
#### Description
This Processing Element Container contains several sample data sources that can be used to work with StreamPipes.
It consists of sources descriptions and data simulators that constantly produce data.

#### Docker Compose
```yaml
    pe-examples-sources:
      image: streampipes/pe-examples-sources:
      depends_on:
        - "consul"
      ports:
        - "8098:8090"
      networks:
        spnet:
```
</details>

<details class="tip">
<summary>PE Examples JVM</summary>

#### Description
This Processing Element Container contains some sink example implementations, like for example the real-time
dashboard. This can be used to visualize data within StreamPipes.

#### Docker Compose
```yaml
      pe-exanmples-jvm:
        image: streampipes/pe-examples-jvm
        depends_on:
          - "consul"
        environment:
          - STREAMPIPES_HOST=###TODO ADD HOSTNAME HERE ###
        ports:
          - "8096:8090"
        networks:
          spnet:
```
</details>

<details class="tip">
<summary>PE Examples Flink</summary>

#### Description
The Flink Samples Processing Element Container contains some example algorithms that can be used within processing
pipelines in the pipeline editor. Those algorithms are deployed to a Flink cluster once the pipeline is started.

#### Docker Compose
```yaml
  pe-flink-samples:
    image: streampipes/pe-examples-flink
    depends_on:
      - "consul"
    ports:
      - "8094:8090"
    volumes:
      - ./config:/root/.streampipes
    networks:
      spnet:
```
</details>

### Third Party Services

<details class="tip">
<summary>Elasticsearch</summary>

#### Description
This service can be used to run Elasticsearch. Data can be written into Elasticsearch with the Elasticsearch
sink of the PE Flink samples conatiner.

#### Docker Compose
```yaml
elasticsearch:
  image: ipe-wim-gitlab.fzi.de:5000/streampipes/services/elasticsearch
  ports:
    - "9200:9200"
    - "9300:9300"
  volumes:
    - ./config/elasticsearch/data:/usr/share/elasticsearch/data
  networks:
    spnet:
```
</details>

<details class="tip">
<summary>Kibana</summary>
#### Description
Kibana is used to visualize data that is written into Elasticsearch. It can be used in addition to our live dashboard
to analyse and visualize historic data.

#### Docker Compose
```yaml
kibana:
  image: kibana:5.2.2
  ports:
    - "5601:5601"
  volumes:
    - ./config/kibana/kibana.yml:/opt/kibana/config/kibana.yml
  environment:
    - ELASTICSEARCH_URL=http://elasticsearch:9200
  networks:
    spnet:
```
</details>


<details class="tip">
<summary>Kafka Web Console</summary>

#### Description
The kafka web console can be used to monitor the kafka cluster. This is a good tool for debugging your newly
developed pipeline elements.

#### Docker Compose
```yaml
kafka-web-console:
  image: hwestphal/kafka-web-console
  ports:
    - "9000:9000"
  volumes:
    - ./config:/data
  networks:
    spnet:
```
</details>
