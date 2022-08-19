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

const ListCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container>
      <StyledLink to={`/movies/${movie.id}`}>
        <Poster src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title} />
      </StyledLink>
      <Wrapper>
        <Details>
          <Info>
            <p>{movie.vote_average.toFixed(1)}</p>
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
