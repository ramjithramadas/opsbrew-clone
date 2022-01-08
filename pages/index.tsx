import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Page from "../src/components/Page";
import Layout from "../src/layouts";
import { HomeBanner } from "../src/sections";

// HomePage.getLayout = function getLayout(page: React.ReactElement) {
//    return <Layout variant="main">{page}</Layout>;
// };

export default function HomePage() {
   return (
      <Layout variant="main">
         <Page title="Opsbrew">
            <h1 className="pt-40 text-3xl font-bold underline bg-red-200">Hello world!</h1>
            <HomeBanner />
         </Page>
      </Layout>
   );
}
