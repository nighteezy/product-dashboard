import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../features/auth/hooks";
import {
  loginSchema,
  type LoginFormData,
} from "../../../../features/auth/model/schema";
import { login } from "../../../../api/auth";
import toast from "react-hot-toast";
import * as S from "./units";

export const LoginForm = () => {
  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login({
        username: data.username,
        password: data.password,
      });

      loginUser(response.token, data.rememberMe ?? false);

      toast.success("Успешный вход");

      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Неверный логин или пароль");
    }
  };

  return (
    <S.FormWrapper>
      <S.Title>Добро пожаловать!</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Username" {...register("username")} />

          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <label>
          <input type="checkbox" {...register("rememberMe")} />
          Remember me
        </label>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>
    </S.FormWrapper>
  );
};
