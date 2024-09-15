import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card height="550px" width="300px" borderRadius={20} overflow="hidden">
      <Image src={game.sample_cover.thumbnail_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList game={game} />
          <Score moby_score={game.moby_score} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
