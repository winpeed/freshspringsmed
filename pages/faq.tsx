import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FaqAccordion from "../components/FaqAccordion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>FAQs - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="Here are some answers to the many questions people ask about pregnancy, IVF, ICSI and other fertility related challenges and questions.."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      <FaqAccordion />
      <Footer />
    </>
  );
};

export default Faq;
