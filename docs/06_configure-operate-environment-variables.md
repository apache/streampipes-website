---
id: configure-operate-environment-variables
title: Environment Variables
sidebar_label: Environment Variables
---

## Introduction

StreamPipes can be configured extensively through environment variables. The list below is aligned with the `Envs` definition in `streampipes-commons`, which is the shared source of truth for the variables used across core and extension services.

The page is grouped by operational concern rather than by source file. That makes it easier to answer the practical questions administrators usually have: which variables define instance identity, which ones control storage and transport, which ones are security-sensitive, and which ones tune runtime behavior.

## Core identity and internal service endpoints

These variables define how StreamPipes identifies itself internally and how services find each other.

| Env Variable Name | Scope | Default Value               | Description |
|---|---|-----------------------------|---|
| `SP_HOST` | Core + Extensions | Empty                       | Generic host override used by some deployments and wrappers. |
| `SP_PORT` | Core + Extensions | `8030 (Core), 8090 (Ext)`   | Generic port override used by some deployments and wrappers. |
| `SP_CORE_SCHEME` | Extensions | `http`                      | Scheme used by internal clients when contacting the core service. |
| `SP_CORE_HOST` | Extensions | `backend`                   | Internal host name of the core service. |
| `SP_CORE_PORT` | Extensions | `8030`                      | Internal port of the core service. |
| `SP_CORE_ASSET_BASE_DIR` | Core | `${user.home}/.streampipes` | Base directory for core-managed asset files. |
| `SP_EXT_ASSET_BASE_DIR` | Extensions | `${user.home}/.streampipes`                       | Base directory for extension-managed asset files. |
| `SP_CORE_EXTENSION_TRANSPORT_MODE` | Core | `http`                      | Transport mode used by the core when communicating with extensions. |
| `SP_CORE_EXTENSIONS_TRANSPORT_MODE_TIMEOUT_SECONDS` | Core | `20`                        | Timeout in seconds for core-to-extension transport calls. |
| `SP_EXTENSION_TRANSPORT_MODE` | Extensions | `http`                      | Transport mode used by extensions when communicating with the core. |
| `SP_EXTENSION_REQUEST_TOPIC_PREFIX` | Core + Extensions | `sp.extensions.request`     | Topic prefix used for extension request messaging. |
| `SP_SERVICE_TAGS` | Core + Extensions | Empty                       | Comma-separated service tags used during service registration and discovery. |

## Installation, setup, and general runtime

These variables shape first startup behavior and a few cross-cutting runtime options.

| Env Variable Name | Scope | Default Value | Description                                                                  |
|---|---|---|------------------------------------------------------------------------------|
| `SP_DEBUG` | Core + Extensions | `false` | Debug mode for local development and related traffic-routing behavior.       |
| `SP_SETUP_INSTALL_PIPELINE_ELEMENTS` | Core | From `DefaultEnvValues.INSTALL_PIPELINE_ELEMENTS` | Controls whether pipeline elements are installed automatically during setup. |
| `SP_INITIAL_WAIT_BEFORE_INSTALLATION_MS` | Core | `5000` | Wait time before installation tasks start.                                   |
| `SP_ALLOWED_UPLOAD_FILETYPES` | Core | Empty | Comma-separated allowlist for additional uploadable file types.              |

## Security, authentication, and initial credentials

