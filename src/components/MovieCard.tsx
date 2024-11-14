import { Image, CardBody, Heading, Card, Text, HStack } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";
import ReleasedDate from "./ReleasedDate";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

interface Props {
  movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root>
      <Image src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <HStack>
          <ReleasedDate
            date={new Date(movie.release_date).getFullYear().toString()}
          />
          {movie.genre_ids?.map((genre) => (
            <Text key={genre}>{genre}</Text>
          ))}
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default MovieCard;
