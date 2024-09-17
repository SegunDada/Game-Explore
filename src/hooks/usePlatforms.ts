import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Game {
  game_id: number;
  title: string;
  sample_cover: GameCover;
  moby_score: number;
  genre: Genre;
  platforms: Platforms;
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
interface FetchPlatformsResponse {
  platforms: Platforms[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platforms[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchPlatformsResponse>("/platforms", {
        signal: controller.signal,
      })
      .then((response) => {
        setPlatforms(response.data.platforms);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
