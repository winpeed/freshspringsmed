/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Loader from "./Loader";
import { BsFacebook, BsPerson, BsInstagram } from "react-icons/bs";
import { MdEmail, MdOutlineEmail, MdLocationPin } from "react-icons/md";

export default function ContactForm() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("api/send", {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await response.json();
      setIsSent(true);
      setIsLoading(false);
    } catch (error) {}
  };

  const handleSubmit = () => {
    sendMail();
  };
  return (
    <Flex align="center" justify="center" id="contact">
      {isLoading ? (
        <Loader />
      ) : isSent && !isLoading ? (
        <>
          <Box
            borderRadius="lg"
            m={{ base: 5, md: 10, lg: 6 }}
            p={{ base: 5, lg: 6 }}
            textAlign="center"
          >
            {" "}
            <Text
              py="5"
              px="3"
              maxW={"400"}
              my={"0"}
              mx={"auto"}
              textAlign="center"
              fontSize={"xl"}
            >
              Your mail was sent successfully
            </Text>
            <Link href="/contact">
              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Go Back
              </Button>
            </Link>
          </Box>
        </>
      ) : (
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 10, lg: 6 }}
          p={{ base: 5, lg: 6 }}
        >
          <Text
            py="5"
            px="3"
            maxW={"400"}
            my={"0"}
            mx={"auto"}
            textAlign="center"
            fontSize={"xl"}
          >
            We are always at your service. Feel free to leave us a message.
          </Text>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <Link href="mailto:freshspringsmed@gmail.com">
                      <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        fontSize="3xl"
                        icon={<MdEmail />}
                        _hover={{
                          bg: "blue.500",
                          color: useColorModeValue("white", "gray.700"),
                        }}
                        onClick={onCopy}
                        isRound
                      />
                    </Link>
                  </Tooltip>

                  <Link href="https://facebook.com/freshspringsmed">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsFacebook />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href="https://www.instagram.com/freshspringsmedicalservices/">
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      icon={<BsInstagram size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={handleSubmit}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
              <Stack direction="column" alignItems={"center"}>
                <IconButton
                  aria-label="Office Location"
                  variant="ghost"
                  size="lg"
                  icon={<MdLocationPin size="22px" />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                />

                <Text
                  px="10"
                  maxW={"400"}
                  my={"0"}
                  mx={"auto"}
                  textAlign="center"
                  fontWeight="600"
                  fontSize={"2xl"}
                >
                  Office Address
                </Text>
                <Text maxWidth="400px" margin="0 auto" textAlign="center">
                  No 3 Yawuri Street, off Jere street, Behind Rita Lori hotel.
                  Garki II, Abuja.
                </Text>
              </Stack>
            </VStack>
          </Box>
        </Box>
      )}
    </Flex>
  );
}
