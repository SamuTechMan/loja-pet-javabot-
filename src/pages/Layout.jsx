import { ShoppingCart } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex h-16 w-full items-center justify-between bg-emerald-600 p-4 text-emerald-100">
        <div className="flex gap-4">
          <Link to="/">Home</Link>|<Link to="/sobre">Sobre</Link>|
          <Link to="/loja">Loja</Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a href="./carrinho.html">
            <ShoppingCart size={32} weight={"fill"} />
          </a>
          <div className="text-lg font-bold">Pet JavaBot</div>
          <img
            className="h-12"
            src="https://imagensemoldes.com.br/wp-content/uploads/2021/03/Ping-Pong-PNG.png"
            alt=""
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}
