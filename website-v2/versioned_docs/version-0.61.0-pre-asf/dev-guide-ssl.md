---
id: dev-guide-ssl
title: Use SSL
sidebar_label: Use SSL
original_id: dev-guide-ssl
---

In this tutorial we explain how you can use SSL Certificates to provide transport layer security between your Browser and the Streampipes Backend.

## Prerequisites
You need a valid Certificate consisting of a Private and a Public Key. Both Keys must be in PEM Format. Please note that your Private Key should never be shared, otherwise the communication can not be considered secure.

## Edit docker-compose.yml
In order to use SSL you have to open port 443 on the nginx Service. Incoming insecure Traffic on Port 80 will automatically be reroutet to Port 443.

The Environment-Variable NGINX_SSL must be set to "true".

Finally you have to inject the Certificates into the Docker-Container. In the example below, the Certificates are placed in the directory /etc/ssl/private/ on the host machine. Please change the path according to the place where the Certificates are located on your machine. The path after the colon should not be changed!
```yaml
[...]
  nginx:
    image: streampipes/ui
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