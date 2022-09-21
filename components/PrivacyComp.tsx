import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

function PrivacyComp() {
  return (
    <Box mb={{ base: 8, md: 20 }} maxWidth="1100px" margin="0 auto">
      <Heading
        mb={5}
        padding="1em 0em 0em 0em"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Inter, sans-serif"
      >
        Who we are
      </Heading>
      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        Our website address is:{" "}
        <Link
          href="https://freshspringsmed.com"
          style={{ color: "blue.700", textDecoration: "underline" }}
        >
          https://freshspringsmed.com
        </Link>
      </Text>

      <Heading
        mb={5}
        padding="1em 0em 0em 0em"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Inter, sans-serif"
      >
        What Personal Data we collect and why we collect
      </Heading>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        The personal data we work with are your name, email address and phone
        number. The data are used solely for marketing purposes.
      </Text>

      <Heading
        mb={5}
        padding="1em 0em 0em 0em"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Inter, sans-serif"
      >
        Cookies
      </Heading>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment.
      </Text>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        These cookies will last for one year. If you have an account and you log
        in to this site, we will set a temporary cookie to determine if your
        browser accepts cookies. This cookie contains no personal data and is
        discarded when you close your browser.
      </Text>

      <Heading
        mb={5}
        padding="1em 0em 0em 0em"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Inter, sans-serif"
      >
        Embedded contents from other websites
      </Heading>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website.
      </Text>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        These websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction with the embedded content
        if you have an account and are logged in to that website.
      </Text>

      <Heading
        mb={5}
        padding="1em 0em 0em 0em"
        fontSize={{ base: "xl", md: "3xl" }}
        fontFamily="Inter, sans-serif"
      >
        Where we send your data
      </Heading>

      <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
        Visitor comments may be checked through an automated spam detection
        service.
      </Text>
    </Box>
  );
}

export default PrivacyComp;
