import type { AppProps } from "next/app";
import { CharacterContextProvider } from "@/context/CharacterContext";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/home.scss";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test three js</title>
        <meta name="description" content="Test Three js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ height: "100vh" }}>
        <ChakraProvider>
          <CharacterContextProvider>
            <Component {...pageProps} />
          </CharacterContextProvider>
        </ChakraProvider>
      </div>
    </>
  );
}
