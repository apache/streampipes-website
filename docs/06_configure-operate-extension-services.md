---
id: configure-operate-extension-services
title: Extension Services
sidebar_label: Extension Services
---

The `Extension Services` tab in `Configuration` is the operational view for the services behind StreamPipes extensions. While the `Extensions` tab controls which adapters and pipeline elements are installed, `Extension Services` shows which services are currently registered, which service-level settings they expose, and how OPC UA certificates are handled.

This page focuses on the current `Configuration > Extension Services` screen.

> [Image placeholder: Extension Services page with the sections Registered services, Service configurations, and Certificates]

## What the Extension Services tab is for

Use this page when you want to:

- inspect which extension services are currently registered in the instance
- review service health at a glance
- open technical details of a registered service
- update service-level configuration values
- manage trusted and rejected OPC UA certificates

This tab is aimed at platform operators and administrators, not end users building adapters or pipelines.

## Understand the difference between Extensions and Extension Services

The two configuration tabs are related, but they solve different problems.

- `Extensions` controls which installable items such as adapters, processors, and sinks are available in the instance.
- `Extension Services` controls the services that provide those items and the configuration values those services need at runtime.

In practice, you go to `Extensions` when something should become available to users, and to `Extension Services` when you need to inspect or configure the underlying service behavior.

## Open the page

To open the screen:

1. Go to `Configuration`.
2. Open the `Extension Services` tab.

The current page contains three sections:

- `Registered services`
- `Service configurations`
- `Certificates`

## Inspect registered services

The `Registered services` section provides an overview of the services that are currently known to the StreamPipes instance.

The table shows:

- `Status`
- `Service ID`
- `Service Group`

Each row also provides an action to open the service details.

### Read the service status

The status column uses a simple health indicator.

- a green indicator means the service is `HEALTHY`
- a non-healthy state is shown with a critical indicator

Use this view as a first diagnostic step when a service-backed feature is missing or behaving unexpectedly.

Example:
If a set of adapters is installed but not behaving as expected, checking the registration and health state of the providing service is a sensible first step before editing adapters themselves.

### Refresh the service list

The table header includes a refresh action.

To reload the list:

1. Open `Configuration > Extension Services`.
2. In `Registered services`, click the refresh icon.

Use this after deployment changes, service restarts, or whenever you expect the registration state to have changed.

### Open service details

Each row provides `View service details`.

To inspect one service:

1. Open `Configuration > Extension Services`.
2. Find the service in `Registered services`.
3. Click the details action on the right side of the row.

The details dialog shows:

- `Service ID`
- `Service Group`
- `Location`
- `Tags`

This is useful when you need to understand which service instance is registered, where it is running, and how it identifies itself to StreamPipes.

Example:
If multiple services are present, the dialog helps distinguish them by location and tags instead of relying only on a short row in the overview.

> [Image placeholder: Registered services table with status indicators and the service details dialog open]

## Update service configurations

The `Service configurations` section is where StreamPipes exposes configurable settings for core and extension services.

The table shows:

- `Service Group`
- `Service Name`

Each row includes an edit action that expands the configuration details inline.

### Open a configuration row

To edit a service configuration:

1. Open `Configuration > Extension Services`.
2. Scroll to `Service configurations`.
3. Find the service you want to change.
4. Click the edit icon in the row.

The row expands and shows the available configuration keys for that service.

Use this area when a service requires runtime configuration values, for example connection settings, feature toggles, or other service-specific parameters.

### Understand the configuration form

Inside an expanded row, StreamPipes renders the fields based on the type of the configuration item.

Depending on the configuration, you may see:

- text fields
- number fields
- boolean checkboxes
- password fields

For text and boolean values, the current UI can show a help tooltip with the configuration description. Use that tooltip when the key name alone is not enough to understand the setting.

### Update a service configuration

To save changes for one service:

1. Expand the service row.
2. Review the available configuration keys.
3. Change the relevant values.
4. Click `Update` at the bottom of the expanded form.

After saving, the page reloads the configuration list.

This means the section is designed around service-by-service updates rather than one global save for the whole page.

### How to work with different field types

The exact fields depend on the service, but the interaction pattern is consistent.

For text settings:

1. Expand the service row.
2. Click into the text field.
3. Enter or replace the value.
4. Use the help icon if a description is available.
5. Click `Update`.

For number settings:

1. Expand the service row.
2. Enter the numeric value in the number field.
3. Click `Update`.

For boolean settings:

1. Expand the service row.
2. Enable or disable the checkbox.
3. Use the help icon if you need the description.
4. Click `Update`.

For password settings:

1. Expand the service row.
2. Click into the password field.
3. Enter the new value.
4. Click `Update`.

Because these values can directly affect the behavior of a service, make changes deliberately and verify the related functionality afterwards.

Example:
If a service-level setting controls access to an external dependency, change the configuration here and then validate the feature that depends on that service instead of assuming the update is correct.

> [Image placeholder: Expanded service configuration row showing text, number, boolean, and password fields plus the Update button]

## Manage OPC UA certificates

The `Certificates` section is dedicated to OPC UA certificate handling.

In the current UI, the section is described as the place to configure trusted and rejected OPC UA certificates.

The table shows certificates together with:

- `Issuer`
- `Expires`
- actions for `Details`, `Trust` or `Reject`, and `Delete`

### Refresh the certificate list

To reload the certificate table:

1. Open `Configuration > Extension Services`.
2. Go to `Certificates`.
3. Click the refresh icon in the table header.

Use this after certificate-related changes or after connecting to systems that may introduce new certificates.

### View certificate details

To inspect one certificate:

1. Open the `Certificates` section.
2. Find the certificate in the table.
3. Click `Details`.

This opens the certificate details dialog so you can inspect the certificate before deciding whether to trust, reject, or remove it.

### Trust or reject a certificate

The current UI allows you to switch a certificate between trusted and rejected state directly from the table.

To change the state:

1. Open `Configuration > Extension Services`.
2. Go to `Certificates`.
3. Find the certificate.
4. Click `Trust` if it is currently rejected, or `Reject` if it is currently trusted.

After the action, StreamPipes updates the certificate state and reloads the table.

Use this when an OPC UA connection depends on whether a certificate is accepted.

### Delete a certificate

To remove a certificate entry:

1. Open the `Certificates` section.
2. Find the certificate you want to remove.
3. Click `Delete`.

Use deletion carefully. Trust or reject is often the better operational action when the certificate should remain known to the system but with a controlled state.

> [Image placeholder: Certificates table showing Details, Trust or Reject, and Delete actions]

## Typical workflows

### Investigate a service-backed feature problem

1. Open `Configuration > Extension Services`.
2. Check `Registered services` for the expected service and its health state.
3. Open the service details to inspect location and tags.
4. Review `Service configurations` if the feature depends on service-level settings.

### Update a service-level runtime setting

1. Open `Service configurations`.
2. Find the correct service by group and name.
3. Expand the row.
4. Change the required value.
5. Click `Update`.
6. Verify the affected functionality afterwards.

### Resolve an OPC UA certificate issue

1. Open `Certificates`.
2. Refresh the list.
3. Inspect the certificate details.
4. Trust or reject the certificate based on the expected connection.
5. Delete the certificate only if it should be removed entirely.

## Common pitfalls

- Do not confuse installed extensions with registered services. One tab manages catalog items, the other manages the services behind them.
- Do not change service-level settings without validating the dependent functionality afterwards.
- Use the service details dialog when a row alone does not provide enough context.
- Treat certificate deletion carefully because it removes the entry instead of just changing its state.
