import { Button, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreListSkeleton from "./GenreListSkeleton";
import _ from "lodash";

const GenreList = () => {
  const { genres, isLoading, error } = useGenre();
  const skeletons = _.range(50);
  if (error) return null;
  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <Text>{<GenreListSkeleton key={skeleton} />}</Text>
        ))}
      <List>
        {genres.map((genre) => (
          <Text fontSize="large" key={genre.genre_id}>
            {genre.genre_name}
          </Text>
        ))}
      </List>
    </>
  );
};

export default GenreList;
