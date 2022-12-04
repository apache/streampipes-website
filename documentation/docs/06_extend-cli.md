---
id: extend-cli
title: StreamPipes CLI
sidebar_label: StreamPipes CLI
---

The StreamPipes command-line interface (CLI) is focused on developers in order to provide an easy entrypoint to set up a suitable dev environment, either planning on developing

* new extensions such as **connect adapters, processors, sinks** or,
* new core features for **backend** and **ui**.

The main difference between the standard Docker/K8s installation is an improved communication between services running as containers and services running locally for development.

The CLI can be found in the [main repository](https://github.com/apache/streampipes/tree/master/installer/cli) or in the ``installer/cli`` folder of the downloaded source code.

## TL;DR

```bash
streampipes env --list
[INFO] Available StreamPipes environment templates:
pipeline-element
...
streampipes env --set pipeline-element
streampipes up -d
```
> **NOTE**: use `./streampipes` if you haven't add it to the PATH and sourced it (see section "Run `streampipes` from anywhere?").

## Prerequisites
The CLI is basically a wrapper around multiple `docker` and `docker-compose` commands plus some additional sugar.

* Docker >= 17.06.0
* Docker-Compose >= 1.26.0 (Compose file format: 3.4)
* Google Chrome (recommended), Mozilla Firefox, Microsoft Edge
* For Windows Developer: GitBash only


Tested on: **macOS**, **Linux**, **Windows***)

> **NOTE**: *) If you're using Windows the CLI only works in combination with GitBash - CMD, PowerShell won't work.


## CLI commands overview

```
StreamPipes CLI - Manage your StreamPipes environment with ease

Usage: streampipes COMMAND [OPTIONS]

Options:
  --help, -h      show help
  --version, -v   show version

Commands:
  clean       Remove StreamPipes data volumes, dangling images and network
  down        Stop and remove StreamPipes containers
  env         Inspect and select StreamPipes environments
  info        Get information
  logs        Get container logs for specific container
  ps          List all StreamPipes container for running environment
  pull        Download latest images from Dockerhub
  restart     Restart StreamPipes environment
  up          Create and start StreamPipes container environment

Run 'streampipes COMMAND --help' for more info on a command.
```

## Usage: Along dev life-cycle

**List** available environment templates.
```bash
streampipes env --list
```

**Inspect** services in an available environment to know what kind of services it is composed of.
```bash
streampipes env --inspect pipeline-element
```

**Set** environment, e.g. `pipeline-element`, if you want to write a new pipeline element.
```bash
streampipes env --set pipeline-element
```

**Start** environment ( default: `dev` mode). Here the service definition in the selected environment is used to start the multi-container landscape.
> **NOTE**: `dev` mode is enabled by default since we rely on open ports to core service such as `consul`, `couchdb`, `kafka` etc. to reach from the IDE when developing. If you don't want to map ports (except the UI port), then use the `--no-ports` flag.

```bash
streampipes up -d
# start in production mode with unmapped ports
# streampipes up -d --no-ports
```
Now you're good to go to write your new pipeline element :tada: :tada: :tada:

> **HINT for extensions**: Use our [Maven archetypes](https://streampipes.apache.org/docs/docs/dev-guide-archetype/) to setup a project skeleton and use your IDE of choice for development. However, we do recommend using IntelliJ.

> **HINT for core**: To work on `backend` or `ui` features you need to set the template to `backend` and clone the core repository [streampipes](https://github.com/apache/streampipes) - check the prerequisites there for more information.

**Stop** environment and remove docker container
```bash
streampipes down
# want to also clean docker data volumes when stopping the environment?
# streampipes down -v
```

## Additionally, useful commands

**Start individual services only?** We got you! You chose a template that suits your needs and now you only want to start individual services from it, e.g. only Kafka and Consul.

> **NOTE**: the service names need to be present and match your current `.spenv` environment.

```bash
streampipes up -d kafka consul
```

**Get current environment** (if previously set using `streampipes env --set <environment>`).
```bash
streampipes env
```

**Get logs** of specific service and use optional `--follow` flag to stay attached to the logs.
```bash
streampipes logs --follow backend
```

**Update** all services of current environment
```bash
streampipes pull
```

**Restart** all services of current environment or specific services
```bash
streampipes restart
# restart backend & consul
# streampipes restart backend consul
```

**Clean** your system and remove created StreamPipes Docker volumes, StreamPipes docker network and dangling StreamPipes images of old image layers.
```bash
streampipes clean
# remove volumes, network and dangling images
# streampipes clean --volumes
```

## Modify/Create an environment template
As of now, this step has to be done **manually**. All environments are located in `environments/`.

```bash
├── adapter               # developing a new connect adapter
├── backend               # developing core backend features
├── basic                 # wanna run core, UI, connect etc from the IDE?
├── full                  # full version containing more pipeline elements
├── lite                  # few pipeline elements, less memory  
├── pipeline-element      # developing new pipeline-elements
└── ui                    # developing UI features
```
**Modifying an existing environment template**. To modify an existing template, you can simply add a `<YOUR_NEW_SERVICE>` to the template.
> **NOTE**: You need to make sure, that the service your are adding exists in `deploy/standalone/service/<YOUR_NEW_SERVICE>`. If your're adding a completely new service take a look at existing ones, create a new service directory and include a `docker-compose.yml` and `docker-compose.dev.yml` file.

```
[environment:backend]
activemq
kafka
...
<YOUR_NEW_SERVICE>
```

**Creating a new** environment template. To create a new environment template, place a new file `environments/<YOUR_NEW_ENVIRONMENT>` in the template directory. Open the file and use the following schema.
> **IMPORTANT**: Please make sure to have `[environment:<YOUR_NEW_ENVIRONMENT>]` header in the first line of your new template matching the name of the file. Make sure to use small caps letters (lowercase) only.

```
[environment:<YOUR_NEW_ENVIRONMENT>]
<SERVICE_1>
<SERVICE_2>
...
```

## Run `streampipes` from anywhere? No problem
Simply add the path to this cli directory to your `$PATH` (on macOS, Linux) variable, e.g. in your `.bashrc` or `.zshrc`, or `%PATH%` (on Windows).

For **macOS**, or **Linux**:

```bash
export PATH="/path/to/streampipes-installer/installer/cli:$PATH"
```

For **Windows 10**, e.g. check this [documentation](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/).


## Upgrade to new version
To upgrade to a new version, simply edit the version tag `SP_VERSION` in the `.env` file.
