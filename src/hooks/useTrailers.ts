import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import Trailer from "../entities/trailers";

const useTrailers = (id: number, type?: string) => {
  // Dynamically set the base endpoint for movies or TV shows
  const endpoint = type === "tv" ? `/tv/${id}/videos` : `/movie/${id}/videos`;
  const apiClient = new APIClient<Trailer>(endpoint);

  return useQuery({
    queryKey: ["videos", type, id], // Unique key per type/id
    queryFn: apiClient.getAll,
    enabled: !!id, // Only fetch if ID exists
  });
};

export default useTrailers;