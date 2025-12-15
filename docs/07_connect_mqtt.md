---
id: connect-mqtt
title: MQTT
sidebar_label: MQTT
---

This document provides an overview of the MQTT connection and security configuration options available in StreamPipes. It covers how to configure broker connections, authentication modes, and TLS/SSL security settings — including guidance on keystore and truststore management for secure communication.

## Notes on MQTT Settings

* **Broker URL** : The URL of the MQTT broker. Specify the protocol and port, for example:
    * `tcp://test-server.com:1883` — for unencrypted connections
    * `ssl://test-server.com:8883` — for secure (TLS) connections

    Both the protocol (tcp:// or ssl://) and port number are required.
* **Access Mode**: Choose between:
  * **Unauthenticated**: No authentication required, can be used with or without TLS 
  * **Username/Password**: Basic authentication with username and password, can be used with or without TLS 
    * **Username**: The username for authentication
    * **Password**: The password for authentication
  * **Client Certificate** : Requires TLS to be enabled. Authentication is performed using a client certificate.
    * **Certificate PEM**: Public Key in PEM format
    * **Private Key PEM**: Private (RSA) Key in PEM format (without password !)

## TLS Configuration

To enable TLS successfully, the MQTT broker’s server certificate must be trusted by the Java Trust Store. If the certificate is **self-signed** or issued by a **certificate authority not trusted by the Java Trust Store**, one of the following options must be used:

* **Allow self-signed certificates**: Set `SP_SECURITY_ALLOW_SELFSIGNED=true` to permit connections using self-signed certificates.

    ⚠️ Use this only in development or testing environments, as it reduces certificate validation security.

* **Provide a custom keystore**: Provide a keystore containing the MQTT server’s certificate by setting the environment variable:
    ```bash
    SP_SECURITY_KEYSTORE_FILENAME=/path/to/keystore.pfx
    ```

    Depending on your keystore setup, additional environment variables may also be required, such as:

    * `SP_SECURITY_KEYSTORE_PASSWORD`

    * `SP_SECURITY_KEYSTORE_TYPE`

See the Security Configuration section below for more details.

## Security Configuration

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

If you do not want to accept all Selfsigned certificates (only specific ones), you will need to mount a truststore. 
A trustore from a certificate can be build by e.g,

```bash
# Create a keystore from the private key and certificate
openssl pkcs12 -export -in server-cert.pem -inkey server-key.pem -out server-keystore.p12 -name mqtt
```

