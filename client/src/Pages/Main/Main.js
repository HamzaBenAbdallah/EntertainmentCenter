import { useMain } from "./useMain";
import MovieCard from "Components/MovieCard";
import ListContainer from "Components/SideScroller";
import { Wrapper, Section } from "./Main.style";

const Main = () => {
  const {
    currentlyPlayingMovies,
    isLoadingCurrentlyPlayingMovies,
    isErrorCurrentlyPlayingMovies,
    popularMovies,
    isLoadingPopularMovies,
    isErrorPopularMovies,
    upcomingMovies,
    isLoadingUpcomingMovies,
    isErrorUpcomingMovies,
    trendingMovies,
    isLoadingTrendingMovies,
    isErrorTrendingMovies,
    topRatedMovies,
    isLoadingTopRatedMovies,
    isErrorTopRatedMovies,
  } = useMain();

  if (isLoadingTrendingMovies) {
    return <div>Loading...</div>;
  }

  if (isErrorTrendingMovies) {
    return <div>Error...</div>;
  }

  return (
    <Wrapper>
      <Section>
        <p>Currently Playing</p>
        <ListContainer>
          {currentlyPlayingMovies?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </Section>

      <Section>
        <p>Trending</p>
        <ListContainer>
          {trendingMovies?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </Section>
      <Section>
        <p>Upcoming</p>
        <ListContainer>
          {upcomingMovies?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </Section>
      <Section>
        <p>Top Rated</p>
        <ListContainer>
          {topRatedMovies?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </Section>
    </Wrapper>
  );
};

export default Main;
