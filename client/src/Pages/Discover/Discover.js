import { useDiscover } from "./useDiscover";
import Accordion from "Components/Accordion";
import GenreButton from "Components/GenreButton";
import MovieCard from "Components/MovieCard";
import {
  DiscoverContainer,
  Filters,
  Content,
  Label,
  Genre,
  Movies,
} from "./Discover.style";

const Discover = () => {
  const {
    handleClickGenre,
    genres,
    isLoadingGenres,
    isErrorGenres,
    discover,
    isLoadingDiscover,
    isErrorDiscover,
  } = useDiscover();

  if (isLoadingDiscover) {
    return <div>Loading...</div>;
  }

  if (isErrorDiscover) {
    return <div>Error...</div>;
  }

  return (
    <DiscoverContainer>
      <Filters>
        <Accordion title="Sort">
          <Content>
            <select>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="vote_average.desc">Rating Descending</option>
              <option value="vote_average.asc">Rating Ascending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
            </select>
          </Content>
        </Accordion>
        <Accordion title="Filters">
          <Content>
            <Label>Genre: </Label>
            <Genre>
              {genres?.map((genre) => (
                <div key={genre.id} onClick={() => handleClickGenre(genre.id)}>
                  <GenreButton>{genre.name}</GenreButton>
                </div>
              ))}
            </Genre>
          </Content>
        </Accordion>
        <Accordion title="Providers"></Accordion>
      </Filters>
      <Movies>
        {discover.length > 0 ? (
          discover.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div>No movies found</div>
        )}
      </Movies>
    </DiscoverContainer>
  );
};

export default Discover;
