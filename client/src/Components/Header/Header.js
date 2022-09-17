import { useLogout } from "./useLogout";
import { getCurrentUser } from "Services/getCurrentUser";
import SearchBar from "Components/SearchBar";
import { Icon } from "@iconify/react";
import CE from "Pictures/CE.png";
import {
  Head,
  Wrapper,
  Container,
  Logo,
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
            <Logo>
              <img src={CE} />
            </Logo>
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
