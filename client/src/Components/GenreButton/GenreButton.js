import { useGenreButton } from "./useGenreButton";
import { Container } from "./GenreButton.style";

const GenreButton = ({ children }) => {
  const { isActive, handleClick } = useGenreButton();

  return (
    <Container className={isActive ? "active" : ""} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default GenreButton;
