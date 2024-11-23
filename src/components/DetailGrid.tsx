import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useDetails from "../hooks/useDetails";
import DetailCard from "./DetailCard";
import useSearch from "../hooks/useSearch";
import DetailCardSkeleton from "./DetailCardSkeleton";
import DetailCardContainer from "./DetailCardContainer";
import { Button } from "../component/ui/button";
import useMovieQueryStore from "../store";

const DetailGrid = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  const { data: searchResults } = useSearch(movieQuery.searchText);

  const {
    data: details,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useDetails();

  const displayMovies = movieQuery.searchText
    ? searchResults?.results || []
    : details?.pages?.flatMap((page) => page.results) || [];

  const skeletons = [1, 2, 3, 4, 5, 6];

  const filteredMovies = displayMovies.filter((movie) => {
    const matchGenre = movieQuery.genre
      ? movie.genre_ids.includes(movieQuery.genre.id)
      : true;

    return matchGenre;
  });

  return (
    <Box p={3}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spaceX={3}
        spaceY={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <DetailCardContainer key={skeleton}>
              <DetailCardSkeleton />
            </DetailCardContainer>
          ))}
        {filteredMovies?.map((movie) => (
          <DetailCardContainer key={movie.id}>
            <DetailCard detail={movie} />
          </DetailCardContainer>
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

export default DetailGrid;
