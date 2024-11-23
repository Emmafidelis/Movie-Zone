import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { Spinner } from "@chakra-ui/react/spinner";
import { Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const DetailPage = () => {
  const { type, movie_id } = useParams();

  const id = movie_id ? parseInt(movie_id) : undefined;

  const { data: details, isLoading, error } = useMovieDetail(id, type);

  if (isLoading) return <Spinner />;
  if (error || !details) throw error;

  return (
    <>
      <Heading>{details.title || details.name}</Heading>
      <ExpandableText>{details.overview}</ExpandableText>
    </>
  );
};

export default DetailPage;
