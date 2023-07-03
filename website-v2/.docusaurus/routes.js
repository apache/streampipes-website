import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '836'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '115'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '37e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c32'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b10'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '510'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3b1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '516'),
    exact: true
  },
  {
    path: '/blog/2018/06/14/welcome',
    component: ComponentCreator('/blog/2018/06/14/welcome', '295'),
    exact: true
  },
  {
    path: '/blog/2018/06/18/how-to-understand-your-machine-data',
    component: ComponentCreator('/blog/2018/06/18/how-to-understand-your-machine-data', '300'),
    exact: true
  },
  {
    path: '/blog/2018/09/17/preview-060',
    component: ComponentCreator('/blog/2018/09/17/preview-060', '567'),
    exact: true
  },
  {
    path: '/blog/2018/11/24/container-cli',
    component: ComponentCreator('/blog/2018/11/24/container-cli', '7aa'),
    exact: true
  },
  {
    path: '/blog/2019/04/04/release-0610',
    component: ComponentCreator('/blog/2019/04/04/release-0610', '557'),
    exact: true
  },
  {
    path: '/blog/2019/05/23/release-0620',
    component: ComponentCreator('/blog/2019/05/23/release-0620', '750'),
    exact: true
  },
  {
    path: '/blog/2019/09/05/release-0630',
    component: ComponentCreator('/blog/2019/09/05/release-0630', 'ac0'),
    exact: true
  },
  {
    path: '/blog/2019/09/19/release-0640',
    component: ComponentCreator('/blog/2019/09/19/release-0640', '737'),
    exact: true
  },
  {
    path: '/blog/2019/11/23/release-0650',
    component: ComponentCreator('/blog/2019/11/23/release-0650', '62e'),
    exact: true
  },
  {
    path: '/blog/2019/11/25/moving-to-the-apache-incubator',
    component: ComponentCreator('/blog/2019/11/25/moving-to-the-apache-incubator', '961'),
    exact: true
  },
  {
    path: '/blog/2020/01/23/streampipes_on_rpi',
    component: ComponentCreator('/blog/2020/01/23/streampipes_on_rpi', '627'),
    exact: true
  },
  {
    path: '/blog/2020/05/19/release-0660',
    component: ComponentCreator('/blog/2020/05/19/release-0660', '938'),
    exact: true
  },
  {
    path: '/blog/2020/05/27/streampipes_on_k3s',
    component: ComponentCreator('/blog/2020/05/27/streampipes_on_k3s', 'bf6'),
    exact: true
  },
  {
    path: '/blog/2021/07/22/_release-0680',
    component: ComponentCreator('/blog/2021/07/22/_release-0680', '5a7'),
    exact: true
  },
  {
    path: '/blog/2022/03/21/_release-0690',
    component: ComponentCreator('/blog/2022/03/21/_release-0690', '471'),
    exact: true
  },
  {
    path: '/blog/2022/09/05/using-factory.io-with-streampipes',
    component: ComponentCreator('/blog/2022/09/05/using-factory.io-with-streampipes', 'bfe'),
    exact: true
  },
  {
    path: '/blog/2022/10/13/release-070',
    component: ComponentCreator('/blog/2022/10/13/release-070', '6ce'),
    exact: true
  },
  {
    path: '/blog/2023/01/17/release-090',
    component: ComponentCreator('/blog/2023/01/17/release-090', 'f12'),
    exact: true
  },
  {
    path: '/blog/2023/04/12/release-091',
    component: ComponentCreator('/blog/2023/04/12/release-091', '999'),
    exact: true
  },
  {
    path: '/blog/2023/06/16/release-092',
    component: ComponentCreator('/blog/2023/06/16/release-092', '801'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'fba'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2', '275'),
    exact: true
  },
  {
    path: '/versions',
    component: ComponentCreator('/versions', 'b56'),
    exact: true
  },
  {
    path: '/docs/0.70.0',
    component: ComponentCreator('/docs/0.70.0', '37e'),
    routes: [
      {
        path: '/docs/0.70.0/community-contribute',
        component: ComponentCreator('/docs/0.70.0/community-contribute', '77c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/community-get-help',
        component: ComponentCreator('/docs/0.70.0/community-get-help', 'e08'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/concepts-adapter',
        component: ComponentCreator('/docs/0.70.0/concepts-adapter', '37d'),
        exact: true
      },
      {
        path: '/docs/0.70.0/concepts-data-streams',
        component: ComponentCreator('/docs/0.70.0/concepts-data-streams', 'adf'),
        exact: true
      },
      {
        path: '/docs/0.70.0/concepts-glossary',
        component: ComponentCreator('/docs/0.70.0/concepts-glossary', '17c'),
        exact: true
      },
      {
        path: '/docs/0.70.0/concepts-overview',
        component: ComponentCreator('/docs/0.70.0/concepts-overview', '16d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/concepts-pipelines',
        component: ComponentCreator('/docs/0.70.0/concepts-pipelines', 'f9d'),
        exact: true
      },
      {
        path: '/docs/0.70.0/debugging-debugging',
        component: ComponentCreator('/docs/0.70.0/debugging-debugging', '07b'),
        exact: true
      },
      {
        path: '/docs/0.70.0/debugging-monitoring',
        component: ComponentCreator('/docs/0.70.0/debugging-monitoring', '9da'),
        exact: true
      },
      {
        path: '/docs/0.70.0/deploy-docker',
        component: ComponentCreator('/docs/0.70.0/deploy-docker', '83c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/deploy-kubernetes',
        component: ComponentCreator('/docs/0.70.0/deploy-kubernetes', '799'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/deploy-security',
        component: ComponentCreator('/docs/0.70.0/deploy-security', '5eb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/deploy-use-ssl',
        component: ComponentCreator('/docs/0.70.0/deploy-use-ssl', '909'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/dev-guide-archetype',
        component: ComponentCreator('/docs/0.70.0/dev-guide-archetype', '1ee'),
        exact: true
      },
      {
        path: '/docs/0.70.0/dev-guide-sdk-guide-processors',
        component: ComponentCreator('/docs/0.70.0/dev-guide-sdk-guide-processors', 'c21'),
        exact: true
      },
      {
        path: '/docs/0.70.0/dev-guide-sdk-guide-sinks',
        component: ComponentCreator('/docs/0.70.0/dev-guide-sdk-guide-sinks', 'bea'),
        exact: true
      },
      {
        path: '/docs/0.70.0/extend-archetypes',
        component: ComponentCreator('/docs/0.70.0/extend-archetypes', 'e4c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-cli',
        component: ComponentCreator('/docs/0.70.0/extend-cli', 'cc3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-first-processor',
        component: ComponentCreator('/docs/0.70.0/extend-first-processor', '5ca'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-sdk-event-model',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-event-model', 'd29'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-sdk-functions',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-functions', 'cee'),
        exact: true
      },
      {
        path: '/docs/0.70.0/extend-sdk-migration-service-discovery',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-migration-service-discovery', '873'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-sdk-output-strategies',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-output-strategies', '5fe'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-sdk-static-properties',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-static-properties', 'b78'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-sdk-stream-requirements',
        component: ComponentCreator('/docs/0.70.0/extend-sdk-stream-requirements', 'f1b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-setup',
        component: ComponentCreator('/docs/0.70.0/extend-setup', 'cbe'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-tutorial-data-processors',
        component: ComponentCreator('/docs/0.70.0/extend-tutorial-data-processors', '896'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-tutorial-data-sinks',
        component: ComponentCreator('/docs/0.70.0/extend-tutorial-data-sinks', '54b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/extend-tutorial-data-sources',
        component: ComponentCreator('/docs/0.70.0/extend-tutorial-data-sources', '18d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/faq-common-problems',
        component: ComponentCreator('/docs/0.70.0/faq-common-problems', '412'),
        exact: true,
        sidebar: "faq"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.coindesk',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.coindesk', '70b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt', '56e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.gdelt',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.gdelt', '289'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iex.news',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iex.news', 'ae3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iex.stocks',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iex.stocks', '5d4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.image.set',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.image.set', 'ce1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.image.stream',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.image.stream', '307'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.influxdb.set',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.influxdb.set', '2e0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream', '452'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iss',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.iss', '801'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.mysql.set',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.mysql.set', '6f0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.mysql.stream',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.mysql.stream', '1c9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt', '7d8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.netio.rest',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.netio.rest', '02a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera', '481'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.opcua',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.opcua', '633'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus', '08a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7', 'cde'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.ros',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.ros', 'c09'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.machine',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.machine', '400'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset', 'dd4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream', '8da'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.slack',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.slack', 'def'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.ti',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.ti', '4b7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit', 'daa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new', '26f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.file',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.file', '9fc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.http',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.http', '4eb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver', '5f4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.kafka',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.kafka', '188'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt', '844'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar', 'ad2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.geo.flink',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.geo.flink', '5eb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding', '91b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding', 'dac'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding', '833'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification', 'd18'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper', '2ff'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher', '586'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.qrcode',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.qrcode', 'eeb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation', 'cba'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.count',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.count', '50c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount', 'ded'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.rate',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.rate', 'a5b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum', 'c90'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop', '4e5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop', '06b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry', 'fa0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing', '849'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp', '525'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure', '715'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.compose',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.compose', 'c78'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.enrich',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.enrich', '5a0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.limit',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.limit', '260'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.merge',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.merge', 'a45'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter', '84d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter', 'a65'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.project',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.project', '656'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter', '215'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.threshold',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.threshold', '6e0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo', '2c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG', '73f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory', '1a6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator', '2c4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed', '030'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator', '94a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence', '6ec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and', '017'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection', '457'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence', '4b6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.frequency',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.frequency', '27c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.frequencychange',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.frequencychange', '7ed'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.increase',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.increase', '4f3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter', '997'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.sequence',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.sequence', '8d7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.stop',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.siddhi.stop', 'bd1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary', '587'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection', '397'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount', '2f2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker', '5aa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection', '156'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder', '00e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech', '946'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection', 'f89'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer', '377'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter', 'ac3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper', 'b87'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer', '4b3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher', 'ab6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter', '742'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate', '596'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter', '01c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter', '7c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping', '672'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer', '847'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value', 'ce3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array', 'c2a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata', 'ddb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value', 'e11'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge', 'f11'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state', '3df'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer', '100'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer', 'c88'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number', '230'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state', '56b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor', '505'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array', '0c9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter', 'e9c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer', 'c6a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration', 'd29'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean', '1b2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.protocol.set.file',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.protocol.set.file', '82f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.protocol.set.http',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.protocol.set.http', 'c78'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest', '316'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms', '9ae'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka', '021'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt', '381'),
        exact: true
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats', '0ec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar', 'e74'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq', '81f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest', '97c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.ditto',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.ditto', 'c88'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch', '68a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb', 'f8e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb', 'd85'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb', 'ca0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql', '460'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua', 'c7e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql', '927'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard', '957'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake', '0fa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.notification',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.internal.jvm.notification', 'e10'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.email',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.email', '18f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal', 'e84'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack', 'f68'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram',
        component: ComponentCreator('/docs/0.70.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram', '954'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/technicals-architecture',
        component: ComponentCreator('/docs/0.70.0/technicals-architecture', '115'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/technicals-configuration',
        component: ComponentCreator('/docs/0.70.0/technicals-configuration', '5ee'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/technicals-messaging',
        component: ComponentCreator('/docs/0.70.0/technicals-messaging', '8d5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/technicals-runtime-wrappers',
        component: ComponentCreator('/docs/0.70.0/technicals-runtime-wrappers', '87f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/technicals-user-guidance',
        component: ComponentCreator('/docs/0.70.0/technicals-user-guidance', 'c23'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/try-installation',
        component: ComponentCreator('/docs/0.70.0/try-installation', '405'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/try-tutorial',
        component: ComponentCreator('/docs/0.70.0/try-tutorial', '00c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-configurations',
        component: ComponentCreator('/docs/0.70.0/use-configurations', '339'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-connect',
        component: ComponentCreator('/docs/0.70.0/use-connect', 'bc3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-dashboard',
        component: ComponentCreator('/docs/0.70.0/use-dashboard', '502'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-data-explorer',
        component: ComponentCreator('/docs/0.70.0/use-data-explorer', '63d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-install-pipeline-elements',
        component: ComponentCreator('/docs/0.70.0/use-install-pipeline-elements', '224'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-managing-pipelines',
        component: ComponentCreator('/docs/0.70.0/use-managing-pipelines', '766'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-notifications',
        component: ComponentCreator('/docs/0.70.0/use-notifications', 'dea'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/use-pipeline-editor',
        component: ComponentCreator('/docs/0.70.0/use-pipeline-editor', 'e6b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/user-guide-installation',
        component: ComponentCreator('/docs/0.70.0/user-guide-installation', 'adb'),
        exact: true
      },
      {
        path: '/docs/0.70.0/user-guide-introduction',
        component: ComponentCreator('/docs/0.70.0/user-guide-introduction', '569'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.70.0/user-guide-introduction-old',
        component: ComponentCreator('/docs/0.70.0/user-guide-introduction-old', '8dc'),
        exact: true
      }
    ]
  },
  {
    path: '/docs/0.90.0',
    component: ComponentCreator('/docs/0.90.0', '545'),
    routes: [
      {
        path: '/docs/0.90.0/community-contribute',
        component: ComponentCreator('/docs/0.90.0/community-contribute', 'c7b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/community-get-help',
        component: ComponentCreator('/docs/0.90.0/community-get-help', 'cff'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/concepts-adapter',
        component: ComponentCreator('/docs/0.90.0/concepts-adapter', '1d0'),
        exact: true
      },
      {
        path: '/docs/0.90.0/concepts-data-streams',
        component: ComponentCreator('/docs/0.90.0/concepts-data-streams', '994'),
        exact: true
      },
      {
        path: '/docs/0.90.0/concepts-glossary',
        component: ComponentCreator('/docs/0.90.0/concepts-glossary', '603'),
        exact: true
      },
      {
        path: '/docs/0.90.0/concepts-overview',
        component: ComponentCreator('/docs/0.90.0/concepts-overview', 'd34'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/concepts-pipelines',
        component: ComponentCreator('/docs/0.90.0/concepts-pipelines', '5f5'),
        exact: true
      },
      {
        path: '/docs/0.90.0/debugging-debugging',
        component: ComponentCreator('/docs/0.90.0/debugging-debugging', '421'),
        exact: true
      },
      {
        path: '/docs/0.90.0/debugging-monitoring',
        component: ComponentCreator('/docs/0.90.0/debugging-monitoring', '89a'),
        exact: true
      },
      {
        path: '/docs/0.90.0/deploy-docker',
        component: ComponentCreator('/docs/0.90.0/deploy-docker', 'cda'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/deploy-kubernetes',
        component: ComponentCreator('/docs/0.90.0/deploy-kubernetes', 'fe4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/deploy-security',
        component: ComponentCreator('/docs/0.90.0/deploy-security', 'a20'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/deploy-use-ssl',
        component: ComponentCreator('/docs/0.90.0/deploy-use-ssl', '2e4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/dev-guide-archetype',
        component: ComponentCreator('/docs/0.90.0/dev-guide-archetype', '740'),
        exact: true
      },
      {
        path: '/docs/0.90.0/dev-guide-sdk-guide-processors',
        component: ComponentCreator('/docs/0.90.0/dev-guide-sdk-guide-processors', 'a3b'),
        exact: true
      },
      {
        path: '/docs/0.90.0/dev-guide-sdk-guide-sinks',
        component: ComponentCreator('/docs/0.90.0/dev-guide-sdk-guide-sinks', '1d4'),
        exact: true
      },
      {
        path: '/docs/0.90.0/extend-archetypes',
        component: ComponentCreator('/docs/0.90.0/extend-archetypes', '1b2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-cli',
        component: ComponentCreator('/docs/0.90.0/extend-cli', '604'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-first-processor',
        component: ComponentCreator('/docs/0.90.0/extend-first-processor', '1ef'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-event-model',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-event-model', 'cae'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-functions',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-functions', 'ba3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-migration-service-discovery',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-migration-service-discovery', '8e1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-output-strategies',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-output-strategies', '19a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-static-properties',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-static-properties', '984'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-sdk-stream-requirements',
        component: ComponentCreator('/docs/0.90.0/extend-sdk-stream-requirements', '048'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-setup',
        component: ComponentCreator('/docs/0.90.0/extend-setup', '50f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-tutorial-data-processors',
        component: ComponentCreator('/docs/0.90.0/extend-tutorial-data-processors', 'edb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-tutorial-data-sinks',
        component: ComponentCreator('/docs/0.90.0/extend-tutorial-data-sinks', '0bd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/extend-tutorial-data-sources',
        component: ComponentCreator('/docs/0.90.0/extend-tutorial-data-sources', '758'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/faq-common-problems',
        component: ComponentCreator('/docs/0.90.0/faq-common-problems', '620'),
        exact: true,
        sidebar: "faq"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.coindesk',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.coindesk', '2b8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt', '8e1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.gdelt',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.gdelt', '493'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iex.news',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iex.news', '42d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iex.stocks',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iex.stocks', '3e2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.image.set',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.image.set', 'df3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.image.stream',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.image.stream', 'db2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.influxdb.set',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.influxdb.set', '7cb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream', '23a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iss',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.iss', '9f2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.mysql.set',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.mysql.set', '7a4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.mysql.stream',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.mysql.stream', '63c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt', '6df'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.netio.rest',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.netio.rest', '3a1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera', '6dd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.opcua',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.opcua', '669'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus', 'e7c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7', 'd2b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.ros',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.ros', '84a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.machine',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.machine', '408'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset', '226'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream', '378'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.slack',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.slack', '652'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.ti',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.ti', '3bf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit', 'ccd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new', '042'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.file',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.file', '26b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.http',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.http', 'dde'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver', '010'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.kafka',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.kafka', '52f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt', '5da'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar', 'c3a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.geo.flink',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.geo.flink', '2f9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding', '162'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding', '635'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding', '31b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification', 'e83'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper', '7e0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher', '2b4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.qrcode',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processor.imageclassification.qrcode', '60b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation', '9e4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.count',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.count', '185'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount', '208'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.rate',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.rate', '7a1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum', 'ae3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop', 'bbf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop', 'bd4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry', 'd8a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing', '304'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp', '7d9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure', 'c5d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose', '0c7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.enrich',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.enrich', 'd34'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.limit',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.limit', 'a4c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.merge',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.merge', 'e1c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter', '582'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter', '191'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.project',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.project', '6fd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter', 'c5c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.threshold',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.threshold', '844'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo', '233'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG', '69e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory', '378'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator', '040'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed', '29e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator', '8e8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence', 'e68'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and', '099'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection', '4f7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence', 'c87'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.frequency',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.frequency', 'f49'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.frequencychange',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.frequencychange', '7d4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.increase',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.increase', '00f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter', 'ebd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.sequence',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.sequence', '237'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.stop',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.siddhi.stop', '2df'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary', 'e0d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection', 'da2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount', '571'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker', 'a97'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection', 'e3f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder', 'ca9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech', 'a97'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection', '7fb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer', '94a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter', '162'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper', '547'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer', '84e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher', 'a50'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter', '162'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate', 'ba1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter', '208'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter', '8ea'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping', '0f4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer', '814'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value', '8b7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array', '0dc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata', 'f97'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value', 'fca'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge', 'e9f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state', '790'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer', 'ecb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer', '3f7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number', '036'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state', '791'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor', '99a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array', '4ab'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter', 'a7e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer', '10c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration', '15d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean', '44a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.protocol.set.file',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.protocol.set.file', 'aa1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.protocol.set.http',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.protocol.set.http', '854'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest', 'df2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms', '589'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka', 'da8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt', '4ad'),
        exact: true
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats', 'f75'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar', '19e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq', 'e36'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest', '8ea'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.ditto',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.ditto', 'bfb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch', 'c3f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb', '7b6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb', '85c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb', 'a13'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql', '21c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua', '8bb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql', '5c7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard', 'd91'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake', '5de'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.notification',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.internal.jvm.notification', 'f0f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.email',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.email', 'c51'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal', '889'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack', 'ee8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram',
        component: ComponentCreator('/docs/0.90.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram', '188'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/technicals-architecture',
        component: ComponentCreator('/docs/0.90.0/technicals-architecture', '39b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/technicals-configuration',
        component: ComponentCreator('/docs/0.90.0/technicals-configuration', '7bb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/technicals-messaging',
        component: ComponentCreator('/docs/0.90.0/technicals-messaging', 'a06'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/technicals-runtime-wrappers',
        component: ComponentCreator('/docs/0.90.0/technicals-runtime-wrappers', 'eab'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/technicals-user-guidance',
        component: ComponentCreator('/docs/0.90.0/technicals-user-guidance', 'd7b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/try-installation',
        component: ComponentCreator('/docs/0.90.0/try-installation', '6a2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/try-tutorial',
        component: ComponentCreator('/docs/0.90.0/try-tutorial', '6f1'),
        exact: true
      },
      {
        path: '/docs/0.90.0/use-configurations',
        component: ComponentCreator('/docs/0.90.0/use-configurations', 'a6e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-connect',
        component: ComponentCreator('/docs/0.90.0/use-connect', 'a43'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-dashboard',
        component: ComponentCreator('/docs/0.90.0/use-dashboard', '7d9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-data-explorer',
        component: ComponentCreator('/docs/0.90.0/use-data-explorer', 'a4b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-install-pipeline-elements',
        component: ComponentCreator('/docs/0.90.0/use-install-pipeline-elements', 'ed1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-managing-pipelines',
        component: ComponentCreator('/docs/0.90.0/use-managing-pipelines', 'be0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-notifications',
        component: ComponentCreator('/docs/0.90.0/use-notifications', 'cd9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/use-pipeline-editor',
        component: ComponentCreator('/docs/0.90.0/use-pipeline-editor', '6b0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/user-guide-first-steps',
        component: ComponentCreator('/docs/0.90.0/user-guide-first-steps', 'c23'),
        exact: true
      },
      {
        path: '/docs/0.90.0/user-guide-installation',
        component: ComponentCreator('/docs/0.90.0/user-guide-installation', '97a'),
        exact: true
      },
      {
        path: '/docs/0.90.0/user-guide-introduction',
        component: ComponentCreator('/docs/0.90.0/user-guide-introduction', '4e8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.90.0/user-guide-introduction-old',
        component: ComponentCreator('/docs/0.90.0/user-guide-introduction-old', 'a00'),
        exact: true
      },
      {
        path: '/docs/0.90.0/user-guide-software-components',
        component: ComponentCreator('/docs/0.90.0/user-guide-software-components', '003'),
        exact: true
      }
    ]
  },
  {
    path: '/docs/0.91.0',
    component: ComponentCreator('/docs/0.91.0', '62f'),
    routes: [
      {
        path: '/docs/0.91.0/community-contribute',
        component: ComponentCreator('/docs/0.91.0/community-contribute', '57e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/community-get-help',
        component: ComponentCreator('/docs/0.91.0/community-get-help', '884'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/concepts-adapter',
        component: ComponentCreator('/docs/0.91.0/concepts-adapter', 'd3c'),
        exact: true
      },
      {
        path: '/docs/0.91.0/concepts-data-streams',
        component: ComponentCreator('/docs/0.91.0/concepts-data-streams', '5f3'),
        exact: true
      },
      {
        path: '/docs/0.91.0/concepts-glossary',
        component: ComponentCreator('/docs/0.91.0/concepts-glossary', 'da9'),
        exact: true
      },
      {
        path: '/docs/0.91.0/concepts-overview',
        component: ComponentCreator('/docs/0.91.0/concepts-overview', 'a10'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/concepts-pipelines',
        component: ComponentCreator('/docs/0.91.0/concepts-pipelines', '6bf'),
        exact: true
      },
      {
        path: '/docs/0.91.0/debugging-debugging',
        component: ComponentCreator('/docs/0.91.0/debugging-debugging', 'a08'),
        exact: true
      },
      {
        path: '/docs/0.91.0/debugging-monitoring',
        component: ComponentCreator('/docs/0.91.0/debugging-monitoring', 'd2c'),
        exact: true
      },
      {
        path: '/docs/0.91.0/deploy-docker',
        component: ComponentCreator('/docs/0.91.0/deploy-docker', '315'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/deploy-kubernetes',
        component: ComponentCreator('/docs/0.91.0/deploy-kubernetes', 'ec0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/deploy-security',
        component: ComponentCreator('/docs/0.91.0/deploy-security', '72d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/deploy-use-ssl',
        component: ComponentCreator('/docs/0.91.0/deploy-use-ssl', '0c5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/dev-guide-archetype',
        component: ComponentCreator('/docs/0.91.0/dev-guide-archetype', '1e8'),
        exact: true
      },
      {
        path: '/docs/0.91.0/dev-guide-sdk-guide-processors',
        component: ComponentCreator('/docs/0.91.0/dev-guide-sdk-guide-processors', '4f5'),
        exact: true
      },
      {
        path: '/docs/0.91.0/dev-guide-sdk-guide-sinks',
        component: ComponentCreator('/docs/0.91.0/dev-guide-sdk-guide-sinks', '698'),
        exact: true
      },
      {
        path: '/docs/0.91.0/extend-archetypes',
        component: ComponentCreator('/docs/0.91.0/extend-archetypes', 'fe5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-cli',
        component: ComponentCreator('/docs/0.91.0/extend-cli', 'ebe'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-first-processor',
        component: ComponentCreator('/docs/0.91.0/extend-first-processor', '77c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-event-model',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-event-model', '983'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-functions',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-functions', '899'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-migration-service-discovery',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-migration-service-discovery', '6d8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-output-strategies',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-output-strategies', 'a4f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-static-properties',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-static-properties', '157'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-sdk-stream-requirements',
        component: ComponentCreator('/docs/0.91.0/extend-sdk-stream-requirements', '6c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-setup',
        component: ComponentCreator('/docs/0.91.0/extend-setup', '0bf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-tutorial-data-processors',
        component: ComponentCreator('/docs/0.91.0/extend-tutorial-data-processors', '2b8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-tutorial-data-sinks',
        component: ComponentCreator('/docs/0.91.0/extend-tutorial-data-sinks', '927'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/extend-tutorial-data-sources',
        component: ComponentCreator('/docs/0.91.0/extend-tutorial-data-sources', '4cd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/faq-common-problems',
        component: ComponentCreator('/docs/0.91.0/faq-common-problems', 'd4e'),
        exact: true,
        sidebar: "faq"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.coindesk',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.coindesk', 'd7f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.flic.mqtt', 'cb9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.gdelt',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.gdelt', 'fc9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iex.news',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iex.news', '8aa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iex.stocks',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iex.stocks', '0e9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.image.set',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.image.set', 'f67'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.image.stream',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.image.stream', '986'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.influxdb.set',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.influxdb.set', 'fb7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.influxdb.stream', '971'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iss',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.iss', 'b6f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.mysql.set',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.mysql.set', '48b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.mysql.stream',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.mysql.stream', '519'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.netio.mqtt', '4ba'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.netio.rest',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.netio.rest', '2af'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera', '224'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.opcua',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.opcua', '616'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.plc4x.modbus', 'd25'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.plc4x.s7', '830'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.ros',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.ros', '417'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.machine',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.machine', 'a22'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset', '3e3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream', 'a2d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.slack',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.slack', '8b8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.ti',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.ti', 'c11'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.wikipedia.edit', '0b1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new', '852'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.file',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.file', '5d3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.http',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.http', 'a24'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.httpserver', '150'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.kafka',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.kafka', 'e97'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.mqtt', 'd43'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.connect.protocol.stream.pulsar', '396'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.geo.flink',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.geo.flink', '3bf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.geocoding', 'f92'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding', 'cd2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding', 'eb0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification', '544'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper', '8a6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher', 'd43'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.qrcode',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processor.imageclassification.qrcode', 'bb7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation', 'dfa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.count',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.count', 'a88'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.eventcount', '93b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.rate',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.aggregation.flink.rate', '39e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.changedetection.jvm.cusum', '4ed'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop', '2fd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop', '69f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry', '8cd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing', '667'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.flink.timestamp', 'c19'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure', 'bc4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.compose',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.compose', '243'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.enrich',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.enrich', 'b89'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.limit',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.limit', '6b6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.merge',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.merge', '534'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter', 'c7d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter', 'cd7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.project',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.project', 'aac'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.textfilter', '57b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.threshold',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.filters.jvm.threshold', '340'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo', '8d7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG', '420'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory', '7bd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator', '70c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.speed', '2f7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator', '424'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence', '502'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.and', '9b9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection', '32d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence', 'a0a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.frequency',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.frequency', '9dd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.frequencychange',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.frequencychange', '9d7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.increase',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.increase', 'b19'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.numericalfilter', '537'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.sequence',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.sequence', '80d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.stop',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.siddhi.stop', 'c53'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary', '3dd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection', '226'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.flink.wordcount', '956'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker', '0fe'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection', '9c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.namefinder', '8ae'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech', 'daa'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection', '41b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer', 'c34'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter', '62b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-mapper', '061'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.field-renamer', 'cc3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher', 'ccd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter', '02b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate', '55b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter', '67d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter', 'a64'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping', '558'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer', '9a2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.changed-value', '969'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.count-array', 'e9e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata', '083'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value', 'e6c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge', '45f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state', 'b12'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer', '70c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer', 'd2c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number', '0f7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state', '7d6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor', 'ecd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.split-array', 'cce'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter', '148'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer', '2a7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.taskduration', '591'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean', '36b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.protocol.set.file',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.protocol.set.file', '635'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.protocol.set.http',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.protocol.set.http', '91c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest', 'b83'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.jms', '5ec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.kafka', '257'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt', '050'),
        exact: true
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats', '59a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar', '6c2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq', '807'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.rest', 'f72'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.ditto',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.ditto', 'e1e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch', '007'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb', '80e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.influxdb', '15c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb', '6ad'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql', '585'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.opcua', '6ea'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.postgresql', '7ba'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.dashboard', 'be4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.datalake', '5de'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.notification',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.notification', 'eb7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.email',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.email', '126'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal', '458'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.slack', '544'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram',
        component: ComponentCreator('/docs/0.91.0/pe/org.apache.streampipes.sinks.notifications.jvm.telegram', '516'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/privacy',
        component: ComponentCreator('/docs/0.91.0/privacy', '7eb'),
        exact: true
      },
      {
        path: '/docs/0.91.0/technicals-architecture',
        component: ComponentCreator('/docs/0.91.0/technicals-architecture', '38d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/technicals-configuration',
        component: ComponentCreator('/docs/0.91.0/technicals-configuration', 'edf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/technicals-messaging',
        component: ComponentCreator('/docs/0.91.0/technicals-messaging', '17c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/technicals-runtime-wrappers',
        component: ComponentCreator('/docs/0.91.0/technicals-runtime-wrappers', '7eb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/technicals-user-guidance',
        component: ComponentCreator('/docs/0.91.0/technicals-user-guidance', '9f1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/try-installation',
        component: ComponentCreator('/docs/0.91.0/try-installation', '02e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/try-tutorial',
        component: ComponentCreator('/docs/0.91.0/try-tutorial', '096'),
        exact: true
      },
      {
        path: '/docs/0.91.0/use-configurations',
        component: ComponentCreator('/docs/0.91.0/use-configurations', '135'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-connect',
        component: ComponentCreator('/docs/0.91.0/use-connect', '3f9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-dashboard',
        component: ComponentCreator('/docs/0.91.0/use-dashboard', '3c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-data-explorer',
        component: ComponentCreator('/docs/0.91.0/use-data-explorer', 'd5d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-install-pipeline-elements',
        component: ComponentCreator('/docs/0.91.0/use-install-pipeline-elements', '16f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-managing-pipelines',
        component: ComponentCreator('/docs/0.91.0/use-managing-pipelines', '6fd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-notifications',
        component: ComponentCreator('/docs/0.91.0/use-notifications', 'b9a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/use-pipeline-editor',
        component: ComponentCreator('/docs/0.91.0/use-pipeline-editor', 'c77'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/user-guide-first-steps',
        component: ComponentCreator('/docs/0.91.0/user-guide-first-steps', '054'),
        exact: true
      },
      {
        path: '/docs/0.91.0/user-guide-installation',
        component: ComponentCreator('/docs/0.91.0/user-guide-installation', '1ad'),
        exact: true
      },
      {
        path: '/docs/0.91.0/user-guide-introduction',
        component: ComponentCreator('/docs/0.91.0/user-guide-introduction', 'fbc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/0.91.0/user-guide-introduction-old',
        component: ComponentCreator('/docs/0.91.0/user-guide-introduction-old', '904'),
        exact: true
      },
      {
        path: '/docs/0.91.0/user-guide-software-components',
        component: ComponentCreator('/docs/0.91.0/user-guide-software-components', 'e1e'),
        exact: true
      },
      {
        path: '/docs/0.91.0/user-guide-tour',
        component: ComponentCreator('/docs/0.91.0/user-guide-tour', '489'),
        exact: true
      }
    ]
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '738'),
    routes: [
      {
        path: '/docs/next/community-contribute',
        component: ComponentCreator('/docs/next/community-contribute', '686'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/community-get-help',
        component: ComponentCreator('/docs/next/community-get-help', '1d3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/concepts-adapter',
        component: ComponentCreator('/docs/next/concepts-adapter', 'ffd'),
        exact: true
      },
      {
        path: '/docs/next/concepts-data-streams',
        component: ComponentCreator('/docs/next/concepts-data-streams', '505'),
        exact: true
      },
      {
        path: '/docs/next/concepts-glossary',
        component: ComponentCreator('/docs/next/concepts-glossary', '78e'),
        exact: true
      },
      {
        path: '/docs/next/concepts-overview',
        component: ComponentCreator('/docs/next/concepts-overview', '11d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/concepts-pipelines',
        component: ComponentCreator('/docs/next/concepts-pipelines', 'd53'),
        exact: true
      },
      {
        path: '/docs/next/debugging-debugging',
        component: ComponentCreator('/docs/next/debugging-debugging', '880'),
        exact: true
      },
      {
        path: '/docs/next/debugging-monitoring',
        component: ComponentCreator('/docs/next/debugging-monitoring', 'e44'),
        exact: true
      },
      {
        path: '/docs/next/deploy-docker',
        component: ComponentCreator('/docs/next/deploy-docker', 'e12'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/deploy-environment-variables',
        component: ComponentCreator('/docs/next/deploy-environment-variables', '715'),
        exact: true
      },
      {
        path: '/docs/next/deploy-kubernetes',
        component: ComponentCreator('/docs/next/deploy-kubernetes', 'fee'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/deploy-security',
        component: ComponentCreator('/docs/next/deploy-security', 'dd4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/deploy-use-ssl',
        component: ComponentCreator('/docs/next/deploy-use-ssl', '3b3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-archetypes',
        component: ComponentCreator('/docs/next/extend-archetypes', '067'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-cli',
        component: ComponentCreator('/docs/next/extend-cli', 'd6d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-first-processor',
        component: ComponentCreator('/docs/next/extend-first-processor', '76b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-event-model',
        component: ComponentCreator('/docs/next/extend-sdk-event-model', 'cf6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-functions',
        component: ComponentCreator('/docs/next/extend-sdk-functions', '39a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-migration-service-discovery',
        component: ComponentCreator('/docs/next/extend-sdk-migration-service-discovery', 'df3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-output-strategies',
        component: ComponentCreator('/docs/next/extend-sdk-output-strategies', '867'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-static-properties',
        component: ComponentCreator('/docs/next/extend-sdk-static-properties', '429'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-sdk-stream-requirements',
        component: ComponentCreator('/docs/next/extend-sdk-stream-requirements', '7f4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-setup',
        component: ComponentCreator('/docs/next/extend-setup', '3b3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-tutorial-data-processors',
        component: ComponentCreator('/docs/next/extend-tutorial-data-processors', '967'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-tutorial-data-sinks',
        component: ComponentCreator('/docs/next/extend-tutorial-data-sinks', '701'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/extend-tutorial-data-sources',
        component: ComponentCreator('/docs/next/extend-tutorial-data-sources', 'ef4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/faq-common-problems',
        component: ComponentCreator('/docs/next/faq-common-problems', '01d'),
        exact: true,
        sidebar: "faq"
      },
      {
        path: '/docs/next/introduction',
        component: ComponentCreator('/docs/next/introduction', 'eac'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/license',
        component: ComponentCreator('/docs/next/license', '02a'),
        exact: true
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.coindesk',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.coindesk', '65d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.flic.mqtt',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.flic.mqtt', '92f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.gdelt',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.gdelt', '8a1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.iex.news',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.iex.news', '58a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.iex.stocks',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.iex.stocks', 'fdf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.image.set',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.image.set', '20e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.image.stream',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.image.stream', 'c02'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.set',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.set', '907'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.stream',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.influxdb.stream', '76f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.iss',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.iss', '366'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.mysql.set',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.mysql.set', '8c5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.mysql.stream',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.mysql.stream', 'cac'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.netio.mqtt',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.netio.mqtt', '234'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.netio.rest',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.netio.rest', '18e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera', '090'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.opcua',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.opcua', '726'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.plc4x.modbus',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.plc4x.modbus', 'a48'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.plc4x.s7',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.plc4x.s7', '1ca'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.ros',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.ros', '4ec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.machine',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.machine', '5b3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset', '5a5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream', 'f27'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.slack',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.slack', 'fec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.ti',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.ti', '41f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.wikipedia.edit',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.wikipedia.edit', '079'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.adapters.wikipedia.new',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.adapters.wikipedia.new', '9e2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.file',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.file', 'b55'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.http',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.http', '822'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.httpserver',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.httpserver', 'b9f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.kafka',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.kafka', '2cb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.mqtt',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.mqtt', '4d2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.connect.protocol.stream.pulsar',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.connect.protocol.stream.pulsar', '8f0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.geo.flink',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.geo.flink', '2b6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.geo.jvm.geocoding',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.geo.jvm.geocoding', 'e71'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding', 'd19'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding', '5e3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification', '98a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper', 'c3f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher', 'c23'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processor.imageclassification.qrcode',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processor.imageclassification.qrcode', '570'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.aggregation',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.aggregation', 'bbd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.count',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.count', '29d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.eventcount',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.eventcount', '5b2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.rate',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.aggregation.flink.rate', '60c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.changedetection.jvm.cusum',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.changedetection.jvm.cusum', '9f8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop', '381'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop', 'a40'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry', '81b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing', 'f44'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.flink.timestamp',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.flink.timestamp', '313'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure', 'c62'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.compose',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.compose', '0a9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.enrich',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.enrich', '7ec'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.limit',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.limit', '1f0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.merge',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.merge', '792'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter', '135'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter', 'e9e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.project',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.project', '80a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.textfilter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.textfilter', '96f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.filters.jvm.threshold',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.filters.jvm.threshold', '6ac'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo', 'f9d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG', 'cc8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory', '8cf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator', '34a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.speed',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.speed', '1c4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator', 'e36'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.absence',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.absence', '466'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.and',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.and', 'e5b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection', 'a53'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence', 'faf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.frequency',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.frequency', 'b28'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.frequencychange',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.frequencychange', '762'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.increase',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.increase', '175'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.numericalfilter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.numericalfilter', '8c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.sequence',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.sequence', 'cc4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.siddhi.stop',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.siddhi.stop', '7d8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary', 'c3c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.flink.languagedetection',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.flink.languagedetection', '99f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.flink.wordcount',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.flink.wordcount', 'e31'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.chunker',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.chunker', '315'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection', '3d9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.namefinder',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.namefinder', '056'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech', '61a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection', '7df'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer', 'a28'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-converter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-converter', '08e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-mapper',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-mapper', '5d1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-renamer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.field-renamer', '952'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher', 'e80'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter', '796'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate', '530'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter', '217'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter', '684'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping', '418'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer', '3a1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.changed-value',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.changed-value', '2c3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.count-array',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.count-array', 'e28'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata', 'f86'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.duration-value',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.duration-value', '99b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge', '29d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state', '3d1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer', '6c8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer', '59b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number', '2e0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state', '3a7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor', '8fb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.split-array',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.split-array', '3e3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter', 'ad1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer', '840'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.taskduration',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.taskduration', '973'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean', '330'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.protocol.set.file',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.protocol.set.file', 'ecc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.protocol.set.http',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.protocol.set.http', '7c2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest', '6f0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.jms',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.jms', 'a0c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.kafka',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.kafka', '58c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.nats',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.nats', '391'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar', '80d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq', '88e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.rest',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.rest', 'e9d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.ditto',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.ditto', 'de4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch', '921'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.couchdb',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.couchdb', '7d4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.influxdb',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.influxdb', '5d7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.iotdb',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.iotdb', '2e1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.mysql',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.mysql', 'c9f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.opcua',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.opcua', 'b0b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.postgresql',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.postgresql', '280'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.dashboard',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.dashboard', '9ad'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.datalake',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.datalake', '672'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.notification',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.internal.jvm.notification', 'c3a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.email',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.email', '172'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal', '157'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.slack',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.slack', '55c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.telegram',
        component: ComponentCreator('/docs/next/pe/org.apache.streampipes.sinks.notifications.jvm.telegram', '367'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/privacy',
        component: ComponentCreator('/docs/next/privacy', '289'),
        exact: true
      },
      {
        path: '/docs/next/technicals-architecture',
        component: ComponentCreator('/docs/next/technicals-architecture', '3e9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/technicals-configuration',
        component: ComponentCreator('/docs/next/technicals-configuration', '916'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/technicals-messaging',
        component: ComponentCreator('/docs/next/technicals-messaging', '743'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/technicals-runtime-wrappers',
        component: ComponentCreator('/docs/next/technicals-runtime-wrappers', 'dcc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/technicals-user-guidance',
        component: ComponentCreator('/docs/next/technicals-user-guidance', 'fd3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/try-installation',
        component: ComponentCreator('/docs/next/try-installation', '487'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/try-tutorial',
        component: ComponentCreator('/docs/next/try-tutorial', '8ff'),
        exact: true
      },
      {
        path: '/docs/next/use-configurations',
        component: ComponentCreator('/docs/next/use-configurations', 'd04'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-connect',
        component: ComponentCreator('/docs/next/use-connect', 'fb1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-dashboard',
        component: ComponentCreator('/docs/next/use-dashboard', 'ccb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-data-explorer',
        component: ComponentCreator('/docs/next/use-data-explorer', '153'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-install-pipeline-elements',
        component: ComponentCreator('/docs/next/use-install-pipeline-elements', '683'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-managing-pipelines',
        component: ComponentCreator('/docs/next/use-managing-pipelines', '884'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-notifications',
        component: ComponentCreator('/docs/next/use-notifications', '3c6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/use-pipeline-editor',
        component: ComponentCreator('/docs/next/use-pipeline-editor', 'b9f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/user-guide-first-steps',
        component: ComponentCreator('/docs/next/user-guide-first-steps', '479'),
        exact: true
      },
      {
        path: '/docs/next/user-guide-installation',
        component: ComponentCreator('/docs/next/user-guide-installation', '687'),
        exact: true
      },
      {
        path: '/docs/next/user-guide-introduction',
        component: ComponentCreator('/docs/next/user-guide-introduction', 'b68'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/next/user-guide-introduction-old',
        component: ComponentCreator('/docs/next/user-guide-introduction-old', '61d'),
        exact: true
      },
      {
        path: '/docs/next/user-guide-software-components',
        component: ComponentCreator('/docs/next/user-guide-software-components', '616'),
        exact: true
      },
      {
        path: '/docs/next/user-guide-tour',
        component: ComponentCreator('/docs/next/user-guide-tour', '75c'),
        exact: true
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c40'),
    routes: [
      {
        path: '/docs/community-contribute',
        component: ComponentCreator('/docs/community-contribute', '614'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/community-get-help',
        component: ComponentCreator('/docs/community-get-help', 'a6f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/concepts-adapter',
        component: ComponentCreator('/docs/concepts-adapter', 'e7a'),
        exact: true
      },
      {
        path: '/docs/concepts-data-streams',
        component: ComponentCreator('/docs/concepts-data-streams', '00f'),
        exact: true
      },
      {
        path: '/docs/concepts-glossary',
        component: ComponentCreator('/docs/concepts-glossary', '40d'),
        exact: true
      },
      {
        path: '/docs/concepts-overview',
        component: ComponentCreator('/docs/concepts-overview', 'edd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/concepts-pipelines',
        component: ComponentCreator('/docs/concepts-pipelines', '445'),
        exact: true
      },
      {
        path: '/docs/debugging-debugging',
        component: ComponentCreator('/docs/debugging-debugging', 'aaa'),
        exact: true
      },
      {
        path: '/docs/debugging-monitoring',
        component: ComponentCreator('/docs/debugging-monitoring', '313'),
        exact: true
      },
      {
        path: '/docs/deploy-docker',
        component: ComponentCreator('/docs/deploy-docker', 'a67'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/deploy-environment-variables',
        component: ComponentCreator('/docs/deploy-environment-variables', '88a'),
        exact: true
      },
      {
        path: '/docs/deploy-kubernetes',
        component: ComponentCreator('/docs/deploy-kubernetes', '77b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/deploy-security',
        component: ComponentCreator('/docs/deploy-security', '113'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/deploy-use-ssl',
        component: ComponentCreator('/docs/deploy-use-ssl', 'd74'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/dev-guide-archetype',
        component: ComponentCreator('/docs/dev-guide-archetype', 'd1a'),
        exact: true
      },
      {
        path: '/docs/dev-guide-introduction',
        component: ComponentCreator('/docs/dev-guide-introduction', '3b8'),
        exact: true
      },
      {
        path: '/docs/dev-guide-sdk-guide-processors',
        component: ComponentCreator('/docs/dev-guide-sdk-guide-processors', '2c5'),
        exact: true
      },
      {
        path: '/docs/dev-guide-sdk-guide-sinks',
        component: ComponentCreator('/docs/dev-guide-sdk-guide-sinks', '547'),
        exact: true
      },
      {
        path: '/docs/extend-archetypes',
        component: ComponentCreator('/docs/extend-archetypes', '2de'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-cli',
        component: ComponentCreator('/docs/extend-cli', 'cb3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-first-processor',
        component: ComponentCreator('/docs/extend-first-processor', '530'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-event-model',
        component: ComponentCreator('/docs/extend-sdk-event-model', 'b1e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-functions',
        component: ComponentCreator('/docs/extend-sdk-functions', '50c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-migration-service-discovery',
        component: ComponentCreator('/docs/extend-sdk-migration-service-discovery', '11c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-output-strategies',
        component: ComponentCreator('/docs/extend-sdk-output-strategies', '571'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-static-properties',
        component: ComponentCreator('/docs/extend-sdk-static-properties', '65e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-sdk-stream-requirements',
        component: ComponentCreator('/docs/extend-sdk-stream-requirements', '293'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-setup',
        component: ComponentCreator('/docs/extend-setup', '19f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-tutorial-data-processors',
        component: ComponentCreator('/docs/extend-tutorial-data-processors', '56d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-tutorial-data-sinks',
        component: ComponentCreator('/docs/extend-tutorial-data-sinks', '989'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/extend-tutorial-data-sources',
        component: ComponentCreator('/docs/extend-tutorial-data-sources', '52b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/faq-common-problems',
        component: ComponentCreator('/docs/faq-common-problems', '1e0'),
        exact: true,
        sidebar: "faq"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', 'bbd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/license',
        component: ComponentCreator('/docs/license', 'efd'),
        exact: true
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.coindesk',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.coindesk', '70a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.flic.mqtt',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.flic.mqtt', 'bb0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.gdelt',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.gdelt', 'acc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.iex.news',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.iex.news', '89c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.iex.stocks',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.iex.stocks', 'b69'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.image.set',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.image.set', 'b0a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.image.stream',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.image.stream', '799'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.influxdb.set',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.influxdb.set', '55c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.influxdb.stream',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.influxdb.stream', '9c2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.iss',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.iss', 'e1e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.mysql.set',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.mysql.set', 'c06'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.mysql.stream',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.mysql.stream', '962'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.netio.mqtt',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.netio.mqtt', 'd46'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.netio.rest',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.netio.rest', '824'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.nswaustralia.trafficcamera', 'd94'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.opcua',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.opcua', '419'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.plc4x.modbus',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.plc4x.modbus', '900'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.plc4x.s7',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.plc4x.s7', '5e7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.ros',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.ros', 'f58'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.simulator.machine',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.simulator.machine', 'a33'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdataset', 'b66'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.simulator.randomdatastream', 'd43'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.slack',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.slack', '4a7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.ti',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.ti', '27c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.edit',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.edit', '33a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.new',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.adapters.wikipedia.new', 'd24'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.file',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.file', '6f5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.http',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.http', '72f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.httpserver',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.httpserver', '369'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.kafka',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.kafka', 'd6d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.mqtt',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.mqtt', 'ff1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.connect.protocol.stream.pulsar',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.connect.protocol.stream.pulsar', 'd3b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.geo.flink',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.geo.flink', 'a6b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.geo.jvm.geocoding',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.geo.jvm.geocoding', '6a2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.geo.jvm.reversegeocoding', '10a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding', '851'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.generic-image-classification', 'cc6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper', '148'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher', '32c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processor.imageclassification.qrcode',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processor.imageclassification.qrcode', 'bd1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.aggregation.flink.aggregation',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.aggregation.flink.aggregation', '0c9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.aggregation.flink.count',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.aggregation.flink.count', '558'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.aggregation.flink.eventcount',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.aggregation.flink.eventcount', '0da'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.aggregation.flink.rate',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.aggregation.flink.rate', 'ba5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.changedetection.jvm.cusum',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.changedetection.jvm.cusum', 'ca5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.mathop', '114'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop', 'd73'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.trigonometry', 'dbd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.flink.processor.urldereferencing', 'b3f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.flink.timestamp',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.flink.timestamp', 'a92'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.enricher.jvm.sizemeasure', 'ef7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.compose',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.compose', 'ccf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.enrich',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.enrich', '3dc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.limit',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.limit', '055'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.merge',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.merge', 'ac4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.numericalfilter', '92e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter', 'd55'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.project',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.project', 'fda'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.textfilter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.textfilter', '2e5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.filters.jvm.threshold',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.filters.jvm.threshold', '2ad'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.latLngToGeo', '671'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.setEPSG', '553'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.trajectory', 'f42'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.distancecalculator', 'c2f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.speed',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.speed', 'b93'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator', '5fd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.absence',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.absence', '261'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.and',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.and', 'e49'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection', '06a'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.sequence', '8f5'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.frequency',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.frequency', '2d0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.frequencychange',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.frequencychange', 'aab'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.increase',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.increase', '754'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.numericalfilter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.numericalfilter', 'd50'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.sequence',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.sequence', 'a92'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.siddhi.stop',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.siddhi.stop', '6d1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.statistics.flink.statistics-summary', 'e45'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.flink.languagedetection',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.flink.languagedetection', '2c3'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.flink.wordcount',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.flink.wordcount', '694'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.chunker',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.chunker', '8af'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.languagedetection', '5b9'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.namefinder',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.namefinder', '87f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech', 'b6e'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.sentencedetection', 'a6d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer', '9c7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.field-converter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.field-converter', '704'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.field-mapper',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.field-mapper', '507'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.field-renamer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.field-renamer', 'd77'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher', '6cf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.measurement-unit-converter', '18c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.flink.processor.boilerplate', '7b8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter', 'e53'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.inverter', '366'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timekeeping', 'cb1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.timer', 'fe6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.changed-value',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.changed-value', 'f05'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.count-array',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.count-array', '6fd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata', '673'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.duration-value',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.duration-value', '1e1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.edge', '4cc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.booloperator.state', '8b1'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.buffer', '1ae'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.buffer', 'bb6'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.state.labeler.number', '212'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.stringoperator.state', '588'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor', '901'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.split-array',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.split-array', '7de'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter', '4db'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.timer', 'b0b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.taskduration',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.taskduration', '039'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean', '12d'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.protocol.set.file',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.protocol.set.file', '7e7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.protocol.set.http',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.protocol.set.http', '23c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest', '179'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.jms',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.jms', '9ee'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.kafka',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.kafka', '569'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.mqtt', 'f51'),
        exact: true
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.nats',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.nats', 'bfb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.pulsar', '254'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rabbitmq', '452'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rest',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.brokers.jvm.rest', '9d8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.ditto',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.ditto', '8ca'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.flink.elasticsearch', 'e7f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.couchdb',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.couchdb', 'a01'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.influxdb',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.influxdb', '0bc'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.iotdb',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.iotdb', 'cb2'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.mysql',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.mysql', 'f5b'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.opcua',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.opcua', 'e80'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.databases.jvm.postgresql',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.databases.jvm.postgresql', 'beb'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.internal.jvm.dashboard',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.internal.jvm.dashboard', '1c4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.internal.jvm.datalake',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.internal.jvm.datalake', '5e8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.internal.jvm.notification',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.internal.jvm.notification', '81f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.notifications.jvm.email',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.notifications.jvm.email', 'fa7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.notifications.jvm.onesignal', 'c99'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.notifications.jvm.slack',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.notifications.jvm.slack', '6e0'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/pe/org.apache.streampipes.sinks.notifications.jvm.telegram',
        component: ComponentCreator('/docs/pe/org.apache.streampipes.sinks.notifications.jvm.telegram', '6cf'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/privacy',
        component: ComponentCreator('/docs/privacy', '619'),
        exact: true
      },
      {
        path: '/docs/technicals-architecture',
        component: ComponentCreator('/docs/technicals-architecture', '40f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/technicals-configuration',
        component: ComponentCreator('/docs/technicals-configuration', '4b4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/technicals-messaging',
        component: ComponentCreator('/docs/technicals-messaging', 'f49'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/technicals-runtime-wrappers',
        component: ComponentCreator('/docs/technicals-runtime-wrappers', '6e4'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/technicals-user-guidance',
        component: ComponentCreator('/docs/technicals-user-guidance', '105'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/try-installation',
        component: ComponentCreator('/docs/try-installation', '56f'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/try-tutorial',
        component: ComponentCreator('/docs/try-tutorial', '505'),
        exact: true
      },
      {
        path: '/docs/use-configurations',
        component: ComponentCreator('/docs/use-configurations', 'cb8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-connect',
        component: ComponentCreator('/docs/use-connect', '355'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-dashboard',
        component: ComponentCreator('/docs/use-dashboard', '073'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-data-explorer',
        component: ComponentCreator('/docs/use-data-explorer', 'a35'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-install-pipeline-elements',
        component: ComponentCreator('/docs/use-install-pipeline-elements', 'a2c'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-managing-pipelines',
        component: ComponentCreator('/docs/use-managing-pipelines', '273'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-notifications',
        component: ComponentCreator('/docs/use-notifications', '4f8'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/use-pipeline-editor',
        component: ComponentCreator('/docs/use-pipeline-editor', 'bcd'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/user-guide-first-steps',
        component: ComponentCreator('/docs/user-guide-first-steps', '8d0'),
        exact: true
      },
      {
        path: '/docs/user-guide-installation',
        component: ComponentCreator('/docs/user-guide-installation', '97d'),
        exact: true
      },
      {
        path: '/docs/user-guide-introduction',
        component: ComponentCreator('/docs/user-guide-introduction', 'fb7'),
        exact: true,
        sidebar: "documentation"
      },
      {
        path: '/docs/user-guide-introduction-old',
        component: ComponentCreator('/docs/user-guide-introduction-old', '040'),
        exact: true
      },
      {
        path: '/docs/user-guide-software-components',
        component: ComponentCreator('/docs/user-guide-software-components', '93c'),
        exact: true
      },
      {
        path: '/docs/user-guide-tour',
        component: ComponentCreator('/docs/user-guide-tour', '7d8'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fd5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
