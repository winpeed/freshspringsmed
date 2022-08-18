import type { NextPage } from "next";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
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
      <Footer />
    </>
  );
};

export default About;
