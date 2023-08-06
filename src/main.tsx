import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ContextProvider from "./provider/ContextProvider";
import router from "./router/Routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
