import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  page: number;
  results: T[];
  genres: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    key: "f44216f87e4eef4e31e00dcc3facf68b",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDQyMTZmODdlNGVlZjRlMzFlMDBkY2MzZmFjZjY4YiIsIm5iZiI6MTczMDQ3NjE0NC4xNTExMjUsInN1YiI6IjY3MjRkMjUyYzFjNzQzM2ViYmM0MmM4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imk2NZfeAncENH6YshpX7IG2eCz-5A84D7VbyULqYGY",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
