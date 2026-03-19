import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  clearOnUnauthorized,
  setOnUnauthorized,
} from "api/authListener";
import { ROUTES } from "routes";
import { useAuth } from "features/auth/hooks/useAuth";

export const AuthSync = () => {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);

  useEffect(() => {
    setOnUnauthorized(() => {
      logout();
      navigate(ROUTES.LOGIN, { replace: true });
    });
    return clearOnUnauthorized;
  }, [navigate, logout]);

  return null;
};
