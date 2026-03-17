import { Navigate } from "react-router-dom";
import { authStorage } from "@/features/auth/lib/authStorage";

interface AuthCheckProps {
  children: React.ReactNode;
}

export const AuthCheck = ({ children }: AuthCheckProps) => {
  const token = authStorage.getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};