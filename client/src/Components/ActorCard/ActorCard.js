import { Container, Poster, Details, Name, Character } from "./ActorCard.style";
import NotFound from "Pictures/Image-not-found.jpg";

const Actor = ({ actor }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const image = actor.profile_path
    ? `${BASE_IMAGE_URL}${actor.profile_path}`
    : NotFound;

  return (
    <Container>
      <Poster src={image} alt={actor.name} />
      <Details>
        <Name>{actor.name}</Name>
        <Character>{actor.character}</Character>
      </Details>
    </Container>
  );
};

export default Actor;
