---
id: configure-operate-security
title: Security & User Management
sidebar_label: Security & User Management
---

## Introduction

The `Security` section in StreamPipes is where administrators manage who can access the platform, which roles they receive, and how platform resources are shared. It combines account management, role-based access control, group assignment, service accounts, and JWT signing support in one place.

Use this page together with:

- [General Settings](./06_configure-operate-general-settings.md) for self-registration, password recovery, and default roles for new users
- [Environment Variables](./06_configure-operate-environment-variables.md) for installation-time security settings

## What the Security page contains

The current `Security` page is organized into five sections:

- `User Accounts`
- `Service Accounts`
- `Groups`
- `Roles`
- `Authentication`

Each section supports a different part of the security model.

## Security model at a glance

In practice, StreamPipes combines three layers:

1. `Accounts` identify users or services.
2. `Roles` define what those accounts are allowed to do.
3. `Resource permissions` define who can access a specific pipeline, adapter, chart, dashboard, dataset, asset, or extension.

That means a user does not only need the right global role, but may also need access to the individual resource.

## Installation-time security settings

Before you start managing users in the UI, review the security-related environment variables of the installation. The most important installation-time settings are:

- `SP_INITIAL_ADMIN_EMAIL`
- `SP_INITIAL_ADMIN_PASSWORD`
- `SP_INITIAL_SERVICE_USER`
- `SP_INITIAL_SERVICE_USER_SECRET`
- `SP_ENCRYPTION_PASSCODE`
- `SP_JWT_SECRET`
- `SP_JWT_SIGNING_MODE`
- `SP_JWT_PRIVATE_KEY_LOC`

For extension services that authenticate against the core, the relevant settings are:

- `SP_CLIENT_USER`
- `SP_CLIENT_SECRET`

For production systems, you should change the default credentials and secrets before exposing the installation to real users or connecting external systems.

## User accounts

`User Accounts` are interactive identities for people who sign in to StreamPipes through the UI or use the API as named users.

The user table shows:

- email address
- provider type
- full name
- creation time
- last login

### Create a user account

To create a local user:

1. Open `Configuration` > `Security`.
2. In `User Accounts`, click `New`.
3. Enter the user's email address and full name.
4. In `Password`, either enter an initial password or, if email is configured, enable `Auto-create password and send to user`.
5. Assign groups and roles.
6. Decide whether the account should be `Enabled` and whether it should be `Locked`.
7. Click `Save`.

### Edit a user account

When you edit a local user, you can change:

- email address
- full name
- assigned groups
- assigned roles
- enabled state
- locked state

If you change the email address of the currently signed-in user, StreamPipes requires a new login afterwards.

### External users

StreamPipes can also show users that come from an external identity provider. In the table, these users are marked by their provider instead of `local`.

For externally managed users:

- identity fields are managed by the external system
- some settings in StreamPipes are read-only
- role assignments may also be externally managed, depending on the provider configuration

The UI explicitly warns when externally managed user settings cannot be changed.

## Service accounts

`Service Accounts` are non-human accounts for automated communication with the core API. They are typically used by extension services and other technical integrations.

Use a service account when:

- an extension service needs to authenticate to the core
- an automated integration should call the StreamPipes API
- access should not be tied to an individual person

### Create a service account

To create a service account:

1. Open `Configuration` > `Security`.
2. In `Service Accounts`, click `New`.
3. Enter the username.
4. Enter a `Client Secret`.
5. Assign the required groups and roles.
6. Click `Save`.

The client secret must meet the minimum length requirement enforced by the UI. In practice, service accounts should receive only the roles they actually need.

## Groups

`Groups` are a practical way to assign the same role set to multiple users. Instead of assigning every role to every user individually, you assign roles to a group and then assign users to that group.

### Create a group

1. Open `Configuration` > `Security`.
2. In `Groups`, click `New`.
3. Enter a group name.
4. Select one or more roles for the group.
5. Click `Save`.

After that, edit users and enable the group checkboxes you want to assign.

### Alternate IDs for groups

Groups also support `Alternate IDs`. These are useful when you want to map externally defined groups to a StreamPipes group. This is especially relevant in setups with external identity providers.

In practice:

- the StreamPipes group keeps the local role definition
- the alternate ID stores the external group identifier
- external identities can then be aligned with the local authorization model

## Roles

`Roles` are the central access-control building block in StreamPipes. A role contains a set of privileges, and users or groups receive those privileges by assignment.

The role overview distinguishes between:

- `Default roles`, which are built into the platform
- custom roles, which administrators create for their own operating model

Default roles cannot be deleted.

### Create a custom role

