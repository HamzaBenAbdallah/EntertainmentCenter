import CircularProgress from "Components/CircularProgress";
import {
  Container,
  StyledLink,
  Poster,
  Wrapper,
  Details,
  Info,
  Title,
  Overview,
  Controls,
} from "./ListCard.style";
import NotFound from "Pictures/Image-not-found.jpg";

const ListCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const image = movie?.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : NotFound;

  return (
    <Container>
      <StyledLink to={`/movies/${movie.id}`}>
        <Poster src={image} alt={movie.title} />
      </StyledLink>
      <Wrapper>
        <Details>
          <Info>
            {/* <p>{movie.vote_average.toFixed(1)}</p> */}
            <CircularProgress value={Math.round(movie.vote_average * 10)} />
            <Title>
              <StyledLink to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </StyledLink>
              <p>{movie.release_date}</p>
            </Title>
          </Info>
          <Overview>{movie.overview}</Overview>
        </Details>
        <Controls>Remove</Controls>
      </Wrapper>
    </Container>
  );
};

export default ListCard;
