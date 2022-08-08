import { Container, Poster } from "./Actor.style";

const Actor = ({ actor }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container>
      {/* <Link to={`/movies/${movie.id}`}> */}
      <Poster src={BASE_IMAGE_URL + actor.profile_path} alt={actor.name} />
      {/* </Link> */}
    </Container>
  );
};

export default Actor;
