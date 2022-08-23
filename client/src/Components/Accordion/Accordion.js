import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { Container, Title, Content } from "./Accordion.style";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <Title onClick={() => setIsActive(!isActive)}>
        {title}
        {isActive ? <FaChevronDown /> : <FaChevronRight />}
      </Title>

      {isActive && <Content>{children}</Content>}
    </Container>
  );
};

export default Accordion;
