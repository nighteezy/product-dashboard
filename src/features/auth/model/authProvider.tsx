import { useState } from "react";
import { authStorage } from "../lib/authStorage";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(authStorage.isAuthenticated());

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
export { AuthContext };
