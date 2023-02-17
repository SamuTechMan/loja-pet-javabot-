import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Sobre from "./pages/Sobre";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="loja" element={<Loja />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
