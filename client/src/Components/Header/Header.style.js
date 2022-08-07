import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  border-bottom: 2px solid #000;
  background-color: #242b39;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 0 6rem 0 2rem;
  font-size: 2.5em;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
`;

export const Icon = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #000;
`;
