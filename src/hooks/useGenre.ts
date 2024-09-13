import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
  genre_id: number;
  genre_name: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
