import { useDiscover } from "./useDiscover";
import Accordion from "Components/Accordion";
import FilterButton from "Components/FilterButton";
import DatePicker from "Components/DatePicker";
import MovieCard from "Components/MovieCard";
import {
  DiscoverContainer,
  Filters,
  Content,
  Label,
  DateContainer,
  Sort,
  FilterSection,
  Movies,
} from "./Discover.style";
import MultiRangeSlider from "Components/MultiRangeSlider";

const Discover = () => {
  const {
    discover,
    isLoadingDiscover,
    isErrorDiscover,
    fromDate,
    toDate,
    genres,
    certification,
    handleChangeSort,
    handleSelectFromDate,
    handleSelectToDate,
    handleClickGenre,
    handleClickCertification,
    handleSliderChange,
    handleSliderStop,
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
            <Label>Release Dates: </Label>
            <DateContainer>
              <span>From</span>
              <DatePicker
                fromDate={fromDate}
                toDate={toDate}
                handleSelectFromDate={handleSelectFromDate}
                isFrom
              />
            </DateContainer>
            <DateContainer>
              <span>To</span>
              <DatePicker
                fromDate={fromDate}
                toDate={toDate}
                handleSelectToDate={handleSelectToDate}
                isTo
              />
            </DateContainer>
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
            <Label>User Rating: </Label>
            <MultiRangeSlider
              min={0}
              max={10}
              onChange={({ min, max }) => handleSliderChange(min, max)}
              onAfterChange={handleSliderStop}
            />
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
