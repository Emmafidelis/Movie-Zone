import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import useSearch from "../hooks/useSearch";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { Button } from "../component/ui/button";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { searchResults } = useSearch(movieQuery.searchText);

  const {
    movies,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(movieQuery);

  const displayMovies = movieQuery.searchText
    ? searchResults?.results || []
    : movies?.pages?.flatMap((page) => page.results) || [];

  const skeletons = [1, 2, 3, 4, 5, 6];

  const filteredMovies = displayMovies.filter((movie) => {
    const matchGenre = movieQuery.genre
      ? movie.genre_ids.includes(movieQuery.genre.id)
      : true;

    const matchDate = movieQuery.date
      ? movie.release_date === movieQuery.date.release_date
      : true;

    return matchGenre && matchDate;
  });

  return (
    <Box p={3}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spaceX={1}
        spaceY={1}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {filteredMovies?.map((movie) => (
          <MovieCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading.." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default MovieGrid;
