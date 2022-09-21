import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Icon,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={4} align={"center"} justify={"center"} rounded={"full"}>
        {icon}
      </Flex>
      <Text fontSize="0.9rem" fontWeight="400" lineHeight="1.7">
        {text}
      </Text>
    </Stack>
  );
};

export default function ServicesComp() {
  return (
    <Container maxW={"5xl"} py={12} marginBottom="0.5em">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Fertility Treatment
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            We are dedicated to providing exceptional, personalized reproductive
            and fertility health care for our patients.
          </Text>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Utilizing the latest advances in medicine combined with the
            state-of-the-art techniques, our goal is to treat our patients with
            comfort and compassion. Our general and specialized services
            include:
          </Text>
          <Stack spacing={4}>
            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Reproductive Endocrinology"}
            />
            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Egg Donation"}
            />

            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"In Vitro Fertilization (IVF)"}
            />
            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Infertility Evaluation"}
            />

            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Intracytoplasmic Sperm Injection"}
            />

            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Intrauterine Insemination"}
            />

            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Saline Infusion Sonography Less"}
            />

            <Feature
              icon={
                <Icon
                  as={IoIosCheckmarkCircle}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              text={"Ovulation Induction"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src="doctors.jpg"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        paddingTop="2em"
        paddingBottom="2em"
      >
        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Obstetrics / Gynaecology
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Our board-certified obstetricians and gynecologists strive to
            provide personalized care for each of our patient’s needs and are
            trained to help patients with standard and high risk obstetrics,
            gynecology, infertility and women’s health issues.
          </Text>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Our physicians and staff are committed to caring for you in all the
            phases of your life.
          </Text>
        </Stack>

        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Outpatient
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Our outpatient department is designed for the treatment of people
            with health problems who visit the hospital for diagnosis or
            treatment, but do not at this time require a bed or to be admitted
            for overnight care.
          </Text>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Our Modern outpatient department offers a wide range of treatment
            services, diagnostic tests and minor surgical procedures.
          </Text>
        </Stack>
      </SimpleGrid>

      <Box display="flex" justifyContent="center">
        <Image
          rounded={"md"}
          alt={"Equipment image"}
          src="equipment.jpg"
          objectFit={"cover"}
        />
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        paddingTop="2em"
        paddingBottom="2em"
      >
        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Pharmacy
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            At our Pharmacy, drugs are dispensed by professionals who ensure the
            safe and effective use of pharmaceutical drugs.
          </Text>
        </Stack>

        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Surgery
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            This department ensures that patients received the best in terms of
            surgical care.
          </Text>
        </Stack>
      </SimpleGrid>

      <Box display="flex" justifyContent="center">
        <Image
          rounded={"md"}
          alt={"Nurses at work"}
          src="/nurses.jpg"
          objectFit={"cover"}
        />
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        paddingTop="1em"
        paddingBottom="1em"
      >
        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Inpatient
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            Our inpatient department has provision for those who stay at the
            hospital while receiving treatment. This is important in cases where
            patients have to be placed under close monitoring,
          </Text>
        </Stack>

        <Stack spacing={4}>
          <Heading
            fontSize={"3xl"}
            fontFamily="Inter, sans-serif"
            paddingTop="0.6em"
          >
            Laboratory
          </Heading>
          <Text color={"gray.500"} fontSize="1rem" lineHeight="1.7">
            The Laboratory at FreshSprings Medical Services is equipped with
            modern day facilities for carrying out tests on clinical specimens
            in order to obtain information about the health of patients. This is
            necessary to provide diagnosis, treatment, and prevention of
            disease.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
