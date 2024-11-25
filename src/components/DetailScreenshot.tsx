import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

interface Props {
  id: number;
}

const DetailScreenshot = ({ id }: Props) => {
  const { data, error, isLoading } = useScreenshots(id);

  if (isLoading) return null;

  if (error) throw error;

  console.log(data?.backdrops);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spaceX={3} spaceY={3}>
      {data?.backdrops?.map((screenshot, index) => (
        <Image
          key={index}
          src={`${BASE_IMAGE_URL}${screenshot.file_path}`}
          alt="Screenshot"
        />
      ))}
    </SimpleGrid>
  );
};

export default DetailScreenshot;
