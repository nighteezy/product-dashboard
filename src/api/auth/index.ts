import { api } from "..";
import type { LoginRequest, LoginResponse } from "./types";

export const loginApi = (data: LoginRequest): Promise<LoginResponse> => {
  return api
    .post<LoginResponse>({
      url: "/auth/login",
      data,
    })
    .then((res) => res.data);
};
