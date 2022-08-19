import {
  Container,
  OuterRing,
  InnerRing,
  Value,
} from "./CircularProgress.style";

const CircularProgress = ({ value }) => {
  const percentage = 225 - (225 * value) / 100;
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
        <circle cx="40" cy="40" r="36" />
        <circle
          cx="40"
          cy="40"
          r="36"
          strokeDashoffset={percentage}
          stroke={color}
        />
      </svg>
    </Container>
  );
};

export default CircularProgress;
