import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box borderRadius={20} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
