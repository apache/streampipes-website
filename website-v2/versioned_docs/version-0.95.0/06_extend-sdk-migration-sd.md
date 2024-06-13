---
id: extend-sdk-migration-service-discovery
title: "Migration Guide: New Service Discovery in 0.69.0"
sidebar_label: "Migration Guide: 0.69.0"
---


## Introduction
As part of our roadmap towards a release 1.0, Apache StreamPipes 0.69.0 features a new service discovery approach along with performance improvements related to a new storage layer for pipeline element descriptions.

The new service discovery approach is better suited for cloud-native scenarios, as the hostname of a pipeline element is now decoupled from its description. As such, StreamPipes now supports recovery of pipeline elements independent from their assigned host.
In addition, the new approach simplifies development of StreamPipes, e.g., in cases where the core is running in Docker and pipeline elements are developed on a local machine. In this case, the IP of the host machine should now be auto-discovered so that provision of environement variables should now be obsolete in most cases.
The second large improvement is related to the replacement of RDF4J as the storage engine with a NoSQL database. This leads to much faster load times (you will notice this especially at system startup).

While we are heavily working towards a stable release 1.0, we decided to put our efforts into the remaining features required for 1.0 and do not provide an auto-migration related to some breaking changes.
Therefore, we recommend to reinstall StreamPipes when updating to 0.69.0. We currently plan to have at most two more releases before releasing the first 1.x version of StreamPipes.

## Installation
* Before upgrading to 0.69.0, clean any existing installation (e.g., by running ``docker-compose down -v``) and make sure that no volumes of StreamPipes are left.
* Upgrade to the latest installer version (can be found at [streampipes/installer](https://github.com/apache/streampipes/tree/dev/installer))
* Upon restart, make sure that the setup dialog appears (make sure that the new StreamPipes logo appears) and re-initialize the system.

## SDK changes

0.69.0 comes with a new ``ServiceDefinitionBuilder`` for pipelines, which simplifies the definition of a pipeline element. 

The ServiceDefinitionBuilder requires an ID of your extensions service, an optional title and description and a default port.
It is best to provide 8090 as the default port, so that this will be the standard port of all StreamPipes extensions services at deployment time in a containerized environment.
The port port can always be overriden by providing an ``SP_PORT`` environment variable.

### Init class

Modify the Init class of your pipeline element service as follows:

```java
public class ExamplesInit extends StandaloneModelSubmitter {

  public static void main(String[] args) {
    new ExamplesInit().init();
  }

  @Override
  public SpServiceDefinition provideServiceDefinition() {
    return SpServiceDefinitionBuilder.create("org.apache.streampipes.processors.examples.jvm",
            "StreamPipes Code Examples",
            "",
            8090)
            .registerMessagingProtocols(new SpKafkaProtocolFactory(), new SpJmsProtocolFactory())
            .registerMessagingFormats(new JsonDataFormatFactory())
            .registerPipelineElement(new MyPipelineElementController())
            .registerAdapter(new MyAdapter())
            .build();
  }
}
```

You can now easily define a StreamPipes extensions service that supports both custom adapters and pipeline elements by using the following Maven dependency:
This is optional and no changes to your existing Maven dependencies (except the version, e.g., 0.69.0-SNAPSHOT) are required.

```maven
<dependency>
    <groupId>org.apache.streampipes</groupId>
    <artifactId>streampipes-container-extensions</artifactId>
</dependency>
```


### Configs
Prior to version 0.69.0, additionally configs had to be provided in a separate ``Config`` class. This is now obsolete - configs can be directly provided within the builder class as follows:

```java

 @Override
  public SpServiceDefinition provideServiceDefinition() {
    return SpServiceDefinitionBuilder.create("org.apache.streampipes.processors.examples.jvm",
            "StreamPipes Code Examples",
            "",
            8090)
            .registerPipelineElement(new MyPipelineElement())
            .registerAdapter(new MyAdapter())
            .addConfig("key", 1)
            .addConfig("my-string-config", "myvalue")
            .build();
  }
```

Configs can be easily accessed from the ``EventProcessorRuntimeContext`` (or ``EventSinkRuntimeContext``):

```java
@Override
  public void onInvocation(Parameters params, 
                            SpOutputCollector spOutputCollector, 
                            EventProcessorRuntimeContext context) {
  
    Integer myConfigValue = context.getConfigStore().getConfig().getInteger("key");
  }
```


### Service Discovery
An extensions service can be started by executing the Init class. 
StreamPipes will now automatically select the proper service IP address and register the service at the backend.
You can inspect the selected IP address in the console:

```
2024-05-16T11:03:37.158+02:00  INFO   --- [           main] o.a.s.commons.networking.Networking      : Using auto-discovered IP: 192.168.178.22
2024-05-16T11:03:37.158+02:00  INFO   --- [           main] o.a.s.commons.networking.Networking      : Using port from provided environment variable SP_PORT: 7023
2024-05-16T11:03:37.372+02:00  INFO   --- [           main] a.s.s.e.StreamPipesExtensionsServiceBase : Registering service org.apache.streampipes.extensions.all.jvm with id org.apache.streampipes.extensions.all.jvm-FUt84Y at core
2024-05-16T11:03:37.814+02:00  INFO   --- [           main] o.a.s.s.extensions.CoreRequestSubmitter  : Successfully registered service at core.
2024-05-16T11:03:37.814+02:00  INFO   --- [           main] a.s.s.e.StreamPipesExtensionsServiceBase : Registering 1 service configs for service org.apache.streampipes.extensions.all.jvm
```

In some (rare) cases, a non-resolvable IP will be selected. In this case, you can manually override the IP by providing a ``SP_HOST`` environment variable. This falls back to a similar behaviour as in pre-0.69.0-versions and will use the manually provided IP.




