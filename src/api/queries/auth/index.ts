import { loginApi } from "../../auth";
import type { LoginRequest, LoginResponse } from "../../auth/types";
import { useAuth } from "features/auth/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";

export const LOGIN_KEY = "login";

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationKey: [LOGIN_KEY],
    mutationFn: (data: LoginRequest) => loginApi(data),
    onSuccess: (data, variables) => {
      login(data.token, variables.rememberMe ?? false);
    },
  });
};
