import { useState } from "react";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

export const useLogin = () => {
  const [loginData, setLoginData] = useState(initialState);
  const [loginError, setLoginError] = useState("");

  const handleLoginChange = ({ currentTarget: input }) => {
    setLoginData({ ...loginData, [input.name]: input.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/login`, loginData);
      localStorage.setItem("token", response.headers["auth-token"]);
      window.location = "/";
      setLoginData(initialState);
      setLoginError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setLoginError(error.response.data.message);
      }
    }
  };

  const handleLoginUnmount = () => {
    setLoginData(initialState);
    setLoginError("");
  };

  return {
    loginData,
    loginError,
    handleLoginChange,
    handleLoginSubmit,
    handleLoginUnmount,
  };
};
