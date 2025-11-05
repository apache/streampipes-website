---
id: connect-mqtt
title: MQTT
sidebar_label: MQTT
---

## UI Stuff

## Keys etc

## Setup 

Depending on the desired security level .env variables need to be set.

| Env Variable Name              | Default Value                                           | Description                                                                                                                      |
|--------------------------------|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| SP_SECURITY_KEYSTORE_FILENAME                    | /streampipes-security/keystore.pfx          |The file path to the keystore containing the application's private keys and certificates used for TLS/SSL communication.                                            |
| SP_SECURITY_KEYSTORE_PASSWORD    |                           | The password used to unlock and access the keystore file. This value must match the password set when the keystore was created.                                                                   |
| SP_SECURITY_KEYSTORE_TYPE     | "PKCS12"                                                   | The format or type of the keystore (e.g., PKCS12, JKS). Determines how keys and certificates are stored and accessed.Keystore.                                                               |
| SP_SECURITY_KEY_PASSWORD        |                                       | The password for the specific private key within the keystore. Required if the key is protected by a different password than the keystore itself.  |
| SP_SECURITY_TRUSTSTORE_FILENAME| /streampipes-security/truststore.pfx             | The file path to the truststore containing trusted CA certificates used to verify external TLS connections.               |
| SP_SECURITY_TRUSTSTORE_PASSWORD                 |               | The password used to unlock and access the truststore file. This must match the password set when the truststore was created.                                                                                    |
| SP_SECURITY_TRUSTSTORE_TYPE            | PKCS12                                                    |The format or type of the truststore (e.g., PKCS12, JKS). Defines how trusted certificates are stored and managed.                                                       |
| SP_SECURITY_ALLOW_SELFSIGNED       | false                                                  | If set to true, allows TLS connections using self-signed certificates. Use only for testing or development environments, as it disables strict certificate validation and may reduce connection security.