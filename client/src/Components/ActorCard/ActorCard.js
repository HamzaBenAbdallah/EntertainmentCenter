import { Container, Poster, Details, Name, Character } from "./ActorCard.style";

const Actor = ({ actor }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container>
      <Poster src={BASE_IMAGE_URL + actor.profile_path} alt={actor.name} />
      <Details>
        <Name>{actor.name}</Name>
        <Character>{actor.character}</Character>
      </Details>
    </Container>
  );
};

export default Actor;
