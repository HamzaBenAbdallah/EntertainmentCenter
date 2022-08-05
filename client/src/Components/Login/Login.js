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
  const { loginData, handleLoginChange, handleLoginSubmit } =
    useContext(MovieContext);

  return (
    <Container>
      <FormContainer>
        <Left>
          <Form>
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
            {false && <Error>Some error here</Error>}
            <Button type="submit" onSubmit={handleLoginSubmit}>
              Sign In
            </Button>
          </Form>
        </Left>
        <Right>
          <h1>New here?</h1>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </Right>
      </FormContainer>
    </Container>
  );
};

export default Login;
