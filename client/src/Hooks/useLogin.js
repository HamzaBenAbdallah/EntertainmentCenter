import { useState } from "react";

export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = ({ currentTarget: input }) => {
    setLoginData({ ...loginData, [input.name]: input.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return { loginData, handleLoginChange, handleLoginSubmit };
};
