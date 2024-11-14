import apiClient from "../services/api-client";
import { useQuery } from "react-query";
import { Movies } from "./useMovies";

interface FetchMovies {
  results: Movies[];
}

const useSearch = (query: string) => {
  const { data: searchResults, error } = useQuery<Movies[], Error>({
    queryKey: ["searching", query],
    queryFn: () =>
      apiClient
        .get<FetchMovies>("/search/multi", {
          params: { query },
        })
        .then((res) => res.data.results),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });

  return { searchResults, error };
};

export default useSearch;
