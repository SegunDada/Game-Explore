import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGames";

interface Props {
  onSelectGenre?: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GameHeading = ({ selectedGenre }: Props) => {
  const heading = `${selectedGenre?.genre_name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
