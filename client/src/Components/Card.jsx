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
} from "./Card.style";

const Card = ({ movie }) => {
  return (
    <Container>
      <Poster src={movie.poster_path} alt={movie.title} />
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
    </Container>
  );
};

export default Card;
