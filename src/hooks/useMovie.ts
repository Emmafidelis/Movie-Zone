import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const apiClient = new APIClient<Movie>("discover/movie");

const useMovie = () => {
  const { data, error } = useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["discover"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return { data, error };
};

export default useMovie;
