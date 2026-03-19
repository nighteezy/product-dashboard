export interface IAuthState {
  isAuth: boolean;
  login: (token: string, remember: boolean) => void;
  logout: () => void;
}
