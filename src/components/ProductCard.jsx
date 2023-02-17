export default function ProductCard({ name, price, image }) {
  return (
    <div class="w-96 rounded-xl bg-zinc-800 shadow-md">
      <div class="p-4 text-2xl font-semibold text-emerald-50">{name}</div>
      <img class="aspect-[4/3]" src={image} alt="" />
      <div class="flex items-center justify-between p-4 text-2xl text-emerald-50">
        <div>{price}</div>
        <button class="rounded-xl bg-zinc-700 p-2 font-semibold text-emerald-400">
          Comprar
        </button>
      </div>
    </div>
  );
}
