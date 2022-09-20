import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Logo = (props: any) => {
  return <Text>Fresh Springs Medical Services</Text>;
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize="1.5em"
      mb={2}
      fontFamily="Inter, sans-serif"
    >
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={6}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={10}
        paddingLeft={{ xl: "3em", base: "2em", lg: "3em" }}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>

            <Link href="tel:+2348032507418">
              <Stack direction="row" alignItems={"center"}>
                <FiPhoneCall />
                <Text>Call</Text>
              </Stack>
            </Link>

            <Link href="https://wa.me/2348032507418">
              <Stack direction={"row"} alignItems={"center"}>
                <FaWhatsapp />
                <Text>Chat</Text>
              </Stack>
            </Link>

            <Link href="mailto:freshspringsmed@gmail.com">
              <Stack direction={"row"} alignItems={"center"}>
                <MdOutlineEmail />
                <Text>Email</Text>
              </Stack>
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact"> Contact Us</Link>
            <Link href="/schedule">Schedule Appointment</Link>
            <Link href="/faq">Frequently Asked Questions</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href="privacy">Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href="https://facebook.com/freshspringsmed">Facebook</Link>
            <Link href="https://www.instagram.com/freshspringsmedicalservices/">
              Instagram
            </Link>
            <Link href="mailto:freshspringsmed@gmail.com">Email</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Fresh Springs Medical Services. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
