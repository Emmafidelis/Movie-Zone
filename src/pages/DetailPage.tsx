import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { Spinner } from "@chakra-ui/react/spinner";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DetailTrailer from "../components/DetailTrailer";
import DetailScreenshot from "../components/DetailScreenshot";

const DetailPage = () => {
  const { type, movie_id } = useParams();

  const id = movie_id ? parseInt(movie_id) : undefined;

  const { data: details, isLoading, error } = useMovieDetail(id, type);

  if (isLoading) return <Spinner />;
  if (error || !details) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading>{details.title || details?.name}</Heading>
        <ExpandableText>{details.overview}</ExpandableText>
      </Box>
      <Box>
        <DetailScreenshot id={details.id} />
        <DetailTrailer id={details.id} />
      </Box>
    </SimpleGrid>
  );
};

export default DetailPage;
