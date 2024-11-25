import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import Trailer from "../entities/trailers";

const useTrailers = (id: number, type?: string) => {
  const endpoint = type === "tv" ? `/tv` : `/movie`;
  const apiClient = new APIClient<Trailer>(`${endpoint}/${id}/videos`);

  return useQuery({
    queryKey: [type, id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
