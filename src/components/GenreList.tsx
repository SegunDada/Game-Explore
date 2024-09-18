import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";
import _ from "lodash";
import { Genre } from "../hooks/useGames";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  const skeletons = _.range(50);
  if (error) return null;
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.genre_id}>
            <HStack paddingY={2}>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize={"larger"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={
                  genre.genre_id === selectedGenre?.genre_id ? "bold" : "normal"
                }
              >
                {genre.genre_name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
