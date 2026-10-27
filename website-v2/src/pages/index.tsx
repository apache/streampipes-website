import Layout from "@theme/Layout";
import React from "react";
import Teaser from "../components/Teaser";
import LovedByDevelopers from "../components/home/LovedByDevelopers";
import LovedByUsers from "../components/home/LovedByUsers";
import MadeForIIoT from "../components/home/MadeForIIoT";
import FlexibleDeployment from "../components/home/FlexibleDeployment";
import ReadyforProduction from "../components/home/ReadyforProduction";
import Support from "../components/home/Support";
import TrustBand from "../components/home/TrustBand";

export default () => {
  return (
      <Layout
        title="Open-source industrial IoT data platform"
        description="Apache StreamPipes is an open-source industrial IoT data platform. Connect machines via OPC UA, MQTT, S7 and Modbus, process live data in visual pipelines, store datasets and build charts and dashboards."
      >
        <Teaser></Teaser>
        <TrustBand></TrustBand>
        <MadeForIIoT></MadeForIIoT>
        <LovedByUsers></LovedByUsers>
        <FlexibleDeployment></FlexibleDeployment>
        <ReadyforProduction></ReadyforProduction>
        <LovedByDevelopers></LovedByDevelopers>
        <Support></Support>
      </Layout>
  )
};
