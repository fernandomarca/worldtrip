import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

// install Swiper modules

export default function Home() {
  return (
    <>
      <Header />

      <Flex maxWidth={1440} direction="column" align="center" mx="auto">
        <Head>
          <title>WorldTrip</title>
        </Head>

        <Banner imageSource="/banner.svg" />
        <Box my="20" mx={140}>
          <img src="/travel_types.svg" alt="travel types" />
        </Box>
        <hr style={{ border: "2px solid", width: "22.5px" }}></hr>
        <Heading size="xl" textAlign="center" my="57">
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
        <Slider />
      </Flex>
    </>
  );
}
