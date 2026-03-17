import { loginApi } from "@/api/auth";
import type { LoginRequest, LoginResponse } from "@/api/auth/types";
import { useAuth } from "@/features/auth/hooks";
import { authStorage } from "@/features/auth/lib/authStorage";
import { useMutation } from "@tanstack/react-query";

export const LOGIN_KEY = "login";

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationKey: [LOGIN_KEY],
    mutationFn: (data: LoginRequest) => loginApi(data),
    onSuccess: (data, variables) => {
      authStorage.setToken(data.token, variables.rememberMe ?? false);
      login(data.token, variables.rememberMe ?? false);
    },
  });
};
