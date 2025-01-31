import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image, Box, Text } from "@chakra-ui/react";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

interface Props {
  id: number;
  type?: string; // Add type prop
}

const DetailScreenshot = ({ id, type }: Props) => {
  const { data, error, isLoading } = useScreenshots(id, type);

  if (isLoading) return null;
  if (error) throw error;

  const screenshots = data?.backdrops?.slice(0, 6);

  if (!screenshots?.length) return (
    <Box my={4}>
      <Text fontSize="lg">No screenshots available</Text>
    </Box>
  );

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2} my={4}>
      {screenshots.map((screenshot) => (
        <Image
          key={screenshot.file_path}
          src={`${BASE_IMAGE_URL}${screenshot.file_path}`}
          alt="Media screenshot"
          borderRadius="md"
          boxShadow="lg"
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s"
          objectFit="cover"
          minH="200px"
        />
      ))}
    </SimpleGrid>
  );
};

export default DetailScreenshot;