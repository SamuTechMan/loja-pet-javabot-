import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Sobre from "./pages/Sobre";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loja" element={<Loja />} />
          <Route path="loja/:id" element={<ProductInfo />} />
          <Route path="cart" element={<Cart />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
