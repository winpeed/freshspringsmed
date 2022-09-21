import type { NextPage } from "next";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import PrivacyComp from "../components/PrivacyComp";
import ScheduleWrapComp from "../components/ScheduleWrapComp";
import VisionComp from "../components/VisionComp";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="This is the policy that operate with respect to Privacy at Fresh Springs Medical Services"
        />
      </Head>
      <Navbar />
      <PageTitle firstTitle="Privacy" secondTitle="Policy" />
      <PrivacyComp />
      <ScheduleWrapComp />
      <Footer />
    </>
  );
};

export default Privacy;
