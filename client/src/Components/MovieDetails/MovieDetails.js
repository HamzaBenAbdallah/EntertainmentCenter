import { useParams } from "react-router-dom";
import MovieCard from "Components/MovieCard";
import { useMovieDetails } from "./useMovieDetails";
import {
  Container,
  Backdrop,
  Details,
  Text,
  Title,
  Tagline,
  Genre,
  Wrapper,
  Info,
  Poster,
  Overview,
  ExtraDetails,
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
      <Details>
        <Text>
          <Title>{movieDetails.title}</Title>
          <Tagline>{movieDetails.tagline}</Tagline>
          {/* <Genre>
            {movieDetails.genres?.map((genre) => (
              <span>{genre.name}</span>
            ))}
          </Genre> */}
        </Text>
        <Wrapper>
          <Info>
            <Poster
              src={BASE_IMAGE_URL + movieDetails.poster_path}
              alt={movieDetails.title}
            />
            <Overview>
              <p>{movieDetails.overview}</p>
              <span>Cast:</span>
            </Overview>
            <ExtraDetails>
              <span>Detail</span>
              <span>Release date: {movieDetails.release_date} </span>
              <span>Budget: {movieDetails.budget}</span>
              <span>Revenue: {movieDetails.revenue}</span>
              <span>Run time: {movieDetails.runtime}</span>
              <span>
                Country: {movieDetails.production_countries[0].iso_3166_1}
              </span>
            </ExtraDetails>
          </Info>
          <Similar>
            <span>Similar</span>
            <MovieGrid>
              {movieDetails.related.map((movie) => (
                <MovieCard key={movie.id} movie={movie} details={false} />
              ))}
            </MovieGrid>
          </Similar>
        </Wrapper>
      </Details>
    </Container>
  );
};

export default CardDetails;
