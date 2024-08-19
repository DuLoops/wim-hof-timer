import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Wim Hof Timer</title>
      <link rel="icon" href="/logo.svg" />
      </Head>
    <Component {...pageProps} />
  </ChakraProvider>
  );
}
