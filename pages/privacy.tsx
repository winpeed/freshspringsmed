import type { NextPage } from "next";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ScheduleWrapComp from "../components/ScheduleWrapComp";
import VisionComp from "../components/VisionComp";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="Here are some of the services we offer at Fresh Springs Medical Services."
        />
      </Head>
      <Navbar />
      <PageTitle firstTitle="Privacy" secondTitle="Policy" />

      <ScheduleWrapComp />
      <Footer />
    </>
  );
};

export default Privacy;
