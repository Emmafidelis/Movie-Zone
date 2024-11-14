import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Discover {
  id: number;
  release_date: string;
}

const apiClient = new APIClient<Discover>("discover/movie");

const useDiscover = () => {
  const { data, error } = useQuery<FetchResponse<Discover>, Error>({
    queryKey: ["discover"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error };
};

export default useDiscover;
