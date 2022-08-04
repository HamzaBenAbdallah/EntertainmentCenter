import { Link, useNavigate } from "react-router-dom";
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
} from "./Signup.style";

const Signup = () => {
  const { signupData, handleSignupChange, handleSignupSubmit } =
    useContext(MovieContext);

  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <Left>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </Left>
        <Right>
          <Form>
            <h1>Create Account</h1>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={signupData.firstName}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={signupData.lastName}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            {false && <Error>Some error here</Error>}
            <Button type="submit" onSubmit={handleSignupSubmit}>
              Sign Up
            </Button>
          </Form>
        </Right>
      </FormContainer>
    </Container>
  );
};

export default Signup;
