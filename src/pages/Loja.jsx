import ProductCard from "../components/ProductCard";
import { animals } from "../animals";

export default function Loja() {
  return (
    <div className="flex flex-col items-center overflow-auto bg-zinc-900">
      <div className="grid flex-1 items-center gap-12 p-10 lg:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => (
          <ProductCard
            name={animal.name}
            price={animal.price}
            image={animal.image}
          />
        ))}
      </div>
    </div>
  );
}
