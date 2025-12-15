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


## OAuth configuration

It is possible to connect StreamPipes to an external authentication provider such as Keycloak, Azure AD or GitHub.
Multiple providers can be configured.

To enable login over OAuth, several environment variables are available 

### General settings

* `SP_OAUTH_ENABLED` set to `true` to enable OAuth
* `SP_OAUTH_REDIRECT_URI` set to the base URI where StreamPipes is running, e.g., `http://localhost:80`

### Provider-specific settings

For each configured provider, individual settings can be provided. The scheme for environment variables is `SP_OAUTH_{PROVIDER_ID}.*`.
For instance, if you want to define two providers Azure and GitHub, you can add an individual block `SP_OAUTH_PROVIDER_AZURE.*` and `SP_OAUTH_PROVIDER_GITHUB` to provide the individual authentication settings for each provider.

The following provider-specific settings are available:

* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_AUTHORIZATION_URI`, the authorization URI
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_CLIENT_ID`, the OAuth client id
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_CLIENT_NAME`, the OAuth client name
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_CLIENT_SECRET`, the OAuth client secret
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_EMAIL_ATTRIBUTE_NAME`, the JWT attribute name for the email field, e.g., `email`
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_FULL_NAME_ATTRIBUTE_NAME`, the JWT attribute name for the full username, e.g., `name`(optional)
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_ISSUER_URI`, the OAuth issuer URI
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_JWK_SET_URI`, the OAuth JWK Set URI
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_NAME`, The provider name (used to display the login button in the UI), e.g. `Azure`
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_SCOPES`, the requested OAuth scopes, comma-separated, e.g., `openid,profile,email`
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_TOKEN_URI`, the OAuth token URI
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_USER_ID_ATTRIBUTE_NAME`, the JWT attribute name for the user ID field, e.g. `sub`
* `SP_OAUTH_PROVIDER_{PROVIDER_ID}_USER_INFO_URI`, the OIDC user info endpoint, e.g., `https://graph.microsoft.com/oidc/userinfo`

### Example: Authentication with Azure AD

This example shows how to configure Azure AD as an authentication backend. The example is provided as an IntelliJ env file as used by the StreamPipes core:
Replace the placeholders and the `SP_OAUTH_REDIRECT_URI` with your individual settings.

```xml
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="core" type="SpringBootApplicationConfigurationType" factoryName="Spring Boot">
    <envs>
        <env name="SP_OAUTH_PROVIDER_AZURE_AUTHORIZATION_URI" value="https://login.microsoftonline.com/{TENANT_ID}/oauth2/v2.0/authorize" />
        <env name="SP_OAUTH_PROVIDER_AZURE_CLIENT_ID" value="{CLIENT_ID}" />
        <env name="SP_OAUTH_PROVIDER_AZURE_CLIENT_NAME" value="{CLIENT_NAME}" />
        <env name="SP_OAUTH_PROVIDER_AZURE_CLIENT_SECRET" value="{CLIENT_SECRET}" />
        <env name="SP_OAUTH_PROVIDER_AZURE_EMAIL_ATTRIBUTE_NAME" value="email" />
        <env name="SP_OAUTH_PROVIDER_AZURE_FULL_NAME_ATTRIBUTE_NAME" value="name" />
        <env name="SP_OAUTH_PROVIDER_AZURE_ISSUER_URI" value="https://login.microsoftonline.com/{TENANT_ID}/v2.0" />
        <env name="SP_OAUTH_PROVIDER_AZURE_JWK_SET_URI" value="https://login.microsoftonline.com/{TENANT_ID}/discovery/v2.0/keys" />
        <env name="SP_OAUTH_PROVIDER_AZURE_NAME" value="Azure" />
        <env name="SP_OAUTH_PROVIDER_AZURE_SCOPES" value="openid,profile,email" />
        <env name="SP_OAUTH_PROVIDER_AZURE_TOKEN_URI" value="https://login.microsoftonline.com/{TENANT_ID}/oauth2/v2.0/token" />
        <env name="SP_OAUTH_PROVIDER_AZURE_USER_ID_ATTRIBUTE_NAME" value="sub" />
        <env name="SP_OAUTH_PROVIDER_AZURE_USER_INFO_URI" value="https://graph.microsoft.com/oidc/userinfo" />
        <env name="SP_OAUTH_REDIRECT_URI" value="http://localhost:8082" />
        <env name="SP_OAUTH_ENABLED" value="true" />
    </envs>
    <module name="streampipes-service-core" />
    <option name="SPRING_BOOT_MAIN_CLASS" value="org.apache.streampipes.service.core.StreamPipesCoreApplication" />
    <method v="2">
      <option name="Make" enabled="true" />
    </method>
  </configuration>
</component>
```

### Example: Authentication with GitHub

Note that you need to provide the environment variables `SP_OAUTH_REDIRECT_URI` and `SP_OAUTH_ENABLED` only once in case you configure more than one provider.

```xml
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="core" type="SpringBootApplicationConfigurationType" factoryName="Spring Boot">
    <envs>
        <env name="SP_OAUTH_PROVIDER_GITHUB_AUTHORIZATION_URI" value="https://github.com/login/oauth/authorize" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_CLIENT_ID" value="{CLIENT_ID}" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_CLIENT_NAME" value="{CLIENT_NAME}" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_CLIENT_SECRET" value="{CLIENT_SECRET}" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_EMAIL_ATTRIBUTE_NAME" value="email" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_NAME" value="Github" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_SCOPES" value="read:email" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_TOKEN_URI" value="https://github.com/login/oauth/access_token" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_USER_ID_ATTRIBUTE_NAME" value="id" />
        <env name="SP_OAUTH_PROVIDER_GITHUB_USER_INFO_URI" value="https://api.github.com/user" />
        <env name="SP_OAUTH_REDIRECT_URI" value="http://localhost:8082" />
        <env name="SP_OAUTH_ENABLED" value="true" />
    </envs>
    <module name="streampipes-service-core" />
    <option name="SPRING_BOOT_MAIN_CLASS" value="org.apache.streampipes.service.core.StreamPipesCoreApplication" />
    <method v="2">
      <option name="Make" enabled="true" />
    </method>
  </configuration>
</component>
```

### Notes

:::warning
This feature should be considered experimental. Currently, there is no mapping between external users and StreamPipes roles and all newly registered users will be assigned the role `ROLE_ADMIN`.
:::

Roles can be assigned to users in the same way as default users. In the `Security` settings (see above), for each user the provider is shown. For local users (tagged with the `local` provider), all user settings can be changed.
For other providers, only roles can be changed and it is not possible to modify the username or email, since these are managed by the external system.

