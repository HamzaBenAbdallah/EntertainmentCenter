import { Container, Tooltip } from "./RoundButton.style";

const RoundButton = ({ children, text, disabled, click }) => {
  return (
    <Tooltip content={text} placement="bottom">
      <Container disabled={disabled} onClick={click}>
        {children}
      </Container>
    </Tooltip>
  );
};

export default RoundButton;
