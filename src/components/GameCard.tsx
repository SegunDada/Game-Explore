import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link href={game.moby_url} isExternal target="_blank">
      <Card
        _hover={{ transform: "underline" }}
        height="650px"
        width="350px"
        borderRadius={20}
        overflow="hidden"
      >
        <Image src={game.sample_cover.thumbnail_image} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList game={game} />
            <Score moby_score={game.moby_score} />
          </HStack>
          <Heading fontSize="2xl">{game.title}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
