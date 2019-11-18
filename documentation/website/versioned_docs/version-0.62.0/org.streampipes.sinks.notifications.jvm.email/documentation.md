---
id: version-0.62.0-org.streampipes.sinks.notifications.jvm.email
title: Email Notification
sidebar_label: Email Notification
original_id: org.streampipes.sinks.notifications.jvm.email
---



<p align="center"> 
    <img src="/img/pipeline-elements/org.streampipes.sinks.notifications.jvm.email/icon.png" width="150px;" class="pe-image-documentation"/>
</p>

***

## Description

This sink sends an email to a specified receiver.

Before you use this sink, the settings of your email server need to be configured.
After you've installed the element, navigate to ``Settings``, open the panel ``Sinks Notifications JVM`` and add your
 mail server and credentials.

***

## Required input

This sink does not have any requirements and works with any incoming event type.

***

## Configuration

The following configuration is required:

### Receiver Address

The email address of the receiver.

### Subject

The subject of the email.

### Content

The mail text.

## Output

(not applicable for data sinks)