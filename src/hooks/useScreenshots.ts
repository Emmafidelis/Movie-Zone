import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/screenshot";

const useScreenshots = (id: number, type?: string) => {
  const endpoint = type === "tv" ? `/tv` : `/movie`;
  const apiClient = new APIClient<Screenshot>(`${endpoint}/${id}/images`);

  return useQuery({
    queryKey: ["screenshots", type, id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
