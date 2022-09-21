import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function AboutComp() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2, md: 2 }}
        spacing={{ base: 8, md: 10 }}
        marginTop={{ lg: "-2.5em", base: "2em" }}
        alignItems={"center"}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src="/building.jpg"
            fit={"contain"}
            align={"center"}
            w={"95%"}
            h={{ base: "100%", sm: "230px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                lineHeight={1.7}
              >
                Fresh Springs Medical Services is an healthcare center located
                in the hearts of the Federal Capital Territory, Abuja.
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color={"gray.500"}
                lineHeight={1.7}
              >
                We offer a wide variety of fertility treatments from the simple
                to the most complex including ovulation induction, artificial
                insemination, in-vitro fertilization (IVF) and intra-cytoplasmic
                sperm injection (ICSI).
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
