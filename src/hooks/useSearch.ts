import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "react-query";
import { Movies } from "./useMovies";

const apiClient = new APIClient<Movies>("/search/multi");

const useSearch = (query: string) => {
  const { data: searchResults, error } = useQuery<FetchResponse<Movies>, Error>(
    {
      queryKey: ["searching", query],
      queryFn: () =>
        apiClient.getAll({
          params: { query },
        }),
      enabled: !!query,
      staleTime: 1000 * 60 * 5,
    }
  );

  return { searchResults, error };
};

export default useSearch;
