import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"16"}
      lineHeight={"7"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

export default function TestimonialComp() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"} maxW={"7xl"}>
          <Heading>Testimonials</Heading>
          <Text textAlign="center">
            Our clients love us! Read what they have to say about us.
          </Text>
        </Stack>
        <SimpleGrid
          spacing={{ base: 10, md: 4, lg: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                We are so proud of Fresh Springs! More power to your elbow.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/f-hero-sm-compressor.jpg&auto=format&fit=crop&w=100&q=80"
              }
              name={"Fatima Ilu Hafiz"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                It is a good hospital and it is a good place to make sure you
                are treated well.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/nwafor-salome-2.jpg"
              }
              name={"Salome N."}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                It is run by one of the best O & G consultants in Nigeria.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/susan-odok-e1547176874498.jpg"
              }
              name={"Susan O"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Fresh Springs Medical Services offers the best gynecological
                services in the FCT. They have TOP NOTCH equipment as well as
                the best hands to put them to judicious use. I am a beneficiary
                of their services.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2019/05/joy-bur.jpeg"
              }
              name={"Joy Bur"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Fresh Springs Medical Services is being managed by well
                qualified, seasoned and experienced health workers. The MD is
                one of the best O & G doctors in Abuja.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/janet-afolayan-e1547176910217.jpg"
              }
              name={"Janet A."}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Doctor you are too much. God is really using you to wipe away
                tears from people’s eyes.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/janet-afolayan-e15471710217.jpg"
              }
              name={"Precious Chinedum Emmanuel Ibe"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Good Evening Doctor ,I just wanted to say a big thank you to you
                for all your support, encouragement and professional advice in
                my years of looking for a child .I gave birth to a baby boy on
                the 15th September, just got discharged. Will see you soonest .I
                appreciate your efforts sir.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://www.freshspringsmed.com/wp-content/uploads/2018/12/janet-afolayan-e1547910217.jpg"
              }
              name={"Tamarapriye Odaro"}
            />
          </Testimonial>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
