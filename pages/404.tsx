import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
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

        <Button bg="#2d3748" color="white" variant="solid">
          Go to Home
        </Button>
      </Box>
      <Footer />
    </>
  );
}
