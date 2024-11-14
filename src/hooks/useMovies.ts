import { useQuery } from "react-query";
import { MovieQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Movies>("/trending/all/day");

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
}

const useMovies = (movieQuery: MovieQuery) => {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<FetchResponse<Movies>, Error>({
    queryKey: ["movies"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: movieQuery.genre?.id,
          dates: movieQuery.date?.id,
          sort_by: movieQuery.sortOrder,
        },
      }),
  });

  return { movies, error, isLoading };
};

export default useMovies;
