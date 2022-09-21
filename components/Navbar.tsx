import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Services", url: "/services" },
  { id: 4, text: "FAQs", url: "/faq" },
  { id: 5, text: "Contact Us", url: "/contact" },
];

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={`${url}`}
    style={{ fontWeight: "600" }}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        px={4}
        position="fixed"
        width={"100%"}
        zIndex="1000"
        bg={useColorModeValue("white", "#171923")}
        color={useColorModeValue("gray.700", "gray.200")}
        borderBottom="2px solid #edf2f7"
        borderTop="2px solid #edf2f7"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW={"7xl"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} maxW={"7xl"}>
            <Link href="/">
              <Box
                paddingLeft={{ xl: "2em", lg: "2em", base: 0, md: "1em" }}
                fontWeight="600"
                display="flex"
                alignItems="center"
                textTransform={"uppercase"}
              >
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src="/logo.jpg"
                  objectFit={"cover"}
                  height="30px"
                  width="30px"
                  style={{ marginRight: "0.6em" }}
                />
                Fresh Springs
              </Box>
            </Link>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.id} url={`${link.url}`}>
                  {link.text}
                </NavLink>
              ))}
              <Button
                display={{ base: "flex", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                href={"/schedule"}
                _hover={{
                  bg: "green.300",
                }}
                as={"a"}
              >
                Schedule Appointment
              </Button>
            </HStack>

            <Button onClick={toggleColorMode} marginLeft="1.5em">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id} url={`${link.url}`}>
                  {link.text}
                </NavLink>
              ))}
              <Button
                display={{ base: "inline-flex", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                _hover={{
                  bg: "green.300",
                }}
                as={"a"}
                href={"/schedule"}
              >
                Schedule Appointment
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
