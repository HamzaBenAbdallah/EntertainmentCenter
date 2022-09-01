import PuffLoader from "react-spinners/PuffLoader";
import { Wrapper } from "./Spinner.style";

const Spinner = () => {
  return (
    <Wrapper>
      <PuffLoader size={150} color={"#3BB19B"} />
    </Wrapper>
  );
};

export default Spinner;
