import { Badge } from "@chakra-ui/react";

interface Prop {
  moby_score: number;
}
const Score = ({ moby_score }: Prop) => {
  let color = moby_score > 7.5 ? "green" : moby_score > 6.0 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {moby_score}
    </Badge>
  );
};

export default Score;
