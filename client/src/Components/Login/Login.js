import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "Services/MovieContext";
import {
  Container,
  FormContainer,
  Left,
  Button,
  Right,
  Form,
  Input,
  Error,
} from "./Login.style";

const Login = () => {
  const {
    loginData,
    loginError,
    handleLoginChange,
    handleLoginSubmit,
    handleLoginUnmount,
  } = useContext(MovieContext);

  return (
    <Container>
      <FormContainer>
        <Left>
          <Form onSubmit={handleLoginSubmit}>
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
            <Button type="submit">Sign In</Button>
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
