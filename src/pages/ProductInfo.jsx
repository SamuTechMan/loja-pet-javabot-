import { ArrowUUpLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { animals } from "../animals";
import color from "tailwindcss/colors";

export default function ProductInfo() {
  const { animal } = useParams();
  return (
    <div className="relative flex flex-1 items-center justify-center bg-zinc-900">
      <Link className="absolute top-6 left-6" to="/loja">
        <ArrowUUpLeft size={40} weight="fill" color={color.emerald[100]} />
      </Link>
      <div className="flex h-full w-full gap-6 p-10 shadow-md max-md:flex-col max-md:text-center md:h-5/6 md:w-5/6 md:rounded-lg md:bg-zinc-800">
        <img
          className="aspect-square h-72 w-72 rounded-lg max-md:self-center"
          src={animals[animal].image}
          alt=""
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-6">
            <div className="text-5xl text-emerald-100">
              {animals[animal].name}
            </div>
            <div className="text-emerald-300">{animals[animal].price}</div>
            <div className="text-emerald-100">{animals[animal].info}</div>
          </div>
          <div className="flex w-full gap-3 text-lg">
            <button className="w-full rounded-xl bg-zinc-700 p-4 text-emerald-100">
              Adicionar ao Carrinho
            </button>
            <button className="w-full rounded-xl bg-emerald-400 p-4 text-zinc-900">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
