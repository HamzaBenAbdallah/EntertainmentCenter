import { Wrapper, NotFound, Images, Text } from "./Error.style";

const Error = () => {
  return (
    <Wrapper>
      <NotFound>
        <Images>
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </Images>
        <Text>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <a href="/">YES</a>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
        </Text>
      </NotFound>
    </Wrapper>
  );
};

export default Error;
