import { Wrapper, Container, Title, Page, Link, Icon } from "./Header.style";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Title>Movies</Title>
        </Link>
        <Link to="/trending">
          <Page>Trending</Page>
        </Link>
      </Container>
      <Container>
        <Link to="/login">
          <Page>Login</Page>
        </Link>
        <Link to="/signup">
          <Page>Signup</Page>
        </Link>
        <Icon>
          <Link to="/profile">
            <MdOutlineAccountCircle size="2em" />
          </Link>
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default Header;
