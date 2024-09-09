import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { Text } from "@chakra-ui/react";

interface Game {
  game_id: number;
  title: string;
}

interface FetchGamesResponse {
  games: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games?format=brief")
      .then((response) => setGames(response.data.games))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
