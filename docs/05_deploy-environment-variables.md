---
id: deploy-environment-variables
title: Environment Variables
sidebar_label: Environment Variables
---

## Introduction

A StreamPipes installation can be configured in many ways by providing environment variables.
The following lists describe available environment variables along with a description.

## StreamPipes Core Service

### Internal

| Env Variable Name              | Default Value                                           | Description                                                                                                                      |
|--------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| SP_DEBUG                       | false                                                   | Should only be set for local development to reroute traffic to localhost                                                         |
| SP_INITIAL_ADMIN_EMAIL         | admin@streampipes.apache.org                            | Installation-time variable for defining the default user name                                                                    |
| SP_INITIAL_ADMIN_PASSWORD      | admin                                                   | Installation-time variable for defining the default user password                                                                |
| SP_INITIAL_SERVICE_USER        | sp-service-client                                       | Installation-time variable for defining the initial service user (must be same to the configured user in the extension service)  |
| SP_INITIAL_SERVICE_USER_SECRET | my-apache-streampipes-secret-key-change-me              | Installation-time variable for defining the initial service secret (minimum 35 chars)                                            |
| SP_JWT_SECRET                  | Empty for Docker, Auto-generated for K8s                | JWT secret, base64-encoded, minimum 256 bits                                                                                     |
| SP_JWT_SIGNING_MODE            | HMAC                                                    | HMAC or RSA, RSA can be used to authenticate Core-Extensions communication                                                       |
| SP_JWT_PRIVATE_KEY_LOC         | Empty                                                   | Required id SP_JWT_SIGNING_MODE=RSA, path to the private key, can be generated in the UI (Settings->Security->Generate Key Pair) |
| SP_ENCRYPTION_PASSCODE         | eGgemyGBoILAu3xckolp for Docker, Auto-generated for K8s | Encryption passcode for `SecretStaticProperties`                                                                                 |
| SP_PRIORITIZED_PROTOCOL        | kafka                                                   | Messaging layer for data exchange between extensions                                                                             |


### Third-party services

| Env Variable Name      | Default Value | Description                                                               |
|------------------------|---------------|---------------------------------------------------------------------------|
| SP_COUCHDB_HOST        | couchdb       | The hostname or IP of the CouchDB database                                |
| SP_COUCHDB_PROTOCOL    | http          | The protocol (http or https) of the CouchDB database                      |
| SP_COUCHDB_PORT        | 5984          | The port of the CouchDB database                                          |
| SP_COUCHDB_USER        | admin         | The user of the CouchDB database (must have permissions to add databases) |
| SP_COUCHDB_PASSWORD    | admin         | The password of the CouchDB user                                          |
| SP_TS_STORAGE_HOST     | influxdb      | The hostname of the timeseries storage (currently InfluxDB)               |
| SP_TS_STORAGE_PORT     | 8086          | The port of the timeseries storage                                        |
| SP_TS_STORAGE_PROTOCOL | http          | The protocol of the timeseries storage (http or https)                    |
| SP_TS_STORAGE_BUCKET   | sp            | The InfluxDB storage bucket name                                          |
| SP_TS_STORAGE_ORG      | sp            | The InfluxDB storage org                                                  |
| SP_TS_STORAGE_TOKEN    | sp-admin      | The InfluxDB storage token                                                |

The InfluxDB itself can be configured by providing the variables `DOCKER_INFLUXDB_INIT_PASSWORD` and `DOCKER_INFLUXDB_INIT_ADMIN_TOKEN`. See the `docker-compose` file for details.

## StreamPipes Extensions Service

### Internal

| Env Variable Name              | Default Value                              | Description                                                                                                        |
|--------------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| SP_CLIENT_USER                 | Empty                                      | Service account for communication with Core                                                                        |
| SP_CLIENT_SECRET               | Empty                                      | Service secret for communication with Core                                                                         |
| SP_EXT_AUTH_MODE               | sp-service-client                          | When set to AUTH: all interfaces are only accessible with authentication (requires SP_JET_PRIVATE_KEY_LOC in Core) |
| SP_JWT_PUBLIC_KEY_LOC          | my-apache-streampipes-secret-key-change-me | Path to the public key of the corresponding SP_JWT_PRIVATE_KEY defined in Core                                     |

### Third-party services

The following variables are only required for extensions which require access to the internal time-series storage (the `Data Lake Sink`).

| Env Variable Name      | Default Value | Description                                                               |
|------------------------|---------------|---------------------------------------------------------------------------|
| SP_TS_STORAGE_HOST     | influxdb      | The hostname of the timeseries storage (currently InfluxDB)               |
| SP_TS_STORAGE_PORT     | 8086          | The port of the timeseries storage                                        |
| SP_TS_STORAGE_PROTOCOL | http          | The protocol of the timeseries storage (http or https)                    |
| SP_TS_STORAGE_BUCKET   | sp            | The InfluxDB storage bucket name                                          |
| SP_TS_STORAGE_ORG      | sp            | The InfluxDB storage org                                                  |
| SP_TS_STORAGE_TOKEN    | sp-admin      | The InfluxDB storage token                                                |


## Recommended variables

For a standard deployment, it is recommended to customize the following variables:

*	Initiales Admin-Passwort (SP_INITIAL_ADMIN_PASSWORD, Core)
*	Initiales Client Secret (SP_INITIAL_SERVICE_USER_SECRET, Core)
*	Client Secret Extensions (SP_CLIENT_USER, Extensions)
*	Encryption Passcode (SP_ENCRYPTION_PASSCODE, Core)
*	CouchDB-Password (SP_COUCHDB_PASSWORD, Core + Extensions + CouchDB)
*	InfluxDB Storage Password (DOCKER_INFLUXDB_INIT_PASSWORD, InfluxDB)
*	InfluxDB Storage Token (SP_TS_STORAGE_TOKEN (Core, Extensions)
  * DOCKER_INFLUXDB_INIT_ADMIN_TOKEN (InfluxDB service)

## Auto-generation of variables in K8s setups

See the [Kubernetes Guide](05_deploy-kubernetes.md) for an overview of auto-generated variables.
