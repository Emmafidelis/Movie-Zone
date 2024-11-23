import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Details } from "../entities/Details";

const useMovieDetail = (id?: number, type?: string) => {
  const endpoint = type === "tv" ? `/tv` : `/movie`;
  const apiClient = new APIClient<Details>(endpoint);

  return useQuery({
    queryKey: [type, id],
    queryFn: () => apiClient.get(id!),
    enabled: !!id,
  });
};

export default useMovieDetail;
