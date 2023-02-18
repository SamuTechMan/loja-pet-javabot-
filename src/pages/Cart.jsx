import { Trash } from "phosphor-react";
import { animals } from "../animals";

export default function Cart() {
  return (
    <div className="flex w-full flex-1 flex-col  gap-12 overflow-auto bg-zinc-900 p-8">
      <div className="flex flex-col gap-5 rounded-lg bg-zinc-800 p-5">
        {animals.slice(3, 6).map((animal) => (
          <div className="flex">
            <img
              className="aspect-square h-32 rounded-lg"
              src={animal.image}
              alt=""
            />
            <div className="flex flex-1 flex-col justify-between pl-4">
              <div>
                <div className="text-2xl text-emerald-100">{animal.name}</div>
                <div className="text-lg text-emerald-300">{animal.price}</div>
              </div>
              <div className="flex w-56 gap-3 rounded-lg bg-zinc-700 p-2 text-emerald-100">
                Qtd:
                <input
                  className="w-full bg-transparent text-right outline-none"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <button className="flex aspect-square h-10 items-center justify-center rounded-lg bg-red-400">
              <Trash size={26} weight="fill" color="white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
