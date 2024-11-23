import { useInfiniteQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";
import { Details } from "../entities/Details";

const apiClient = new APIClient<Details>("/trending/all/day");

const useDetails = () => {
  const query = useMovieQueryStore((s) => s.movieQuery);
  return useInfiniteQuery<FetchResponse<Details>, Error>({
    queryKey: ["details", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: query.genre?.id,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page + 1 ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
};

export default useDetails;
