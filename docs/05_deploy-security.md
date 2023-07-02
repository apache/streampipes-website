---
id: deploy-security
title: Security
sidebar_label: Security
---

## Overriding default settings

At installation time, StreamPipes checks for available environment variables relevant for the securing the system. If they are not set, it will use the default values.

The following variables are checked by the core at installation time:

* SP_INITIAL_ADMIN_EMAIL The email address of the initial administrator.
* SP_INITIAL_ADMIN_PASSWORD The password of the initial administrator.
* SP_INITIAL_CLIENT_USER The initial client user, used by the extensions modules to make authenticated API requests to the core.
* SP_INITIAL_CLIENT_SECRET The default password of the initial client user.
* SP_SETUP_INSTALL_PIPELINE_ELEMENTS Indicates whether pipeline elements should be installed.
* SP_ENCRYPTION_PASSCODE The encryption passcode, used for securely storing secrets (e.g., database connection strings).
* SP_JWT_SECRET The JWT secret, used for signing JWT tokens.

In addition, all extensions services that perform requests to the core will need to have the following environment variables set:

* SP_CLIENT_USER The client user, used by the extensions modules to make authenticated API requests to the core.
* SP_CLIENT_SECRET The password of the client user.

Note that there are default values for all environment variables that are set at installation time - make sure to change these settings when moving to production!

## Configuration

Most security-related settings can be set in the configuration section of StreamPipes. The *General* section allows to set self-service registration and password recovery (both are disabled by default and require a valid email configuration).
In the *Security* section, users, service accounts, roles and groups can be configured.


## User types

StreamPipes distinguishes between User Accounts (real users that interact with StreamPipes over the UI or an API) and Service Accounts (user-independent accounts which solely use StreamPipes over the API).

User accounts are typically used by extensions service that require API access to the core (e.g., to get a list of running pipelines).

## Permissions

StreamPipes v0.69.0 comes with more advanced mechanisms to manage permissions.
For each major resource (pipeline elements, pipelines, StreamPipes Connect adapters, dashboards, data explorer views), permissions can be assigned individually to users and groups.

To ease permission handling, StreamPipes comes with a default number of roles with pre-assigned privileges:

### Roles

* Admin The administrator role has full access to all resources.
* Service Admin The service administrator role has full access to all resources, but has no access to the UI.
* Pipeline Admin has full control of pipelines (create, edit, delete, start, stop, pause, resume, etc.).
* Pipeline User has limited control of pipelines (read only).
* Dashboard Admin has full control of dashboards (create, edit, delete, etc.).
* Dashboard User has limited control of dashboards (read only).
* Data Explorer Admin has full control of data explorer views (create, edit, delete, etc.).
* Data Explorer User has limited control of data explorer views (read only).
* Connect Admin has full control of StreamPipes Connect adapters (create, edit, delete, etc.).

### Groups

Roles can be either assigned to specific users or groups. Any group can contain several members. 
The permissions of a user are the union of the permissions of all roles assigned to the user and the groups to which the user belongs.

### Changing permissions

Any resource has a resource owner, which is the authority that created the resource. Resources can be either public or private. Public resources are available to all users, while the user role determines what the user can do with the resource.
E.g., a public pipeline created by a user of role ROLE_ADMIN can be edited by all users with role PIPELINE_ADMIN, while the same pipeline can be read by all users with role PIPELINE_USER.

Permissions can only be changed by admin users currently.
In the overview section of each resource (e.g., pipelines and dashboards), a permission dialog is available to users with role ROLE_ADMIN. The dialog allows to assign users and groups to the individual resource.





