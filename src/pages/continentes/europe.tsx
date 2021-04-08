import {
  Text,
  Box,
  Flex,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { CardCities } from "../../components/CardCitys";

export default function Europe() {
  const textColor = useColorModeValue("gray.900", "gray.50");

  return (
    <>
      <Flex mx="auto" direction="column" maxWidth={1440}>
        <Header />
        <Banner imageSource="/bannerEurope.svg" />
        <Flex justifyContent="space-between" w="100%" px="4">
          <Box my="20" maxWidth="600">
            <Text textAlign="justify" color={textColor}>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <HStack my="30" ml="auto" spacing="10">
            <Box>
              <Text fontSize="5xl" color="yellow.500">
                50
              </Text>
              <Text fontSize="2xl" color={textColor}>
                países
              </Text>
            </Box>
            <Box>
              <Text fontSize="5xl" color="yellow.500">
                60
              </Text>
              <Text fontSize="2xl" color={textColor}>
                línguas
              </Text>
            </Box>
            <Box>
              <Text fontSize="5xl" color="yellow.500" textAlign="center">
                27
              </Text>
              <Flex alignItems="center">
                <Text fontSize="2xl" color={textColor}>
                  cidades +100
                </Text>
                <InfoOutlineIcon w="5" h="5" ml="1" />
              </Flex>
            </Box>
          </HStack>
        </Flex>

        <Text mb="10" fontSize="4xl" color={textColor} px="4">
          Cidades +100
        </Text>
      </Flex>

      <SimpleGrid
        columns={4}
        spacing={40}
        maxWidth={1440}
        mx="auto"
        mb="140"
        px="4"
      >
        <CardCities
          country="Reino Unido"
          city="Londres"
          imageSource="/londres.svg"
          countryCode="GB"
        />
        <CardCities
          country="París"
          city="França"
          imageSource="/paris.svg"
          countryCode="FR"
        />
        <CardCities
          country="Itália"
          city="Roma"
          imageSource="/roma.svg"
          countryCode="IT"
        />
        <CardCities
          country="República Tcheca"
          city="Praga"
          imageSource="/praga.svg"
          countryCode="CZ"
        />
        <CardCities
          country="Holanda"
          city="Amsterdã"
          imageSource="/holanda.svg"
          countryCode="NL"
        />
      </SimpleGrid>
    </>
  );
}
