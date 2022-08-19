import styled from "styled-components";

export const Container = styled.div`
  height: 5rem;
  width: 5rem;
  position: relative;
  margin-right: 1rem;

  svg {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  circle {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 225;

    :nth-child(1) {
      stroke-dashoffset: 0;
      stroke: rgba(177, 199, 199, 1);
      stroke-width: 7;
    }
  }
`;

export const OuterRing = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
`;

export const InnerRing = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  font-weight: 600;
  font-size: 1.5rem;

  span {
    font-size: 0.7rem;
  }
`;
