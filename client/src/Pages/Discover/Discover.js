import { useDiscover } from "./useDiscover";
import Accordion from "Components/Accordion";
import FilterButton from "Components/FilterButton";
import MovieCard from "Components/MovieCard";
import {
  DiscoverContainer,
  Filters,
  Content,
  Label,
  Sort,
  FilterSection,
  Movies,
} from "./Discover.style";

const Discover = () => {
  const {
    discover,
    isLoadingDiscover,
    isErrorDiscover,
    genres,
    certification,
    handleChangeSort,
    handleClickGenre,
    handleClickCertification,
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
            <Sort>
              <select onChange={handleChangeSort}>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_count.desc">Rating Descending</option>
                <option value="vote_count.asc">Rating Ascending</option>
                <option value="release_date.desc">
                  Release Date Descending
                </option>
                <option value="release_date.asc">Release Date Ascending</option>
              </select>
            </Sort>
          </Content>
        </Accordion>
        <Accordion title="Filters">
          <Content>
            <Label>Genre: </Label>
            <FilterSection>
              {genres?.map((genre) => (
                <div key={genre.id} onClick={() => handleClickGenre(genre.id)}>
                  <FilterButton>{genre.name}</FilterButton>
                </div>
              ))}
            </FilterSection>
            <Label>Certification: </Label>
            <FilterSection>
              {certification?.map((cert) => (
                <div
                  key={cert.order}
                  onClick={() => handleClickCertification(cert.certification)}
                >
                  <FilterButton>{cert.certification}</FilterButton>
                </div>
              ))}
            </FilterSection>
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
