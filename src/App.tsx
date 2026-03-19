import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthSync } from "components/AuthSync";
import { LoginPage, ProductsPage } from "pages";
import { ProtectedRoute, PublicRoute, ROUTES } from "routes";
import { GlobalStyles } from "styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthSync />
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.PRODUCTS}
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
