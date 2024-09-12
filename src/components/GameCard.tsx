import { Card, CardBody, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src="" />\<CardBody></CardBody>
    </Card>
  );
};

export default GameCard;
