import { useLogout } from "./useLogout";
import { getCurrentUser } from "Services/getCurrentUser";
import SearchBar from "Components/SearchBar";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  Head,
  Wrapper,
  Container,
  Title,
  Button,
  Page,
  Link,
  Icon,
} from "./Header.style";

const Header = () => {
  const { user } = getCurrentUser();
  const { handleLogout } = useLogout();
  return (
    <Head>
      <Wrapper>
        <Container>
          <Link to="">
            <Title>Movies</Title>
          </Link>
          <Link to="Discover">
            <Page>Discover</Page>
          </Link>
        </Container>
        <Container>
          <SearchBar />
          {!user ? (
            <>
              <Link to="login">
                <Button>Login</Button>
              </Link>
              <Link to="signup">
                <Button>Signup</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="" onClick={handleLogout}>
                <Button>Logout</Button>
              </Link>
              <Icon>
                <Link to="profile">
                  <MdOutlineAccountCircle size="2em" />
                </Link>
              </Icon>
            </>
          )}
        </Container>
      </Wrapper>
    </Head>
  );
};

export default Header;
