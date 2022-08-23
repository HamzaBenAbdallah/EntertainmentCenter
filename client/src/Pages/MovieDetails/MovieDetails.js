import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "Services/getCurrentUser";
import { useMovieDetails } from "./useMovieDetails";
import { useFetchWatchlist } from "Hooks/useFetchWatchlist";
import { useFetchWatched } from "Hooks/useFetchWatched";
import { useAddToWatchlist } from "Hooks/useAddToWatchlist";
import { useAddToWatched } from "Hooks/useAddToWatched";
import MovieCard from "Components/MovieCard";
import Actor from "Components/ActorCard";
import CircularProgress from "Components/CircularProgress";
import RoundButton from "Components/RoundButton";
import NotFound from "Pictures/Image-not-found.jpg";
import { FaBookmark, FaCheck, FaStar } from "react-icons/fa";
import {
  Container,
  Backdrop,
  DetailsContainer,
  Info,
  Poster,
  Overview,
  Title,
  Details,
  User,
  Tagline,
  SecondaryTitle,
  Crew,
  Name,
  Job,
  Cast,
  ActorGrid,
  MovieGrid,
  Similar,
} from "./MovieDetails.style";

const CardDetails = () => {
  // const [isWatchlist, setIsWatchlist] = useState(false);
  // const [isWatched, setIsWatched] = useState(false);
  const { id } = useParams();
  const { user } = getCurrentUser();
  const { movieDetails, isLoadingMovieDetails, isErrorMovieDetails } =
    useMovieDetails(id);
  const { watchlistList } = useFetchWatchlist();
  const { watchedList } = useFetchWatched();
  const { mutateAddToWatchlist } = useAddToWatchlist(movieDetails);
  const { mutateAddToWatched } = useAddToWatched(movieDetails);

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const image = movieDetails?.poster_path
    ? `${BASE_IMAGE_URL}${movieDetails.poster_path}`
    : NotFound;

  // This is derived data no need to put it in the state
  const isWatchlist = watchlistList?.includes(movieDetails?.id);
  const isWatched = watchedList?.includes(movieDetails?.id);

  const handleAddMovieToWatchlist = () => {
    mutateAddToWatchlist(movieDetails);
  };

  const handleAddMovieToWatched = () => {
    mutateAddToWatched(movieDetails);
  };

  if (isLoadingMovieDetails) {
    return <div>Loading...</div>;
  }

  if (isErrorMovieDetails) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Backdrop background={BASE_IMAGE_URL + movieDetails.backdrop_path} />
      <DetailsContainer>
        <Info>
          <Poster src={image} alt={movieDetails.title} />
          <Overview>
            <Title>{movieDetails.title}</Title>
            <Details>
              <span>{movieDetails.release_date} </span>
              <span>-</span>
              <span>
                {movieDetails.genres?.map((genre, index) => {
                  return (
                    genre.name +
                    (index !== movieDetails.genres.length - 1 ? ", " : "")
                  );
                })}
              </span>
              <span>-</span>

              <span>{movieDetails.runtime} mn</span>
            </Details>
            <User>
              <CircularProgress
                value={Math.round(movieDetails.vote_average * 10)}
              />
              {user && (
                <>
                  <RoundButton
                    click={handleAddMovieToWatchlist}
                    disabled={isWatchlist}
                    text="Add to watchlist"
                  >
                    <FaBookmark size="1.25rem" color="#032541" />
                  </RoundButton>
                  <RoundButton
                    click={handleAddMovieToWatched}
                    disabled={isWatched}
                    text="Add to watched"
                  >
                    <FaCheck size="1.25rem" color="#032541" />
                  </RoundButton>
                  <RoundButton text="Rate">
                    <FaStar size="1.25rem" color="#032541" />
                  </RoundButton>
                </>
              )}
            </User>
            <Tagline>{movieDetails.tagline}</Tagline>
            <SecondaryTitle>Overview</SecondaryTitle>
            <p>{movieDetails.overview}</p>
            <Crew>
              <div>
                <Name>{movieDetails.director}</Name>
                <Job>Director</Job>
              </div>
              {movieDetails.crew.map((crew, index) => {
                return (
                  <div key={index}>
                    <Name> {crew.name}</Name>
                    <Job>{crew.job}</Job>
                  </div>
                );
              })}
            </Crew>
          </Overview>
        </Info>
        <Cast>Top Cast</Cast>
        <ActorGrid>
          {movieDetails.cast?.map((actor) => {
            return <Actor key={actor.id} actor={actor} />;
          })}
        </ActorGrid>
        <Similar>
          <span>Similar</span>
          <MovieGrid>
            {movieDetails.related.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </MovieGrid>
        </Similar>
      </DetailsContainer>
    </Container>
  );
};

export default CardDetails;
