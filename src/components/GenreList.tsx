import useGenres, { Genre } from "../hooks/useGenres";
import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import { Button } from "../component/ui/button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, error } = useGenres();

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
