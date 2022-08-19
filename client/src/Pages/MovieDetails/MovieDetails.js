import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "Services/getCurrentUser";
import MovieCard from "Components/MovieCard";
import Actor from "Components/Actor";
import CircularProgress from "Components/CircularProgress";
import { useMovieDetails } from "./useMovieDetails";
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
  RoundButton,
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
import { FaBookmark, FaCheck, FaStar } from "react-icons/fa";

const CardDetails = () => {
  const [isWatchlist, setIsWatchlist] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const { id } = useParams();
  const { user } = getCurrentUser();
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    watchlist,
    watched,
    mutateWatchlist,
    mutateWatched,
  } = useMovieDetails(id);

  const handleAddMovieToWatchlist = () => {
    mutateWatchlist(movieDetails);
  };

  const handleAddMovieToWatched = () => {
    mutateWatched(movieDetails);
  };

  useEffect(() => {
    // Gray out the button if the movie is already in the watchlist
    watchlist?.forEach((movieId) => {
      if (movieId === movieDetails?.id) {
        setIsWatchlist(true);
      }
    });

    // Gray out the button if the movie is already in the watched list
    watched?.forEach((movieId) => {
      if (movieId === movieDetails?.id) {
        setIsWatched(true);
      }
    });
  }, [movieDetails, watchlist, isWatchlist, watched, isWatched]);

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
          <Poster
            src={BASE_IMAGE_URL + movieDetails.poster_path}
            alt={movieDetails.title}
          />
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
                    onClick={handleAddMovieToWatchlist}
                    disabled={isWatchlist}
                  >
                    <FaBookmark size="1.25rem" color="#032541" />
                  </RoundButton>
                  <RoundButton
                    onClick={handleAddMovieToWatched}
                    disabled={isWatched}
                  >
                    <FaCheck size="1.25rem" color="#032541" />
                  </RoundButton>
                  <RoundButton>
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
              {movieDetails.crew.map((crew) => {
                return (
                  <div key={crew.id}>
                    <Name> {crew.name}</Name>
                    <Job>{crew.job}</Job>
                  </div>
                );
              })}
            </Crew>
            {/* <Cast>Top Cast</Cast>
            <ActorGrid>
              {movieDetails.cast?.map((actor) => {
                return <Actor key={actor.id} actor={actor} />;
              })}
            </ActorGrid> */}
          </Overview>
        </Info>

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
