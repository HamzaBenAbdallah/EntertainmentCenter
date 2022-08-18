import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
  background-color: #032541;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.div`
  margin-left: 4rem;
  font-size: 2.5em;
`;
export const Page = styled.div`
  font-size: 1.25em;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
  display: contents;
  outline: 3px solid red;
`;

export const Icon = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #000;
`;
