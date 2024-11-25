import useTrailers from "../hooks/useTrailers";

interface Props {
  id: number;
}

const DetailTrailer = ({ id }: Props) => {
  const { data: videos, error, isLoading } = useTrailers(id);

  if (isLoading) return null;

  if (error) throw error;

  const trailer = videos?.results?.find((video) => video.type === "Trailer");

  return (
    <iframe
      width="100%"
      height="400px"
      src={`https://www.youtube.com/embed/${trailer?.key}`}
      title={trailer?.name}
      allow="fullscreen; encrypted-media"
    />
  );
};

export default DetailTrailer;
