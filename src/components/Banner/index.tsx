import { Flex } from "@chakra-ui/react";

interface BannerProps {
  imageSource: string;
}

export function Banner({ imageSource }: BannerProps) {
  return (
    <Flex width="100%" maxHeight={500} mx="auto">
      <img src={imageSource} alt="banner" />
    </Flex>
  );
}
