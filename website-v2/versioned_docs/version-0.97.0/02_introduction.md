---
id: introduction
title: Introduction
sidebar_label: Introduction
---

## What is StreamPipes?

Apache StreamPipes is a self-service Industrial IoT toolbox to enable non-technical users to connect, analyze and
explore IoT data streams. The main goal of StreamPipes is to help users bridging the gap between operational
technology (OT) and information technology (IT). This is achieved by providing a set of tools which help to make
industrial data accessible for downstream tasks such as data analytics and condition monitoring.
When working with industrial data and especially when building upon an open source stack for such tasks, users are often
faced with the management and integration of a variety of different tools for data connectivity, messaging &
integration, data enrichment, data storage, visualization and analytics. This results in an increasing operational
complexity and hardly manageable software stacks.

Apache StreamPipes addresses this problem: It provides a complete toolbox with a variety of different tools to easily
gather data from OT systems such as Programmatic Logic Controllers (PLCs), industrial protocols (e.g., OPC-UA or
Modbus), IT protocols (e.g., MQTT) and others. Data is integrated in the form of live data streams. Based on connected
data, StreamPipes provides another module called the pipeline editor, which can be used to apply real-time analytics
algorithms on connected data stream. To this end, a library of pre-defined algorithms can be used. Out of the box,
StreamPipes provides more than 100 pipeline elements tailored at manufacturing data analytics. This includes simple
rule-based algorithms (e.g., flank detection, peak detection, boolean timers), as well as the possibility to integrate
more sophisticated ML-based algorithms. Finally, the pipeline editor allows to integrate with third-party systems by
using a variety of data sinks (e.g., to forward data to messaging brokers such as Apache Kafka, MQTT or RocketMQ, to
store data in databases such as PostgreSQL or Redis or to trigger notifications). Besides pipelines, an included data
explorer allows to visually analyze industrial IoT data. For this purpose, a number of visualizations are integrated
that allow non-technical users to quickly get first insights. Examples are correlations between several sensor values,
value heatmaps, distributions or time-series visualizations. Further tools include a dashboard used for real-time
monitoring, e.g., for visualizing live KPIs at shopfloor level.

But StreamPipes is much more than just the user interface and an orchestration system for pipelines: It can be used as a
whole developer platform for Industrial IoT application. Apache StreamPipes is made for extensibility - it provides
several extension points, which allow the definition of custom algorithms, additional interfaces to third-party tools
and proprietary data sources.

StreamPipes includes developer support for Java and Python, making it easy to integrate custom-trained machine learning
models into the data processing environment. With the built-in Python support, it is also possible to run online machine
learning methods directly on data streams gathered by StreamPipes.

## Where does StreamPipes help?

Being positioned in the industrial IoT domain, the overall goal of StreamPipes is to help manufacturing companies to
quickly build up an industrial IoT infrastructure and to analyse IIoT data without the need for manual programming.
Oftentimes, StreamPipes is compared to other tools in this area such as Node-RED for visually wiring of pipelines, which
is often used together with Grafana for data visualization and InfluxDB for time-series storage. The disadvantage of
such architectures is the system complexity beyond the first prototype, especially when it comes to production
deployments. Maintaining and securing multiple software instances is often a hard task requiring for substantial
development effort. In addition, implementing single-sign-on and providing a unified user experience is another hurdle.
This is where StreamPipes, as a single integrated tool with production-critical features such as access and role
management, provides many advantages.
StreamPipes has already a wide user range from the manufacturing domain. It helps users to quickly do the first steps
related to industrial analytics but can also be used for monitoring whole production facilities, analysing data streams
from multiple plants and sensors in real time using the integrated algorithm toolbox. Customization to individual use
cases is easy due to several extension points:

* Software development kit for adapters, data processors and sinks: The functionality of StreamPipes can be extending by
  using the integrated SDK. For instance, it is possible to integrate custom-tailored algorithms for proprietary sensors
  or models into the toolbox. Additional algorithms and data sinks can be installed at runtime.
* Additional user interface plugins: StreamPipes allows to extend the default installation with additional UI views,
  making use of a micro frontend approach. For instance, users can extend the system with custom-tailored views for a
  specific machine or plant. Developers can use a platform API to communicate with the core StreamPipes instance.
* UI customization: To ensure a consistent look and feel, StreamPipes can be customized to the company’s corporate
  identity.

## How does StreamPipes technically work in a nutshell?


<img className="docs-image docs-image-no-shadow" src="/img/architecture/streampipes-architecture-components.png" alt="Overview StreamPipes Architecture"/>


To foster extensibility, Apache StreamPipes is based on a microservice architecture as illustrated above. The main
services provided or used by StreamPipes are the a) user interface, b) the core, c) a time-series storage, d) a
publish/subscribe messaging layer and e) extensions services. Adapters are created over the user interface using an
intuitive configuration wizard and connect to the underlying source systems. Raw events coming from adapters can be
pre-processed (e.g., measurement unit conversions or datatype conversions). Afterwards, events are sent to the message
broker, which is the central backbone to provide IIoT data to internal and external applications. 

Besides adapters, extensions microservices can also integrate additional business logic in form of data processors and
data sinks. StreamPipes comes with over 100 built-in processors and sinks, covering basic use cases out-of-the-box. The StreamPipes core cares about orchestration of these pipeline elements and communicates with the user
interface. In addition, a time-series storage ensures persistence and can be used by any extensions service to write
data into the internal storage. The StreamPipes core provides a query interface to access historical data, which is, for
instance, used by the data explorer UI component. The user interface itself provides several built-in modules but can
also be extended with additional micro frontends. 
