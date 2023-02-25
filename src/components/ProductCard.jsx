import { Link } from "react-router-dom";

export default function ProductCard({ name, price, image, id }) {
  return (
    <Link
      to={`/loja/${id}`}
      className="flex min-w-[200px] max-w-[200px] flex-col rounded-xl bg-zinc-800 shadow-md max-sm:min-w-[60%]"
    >
      <img className="aspect-square rounded-t-lg" src={image} alt="" />
      <div className="truncate p-2 text-lg font-semibold text-emerald-100">
        {name}
      </div>
      <div className="flex items-center justify-between p-2 text-xl text-emerald-300">
        <div>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </Link>
  );
}
