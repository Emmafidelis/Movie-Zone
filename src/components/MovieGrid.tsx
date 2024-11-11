import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { movies, error } = useMovies(movieQuery);

  const filteredMovies = movies?.filter((movie) => {
    const matchGenre = movieQuery.genre
      ? movie.genre_ids.includes(movieQuery.genre.id)
      : movies;
    const matchDate = movieQuery.date
      ? movie.release_date === movieQuery.date.release_date
      : movies;

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
