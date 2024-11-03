import apiClient from "../services/api-client";
import { useQuery } from "react-query";
import { Genre } from "./useGenres";

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
}

interface FetchMovies {
  page: number;
  results: Movies[];
}

const useMovies = (selectedGenre: Genre | null) => {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<Movies[], Error>({
    queryKey: ["movies"],
    queryFn: () =>
      apiClient
        .get<FetchMovies>("/trending/all/day", {
          params: {
            genres: selectedGenre?.id,
          },
        })
        .then((res) => res.data.results),
  });

  return { movies, error, isLoading };
};

export default useMovies;
