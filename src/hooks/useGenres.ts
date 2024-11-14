import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "react-query";

const apiClient = new APIClient<Genre>("genre/movie/list");

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });

  return { genres, error, isLoading };
};

export default useGenre;
