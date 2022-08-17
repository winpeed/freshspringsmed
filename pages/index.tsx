import type { NextPage } from "next";
import Head from "next/head";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TestimonialComp from "../components/TestimonialComp";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="Fresh Springs Medical Services is one of the best hospitals conveniently located in the hearts of FCT, Abuja and provides affordable feritility care to her clients."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      <Hero />
      <CoreValues />
      <TestimonialComp />
      <Footer />
    </>
  );
};

export default Home;