These variables control bootstrap credentials, encryption, JWT signing, and extension-to-core authentication.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_INITIAL_ADMIN_EMAIL` | Core | `admin@streampipes.apache.org` | Initial administrator email for a fresh installation. |
| `SP_INITIAL_ADMIN_PASSWORD` | Core | `admin` | Initial administrator password for a fresh installation. |
| `SP_INITIAL_SERVICE_USER` | Core | `sp-service-client` | Initial technical service account used for service-to-service communication. |
| `SP_INITIAL_SERVICE_USER_SECRET` | Core | `my-apache-streampipes-secret-key-change-me` | Initial secret for the technical service account. |
| `SP_CLIENT_USER` | Extensions | `sp-service-client` | Service account used by extensions or integrations to authenticate against the core. |
| `SP_CLIENT_SECRET` | Extensions | `my-apache-streampipes-secret-key-change-me` | Secret used together with `SP_CLIENT_USER`. |
| `SP_EXT_AUTH_MODE` | Extensions | Empty | Extension authentication mode, for example whether extension endpoints require authenticated access. |
| `SP_ENCRYPTION_PASSCODE` | Core | `eGgemyGBoILAu3xckoIp` | Encryption passcode used for secret static properties and related protected values. |
| `SP_JWT_SECRET` | Core | Empty | Shared JWT secret used in HMAC-based signing setups. |
| `SP_JWT_SIGNING_MODE` | Core | Empty | JWT signing mode, typically `HMAC` or `RSA`. |
| `SP_JWT_PRIVATE_KEY_LOC` | Core | Empty | Path to the JWT private key for RSA-based signing. |
| `SP_JWT_PUBLIC_KEY_LOC` | Extensions | Empty | Path to the JWT public key for RSA-based verification. |

## OAuth and external identity providers

These variables enable OAuth-based login and define provider-specific mappings.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_OAUTH_ENABLED` | Core | `false` | Enables OAuth-based login. |
| `SP_OAUTH_REDIRECT_URI` | Core | Empty | Public base URL used for OAuth redirect handling. |
| `SP_OAUTH_PROVIDER_{PROVIDER_ID}_{SETTING}` | Core | Empty | Pattern for provider-specific OAuth configuration such as client credentials, endpoints, scopes, and claim mappings. |

Typical supported provider settings include `AUTHORIZATION_URI`, `CLIENT_NAME`, `CLIENT_ID`, `CLIENT_SECRET`, `FULL_NAME_ATTRIBUTE_NAME`, `ISSUER_URI`, `JWK_SET_URI`, `SCOPES`, `TOKEN_URI`, `USER_INFO_URI`, `EMAIL_ATTRIBUTE_NAME`, `USER_ID_ATTRIBUTE_NAME`, `ROLE_ATTRIBUTE_NAME`, `NAME`, and `DEFAULT_ROLES`.

## Storage backends

These variables configure the document store and the time-series backend used by StreamPipes.

### CouchDB

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_COUCHDB_PROTOCOL` | Core | `http` | Protocol used to access CouchDB. |
| `SP_COUCHDB_HOST` | Core | `couchdb` | Host name of the CouchDB instance. |
| `SP_COUCHDB_PORT` | Core | `5984` | Port of the CouchDB instance. |
| `SP_COUCHDB_USER` | Core | `admin` | User name used for CouchDB access. |
| `SP_COUCHDB_PASSWORD` | Core | `admin` | Password used for CouchDB access. |

### Time-series storage

| Env Variable Name | Scope                    | Default Value | Description |
|---|--------------------------|---|---|
| `SP_TS_STORAGE` | Core + Extensions (opt)  | `influxdb` | Selected time-series backend implementation. |
| `SP_TS_STORAGE_PROTOCOL` | Core + Extensions (opt)  | `http` | Protocol used to access the time-series backend. |
| `SP_TS_STORAGE_HOST` | Core + Extensions (opt)  | `influxdb` | Host name of the time-series backend. |
| `SP_TS_STORAGE_PORT` | Core + Extensions  (opt) | `8086` | Port of the time-series backend. |
| `SP_TS_STORAGE_TOKEN` | Core + Extensions (opt)  | `sp-admin` | Token used for time-series backend access. |
| `SP_TS_STORAGE_ORG` | Core + Extensions (opt)  | `sp` | Organization name used by the time-series backend. |
| `SP_TS_STORAGE_BUCKET` | Core + Extensions (opt)  | `sp` | Bucket or logical storage target used by the time-series backend. |
| `SP_TS_STORAGE_IOT_DB_SESSION_POOL_SIZE` | Core + Extensions (opt)  | `10` | Session-pool size for IoTDB-based setups. |
| `SP_TS_STORAGE_IOT_DB_SESSION_POOL_ENABLE_COMPRESSION` | Core + Extensions (opt)  | `false` | Enables compression for the IoTDB session pool. |
| `SP_TS_STORAGE_IOT_DB_USER` | Core + Extensions (opt)  | `root` | User name for IoTDB-based setups. |
| `SP_TS_STORAGE_IOT_DB_PASSWORD` | Core + Extensions (opt)  | `root` | Password for IoTDB-based setups. |

For extension services, these variables are optional depending on the included extensions.
The containerized InfluxDB service itself may also need service-specific variables such as `DOCKER_INFLUXDB_INIT_PASSWORD` and `DOCKER_INFLUXDB_INIT_ADMIN_TOKEN`, see the `Docker Compose` files for reference.

## Messaging and broker configuration

These variables configure the preferred transport layer and the connection details of supported brokers.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_PRIORITIZED_PROTOCOL` | Core + Extensions | `kafka` | Preferred messaging layer for data exchange between services. |
| `SP_KAFKA_RETENTION_MS` | Core | From `DefaultEnvValues.SP_KAFKA_RETENTION_MS_DEFAULT` | Retention time for Kafka-backed topics where applicable. |
| `SP_KAFKA_HOST` | Core + Extensions | `kafka` | Host name of the Kafka broker. |
| `SP_KAFKA_PORT` | Core + Extensions | `9092` | Port of the Kafka broker. |
| `SP_MQTT_HOST` | Core + Extensions | `mosquitto` | Host name of the MQTT broker. |
| `SP_MQTT_PORT` | Core + Extensions | `1883` | Port of the MQTT broker. |
| `SP_NATS_HOST` | Core + Extensions | `nats` | Host name of the NATS broker. |
| `SP_NATS_PORT` | Core + Extensions | `4222` | Port of the NATS broker. |
| `SP_NATS_TOKEN` | Core + Extensions | Empty | Token used for NATS authentication if required. |
| `SP_PULSAR_URL` | Core + Extensions | `pulsar://localhost:6650` | Connection URL for Apache Pulsar. |

