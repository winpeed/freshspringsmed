import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

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
            placeholder="blur"
            blurDataURL="/blur.jpg"
            alt={"Fresh Springs Med Building"}
            src="/building.jpg"
            objectFit={"contain"}
            width="500px"
            height="420px"
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
