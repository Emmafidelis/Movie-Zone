import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import ReleasedDate from "./components/ReleaseDate";
import { Discover } from "./hooks/useDiscover";
import SortSelector from "./components/SortSelector";

export interface MovieQuery {
  genre: Genre | null;
  date: Discover | null;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

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
          <GenreList
            onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
          />
        </GridItem>
        <GridItem area="main">
          <HStack spaceX={5} pl={2.5} marginBottom={3}>
            <ReleasedDate
              onSelectedDate={(date) => setMovieQuery({ ...movieQuery, date })}
            />
            <SortSelector />
          </HStack>
          <MovieGrid movieQuery={movieQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
