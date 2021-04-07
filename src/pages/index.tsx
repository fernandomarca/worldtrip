import Head from "next/head";
import { useColorMode, Button, Input } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Button onClick={toggleColorMode}>
        Tema {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Input type="text" />
    </div>
  );
}
