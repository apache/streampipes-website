---
id: extend-sdk-migration
title: "SDK Guide: Pipeline Element Migration"
sidebar_label: "SDK: PE Migration"
---

Pipeline element migrations allow you to automatically update and migrate both existing and pipeline elements when a new
version of StreamPipes is installed. This means that whenever you upgrade StreamPipes, all existing and future
pipeline elements will be directly compatible with the new version without any manual interaction. Pipeline elements
include adapters, data processors, and data sinks.

:::info
Migrations will make their debut in StreamPipes version `0.93.0` and will be an integral part of the system going
forward.
However, it's important to note that this feature is not available in any of the previous versions of StreamPipes. To
take full advantage of migrations and their benefits, it is recommended to upgrade to version `0.93.0` or later. This
will
ensure that you have access to the latest enhancements and maintain compatibility with the evolving StreamPipes
platform.
:::

## Define Migrations

Whenever a pipeline element, be it an adapter, data processor, or data sink, undergoes changes that result in
modifications to its configuration options, developers must additionally create a migration procedure. This migration
process should be capable of smoothly transitioning all affected instances from the previous version to the new one.
The migration itself is automatically managed and executed by StreamPipes. Developers are only responsible for two key
aspects:

* **Implementing the Concrete Migration**: Developers need to craft the specific migration logic that facilitates the
  seamless transition of configuration options.
* **Registering the Migration**: Developers should register their migration procedures at the extensions service,
  allowing StreamPipes to identify and apply the necessary updates to affected instances.

By adhering to these two essential tasks, developers can ensure a hassle-free evolution of pipeline elements while
StreamPipes efficiently handles the orchestration of the migration process.

The following gives a concrete example of creating a migration for
the [S7 adapter](./pe/org.apache.streampipes.connect.iiot.adapters.plc4x.s7.md).
Thereby, we assume this adapter has received a new input element which determines whether the connection should be made
authenticated or not.
This is represented by a simple boolean that is visualized as a toggle button in the UI.

### Implementing a Concrete Migration

StreamPipes offers three distinct migration mechanisms tailored to specific types of pipeline
elements: `AdapterMigrator`, `DataProcessorMigrator`, and `DataSinkMigrator`.
These migration mechanisms are presented as abstract classes and require the implementation of two fundamental methods:

* `config()`: This method defines the configuration for the migration, encompassing all essential metadata related to
  the migration process.
* `migrate()`: Within this method, the actual migration logic is to be implemented. It serves as the operational core
  for facilitating the migration for the respective pipeline element.

In accordance with the example described above, we will implement the `Plc4xS7AdapterMigrationV1` in the following.

:::note
Before we begin, it's important to familiarize ourselves with two key conventions that guide our approach to migrations:

* To maintain clarity and organization, all migration classes associated with a specific pipeline element are located
  within a dedicated sub-package named `migration`. This sub-package is nested within the package of the respective
  pipeline element.
* Migration classes are named according to a specific schema: `<elementClassName>MigrationV<targetVersion>`. For
  example, if you are working on a migration for the PLC4x S7 adapter targeting version 1, the migration class would be
  named `Plc4xS7AdapterMigrationV1`.
:::

Let's begin with providing the migration's configuration:

```java
@Override
public ModelMigratorConfig config() {
  return new ModelMigratorConfig(
          "org.apache.streampipes.connect.iiot.adapters.plc4x.s7",
          SpServiceTagPrefix.ADAPTER,
          0,
          1
  );
}
```

The migration config consists of the following four parts:

* `targetAppId`: this needs to equal the app id of the targeted element
* `modelType`: the type of the element to be migrated, this can be one
  of: `SpServiceTagPrefix.ADAPTER`, `SpServiceTagPrefix.DATA_PROCESSOR`, `SpServiceTagPrefix.DATA_SINK`.
* `fromVersion`: the version of the element that the migration expects as input
* `toVersion`: the version the element has after the migration (needs to be at least `fromVersion + 1`)

The second step is to implement the actual migration logic.
In our example, we need to extend the existing static properties by an additional boolean property.

```java
@Override
public MigrationResult<AdapterDescription> migrate(AdapterDescription element, IStaticPropertyExtractor extractor) throws RuntimeException {

  var config = element.getConfig();

  var slideToggle = new SlideToggleStaticProperty();
  slideToggle.setDefaultValue(false);
  slideToggle.setLabel("Authentication required?");
  config.add(slideToggle);

  element.setConfig(config);
  return MigrationResult.success(element);
}
```

We've completed all the necessary steps for our migration. The final task remaining is to register the migration within
the service definition.

### Registering the Migration

Only when the migration is registered at the service definition, the migration is sent to the StreamPipes core service.
Therefore, we need to add the migration to the same service definition as the element to migrate.
In our example this is defined in `ConnectAdapterIiotInit`:

```java jsx {22-24} showLineNumbers
@Override
public SpServiceDefinition provideServiceDefinition() {
  return SpServiceDefinitionBuilder.create("connect-adapter-iiot",
          "StreamPipes connect worker containing adapters relevant for the IIoT",
          "",
          8001)
      .registerAdapter(new MachineDataSimulatorAdapter())
      .registerAdapter(new FileReplayAdapter())
      .registerAdapter(new IfmAlMqttAdapter())
      .registerAdapter(new RosBridgeAdapter())
      .registerAdapter(new OpcUaAdapter())
      .registerAdapter(new Plc4xS7Adapter())
      .registerAdapter(new Plc4xModbusAdapter())
      .registerAdapter(new KafkaProtocol())
      .registerAdapter(new MqttProtocol())
      .registerAdapter(new NatsProtocol())
      .registerAdapter(new HttpStreamProtocol())
      .registerAdapter(new PulsarProtocol())
      .registerAdapter(new RocketMQProtocol())
      .registerAdapter(new HttpServerProtocol())
      .registerAdapter(new TubeMQProtocol())
      .registerMigrators(
          new Plc4xS7AdapterMigrationV1()
      )
      .build();
```

<br />

## How Migrations are Handled Internally

Migrations are handled by an interplay between the Extension Service, which provides the migrations,
and the StreamPipes Core Service, which manages the migrations, as shown in the figure below:
<img src="/img/06_sdk_migrations/migration-flow.png" alt="Interplay of extensions service and core to handle migrations"/>

When an extensions service is initiated and has successfully registered itself with the core, it proceeds to send a
request to the core. This request includes a comprehensive list of all available migrations that have been registered
for it. Since this collection of migrations may encompass multiple migrations that affect the same pipeline element,
the migrations are first de-duplicated and then sorted based on their version range before being transmitted.

Upon receiving these migrations, the core's actions can be categorized into two distinct parts:

* Update descriptions for new elements
* Update descriptions for existing elements

### Update Descriptions for New Elements

Each migration transmitted from the extensions service to the core triggers the core to update the description of the
corresponding element stored in CouchDB. This is achieved by requesting the current configuration from the extensions
service and subsequently overwriting the existing configuration in the storage.

### Update Descriptions for Existing Elements

For each migration sent from the extensions service to the core, the core conducts a thorough check to determine if any
existing elements are affected by this migration. If such elements are identified, the extensions service is tasked with
requesting and subsequently executing the migration on behalf of the core.

In scenarios where multiple applicable migrations exist for a single pipeline element, they are sequentially applied.
Success in this process allows the core to seamlessly update the configuration. However, if any issues arise, the
corresponding pipeline element is halted. In the case of processors and sinks, the associated pipeline is even marked
with a `needs attention` label, which comes apparent in the UI.
