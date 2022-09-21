import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

export default function ServicesExtra() {
  return (
    <Box position={"relative"} marginBottom="3em">
      <Flex flex={1} zIndex={0} display={{ base: "none", lg: "flex" }}>
        <Flex w={"full"} h={"full"} />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 5, xl: 10 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
                fontFamily="Inter, sans-serif"
              >
                Whole patient approach
              </Heading>
              <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
                Our array of services is designed to meet the unique needs of
                every patient. We are dedicated to a whole patient approach. We
                recognize that fertility treatment may impact all corners of our
                patient’s lives, including work, personal relationships and
                financial concerns.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontSize={"2xl"}
                    mb={3}
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize="1rem" fontWeight="400" lineHeight="1.7">
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} alignItems="center" justifyContent="center">
            <Stack>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src="doctor-kay.jpg"
                objectFit={"cover"}
                height="300px"
                width="400px"
                marginBottom="2em"
              />

              <Image
                rounded={"md"}
                alt={"Nurses at Fresh Springs"}
                src="nurses-2.jpg"
                objectFit={"contain"}
                height="300px"
                width="400px"
                marginBottom="2em"
              />

              <Image
                rounded={"md"}
                alt={"Baby at Fresh Springs"}
                src="baby.jpg"
                objectFit={"contain"}
                height="300px"
                width="400px"
                marginBottom="2em"
              />
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title: "Flexible Office Hours",
    content: (
      <>
        Our office hours are flexible. Our physicians, nurses, counselors and
        laboratory staff accommodate early morning, evening and weekend
        appointments according to our patient’s treatment schedule and ‘off
        hour’ needs.
      </>
    ),
  },
  {
    title: "Professional staff",
    content: (
      <>
        When designing their treatment course, our physicians, nurses and
        counselors work with them to accommodate all of these considerations.
        Our support is integrated. Emotional health and wellbeing are central to
        our patient’s care.
      </>
    ),
  },
  {
    title: "Attention to details",
    content: (
      <>
        This Treatment and Care section is a guide through the procedures that
        are offered at Fresh Springs so that one can gain a better understanding
        of how given fertility treatment options may work. For each treatment
        option, there will be a description of the various steps involved,
        information about medications, and links to further information, studies
        and research.
      </>
    ),
  },
  {
    title: "Budget Friendly",
    content: (
      <>
        Our financial team is likewise committed to helping patients to meet
        their treatment goals and budget.
      </>
    ),
  },
];
