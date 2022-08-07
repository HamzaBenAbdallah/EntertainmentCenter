import { Link } from "react-router-dom";

import {
  Container,
  Poster,
  Detail,
  Header,
  Title,
  Genre,
  Content,
  Overview,
  Footer,
} from "./MovieCard.style";

const MovieCard = ({ movie, details = true }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container>
      <Link to={`/movies/${movie.id}`}>
        <Poster src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title} />
        {details && (
          <Detail>
            <Header>
              <Title>{movie.title}</Title>
              <Genre>Action</Genre>
            </Header>
            <Content>
              <Overview>{movie.overview}</Overview>
            </Content>
            <Footer>{movie.vote_average}</Footer>
          </Detail>
        )}
      </Link>
    </Container>
  );
};

export default MovieCard;
