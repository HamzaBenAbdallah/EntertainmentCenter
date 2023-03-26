import { SwiperSlide } from "swiper/react";
import { useMain } from "./useMain";
import Spinner from "Components/Spinner";
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
    trendingMovies,
    isLoadingTrendingMovies,
    isErrorTrendingMovies,
    topRatedMovies,
    isLoadingTopRatedMovies,
    isErrorTopRatedMovies,
    upcomingMovies,
    isLoadingUpcomingMovies,
    isErrorUpcomingMovies,
  } = useMain();

  return (
    <Wrapper>
      <CarouselContainer>
        {isLoadingCurrentlyPlayingMovies || isErrorCurrentlyPlayingMovies ? (
          <Spinner />
        ) : (
          <Carousel>
            {currentlyPlayingMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <CarouselCard movie={movie} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
      </CarouselContainer>

      <Section>
        <p>Trending</p>
        {isLoadingTrendingMovies || isErrorTrendingMovies ? (
          <Spinner />
        ) : (
          <ListContainer>
            {trendingMovies?.map((movie, index) => {
              return <MovieCard key={index} movie={movie} />;
            })}
          </ListContainer>
        )}
      </Section>

      <Section>
        <p>Top Rated</p>
        {isLoadingTopRatedMovies || isErrorTopRatedMovies ? (
          <Spinner />
        ) : (
          <ListContainer>
            {topRatedMovies?.map((movie, index) => {
              return <MovieCard key={index} movie={movie} />;
            })}
          </ListContainer>
        )}
      </Section>

      <Section>
        <p>Upcoming</p>
        {isLoadingUpcomingMovies || isErrorUpcomingMovies ? (
          <Spinner />
        ) : (
          <ListContainer>
            {upcomingMovies?.map((movie, index) => {
              return <MovieCard key={index} movie={movie} />;
            })}
          </ListContainer>
        )}
      </Section>
    </Wrapper>
  );
};

export default Main;
