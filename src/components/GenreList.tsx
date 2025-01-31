import useGenres from "../hooks/useGenres";
import { Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import useMovieQueryStore from "../store";

const GenreList = () => {
  const { genres, error } = useGenres();
  const onSelectGenre = useMovieQueryStore((s) => s.setGenre);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Heading px={2}>Genres</Heading>
      <List.Root variant="plain" align="center" px={2}>
        {genres?.genres.map((genre) => (
          <ListItem key={genre.id}>
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
