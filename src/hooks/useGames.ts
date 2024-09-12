import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

export interface Game {
  game_id: number;
  title: string;
  sample_cover: GameCover;
}
interface GameCover {
  image: string;
  platforms: string;
}
interface FetchGamesResponse {
  games: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games?format=normal", {
        signal: controller.signal,
      })
      .then((response) => setGames(response.data.games))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
