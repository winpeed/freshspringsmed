import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>ContactUs - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="We are always at your service. Feel free to leave us a message. Your message is treated with utmost confidentiality."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