## Health checks, metrics, and polling

These variables influence monitoring endpoints, health-check cadence, and background polling behavior.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_PROMETHEUS_ENDPOINT_INCLUDE` | Core + Extensions | `health,prometheus` | Comma-separated endpoints included in Prometheus-related exposure. |
| `SP_SETUP_PROMETHEUS_ENDPOINT` | Core + Extensions | `false` | Enables setup of the Prometheus endpoint during startup. |
| `SP_HEALTH_CHECK_INTERVAL_MS` | Core + Extensions | `30000` | Interval between health checks. |
| `SP_HEALTH_CHECK_INITIAL_DELAY` | Core + Extensions | `10000` | Initial delay before health checks begin. |
| `SP_LOG_FETCH_INTERVAL_MS` | Core | `60000` | Interval for background log fetching. |
| `SP_HEALTH_SERVICE_MAX_UNHEALTHY_TIME_MS` | Core | `60000` | Maximum tolerated unhealthy duration before service health is escalated. |
| `SP_CDC_MSSQL_POLL_INTERVAL_MS` | Extensions | `1000` | Polling interval used by MSSQL CDC-related components. |

## Upload security, certificates, and protocol-specific security stores

These variables define keystore, truststore, and OPC UA-specific security behavior.

### OPC UA security

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_OPCUA_MIN_PULL_INTERVAL_MS` | Extensions | Empty | Minimum allowed polling interval for OPC UA reads. |
| `SP_OPCUA_SECURITY_DIR` | Extensions | `/streampipes-security/opcua` | Base directory for OPC UA security material. |
| `SP_OPCUA_KEYSTORE_FILE` | Extensions | `keystore.pfx` | OPC UA keystore file name. |
| `SP_OPCUA_KEYSTORE_PASSWORD` | Extensions | `password` | Password for the OPC UA keystore. |
| `SP_OPCUA_KEYSTORE_TYPE` | Extensions | `PKCS12` | Type of the OPC UA keystore. |
| `SP_OPCUA_KEYSTORE_ALIAS` | Extensions | `apache-streampipes` | Alias used inside the OPC UA keystore. |
| `SP_OPCUA_APPLICATION_URI` | Extensions | `urn:org:apache:streampipes:opcua:client` | Application URI used by the OPC UA client. |

