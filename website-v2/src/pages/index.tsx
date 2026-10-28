import React from 'react';
import Layout from '@theme/Layout';
import Homepage from '../components/home/Homepage';

export default function Home() {
  return (
    <Layout
      title="Open-source industrial IoT data platform"
      description="Apache StreamPipes is an open-source industrial IoT data platform. Connect machines via OPC UA, MQTT, S7 and Modbus, process live data in visual pipelines, store datasets and build charts and dashboards."
    >
      <Homepage />
    </Layout>
  );
}
