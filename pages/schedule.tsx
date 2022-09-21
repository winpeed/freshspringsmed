import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import ScheduleComp from "../components/ScheduleComp";

const Schedule: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Schedule A Meeting with Doctor - Fresh Springs Medical Services
        </title>
        <meta
          name="description"
          content="To schedule a meeting with our doctor/consultant, kindly fill this form below. Once received, a confirmation / reschedule mail will be sent to your email address within 12 hours."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      <PageTitle firstTitle="Schedule " secondTitle=" an appointment" />
      <ScheduleComp />
      <Footer />
    </>
  );
};

export default Schedule;
