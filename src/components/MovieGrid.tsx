import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import useSearch from "../hooks/useSearch";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { searchResults } = useSearch(movieQuery.searchText);

  const { movies, error } = useMovies(movieQuery);

  const displayMovies = movieQuery.searchText ? searchResults : movies;

  const filteredMovies = displayMovies?.filter((movie) => {
    const matchGenre = movieQuery.genre
      ? movie.genre_ids.includes(movieQuery.genre.id)
      : true;

    const matchDate = movieQuery.date
      ? movie.release_date === movieQuery.date.release_date
      : true;

    return matchGenre && matchDate;
  });

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spaceX={5}
        spaceY={5}
        p={3}
      >
        {filteredMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
