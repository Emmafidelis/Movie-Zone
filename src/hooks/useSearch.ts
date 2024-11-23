import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "react-query";
import { Details } from "../entities/Details";

const apiClient = new APIClient<Details>("/search/multi");

const useSearch = (query?: string) => {
  return useQuery<FetchResponse<Details>, Error>({
    queryKey: ["searching", query],
    queryFn: () =>
      apiClient.getAll({
        params: { query },
      }),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};

export default useSearch;
