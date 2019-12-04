---
title: Moving to the Apache Incubator
author: Dominik Riemer
authorURL: https://twitter.com/dominikjriemer
authorImageURL: /docs/img/riemer.png
---
**<div style="float: left; padding-right: 40px;">8 minutes to read</div>**
<br>
Great news: StreamPipes is moving to the Apache Incubator!
<!--truncate-->

## The StreamPipes journey so far
We started to build the early foundations of StreamPipes back in 2014 as part of the EU research project _ProaSense_. Our goal was to make event processing accessible to end users with a focus on the Industrial IoT, without the technical expertise required by stream processing tooling.
After some very early prototypes (see an early screenshot below :-)) demonstrating the usefulness of the pipeline editor and the underlying semantics-based data model in two manufacturing-related use cases, we open-sourced StreamPipes in 2017 and continued development in various research projects.
Since then, we presented and showcased StreamPipes at various events: fairs, meetups, conference talks and so on. For instance, in 2019 we attended over 20 events where we gave demos or talked about StreamPipes.
It is great to see that the solution is now steadily getting increased traction in the Industrial IoT space.

<img class="blog-image" style="max-width:90%;margin-bottom:20px;" src="/blog/assets/2019-11-25/2019-11_StreamPipes-v0.png" alt="1st prototype of the StreamPipes UI">
<img class="blog-image" style="max-width:90%;" src="/blog/assets/2019-11-25/2019-11_StreamPipes-now.png" alt="1st prototype of the StreamPipes UI">

## Moving to the Apache Incubator
Earlier this year, we discussed how to continue the development of StreamPipes. For the core team at FZI, our main goal was to widen the developer base, attract external developers and to make StreamPipes a real community-driven open source project.
We had a look at various open source foundations (namely Apache, CNCF and Eclipse), but from the beginning, there was no doubt that we wanted to see StreamPipes in the Apache Software Foundation. Using a lot of Apache Big Data projects under the hood ([Apache Kafka](https://kafka.apache.org), [Apache Flink](https://flink.apache.org) and others), an emerging Apache IoT ecosystem, and the community-driven, open development process of ASF projects, this was an easy decision.
Finally, a few weeks before we went to ApacheCon North America in Las Vegas in September this year to talk about StreamPipes, we discovered the awesome [Apache PLC4X](https://plc4x.apache.org) project, which perfectly aligns with StreamPipes tackling the hard task to connect proprietary industrial protocols with modern software tooling.
We met Chris Dutz together with other people from PLC4X and other Apache projects in Las Vegas and were overwhelmed by the _Apache Way_ and the great collaboration between the various projects within the ASF.

So after coming back home, we immediately started to write the proposal to enter the Apache Incubator, which got accepted on 2019-11-11.

## New project setup
With the great help from our mentors, we already performed some initial steps required to move our infrastructure over to the ASF, which will continue during the next week:

* The new website will be soon available under [https://streampipes.apache.org](https://streampipes.apache.org)
* We will move our code repositories over to the ASF on Github. Before that, we'll merge some repos to make future releases easier: The **backend and user interface** will be merged to the repository [https://www.github.com/apache/incubator-streampipes]([https://www.github.com/apache/incubator-streampipes). Pipeline elements and StreamPipes Connect adapters will also be merged to a new repo called **streampipes-extensions**, soon available at [https://www.github.com/apache/incubator-streampipes-extensions](https://www.github.com/apache/incubator-streampipes-extensions). Both **website and documentation** will be available at [https://www.github.com/apache/incubator-streampipes-website](https://www.github.com/apache/incubator-streampipes-website). Finally, the project **streampipes-installer** at [https://www.github.com/apache/incubator-streampipes-installer](https://www.github.com/apache/incubator-streampipes-installer) will contain the installer for Windows and OSX/Linux, the developer-oriented CLI tool and helm charts to install StreamPipes in Kubernetes.
* Apache project communication mainly relies on mailing lists. Subscribe to the [user list](mailto:users-subscribe@streampipes.apache.org) and [dev list](mailto:dev-subscribe@streampipes.apache.org) and help us to improve StreamPipes!
* Issues can be created in the new [Jira](https://issues.apache.org/jira/projects/STREAMPIPES).
* All previous releases will be marked as non-ASF-releases to clearly indicate that previous releases do not follow the Apache release policy. Yesterday, we released the final pre-Apache version [0.65.0](/blog/2019/11/23/release-0650), the next release will be our first Apache release.  

## Thanks
We would like to thank Chris Dutz for his great support in doing the first steps in the Apache Incubator.

We would also like to thank our employee, [FZI Research Center for Information Technology](https://www.fzi.de/en), for the continued great support - starting from giving us the opportunity to present StreamPipes at large fairs such as Hannover Messe, over media support such as creating the great StreamPipes logo, up to the fast legal support we received when we got accepted by the Apache Incubator.
If you want to build cool stuff in a great applied research institute while pursuing a PhD at KIT, FZI is surely the best place to be ;-)

Let's continue development and transform Apache StreamPipes (incubating) into the next Apache community!










