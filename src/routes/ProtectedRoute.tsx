import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "features/auth/hooks/useAuth";

import { ROUTES } from "./const";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  redirectTo = ROUTES.LOGIN,
}: ProtectedRouteProps) => {
  const isAuth = useAuth((state) => state.isAuth);

  if (!isAuth) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};
