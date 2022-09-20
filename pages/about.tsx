import type { NextPage } from "next";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ScheduleWrapComp from "../components/ScheduleWrapComp";
import VisionComp from "../components/VisionComp";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="We are always at your service. Feel free to leave us a message. Your message is treated with utmost confidentiality."
        />
      </Head>
      <Navbar />
      <PageTitle firstTitle="About Us" />
      <AboutComp />
      <VisionComp />
      <CoreValues />
      <ScheduleWrapComp />
      <Footer />
    </>
  );
};

export default About;
