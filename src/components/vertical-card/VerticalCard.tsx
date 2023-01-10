import {
  Box,
  Flex,
  HStack,
  Progress,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import AlbumCover from "../../../public/capa-acdc.jpg";
import { Play, Rewind, FastForward } from "phosphor-react";

export const VerticalCard = () => {
  return (
    <Box
      background={"#2A2141"}
      w={"60"}
      p={5}
      borderRadius={10}
      display="flex"
      alignItems="center"
      alignContent={"center"}
      justifyContent="center"
    >
      <VStack spacing={5} paddingY={3}>
        <Box
          w="40"
          h="40"
          borderRadius={10}
          overflow={"hidden"}
          boxShadow="dark-lg"
        >
          <Image src={AlbumCover} alt="Picture of the author" />
        </Box>
        <Box w={"40"}>
          <Text textAlign={"center"} as="b" color={"#E1E1E6"}>
            Highway to hell
          </Text>
          <Text fontSize={"sm"} color={"#E1E1E6"}>
            AC/DC
          </Text>
        </Box>
        <Box>
          <Flex>
            <HStack w={"40"} spacing={"5"}>
              <Box _hover={{ cursor: "pointer" }}>
                <Rewind size={24} weight="fill" />
              </Box>
              <Spacer />
              <Box _hover={{ cursor: "pointer" }}>
                <Play size={24} weight="fill" />
              </Box>
              <Spacer />
              <Box _hover={{ cursor: "pointer" }}>
                <FastForward size={24} weight="fill" />
              </Box>
            </HStack>
          </Flex>
        </Box>
        <Box w={"40"}>
          <Box _hover={{ cursor: "pointer" }}>
            <Progress value={90} size="xs" colorScheme="gray" />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
            <Text fontSize={"xs"} color={"#C4C4CC"}>
              03:20
            </Text>
            <Text fontSize={"xs"} color={"#C4C4CC"}>
              00:12
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
