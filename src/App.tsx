import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Game } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { Platforms } from "./hooks/usePlatforms";
import GameHeading from "./components/GameHeading";

interface Props {
  game: Game;
  genre: Genre;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
}
function App({ game, genre }: Props) {
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading selectedGenre={selectedGenre} />
        </Box>
        <HStack paddingX={2} paddingY={5} spacing={2}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
export default App;
