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
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
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

            <Link href="">
              <Stack direction={"row"} alignItems={"center"}>
                <FiPhoneCall />
                <Text>Call</Text>
              </Stack>
            </Link>

            <Link href="">
              <Stack direction={"row"} alignItems={"center"}>
                <FaWhatsapp />
                <Text>Chat</Text>
              </Stack>
            </Link>

            <Link href="">
              <Stack direction={"row"} alignItems={"center"}>
                <MdOutlineEmail />
                <Text>Email</Text>
              </Stack>
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Core Values</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Schedule Appointment</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>Email</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Fresh Springs Medical Services. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
