import Layout from "@theme/Layout";
import React from "react";
import Teaser from "../components/Teaser";
import LovedByDevelopers from "../components/home/LovedByDevelopers";
import LovedByUsers from "../components/home/LovedByUsers";
import MadeForIIoT from "../components/home/MadeForIIoT";
import ReadyforProduction from "../components/home/ReadyforProduction";
import Support from "../components/home/Support";

export default () => {
  return (
      <Layout>
        <Teaser></Teaser>
        <MadeForIIoT></MadeForIIoT>
        <LovedByUsers></LovedByUsers>
        <ReadyforProduction></ReadyforProduction>
        <LovedByDevelopers></LovedByDevelopers>
        <Support></Support>
      </Layout>
  )
};
