import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { generateKeyPair } from "node:crypto";
import ReactCountryFlag from "react-country-flag";

interface CardCitiesProps {
  country: string;
  city: string;
  imageSource: string;
  countryCode: string;
}

export function CardCities({
  country,
  city,
  imageSource,
  countryCode,
}: CardCitiesProps) {
  const textColorCity = useColorModeValue("gray.900", "gray.50");
  const textColorCountry = useColorModeValue("gray.750", "gray.200");

  return (
    <Flex
      height="279px"
      w="256px"
      direction="column"
      border="1px solid rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Box>
        <img src={imageSource} alt="londres" />
      </Box>
      <Flex align="center" justify="space-between" my="5" px="6">
        <Box>
          <Text fontSize="20" color={textColorCity} fontWeight="600">
            {city}
          </Text>
          <Text color={textColorCountry} fontWeight="600">
            {country}
          </Text>
        </Box>
        <Box w="30px" h="30px" textAlign="center" borderRadius="full">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
            }}
            title={country}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
