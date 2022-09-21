import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Fresh Springs Medical Services</title>
        <meta
          name="description"
          content="The page you are looking for does not seem to exist."
        />
      </Head>
      <Navbar />
      <Box textAlign="center" paddingTop="7em" px={6} paddingBottom="5em">
        <Heading display="inline-block" as="h2" size="2xl" color="#2d3748.400">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"black.400"} mb={6}>
          The page you are looking for does not seem to exist
        </Text>

        <Link href="/">
          <Button bg="#2d3748" color="white" variant="solid">
            Go to Home
          </Button>
        </Link>
      </Box>
      <Footer />
    </>
  );
}
