import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, ProductsPage } from "./pages";
import { ProtectedRoute } from "./route/ProtectedRoute";
import { AuthProvider } from "./features/auth/model/authProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
