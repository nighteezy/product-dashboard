import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./features/auth/hooks/useAuth";
import { LoginPage, ProductsPage } from "./pages";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? <Navigate to="/products" replace /> : <LoginPage />
            }
          />
          <Route
            path="/products"
            element={isAuth ? <ProductsPage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
