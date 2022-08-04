import { useState } from "react";

export const useSignup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignupChange = ({ currentTarget: input }) => {
    setSignupData({ ...signupData, [input.name]: input.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
  };

  return { signupData, handleSignupChange, handleSignupSubmit };
};
