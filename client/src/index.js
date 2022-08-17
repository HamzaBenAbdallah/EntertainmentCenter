import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MovieProvider } from "Services/MovieContext";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const { token } = getCurrentUser();
if (token) {
  axios.defaults.headers.common["auth-token"] = token;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <App />
        <ReactQueryDevtools />
      </MovieProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
