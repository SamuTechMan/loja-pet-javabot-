import ProductCard from "../components/ProductCard";
import { animals } from "../animals";

export default function Loja() {
  return (
    <div className="flex flex-col items-center gap-6 overflow-auto bg-zinc-900 p-6">
      <div className="self-start text-4xl text-emerald-100">Loja</div>
      <div className="grid flex-1 items-center gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal, i) => (
          <ProductCard
            key={i}
            name={animal.name}
            price={animal.price}
            image={animal.image}
            id={i}
          />
        ))}
      </div>
    </div>
  );
}
