import { Wrapper, Container, Title, Link, Icon } from "./Header.style";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Title>Movies</Title>
        </Link>
      </Container>
      <Container>
        <Icon>
          <Link to="/trending">
            <MdOutlineAccountCircle size="2em" />
          </Link>
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default Header;
