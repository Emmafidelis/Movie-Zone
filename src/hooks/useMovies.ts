import { useInfiniteQuery } from "react-query";
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
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchResponse<Movies>, Error>({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: movieQuery.genre?.id,
          dates: movieQuery.date?.id,
          page: pageParam,
          sort_by: movieQuery.sortOrder,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page + 1 ? allPages.length + 1 : undefined;
    },
  });

  return {
    movies,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export default useMovies;
