import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "Services/getCurrentUser";
import MovieCard from "Components/MovieCard";
import Actor from "Components/Actor";
import { useMovieDetails } from "./useMovieDetails";
import {
  Container,
  Backdrop,
  DetailsContainer,
  TitleContainer,
  Title,
  Tagline,
  Genre,
  Details,
  Info,
  Poster,
  Overview,
  Similar,
  MovieGrid,
  ActorGrid,
  Cast,
  Buttons,
  Button,
} from "./MovieDetails.style";

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
    watchlistIds,
    watchedIds,
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
    watchlistIds?.map((movieId) => {
      if (movieId === movieDetails?.id) {
        setIsWatchlist(true);
      }
    });
  }, [movieDetails, watchlistIds, isWatchlist]);

  useEffect(() => {
    watchedIds?.map((movieId) => {
      if (movieId === movieDetails?.id) {
        setIsWatched(true);
      }
      console.log(watchedIds);
    });
  }, [movieDetails, watchedIds, isWatched]);

  if (isLoadingMovieDetails) {
    return <div>Loading...</div>;
  }

  if (isErrorMovieDetails) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Backdrop
        src={BASE_IMAGE_URL + movieDetails.backdrop_path}
        alt={movieDetails.title}
      />
      <DetailsContainer>
        <TitleContainer>
          <Title>{movieDetails.title}</Title>
          <Tagline>{movieDetails.tagline}</Tagline>
        </TitleContainer>
        <Details>
          <Info>
            <Poster
              src={BASE_IMAGE_URL + movieDetails.poster_path}
              alt={movieDetails.title}
            />
            <Overview>
              <p>{movieDetails.overview}</p>
              <Genre>
                <span>
                  Genre:{" "}
                  {movieDetails.genres?.map((genre, index) => {
                    return (
                      genre.name +
                      (index !== movieDetails.genres.length - 1 ? ", " : "")
                    );
                  })}
                </span>
              </Genre>
              <span>Release date: {movieDetails.release_date} </span>
              <span>Run time: {movieDetails.runtime} mn</span>
              <span>Director: {movieDetails.director}</span>
              <Cast>Top Cast</Cast>
              <ActorGrid>
                {movieDetails.cast?.map((actor) => {
                  return <Actor key={actor.id} actor={actor} />;
                })}
              </ActorGrid>
            </Overview>
          </Info>
          {user && (
            <Buttons>
              <Button
                onClick={handleAddMovieToWatchlist}
                disabled={isWatchlist}
              >
                {isWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </Button>
              <Button onClick={handleAddMovieToWatched} disabled={isWatched}>
                {" "}
                {isWatched ? "Watched" : "Add to Watched"}
              </Button>
            </Buttons>
          )}
          <Similar>
            <span>Similar</span>
            <MovieGrid>
              {movieDetails.related.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </MovieGrid>
          </Similar>
        </Details>
      </DetailsContainer>
    </Container>
  );
};

export default CardDetails;
