import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { queryClient } from "./api/queries/queryClients";
import App from "./App";
import { AuthProvider } from "./features/auth/model/authProvider";
import { store } from "./store/utils";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
);
