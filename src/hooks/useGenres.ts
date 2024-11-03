import apiClient from "../services/api-client";
import { useQuery } from "react-query";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  genres: Genre[];
}

const useGenre = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<GenreResponse>("genre/movie/list")
        .then((res) => res.data.genres),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });

  return { genres, error, isLoading };
};

export default useGenre;
