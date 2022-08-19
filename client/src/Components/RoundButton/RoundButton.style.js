import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Container = styled.button`
  all: unset;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #000;
  background-color: var(--secondary-color);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const Tooltip = styled(Tippy)`
  color: var(--primary-color);

  &[data-placement^="bottom"] {
    background: var(--secondary-color);

    .tippy-arrow {
      color: var(--secondary-color);
    }
  }
`;
