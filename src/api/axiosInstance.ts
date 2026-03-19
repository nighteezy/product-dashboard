import axios from "axios";
import { authStorage } from "../features/auth/lib/authStorage";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

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

      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);
