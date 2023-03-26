import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { token } = getCurrentUser();
if (token) {
  axios.defaults.headers.common["auth-token"] = token;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
