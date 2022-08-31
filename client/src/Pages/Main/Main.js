import { SwiperSlide } from "swiper/react";
import { useMain } from "./useMain";
import Carousel from "Components/Carousel";
import CarouselCard from "Components/CarouselCard";
import ListContainer from "Components/SideScroller";
import MovieCard from "Components/MovieCard";
import { Wrapper, CarouselContainer, Section } from "./Main.style";

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
      <CarouselContainer>
        <Carousel>
          {currentlyPlayingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CarouselCard movie={movie} />
            </SwiperSlide>
          ))}
        </Carousel>
      </CarouselContainer>

      <Section>
        <p>Trending</p>
        <ListContainer>
          {trendingMovies?.map((movie, index) => {
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

      <Section>
        <p>Upcoming</p>
        <ListContainer>
          {upcomingMovies?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </Section>
    </Wrapper>
  );
};

export default Main;
