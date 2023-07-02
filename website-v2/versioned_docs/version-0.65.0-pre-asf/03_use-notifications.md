---
id: version-0.67.0-use-notifications
title: Notifications
sidebar_label: Notifications
original_id: use-notifications
---

The notification module can be used to create internal notifications.

<img class="docs-image" src="/img/03_use-notifications/01_notifications-overview.png"alt="StreamPipes Notifications"/>

## Using notifications

Any pipeline that includes the data sink **Notification** can trigger notifications that appear in the notification view. To configure a new notification, switch to the pipeline editor and append the notification sink to a data processor or data stream.
The sink requires a title and message as configuration parameters.

### Placeholders

The notification message can include placeholders for fields which are replaced with the actual value at runtime.

## Managing notifications

The notification view is split into two parts. The left sides lists all pipelines which include a notification sink. By selecting a pipeline, available notifications will be shown in the right panel.
By scrolling up, older notifications become visible. Notifications that have appeared in the detail view will be automatically marked as read, so that only new, unread notifications will appear in the left toolbar.


