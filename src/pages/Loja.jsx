import ProductCard from "../components/ProductCard";
import { animals, animalTypes } from "../animals";

export default function Loja() {
  return (
    <div className="flex h-full flex-col gap-6 text-emerald-100">
      <div className="p-6 text-4xl">Loja</div>
      <div className="flex flex-1 flex-col  gap-6">
        {animalTypes.map((type) => (
          <div className="flex flex-col gap-3" key={type}>
            <div className="px-6 text-3xl ">{type}</div>
            <div className="flex gap-6 overflow-auto px-6 scrollbar-hide">
              {animals
                .filter((animal) => animal.categoria == type)
                .map((animal) => (
                  <ProductCard
                    key={animal.id}
                    name={animal.name}
                    price={animal.price}
                    image={animal.image}
                    id={animal.id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
