import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 15rem;
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 15rem;
`;

export const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

export const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #9fe5e1;
  z-index: 2;
`;

export const LeftValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
`;

export const RightValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;
