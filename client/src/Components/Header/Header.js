import { useLogout } from "./useLogout";
import { getCurrentUser } from "Services/getCurrentUser";
import SearchBar from "Components/SearchBar";
import { Icon } from "@iconify/react";
import {
  Head,
  Wrapper,
  Container,
  Title,
  Button,
  Page,
  Link,
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
              <Link to="profile">
                <Icon icon="healthicons:ui-user-profile" width="3rem" />
              </Link>
              <Link to="" onClick={handleLogout}>
                <Button>Logout</Button>
              </Link>
            </>
          )}
        </Container>
      </Wrapper>
    </Head>
  );
};

export default Header;
