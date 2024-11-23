import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import SortSelector from "../components/SortSelector";
import DetailGrid from "../components/DetailGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
      >
        <GridItem hideBelow="lg" area="aside">
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <HStack spaceX={5} pl={2.5} marginBottom={3}>
            <SortSelector />
          </HStack>
          <DetailGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
