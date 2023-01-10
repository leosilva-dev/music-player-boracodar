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

export const HorizontalCardMini = () => {
  return (
    <Box
      background={"#2A2141"}
      w={"90"}
      p={5}
      borderRadius={10}
      display="flex"
      alignItems="center"
      alignContent={"center"}
      justifyContent="center"
      border={"white"}
    >
      <VStack spacing={5} paddingX={5}>
        <HStack>
          <Box
            w="20"
            h="20"
            borderRadius={10}
            overflow={"hidden"}
            boxShadow="dark-lg"
          >
            <Image src={AlbumCover} alt="Picture of the author" />
          </Box>
          <Box w={"40"} paddingLeft={5}>
            <Text as="b" color={"#E1E1E6"}>
              Highway to hell
            </Text>
            <Text fontSize={"sm"} color={"#E1E1E6"}>
              AC/DC
            </Text>
          </Box>
        </HStack>
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
      </VStack>
    </Box>
  );
};
