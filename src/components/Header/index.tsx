import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();
  const iconColor = useColorModeValue("gray.700", " gray.50");
  return (
    <Flex px="2" py="7" height={100} align="center">
      <Flex mr="auto">
        {asPath.startsWith("/continentes") && (
          // <Link>Tema {colorMode === "light" ? "Dark" : "Light"}</Link>
          <Link href="/">
            <ChevronLeftIcon w="8" h="8" color={iconColor} />
          </Link>
        )}
      </Flex>

      <Flex mx="auto">
        {colorMode === "light" ? (
          <img src="/logo.svg" alt="logo" />
        ) : (
          <img src="/logo2.svg" alt="logo" />
        )}
      </Flex>

      <Flex ml="auto">
        {asPath === "/" && (
          <Button onClick={toggleColorMode} size="sm">
            Tema {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
