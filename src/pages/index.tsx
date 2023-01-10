import { Box } from "@chakra-ui/react";
import { HorizontalCardMini } from "../components/horizontal-card-mini/HorizontalCardMini";
import { HorizontalCard } from "../components/horizontal-card/HorizontalCard";
import { VerticalCard } from "../components/vertical-card/VerticalCard";

export default function Home() {
  return (
    <Box
      bg="#0F0D13"
      w="100%"
      h={"100vh"}
      p={10}
      color="white"
      display={"flex"}
      justifyContent="center"
      alignContent={"center"}
      alignItems={"center"}
    >
      <Box marginRight={2}>
        <VerticalCard />
      </Box>
      <Box>
        <Box marginBottom={2}>
          <HorizontalCard />
        </Box>
        <Box>
          <HorizontalCardMini />
        </Box>
      </Box>
    </Box>
  );
}
