import PropTypes from "prop-types";
import { useMultiRangeSlider } from "./useMultiRangeSlider";
import {
  Container,
  Slider,
  Track,
  Range,
  LeftValue,
  RightValue,
} from "./MultiRangeSlider.style";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const { minVal, maxVal, range, handleOnChangeMin, handleOnChangeMax } =
    useMultiRangeSlider(min, max, onChange);

  return (
    <Container>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleOnChangeMin}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleOnChangeMax}
        className="thumb thumb--right"
      />

      <Slider>
        <Track />
        <Range ref={range} />
        <LeftValue>{minVal}</LeftValue>
        <RightValue>{maxVal}</RightValue>
      </Slider>
    </Container>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
