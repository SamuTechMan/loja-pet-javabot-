import { ArrowUUpLeft } from "phosphor-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { animals } from "../animals";
import color from "tailwindcss/colors";

export default function ProductInfo() {
  const { id } = useParams();
  const data = animals.find((animal) => animal.id == id);
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col bg-stone-900">
      <button onClick={() => navigate(-1)} className="p-4" to="/loja">
        <ArrowUUpLeft size={40} weight="fill" color={color.emerald[100]} />
      </button>
      <div className="flex h-full w-full gap-6 p-10 shadow-md max-md:flex-col max-md:text-center">
        <img
          className="aspect-square h-72 w-72 rounded-lg max-md:self-center"
          src={data.image}
          alt=""
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-6">
            <div className="text-5xl text-emerald-100">{data.name}</div>
            <div className="text-emerald-300">{data.price}</div>
            <div className="mb-8 text-justify text-emerald-100">
              {data.info}
            </div>
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
