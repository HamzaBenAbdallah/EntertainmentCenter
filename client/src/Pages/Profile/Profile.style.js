import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  gap: 10rem;
  background-color: #3bb19b;
  color: white;
  font-weight: bold;
`;

export const LinkTo = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
`;
