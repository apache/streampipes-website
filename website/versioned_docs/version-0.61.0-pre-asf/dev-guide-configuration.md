---
id: version-0.61.0-pre-asf-dev-guide-configuration
title: Configuration
sidebar_label: Configuration
original_id: dev-guide-configuration
---

On this page we explain how the StreamPipes configuration works.
StreamPipes allows the individual services (pipeline element containers and third-party services) to store configuration parameters in a distributed key-value store.
This has the advantage that individual services do not need to store any configurations on the local file system, enabling us to run containers anywhere.
As a key-value store we use [Consul](https://www.consul.io/), which is an essential service for all our services.

<img src="/docs/img/configuration/consul.png" width="50%" alt="Semantic description of data processor">


## Edit Configurations
All services in StreamPipes can have configuration parameters.
You can either change them in the consul user interface (which is by default running on port 8500) or directly in the StreamPipes Configurations Page.
Once a new  pipeline element container is started, it is registered in Consul and the parameters can be edited in the configuration page, as shown below.
To store changes in Consul, the update button must be clicked.

<div class="my-carousel">
    <img src="/docs/img/configuration/configuration_1.png" alt="Configuration View">
    <img src="/docs/img/configuration/configuration_2.png" alt="Open Configuration View">
</div>

## Configuration for Developers
We provide a Configurations API for the use of configuration parameters in your services.
Each processing element project has a “config” package [[Example]](https://github.com/streampipes/streampipes-pipeline-elements/tree/dev/streampipes-sinks-internal-jvm/src/main/java/org/streampipes/sinks/internal/jvm/config).
This package usually contains two classes.
One containing unique keys for the configuration values and one containing the getter and setter methods to access these values.
For the naming of configuration keys, we recommend to use “SP” as a prefix.
As we explain later, it is possible to set default configurations as environment variables, this prefix makes them unique on your server.
A configuration entry needs a unique config key. For this key, a value can be specified containing the configuration, like for example the port number of the service.
For each configuration, a description explaining the parameter can be provided, further the data type must be specified and whether it is a password or not.
Below, the schema of a configuration item is shown on the left and an example of a port configuration on the right.

<img src="/docs/img/configuration/config_key.png" width="80%" alt="Semantic description of data processor">

As a developer, you can add as many new configurations to services as you wish, but there are some that are required for all processing element containers.
Those are **the host**, **the port**, and **the name** of the service.

## Default Values
You can provide default values for the configurations, which are used when a configuration is read for the first time.
The first option is to register a configuration parameter in the Config class.
This is a fallback value, which is used if nothing else is defined.
Since this value is static, we offer a second option.
It is possible to provide a default value by setting an environment variable.
In this case, the convention is that the key of a configuration parameter must be used as the environment variable.
Now, this value is used instead of the value defined in the Config class.
During development, the configuration values often need to be changed for debugging purposes, therefore we provide an .env file in all processing element projects and archetypes.
This file can be used by your IDE to set the environment variables. (e.g., [Intellij Plugin](https://plugins.jetbrains.com/plugin/7861-envfile))
When you need to change the variable at runtime, you can do this in the StreamPipes configurations as explained before.
Those changes take effect immediately without the need of a container restart.

<div class="admonition warning">
<div class="admonition-title">Installed pipeline elements</div>
<p>Be cautious, when the configuration is used in the semantic description of a processing element which is already installed in StreamPipes, you have to reload this element in StreamPipes (my elements -> reload).
   In addition, changes might affect already running pipelines.</p>
</div>