### General keystore and truststore

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_SECURITY_KEYSTORE_FILENAME` | Extensions | `/streampipes-security/keystore.pfx` | Default keystore filename. |
| `SP_SECURITY_KEYSTORE_PASSWORD` | Extensions | Empty | Password for the default keystore. |
| `SP_SECURITY_KEYSTORE_TYPE` | Extensions | `PKCS12` | Type of the default keystore. |
| `SP_SECURITY_KEY_PASSWORD` | Extensions | Empty | Password for the key inside the keystore if it differs from the store password. |
| `SP_SECURITY_TRUSTSTORE_FILENAME` | Extensions | `/streampipes-security/truststore.pfx` | Default truststore filename. |
| `SP_SECURITY_TRUSTSTORE_PASSWORD` | Extensions | Empty | Password for the default truststore. |
| `SP_SECURITY_TRUSTSTORE_TYPE` | Extensions | `PKCS12` | Type of the default truststore. |
| `SP_SECURITY_ALLOW_SELFSIGNED` | Extensions | `false` | Whether self-signed certificates are accepted. |

## PLC4X, retention, and archive behavior

These variables tune protocol-level pooling and retention/archive handling.

### PLC4X connection cache

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_PLC4X_CONN_MAX_WAIT_TIME_MS` | Extensions | `20000` | Maximum wait time when borrowing a PLC4X connection. |
| `SP_PLC4X_CONN_MAX_LEASE_TIME_MS` | Extensions | `4000` | Maximum lease time for a PLC4X connection. |

### Retention and archiving

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_RETENTION_LOCAL_DIR` | Core | `./ArchivedData` | Local directory used for archived retention data. |
| `SP_DATALAKE_SCHEDULER_CRON` | Core | `0 1 0 * * 6` | Cron expression for scheduled data-lake retention jobs. |
| `SP_RETENTION_LOG_LENGTH` | Core | `10` | Number of retention log entries kept. |
| `SP_CERTIFICATE_EXPIRY_CRON` | Core | `0 2 0 * * *` | Cron expression for certificate-expiry checks. |
| `SP_CERTIFICATE_EXPIRY_EMAIL_DAYS` | Core | Empty | Number of days before expiry when certificate warning emails are sent. |

## Logging

These variables configure file and console logging behavior.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_LOGGING_FILE_ENABLED` | Core + Extensions | `false` | Enables file-based logging. |
| `SP_LOGGING_CONSOLE_ENABLED` | Core + Extensions | `true` | Enables console logging. |
| `SP_LOGGING_FILE_PREFIX` | Core + Extensions | `streampipes` | Prefix used for generated log files. |
| `SP_LOGGING_FILE_DIR` | Core + Extensions | `logs` | Directory used for file-based logs. |
| `SP_LOGGING_FILE_PATTERN` | Core + Extensions | `%d{yyyy-MM-dd HH:mm:ss} %-5level %logger{36} - %msg%n` | Logback-style pattern used for file logging. |

## Load management and resource balancing

