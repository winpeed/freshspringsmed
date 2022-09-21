import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ScheduleWrapComp() {
  return (
    <Box
      py={"5em"}
      px={4}
      marginTop={{ base: "2em", lg: "-3em" }}
      bg={"gray.800"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={"4xl"}
          fontFamily="Inter, sans-serif"
          paddingTop={2}
          paddingBottom={4}
          lineHeight="1.7"
          color={"gray.100"}
        >
          Schedule A Visit
        </Heading>
        <Text
          color={"gray.400"}
          fontSize={{ base: "md", lg: "lg" }}
          lineHeight="1.7"
          textAlign="left"
        >
          Fresh Springs Medical Services is available 7 days a week, everyday of
          the year. Check out our appointments and fertility treatment treatment
          procedures.
        </Text>
        <Text
          color={"gray.400"}
          fontSize={{ base: "md", lg: "lg" }}
          lineHeight="1.7"
          textAlign="left"
        >
          Our office hours are flexible. Our physicians, nurses, counselors and
          laboratory staff accommodate early morning, evening and weekend
          appointments according to our patient’s treatment schedule and ‘off
          hour’ needs.
        </Text>

        <Stack
          margin="0 auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link href="/schedule">
            <Button
              paddingTop={6}
              paddingBottom={6}
              bg={"yellow.400"}
              color={"black"}
              _hover={{
                bg: "yellow.500",
              }}
            >
              Send a Message
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
