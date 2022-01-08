import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Page from "../src/components/Page";
import Layout from "../src/layouts";
import { HomeBanner } from "../src/sections";
import {
   HomeAdfolksApproach,
   HomeBusinessBenefits,
   HomeCertification,
   HomeKeyIndicators,
   HomeModernisation,
   HomeService,
   HomeTestimonials,
} from "../src/sections";

// HomePage.getLayout = function getLayout(page: React.ReactElement) {
//    return <Layout variant="main">{page}</Layout>;
// };

export default function HomePage() {
   return (
      <Layout variant="main">
         <Page title="Opsbrew">
            <HomeBanner />
            <HomeService />
            {/* <HomeModernisation />
            <HomeKeyIndicators />
            <HomeTestimonials />
            <HomeAdfolksApproach />
            <HomeBusinessBenefits />
            <HomeCertification /> */}
         </Page>
      </Layout>
   );
}
