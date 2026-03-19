import type { AxiosError } from "axios";

const API_ERROR_MESSAGES: Record<string, string> = {
  "invalid credentials": "Неверный логин или пароль",
};

const DEFAULT_BUSINESS_ERROR = "Неверный логин или пароль";
const NETWORK_ERROR_MESSAGE = "Ошибка соединения. Попробуйте позже";
const SERVER_ERROR_MESSAGE = "Ошибка сервера. Попробуйте позже";

export function parseLoginError(error: unknown): string {
  const axiosError = error as AxiosError<{ message?: string }>;

  if (!axiosError.response) {
    return NETWORK_ERROR_MESSAGE;
  }

  const { status, data } = axiosError.response;
  const apiMessage = data?.message?.trim();

  if (status >= 500) {
    return SERVER_ERROR_MESSAGE;
  }

  if (apiMessage) {
    const normalized = apiMessage.toLowerCase();
    return API_ERROR_MESSAGES[normalized] ?? apiMessage;
  }

  if (status === 401) {
    return DEFAULT_BUSINESS_ERROR;
  }

  return DEFAULT_BUSINESS_ERROR;
}
