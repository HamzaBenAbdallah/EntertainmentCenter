import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MovieProvider } from "Services/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <App />
      </MovieProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
