import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff, FiLock, FiUser, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "api/queries/auth/index";
import { parseLoginError } from "features/auth/lib/parseLoginError";
import { loginSchema, type LoginFormData } from "features/auth/model/schema";
import { ROUTES } from "routes";

import logo from "assets/images/logo.svg";
import { Checkbox, FormField } from "components";
import * as S from "./units";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { mutate: loginMutation, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const username = watch("username");
  const password = watch("password");

  useEffect(() => {
    setApiError(null);
  }, [username, password]);

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
          navigate(ROUTES.PRODUCTS);
        },
        onError: (error) => {
          setApiError(parseLoginError(error));
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
        <S.Subtitle>Пожалуйста, авторизуйтесь</S.Subtitle>
      </S.TitleWrapper>

      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Логин"
          id="login-username"
          error={errors.username?.message}
          leftIcon={<FiUser size={24} />}
          rightSlot={
            <button
              type="button"
              onClick={() => setValue("username", "", { shouldValidate: true })}
              aria-label="Очистить поле"
            >
              <FiX size={24} />
            </button>
          }
          inputProps={{
            placeholder: "Логин",
            ...register("username"),
          }}
        />

        <FormField
          label="Пароль"
          id="login-password"
          error={errors.password?.message}
          leftIcon={<FiLock size={24} />}
          rightSlot={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
          }
          inputProps={{
            type: showPassword ? "text" : "password",
            placeholder: "Пароль",
            ...register("password"),
          }}
        />

        <S.CheckboxWrapper>
          <Checkbox size="sm" {...register("rememberMe")} />
          <span>Запомнить данные</span>
        </S.CheckboxWrapper>

        {apiError && (
          <S.ApiErrorWrapper>
            <S.ApiErrorMessage role="alert">{apiError}</S.ApiErrorMessage>
          </S.ApiErrorWrapper>
        )}

        <S.LoginButton
          type="submit"
          disabled={isPending}
          $isLoading={isPending}
        >
          {isPending && <S.Spinner />}
          {isPending ? "Загрузка..." : "Войти"}
        </S.LoginButton>

        <S.Divider>или</S.Divider>
      </S.FormWrapper>
      <S.SignupPrompt>
        Нет аккаунта? <S.SignupLink>Создать</S.SignupLink>
      </S.SignupPrompt>
    </S.Container>
  );
};
