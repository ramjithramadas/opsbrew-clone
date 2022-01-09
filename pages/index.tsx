import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { metaLogo } from "../src/constants/svgs";
import Layout from "../src/layouts";
import {
   HomeBanner,
   HomeService,
   HomeAdfolksApproach,
   HomeBusinessBenefits,
   HomeCertification,
   HomeKeyIndicators,
   HomeModernisation,
   HomeTestimonials,
} from "../src/sections";

// HomePage.getLayout = function getLayout(page: React.ReactElement) {
//    return <Layout variant="main">{page}</Layout>;
// };

export default function HomePage() {
   return (
      <Layout variant="main">
         <Head>
            <title key="title"> Opsbrew</title>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Opsbrew clone" key="og:title" />
            <meta property="og:image" content={metaLogo} key="og:image" />
            <meta property="og:url" content={`${process.env.HOST_URL}`} key="og:url" />
            <meta property="og:image:width" content="600" key="og:image:width" />
            <meta property="og:image:height" content="600" key="og:image:height" />
            <meta property="og:image:alt" content="logo" key="og:image:alt" />
            <meta
               property="og:description"
               name="description"
               key="og:description"
               content="Opsbrew clone website by Ramjith."
            />
         </Head>
         <HomeBanner />
         <HomeService />
         {/* <HomeModernisation />
            <HomeKeyIndicators />
            <HomeTestimonials />
            <HomeAdfolksApproach />
            <HomeBusinessBenefits />
            <HomeCertification /> */}
      </Layout>
   );
}
