import { Box, Flex } from "../styled-system/jsx";

export const Team = () => {
  return (
    <Flex>
      <Box
        width="4rem"
        height="4rem"
        borderRadius="100%"
        background="grey"
        z-index="4"
        border="1px solid white"
      />
      <Box
        mx="-6px"
        width="4rem"
        height="4rem"
        borderRadius="100%"
        background="grey"
        z-index="3"
        border="1px solid white"
      />
      <Box
        mx="-6px"
        width="4rem"
        height="4rem"
        borderRadius="100%"
        background="grey"
        z-index="2"
        border="1px solid white"
      />
      <Box
        width="4rem"
        height="4rem"
        borderRadius="100%"
        background="grey"
        z-index="1"
        border="1px solid white"
      />
    </Flex>
  );
};
