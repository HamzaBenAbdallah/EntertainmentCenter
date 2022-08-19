import {
  Container,
  OuterRing,
  InnerRing,
  Value,
} from "./CircularProgress.style";

const CircularProgress = ({ value }) => {
  const percentage = 176 - (176 * value) / 100;
  const color = value >= 75 ? "green" : value >= 50 ? "orange" : "red";
  return (
    <Container>
      <OuterRing>
        <InnerRing>
          <Value>
            {value}
            <span>%</span>
          </Value>
        </InnerRing>
      </OuterRing>
      <svg>
        <circle cx="32" cy="32" r="28" />
        <circle
          cx="32"
          cy="32"
          r="28"
          strokeDashoffset={percentage}
          stroke={color}
        />
      </svg>
    </Container>
  );
};

export default CircularProgress;
