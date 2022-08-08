import { useParams } from "react-router-dom";
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
} from "./MovieDetails.style";

const CardDetails = () => {
  const arr = [1, 2, 3, 4, 5];
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const { id } = useParams();
  const {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    errorMovieDetails,
  } = useMovieDetails(id);

  if (isLoadingMovieDetails) {
    return <div>Loading...</div>;
  }

  if (isErrorMovieDetails) {
    console.log(errorMovieDetails);
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
