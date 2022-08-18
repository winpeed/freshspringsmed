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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Faith in God.",
  },
  {
    id: 2,
    title: "Responsibility to do our best.",
  },
  {
    id: 3,
    title: "Excellence in quality of service delivery.",
  },
  {
    id: 5,
    title: "Honesty in all that we do.",
  },
  {
    id: 6,
    title: "Integrity in our day-to-day activities.",
  },
  {
    id: 7,
    title: "Stewardship.",
  },
  {
    id: 8,
    title: "Service to Humanity.",
  },
  {
    id: 9,
    title: "Passion to serve, bring smiles & change lives.",
  },
  {
    id: 10,
    title: "Growth.",
  },
  {
    id: 11,
    title:
      "Strive for innovation, high performance and commitment to continuous learning.",
  },
  {
    id: 12,
    title:
      "Nurture and Nourish high moral principles and professional standards.",
  },
  {
    id: 13,
    title:
      "Respect the rights, dignity, individuality and worth of each person we serve and each other.",
  },
];

export default function CoreValues() {
  return (
    <Box px={4} py={16} maxW={"7xl"}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Core Values</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          These principles guide our operations at Fresh Springs Medical
          Services.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
