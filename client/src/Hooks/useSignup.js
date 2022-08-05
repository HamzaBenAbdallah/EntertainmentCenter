import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const useSignup = () => {
  const [signupData, setSignupData] = useState(initialState);
  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  const handleSignupChange = ({ currentTarget: input }) => {
    setSignupData({ ...signupData, [input.name]: input.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/signup`, signupData);
      navigate("/login");
      setSignupData(initialState);
      setSignupError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setSignupError(error.response.data.message);
      }
    }
  };

  return { signupData, signupError, handleSignupChange, handleSignupSubmit };
};
