export default function ProductCard({ name, price, image }) {
  return (
    <div className="w-96 rounded-xl bg-zinc-800 shadow-md">
      <div className="p-4 text-2xl font-semibold text-emerald-50">{name}</div>
      <img className="aspect-[4/3]" src={image} alt="" />
      <div className="flex items-center justify-between p-4 text-2xl text-emerald-50">
        <div>{price}</div>
        <button className="rounded-xl bg-zinc-700 p-2 font-semibold text-emerald-400">
          Comprar
        </button>
      </div>
    </div>
  );
}