These variables influence the optional load-management features and their weighting model.

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_CPU_RESOURCE_WEIGHT` | Core | `1.0` | Weight of CPU usage in load-balancing decisions. |
| `SP_MEMORY_RESOURCE_WEIGHT` | Core | `1.0` | Weight of memory usage in load-balancing decisions. |
| `SP_DIR_MEMORY_RESOURCE_WEIGHT` | Core | `1.0` | Weight of direct-memory usage in load-balancing decisions. |
| `SP_BANDWIDTH_IN_RESOURCE_WEIGHT` | Core | `1.0` | Weight of inbound bandwidth in load-balancing decisions. |
| `SP_BANDWIDTH_OUT_RESOURCE_WEIGHT` | Core | `1.0` | Weight of outbound bandwidth in load-balancing decisions. |
| `SP_THRESHOLD_MIGRATOR_PERCENTAGE` | Core | `20.0` | Threshold percentage used by the migrator. |
| `SP_MIN_MIGRATOR_PERCENTAGE` | Core | `20.0` | Minimum migrator percentage. |
| `SP_OVERLOADED_THRESHOLD_PERCENTAGE` | Core | `85` | Threshold from which a node is treated as overloaded. |
| `SP_HISTORY_RESOURCE_PERCENTAGE` | Core | `0.9` | Percentage of historical resource usage considered by the load manager. |
| `SP_MSG_RATE_DIFFERENCE_MIGRATOR_THRESHOLD` | Core | `85` | Threshold for message-rate differences that trigger migration. |
| `SP_LOAD_TARGET_STD` | Core | `25.0` | Target standard deviation used in load balancing. |
| `SP_SELECTOR` | Core | `WeightedRandomSelector` | Selector implementation used by the load manager. |
| `SP_MIGRATOR` | Core | `ThresholdMigrator` | Migrator implementation used by the load manager. |
| `SP_LOAD_MANAGER_ENABLE` | Core | `false` | Enables the load manager. |

## Rate limiter and memory manager

These variables tune the internal rate limiter and memory-management utilities.

### Rate limiter

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_RATE_LIMITER_DEFAULT_WARMUP_PERIOD` | Core | `1000` | Default warmup period for the rate limiter. |
| `SP_RATE_LIMITER_SCHEDULER_INITIAL_DELAY_SECONDS` | Core | `0` | Initial delay for the rate-limiter scheduler. |
| `SP_RATE_LIMITER_SCHEDULER_PERIOD_SECONDS` | Core | `15` | Scheduler period for rate-limiter updates. |
| `SP_RATE_LIMITER_STATS_RESET_THRESHOLD` | Core | `1000` | Threshold used for statistics reset logic. |
| `SP_RATE_LIMITER_STATS_RESET_FACTOR` | Core | `999` | Factor used for statistics reset logic. |
| `SP_RATE_LIMITER_STATS_RESET_DIVISOR` | Core | `1000` | Divisor used for statistics reset logic. |
| `SP_RATE_LIMITER_SHUTDOWN_TIMEOUT_SECONDS` | Core | `5` | Shutdown timeout for the rate limiter. |
| `SP_RATE_LIMITER_TIMEOUT_MS` | Core | `1000` | Timeout for rate-limiter operations. |
| `SP_RATE_LIMITER_PERMITS_SET_PERCENTAGE` | Core | `0.7` | Percentage used when calculating permit counts. |

### Memory manager

| Env Variable Name | Scope | Default Value | Description |
|---|---|---|---|
| `SP_MEMORY_MANAGER_DEFAULT_INITIAL_MEMORY` | Core | `1073741824` | Default initial memory allocation used by the memory manager. |
| `SP_MEMORY_MANAGER_WAIT_TIMEOUT_MS` | Core | `1000` | Wait timeout for memory-manager coordination. |
| `SP_MEMORY_SCHEDULER_INITIAL_DELAY_SECONDS` | Core | `0` | Initial delay for the memory scheduler. |
| `SP_MEMORY_SCHEDULER_PERIOD_SECONDS` | Core | `15` | Scheduler period for memory checks. |
| `SP_MEMORY_BYTES_TO_MB` | Core | `1048576` | Conversion factor from bytes to megabytes. |
| `SP_MEMORY_MANAGER_SHUTDOWN_TIMEOUT_SECONDS` | Core | `5` | Shutdown timeout for the memory manager. |
| `SP_MEMORY_MANAGER_USAGE_THRESHOLD` | Core | `0.9` | Usage threshold above which the memory manager reacts. |
| `SP_MEMORY_WARNING_THRESHOLD` | Core | `0.8` | Warning threshold for memory usage. |

## Recommended variables to customize

For most non-trivial deployments, the first variables to review are the security-sensitive and identity-defining ones. In practice, that usually means:

- `SP_INITIAL_ADMIN_PASSWORD`
- `SP_INITIAL_SERVICE_USER_SECRET`
- `SP_CLIENT_USER`
- `SP_CLIENT_SECRET`
- `SP_ENCRYPTION_PASSCODE`
- `SP_JWT_SECRET` or the RSA key locations
- `SP_COUCHDB_PASSWORD`
- `SP_TS_STORAGE_TOKEN`
- `SP_OAUTH_REDIRECT_URI` when OAuth is enabled

If your deployment uses container-level initialization variables for external services such as InfluxDB, those should be reviewed alongside the StreamPipes variables, even though they are not part of the shared `Envs` class.

## Kubernetes-specific note

Some Kubernetes-based deployments auto-generate selected credentials and secrets. See the [Deployment Guide](./06_configure-operate-deployment.md) for the deployment-specific behavior around generated values and secret management.
