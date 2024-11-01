import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Movies {
  id: number;
  title: string;
}

interface FetchMovies {
  page: number;
  results: Movies[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient
      .get<FetchMovies>("/trending/all/day")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { movies, error };
};

export default useMovies;
