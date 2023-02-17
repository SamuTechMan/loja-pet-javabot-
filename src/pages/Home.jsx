import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-900">
      <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-12">
        <button
          onClick={() => {
            setVisible(!visible);
          }}
          className="rounded-xl border-2 border-emerald-400 shadow-md shadow-emerald-100 transition-all hover:scale-110 hover:shadow-lg hover:shadow-emerald-600"
        >
          <img
            id="middle-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynhvEh52iy3ZvsOqnOM625QiOe5KbP4V_yvLVbpSWIJs0UrL_DFBHtN91Xkho_r8hps&usqp=CAU"
            alt=""
            className="rounded-xl"
          />
        </button>

        <div className="text-center text-2xl text-emerald-300">Javabogus</div>
        {visible && (
          <>
            {" "}
            <img
              className="absolute bottom-10 right-10 w-36"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duke_%28Java_mascot%29_waving.svg/1137px-Duke_%28Java_mascot%29_waving.svg.png"
              alt=""
            />
            <img
              className="absolute top-10 left-10 w-36"
              src="https://i.kym-cdn.com/photos/images/original/002/018/144/1f8.png"
              alt=""
            />
            <img
              className="absolute top-10 right-10 w-48"
              src="https://www.transparentpng.com/thumb/army-helicopter/pTKVr0-photo-military-nefer-union-png-army-helicopter.png"
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 w-48"
              src="http://thebookofbeing.net/mouse-deer.gif"
              alt=""
            />
            <img
              className="absolute bottom-0 left-1/2 w-48 -translate-x-1/2"
              src="https://1.bp.blogspot.com/-9KuQVpfQBs4/YNXQPdskirI/AAAAAAAAYI8/3SV4I5uaMncFUFITpH2RkkgA_rmvZoK3wCLcBGAsYHQ/s500/fogueira.gif"
              alt=""
            />
            <img
              className="absolute top-0 left-1/2 w-48 -translate-x-1/2"
              src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
              alt=""
            />
          </>
        )}
      </div>
      <script src="/index.js"></script>
    </div>
  );
}
