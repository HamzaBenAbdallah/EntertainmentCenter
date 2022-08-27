import { useFilterButton } from "./useFilterButton";
import { Container } from "./FilterButton.style";

const FilterButton = ({ children }) => {
  const { isActive, handleClick } = useFilterButton();

  return (
    <Container className={isActive ? "active" : ""} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default FilterButton;
