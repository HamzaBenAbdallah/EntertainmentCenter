import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ isLoading }) => {
  return <ClipLoader size={150} color={"#123abc"} loading={isLoading} />;
};

export default Spinner;
