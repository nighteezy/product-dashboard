import { api } from "..";
import type { LoginRequest, LoginResponse } from "./types";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>({
    url: "/auth/login",
    data,
  });

  return response.data;
};
