import { List, PawPrint, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="flex h-16 w-full items-center justify-between bg-emerald-600 p-4 text-emerald-100">
        <Link to="/" className="flex items-center justify-center gap-3">
          <PawPrint size={40} weight="fill" />
          <div className="text-lg font-bold">Pet JavaBot</div>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <ShoppingCart size={32} weight={"fill"} />
          </Link>
          <button
            onClick={() => setVisible(!visible)}
            className="rounded-md border-2 border-emerald-800 bg-emerald-700 sm:hidden"
          >
            <List size={32} />
          </button>
          <div className="flex gap-4 max-sm:hidden">
            <Link to="/">Home</Link>|<Link to="/sobre">Sobre</Link>|
            <Link to="/loja">Loja</Link>
          </div>
        </div>
      </div>
      {visible && (
        <div className="relative">
          <div className="fixed flex w-full flex-col gap-3 bg-emerald-600 p-6 text-xl font-bold text-emerald-100 sm:hidden">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/loja">Loja</Link>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
