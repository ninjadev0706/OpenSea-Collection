import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar, Greet, Footer } from "../component";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>BAYC NFT</title>
        <meta name="description" content="Web3.0 " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Greet />
      <Footer />
    </Box>
  );
}
