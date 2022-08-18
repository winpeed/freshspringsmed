import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function VisionComp() {
  return (
    <Box
      py={"5em"}
      px={4}
      marginTop={{ base: "2em", lg: "-3em" }}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Vision</Heading>
        <Text color={"black.600"} fontSize={"xl"}>
          To be the hospital of choice, delivering the best in healthcare and
          providing quality care every time.
        </Text>
      </Stack>
    </Box>
  );
}
