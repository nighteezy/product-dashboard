import type { AxiosInstance, AxiosRequestConfig } from "axios";

export class Api {
  axiosInstance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.axiosInstance = instance;
  }

  get<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>({
      ...config,
      method: "GET",
    });
  }

  post<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>({
      ...config,
      method: "POST",
    });
  }

  put<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>({
      ...config,
      method: "PUT",
    });
  }

  delete<T>(config: AxiosRequestConfig) {
    return this.axiosInstance.request<T>({
      ...config,
      method: "DELETE",
    });
  }
}