1. Open `Configuration` > `Security`.
2. In `Roles`, click `New`.
3. Enter a `Role ID`.
4. Enter a `Role Name`.
5. Add the required privileges from `Available Privileges` to `Selected Privileges`.
6. Optionally add `Alternate IDs` if the role should map to externally defined roles.
7. Click `Save`.

The role ID must start with `ROLE_` and use only uppercase letters and underscores.

### Alternate IDs for roles

Like groups, roles can also contain `Alternate IDs`. These are used to map externally defined roles to a StreamPipes role. This makes it possible to keep a stable local authorization model even when role names in the external system differ from the StreamPipes role ID.

## How users, groups, and roles work together

The effective permissions of a user are the combination of:

- roles assigned directly to the user
- roles inherited from assigned groups

This means groups are not a separate permission system. They are a role-assignment mechanism.

A practical pattern is:

- create a small number of business-oriented groups such as `Operations`, `Data Engineering`, or `Plant Supervisors`
- assign the relevant roles to those groups
- assign users to groups instead of distributing many direct role assignments

## Resource permissions

Roles control what a user is allowed to do in general. Resource permissions control which concrete objects a user or group can access.

StreamPipes supports permissions dialogs for major resource types, including:

- adapters
- pipelines
- datasets
- charts
- dashboards
- assets
- extensions

### How resource permissions work

Each resource has:

- an owner
- a visibility model such as private or shared access
- explicit user and group assignments in the permissions dialog

In practice, this allows you to separate:

- who may generally manage pipelines or dashboards
- who may access one specific pipeline or dashboard

### Change permissions for a resource

To change permissions, open the overview page of the corresponding resource type and use the permissions action for the item you want to manage. The exact button placement differs by feature, but the workflow is the same:

1. Open the resource overview.
2. Locate the item.
3. Open the permissions dialog.
4. Assign the required users or groups.
5. Save the changes.

This is the mechanism to use when one team should see or edit a specific object without making it broadly available to everyone with the same global role.

## Authentication and JWT signing

The `Authentication` section currently focuses on `JWT Signature`.

In the UI, administrators can:

- generate a new public/private key pair
- download the generated files

This is useful in setups where signed tokens and authenticated service communication should rely on an explicit key pair instead of only a shared secret.

### Generate a key pair

1. Open `Configuration` > `Security`.
2. Scroll to `Authentication`.
3. Click `Generate and download new key pair`.
4. Store the downloaded files securely.
5. Update the deployment configuration so the core and dependent services use the generated keys.

The downloaded files are:

- `public.key`
- `private.pem`

If you configure RSA-based JWT signing, make sure the deployment references the matching key locations through the appropriate environment variables.

## Self-registration and default roles

User self-registration is not configured in the `Security` page itself. It is configured in `General Settings`.

There you can define:

- whether self-registration is allowed
- whether password recovery is allowed
- which default roles newly registered users receive

This distinction matters:

- `Security` is where you manage concrete accounts, groups, roles, and technical authentication assets
- `General Settings` is where you control how new users enter the system

## OAuth and external identity providers

StreamPipes can be connected to external authentication providers such as Keycloak, Azure AD, or GitHub. Provider configuration is done through environment variables, not through a full provider wizard in the UI.

### Enable OAuth

At minimum, enable OAuth with:

- `SP_OAUTH_ENABLED`
- `SP_OAUTH_REDIRECT_URI`

`SP_OAUTH_REDIRECT_URI` must point to the public base URL of your StreamPipes installation.

### Provider configuration pattern

Every provider is configured with variables that follow this pattern:

```text
SP_OAUTH_PROVIDER_{PROVIDER_ID}_{SETTING}
```

Examples:

- `SP_OAUTH_PROVIDER_AZURE_CLIENT_ID`
- `SP_OAUTH_PROVIDER_GITHUB_CLIENT_SECRET`
- `SP_OAUTH_PROVIDER_KEYCLOAK_ISSUER_URI`

The `PROVIDER_ID` identifies one configured provider. You can define multiple providers side by side by using different IDs.

### Provider-specific settings

The current OAuth configuration parser supports the following provider settings:

- `AUTHORIZATION_URI`
- `CLIENT_NAME`
- `CLIENT_ID`
- `CLIENT_SECRET`
- `FULL_NAME_ATTRIBUTE_NAME`
- `ISSUER_URI`
- `JWK_SET_URI`
- `SCOPES`
- `TOKEN_URI`
- `USER_INFO_URI`
- `EMAIL_ATTRIBUTE_NAME`
- `USER_ID_ATTRIBUTE_NAME`
- `ROLE_ATTRIBUTE_NAME`
- `NAME`
- `DEFAULT_ROLES`

