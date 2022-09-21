import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function SplitScreen() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      maxW={"7xl"}
    >
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        marginTop={{ lg: "2.5em", base: "4em" }}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              py={2}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "10%", md: "12%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              General Health Care
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              and Affordable Fertility Treatments
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            lineHeight={1.7}
          >
            Fresh Springs Medical Services is conveniently located in the heart
            of FCT, Abuja and provides affordable fertility care to her clients.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Link href="/contact">
              <Button
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Send a Message
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://www.freshspringsmed.com/wp-content/uploads/2018/12/adorable-baby.jpg"
          }
          height={390}
          width={650}
        />
      </Flex>
    </Stack>
  );
}
