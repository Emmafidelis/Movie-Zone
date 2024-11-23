import { create } from "zustand";
import { Genre } from "./entities/Genre";

interface MovieQuery {
  genre?: Genre | null;
  sortOrder?: string;
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
  setGenre: (genre) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, genre } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ movieQuery: { ...store.movieQuery, sortOrder } })),
}));

export default useMovieQueryStore;
