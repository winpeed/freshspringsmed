import type { NextPage } from "next";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ScheduleWrapComp from "../components/ScheduleWrapComp";
import ServicesComp from "../components/ServicesComp";
import ServicesExtra from "../components/ServicesExtra";

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="Here are some of the services we offer at Fresh Springs Medical Services."
        />
      </Head>
      <Navbar />
      <PageTitle firstTitle="Services" />
      <ServicesComp />
      <ServicesExtra />
      <ScheduleWrapComp />
      <Footer />
    </>
  );
};

export default Services;
