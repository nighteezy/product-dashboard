import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiLock, FiUser, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "@/api/queries/auth/index";
import { loginSchema, type LoginFormData } from "@/features/auth/model/schema";

import logo from "@/assets/images/logo.svg";
import * as S from "./units";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { mutate: loginMutation, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    setApiError(null);

    loginMutation(
      {
        username: data.username,
        password: data.password,
        rememberMe: data.rememberMe ?? false,
      },
      {
        onSuccess: () => {
          toast.success("Успешный вход");
          navigate("/products");
        },
        onError: (error) => {
          const axiosError = error as AxiosError<{ message?: string }>;
          const errorMessage =
            axiosError.response?.data?.message || "Неверный логин или пароль";

          setApiError(errorMessage);
          toast.error(errorMessage);
        },
      },
    );
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={logo} alt="Логотип" />
      </S.LogoWrapper>

      <S.TitleWrapper>
        <S.Title>Добро пожаловать!</S.Title>
        <S.Subtitle>Пожалуйста, авторизируйтесь</S.Subtitle>
      </S.TitleWrapper>

      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.FieldLabel>Логин</S.FieldLabel>
          <S.InputWrapper>
            <S.LeftIcon>
              <FiUser size={20} />
            </S.LeftIcon>
            <S.Input placeholder="Username" {...register("username")} />
            <S.RightIcon type="button">
              <FiX size={18} />
            </S.RightIcon>
          </S.InputWrapper>
          {errors.username && (
            <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>
          )}
        </div>

        <div>
          <S.FieldLabel>Пароль</S.FieldLabel>
          <S.InputWrapper>
            <S.LeftIcon>
              <FiLock size={20} />
            </S.LeftIcon>
            <S.Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            <S.RightIcon
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </S.RightIcon>
          </S.InputWrapper>
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </div>

        <S.CheckboxWrapper>
          <S.Checkbox type="checkbox" {...register("rememberMe")} />
          <span>Запомнить данные</span>
        </S.CheckboxWrapper>

        {apiError && <S.ErrorMessage>{apiError}</S.ErrorMessage>}

        <S.LoginButton type="submit" disabled={isPending}>
          {isPending ? "Загрузка..." : "Войти"}
        </S.LoginButton>

        <S.Divider>или</S.Divider>
      </S.FormWrapper>
    </S.Container>
  );
};
