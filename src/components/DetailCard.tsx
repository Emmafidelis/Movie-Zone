import { Image, CardBody, Heading, Card, Text, HStack } from "@chakra-ui/react";
import { Details } from "../entities/Details";
import ReleasedDate from "./ReleasedDate";
import { Link } from "react-router-dom";
import useGenre from "../hooks/useGenres";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

interface Props {
  detail: Details;
}

const DetailCard = ({ detail }: Props) => {
  const type = detail.media_type || "tv";
  const { genres } = useGenre();

  if (!genres?.genres) {
    return {} as Record<number, string>;
  }

  const genreMap = genres?.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {} as Record<number, string>);

  return (
    <Card.Root>
      <Image src={`${BASE_IMAGE_URL}${detail.poster_path}`} />
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={`/${type}/${detail.id}`}>
            {detail.title || detail.name}
          </Link>
        </Heading>
        <HStack>
          <ReleasedDate
            date={new Date(detail.release_date || detail.first_air_date)
              .getFullYear()
              .toString()}
          />
          {detail.genre_ids?.map((genre) => (
            <Text key={genre}>{genreMap[genre]}</Text>
          ))}
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default DetailCard;
