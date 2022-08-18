import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(277, 277, 277, 1);
  width: 60%;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Poster = styled.img`
  display: block;
  height: 12.5rem;
  width: 10rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-between;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  h3 {
    font-size: 1.25rem;

    &:hover {
      color: #032541;
    }
  }
  p {
    color: #999;
    font-size: 0.85rem;
  }
`;

export const Overview = styled.div`
  display: -webkit-box;
  line-height: 1.25rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Controls = styled.div``;
