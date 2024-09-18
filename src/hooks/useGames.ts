import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { StepIndicatorProps } from "@chakra-ui/react";

export interface Game {
  game_id: number;
  title: string;
  sample_cover: GameCover;
  moby_score: number;
  genre: Genre;
  platforms: Platforms;
  moby_url: string;
}

export interface Platforms {
  platform_id: number;
  platform_name: string;
}

export interface Genre {
  genre_id: number;
  genre_name: string;
}

export interface GameCover {
  thumbnail_image: string;
  platforms: string;
  image: string;
}
interface FetchGamesResponse {
  games: Game[];
}

const useGames = (
  selectedGenre: Genre | null,
  requestConfig?: AxiosRequestConfig
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games?format=normal", {
        signal: controller.signal,
        ...requestConfig,
        params: { genres: selectedGenre?.genre_id },
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
  }, [selectedGenre?.genre_id]);

  return { games, error, isLoading };
};

export default useGames;
