import ProductCard from "../components/ProductCard";

export default function Loja() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-900">
      <div className="flex w-full flex-1 flex-col items-center gap-12 overflow-x-auto overflow-y-auto p-20">
        <ProductCard
          name={"axolote mexicano"}
          price={"R$400"}
          image={
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/2212.600x450.webp?w=710&h=533"
          }
        />
        <ProductCard
          name={"Java Mouse Deer"}
          price={"R$150.000"}
          image={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cba54271-70f9-49df-bdb3-868f1bbbf7f8/db3dh1r-183548cc-1d38-4585-ae39-5a455ffc2669.jpg/v1/fill/w_1045,h_765,q_70,strp/java_mouse_deer_by_gredinia_db3dh1r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMyIsInBhdGgiOiJcL2ZcL2NiYTU0MjcxLTcwZjktNDlkZi1iZGIzLTg2OGYxYmJiZjdmOFwvZGIzZGgxci0xODM1NDhjYy0xZDM4LTQ1ODUtYWUzOS01YTQ1NWZmYzI2NjkuanBnIiwid2lkdGgiOiI8PTI0NzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CJH7BCODrcQn5B2ABuBVt4J9jxMWgd-DVXTl3Gc2LiE"
          }
        />
        <ProductCard
          name={"Tamanduá dourado"}
          price={"R$350.000"}
          image={
            "https://www.portalmissal.com.br/images/blog/main/large/menor-tamandua-do-mundo-cabe-na-palma-da-mao-e-vive-no-brasil.jpg"
          }
        />
        <ProductCard
          name={"Aye-aye"}
          price={"R$550.000"}
          image={
            "https://meusanimais.com.br/wp-content/uploads/2021/04/animal-feio-assustado.jpg"
          }
        />
        <ProductCard
          name={"Raposa Feneco"}
          price={"R$650.000"}
          image={
            "https://t2.ea.ltmcdn.com/pt/posts/3/5/3/o_feneco_como_animal_de_estimacao_20353_600.jpg"
          }
        />
        <ProductCard
          name={"Macaco-narigudo"}
          price={"R$5.000.000"}
          image={
            "https://meusanimais.com.br/wp-content/uploads/2021/04/macaco-narigudo-nasalis-larvatus.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"
          }
        />
        <ProductCard
          name={"Lula-verme"}
          price={"R$6.500.000"}
          image={
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/27022.webp?w=710&h=454"
          }
        />
        <ProductCard
          name={"Lesma ninja de Bornéu"}
          price={"R$8.000.000"}
          image={
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/27185.jpg?w=1600"
          }
        />
        <ProductCard
          name={"Peixe-mão rosa"}
          price={"R$15.000.000"}
          image={
            "https://ogimg.infoglobo.com.br/in/25331649-7eb-3d6/FT1086A/_122493152_pink_handfish_by_karen_gowle.2e16d0ba.fill-1200x600-c100.jpg"
          }
        />
      </div>
    </div>
  );
}
