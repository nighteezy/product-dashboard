import { AuthContext } from "@/features/auth/model/authProvider";
import { useContext, type JSX } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth?.isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
