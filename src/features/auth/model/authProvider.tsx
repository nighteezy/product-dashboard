import { createContext, useEffect, useState } from "react";
import { authStorage } from "../lib/authStorage";

export interface AuthContextType {
  isAuth: boolean;
  login: (token: string, remember: boolean) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    setIsAuth(authStorage.isAuthenticated());
  }, []);

  const login = (token: string, remember: boolean) => {
    authStorage.setToken(token, remember);
    setIsAuth(true);
  };

  const logout = () => {
    authStorage.removeToken();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
