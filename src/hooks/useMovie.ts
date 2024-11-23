import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Movies } from "../entities/Movies";

const apiClient = new APIClient<Movies>("discover/movie");

const useMovie = () => {
  const { data, error } = useQuery<FetchResponse<Movies>, Error>({
    queryKey: ["movies"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error };
};

export default useMovie;
