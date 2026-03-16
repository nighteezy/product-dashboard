import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, ProductsPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
