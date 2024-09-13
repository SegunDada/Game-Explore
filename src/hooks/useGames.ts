import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

export interface Game {
  game_id: number;
  title: string;
  sample_cover: GameCover;
  moby_score: number;
}
interface GameCover {
  thumbnail_image: string;
  platforms: string;
}
interface FetchGamesResponse {
  games: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games?format=normal", {
        signal: controller.signal,
      })
      .then((response) => {
        setGames(response.data.games);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
