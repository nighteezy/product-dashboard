export interface LoginRequest {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  token: string;
}
