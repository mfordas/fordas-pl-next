import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "../components/home/hero";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
};

export default IndexPage;
