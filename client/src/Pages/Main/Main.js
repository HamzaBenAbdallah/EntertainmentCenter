import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useMain } from "./useMain";
import MovieCard from "Components/MovieCard";
import CarouselCard from "Components/CarouselCard";
import ListContainer from "Components/SideScroller";
import { Wrapper, Carousel, Section } from "./Main.style";

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
      <Carousel>
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
        >
          {currentlyPlayingMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <CarouselCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>

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
