import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import {
  Container,
  FormContainer,
  Left,
  Button,
  Right,
  Form,
  Input,
  Error,
  ButtonContainer,
} from "./Login.style";

const Login = () => {
  const {
    loginData,
    loginError,
    handleLoginChange,
    handleLogin,
    handleLoginUnmount,
    handleGuestLogin,
  } = useLogin();

  return (
    <Container>
      <FormContainer>
        <Left>
          <Form onSubmit={(e) => e.preventDefault()}>
            <h1>Login to your account</h1>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            {loginError && <Error>{loginError}</Error>}
            <ButtonContainer>
              <Button type="submit" onClick={handleLogin}>
                Sign In
              </Button>
              <Button onClick={handleGuestLogin}>Sign In as a guest</Button>
            </ButtonContainer>
          </Form>
        </Left>
        <Right>
          <h1>New here?</h1>
          <Link to="/signup">
            <Button onClick={handleLoginUnmount}>Sign up</Button>
          </Link>
        </Right>
      </FormContainer>
    </Container>
  );
};

export default Login;
