import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card height="580px" width="350px" borderRadius={20} overflow="hidden">
      <Image src={game.sample_cover.thumbnail_image} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList game={game} />
          <Score moby_score={game.moby_score} />
        </HStack>
        <Heading fontSize="2xl">{game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
