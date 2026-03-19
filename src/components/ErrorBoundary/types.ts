import type { ReactNode } from "react";

export interface IErrorBoundary {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
