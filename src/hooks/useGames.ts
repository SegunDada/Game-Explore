import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

export interface Game {
  game_id: number;
  title: string;
}

interface FetchGamesResponse {
  results: Game[];
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
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
