import { Image, CardBody, Heading, Card } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

interface Props {
  movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default MovieCard;
