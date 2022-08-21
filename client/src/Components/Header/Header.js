import { useLogout } from "./useLogout";
import { getCurrentUser } from "Services/getCurrentUser";
import SearchBar from "Components/SearchBar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Wrapper, Container, Title, Page, Link, Icon } from "./Header.style";

const Header = () => {
  const { user } = getCurrentUser();
  const { handleLogout } = useLogout();
  return (
    <Wrapper>
      <Container>
        <Link to="">
          <Title>Movies</Title>
        </Link>
        <Link to="trending">
          <Page>Trending</Page>
        </Link>
      </Container>
      <Container>
        <SearchBar />
        {!user ? (
          <>
            <Link to="login">
              <Page>Login</Page>
            </Link>
            <Link to="signup">
              <Page>Signup</Page>
            </Link>
          </>
        ) : (
          <Link to="" onClick={handleLogout}>
            <Page>Logout</Page>
          </Link>
        )}
        <Icon>
          <Link to="profile">
            <MdOutlineAccountCircle size="2em" />
          </Link>
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default Header;
