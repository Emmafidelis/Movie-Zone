import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem hideBelow="lg" area="aside">
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <HStack spaceX={5} pl={2.5} marginBottom={3}>
            <SortSelector />
          </HStack>
          <MovieGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
