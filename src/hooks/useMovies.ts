import { useInfiniteQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";

const apiClient = new APIClient<Movies>("/trending/all/day");

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
}

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  return useInfiniteQuery<FetchResponse<Movies>, Error>({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: movieQuery.genre?.id,
          page: pageParam,
          sort_by: movieQuery.sortOrder,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page + 1 ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
};

export default useMovies;
