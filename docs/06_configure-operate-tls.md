---
id: configure-operate-tls
title: TLS for the web interface
description: "Serve the Apache StreamPipes UI and API over HTTPS: enable TLS in the UI container with Docker Compose, terminate TLS at a reverse proxy, or configure Ingress and Traefik on Kubernetes."
sidebar_label: TLS / HTTPS
---

## Introduction

By default, the StreamPipes web interface and the backend API are served over plain HTTP on port 80. For anything beyond a local trial, the connection between the browser and StreamPipes should be encrypted. This page describes the three common ways to get there:

* enable TLS directly in the UI container, which is the simplest option for a single Docker Compose host
* terminate TLS at a reverse proxy in front of StreamPipes
* use an Ingress or a Traefik IngressRoute on Kubernetes

All three protect the traffic between the browser and StreamPipes. Encryption between StreamPipes and the machines it connects to is configured per adapter, for example in the [OPC UA adapter](./05_how-to-opcua.md) or the [MQTT adapter](./05_how-to-mqtt.md).

## Option 1: TLS in the UI container

The `ui` container runs nginx, which serves the Angular application and proxies all API calls to the backend. The image ships with a second nginx configuration for TLS. It is activated with the environment variable `NGINX_SSL=true` and expects a certificate and a private key at fixed paths inside the container.

### Prerequisites

You need a certificate and the matching private key, both in PEM format. The certificate can come from your company's CA, from a public CA such as Let's Encrypt, or be self-signed for testing. Keep the private key out of version control and readable only by the user that runs Docker.

### Edit docker-compose.yml

Three changes are needed in the `ui` service of your Compose file:

1. publish port 443 in addition to port 80
2. set `NGINX_SSL=true`
3. mount the certificate to `/etc/nginx/ssl/cert.pem` and the private key to `/etc/nginx/ssl/ssl.pem`

Adjust the host paths on the left side of the volume mounts to where your files are. The paths on the right side inside the container must stay as they are.

```yaml
  ui:
    image: "${SP_DOCKER_REGISTRY}/ui:${SP_VERSION}"
    environment:
      - SP_HTTP_SERVER_ADAPTER_ENDPOINT=extensions-all-iiot:8090
      - NGINX_SSL=true
    ports:
      - "80:8088"
      - "443:443"
    volumes:
      - nginx:/etc/nginx/
      - /etc/ssl/private/streampipes.crt:/etc/nginx/ssl/cert.pem:ro
      - /etc/ssl/private/streampipes.key:/etc/nginx/ssl/ssl.pem:ro
    depends_on:
      - couchdb
      - backend
    restart: unless-stopped
    networks:
      spnet:
```

Restart the stack with `docker compose up -d`. The UI container now listens on port 443 for HTTPS. Requests that still arrive on port 80 are answered with a permanent redirect to the HTTPS address, so existing bookmarks keep working.

### What the TLS configuration does

With `NGINX_SSL=true`, the container's entrypoint replaces the default nginx configuration with `ssl.conf`. That configuration:

* listens on port 443 with the mounted certificate and key, TLS 1.2, and a high-strength cipher list
* redirects everything on the internal HTTP port 8088 to `https://`
* proxies `/streampipes-backend` and `/streampipes-connect/` to the backend, and `/endpoints/` to the HTTP Server adapter, exactly as the plain configuration does

The backend and the extension services are not exposed to the outside and keep talking to each other over the internal Docker network. TLS ends in the UI container.

### Things to check afterwards

* If you use single sign-on, update `SP_OAUTH_REDIRECT_URI` to the `https://` address of your installation, and the redirect URI registered at the identity provider as well. See [Security & User Management](./06_configure-operate-security.md).
* Clients that call the REST API, such as the Python client or scripts, must use the `https://` URL from now on.
* If the certificate is self-signed, browsers show a warning until the certificate or its CA is trusted on the client machine.

## Option 2: TLS at a reverse proxy

If you already run a reverse proxy such as nginx, Caddy, Traefik or HAProxy, let it terminate TLS and forward plain HTTP to StreamPipes on port 80. Leave `NGINX_SSL` unset in this case. The proxy should:

* forward the `Host` header unchanged
* set `X-Forwarded-For` and `X-Forwarded-Proto`
* pass the full path through, including `/streampipes-backend`, `/streampipes-connect/` and `/endpoints/`

Avoid exposing port 80 of the StreamPipes host to the network when the proxy is the intended entry point.

## Option 3: Kubernetes

The Helm chart offers two ways to expose the UI, both configured in `values.yaml` under `streampipes`.

### Ingress

Set `ingress.active` to `true`, give it a `host` and, if needed, an `ingress.className`. The chart's Ingress template routes `/`, `/streampipes-backend` and `/endpoints/` to the right services. It does not render a `tls` section itself, so TLS is added the way your ingress controller expects, usually through annotations. With cert-manager, for example, an annotation such as `cert-manager.io/cluster-issuer` on the Ingress lets the controller obtain and renew the certificate.

```yaml
streampipes:
  ingress:
    active: true
    className: "nginx"
    host: "streampipes.example.com"
    annotations:
      cert-manager.io/cluster-issuer: "letsencrypt-prod"
```

### Traefik IngressRoute

The chart also contains an IngressRoute for Traefik, which is active by default. It listens on the `web` and `websecure` entry points and can request certificates through a Traefik certificate resolver:

```yaml
streampipes:
  ingressroute:
    active: true
    host: "streampipes.example.com"
    entryPoints:
      - web
      - websecure
    certResolverActive: true
    certResolver: "letsencrypt"
```

Set `certResolver` to the name of the resolver configured in your Traefik installation. With `certResolverActive: false`, the route is created without a TLS section, which is the right choice when Traefik already terminates TLS with a default certificate.

Use either the Ingress or the IngressRoute, not both. The full list of chart parameters is on the [Deployment options](./06_configure-operate-deployment.md) page.
