import { Component, type ErrorInfo, type ReactNode } from "react";

import * as S from "./units";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <S.Container>
          <S.Title>Что-то пошло не так</S.Title>
          <S.Message>{this.state.error.message}</S.Message>
          <S.RetryButton type="button" onClick={this.handleRetry}>
            Попробовать снова
          </S.RetryButton>
        </S.Container>
      );
    }
    return this.props.children;
  }
}
