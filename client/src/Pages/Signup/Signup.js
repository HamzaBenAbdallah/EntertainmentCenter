import { Link } from "react-router-dom";
import { useSignup } from "./useSignup";
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
  const {
    signupData,
    signupError,
    handleSignupChange,
    handleSignupSubmit,
    handleSignupUnmount,
  } = useSignup();

  return (
    <Container>
      <FormContainer>
        <Left>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <Button onClick={handleSignupUnmount}>Sign in</Button>
          </Link>
        </Left>
        <Right>
          <Form onSubmit={handleSignupSubmit}>
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
            {signupError && <Error>{signupError}</Error>}
            <Button type="submit">Sign Up</Button>
          </Form>
        </Right>
      </FormContainer>
    </Container>
  );
};

export default Signup;
