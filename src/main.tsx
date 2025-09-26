import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./app/App.tsx";
import { ToastContainer } from "react-toastify";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer
      autoClose={3000}
      hideProgressBar
      closeOnClick
      pauseOnHover
      closeButton={false}
      className="toastify"
    />
  </QueryClientProvider>,
);
