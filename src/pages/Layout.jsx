import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div class="flex h-16 w-full items-center justify-between bg-emerald-600 p-4 text-emerald-100">
        <div class="flex gap-4">
          <Link to="/">Home</Link>|<Link to="/sobre">Sobre</Link>|
          <Link to="/loja">Loja</Link>
        </div>
        <div class="flex items-center justify-center gap-3">
          <a href="./carrinho.html">
            <img
              class="w-10"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Femojigraph.org%2Fmedia%2Fmicrosoft%2Fshopping-cart_1f6d2.png&f=1&nofb=1&ipt=15b563227774bf490ae6f11eb4efb142f9deb0d099f8b6b5c905b12363a6ffa2&ipo=images"
              alt=""
            />
          </a>
          <div class="text-lg">Pet JavaBot</div>
          <img
            class="h-12"
            src="https://imagensemoldes.com.br/wp-content/uploads/2021/03/Ping-Pong-PNG.png"
            alt=""
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}
