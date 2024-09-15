import { Button, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenre();

  return (
    <List>
      {genres.map((genre) => (
        <Text fontSize="large" key={genre.genre_id}>
          {genre.genre_name}
        </Text>
      ))}
    </List>
  );
};

export default GenreList;
