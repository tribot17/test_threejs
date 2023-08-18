import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Visiter <br />
            <Text as={"span"} color={"green.400"}>
              la gallerie
            </Text>
          </Heading>
          <Text color={"black"}>
            À {"l'interieur"} de la galerie vous trouverez 4 oeuvres {"d'art"},
            vous pourrez vous déplacer à {"l'interieur"} de celle-ci via les
            touches Z Q S D de votre clavier <br />
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Text as="b">Cliquer sur le boutton ci-dessous pour commencer</Text>
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              <Link href={"/gallerie"}>Entrer</Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
