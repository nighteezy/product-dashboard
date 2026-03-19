import axios from "axios";

import { triggerUnauthorized } from "./authListener";
import { authStorage } from "features/auth/lib/authStorage";
import { useAuth } from "features/auth/hooks/useAuth";

const baseURL =
  import.meta.env.VITE_API_URL || "https://dummyjson.com";

export const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authStorage.removeToken();
      useAuth.getState().logout();
      triggerUnauthorized();
    }

    return Promise.reject(error);
  },
);
