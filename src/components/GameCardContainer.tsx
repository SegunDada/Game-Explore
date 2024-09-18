import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box paddingY={4} spacing = {5} borderRadius={20} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
