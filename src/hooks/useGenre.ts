import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

export interface Genre {
  genre_id: number;
  genre_name: string;
}
interface FetchGenresResponse {
  genres: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((response) => {
        setGenres(response.data.genres);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenre;
