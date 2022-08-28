import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Head = styled.header`
  display: flex;
  justify-content: center;
  background-color: #032541;
  border-bottom: 2px solid #000;
  height: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  width: 80%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 2.5em;
`;

export const Page = styled.div`
  font-size: 1.25em;
`;

export const Button = styled.div`
  font-size: 1.1em;
  border: 2px solid #abb7c4;
  padding: 6px 15px;
  border-radius: 30px;

  &:hover {
    border-color: #fff;
  }
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
  display: contents;
`;
