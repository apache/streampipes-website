---
id: use-configurations
title: Configurations
sidebar_label: Configurations
---

The configuration section is an admin-only interface for system-wide settings.

## General configuration

<img class="docs-image" src="/img/03_use-configurations/01_general-configuration.png" alt="General configuration"/>

The general configuration serves to provide basic system settings. The basic settings allow to configure the app name (which is used, e.g., for mails sent by StreamPipes). 
Additionally, the externally available host and port can be set which is used by the mail system to add links to emails.

Furthermore, self-registration and password recovery features can be activated in this view. Note that both features require a working email configuration.

## Datalake

<img class="docs-image" src="/img/03_use-configurations/02_datalake-configuration.png" alt="Datalake configuration"/>

Here, stored data lake databases can be truncated or deleted. The view also gives information on the number of data points currently stored in a measurement series.

## Email configuration

<img class="docs-image" src="/img/03_use-configurations/03_email-configuration.png" alt="Email configuration"/>

In this section, the email configuration is set. The email configuration is used to send mails to users. Most standard mail server settings are supported. The configuration can be validated by triggering a test mail that is sent to a given recipient.

## Messaging

<img class="docs-image" src="/img/03_use-configurations/04_messaging-configuration.png" alt="Messaging configuration"/>

Messaging configuration is used to control parameters used for communication between pipeline elements. Individual Kafka settings can be configured, as well as the priority of selected message formats and protocols during pipeline creation.

## Pipeline Element Configuration

<img class="docs-image" src="/img/03_use-configurations/05_pipeline-element-configuration.png" alt="Pipeline element configuration"/>

Individual configurations of extensions services are available in this view. The available configurations depend on the provided configuration variables in the service definition of each extensions service.

## Security

<img class="docs-image" src="/img/03_use-configurations/06_security-configuration.png" alt="Messaging configuration"/>

The security configuration allows to manage existing user accounts, service accounts and groups. New users can be added and roles can be assigned.

Please also read more about security [here](05_deploy-security.md).
