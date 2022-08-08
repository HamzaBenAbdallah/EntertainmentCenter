import { useParams } from "react-router-dom";
import MovieCard from "Components/MovieCard";
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
              <Genre>
                {movieDetails.genres?.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </Genre>
              <p>{movieDetails.overview}</p>
              <span>Release date: {movieDetails.release_date} </span>
              <span>Run time: {movieDetails.runtime}min</span>
              <span>Director: {movieDetails.director}</span>
              <span>Budget: {movieDetails.budget}</span>
              <span>Revenue: {movieDetails.revenue}</span>
              <span>Cast:</span>
              <span>
                Country: {movieDetails.production_countries[0].iso_3166_1}
              </span>
            </Overview>
          </Info>
          <Similar>
            <div>Similar</div>
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
