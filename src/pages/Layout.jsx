import {
  House,
  Info,
  List,
  PawPrint,
  ShoppingCart,
  Storefront,
} from "phosphor-react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex h-screen flex-col bg-stone-900">
      <nav className="w-full">
        <div className="flex h-16 w-full items-center justify-between bg-emerald-800 p-4 text-emerald-100">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 text-lg font-bold"
          >
            <PawPrint size={40} weight="fill" />
            Pet JavaBot
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <ShoppingCart size={32} weight={"fill"} />
            </Link>
            <button
              onClick={() => setVisible(!visible)}
              className="rounded-md bg-emerald-700 p-1 sm:hidden"
            >
              <List size={32} />
            </button>
            <div className="flex gap-4 max-sm:hidden">
              <Link to="/">
                <House size={32} weight="fill" />
              </Link>
              <Link to="/loja">
                <Storefront size={32} weight="fill" />
              </Link>
              <Link to="/sobre">
                <Info size={32} weight="fill" />
              </Link>
            </div>
          </div>
        </div>
        {visible && (
          <div className="fixed flex w-full flex-col gap-5 bg-emerald-700 p-6 text-2xl font-bold text-emerald-100 sm:hidden">
            <Link className="flex items-center gap-2" to="/">
              <House size={28} weight="fill" />
              House
            </Link>
            <Link className="flex items-center gap-2" to="/loja">
              <Storefront size={28} weight="fill" />
              Loja
            </Link>
            <Link className="flex items-center gap-2" to="/sobre">
              <Info size={28} weight="fill" />
              Sobre
            </Link>
          </div>
        )}
      </nav>
      <div className="h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
