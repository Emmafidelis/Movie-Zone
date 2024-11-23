import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "react-query";
import { Genre } from "../entities/Genre";

const useGenre = (type?: string) => {
  const endpoint = type === "tv" ? "/genre/tv/list" : "/genre/movie/list";
  const apiClient = new APIClient<Genre>(endpoint);

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
