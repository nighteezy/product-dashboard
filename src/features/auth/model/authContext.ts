import { createContext } from "react";

export interface AuthContextType {
  isAuth: boolean;
  login: (token: string, remember: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
