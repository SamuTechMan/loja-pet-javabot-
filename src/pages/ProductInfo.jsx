import { useParams } from "react-router-dom";
import { animals } from "../animals";

export default function ProductInfo() {
  const { animal } = useParams();
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-900">
      <div className="flex w-full items-center bg-zinc-800 p-10 shadow-md max-sm:flex-col sm:h-5/6 sm:w-5/6 sm:rounded-lg">
        <div>
          <img
            className="aspect-square w-72"
            src={animals[animal].image}
            alt=""
          />
        </div>
        <div>
          <div>{animals[animal].name}</div>
          <div>{animals[animal].price}</div>
        </div>
      </div>
    </div>
  );
}
