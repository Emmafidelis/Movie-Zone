import YouTube from "react-youtube";
import useTrailers from "../hooks/useTrailers";

interface Props {
  id: number;
}

const DetailTrailer = ({ id }: Props) => {
  const { data: videos, error, isLoading } = useTrailers(id);

  if (isLoading) return null;

  if (error) throw error;

  const trailer = videos?.results?.find((video) => video.type === "Trailer");

  const opts = {
    width: "100%",
  };

  return <YouTube videoId={trailer?.key} opts={opts} title={trailer?.name} />;
};

export default DetailTrailer;