In practice, the most important ones are:

- connection details such as `AUTHORIZATION_URI`, `TOKEN_URI`, `USER_INFO_URI`, `ISSUER_URI`, and `JWK_SET_URI`
- client credentials such as `CLIENT_ID` and `CLIENT_SECRET`
- user-attribute mapping such as `EMAIL_ATTRIBUTE_NAME`, `FULL_NAME_ATTRIBUTE_NAME`, and `USER_ID_ATTRIBUTE_NAME`
- optional role mapping through `ROLE_ATTRIBUTE_NAME`
- optional default role assignment through `DEFAULT_ROLES`

### What the provider settings mean

Use the settings as follows:

- `NAME` is the display name shown for the login provider.
- `CLIENT_NAME` is the client name used in the OAuth configuration.
- `SCOPES` is a comma-separated list of requested scopes.
- `EMAIL_ATTRIBUTE_NAME` maps the email claim from the provider to the StreamPipes user.
- `FULL_NAME_ATTRIBUTE_NAME` maps the full-name claim.
- `USER_ID_ATTRIBUTE_NAME` maps the external user identifier.
- `ROLE_ATTRIBUTE_NAME` defines which claim contains externally provided role information.
- `DEFAULT_ROLES` assigns StreamPipes roles to users from that provider if no explicit external mapping is used.

### Example structure

The following example shows the structure of a provider configuration:

```bash
SP_OAUTH_ENABLED=true
SP_OAUTH_REDIRECT_URI=https://streampipes.example.com

SP_OAUTH_PROVIDER_AZURE_NAME=Azure
SP_OAUTH_PROVIDER_AZURE_CLIENT_NAME=streampipes
SP_OAUTH_PROVIDER_AZURE_CLIENT_ID=<client-id>
SP_OAUTH_PROVIDER_AZURE_CLIENT_SECRET=<client-secret>
SP_OAUTH_PROVIDER_AZURE_AUTHORIZATION_URI=https://login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize
SP_OAUTH_PROVIDER_AZURE_TOKEN_URI=https://login.microsoftonline.com/<tenant>/oauth2/v2.0/token
SP_OAUTH_PROVIDER_AZURE_ISSUER_URI=https://login.microsoftonline.com/<tenant>/v2.0
SP_OAUTH_PROVIDER_AZURE_JWK_SET_URI=https://login.microsoftonline.com/<tenant>/discovery/v2.0/keys
SP_OAUTH_PROVIDER_AZURE_USER_INFO_URI=https://graph.microsoft.com/oidc/userinfo
SP_OAUTH_PROVIDER_AZURE_SCOPES=openid,profile,email
SP_OAUTH_PROVIDER_AZURE_EMAIL_ATTRIBUTE_NAME=email
SP_OAUTH_PROVIDER_AZURE_FULL_NAME_ATTRIBUTE_NAME=name
SP_OAUTH_PROVIDER_AZURE_USER_ID_ATTRIBUTE_NAME=sub
```

If you define more than one provider, keep `SP_OAUTH_ENABLED` and `SP_OAUTH_REDIRECT_URI` once, and add one provider block per identity provider.

### Role mapping in OAuth-based setups

OAuth-based installations can combine several mechanisms:

- `DEFAULT_ROLES` in the provider configuration
- `ROLE_ATTRIBUTE_NAME` if the provider sends role claims
- `Alternate IDs` on roles and groups in the Security page

This is the recommended mental model:

- use provider configuration to establish authentication and basic claim mapping
- use StreamPipes roles and groups to keep the local authorization model understandable
- use alternate IDs when external role or group names should map to existing StreamPipes objects

In external-login setups, the Security page remains important because it still shows the resulting users, role assignments, and externally managed status.

## Recommended operating pattern

For most teams, the following model works well:

1. Set secure initial credentials and secrets during deployment.
2. Create a dedicated service account for every technical integration or extension deployment.
3. Use groups for team-level access management.
4. Keep custom roles small and purpose-specific.
5. Use resource permissions to share individual adapters, pipelines, charts, dashboards, datasets, assets, and extensions.
6. Review externally managed users and role mappings carefully in OAuth-based installations.

## Image placeholders

`[Image placeholder: Security settings overview with the five sections User Accounts, Service Accounts, Groups, Roles, and Authentication]`

`[Image placeholder: Edit user dialog showing local user fields, group assignment, role assignment, and account status]`

`[Image placeholder: Role editor with available privileges, selected privileges, and alternate IDs]`

`[Image placeholder: Permissions dialog for a resource such as a pipeline or dashboard]`
