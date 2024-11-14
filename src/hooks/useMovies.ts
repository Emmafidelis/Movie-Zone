import apiClient from "../services/api-client";
import { useQuery } from "react-query";
import { MovieQuery } from "../App";

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

const useMovies = (movieQuery: MovieQuery) => {
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
            genres: movieQuery.genre?.id,
            dates: movieQuery.date?.id,
            sort_by: movieQuery.sortOrder,
          },
        })
        .then((res) => res.data.results),
  });

  return { movies, error, isLoading };
};

export default useMovies;
